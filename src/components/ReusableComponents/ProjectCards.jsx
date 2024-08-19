import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

// Utility function to check if URL is a video
const isVideo = (url) => {
  return url.match(/\.(mp4|webm|ogg)$/i);
};

export default function ImgMediaCard({
  image,
  heading,
  description,
  githubLink,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const bulletPoints = description.split(" ");

  return (
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: 480,
          md: 340,
          lg: 480,
        },
        backgroundColor: "#81976F",
        boxShadow: isHovered ? "0px 4px 20px rgba(55, 34, 12, 0.5)" : "none",
        transition: "box-shadow 0.3s ease-in-out"
      }}
    >
      {isVideo(image) ? (
        <CardMedia
          component="video"
          alt={heading}
          sx={{
            height: '200px',
            // maxHeight: '200px',
          }}
          controls
          src={image}
        />
      ) : (
        <CardMedia
          component="img"
          alt={heading}
          sx={{
            height: '200px',
            // maxHeight: '200px',
          }}
          position="fit"
          image={image}
        />
      )}
      <CardContent style={{ height: "200px" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontWeight: "bold", fontFamily:'Quicksand' }}
        >
          {heading}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ margin: "0 10px", fontFamily:'Quicksand' }}
        >
          <p style={{ fontSize: "18px", fontWeight: "700" }}>Technology</p>
          <ul>
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </Typography>
      </CardContent>
      <CardActions
        style={{
          backgroundColor: isHovered ? "#677D6A" : "#9DAF8F",
          transition: "background-color 0.3s ease-in-out",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "5px 100%",
                backgroundColor: isHovered ? "#677D6A" : "#9DAF8F",
                transition: "background-color 0.3s ease-in-out",
              }}
            >
              GitHub
            </a>
          ) : null}
        </Box>
      </CardActions>
    </Card>
  );
}
