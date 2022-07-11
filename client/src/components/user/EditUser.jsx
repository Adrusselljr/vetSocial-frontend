import React from 'react'
import Layout from '../Layout'
import UserHeader from './UserHeader'
import { Box, Typography } from '@mui/material'

const EditUser = () => {
    return (
        <Layout>
            <UserHeader />
            <Box>
                <Typography color='secondary'>Hello World!</Typography>
            </Box>
        </Layout>
    )
}

export default EditUser
