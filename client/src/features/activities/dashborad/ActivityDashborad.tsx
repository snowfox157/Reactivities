import { Grid } from "@mui/material";
import ActivityLists from "./ActivityLists";
import ActivityFilter from "./ActivityFilter";

export default function ActivityDashborad() {
    return (
        <Grid container spacing={3}>
            <Grid size={8}>
                <ActivityLists
                ></ActivityLists>
            </Grid>
            <Grid size={4}>
                <ActivityFilter />
            </Grid>
        </Grid>
    )
}
