import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, deleteUser } from '../redux/userSlice';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignout = () => {
        dispatch(deleteUser())
        window.localStorage.removeItem('applicationState')
        navigate("/")
    }

    return (
        <Box marginBottom="3px" sx={{ flexGrow: 1, position: 'sticky', top: '0', zIndex: 100 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography color="secondary" variant="h6" component="div" sx={{ flexGrow: 1 }}>VetSocial</Typography>
                        {
                            user
                            ? (
                            <>
                                <Box sx={{ width: 600, display: 'flex', justifyContent: 'space-around', marginRight: '310px' }}>
                                    <Box><Link to='/home'><HomeIcon fontSize='large' color='secondary' /></Link></Box>
                                    <Box><Link to='/profile'><img style={{ width: '36px', heigth: '36px', borderRadius: '25px' }} src={ user.profilePicture } alt="profilePicture" /></Link></Box>
                                </Box>
                                <Box><Button sx={{ backgroundColor: 'black' }} onClick={ handleSignout } variant="contained" color="primary">Sign Out</Button></Box>
                            </>
                            )
                            : ("")
                        }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header