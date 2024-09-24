import {
  Grid2 as Grid,
  Typography,
  Paper,
} from "@mui/material";
import NavBar from "@/components/NavBar";
import LoginForm from "@/components/login/LoginForm";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Login() {
  return (
    <>
      <NavBar />
      <Grid container spacing={2}>
        <Grid offset={1} size={10}>
          <Typography variant="h2">Login/Signup</Typography>
          <hr />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{mt: '35px'}}>
        <Grid size={6} offset={3}>
          <Paper elevation={3} sx={{p: '25px'}}>
            <Typography variant="h5">Log In:</Typography>
            <hr style={{marginBottom: '25px'}} />
            <LoginForm />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
