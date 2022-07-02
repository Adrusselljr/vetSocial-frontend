import React, { useState, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, deleteUser } from '../redux/userSlice';
import { AppBar, Box, Toolbar, Typography, Button, Popper, Grow, Paper, ClickAwayListener, MenuItem, MenuList } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const anchorRef = useRef(null)

    const handleSignout = () => {
        dispatch(deleteUser())
        window.localStorage.removeItem('applicationState')
        navigate("/")
    }

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen)
    }
    
    const handleClose = e => {
        if(anchorRef.current && anchorRef.current.contains(e.target)) {
            return
        }
        setOpen(false)
    }

    const handleListKeyDown = e => {
        if(e.key === 'Tab') {
            setOpen(false)
        } else if (e.key === 'Escape') {
            setOpen(false)
        }
    }

    return (
        <Box marginBottom="25px" sx={{ flexGrow: 1, position: 'sticky', top: '0', zIndex: 100 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography color="secondary" variant="h6" component="div" sx={{ flexGrow: 1 }}>VetSocial</Typography>
                        {
                            user
                            ? (
                            <>
                                <Box sx={{ width: 600, display: 'flex', justifyContent: 'space-around', marginRight: '255px' }}>
                                    <Box><Link to='/home'><HomeIcon fontSize='large' color='secondary' /></Link></Box>
                                    <Box><Link to='/profile'><img style={{ width: '36px', heigth: '36px', borderRadius: '25px' }} src={ user.profilePicture } alt="profilePicture" /></Link></Box>
                                </Box>
                                <Box>
                                    <Button ref={ anchorRef } id="composition-button" aria-controls={ open ? 'composition-menu' : undefined } aria-expanded={ open ? 'true' : undefined } aria-haspopup="true" onClick={handleToggle}>
                                        <MoreVertIcon color='secondary' />
                                    </Button>
                                    <Popper open={ open } anchorEl={ anchorRef.current } role={ undefined } placement="bottom-start" transition disablePortal>
                                        {({ TransitionProps, placement }) => (
                                            <Grow { ...TransitionProps } style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom', marginRight: '53px' }}>
                                                <Paper sx={{ backgroundColor: '#3a3b3c' }}>
                                                    <ClickAwayListener onClickAway={ handleClose }>
                                                        <MenuList autoFocusItem={ open } id="composition-menu" aria-labelledby="composition-button" onKeyDown={ handleListKeyDown }>
                                                            <Link style={{ textDecoration: 'none', color: '#e4e6eb' }} to='/account'><MenuItem onClick={ handleClose }>My Account</MenuItem></Link>
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
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