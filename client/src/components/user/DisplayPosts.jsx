import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';
import CreateComment from './CreateComment';
import DisplayComments from './DisplayComments';
import { Box } from '@mui/material';
import DeleteEditPost from './DeleteEditPost';

const DisplayPosts = () => {
    const user = useSelector(selectUser)
    const [clickedPostComments, setClickedPostComment] = useState("")


    return (
        <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginLeft: '15px' }}>
            { user.postHistory.map(post => {
                const comments = post.commentHistory
                return (
                    <div key={ post._id } style={{ width: "100%", marginBottom: "15px",  backgroundColor: '#242526', borderRadius: '10px' }} className='card'>
                        <div style={{ display: 'flex', alignItems: 'flex-start' }} className="card-body">
                            <img style={{ width: "50px", height: "50px", marginRight: "10px", borderRadius: '25px' }} src={ user.profilePicture } alt="profilePicture" />
                            <h6 style={{ width: "15%", color: '#e4e6eb', marginTop: '7.5px' }}>{ post.postOwner.username } : </h6>
                            <p style={{ width: "65%", marginRight: "15px", marginTop: "5px", color: '#e4e6eb' }}>{ post.post }</p>
                            <DeleteEditPost style={{ position: 'absolute' }} postId={ post._id } />
                        </div>
                        <div>
                            <p style={{ color: '#e4e6eb', fontSize: 'x-small', display: 'flex', justifyContent: 'flex-end', marginRight: '10px' }}>{ comments.length } comments</p>
                        </div>
                        {
                            comments.length > 0
                            ? <DisplayComments postId={ post._id } comments={ comments } clickedPostComments={ clickedPostComments }/>
                            : ""
                        }
                        <CreateComment comments={ comments } postId={ post._id } setClickedPostComment={ setClickedPostComment } clickedPostComments={ clickedPostComments } />
                    </div>
                )
            }) }
        </Box>
    )
}

export default DisplayPosts