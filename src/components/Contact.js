import React from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import LayoutHome from "../LayoutHome";
const Contact = () => {
  // const styles = {
  //     textField: {
  //       '& label.Mui-focused': {
  //         color: 'transparent', // No color when focused
  //       },
  //       '& .MuiInputBase-input': {
  //         color: 'white', // Text color
  //       },
  //       '& .MuiInput-underline:after': {
  //         borderBottomColor: 'transparent', // No underline color when focused
  //       },
  //       '& .MuiOutlinedInput-root': {
  //         '& fieldset': {
  //           borderColor: 'white', // Border color
  //         },
  //         '&:hover fieldset': {
  //           borderColor: 'white', // Border color on hover
  //         },
  //         '&.Mui-focused fieldset': {
  //           borderColor: 'transparent', // No border color when focused
  //         },
  //       },
  //     },
  //   };
  const [inputValue, setInputValue] = useState(""); // State to manage input value
  const [inputMessage, setInputMessage] = useState(""); // State to manage input value

  const handleChange = (event) => {
    setInputValue(event.target.value); // Update the input value in state
  };

  const handleMessageChange = (event) => {
    setInputMessage(event.target.value); // Update the input value in state
  };

  const styles = {
    textField: {
      "& label.Mui-focused": {
        color: "transparent", // No color when focused
      },
      "& .MuiInputBase-input": {
        color: "white", // Text color
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "transparent", // No underline color when focused
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "white", // Border color
          border: "3px solid white",
          borderRadius: 0,
        },
        "&:hover fieldset": {
          borderColor: "white", // Border color on hover
        },
        "&.Mui-focused fieldset": {
          borderColor: "white", // Border color when focused
          borderWidth: 3,
          borderRadius: 0, // Border width when focused
        },
      },
    },
    placeholder: {
      color: "white",
    },
  };
  // const styles = {
  //     textField: {
  //       '& label': {
  //         color: 'white', // Text color
  //       },
  //       '& .MuiInputBase-input': {
  //         color: 'white', // Text color
  //       },
  //       '& .MuiOutlinedInput-root': {
  //         '& fieldset': {
  //           borderColor: 'white', // Border color
  //           borderWidth: 4, // Border width
  //         },
  //         '&:hover fieldset': {
  //           borderColor: 'white', // Border color on hover
  //         },
  //       },
  //     },
  //   };
  const containerStyles = {
    display: "flex",
    flexWrap: "wrap",
    alignItems:'center',
    justifyContent:'center',
    
  };

  const boxStyles = {
    zIndex:'2',
    width: "100%", 
    padding:'10px',  
    "@media (min-width: 700px)": {
      width: "50%",
      padding: '24px',
    },
  };

  return (
    <LayoutHome>
      <Box className="ContactImg" sx={{position:'relative'}}>
        <Box sx={{ padding: 3 }}>
          <Box sx={containerStyles}>
          <Box className="overlay"></Box>
            <Box sx={boxStyles}>
              <FormControl fullWidth>
                <Typography
                  variant="h5"
                  sx={{ color: "white" }}
                  className="boxLabel"
                >
                  Email
                </Typography>
                <TextField
                  type="email"
                  margin="normal"
                  value={inputValue}
                  onChange={handleChange}
                  sx={styles.textField}
                  placeholder="info@gmail.com"
                ></TextField>

                <Typography
                  variant="h5"
                  sx={{ color: "white" }}
                  className="boxLabel"
                >
                  Message
                </Typography>
                <TextField
                  multiline
                  type="text"
                  rows={5}
                  margin="normal"
                  value={inputMessage}
                  onChange={handleMessageChange}
                  sx={styles.textField}
                ></TextField>
              </FormControl>
              <Button
                variant="conatined"
                sx={{
                  color: "white",
                  border: "3px solid white",
                  fontSize: "1rem",
                  padding: "10px 22px",
                  fontWeight: "bold",
                  borderRadius: 0,
                }}
              >
                Send
              </Button>
            </Box>
            <Box sx={boxStyles}>
              <Box className="flex flex-col gap-5">
                <Typography
                  variant="h3"
                  sx={{ color: "white" }}
                  className="boxLabe "
                >
                  Contact Me
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "white" }}
                  className="boxLabe"
                >
                  United Kingdom
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "white" }}
                  className="boxLabe"
                >
                  E-mail
                </Typography>
                <Box
                  sx={{ color: "white" }}
                  className="boxLabe"
                  component="a"
                  href="mailto:info@matteodalmaso.com"
                >
                  info@matteodalmaso.com
                </Box>
                <Typography
                  variant="h5"
                  sx={{ color: "white", fontSize: "1rem" }}
                  className="boxLabe"
                >
                  Telephone
                </Typography>
                <Box
                  sx={{ color: "white", fontSize: "1rem" }}
                  className="boxLabe"
                  component="a"
                  href="tel:(+39) 3403125279"
                >
                  (+39) 3403125279
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </LayoutHome>
  );
};

export default Contact;
