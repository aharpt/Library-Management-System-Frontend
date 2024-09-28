"use client";
import { useState, ChangeEvent } from "react";
import { FormGroup, TextField, Button } from "@mui/material";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import VisibilityIcon from "./VisibilityIcon";

type VisibilityType = "on" | "off";
export default function LoginForm() {
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordVisibility, setPasswordVisibility] =
    useState<VisibilityType>("off");

  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length > 0) {
      setIsUsernameValid(true);
    } else if (isUsernameValid) {
      setIsUsernameValid(false);
    }
  };

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length >= 6) {
      setIsPasswordValid(true);
    } else if (isPasswordValid) {
      setIsPasswordValid(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevVal) => (prevVal === "off" ? "on" : "off"));
  };

  return (
    <form>
      <FormGroup>
        <TextField
          onChange={onUsernameChange}
          id="username"
          label="Username"
          variant="outlined"
        />
      </FormGroup>
      <FormGroup sx={{ mt: "25px" }}>
        <TextField
          slotProps={{
            input: {
              endAdornment: (
                <VisibilityIcon
                  toggleVisibility={togglePasswordVisibility}
                  icon={
                    passwordVisibility === "off" ? (
                      <VisibilityOutlined />
                    ) : (
                      <VisibilityOffOutlined />
                    )
                  }
                />
              ),
            },
          }}
          onChange={onPasswordChange}
          id="password"
          label="Password"
          type={passwordVisibility === "off" ? "password" : "text"}
          variant="outlined"
        />
      </FormGroup>
      <FormGroup sx={{ mt: "25px", ml: "auto" }}>
        <Button
          disabled={!isUsernameValid || !isPasswordValid}
          variant="contained"
          size="large"
        >
          Login
        </Button>
      </FormGroup>
    </form>
  );
}
