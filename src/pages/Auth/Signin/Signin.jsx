import React from 'react';
import './signin.css';
import logo from '../../../assests/21.png';
import { Typography, Button,TextField } from '@mui/material';

const Signin = () => {
  return (
    <div className='signin_container'>
    <div className='signin_img'>
        <img src={logo} alt="logo" />
    </div>
    <div className='signin_wrap'>
        <div className='signin_head'>
            <Typography variant="h4" color="initial">SignIn</Typography>
        </div>
        <div className='signin_details'>
            <div className='signin_email'>
                <Typography variant="caption" color="initial" sx={{ fontSize: '16px', color: 'grey' }}>Email</Typography>
                <TextField label="Email" size='small' variant='outlined' type='email' sx={{ width: '610px' }} />
            </div>
            <div className='signin_password'>
                <Typography variant="caption" color="initial" sx={{ fontSize: '16px', color: 'grey' }}>Password</Typography>
                <TextField label="Password" size='small' variant='outlined' type='password' sx={{ width: '610px' }} />
            </div>
            <div className='signin_password'>
                <Typography variant="caption" color="initial" sx={{ fontSize: '16px', color: 'grey' }}>Confirm Password</Typography>
                <TextField label="Confirm Password" size='small' variant='outlined' type='password' sx={{ width: '610px' }} />
            </div>
            <div className='signin_foot'>
                <Button variant="contained">Sign In</Button>
            </div>
        </div>
    </div>

</div>
  )
}

export default Signin