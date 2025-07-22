import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashborad from "../../features/activities/dashborad/ActivityDashborad";
import ActivityForm from "../../features/form/ActivityForm";
import ActivityDetailPage from "../../features/activities/details/ActivityDetailPage";
import Counter from "../../features/form/counter/Counter";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivityDashborad /> },
            { path: 'activities/:id', element: <ActivityDetailPage /> },
            { path: 'createActivity', element: <ActivityForm key='create' /> },
            { path: 'manage/:id', element: <ActivityForm /> },
            { path: 'counter', element: <Counter /> },
        ]
    }
])