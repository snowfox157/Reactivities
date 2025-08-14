import { useForm } from "react-hook-form";
import { useAccount } from "../../lib/hooks/useAccount"
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Paper, Typography } from "@mui/material";
import { LockOpen } from "@mui/icons-material";
import TextInput from "../../app/shared/components/TextInput";
import { Link } from "react-router";
import { registerSchema, RegisterSchema } from "../../lib/schemas/registerSchemas";

export default function RegisterForm() {
    const { registerUser } = useAccount();
    const { control, handleSubmit, setError, formState: { isValid, isSubmitting } } = useForm<RegisterSchema>({
        mode: 'onTouched',
        resolver: zodResolver(registerSchema)
    });

    const onSubmit = async (data: RegisterSchema) => {
        await registerUser.mutateAsync(data, {
            onError: (error) => {
                console.log(error);
                if (Array.isArray(error)) {
                    error.forEach(err => {
                        // if (err.includes('Username')) setError('email', { message: err }); // 後端使用username作為key，前端進行調整
                        if (err.includes('Username')) setError('email', { message: "Email is already taken." });
                        else if (err.includes('Password')) setError('password', { message: err })
                    })
                }
            }
        });
    }

    return (
        <Paper
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 3,
                gap: 3,
                maxWidth: 'md',
                mx: 'auto',
                borderRadius: 3
            }}
        >
            <Box display='flex' alignItems='center' justifyContent='center'
                gap={3} color='secondary.main'>
                <LockOpen fontSize="large"></LockOpen>
                <Typography variant="h4">Register</Typography>
            </Box>
            <TextInput label='Email' control={control} name='email'></TextInput>
            <TextInput label='Display name' control={control} name='displayName'></TextInput>
            <TextInput type="password" label='Password' control={control} name='password'></TextInput>
            <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                variant="contained"
                size="large"
            >
                Register
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
                Already have an account?
                <Typography sx={{ ml: 2 }} component={Link} to='/login' color="primary">
                    Sign in
                </Typography>
            </Typography>
        </Paper>
    )
}
