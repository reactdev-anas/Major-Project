import React, { useRef, useEffect, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import LaunchIcon from '@mui/icons-material/Launch';

function Card1() {

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 500);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 500);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const ref = useRef(null);

  const TypographyMotion = motion(Typography)
  const ButtonMotion = motion(Button)
  return (
    <>
      <Box ref={ref} className={'card-1'} width='100%' minHeight='80vh' display='relative' >
        <motion.div
          drag={isWideScreen} dragConstraints={ref}
          dragElastic={.1}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          data-tooltip-id='my-tooltip-inline-1' data-tooltip-content='Portfolio Website'
          className='project-1'>
          <div className="project-text">
            <TypographyMotion initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }} fontFamily='roboto' fontWeight='500' variant='h5' >Portfolio Website</TypographyMotion>
            <TypographyMotion initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }} fontFamily='roboto' marginTop={1}  sx={{fontSize:{lg:'0.875rem', xs:'0.8rem'}, width:{lg:'90%', xs:'95%'}}}> A fully responsive web application built using the MERN stack (mongoDB, Express, React, Node.Js) to showcase my projects, skills and experience. it includes dynamic project updates, intuitive navigation, and real time data management. The frontend is designed for a smooth experience, while the backend handles the secure data storage and retrieval.</TypographyMotion>
            <ButtonMotion initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }} sx={{ marginTop: '10px', backgroundColor: ' #00BFFF ', '&:hover': { backgroundColor: ' #87CEEB ' } }} variant='contained' endIcon={<LaunchIcon sx={{ marginBottom: '4px' }} />}>visit site</ButtonMotion>
          </div>
        </motion.div>
        <Tooltip id='my-tooltip-inline-1' className='tooltip' style={{ background: '#00BFFF', color: '#ffff', fontFamily: 'roboto', fontWeight: '500' }} />

      </Box>
    </>
  )
}

export default Card1
