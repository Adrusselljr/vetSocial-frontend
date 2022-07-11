import React from 'react'
import CreatePost from '../components/user/CreatePost'
import DisplayPosts from '../components/user/DisplayPosts'
import UserHeader from '../components/user/UserHeader'
import Layout from '../components/Layout'
import { Box, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import UserInfo from '../components/user/UserInfo'

const ProfilePage = () => {
    const handleClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <Layout>
            <Box>
                <UserHeader />
                <Box sx={{ display: 'flex' }}>
                    <Box>
                        <UserInfo />
                    </Box>
                    <Box>
                        <CreatePost />
                        <DisplayPosts />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin: "20px", position: 'fixed', right: '50px', bottom: '20px'  }}>
                    <Button color='primary' variant="contained" onClick={ handleClick }><ArrowUpwardIcon /></Button>
                </Box>
            </Box>
        </Layout>
    )
}

export default ProfilePage
