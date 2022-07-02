import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import CreateComment from './CreateComment';
import DisplayComments from './DisplayComments';
import { Box } from '@mui/material';

function DisplayPosts() {
    const user = useSelector(selectUser)
    const [clickedPostComments, setClickedPostComment] = useState("")

    return (
        <Box width={ 1 } display="flex" flexDirection="column" alignItems="center">
            {user.postHistory.map(post => {
                const comments = post.commentHistory
                return (
                    <div key={ post._id } style={{ width: "50%", marginBottom: "25px",  backgroundColor: '#242526' }} className='card'>
                        <div className="card-body">
                            <img style={{ width: "50px", height: "50px", marginRight: "10px", borderRadius: '25px' }} src={ user.profilePicture } alt="profilePicture" />
                            <h6 style={{ width: "15%", color: '#e4e6eb' }}>{ post.postOwner.username } : </h6>
                            <p style={{ width: "80%", marginRight: "25px", marginTop: "5px", color: '#e4e6eb' }}>{ post.post }</p>
                        </div>
                        {
                            comments.length > 0
                            ? <DisplayComments postId={ post._id } comments={ comments } clickedPostComments={ clickedPostComments }/>
                            : ""
                        }
                        <CreateComment comments={ comments } postId={ post._id } setClickedPostComment={ setClickedPostComment } clickedPostComments={ clickedPostComments } />
                    </div>
                )
            })}
        </Box>
    )
}

export default DisplayPosts