import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
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
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "black",}}>
      <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'}}} className='shadowCenter'>
        <Box className="boxFooter" sx={{width:{xs:'100%',sm:'100%',md:'25%',lg:'25%'},p:'1rem'}}>
          <Typography variant="h5" className={clsx("text-white")}>
            Welcome to the website of conductor Matteo Dal Maso
          </Typography>
        </Box>
        <Box sx={{width:{xs:'100%',sm:'100%',md:'25%',lg:'25%'},p:'1rem'}}>
          <Typography variant="h5" className={clsx("text-white")}>
            Social
          </Typography>
          <Box>
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
        </Box>
        <Box sx={{width:{xs:'100%',sm:'100%',md:'25%',lg:'25%'},p:'1rem'}}>
          <Typography variant="h5" className={clsx("text-white")}>
            Email
          </Typography>
          <Typography variant="body1" className={clsx("text-white")}>
            info@matteodalmaso.com
          </Typography>
        </Box>
        <Box sx={{width:{xs:'100%',sm:'100%',md:'25%',lg:'25%'},p:'1rem'}}>
          <Typography variant="h5" className={clsx("text-white")}>
            PHONE CONTACT
          </Typography>
          <Typography variant="body1" className={clsx("text-white")}>
            (+39) 3403125279
          </Typography>
        </Box>
      </Box>
      <Box className='boxCopyright'>
        <Typography variant="subtitle2" className={clsx("text-white")}>
            @2022MahamAfzaal
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
