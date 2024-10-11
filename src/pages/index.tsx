import { Typography, Grid2 as Grid, Link } from "@mui/material";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Grid container spacing={2}>
        <Grid offset={1} size={10}>
          <Typography variant="h4">Home Page</Typography>
          <hr />
        </Grid>
        <Grid offset={1} size={10}>
          <Typography variant="body2">Welcome to our Library! To search our library, click <Link href="/search">here.</Link></Typography>
        </Grid>
      </Grid>
    </>
  );
}
