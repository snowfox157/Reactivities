import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import NavBar from "./NavBar";
import ActivityDashborad from "../../features/activities/dashborad/ActivityDashborad";
function App() {
  // const title = 'Welcome to Reactivites'
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5120/api/activities')
      .then(response => setActivities(response.data))

    return () => { }
  }, [])

  const handleSelectActivity = (id: string) => {
    setSelectActivity(activities.find(x => x.id === id));
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
  const handleSubmitForm = (activity: Activity) => {
    if(activity.id) {
      setActivities(activities.map(x => x.id === activity.id ? activity : x))
      setSelectActivity(activity);
      console.log(activity);
    } else {
      const newActivity = {...activity, id: activities.length.toString()}
      setSelectActivity(newActivity)
      setActivities([...activities, newActivity])
    }
    setEditMode(false);
  }

  const handleDelete = (id: string) => {
    setActivities(activities.filter(x=> x.id !== id))
  }
  return (
    <Box sx={{bgcolor: "#eeeeee"}}>
      <CssBaseline />
      <NavBar openForm ={handleOpenForm} />
      <Container maxWidth='xl' sx={{mt: 3}}>
        <ActivityDashborad 
          activities={activities}
          selectActivity = {handleSelectActivity}
          cancelSelectActivity = {handleCancelSelectedActivity}
          selectedActivity = {selectedActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleFormClose}
          submitForm={handleSubmitForm}
          deleteActivity={handleDelete}
        />
      </Container>
    </Box>
  )
}

export default App
