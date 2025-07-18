import { Grid } from "@mui/material";
import ActivityLists from "./ActivityLists";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../../form/ActivityForm";

type Props = {
    activities: Activity[]
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivity?: Activity;
    openForm: (id: string) => void;
    closeForm: () => void;
    editMode: boolean;
}

export default function ActivityDashborad({ activities, cancelSelectActivity,
    selectActivity,
    selectedActivity,
    openForm,
    closeForm,
    editMode,
}: Props) {
    return (
        <Grid container spacing={3}>
            <Grid size={7}>
                <ActivityLists
                    activities={activities}
                    selectActivity={selectActivity}
                ></ActivityLists>
            </Grid>
            <Grid size={5}>
                {
                    selectedActivity && !editMode &&
                    <ActivityDetails
                        selectedActivity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}
                    />
                }
                {editMode &&
                    <ActivityForm
                        closeForm={closeForm}
                        activity={selectedActivity}
                    ></ActivityForm>
                }
            </Grid>
        </Grid>
    )
}
