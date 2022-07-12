import React, { useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, MenuItem, Button, Menu, Typography } from '@mui/material';


const DeleteEditPost = props => {
    const { postId } = props
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = e => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box>
            <Button id="demo-customized-button" aria-controls={ open ? 'demo-customized-menu' : undefined } aria-haspopup="true" aria-expanded={ open ? 'true' : undefined } variant="contained" disableElevation onClick={ handleClick }>
                <MoreHorizIcon />
            </Button>
            <Menu id="demo-customized-menu" MenuListProps={{ 'aria-labelledby': 'demo-customized-button' }} anchorEl={ anchorEl } open={ open } onClose={ handleClose }>
                <MenuItem onClick={ handleClose } disableRipple>
                    <EditIcon fontSize='small' sx={{ marginRight: '10px' }} />
                    <Typography>Edit</Typography>
                </MenuItem>
                <MenuItem onClick={ handleClose } disableRipple>
                    <DeleteForeverIcon fontSize='small' sx={{ marginRight: '10px' }} />
                    <Typography>Delete</Typography>
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default DeleteEditPost