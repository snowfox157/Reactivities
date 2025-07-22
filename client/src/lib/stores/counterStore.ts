import { makeAutoObservable } from 'mobx';

export default class CounterStore {
    title = 'Counter store';
    count = 0;
    events:string[] = [
        `Initial count is ${this.count}`
    ];

    constructor() {
        makeAutoObservable(this);
    }
    increment = (amount = 1) => {
        this.count += amount;
        this.events.push(`原本的是${this.count}，相加後結果為${amount}`);
    }
    decrement = (amount = 1) => {
        this.count -= amount;
        this.events.push(`原本的是${this.count}，相減後結果為${amount}`);
    }
    get eventCount(){
        return this.events.length;
    }
}
