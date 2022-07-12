import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/userSlice';
import { useSelector } from 'react-redux';
import { selectUser, selectToken } from '../../redux/userSlice';
import { Box, Button } from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const URL = 'http://localhost:3001'

const CreatePost = () => {
    const [post, setPost] = useState("")
    const user = useSelector(selectUser)
    const token = useSelector(selectToken)
    const dispatch = useDispatch()

    const handleCreatePost = async () => {
        const newBody = {
            post: post,
            postOwner: user._id
        }
        const fetchedData = await fetch(`${URL}/posts/create-post`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
            },
            body: JSON.stringify(newBody)
        })
        const parsedData = await fetchedData.json()
        dispatch(addUser(parsedData.payload))
        setPost("")
        return parsedData
    }

    return (
        <Box width='700px' display="flex" flexDirection="column" alignItems="center" sx={{ marginBottom: '15px', marginLeft: '15px' }}>
            <div style={{ width: '100%', backgroundColor: '#242526', borderRadius: '10px' }} className='card'>
                <div className="card-body">
                    <img style={{ width: "50px", height: "50px", marginRight: "25px", borderRadius: '25px' }} src={ user.profilePicture } alt="profilePicture" />
                    <input value={ post } onChange={ e => setPost(e.target.value) } style={{ width: "80%", marginRight: "25px", borderRadius: '10px', backgroundColor: '#3a3b3c', color: '#e4e6eb' }} placeholder={` What's on your mind, ${ user.firstName }?`} type="text" />
                    <Button sx={{ backgroundColor: 'black' }} onClick={ handleCreatePost } variant="contained"><PostAddIcon sx={{ fontSize: 'medium' }} /></Button>
                </div>
            </div>
        </Box>

    )
}

export default CreatePost
