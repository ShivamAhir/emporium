import React from 'react'
import {Skeleton,Stack } from '@mui/material'

const SkeletonBox = () => {
    const skeletonItems = [];

  for (let i = 0; i < 4; i++) {
    skeletonItems.push(
      <Stack key={i} gap={2}>
        <Skeleton variant="rounded" width={350} height={310} />
        <Skeleton variant="rounded" width={150} height={30} />
        <Skeleton variant="rounded" width={310} height={20} />
        <Skeleton variant="rounded" width={310} height={20} />
      </Stack>
    );
  }
  return (
   <Stack gap={10} sx={{marginTop:'50px'}} >
    <Stack gap={3} sx={{marginLeft:'100px'}}>
    <Skeleton variant="rounded" width={610} height={50} />
    <Skeleton variant="rounded" width={610} height={50} />
    </Stack>
    <Stack gap={8} direction={'row'}sx={{display:'flex',justifyContent:'center'}} >
        {skeletonItems}    
    </Stack>
    <Stack sx={{display:'flex',alignItems:'center'}}>
    <Skeleton variant="rounded" width={'90%'} height={400} />
    </Stack>
   </Stack>
  )
}

export default SkeletonBox