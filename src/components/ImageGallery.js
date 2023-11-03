import React from "react";
import {
  ImageList,
  ImageListItem,
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
const itemData = [
  {
    cols: 1,
    rows: 1,
    img: gallery1,
    caption: "Image 1",
  },
  {
    cols: 1,
    rows: 1,
    img: gallery2,
    caption: "Image 2",
  },
  {
    cols: 1,
    rows: 1,
    img: gallery3,
    caption: "Image 1",
  },
  {
    cols: 1,
    rows: 3,
    img: gallery4,
    caption: "Image 2",
  },
  {
    cols: 1,
    rows: 1,
    img: gallery5,
    caption: "Image 1",
  },
  {
    cols: 1,
    rows: 1,
    img: gallery6,
    caption: "Image 2",
  },
  {
    cols: 1,
    rows: 1,
    img: gallery7,
    caption: "Image 1",
  },
  {
    cols: 1,
    rows: 2,
    img: gallery8,
    caption: "Image 2",
  },
  {
    cols: 1,
    rows: 1,
    img: gallery9,
    caption: "Image 2",
  },
  {
    cols: 1,
    rows: 1,
    img: gallery11,
    caption: "Image 2",
  },
];

const image = {
  position: "relative",
  overflow: "hidden",
  "&:hover $overlay": {
    opacity: 1,
  },
};

const overlay = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  color: "white",
  opacity: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "opacity 0.3s",
};
const imageCaption = {
  textAlign: "center",
};

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageGallery = () => {
  return (
    <div style={{padding:'24px'}}>
      <ImageList
        variant="quilted"
        cols={4}
        gap={8}
        // rowHeight={150}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows  || 1}
          >
            <img
              // {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.caption}
              src={item.img}
              style={{width:'100%'}}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ImageGallery;
