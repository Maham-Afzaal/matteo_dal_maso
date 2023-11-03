import React, { useState,useEffect} from 'react'
import { AppBar,Button,IconButton,Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import './styling.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const RNavbar = () => {
    const [click,setClick]=useState(false);
    const handleClick=()=>{
        setClick(!click);
    }
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      // Use setTimeout to add the 'loaded' class after 1 second
      const timeout = setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
  
      // Cleanup the timeout to avoid memory leaks
      return () => clearTimeout(timeout);
    }, []);
    
  return (
    <Box  sx={{backgroundColor:'#000000',}}>
    <Box className={`widget--animation-fade ${isLoaded ? 'loaded' : ''} `}>
        <AppBar sx={{backgroundColor:'black',position:'relative'}} elevation={0}>
            <Toolbar sx={{display:'flex', justifyContent:'space-between',padding:'1.5rem'}}>
                <Box>
                    <Typography variant='h4' sx={{fontSize:{xs:'1.5rem'},fontWeight:'800'}}>Matteo Dal Maso</Typography>
                </Box>
                <Box className={click? 'boxRow':'boxNo'}>
                <Button sx={{border:'none',color:'white','&:hover':{backgroundColor:'transparent'}}} disableRipple><Link to="/about"> About</Link></Button>
                <Button sx={{border:'none',color:'white','&:hover':{backgroundColor:'transparent'}}} disableRipple><Link to="/schedule">Scdeule</Link></Button>
                 <Button sx={{border:'none',color:'white','&:hover':{backgroundColor:'transparent'}}} disableRipple><Link to="/images">Gallery</Link></Button>
                <Button sx={{border:'none',color:'white','&:hover':{backgroundColor:'transparent'}}} disableRipple><Link to="/videos"> Video</Link></Button>
               <Button sx={{border:'none',color:'white','&:hover':{backgroundColor:'transparent'}}} disableRipple> <Link to="/contact">  Contact</Link></Button>
                </Box>
                <Box className='menuBtn'>
                    <IconButton onClick={handleClick}>
                        <MenuIcon sx={{fontSize:'2.5rem',color:'white'}}/>
                    </IconButton>
                </Box>

            </Toolbar>
        </AppBar>
    </Box>
    </Box>
  )
}

export default RNavbar