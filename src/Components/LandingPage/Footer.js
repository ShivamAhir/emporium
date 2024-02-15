import React from 'react'
import { Stack,Box,Typography,Avatar } from '@mui/material'
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <Stack sx={{bgcolor:'gray',color:'white'}}>
            <Stack direction={'row'} sx={{display:'flex',justifyContent:'center',marginTop:'40px',marginBottom:'30px'}} gap={10}>
                <Stack sx={{width:'500px'}} gap={5}>
                    <Stack direction={'row'} gap={2}>
                    <Box sx={{width:"50px", height:"50px"}} > 
                    <DinnerDiningOutlinedIcon sx={{ width: "100%", height: "100%" }}  />
                    </Box>
                        <Typography variant='h3' sx={{fontWeight:'600',fontFamily:'cursive'}}>
                        Emporium
                        </Typography>
                    </Stack>
                    <Stack >
                        <Typography variant='h6'>
                            In the era of new Technology we look a future with certainity and pride to our company
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} gap={5}>
                        <Avatar style={{ backgroundColor: '#ff0000' }}>
                            <FacebookOutlinedIcon />
                        </Avatar>
                        <Avatar style={{ backgroundColor: '#ff0000' }}>
                            <InstagramIcon/>
                        </Avatar>
                        <Avatar style={{ backgroundColor: '#ff0000' }}>
                            <TwitterIcon/>
                        </Avatar>
                    </Stack>
                    
                    
                </Stack>
                <Stack sx={{width:'500px'}} gap={3}>
                    <Typography variant='h4' sx={{fontWeight:'600'}}>
                        Pages
                    </Typography>
                    <Typography variant='h6'>
                        Home
                    </Typography>
                    <Typography variant='h6'>
                        About
                    </Typography>
                    <Typography variant='h6'>
                        Menu
                    </Typography>
                    <Typography variant='h6'>
                        Contact
                    </Typography>
                </Stack>
                <Stack sx={{width:'500px'}} gap={3}>
                    <Typography variant='h4' sx={{fontWeight:'600'}}>
                        Follow Us On Instagram
                    </Typography>
                   <Stack  gap={3}>
                   <Stack direction={'row'} gap={2}>
                        <Stack sx={{width:'250px'}}>
                            <img src='https://img.freepik.com/premium-photo/french-fries-sweet-potatoes-with-onion_97105-132.jpg?w=360'/>
                        </Stack>
                        <Stack sx={{width:'230px'}}>
                            <img src='https://content.jdmagicbox.com/comp/def_content/pizza_outlets/default-pizza-outlets-7.jpg'/>
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} gap={2}>
                        <Stack sx={{width:'250px'}}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7BrLBlr5f3E-OfQ8qcp7_wQuraImR5yMxBt4JfSD6ora5ODo_QQCdVH2FCp_ZvRrFheU&usqp=CAU'/>
                        </Stack>
                        <Stack sx={{width:'230px'}}>
                            <img src='https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/fbbacd06e85b9459cc1cb411b07a00ec'/>
                        </Stack>
                    </Stack>
                   </Stack>
                </Stack>
            </Stack>
            <Stack direction={'row'} gap={1} sx={{display:'flex',justifyContent:'center',marginBottom:'20px',marginTop:'20px'}}>
 
                <Stack direction={'row'} gap={1}>
                <Typography>
                    Copyright 
                </Typography>
                <CopyrightOutlinedIcon/>
                <Typography>
                    Emporium. All Right Reserved
                </Typography>
                </Stack>
            </Stack>
        </Stack>
  )
}

export default Footer