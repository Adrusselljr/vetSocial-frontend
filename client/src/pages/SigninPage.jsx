import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material';
import Signin from '../components/Signin';
import '../index.css'

const SigninPage = () => {
    return (
        <Layout>
            <Box display="flex">
                <Box marginTop="200px" width="75%" display="flex" flexDirection="column" alignItems="center">
                    <Typography color='secondary' fontSize={ 50 }>vet · er · an</Typography>
                    <Typography color='secondary' fontSize={ 30 }>[vet - er - uh n] -noun</Typography>
                    <Typography color='secondary' fontSize={ 20 }>1. Person who wrote a</Typography>
                    <Typography color='secondary' fontSize={ 20 }>Blank check payable to</Typography>
                    <Typography color='secondary' fontSize={ 20 }>United States of America</Typography>
                    <Typography color='secondary' fontSize={ 20 }>For an amount of</Typography>
                    <Typography color='secondary' fontSize={ 20 }>Up to and including</Typography>
                    <Typography color='secondary' fontSize={ 20 }>One's life.</Typography>
                </Box>
                <Signin />
            </Box>
        </Layout>
    )
}

export default SigninPage
