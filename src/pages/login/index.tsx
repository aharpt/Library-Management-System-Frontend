"use client";

import { useState } from "react";
import { Grid2 as Grid, Typography, Paper, Link } from "@mui/material";
import NavBar from "@/components/NavBar";
import LoginForm from "@/components/login/LoginForm";
import RegisterForm from "@/components/login/RegisterForm";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

type FormType = "login" | "register";

export default function Login() {
  const [formType, setFormType] = useState<FormType>("login");

  const toggleFormType = () => {
    if (formType === "login") {
      setFormType("register");
    } else {
      setFormType("login");
    }
  };

  return (
    <>
      <NavBar />
      <Grid container spacing={2}>
        <Grid offset={1} size={10}>
          <Typography variant="h4">Login/Signup</Typography>
          <hr />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: "35px" }}>
        <Grid size={6} offset={3}>
          <Paper elevation={3} sx={{ p: "25px" }}>
            <Typography variant="h5">
              {formType === "login" ? "Log In:" : "Register:"}
            </Typography>
            <hr style={{ marginBottom: "25px" }} />
            {formType === "login" ? <LoginForm /> : <RegisterForm />}
            <Grid container sx={{ mt: "25px" }}>
              <Grid
                size={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Link onClick={toggleFormType} sx={{ cursor: "pointer" }}>
                  {formType === "login"
                    ? "Don't have an account? Register now."
                    : "Already have an account? Sign in now."}
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
