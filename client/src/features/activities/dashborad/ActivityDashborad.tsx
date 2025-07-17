import { Grid } from "@mui/material";
import ActivityLists from "./ActivityLists";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../../form/ActivityForm";

type Props = {
    activities:Activity[]
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivity?: Activity;
    openForm: (id:string) => void;
    closeForm: () => void;
    editMode: boolean;
    submitForm: (activity : Activity) => void
    deleteActivity:(id: string) => void
}

export default function ActivityDashborad({activities, cancelSelectActivity, 
    selectActivity, 
    selectedActivity,
    openForm,
    closeForm,
    editMode,
    submitForm,
    deleteActivity,
}: Props) {
  return (
    <Grid container spacing={3}>
        <Grid size={7}>
            <ActivityLists 
                activities={activities}
                selectActivity = {selectActivity}
                deleteActivity = {deleteActivity}
                ></ActivityLists>
        </Grid>
        <Grid size={5}>
            {   
                selectedActivity && !editMode &&
                <ActivityDetails 
                    activity={selectedActivity}
                    cancelSelectActivity={cancelSelectActivity}
                    openForm={openForm}
                />
            }
            {editMode && 
                <ActivityForm
                    closeForm={closeForm} 
                    activity={selectedActivity}
                    submitForm={submitForm}
                ></ActivityForm>
            }
        </Grid>
    </Grid>
  )
}
