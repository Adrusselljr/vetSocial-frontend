import React from 'react'
import { useSelector } from 'react-redux';
import { selectClicked, selectClickedPostComments } from '../redux/userSlice';
import { Box } from '@mui/material';

function DisplayComments(props) {
    const { comments } = props
    const clicked = useSelector(selectClicked)
    const clickedPostComments = useSelector(selectClickedPostComments)

    return (
        <Box width={ 1 } display="flex" flexDirection="column">
            <div style={{  backgroundColor: '#242526' }} className='card'>
                {comments.map(comment =>
                    clicked && clickedPostComments === comment.post
                    ? (
                        <div key={ comment._id } className="card-body">
                            <img style={{ width: "50px", height: "50px", marginRight: "10px", marginLeft: "25px", borderRadius: '25px' }} src={ comment.commentOwner.profilePicture } alt="profilePicture" />
                            <h6 style={{ width: "125px", color: '#e4e6eb' }}>{ comment.commentOwner.username } : </h6>
                            <p style={{ width: "98%", marginTop: "5px", color: '#e4e6eb' }}>{ comment.comment }</p>
                        </div>
                    )
                    : ("")
                )}
            </div>
        </Box>
    )
}

export default DisplayComments