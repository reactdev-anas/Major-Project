import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useRef, useState, useEffect } from 'react';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import LaunchIcon from '@mui/icons-material/Launch';
function Card3() {

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
      <Box width='100%' className={'card-3'} ref={ref} minHeight='80vh' display='relative'  >
        <motion.div
          drag={isWideScreen} dragConstraints={ref}
          dragElastic={.1}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          data-tooltip-id='my-tooltip-inline' data-tooltip-content=' Cartify '
          className='project-3' >
          <div className="project-text-3">
            <TypographyMotion initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }} fontFamily='roboto' fontWeight='500' variant='h5'> Cartify </TypographyMotion>
            <TypographyMotion initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }} fontFamily='roboto' marginTop={1} width='80%'   sx={{fontSize:{lg:'0.875rem', xs:'0.8rem'}}}>A React-based project eith a clean and responsive design, enabling users to easily add, remove, and manage items. feature real-time updates and a seamless shopping experience</TypographyMotion>
            <ButtonMotion initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }} sx={{ marginTop: '10px' }} variant='contained' color='success' endIcon={<LaunchIcon sx={{ marginBottom: '4px' }} />}>visit site</ButtonMotion>
          </div>
        </motion.div>
        <Tooltip id='my-tooltip-inline' className='tooltip' style={{ background: '#4caf50', color: '#ffff', fontFamily: 'roboto', fontWeight: '500' }} />
      </Box>
    </>
  )
}

export default Card3
