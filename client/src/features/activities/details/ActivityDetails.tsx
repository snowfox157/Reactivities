import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { activity, isLoadingActivity } = useActivities(id);

    if (isLoadingActivity) return <Typography>Loading....</Typography>

    if (!activity) return <Typography>Activity not found</Typography>

    return (
        <Card sx={{ borerRRadius: 3 }}>
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
                <Button component={Link} to={`/manage/${activity.id}`} color="primary">Edit</Button>
                <Button onClick={() => navigate('/activities')} color="inherit">Cancel</Button>
            </CardActions>

        </Card>
    )
}
