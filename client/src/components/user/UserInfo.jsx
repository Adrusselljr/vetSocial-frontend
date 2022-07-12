import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';
import { Box, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HouseIcon from '@mui/icons-material/House';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const UserInfo = () => {
    const user = useSelector(selectUser)

    return (
        <Box width='350px' display="flex" flexDirection="column" alignItems="center" sx={{ marginLeft: '15px' }}>
            <div style={{  backgroundColor: '#242526', borderRadius: '10px', width: '100%' }} className='card'>
            <Typography sx={{ marginTop: '15px', marginLeft: '15px' }} color="secondary" variant="h5" component="div">Intro</Typography>
                <div className="card-body">
                    <Box>
                        <Typography color="secondary" variant="p" component="div"><HouseIcon sx={{ marginRight: '10px', color: '#949494' }}/>Lives in { user.address }</Typography>
                        <Typography color="secondary" variant="p" component="div"><LocationOnIcon sx={{ marginRight: '10px', color: '#949494' }}/>From { user.fromAddress }</Typography>
                        <Typography color="secondary" variant="p" component="div"><MilitaryTechIcon sx={{ marginRight: '10px', color: '#949494' }}/>{ user.branch }</Typography>
                        <Typography color="secondary" variant="p" component="div"><FavoriteIcon sx={{ marginRight: '10px', color: '#949494' }}/>{ user.relationshipStatus }</Typography>
                    </Box>
                </div>
            </div>
        </Box>
    )
}

export default UserInfo