import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react"
import NavBar from "./NavBar";
import ActivityDashborad from "../../features/activities/dashborad/ActivityDashborad";
import { useActivities } from "../../lib/hooks/useActivities";
function App() {
  const [selectedActivity, setSelectActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const { activities, isPending } = useActivities();


  const handleSelectActivity = (id: string) => {
    setSelectActivity(activities!.find(x => x.id === id));
  }

  const handleCancelSelectedActivity = () => {
    setSelectActivity(undefined);
  }

  const handleOpenForm = (id?: string) => {
    if(id) handleSelectActivity(id);
      else handleCancelSelectedActivity();
      setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }
  return (
    <Box sx={{bgcolor: "#eeeeee", minHeight: "100vh"}}>
      <CssBaseline />
      <NavBar openForm ={handleOpenForm} />
      <Container maxWidth='xl' sx={{mt: 3}}>
        {!activities || isPending ? (
          <Typography>Loading...</Typography>
        ) : (
          <ActivityDashborad 
            activities={activities}
            selectActivity = {handleSelectActivity}
            cancelSelectActivity = {handleCancelSelectedActivity}
            selectedActivity = {selectedActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleFormClose}
          />
        )}
      </Container>
    </Box>
  )
}

export default App
