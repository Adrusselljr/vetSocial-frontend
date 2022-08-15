import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout'
import UserHeader from './UserHeader'
import { Box, TextField, InputLabel, Select, MenuItem, Button } from '@mui/material'

const URL = process.env.REACT_APP_AXIOS

const EditUser = () => {
    const user = useSelector(selectUser)
    const token = useSelector(selectToken)
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [address, setAddress] = useState("")
    const [branch, setBranch] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState(0)
    const [profilePicture, setProfilePicture] = useState("")
    const [coverPhoto, setCoverPhoto] = useState("")
    const [fromAddress, setFromAddress] = useState("")
    const [relationshipStatus, setRelationshipStatus] = useState("")
    const [userBio, setUserBio] = useState("")
    const [jobHistory, setJobHistory] = useState("")
    const [educationHistory, setEducationHistory] = useState("")

    useEffect(() => {
        const handleViewUser = async () => {
            const fetchedData = await fetch(`${URL}/users/current-user`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            })
            const parsedData = await fetchedData.json()
            const user = parsedData.payload
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setUsername(user.username)
            setEmail(user.email)
            setAddress(user.address)
            setBranch(user.branch)
            setPhoneNumber(user.phoneNumber)
            setProfilePicture(user.profilePicture)
            setCoverPhoto(user.coverPhoto)
            if(user.relationshipStatus === undefined) {
                setRelationshipStatus("")
            }
            else {
                setRelationshipStatus(user.relationshipStatus)
            }
            if(user.userBio === undefined) {
                setUserBio("")
            }
            else {
                setUserBio(user.userBio)
            }
            if(user.fromAddress === undefined) {
                setFromAddress("")
            }
            else {
                setFromAddress(user.fromAddress)
            }
            if(user.jobHistory === undefined) {
                setJobHistory("")
            }
            else {
                setJobHistory(user.jobHistory)
            }
            if(user.educationHistory === undefined) {
                setEducationHistory("")
            }
            else {
                setEducationHistory(user.educationHistory)
            }
            return parsedData
        }
        handleViewUser()
    }, [user, token])

    const handleUpdateUser = async () => {
        const newBody = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            address: address,
            branch: branch,
            phoneNumber: phoneNumber,
            profilePicture: profilePicture,
            coverPhoto: coverPhoto,
            fromAddress: fromAddress,
            relationshipStatus: relationshipStatus,
            userBio: userBio,
            jobHistory: jobHistory,
            educationHistory: educationHistory
        }
        const fetchedData = await fetch(`${URL}/users/update-user`, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(newBody)
        })
        const parsedData = await fetchedData.json()
        navigate("/profile")
        return parsedData
    }

    return (
        <Layout>
            <UserHeader />
            <Box height='675px' width='50%' display="flex" justifyContent='space-around' sx={{ marginTop: '25px', marginLeft: '24%' }}>
                <Box>
                    <Box mb={ 3 }>
                        <TextField
                            id="userBio"
                            type="text"
                            label="Bio"
                            variant="outlined"
                            sx={{ input: { backgroundColor: '#242526', borderRadius: '10px', color: '#e4e6eb' }, label: { color: '#e4e6eb' } }}
                            value={ userBio }
                            onChange={ e => setUserBio(e.target.value) }
                        />
                    </Box>
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
                    </Box>
                    <Box mb={ 3 }>
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
                            label="Current Location"
                            variant="outlined"
                            sx={{ input: { backgroundColor: '#242526', borderRadius: '10px', color: '#e4e6eb' }, label: { color: '#e4e6eb' } }}
                            value={ address }
                            onChange={ e => setAddress(e.target.value) }
                        />
                    </Box>
                    <Box mb={ 3 }>
                        <TextField
                            id="address"
                            type="text"
                            label="Where are you from?"
                            variant="outlined"
                            sx={{ input: { backgroundColor: '#242526', borderRadius: '10px', color: '#e4e6eb' }, label: { color: '#e4e6eb' } }}
                            value={ fromAddress }
                            onChange={ e => setFromAddress(e.target.value) }
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
                </Box>
                <Box>
                    <Box mb={ 3 }>
                        <InputLabel sx={{ color: '#e4e6eb' }}>Branch</InputLabel>
                        <Select displayEmpty sx={{ width: '100%' ,backgroundColor: '#242526', color: '#e4e6eb', borderRadius: '10px' }} value={ branch } label="Branch" onChange={ e => setBranch(e.target.value) }>
                            <MenuItem value={''}><em>Select One</em></MenuItem>
                            <MenuItem value={ "Marines" }>Marines</MenuItem>
                            <MenuItem value={ "Army" }>Army</MenuItem>
                            <MenuItem value={ "Navy" }>Navy</MenuItem>
                            <MenuItem value={ "Air-Force" }>Air Force</MenuItem>
                            <MenuItem value={ "Coast-Guard" }>Coast Guard</MenuItem>
                        </Select>
                    </Box>
                    <Box mb={ 3 }>
                        <InputLabel sx={{ color: '#e4e6eb' }}>Relationship Status</InputLabel>
                        <Select displayEmpty sx={{ width: '100%', backgroundColor: '#242526', color: '#e4e6eb', borderRadius: '10px' }} value={ relationshipStatus } label="Relationship Status" onChange={ e => setRelationshipStatus(e.target.value) }>
                            <MenuItem value={''}><em>Select One</em></MenuItem>
                            <MenuItem value={ "Single" }>Single</MenuItem>
                            <MenuItem value={ "Married" }>Married</MenuItem>
                            <MenuItem value={ "Divorced" }>Divorced</MenuItem>
                            <MenuItem value={ "Widowed" }>Widowed</MenuItem>
                            <MenuItem value={ "It's Complicated" }>It's Complicated</MenuItem>
                        </Select>
                    </Box>
                    <Box mb={ 3 }>
                        <TextField
                            id="profilePicture"
                            type="text"
                            label="Profile Picture"
                            variant="outlined"
                            sx={{ input: { backgroundColor: '#242526', borderRadius: '10px', color: '#e4e6eb' }, label: { color: '#e4e6eb' } }}
                            value={ profilePicture }
                            onChange={ e => setProfilePicture(e.target.value) }
                        />
                    </Box>
                    <Box mb={ 3 }>
                        <TextField
                            id="coverPhoto"
                            type="text"
                            label="Cover Photo"
                            variant="outlined"
                            sx={{ input: { backgroundColor: '#242526', borderRadius: '10px', color: '#e4e6eb' }, label: { color: '#e4e6eb' } }}
                            value={ coverPhoto }
                            onChange={ e => setCoverPhoto(e.target.value) }
                        />
                    </Box>
                    <Box mb={ 3 }>
                        <TextField
                            id="job"
                            type="text"
                            label="Where do you work?"
                            variant="outlined"
                            sx={{ input: { backgroundColor: '#242526', borderRadius: '10px', color: '#e4e6eb' }, label: { color: '#e4e6eb' } }}
                            value={ jobHistory }
                            onChange={ e => setJobHistory(e.target.value) }
                        />
                    </Box>
                    <Box mb={ 3 }>
                        <TextField
                            id="education"
                            type="text"
                            label="Where did you go to school?"
                            variant="outlined"
                            sx={{ input: { backgroundColor: '#242526', borderRadius: '10px', color: '#e4e6eb' }, label: { color: '#e4e6eb' } }}
                            value={ educationHistory }
                            onChange={ e => setEducationHistory(e.target.value) }
                        />
                    </Box>
                    <Box sx={{ marginLeft: '62%', marginTop: '40%' }}>
                        <Button onClick={ handleUpdateUser } variant="contained">Update</Button>
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}

export default EditUser
