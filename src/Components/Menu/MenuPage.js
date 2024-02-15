import React from 'react'
import { Stack,Button ,Typography,Box} from '@mui/material'
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import './Style.css';
const Menu = () => {
  return (
    <Stack gap={7} sx={{marginTop:'50px'}}>
        <Typography variant='h1' sx={{fontWeight:'400',fontFamily:'-moz-initial',display:'flex',justifyContent:'center'}}>
            Our Menu
        </Typography>
        <Stack sx={{display:'flex',alignItems:'center'}}>
        <Typography variant='h5' sx={{width:'700px',display:'flex',textAlign:'center',justifyContent:'center'}}>
        We consider all the drivers of change gives you the components you need to change to create a truly happens.
        </Typography>
        </Stack>
        <Stack direction={'row'} gap={4} sx={{display:'flex',justifyContent:'center'}}>
          <Button color='error' size='large' variant='contained'>All</Button>
          <Button color='error' size='large' variant='outlined'>Breakfast</Button>
          <Button color='error' size='large' variant='outlined'>Main Dishes</Button>
          <Button color='error' size='large' variant='outlined'>Drinks</Button>
          <Button color='error' size='large' variant='outlined'>Desserts</Button>
        </Stack>

        <Stack sx={{marginBottom:'50px',marginTop:'50px',gap:'20px'}}>
        <Stack direction={'row'} gap={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        {[...Array(4)].map((_, index) => (
        <Stack key={index} gap={5} sx={{ width: '400px', height: '550px', border: '1px solid #808080', borderRadius: '15px' }}>
       <Stack sx={{ width: '400px' }}>
        <img
          src='https://www.marthastewart.com/thmb/SVq_OLuEfpO68WM8rmIcy20zEy4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mh_1059_fried_egg_horiz-48190a7248fe4bed8a8e242af4a9e740.jpgitokF5IumU_Q'
          alt="Image"
          className='product-img'
        />
      </Stack>
      <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'center' }} >
        <Box sx={{ width: '35px' }}>
          <AttachMoneyRoundedIcon sx={{ width: "100%", height: "100%" }} color={"error"} />
        </Box>
        <Typography variant='body' sx={{ fontSize: '32px', fontWeight: '400' }} color={"error"}>100</Typography>
      </Stack>
      <Stack sx={{ display: "flex", alignItems: 'center' }}>
        <Typography variant='h4' sx={{ fontWeight: '500' }}>Fried Eggs</Typography>
      </Stack>
      <Stack sx={{ width: '380px', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
        <Typography variant='h5'>
          Made with eggs, lettuce, salt, oil and other ingredients.
        </Typography>
      </Stack>
    </Stack>
  ))}
        </Stack>

        <Stack direction={'row'} gap={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        {[...Array(4)].map((_, index) => (
        <Stack key={index} gap={5} sx={{ width: '400px', height: '550px', border: '1px solid #808080', borderRadius: '15px' }}>
       <Stack sx={{ width: '400px' }}>
        <img
          src='https://www.marthastewart.com/thmb/SVq_OLuEfpO68WM8rmIcy20zEy4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mh_1059_fried_egg_horiz-48190a7248fe4bed8a8e242af4a9e740.jpgitokF5IumU_Q'
          alt="Image"
          className='product-img'
        />
      </Stack>
      <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'center' }} >
        <Box sx={{ width: '35px' }}>
          <AttachMoneyRoundedIcon sx={{ width: "100%", height: "100%" }} color={"error"} />
        </Box>
        <Typography variant='body' sx={{ fontSize: '32px', fontWeight: '400' }} color={"error"}>100</Typography>
      </Stack>
      <Stack sx={{ display: "flex", alignItems: 'center' }}>
        <Typography variant='h4' sx={{ fontWeight: '500' }}>Fried Eggs</Typography>
      </Stack>
      <Stack sx={{ width: '380px', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
        <Typography variant='h5'>
          Made with eggs, lettuce, salt, oil and other ingredients.
        </Typography>
      </Stack>
    </Stack>
  ))}
        </Stack>

        <Stack direction={'row'} gap={20} sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'500px'}}>
          <Stack sx={{width:'400px'}} gap={4}>
            <Typography variant='h2' sx={{fontFamily:'-moz-initial'}}>
              You can order through app
            </Typography>
            <Typography variant='h6'>
              Scan the QR code to install the app
            </Typography>
          </Stack>
          <Stack sx={{width:'500px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Box sx={{width:'200px',height:'200px'}}>
              <img sx={{width:'100%',height:'100%',objectFit:'cover'}} src='download.png'/>
            </Box>
          </Stack>
        </Stack>
        </Stack>
    </Stack>
  )
}

export default Menu