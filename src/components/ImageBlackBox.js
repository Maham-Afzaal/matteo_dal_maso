import React from "react";
import {
  ImageList,
  ImageListItem,
  Grid,
  Paper,
  Container,
  Card,
  Box,
} from "@mui/material";
import gallery1 from "../Images/gallery1.jpg";
import gallery2 from "../Images/gallery2.jpg";
import gallery3 from "../Images/gallery3.jpg";
import gallery4 from "../Images/gallery4.jpg";
import gallery5 from "../Images/gallery5.jpg";
import gallery6 from "../Images/gallery6.jpg";
import gallery7 from "../Images/gallery7.jpg";
import gallery8 from "../Images/gallery8.jpg";
import gallery9 from "../Images/gallery9.jpg";
import gallery10 from "../Images/gallery10.jpg";
import gallery11 from "../Images/gallery11.jpg";
import { WidthFull } from "@mui/icons-material";
const itemData = [
  {
    img: gallery1,
    caption: "New Sinfonia",
    description: "Stephen Cain Photography",
  },
  {
    img: gallery2,
    caption: "New Sinfonia",
    description: "Stephen Cain Photography",
    cols: 1,
    rows: 0.5, // Half-height item
  },
  {
    img: gallery3,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
  {
    img: gallery4,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
  {
    img: gallery5,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
  {
    img: gallery6,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
  {
    img: gallery7,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
  {
    img: gallery8,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
  {
    img: gallery9,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
  {
    img: gallery10,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
  {
    img: gallery11,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
];
const ImageBlackBox = () => {
  return (
    <Box className="row">
      <Box className="column">
        <img src={gallery1} style={{ width: "100%" }} />
        <img src={gallery5} style={{ width: "100%" }} />
        <img src={gallery8} style={{ width: "100%" }} />
      </Box>
      <Box className="column">
        <img src={gallery2} style={{ width: "100%" }} />
        <img src={gallery6} style={{ width: "100%" }} />
        <img src={gallery9} style={{ width: "100%" }} />
      </Box>
      <Box className="column">
        <img src={gallery3} style={{ width: "100%" }} />
        <img src={gallery7} style={{ width: "100%" }} />
        <img src={gallery10} style={{ width: "100%" }} />
      </Box>
      <Box className="column">
        <img src={gallery4} style={{ width: "100%" }} />
        <img src={gallery11} style={{ width: "100%" }} />
      </Box>
    </Box>
  );
};

export default ImageBlackBox;
