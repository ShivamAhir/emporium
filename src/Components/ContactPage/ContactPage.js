import React from 'react'
import './Style.css'
import { Stack ,Box,Typography,TextField,Button,FormControl,InputLabel,MenuItem,Select} from '@mui/material'
import { STATES } from 'mongoose'
const BookTable = () => {
  return (
    <Stack sx={{display:'flex',alignItems:'center'}}>
        <Stack sx={{width:'100%',height:'500px',display:'flex',alignItems:'center',marginTop:'50px'}}>
            <Typography variant='h1' sx={{fontFamily:'-moz-initial',fontWeight:'500'}}> 
            Contact Us
            </Typography>
            <Typography variant='h6' sx={{width:'900px',textAlign:'center'}}>
            Thank you so much for reaching out to us! We truly appreciate you taking the time to connect with us and for considering us for your needs.
            </Typography>
        </Stack>
        <Stack sx={{bgcolor:'white',width:'700px',padding:'60px',borderRadius:'20px',position:'absolute',marginTop:'300px',border:'3px solide black'}} gap={4}>
            <Stack direction={'row'} gap={10}>
                <Stack sx={{width:'300px'}} gap={3}>
                    <Typography variant='h5'>
                        Name
                    </Typography>
                    <TextField label='Name'/>
                </Stack>
                <Stack sx={{width:'300px'}} gap={3}>
                    <Typography variant='h5'>
                        Email
                    </Typography>
                    <TextField label='Email'/>
                </Stack>
            </Stack>
            
            <Stack gap={3}>
                <Typography variant='h5'>
                    Subject
                </Typography>
                <TextField label='Subject'/>
            </Stack>
            <Stack gap={3}>
                <Typography variant='h5'>
                    Message
                </Typography>
                <TextField
                    label='Subject'
                    InputProps={{ sx: { height: '100px' } }}
                    />

            </Stack>
            <Stack>
                <Button color='error' variant='contained' size='large'>Send</Button>
            </Stack>
        </Stack>
        <Stack sx={{height:'700px',width:'100%',bgcolor:'pink' }} >
            <Stack  direction={'row'} gap={10} sx={{display:'flex',justifyContent:'center',marginTop:'500px'}}>
            <Stack gap={3}>
                <Typography variant='h5' sx={{fontWeight:'600'}} >
                    Call Us:
                </Typography>
                <Typography variant='h6' color={'error'}>
                (+91) 7701891010
                </Typography>
            </Stack>
            <Stack gap={3}>
                <Typography variant='h5' sx={{fontWeight:'600'}} >
                    Hours:
                </Typography>
                <Typography variant='h6'>
                Mon-Fri: 11am-8pm
                </Typography>
                <Typography variant='h6'>
                Sat, Sun: 9am-10pm
                </Typography>
            </Stack>
            <Stack gap={3}>
                <Typography variant='h5' sx={{fontWeight:'600'}} >
                    Our Location:
                </Typography>
                <Typography variant='h6'>
                7778, nit kurukshetra, kurukshetra
                </Typography>
            </Stack>
            </Stack>
           
        </Stack>
    </Stack>
  )
}

export default BookTable