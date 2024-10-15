import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function MainCard({ url, heading }) {
  // console.log(url, heading);
  return (
    <Card
      sx={{
        borderRadius: "10px",
        boxShadow: "none",
        "&:hover": {
          boxShadow:
            "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            height="auto"
            image={url.url}
            alt="green iguana"
            sx={{
              // maxWidth: 345,
              transition: "transform 0.9s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Box>
        <CardContent sx={{ margin: "auto", textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            {heading} &nbsp;
            <KeyboardArrowRightIcon />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
