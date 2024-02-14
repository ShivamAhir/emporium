import React from 'react'
import { Button, Box, Stack ,Typography,Avatar} from '@mui/material'
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import RiceBowlOutlinedIcon from '@mui/icons-material/RiceBowlOutlined';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import IcecreamIcon from '@mui/icons-material/Icecream';
import CallIcon from '@mui/icons-material/Call';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Home = () => {
  return (
    <Box sx={{ height: "110px", bgcolor: "#F7F9F9"}}>
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
                <Stack sx={{ width: "500px" }} direction="row" spacing={3}>
                <Button variant='contained' size="large" color='error'>Home</Button>
                <Button variant='outlined' size="large" color='error'>About</Button>
                <Button variant='outlined' size="large" color='error'>Menu</Button>
                <Button variant='outlined' size="large" color='error'>Contact</Button>
                </Stack>
            </Box>
            <Box sx={{ width: '200px',position:'absolute',right:'0'}}>
                <Button variant='contained' size="large" color='error'>Book A Table</Button>
            </Box>
        </Stack>
        <Stack>
            <Box sx={{ width: '100%', height: '1000px' }}>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src='https://img.freepik.com/premium-photo/cooking-banner-kitchen-black-table-ingredients-food-top-view-free-space-your-text_187166-10382.jpg' alt='Cooking Banner' />
            </Box>
            <Stack sx={{width:'600px', textAlign:'center',position:'absolute',top:'400px',left:'34%'}} gap={4}>
                <Typography variant='h1' sx={{fontWeight:500,fontFamily:"sans-serif",color:'#F7F9F9'}}>
                    Best Food For Your Test
                </Typography>
                <Typography variant='h5' sx={{fontWeight:300,fontFamily:"sans-serif",color:'#F7F9F9'}}>
                    Discover delectable cuisine and unforgettable moments in our welcoming culinary haven.
                </Typography>
                <Stack gap={3} direction='row' sx={{display:'flex',justifyContent:'center'}}>
                <Button variant='contained' size="large" color='error'>Book A Table</Button>
                <Button variant='contained' size="large" color='error'>Explore Menu</Button>
                </Stack>
            </Stack>
        </Stack>
        <Stack  sx={{display:'flex',flexDirection:'column',alignItems:"center",justifyContent:'center',marginTop:'50px',marginBottom:'50px'}} gap={5} >
            <Typography variant='h2'  sx={{fontWeight:'500',display:'flex', justifyContent:'center',alignContent:'center'}}>
                Browse Our Menu
            </Typography>
            <Stack direction={'row'} gap={5}>
                <Stack 
                sx={{width:'380px',
                height:'400px',
                display:'flex',
                justifyContent:"center",
                alignItems:'center',
                flexDirection:'column',
                border: "2px solid #ccc",
                borderRadius:'20px',
            }} gap={3}>
                <Avatar sx={{  width: '100px', height: '100px', fontSize: '64px' }}>
                <FreeBreakfastOutlinedIcon sx={{objectFit:'cover',height:'50px',width:'50px'}} />
                </Avatar>
                    <Typography variant='h4' sx={{fontWeight:'600'}}>Breakfast</Typography>
                    <Typography variant='body' sx={{fontWeight:'500',textAlign:'center',width:'300px'}}>
                        In the new era of Technology we look in the future with certainity and pride for our life 
                    </Typography>
                    <Button variant='text' color='error' >Explore Menu</Button>
                </Stack>
                <Stack 
                sx={{width:'380px',
                height:'400px',
                display:'flex',
                justifyContent:"center",
                alignItems:'center',
                flexDirection:'column',
                border: "2px solid #ccc",
                borderRadius:'20px',
            }} gap={3}>
                <Avatar sx={{  width: '100px', height: '100px', fontSize: '64px' }}>
                <RiceBowlOutlinedIcon sx={{objectFit:'cover',height:'50px',width:'50px'}} />
                </Avatar>
                    <Typography variant='h4' sx={{fontWeight:'600'}}>Main Dishes</Typography>
                    <Typography variant='body' sx={{fontWeight:'500',textAlign:'center',width:'300px'}}>
                        In the new era of Technology we look in the future with certainity and pride for our life 
                    </Typography>
                    <Button variant='text' color='error' >Explore Menu</Button>
                </Stack>
                <Stack 
                sx={{width:'380px',
                height:'400px',
                display:'flex',
                justifyContent:"center",
                alignItems:'center',
                flexDirection:'column',
                border: "2px solid #ccc",
                borderRadius:'20px',
            }} gap={3}>
                <Avatar sx={{  width: '100px', height: '100px', fontSize: '64px' }}>
                <LocalDrinkIcon sx={{objectFit:'cover',height:'50px',width:'50px'}} />
                </Avatar>
                    <Typography variant='h4' sx={{fontWeight:'600'}}>Drinks</Typography>
                    <Typography variant='body' sx={{fontWeight:'500',textAlign:'center',width:'300px'}}>
                        In the new era of Technology we look in the future with certainity and pride for our life 
                    </Typography>
                    <Button variant='text' color='error' >Explore Menu</Button>
                </Stack>
                <Stack 
                sx={{width:'380px',
                height:'400px',
                display:'flex',
                justifyContent:"center",
                alignItems:'center',
                flexDirection:'column',
                border: "2px solid #ccc",
                borderRadius:'20px',
            }} gap={3}>
                <Avatar sx={{  width: '100px', height: '100px', fontSize: '64px' }}>
                <IcecreamIcon sx={{objectFit:'cover',height:'50px',width:'50px'}} />
                </Avatar>
                    <Typography variant='h4' sx={{fontWeight:'600'}}>Desserts</Typography>
                    <Typography variant='body' sx={{fontWeight:'500',textAlign:'center',width:'300px'}}>
                        In the new era of Technology we look in the future with certainity and pride for our life 
                    </Typography>
                    <Button variant='text' color='error' >Explore Menu</Button>
                </Stack>
            </Stack>
            
        </Stack>
        <Stack sx={{marginTop:'50px',bgcolor:'#FEF9E7',height:'600px',display:'flex',alignItems:'center',justifyContent:'center'}} direction={'row'} gap={20}>
            <Stack sx={{width:'700px'}}>
                <img sx={{width:'700px',objectFit:'cover'}} src='https://media.istockphoto.com/id/665762154/photo/indian-popular-snack-food-called-vegetable-spring-rolls-or-veg-roll-or-veg-franky-made-using.jpg?s=612x612&w=0&k=20&c=syJ_q4zf1eb-5x7Mom1YA4wt7KLZtsiJFkOWEEIr1R0='/>
                
                 <Stack sx={{width:'400px',height:'230px',bgcolor:'grey',color:'white',position:'absolute' ,marginTop:'300px',marginLeft:'380px',borderRadius:'10px',display:'flex',alignItems:"center",justifyContent:'center',flexDirection:'column'}}>
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
                <Stack sx={{width:'200px'}}>
                <Button size='large' color='error' variant='outlined'>More About us</Button>
                </Stack>
            </Stack>
        </Stack>
        <Stack sx={{marginTop:'80px',height:'800px'}}gap={4}>
            <Typography variant='h2' sx={{width:"700px",fontWeight:'600',marginLeft:'130px'}}>We also offer unique service for your events</Typography>
            <Stack direction={'row'} gap={2} sx={{display:'flex',alignItems:'center',justifyContent:'center',}}>
                <Stack sx={{width:'400px'}} gap={3}>
                    <Stack sx={{width:'370px'}}>
                        <img sx={{width:'100%',height:'100%',objectFit:'cover'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcgkPzh1v1ajCteNiAyu0COaIpIx76fRLrwNqPLkWH2u2cF7_uAXw05UpJJywOGkKbbA&usqp=CAU'/>
                    </Stack>
                    <Typography variant='h5' sx={{fontWeight:"600"}}>
                            Caterings
                    </Typography>
                    <Typography variant='body' sx={{width:'350px'}}>
                    In the new era of Technology we look in the future with certainity and pride for our life 
                    </Typography>
                </Stack>

                <Stack sx={{width:'400px'}} gap={3}>
                    <Stack sx={{width:'370px'}}>
                        <img sx={{width:'100%',height:'100%',objectFit:'cover'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMbTY8tHVCNoGEBagXP73K8yabtE6OIsROaNvSxVzi4SrgWfWHG6en75a0zmzYXhy4xQ&usqp=CAU'/>
                    </Stack>
                    <Typography variant='h5' sx={{fontWeight:"600"}}>
                            Birthdays
                    </Typography>
                    <Typography variant='body' sx={{width:'350px'}}>
                    In the new era of Technology we look in the future with certainity and pride for our life 
                    </Typography>
                </Stack>

                <Stack sx={{width:'400px'}} gap={3}>
                    <Stack sx={{width:'372px'}}>
                        <img sx={{width:'100%',height:'100%',objectFit:'cover'}} src='data:image/jpeg;base64,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'/>
                    </Stack>
                    <Typography variant='h5' sx={{fontWeight:"600"}}>
                            Wedding
                    </Typography>
                    <Typography variant='body' sx={{width:'350px'}}>
                    In the new era of Technology we look in the future with certainity and pride for our life 
                    </Typography>
                </Stack>
                <Stack sx={{width:'400px'}} gap={3}>
                    <Stack sx={{width:'299px'}}>
                        <img sx={{width:'100%',height:'100%',objectFit:'cover'}} src='data:image/jpeg;base64,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'/>
                    </Stack>
                    <Typography variant='h5' sx={{fontWeight:"600"}}>
                            Events
                    </Typography>
                    <Typography variant='body' sx={{width:'350px'}}>
                    In the new era of Technology we look in the future with certainity and pride for our life 
                    </Typography>
                </Stack>
            </Stack>

        </Stack>
        <Stack sx={{bgcolor:'gray',color:'white'}}>
            <Stack direction={'row'} sx={{display:'flex',justifyContent:'center',marginTop:'40px',marginBottom:'30px'}} gap={10}>
                <Stack sx={{width:'500px'}} gap={3}>
                    <Stack direction={'row'} gap={2}>
                    <Box sx={{width:"50px", height:"50px"}} > 
                    <DinnerDiningOutlinedIcon sx={{ width: "100%", height: "100%" }}  />
                    </Box>
                        <Typography variant='h3' sx={{fontWeight:'600',fontFamily:'cursive'}}>
                        Emporium
                        </Typography>
                    </Stack>
                    <Stack >
                        <Typography variant='body'>
                            In the era of new Technology we look a future with certainity and pride to our company
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} gap={2}>
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
                    <Typography variant='h5'>
                        Home
                    </Typography>
                    <Typography variant='h5'>
                        About
                    </Typography>
                    <Typography variant='h5'>
                        Menu
                    </Typography>
                    <Typography variant='h5'>
                        Contact
                    </Typography>
                </Stack>
                <Stack sx={{width:'500px'}}>
                    <Typography variant='h4' sx={{fontWeight:'600'}}>
                        Follow Us On Instagram
                    </Typography>
                    <Stack>

                    </Stack>
                </Stack>
            </Stack>
            <Stack direction={'row'} gap={1} sx={{display:'flex',justifyContent:'center'}}>
                <Typography>
                    Copyright 
                </Typography>
                <CopyrightOutlinedIcon/>
                <Typography>
                    Emporium. All Right Reserved
                </Typography>
            </Stack>
        </Stack>
    </Box>
    
  )
}

export default Home
