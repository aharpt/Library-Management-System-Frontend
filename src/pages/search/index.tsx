"use client";

import { useState } from "react";
import {
  Typography,
  Grid2 as Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import { ClearOutlined, SearchOutlined } from "@mui/icons-material";
import NavBar from "@/components/NavBar";

type TempDataType = {
  title: string;
  author: string;
  description: string;
  format: string;
};

const tempData: TempDataType[] = [
  {
    title: "Pilgrim's Progress",
    author: "John Bunyan",
    description:
      "A 1678 Christian allegory by John Bunyan about a man's journey from sin to salvation.",
    format: "book",
  },
  {
    title: "Grace Abounding to the Chief of Sinners",
    author: "John Bunyan",
    description:
      "A Puritan spiritual autobiography written by John Bunyan. It was composed while Bunyan was serving a twelve-year prison sentence in Bedford jail for preaching without a licence, and was first published in 1666.",
    format: "book",
  },
];

type IconToShowType = "search" | "clear";
export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const [iconToShow, setIconToShow] = useState<IconToShowType>("search");
  const [filteredData, setFilteredData] = useState<TempDataType[]>(tempData);

  const onSearch = () => {
    setFilteredData((data) =>
      data.filter(
        (item) =>
          item.title.includes(inputValue) || item.author.includes(inputValue),
      ),
    );
    setIconToShow("clear");
  };

  const onClear = () => {
    setInputValue("");
    setFilteredData(tempData);
    setIconToShow("search");
  };

  const renderIcon = (): React.ReactNode => {
    if (iconToShow === "search") {
      return <SearchOutlined onClick={onSearch} sx={{ cursor: "pointer" }} />;
    } else {
      return <ClearOutlined onClick={onClear} sx={{ cursor: "pointer" }} />;
    }
  };

  return (
    <>
      <NavBar />
      <Grid container spacing={2}>
        <Grid offset={1} size={10}>
          <Typography variant="h4">Browse our Library</Typography>
          <hr />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: "15px", mb: "35px" }}>
        <Grid offset={1} size={10}>
          <TextField
            slotProps={{
              input: {
                endAdornment: renderIcon(),
              },
            }}
            id="search"
            label="Search by title/author"
            type="text"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={1}></Grid>
        {filteredData.map((item, idx) => (
          <Grid key={`item_${idx}`} size={3}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  Format: {item.format}
                </Typography>
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                  Author: {item.author}
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Reserve</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
