import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProfile } from "../../lib/hooks/useProfile";
import TextInput from "../../app/shared/components/TextInput";
import { editProfileSchema, EditProfileSchema } from "../../lib/schemas/editProfileSchemas";
import { useEffect } from "react";
import { useParams } from "react-router";

type Props = {
    setEditMode: (editMode: boolean) => void;
}

export default function ProfileEdit({ setEditMode }: Props) {
    const { id } = useParams();
    const { updateProfile, profile } = useProfile(id);

    const { control, handleSubmit, reset, formState: { isDirty, isValid } } = useForm<EditProfileSchema>({
        mode: 'onTouched',
        resolver: zodResolver(editProfileSchema)
    })

    const onSubmit = (data: EditProfileSchema) => {
        updateProfile.mutate(data, {
            onSuccess: () => setEditMode(false)
        });
    }

    useEffect(() => {
        reset({
            displayName: profile?.displayName,
            bio: profile?.bio || ''
        });
    }, [profile, reset]);

    return (
        <Box component='form' onSubmit={handleSubmit(onSubmit)}>
            <TextInput sx={{ mt: 3 }} label='Display Name' control={control} name='displayName' />
            <TextInput sx={{ mt: 3, mb: 3 }} label='Bio' control={control} name='bio' multiline rows={5} />
            <Box textAlign="end">
                <Button
                    type="submit"
                    color="success"
                    variant="contained"
                    disabled={!isValid || !isDirty || updateProfile.isPending}
                >
                    Update profile
                </Button>
            </Box>
        </Box>
    )
}
