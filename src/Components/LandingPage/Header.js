import React from 'react'
import { Stack ,Box,Button,Typography} from '@mui/material'
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';

const Header = () => {
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

  )
}

export default Header