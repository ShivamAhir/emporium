import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack ,Box,Button,Typography} from '@mui/material'
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
const Header = () => {
    const [curButton,setCurButton]=useState("home");
  return (
    
        <Stack direction="row" alignItems="center">
            <Box >
                <Stack direction={"row"} alignItems="center" gap={2} sx={{marginLeft:'100px',padding:'10'}}>
                    <Box sx={{width:"100px", height:"100px"}} > 
                    <DinnerDiningOutlinedIcon sx={{ width: "100%", height: "100%" }}  />
                    </Box>
                    <Typography variant='h2' sx={{fontWeight:'600',fontFamily:'cursive', }}>Emporium</Typography>
                </Stack>
            </Box>
            <Box  direction="row"  sx={{position:'absolute',marginLeft:'38%'}}>
                <Stack sx={{ width: "500px" }} direction="row" spacing={3} >
                    <Button 
                        variant={curButton==='home'?'contained':'outlined'} 
                        size="large" 
                        color='error' 
                        onClick={()=>{setCurButton('home')}}
                        component={Link} to='/'
                        >
                        Home
                    </Button>
                    <Button 
                        variant={curButton==='about'?'contained':'outlined'} 
                        size="large" 
                        color='error'
                        onClick={()=>setCurButton('about')}
                        component={Link} to="/about"
                        >
                        About
                    </Button>
                    <Button 
                        variant={curButton==='menu'?'contained':'outlined'} 
                        size="large" 
                        color='error'
                        onClick={()=>{setCurButton('menu')}}
                        component={Link} to='menupage'
                        >
                        Menu
                    </Button>
                    <Button 
                        variant={curButton==='contact'?'contained':'outlined'} 
                        size="large" 
                        color='error'
                        onClick={()=>{setCurButton('contact')}}
                        component={Link} to='contactpage'>
                        Contact
                    </Button>
                </Stack>
            </Box>
            <Box sx={{ width: '200px',position:'absolute',right:'100px'}}>
                <Button variant='contained' size="large" color='error'>Book A Table</Button>
            </Box>
            <Box sx={{position:'absolute',right:'30px'}}>
                <Button variant='contained' color='error' ><FormatListBulletedIcon sx={{width:'30px',height:'30px'}}/></Button>
            </Box>
        </Stack>

  )
}

export default Header