import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { useRef, useState, useEffect } from 'react';
import LaunchIcon from '@mui/icons-material/Launch';


function Card2() {

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
      <Box width='100%' ref={ref} className={'card-2'} minHeight='80vh' >
        <motion.div
          drag={isWideScreen} dragConstraints={ref}
          dragElastic={.1}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          data-tooltip-id='my-tooltip-inline-2'
          data-tooltip-content=' Highly Impressive Todo App '
          className='project-2' >
          <div className="project-text-2">
            <TypographyMotion initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }} fontFamily='roboto' fontWeight='500'variant='h5'> TodoAdmin </TypographyMotion>
            <TypographyMotion initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }} fontFamily='roboto' marginTop={1} sx={{fontSize:{lg:'0.875rem', xs:'0.8rem'}}}> A feature-rich application built with React.js and Local Storage offering a seamless user experience with secure login and sign up for up to five users. Users can manage their to-do-list with full CRUD functionality, while admin can oversee and manage all user's tasks. includes advanced analytics with graphs tracking completed and deleted tasks.</TypographyMotion>
            <ButtonMotion initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }} sx={{ marginTop: '10px', backgroundColor: '#ff5722', '&:hover': { backgroundColor: '#e64a19' } }} variant='contained' endIcon={<LaunchIcon sx={{ marginBottom: '4px' }} />}>visit site</ButtonMotion>
          </div>
        </motion.div>
        <Tooltip id='my-tooltip-inline-2' className='tooltip' style={{ background: '#ff5722', color: '#ffff', fontFamily: 'roboto', fontWeight: '500' }} />
      </Box>
    </>
  )
}

export default Card2
