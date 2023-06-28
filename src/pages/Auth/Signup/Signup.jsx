import React from 'react';
import './signup.css';
import logo from '../../../assests/21.png';
import { Typography, Button,TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    return (
        <div className='signup_container'>
            <div className='signup_img'>
                <img src={logo} alt="logo" />
            </div>
            <div className='signup_wrap'>
                <div className='signup_head'>
                    <Typography variant="h4" color="initial">SignUp</Typography>

                </div>
                <div className='signup_details'>
                    <div className='signup_names'>
                        <TextField label="First Name" size='small' variant='outlined' sx={{ width: '300px' }} />
                        <TextField label="Last Name" size='small' variant='outlined' sx={{ width: '300px' }} />
                    </div>
                    <div className='signup_email'>
                        <Typography variant="caption" color="initial" sx={{ fontSize: '16px', color: 'grey' }}>Email</Typography>
                        <TextField label="Email" size='small' variant='outlined' type='email' sx={{ width: '610px' }} />
                    </div>
                    <div className='signup_password'>
                        <Typography variant="caption" color="initial" sx={{ fontSize: '16px', color: 'grey' }}>Password</Typography>
                        <TextField label="Password" size='small' variant='outlined' type='password' sx={{ width: '610px' }} />
                    </div>
                    <div className='signup_agree'>
                        <input type="checkbox" />
                        <Typography variant="body2" color="grey">By signing up, I agree with the Terms of Use & Privacy Policy</Typography>
                    </div>
                    <div className='signup_foot'>
                        <Button variant="contained" onClick={()=>{navigate('/signin')}}>Sign Up</Button>
                        <div>
                            <Typography variant="caption" color="initial">Already have an account?</Typography>
                            <Typography variant="caption" color="primary" sx={{cursor:'pointer'}} onClick={()=>{navigate('/signin')}}>Sign in</Typography>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup