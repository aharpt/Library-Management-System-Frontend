"use client";
import { useState, ChangeEvent } from "react";
import { FormGroup, TextField, Button } from "@mui/material";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import VisibilityIcon from "./VisibilityIcon";
import { saveUser } from "@/actions/route";
import { useUserStore } from "@/stores/useUserStore";

type VisibilityType = "on" | "off";

type InputType = {
  username: string,
  password: string,
};


export default function LoginForm() {
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordVisibility, setPasswordVisibility] =
    useState<VisibilityType>("off");
  const [inputs, setInputs] = useState<InputType>({
    username: "",
    password: "",
  });

  const {id, setId} = useUserStore();

  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputs(prevVal => ({...prevVal, username: value}));
    if (value.length > 0) {
      setIsUsernameValid(true);
    } else if (isUsernameValid) {
      setIsUsernameValid(false);
    }
  };

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputs(prevVal => ({...prevVal, password: value}));
    if (value.length >= 6) {
      setIsPasswordValid(true);
    } else if (isPasswordValid) {
      setIsPasswordValid(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevVal) => (prevVal === "off" ? "on" : "off"));
  };

  const login = async () => {
    // await saveUser(String(id), inputs.username, inputs.password);
    setId();
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
          onClick={login}
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
