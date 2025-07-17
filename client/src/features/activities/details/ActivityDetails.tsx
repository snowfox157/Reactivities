import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
    activity: Activity
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({activity, cancelSelectActivity, openForm}: Props) {
    console.log(activity);
  return (
    <Card sx={{borerRRadius: 3}}>
        <CardMedia 
            component='img' 
            src={`/images/categoryImages/${activity.category}.jpg`}>
        </CardMedia>
        <CardContent>
            <Typography variant="h5">{activity.title}</Typography>
            <Typography variant="subtitle1" fontWeight='light'>{activity.date}</Typography>
            <Typography variant="body1">{activity.description}</Typography>
        </CardContent>
        <CardActions>
            <Button onClick={()=> openForm(activity.id)} color="primary">Edit</Button>
            <Button onClick={cancelSelectActivity} color="inherit">Cancel</Button>
        </CardActions>

    </Card>
  )
}
