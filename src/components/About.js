import { Box } from '@mui/material'
import React from 'react'
import clsx from 'clsx';
import './styling.css';
import about from './Images/About.jpg';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Typography from '@mui/material/Typography';
import LayoutHome from '../LayoutHome';
const About = () => {
  const iconStyles = {
    backgroundColor: "white",
    borderRadius: "50%",
    padding: "8px", // Adjust as needed
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    margin:1,
  };
  return (
    <LayoutHome>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <Box className='aboutContainer' sx={{padding:'2rem'}}>
                <Box className='aboutImg'>
                  <img src={about}/>
                </Box>
                <Box className='boxText'>
                    <p className='text-white'><b>Matteo Dal Maso </b>is an Italian symphonic and opera conductor. He is 1st prize winner of the  5th Athens International Conducting Competition and Audience prize winner of the Orchestra di Padova e del Veneto International Conducting Competition "Peter Maag".</p>
                    <br/>
                    <p className='text-white'>Matteo gained his international reputation conducting many professional orchestras including The Hallé, Manchester Camerata, Northern Ballet, Romanian Chamber Orchestra, Dallas Winds, Orchestra Filarmonica Salernitana, Orchestra di Padova e del Veneto, Lithuanian State Symphony Orchestra, Orquesta Filarmónica de Gran Canaria, Athens Philharmonia Orchestra, Royal Liverpool Philharmonic Youth Orchestra, and Beogradski Simfoničari. In June 2021, Matteo made his Opera debut conducting Carmen at the JK Tyl Theater in Pilsen (CZ).</p>
                    <br/>
                    <p className='text-white'>He has been selected to join several masterclasses around the world held by Jorma Panula, Neeme Järvi, Paavo Järvi, Kristian Järvi, Cristian Măcelaru, Daniel Oren, Sir Mark Elder, Colin Metters, Michael Sanderling, Sebastian Lang-Lessing, Michalis Economou, Mark Chichon, Mark Shapiro, Isaac Karabtchevsky, Leonid Grin, Marco Angius, and Marco Zuccarini. </p>
                    <br/>
                    <p className='text-white'>During his studies in the UK, Matteo has been assisting the BBC Philharmonic and Royal Liverpool Philharmonic working  with conductors such as John Storgards, Sir Andrew Davis, Elena Schwarz, Antony Hermus and Mark Wigglesworth. In the current season, Matteo has debuted with the Nottingham Philarmonic and the Orchestra di Padova e del Veneto and he has worked with Domingo Hindoyan assisting the opera production of "Gianni Schicchi" with Sir Bryn Terfel the Royal Liverpool Philarmonic.</p>
                    <br/>
                    <p className='text-white'>Besides his conducting activities, Matteo is also known as a refined composer. His chamber music works have been performed in important venues such as the Bolshoi Theater in Moscow, Teatro Comunale in Bologna, Teatro Carignano in Torino, and the Bernie Wohl Music Center in Manhattan, NYC.</p>
                    <br/>
                    <p className='text-white'></p>
                </Box>
            </Box>
        </Box>
        {/* <Box sx={{p:'1rem',display: 'flex', justifyContent: 'center',}}>
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
        <Box className='boxCopyright'>
        <Typography variant="subtitle2" className={clsx("text-white")}>
            @2022MahamAfzaal
        </Typography>
      </Box> */}

    </LayoutHome>
  )
}

export default About