import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Box, TextField, Button, InputLabel, Select, MenuItem } from '@mui/material';

const URL = 'http://localhost:3001'

const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [address, setAddress] = useState("")
    const [branch, setBranch] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState(0)
    const navigate = useNavigate()

    const handleRegister = async () => {
        const newBody = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            address: address,
            branch: branch,
            phoneNumber: phoneNumber,
            email: email,
            password: password
        }
        const fetchedData = await fetch(`${URL}/users/create-user`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBody)
        })
        const parsedData = await fetchedData.json()
        navigate("/")
        return parsedData
    }

    return (
        <Box marginTop="160px" width="50%" display="flex" flexDirection="column" paddingBottom='278px'>
            <Box p={ 4 }>
                <h1 style={{ color: '#e4e6eb' }}>Register</h1>
                <Box mb={ 3 }>
                    <Box mb={ 3 }>
                        <TextField
                            id="firstName"
                            type="text"
                            label="First Name"
                            variant="outlined"
                            value={ firstName }
                            sx={{ input: { backgroundColor: '#242526', borderRadius: '10px', color: '#e4e6eb' }, label: { color: '#e4e6eb' } }}
                            style={{ marginRight: '10px' }}
                            onChange={ e => setFirstName(e.target.value) }
                        />
                        <TextField
                            id="lastName"
                            type="text"
                            label="Last Name"
                            variant="outlined"
                            sx={{ input: { backgroundColor: '#242526', borderRadius: '10px', color: '#e4e6eb' }, label: { color: '#e4e6eb' } }}
                            value={ lastName }
                            onChange={ e => setLastName(e.target.value) }
                        />
                    </Box>
                    <Box mb={ 3 }>
                        <TextField
                            id="address"
                            type="text"
                            label="Address"
                            variant="outlined"
                            sx={{ input: { backgroundColor: '#242526', borderRadius: '10px', color: '#e4e6eb' }, label: { color: '#e4e6eb' } }}
                            value={ address }
                            onChange={ e => setAddress(e.target.value) }
                        />
                    </Box>
                    <Box mb={ 3 }>
                        <TextField
                            id="phoneNumber"
                            placeholder='000-000-0000'
                            type="phone"
                            label="Phone Number"
                            variant="outlined"
                            style={{ placeholder: { color: '#e4e6eb' } }}
                            sx={{ input: { backgroundColor: '#242526', borderRadius: '10px', color: '#e4e6eb' }, label: { color: '#e4e6eb' }, placeholder: { color: '#e4e6eb' } }}
                            value={ phoneNumber }
                            onChange={ e => setPhoneNumber(e.target.value) }
                        />
                    </Box>
                    <Box mb={ 3 }>
                        <TextField
                            id="username"
                            type="text"
                            label="Username"
                            variant="outlined"
                            sx={{ input: { backgroundColor: '#242526', borderRadius: '10px', color: '#e4e6eb' }, label: { color: '#e4e6eb' } }}
                            value={ username }
                            onChange={ e => setUsername(e.target.value) }
                        />
                    </Box>
                    <Box mb={ 3 }>
                        <InputLabel sx={{ color: '#e4e6eb' }}>Branch</InputLabel>
                        <Select displayEmpty sx={{ width: '40%', backgroundColor: '#242526', color: '#e4e6eb', borderRadius: '10px' }} value={ branch } label="Branch" onChange={ e => setBranch(e.target.value) }>
                            <MenuItem value={''}><em>Select One</em></MenuItem>
                            <MenuItem value={ "Marines" }>Marines</MenuItem>
                            <MenuItem value={ "Army" }>Army</MenuItem>
                            <MenuItem value={ "Navy" }>Navy</MenuItem>
                            <MenuItem value={ "Air-Force" }>Air Force</MenuItem>
                            <MenuItem value={ "Coast-Guard" }>Coast Guard</MenuItem>
                        </Select>
                    </Box>
                    <Box mb={ 3 }>
                        <TextField
                            id="email"
                            type="email"
                            label="Email"
                            variant="outlined"
                            sx={{ input: { backgroundColor: '#242526', borderRadius: '10px', color: '#e4e6eb' }, label: { color: '#e4e6eb' } }}
                            value={ email }
                            onChange={ e => setEmail(e.target.value) }
                        />
                    </Box>
                    <Box mb={ 3 }>
                        <TextField
                            id="password"
                            type="password"
                            label="Password"
                            variant="outlined"
                            sx={{ input: { backgroundColor: '#242526', borderRadius: '10px', color: '#e4e6eb' }, label: { color: '#e4e6eb' } }}
                            value={ password }
                            onChange={ e => setPassword(e.target.value) }
                        />
                    </Box>
                    <Button onClick={ handleRegister } variant="contained">Submit</Button><br/><br/>
                    <h6 style={{ color: '#e4e6eb' }}>Already have an account?</h6>
                    <Link style={{ textDecoration: "none" }} to="/"><Button variant="contained">Login Here</Button></Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Register
