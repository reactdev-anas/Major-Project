import { Typography, Box } from '@mui/material'
import React from 'react'
import logo from '../logos/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import { SiGmail } from "react-icons/si";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import { Tooltip } from 'react-tooltip';


function Footer() {

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const MotionBox = motion(Box)
  const MotionTypography = motion(Typography)

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          marginTop: '35px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'linear-gradient(315deg, #130f40 0%, #000000 74%)'

        }}>
        <MotionTypography variant='body1'
          width='500px'
          marginTop='10px'
          textAlign="center"
          fontFamily='roboto'
          fontWeight="500"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          color='grey' fontSize={14} >

          Anas Qureshi © 2024
        </MotionTypography>
        <a onClick={scrollTop} data-tooltip-id='my-tooltip-inline-footer' data-tooltip-content='Top'> <img onClick={scrollTop} src={logo} alt='logo_img' width='80px' height='auto' style={{ marginBlock: '12px', cursor: 'pointer' }} /></a>
        <Tooltip id='my-tooltip-inline-footer' className='tooltip' style={{ background: 'transparent', fontFamily: "roboto", fontWeight: '400', color: '#ffff', fontSize: '18px', transform: 'translate( 100%)', margin: '80px 0px 0px 15px' }} />
        <MotionBox
          width="500px"
          textAlign='center'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          fontSize={24} marginBlock='18px'
        >
          <a href="mailto:anas.reactdev@gmail.com" target='blank'  style={{ marginRight: '22px', }}><SiGmail fill='#047387' /></a>
          <a href='#' ><FaLinkedinIn fill='#047387' /></a>
          <a href='https://www.instagram.com/' style={{ marginInline: '22px', }}><FaInstagram fill='#047387' /></a>
          <a href='https://github.com/reactdev-anas'><FaGithub fill='#047387' /></a>
        </MotionBox>
      </Box>
    </>
  )
}

export default Footer
