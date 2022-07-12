import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';
import { Box, Typography, Button  } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';

const UserHeader = () => {
    const user = useSelector(selectUser)

    return (
        <Box width={ 1 } display="flex" flexDirection="column" alignItems="center" sx={{ backgroundColor: '#242526', height: '580px', marginBottom: '15px' }} >
            <img style={{ width: '78%', borderRadius: '10px', position: 'relative' }} src={ user.coverPhoto } alt="coverPhoto" />
            <img style={{ width: '175px', borderRadius: '150px', border: 'solid black 2px', position: 'absolute', top: '435px', left: '175px' }} src={ user.profilePicture } alt="profilePicture" />
            <Box sx={{ marginRight: '475px' }}>
                <Typography sx={{ marginTop: '25px' }} color="secondary" variant="h4" component="div">{ user.firstName } { user.lastName }</Typography>
                <Typography color="secondary" variant="p" component="div">{ user.friends.length} friends</Typography>
            </Box>
            <Box>
                <Link style={{ textDecoration: 'none' }} to='/edit-user'><Button variant='contained' sx={{ backgroundColor: 'black', marginLeft: '1080px', width: '150px' }}><EditIcon fontSize='small' sx={{ marginRight: '10px' }} />Edit Profile</Button></Link>
            </Box>
        </Box>
    )
}

export default UserHeader