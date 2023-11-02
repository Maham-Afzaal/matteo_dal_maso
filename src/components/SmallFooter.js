import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import clsx from "clsx";

const iconStyles = {
    backgroundColor: "white",
    borderRadius: "50%",
    padding: "8px", // Adjust as needed
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    margin:1,
  };
const SmallFooter = () => {
  return (
    <div>
        <Box textAlign='center' sx={{padding:'20px'}}>
            <Box sx={iconStyles}>
              <FacebookIcon />
            </Box>
            <Box sx={iconStyles}>
              <InstagramIcon />
            </Box>
            <Box sx={iconStyles}>
              <TwitterIcon />
            </Box>
            <Box sx={iconStyles}>
              <YouTubeIcon />
            </Box>
          </Box>
           <Box className='boxCopyright'>
        <Typography variant="subtitle2" className={clsx("text-white")}>
            @2022MahamAfzaal
        </Typography>
      </Box>
    </div>
  )
}

export default SmallFooter