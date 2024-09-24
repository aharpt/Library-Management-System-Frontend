"use client";
import { useState, ChangeEvent } from "react";
import { FormGroup, TextField, Button, Grid2 as Grid, Link } from "@mui/material";

export default function LoginForm() {
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const onUsernameChange = (event : ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        if (value.length > 0) {
            setIsUsernameValid(true);
        } else if (isUsernameValid) {
            setIsUsernameValid(false);
        }
    }

    const onPasswordChange = (event : ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        if (value.length >= 6) {
            setIsPasswordValid(true);
        } else if (isPasswordValid) {
            setIsPasswordValid(false);
        }
    } 

    return (
        <form>
              <FormGroup>
                <TextField onChange={onUsernameChange} id="username" label="Username" variant="outlined" />
              </FormGroup>
              <FormGroup sx={{mt: '25px'}}>
                <TextField onChange={onPasswordChange} id="password" label="Password" type="password" variant="outlined" />
              </FormGroup>
              <FormGroup sx={{mt: '25px', ml: 'auto'}}>
                  <Button disabled={!isUsernameValid || !isPasswordValid} variant="contained" size="large">Login</Button>
              </FormGroup>
              <Grid container sx={{mt: '25px'}}>
                <Grid size={12} sx={{display: 'flex', justifyContent: 'center'}}>
                  <Link sx={{cursor: 'pointer'}}>Don't have an account? Register now.</Link>
                </Grid>
              </Grid>
            </form>
    );
}