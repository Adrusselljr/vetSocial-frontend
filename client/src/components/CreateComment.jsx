import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';
import { useSelector } from 'react-redux';
import { selectUser, selectToken } from '../redux/userSlice';
import { Box, Button } from '@mui/material';
import AddCommentIcon from '@mui/icons-material/AddComment';
import CommentIcon from '@mui/icons-material/Comment';

const URL = 'http://localhost:3001'

function CreateComment(props) {
    const { postId, comments } = props
    const [comment, setComment] = useState("")
    const [clicked, setClicked] = useState(false)
    const user = useSelector(selectUser)
    const token = useSelector(selectToken)
    const dispatch = useDispatch()

    const handleClicked = postId => {
        if(comments.post === postId) {
            setClicked(prevState => !prevState)
        }
    }
    console.log(comments)

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
                    <img style={{ width: "50px", height: "50px", marginRight: "25px" }} src={ user.profilePicture } alt="profilePicture" />
                    <input value={ comment } onChange={ e => setComment(e.target.value) } style={{ width: "76%", marginRight: "25px" }} placeholder={" Write a comment..."} type="text" />
                    <Button onClick={() => handleCreateComment(postId) } sx={{ marginRight: '10px' }} variant="contained"><AddCommentIcon sx={{ fontSize: 'medium' }} /></Button>
                    {
                        comments.length > 0
                        ? <Button onClick={() => handleClicked(postId) } variant="contained"><CommentIcon sx={{ fontSize: 'medium' }} /></Button>
                        : ""
                    }
                </div>
            </div>
        </Box>
    )
}

export default CreateComment