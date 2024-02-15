import React from 'react'
import { Stack,Typography,Box,Avatar } from '@mui/material'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CallIcon from '@mui/icons-material/Call';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import TableChartIcon from '@mui/icons-material/TableChart';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
const About = () => {
  return (
    
    <Box>
        <Stack sx={{marginTop:'50px',marginBottom:'20px',bgcolor:'#FEF9E7',height:'600px',display:'flex',alignItems:'center',justifyContent:'center'}} direction={'row'} gap={30}>
            <Stack sx={{width:'650px'}}>
                <img sx={{width:'100%',objectFit:'cover'}} src='https://images.herzindagi.info/image/2018/Feb/shahi-paneer-recipe-.jpg'/>
                
                 <Stack sx={{width:'400px',height:'220px',bgcolor:'grey',color:'white',position:'absolute' ,marginTop:'330px',marginLeft:'380px',borderRadius:'10px',display:'flex',alignItems:"center",justifyContent:'center',flexDirection:'column'}}>
                    <Stack gap={2}>
                    <Typography variant='h4' sx={{fontWeight:600}}>Come and visit us</Typography>
                   
                    <Stack direction={'row'} gap={1}>
                        <CallIcon /> <Typography  >(+91) 7701891010</Typography>
                    </Stack >
                    <Stack direction={'row'} gap={1}>
                        <MailOutlinedIcon/>
                    <Typography>happytummy@emporium.com</Typography>
                    </Stack>
                    <Stack direction={'row'} gap={1}>
                        <RoomOutlinedIcon/>
                    <Typography>7778, nit kurukshetra, kurukshetra</Typography>
                    </Stack>
                    </Stack>
                </Stack>
            </Stack>
            
            <Stack gap={3}>
                <Typography variant='h2' sx={{width:'600px' ,fontWeight:'400'}}>
                    We Provide healthy food for your family
                </Typography>
                <Typography variant='h5' sx={{width:'600px'}}>
                    Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local root while infusing a global palate.
                </Typography>

            </Stack>
        </Stack>
        <Stack direction={'row'} sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:'100px',height:'250px'}}>
            <Stack direction={'row'} gap={3} sx={{width:'400px'}}>
                <Stack sx={{width:'50px',height:'50px'}}>
                    <FeaturedPlayListIcon  sx={{objectFit:'cover',height:'50px',width:'50px'}} color='error'/>
                </Stack>
                <Stack>
                    <Typography variant='h4' sx={{fontWeight:'600'}}>Multi Cuisine</Typography>
                    <Typography>
                        In the new era of technology we look in future with certainity life
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction={'row'} gap={3} sx={{width:'400px'}}>
                <Stack sx={{width:'50px',height:'50px'}}>
                    <TableChartIcon  sx={{objectFit:'cover',height:'50px',width:'50px'}} color='error'/>
                </Stack>
                <Stack>
                    <Typography variant='h4' sx={{fontWeight:'600'}}>Multi Cuisine</Typography>
                    <Typography>
                        In the new era of technology we look in future with certainity life
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction={'row'} gap={3} sx={{width:'400px'}}>
                <Stack sx={{width:'50px',height:'50px'}}>
                    <AccessAlarmsIcon  sx={{objectFit:'cover',height:'50px',width:'50px'}} color='error'/>
                </Stack>
                <Stack>
                    <Typography variant='h4' sx={{fontWeight:'600'}}>Multi Cuisine</Typography>
                    <Typography>
                        In the new era of technology we look in future with certainity life
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
        <Stack direction={'row'} sx={{display:'flex',justifyContent:'center',marginBottom:'50px',marginTop:'50px'}} gap={30}>
            <Stack gap={5}>
                <Stack sx={{width:'600px'}} gap={4}>
                    <Typography variant='h2' sx={{fontWeight:600}}>
                        A little information for our valuable guest
                    </Typography>
                    <Typography variant='body'>
                        At place, we believe that dining is not just a place about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable events.
                    </Typography>
                </Stack>
                <Stack gap={5} >
                    <Stack direction={'row'} gap={10} >
                         <Stack sx={{bgcolor:'white',height:'180px',width:'250px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'15px'}}>
                            <Typography variant='h3'>
                                3
                            </Typography>
                            <Typography variant='h5'>
                                Location
                            </Typography>
                        </Stack>
                        <Stack sx={{bgcolor:'white',height:'180px',width:'250px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'15px'}}>
                            <Typography variant='h3'>
                                1998
                            </Typography>
                            <Typography variant='h5'>
                                Staff Members
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} gap={10}>
                    <Stack sx={{bgcolor:'white',height:'180px',width:'250px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'15px'}}>
                            <Typography variant='h3'>
                                65+
                            </Typography>
                            <Typography variant='h5'>
                                Staff Members
                            </Typography>
                        </Stack>
                        <Stack sx={{bgcolor:'white',height:'180px',width:'250px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'15px'}}>
                            <Typography variant='h3'>
                                100%
                            </Typography>
                            <Typography variant='h5'>
                                Satisfied Customers
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack sx={{width:'700px',height:'700px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img sx={{width:'100%',objectFit:'cover'}} src='https://media.istockphoto.com/id/1001385858/photo/boyfriend-cutting-onion-and-crying-girlfriend-leaning-on-him-in-kitchen.jpg?s=612x612&w=0&k=20&c=iL8HSDNGlka82ZJVI1qAkk0ZbL0IJU_hT-wMeU7-7wk='/>
            </Stack>
        </Stack>
        <Stack gap={8} sx={{marginTop:'100px',marginBottom:'100px'}}>
            <Stack sx={{display:'flex',alignItems:'center'}}>
                <Typography variant='h2'>
                    What Our Customers Say
                </Typography>
            </Stack>
            <Stack sx={{display:'flex',justifyContent:'center',alignItems:'center'}} direction={'row'} gap={10}>
                <Stack sx={{width:'440px',height:'400px',bgcolor:'#E8E8E8',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center'}} gap={4}>
                    <Stack gap={3} sx={{display:'flex',alignItems:'center'}}>
                        <Typography variant='h4' color={'error'} sx={{fontWeight:'400',display:'flex',justifyContent:'center'}}>
                            "The best restaurant"
                        </Typography>
                        <Typography sx={{width:'400px',fontWeight:'400'}}>
                        Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} gap={6}>
                        <Stack>
                        <Avatar sx={{ width: '100px', height: '100px' }}>
                            <img src='https://img.freepik.com/free-photo/young-businesswoman-secretary-sitting-desk-working-smiling-looking-camera_1258-104534.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1707177600&semt=ais' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Avatar>
                        </Stack>
                        <Stack sx={{display:'flex',justifyContent:'center'}}>
                            <Typography variant='h6' sx={{fontWeight:600}}>
                                Andy Smith
                            </Typography>
                            <Typography variant='h6'>
                                San Franciso, CA
                            </Typography>
                        </Stack>
                    </Stack>

                </Stack>
                <Stack sx={{width:'440px',height:'400px',bgcolor:'#E8E8E8',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center'}} gap={4}>
                    <Stack gap={3} sx={{display:'flex',alignItems:'center'}}>
                        <Typography variant='h4' color={'error'} sx={{fontWeight:'400',display:'flex',justifyContent:'center'}}>
                            "Simply delicios"
                        </Typography>
                        <Typography sx={{width:'400px',fontWeight:'400'}}>
                        Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} gap={6}>
                        <Stack>
                        <Avatar sx={{ width: '100px', height: '100px' }}>
                            <img src='data:image/jpeg;base64,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' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Avatar>
                        </Stack>
                        <Stack sx={{display:'flex',justifyContent:'center'}}>
                            <Typography variant='h6' sx={{fontWeight:600}}>
                                Matt Cannon
                            </Typography>
                            <Typography variant='h6'>
                                San Diego, CA 
                            </Typography>
                        </Stack>
                    </Stack>

                </Stack>
                <Stack sx={{width:'440px',height:'400px',bgcolor:'#E8E8E8',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center'}} gap={4}>
                    <Stack gap={3} sx={{display:'flex',alignItems:'center'}}>
                        <Typography variant='h4' color={'error'} sx={{fontWeight:'400',display:'flex',justifyContent:'center'}}>
                            "One of a kind restaurant"
                        </Typography>
                        <Typography sx={{width:'400px',fontWeight:'400'}}>
                        The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening.
Highly recommended.
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} gap={6}>
                        <Stack>
                        <Avatar sx={{ width: '100px', height: '100px' }}>
                            <img src='data:image/jpeg;base64,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' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Avatar>
                        </Stack>
                        <Stack sx={{display:'flex',justifyContent:'center'}}>
                            <Typography variant='h6' sx={{fontWeight:600}}>
                                Sophire Robson
                            </Typography>
                            <Typography variant='h6'>
                                Los Angeles, CA
                            </Typography>
                        </Stack>
                    </Stack>

                </Stack>
            </Stack>
        </Stack>
    </Box>
  )
}

export default About