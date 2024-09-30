// import React from 'react'
// import { Box, Typography } from '@mui/material'
// import { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import devimg from '../logos/freePick.png'
// import Button from '@mui/material/Button';
// import { motion } from 'framer-motion';
// import { FiSend } from 'react-icons/fi';
// import { IoMdContact } from "react-icons/io";
// import { MdAlternateEmail } from "react-icons/md";
// import { LuMessageSquare } from "react-icons/lu";
// import Footer from './footer';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';


// function Connect() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('http://localhost:3001/send', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, message }),
//     });
//     const data = await response.text();
//     console.log(data);
//     // Form reset
//     setName('');
//     setEmail('');
//     setMessage('');
// };

//   const ButtonMotion = motion(Button)

//   return (
//     <>
//       <Box width='100%' >
//         <Box display='flex' justifyContent='center'
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: -40 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <Typography
//             textAlign='center'
//             fontFamily='roboto'
//             fontWeight='500'
//             sx={{
//               width: {
//                 lg: '260px'
//               },
//               padding: '14px',
//               border: '2px solid #047387',
//               color: '#047387',
//               marginTop: {
//                 lg: '20px',
//                 xs: '2rem'
//               },
//               borderRadius: '6px',
//               fontSize: {
//                 xs: '1.5rem',
//                 lg: '2.1rem'
//               }
//             }}


//           >
//             Let's Connect
//           </Typography>
//         </Box>
//         <Box className={'connect'} width='100%' display='flex' sx={{
//           flexDirection: {
//             lg: 'row',
//             xs: 'column'
//           },
//           alignItems: {
//             lg: 'center',
//             xs: 'flex-start'
//           }, justifyContent: {
//             xs: 'flex-start',
//             lg: 'center'
//           }
//         }} marginTop={2}>
//           <Box sx={{
//             width: {
//               lg: '50%',
//               xs: '100%'
//             }
//           }}  >
//             <Box
//               initial={{ opacity: 0, x: -100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.9 }}
//               textAlign='center'>
//               <img
//                 width='75%'
//                 className='img-connect'
//                 style={{ aspectRatio: '3/3', objectFit: 'contain', }}
//                 src={devimg} alt='image_chat' />
//             </Box>

//           </Box>
//           <Box sx={{
//             width: {
//               xs: '100%',
//               lg: '50%',
//             }
//           }}
//             initial={{ opacity: 0, y: -50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1 }}

//           >
//             <form onSubmit={handleSubmit} >
//               <div className="input">
//                 <label className='name'> <IoMdContact fill='grey' className='icon' /> Name</label>
//                 <TextField sx={{ marginTop: '10px', }} type='text'  value={name}
//                     onChange={(e) => setName(e.target.value)}  id="outlined-basic" size='small' variant="outlined" fullWidth required />
//               </div>
//               <div className="input">
//                 <label className='name'> <MdAlternateEmail fill='grey' className='icon' />Email</label>
//                 <TextField sx={{ marginTop: '10px', }} type='email'  value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                        id="outlined-basic" size='small' variant="outlined" fullWidth required />
//               </div>
//               <div className="input">
//                 <label className='name'><LuMessageSquare fill='grey' className='icon-message' />Message</label>
//                 <TextField fullWidth sx={{ marginTop: '10px', }} type='message'  value={message}
//                     onChange={(e) => setMessage(e.target.value)} id="outlined-multiline-static" multiline rows={6}required/>
//               </div>
//               <ButtonMotion
//                 sx={{
//                   color: '#ffff',
//                   background: '#047387',
//                   marginLeft: {
//                     lg: '32px',
//                     xs: '10px'
//                   },
//                   width: {
//                     lg: "90%",
//                     xs: '95%'
//                   },
//                   borderRadius: '6px',
//                   paddingBlock: '10px',
//                   fontFamily: 'roboto',
//                   fontWeight: '400'
//                 }}
//                 className='btn'
//                  type='submit'
//                 startIcon={<FiSend />}
//                 whileHover={{
//                   scale: 1.01,
//                   transition: { duration: 0.4 },
//                 }}
              

//               >
//                 send Message
//               </ButtonMotion>
//             </form>
//           </Box>

//         </Box>
//         <Footer />
//       </Box>
//     </>
//   )
// }

// export default Connect
import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import devimg from '../logos/freePick.png';
import Footer from './Footer';

function Connect() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://server-azure-nu-68.vercel.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await response.text();
    console.log(data);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <Box width="100%">
        {/* Apply motion animation using motion.div */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center' }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typography
            textAlign="center"
            fontFamily="roboto"
            fontWeight="500"
            sx={{
              width: { lg: '260px' },
              padding: '14px',
              border: '2px solid #047387',
              color: '#047387',
              marginTop: { lg: '20px', xs: '2rem' },
              borderRadius: '6px',
              fontSize: { xs: '1.5rem', lg: '2.1rem' },
            }}
          >
            Let's Connect
          </Typography>
        </motion.div>

        <Box
          className="connect"
          width="100%"
          display="flex"
          sx={{
            flexDirection: { lg: 'row', xs: 'column' },
            alignItems: { lg: 'center', xs: 'flex-start' },
            justifyContent: { xs: 'flex-start', lg: 'center' },
          }}
          marginTop={2}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            style={{ width: '100%', textAlign: 'center' }}
          >
            <img
              width="75%"
              className="img-connect"
              style={{ aspectRatio: '3/3', objectFit: 'contain' }}
              src={devimg}
              alt="image_chat"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            style={{ width: '100%' }}
          >
            <form onSubmit={handleSubmit}>
              <div className="input">
                <label className="name">
                  Name
                </label>
                <TextField
                  sx={{ marginTop: '10px' }}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                  fullWidth
                  required
                />
              </div>
              <div className="input">
                <label className="name">
                  Email
                </label>
                <TextField
                  sx={{ marginTop: '10px' }}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                  fullWidth
                  required
                />
              </div>
              <div className="input">
                <label className="name">
                  Message
                </label>
                <TextField
                  fullWidth
                  sx={{ marginTop: '10px' }}
                  type="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="outlined-multiline-static"
                  multiline
                  rows={6}
                  required
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
              >
                <Button
                  sx={{
                    color: '#ffff',
                    background: '#047387',
                    marginLeft: { lg: '32px', xs: '10px' },
                    width: { lg: '90%', xs: '95%' },
                    borderRadius: '6px',
                    paddingBlock: '10px',
                    fontFamily: 'roboto',
                    fontWeight: '400',
                  }}
                  className="btn"
                  type="submit"
                  startIcon={<FiSend />}
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default Connect;
