import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { useRef, useState, useEffect } from 'react';
import LaunchIcon from '@mui/icons-material/Launch';

function Card4() {

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
    <Box width='100%' ref={ref} className={'card-4'} minHeight='80vh' >
        <motion.div
          drag={isWideScreen} dragConstraints={ref}
          dragElastic={.1}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          data-tooltip-id='my-tooltip-inline-4'
          data-tooltip-content=' Expense Tracker App '
          className='project-4' >
          <div className="project-text-4">
            <TypographyMotion initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }} fontFamily='roboto' fontWeight='500'variant='h5' sx={{position: 'relative', zIndex: 1,}}> Expense Tracker App </TypographyMotion>
            <TypographyMotion initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }} fontFamily='roboto' marginTop={1} sx={{fontSize:{lg:'0.875rem', xs:'0.8rem'},position: 'relative', zIndex: 1,}}>Take control of your finances with our React-based Expense Tracker. Effortlessly record, categorize, and analyze your spending habits with a sleek and user-freindly interface, designed to help you manage your budget and acheive your financial goals.
              </TypographyMotion>
            <ButtonMotion initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }} sx={{ marginTop: '10px',position: 'relative', zIndex: 1, backgroundColor: '#cddc39', '&:hover': { backgroundColor: ' #a4b42d' } }} variant='contained' endIcon={<LaunchIcon sx={{ marginBottom: '4px' }} />}  onClick={() => window.open('https://expense-tracker-drab-xi.vercel.app/', '_blank')} >visit site</ButtonMotion>
          </div>
        </motion.div>
        <Tooltip id='my-tooltip-inline-4' className='tooltip' style={{ background: '#cddc39', color: '#ffff', fontFamily: 'roboto', fontWeight: '500' }} />
      </Box>
      
    </>
  )
}

export default Card4
