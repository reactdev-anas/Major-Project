import * as React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EastIcon from '@mui/icons-material/East';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import ClearIcon from '@mui/icons-material/Clear';
import { motion } from 'framer-motion';
import { Tooltip, } from '@mui/material';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#09090b',
  width: 1050,
  border: 'none',
  boxShadow: 24,
  p: 3,
};

export default function AboutMe() {

  const skills = ['#javascript', '#react.js', '#redux', '#node.js', '#express.js', '#mongoDB', '#mongoose', '#html', '#css', '#sass', '#bootstrap', '#git', "#github", '#materialUi', '#TailwindCSS']
  const [open, setOpen] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const MotionBox = motion(Box);

  return (
    <div>
      <Button
        sx={{
          backgroundColor: '#004D40',
          color: '#ffffff',
          transition: ' background-color 0.3s ease,',
          '&:hover': { backgroundColor: '#00796B', }
        }}
        endIcon={<EastIcon sx={{ marginBottom: '2px' }} />}
        onClick={handleOpen}>
        About me
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <MotionBox
            initial={{ opacity: 0, scale: 3, top: 15, left: 150 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 9,
                stiffness: 100,
                restDelta: 0.001
              }
            }}


            sx={style} className={'modal'} borderRadius='8px' display='flex' alignItems='center'>
            <Box>
              <Typography marginBottom={1} fontFamily='roboto' fontWeight='500' color='#047387' textAlign='start' id="spring-modal-title" variant="h5" component="h2" >
                ABOUT ME
              </Typography>
              <Typography fontFamily='roboto' fontWeight='400' lineHeight='1.5' textAlign='start' color='#ffff' variant='caption' id="spring-modal-description" fontSize={14} letterSpacing={1}>
                Hi! I’m Anas Qureshi, a MERN stack developer with hands on experience in building web applications. I am specialized in MongoDB, Express.js, React.js, and Node.js, and I’m passionate about creating user-friendly and efficient solutions.
                Feel free to check out my portfolio and reach out if you’d like to connect!
              </Typography>
              <Box className='skills-width' sx={{ margin: '15px 0px 30px 0px', width: '400px', display: 'flex', flexWrap: 'wrap' }}>
                {skills.map((skill) => {
                  return (
                    <>
                      <span className='skill' style={{
                        textAlign: "center",
                        border: '1px solid #52525b',
                        margin: '10px 10px 0px 0px',
                        padding: '3px 0px 8px 0px',
                        borderRadius: '20px',
                        width: '120px',
                        color: '#e5e5e5',
                      }}>
                        {skill}
                      </span>
                    </>
                  )
                })}
              </Box>
              <Typography fontFamily='roboto' fontWeight='500' marginTop='15px' color='#047387' textAlign='start' id="spring-modal-title" variant="h5" component="h2">
                MERN STACK
              </Typography>
              <Box className={'icons'} sx={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
                <Typography fontWeight='700' color='green' variant='h5' display='flex' flexDirection='column' alignItems='center'><Tooltip title='MongoDB' arrow placement='top'> <span className='icon'><DiMongodb className='typo' fill='green' fontSize='50px' /></span></Tooltip>M</Typography>
                <Typography fontWeight='700' color='#ffff' variant='h5' display='flex' flexDirection='column' alignItems='center'><Tooltip title='Express.js' arrow placement='top'><span><SiExpress className='typo' fontSize='50px' /></span></Tooltip>E</Typography>
                <Typography fontWeight='700' color='skyblue' variant='h5' display='flex' flexDirection='column' alignItems='center'><Tooltip title='React.js' arrow placement='top'><span><FaReact fill='skyblue' className='typo' fontSize='50px' /></span></Tooltip>R</Typography>
                <Typography fontWeight='700' color='success' variant='h5' display='flex' flexDirection='column' alignItems='center'><Tooltip title='Node.js' arrow placement='top'><span><FaNodeJs fill='#28a745' className='typo' fontSize='50px' /></span></Tooltip>N</Typography>
              </Box>
            </Box>
            <Box className={'react-logo'} sx={{ textAlign: 'right' }}>
              <ClearIcon onClick={handleClose} color='#ffff' sx={{ cursor: 'pointer', fontSize: '18px', border: '1px solid white', borderRadius: '50%' }} />
              <FaReact fill='skyblue' fontSize='400px' className='img' />
            </Box>
          </MotionBox>
        </Fade>
      </Modal>
    </div>
  );
}
