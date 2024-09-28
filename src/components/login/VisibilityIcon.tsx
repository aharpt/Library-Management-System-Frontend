"use client";
import { InputAdornment } from "@mui/material";

interface VisibilityIconProps {
  toggleVisibility: () => void;
  icon: React.ReactNode;
}

export default function VisibilityIcon({
  toggleVisibility,
  icon,
}: VisibilityIconProps) {
  return (
    <InputAdornment
      onClick={toggleVisibility}
      position="end"
      sx={{ cursor: "pointer" }}
    >
      {icon}
    </InputAdornment>
  );
}
