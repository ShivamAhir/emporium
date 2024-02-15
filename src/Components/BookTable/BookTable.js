import React from 'react'
import './Style.css'
import { Stack ,Box,Typography,TextField,Button,FormControl,InputLabel,MenuItem,Select} from '@mui/material'
const BookTable = () => {
  return (
    <Stack sx={{display:'flex',alignItems:'center'}}>
        <Stack sx={{width:'100%',height:'500px',display:'flex',alignItems:'center',marginTop:'50px'}}>
            <Typography variant='h1' sx={{fontFamily:'-moz-initial',fontWeight:'500'}}> 
            Book A Table 
            </Typography>
            <Typography variant='h6' sx={{width:'900px',textAlign:'center'}}>
            Our intuitive booking platform allows you to reserve a table in just a few clicks. Simply select your preferred date, time, and party size, and let us take care of the rest.
            </Typography>
        </Stack>
        <Stack sx={{bgcolor:'white',width:'700px',padding:'60px',borderRadius:'20px',position:'absolute',marginTop:'300px',border:'3px solide black'}} gap={4}>
            <Stack direction={'row'} gap={10}>
                <Stack sx={{width:'300px'}} gap={3}>
                    <Typography variant='h5'>
                        Date
                    </Typography>
                    <TextField />
                </Stack>
                <Stack sx={{width:'300px'}} gap={3}>
                    <Typography variant='h5'>
                        Time
                    </Typography>
                    <TextField/>
                </Stack>
            </Stack>
            <Stack direction={'row'} gap={10}>
            <Stack sx={{width:'300px'}} gap={3}>
                    <Typography variant='h5'>
                        Name
                    </Typography>
                    <TextField label='Name'/>
                </Stack>
                <Stack sx={{width:'300px'}} gap={3}>
                    <Typography variant='h5'>
                        Phone
                    </Typography>
                    <TextField type='number' label='Phone' size='large' 
                    inputProps={{
                        maxLength: 10,
                    }}/>
                </Stack>
            </Stack>
            <Stack  gap={3}>
                <Typography variant='h5'>Total Person</Typography>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Persons</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Persons"
                    // onChange={handleChange}
                >
                    <MenuItem value={1}>one</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Third</MenuItem>
                    <MenuItem value={4}>Four</MenuItem>
                    <MenuItem value={5}>Five</MenuItem>
                </Select>
                </FormControl>
            </Stack>
            <Stack>
                <Button color='error' variant='contained' size='large'>Book A Table</Button>
            </Stack>
        </Stack>
        <Stack>
            <Box>
                <img className='img-map' src='map.jpg' alt='map'/>
            </Box>
        </Stack>
    </Stack>
  )
}

export default BookTable