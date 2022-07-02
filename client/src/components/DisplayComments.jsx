import React from 'react'
import { Box } from '@mui/material';

function DisplayComments(props) {
    const { comments } = props

    return (
        <Box width={ 1 } display="flex" flexDirection="column">
            <div className='card'>
                {comments.map(comment => {
                    return (
                        <div key={ comment._id } className="card-body">
                            <img style={{ width: "50px", height: "50px", marginRight: "10px", marginLeft: "25px" }} src={ comment.commentOwner.profilePicture } alt="profilePicture" />
                            <h6 style={{ width: "15%" }}>{ comment.commentOwner.username } : </h6>
                            <p style={{ width: "80%", marginTop: "5px" }}>{ comment.comment }</p>
                        </div>
                    )
                })}
            </div>
        </Box>
    )
}

export default DisplayComments