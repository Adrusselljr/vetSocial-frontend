import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material';

function HomePage() {
    return (
        <Layout>
            <Box flexWrap="wrap">
                <Box marginTop="200px" width="50%" display="flex" flexDirection="column" alignItems="center">
                    <Typography fontSize={ 50 }>vet · er · an</Typography>
                    <Typography fontSize={ 30 }>[vet - er - uh n] -noun</Typography>
                    <Typography fontSize={ 20 }>1. Person who wrote a</Typography>
                    <Typography fontSize={ 20 }>Blank check payable to</Typography>
                    <Typography fontSize={ 20 }>United States of America</Typography>
                    <Typography fontSize={ 20 }>For an amount of</Typography>
                    <Typography fontSize={ 20 }>Up to and including</Typography>
                    <Typography fontSize={ 20 }>One's life.</Typography>
                </Box>
                <Box marginTop="200px" width="50%" display="flex" flexDirection="column">
                    Hello World
                </Box>
            </Box>
        </Layout>
    )
}

export default HomePage