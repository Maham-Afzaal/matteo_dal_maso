import React from "react";
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
import LayoutHome from "../LayoutHome";

const itemData = [
  {
    img: gallery1,
    caption: "New Sinfonia",
    description: "Stephen Cain Photography",
  },
  {
    img: gallery5,
    caption: "New Sinfonia",
    description: "Stephen Cain Photography",
    cols: 1,
    rows: 0.5,
  },
  {
    img: gallery8,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
  {
    img: gallery2,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
  {
    img: gallery6,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
  {
    img: gallery9,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
  {
    img: gallery3,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
  {
    img: gallery7,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
  {
    img: gallery10,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
  {
    img: gallery4,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
  {
    img: gallery11,
    caption: "Orchestra di Padova e del Veneto",
    description: "Ph. Eliseo Arcifà",
  },
];



const MyImageList = () => {
  return (
    <LayoutHome>
      <div style={{padding:'24px'}}>
        <div className="imageStyles">
          {itemData.map((image, index) => (
            <div key={index}>
              <img
                src={image.img}
                style={{ width: "100%", height: "100%" }}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </LayoutHome>
  );
};

export default MyImageList;
