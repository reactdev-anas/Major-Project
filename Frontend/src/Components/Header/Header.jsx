import React from 'react'
import logo from '../logos/logo.png'
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

function Logo() {
  const MotionBox = motion(Box)

  return (
    <Box sx={{
      width: '100%',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
    }
    >
      <div className="logo">
        <motion.img src={logo}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          alt='logo' />
      </div>
      <MotionBox
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        sx={{
          marginRight: {
            xs: '15px',
            lg: '22px'
          }
        }} >
        <a href='https://web.telegram.org/a/'><TelegramIcon sx={{ color: "#ffff" }} /></a>
      </MotionBox>

    </Box>
  )
}

export default Logo
