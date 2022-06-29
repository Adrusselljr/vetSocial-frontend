import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, TextField, Button } from '@mui/material';
import { addUser, addToken } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
const axios = require('axios').default;

const URL = 'http://localhost:3001'

function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async () => {
        const response = axios.post(`${URL}/users/login`, {
                email: email,
                password: password
            })
            .then(response => {
                dispatch(addToken(response.data.token))
                dispatch(addUser(response.data.payload))
                navigate("profile")
                return response.data.payload
            })
        return response
    }

    return (
        <Box marginTop="160px" width="50%" display="flex" flexDirection="column">
            <Box p={ 4 }>
                <h1>Sign in</h1>
                <Box mb={ 3 }>
                    <TextField
                        id="email"
                        label="Email"
                        variant="standard"
                        value={ email }
                        onChange={ e => setEmail(e.target.value) }
                    />
                </Box>
                <Box mb={ 3 }>
                    <TextField
                        id="password"
                        type="password"
                        label="Password"
                        variant="standard"
                        value={ password }
                        onChange={ e => setPassword(e.target.value) }
                    />
                </Box>
                <Button onClick={ handleLogin } variant="contained">Sign in</Button><br/><br/>
                <h6>Don't Have an account?</h6>
                <Link style={{ textDecoration: "none" }} to="register"><Button variant="contained">Registe Here</Button></Link>
            </Box>
        </Box>
    )
}

export default Signin
