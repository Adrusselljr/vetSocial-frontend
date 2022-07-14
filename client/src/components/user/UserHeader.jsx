import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';
import { Box, Typography, Button  } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';

const UserHeader = () => {
    const user = useSelector(selectUser)

    return (
        <Box width={ 1 } display="flex" flexDirection="column" alignItems="center" sx={{ backgroundColor: '#242526', height: '650px', marginBottom: '15px' }} >
            <img style={{ width: '87%', height: '71%', borderRadius: '10px', position: 'relative' }} src={ user.coverPhoto } alt="coverPhoto" />
            <img style={{ width: '12%', borderRadius: '150px', border: 'solid black 2px', position: 'absolute', top: '37%', left: '9%' }} src={ user.profilePicture } alt="profilePicture" />
            <Box sx={{ marginRight: '40%' }}>
                <Typography sx={{ marginTop: '25px' }} color="secondary" variant="h4" component="div">{ user.firstName } { user.lastName }</Typography>
                <Typography color="secondary" variant="p" component="div">{ user.friends.length} friends</Typography>
            </Box>
            <Box>
                <Link style={{ textDecoration: 'none' }} to='/edit-user'><Button variant='contained' sx={{ backgroundColor: 'black', marginLeft: '368%', width: '125%' }}><EditIcon fontSize='small' sx={{ marginRight: '10px' }} />Edit Profile</Button></Link>
            </Box>
        </Box>
    )
}

export default UserHeader