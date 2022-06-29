import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';
import { useSelector } from 'react-redux';
import { selectUser, selectToken } from '../redux/userSlice';
import { Box, Button } from '@mui/material';
import ProfilePicture from '../images/default-profile-pic.jpeg'

const URL = 'http://localhost:3001'

function CreateComment(props) {
    const { postId } = props
    const [comment, setComment] = useState("")
    const user = useSelector(selectUser)
    const token = useSelector(selectToken)
    const dispatch = useDispatch()

    const handleCreateComment = async postId => {
        const newBody = {
            comment: comment,
            commentOwner: user._id
        }
        const fetchedData = await fetch(`${URL}/comments/create-comment/${postId}`, {
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
        setComment("")
        return parsedData
    }

    return (
        <Box width={ 1 } display="flex" flexDirection="column">
            <div className='card'>
                <div className="card-body">
                    <img style={{ width: "50px", height: "50px", marginRight: "25px" }} src={ ProfilePicture } alt="profilePicture" />
                    <input value={ comment } onChange={ e => setComment(e.target.value) } style={{ width: "76%", marginRight: "25px" }} placeholder={" Write a comment..."} type="text" />
                    <Button onClick={() => handleCreateComment(postId) } variant="contained">Comment</Button>
                </div>
            </div>
        </Box>
    )
}

export default CreateComment