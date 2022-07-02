import React from 'react';
import Header from './Header';
import { Box } from '@mui/material';

const Layout = props => {
    const { children } = props

    return (
        <Box sx={{ backgroundColor: 'black', height: '0 auto' }} minWidth={ 320 }>
            <Header />

            <div>
                { children }
            </div>
        </Box>
    )
}

export default Layout