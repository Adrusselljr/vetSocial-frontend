import React from 'react'
import Layout from '../components/Layout'
import UserHeader from '../components/user/UserHeader';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { Box, Typography } from '@mui/material';

const AccountPage = () => {
    const user = useSelector(selectUser)

    return (
        <Layout>
            <UserHeader />
            <Box width={ 1 } display="flex" flexDirection="column" alignItems="center" sx={{ height: '675px' }}>
            <div style={{  backgroundColor: '#242526' }} className='card'>
                <div className="card-body">
                    <Box>
                        <Typography color="secondary" variant="p" component="div">Name : { user.firstName } { user.lastName }</Typography>
                        <Typography color="secondary" variant="p" component="div">Username : { user.username }</Typography>
                        <Typography color="secondary" variant="p" component="div">Email : { user.email }</Typography>
                        <Typography color="secondary" variant="p" component="div">Branch : { user.branch }</Typography>
                        <Typography color="secondary" variant="p" component="div">Address : { user.address }</Typography>
                        <Typography color="secondary" variant="p" component="div">Phone Number : { user.phoneNumber }</Typography>
                    </Box>
                </div>
            </div>
            </Box>
        </Layout>
    )
}

export default AccountPage