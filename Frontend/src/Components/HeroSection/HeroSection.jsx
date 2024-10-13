import { Box, Button, duration, Typography } from '@mui/material'
import logo from '../logos/logo.png'
import { motion } from 'framer-motion';
import AboutMe from './AboutMe';
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
})


function HeroSection() {
    const scrollDown = () => {
        window.scrollTo({ top: '650', behavior: 'smooth' })
    }
   

    const TypographyMotion = motion(Typography)
    const ButtonMotion = motion(Button)
    const MotionBox = motion(Box)
    return (
        <>
            <Box className={'box'} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <Box
                    sx={{
                        width: {
                            xs: '100%',
                            lg: '29%'
                        },
                        marginTop: {
                            lg: '0px',
                            xs: '40px'
                        }
                    }}

                >
                    <TypographyMotion
                        variant='h2'
                        variants={container(0)}
                        initial='hidden'
                        whileInView='visible'
                        marginLeft='10px'
                        fontFamily='roboto'
                        fontWeight='700'
                        sx={{
                            fontSize: {
                                xs: '2.7rem',
                                lg: '4rem'
                            },
                            fontWeight: {
                                lg: '700',
                                xs: '500'
                            }
                        }}

                    >
                        Anas Qureshi
                    </TypographyMotion>
                    <TypographyMotion
                        variant="subtitle1"
                        gutterBottom
                        variants={container(0.5)}
                        initial='hidden'
                        whileInView='visible'
                        marginLeft='10px'
                        fontFamily='-moz-initial'

                        sx={{
                            fontSize: {
                                xs: '1.1rem',
                                lg: '1.1rem'
                            },
                            marginBlock: {
                                lg: '4px',
                                xs: '2px'
                            }
                        }}

                    >
                        MERN Stack Developer
                    </TypographyMotion>
                    <ButtonMotion
                        variants={container(1)}
                        initial='hidden'
                        whileInView='visible'
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <AboutMe />
                    </ButtonMotion>

                </Box>
                <Box
                    className={'hero-image'}>
                    <motion.img
                        className='img'
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        width='500px'
                        src={logo}
                    />
                </Box>
                <MotionBox
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    position='absolute' right='2%' display='flex' className='social-icons' flexDirection='column' fontSize={30} >
                      <motion.a whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                    }} style={{marginBottom:'20px'}} href='https://www.linkedin.com/in/anas-qureshi-537617330/'><FaLinkedinIn /></motion.a>
                    <motion.a whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                    }} href='https://www.instagram.com/'><FaInstagram /></motion.a>
                    <motion.a whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                    }} style={{ marginBlock: '20px' }} href="mailto:anas.reactdev@gmail.com" target='blank' ><CgMail /></motion.a>
                    <motion.a whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                    }} href='https://github.com/reactdev-anas'><FaGithub /></motion.a>
                </MotionBox>
                <Box className={'arrow-text'} position='absolute' bottom='5%' >
                    <Typography fontFamily='roboto' fontWeight='400' fontSize='18px' bottom='5%' variant='caption'>Works  </Typography>
                    <a onClick={scrollDown}> <FaArrowDownLong className='arrow' /> </a>

                </Box>

            </Box>
        </>
    )
}

export default HeroSection
