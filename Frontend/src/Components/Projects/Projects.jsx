import { Box, Typography } from '@mui/material'
import Card1 from './Card-1';
import Card2 from './Card-2';
import Card3 from './Card-3';
import Card4 from './Card-4';
import '@fontsource/roboto/500.css';


function Projects() {

  return (
    <>
      <Box>
        <Typography sx={{fontSize:{lg:'2.8rem', xs:'2.2rem'}}} fontFamily='roboto' fontWeight='500' color='#047387' marginBlock={4} textAlign='center' >Latest Works</Typography>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </Box>

    </>
  )
}

export default Projects

{/* <Cards reference={ref} />  */ }