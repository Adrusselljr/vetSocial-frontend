import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';
import { Box, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const UserInfo = () => {
    const user = useSelector(selectUser)

    return (
        <Box width='270%' display="flex" flexDirection="column" alignItems="center">
            <div style={{  backgroundColor: '#242526', width: '93%', borderRadius: '10px' }} className='card'>
            <Typography sx={{ marginTop: '15px', marginLeft: '15px' }} color="secondary" variant="h5" component="div">Intro</Typography>
                <div className="card-body">
                    <Box>
                        <Typography color="secondary" variant="p" component="div"><LocationOnIcon sx={{ marginRight: '10px', color: '#949494' }}/>From  { user.address }</Typography>
                        <Typography color="secondary" variant="p" component="div">Username : { user.username }</Typography>
                        <Typography color="secondary" variant="p" component="div">Email : { user.email }</Typography>
                        <Typography color="secondary" variant="p" component="div">Branch : { user.branch }</Typography>
                        <Typography color="secondary" variant="p" component="div">Phone Number : { user.phoneNumber }</Typography>
                    </Box>
                </div>
            </div>
        </Box>
    )
}

export default UserInfo