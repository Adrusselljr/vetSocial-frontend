import React, { useState, useRef } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box, Popper, Grow, Paper, ClickAwayListener, MenuItem, MenuList, Button } from '@mui/material';

const DeleteEditPost = props => {
    const { postId } = props
    const [open, setOpen] = useState(false)
    const anchorRef = useRef(null)

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen)
    }
    
    const handleClose = e => {
        if(anchorRef.current && anchorRef.current.contains(e.target)) {
            return
        }
        setOpen(false)
    }

    const handleListKeyDown = e => {
        if(e.key === 'Tab') {
            setOpen(false)
        } else if (e.key === 'Escape') {
            setOpen(false)
        }
    }

    return (
        <Box>
            <Button ref={ anchorRef } id="composition-button" aria-controls={ open ? 'composition-menu' : undefined } aria-expanded={ open ? 'true' : undefined } aria-haspopup="true" onClick={handleToggle}>
                <MoreHorizIcon color='secondary' />
            </Button>
            <Popper open={ open } anchorEl={ anchorRef.current } role={ undefined } placement="bottom-start" transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow { ...TransitionProps } style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom', marginRight: '53px' }}>
                        <Paper sx={{ backgroundColor: '#3a3b3c' }}>
                            <ClickAwayListener onClickAway={ handleClose }>
                                <MenuList autoFocusItem={ open } id="composition-menu" aria-labelledby="composition-button" onKeyDown={ handleListKeyDown }>
                                    <MenuItem sx={{ color: '#e4e6eb' }} onClick={ handleClose }>Edit Post</MenuItem>
                                    <MenuItem sx={{ color: '#e4e6eb' }} onClick={ handleClose }>Delete Post</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    )
}

export default DeleteEditPost