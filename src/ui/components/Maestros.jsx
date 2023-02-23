import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Popover, Typography } from '@mui/material';

export const Maestros = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


    return (
        <>
            <NavLink ref={anchorRef} onClick={handleToggle}
                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>
                <Typography variant='navLinks' noWrap component='div' >Maestros</Typography>
            </NavLink>
            <Popover

                open={open}
                anchorEl={anchorRef.current}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <NavLink                    
                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                    to="/"
                >
                    <Typography sx={{ p: 2 }} variant='h7' noWrap component='div' >Update data Mantis</Typography>
                </NavLink>
            </Popover>
            {/* <Popper open={open} anchorEl={anchorRef.current} role={undefined}
                placement="bottom-start" transition
               
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Link to="/" className="link subLink">
                                            
                                            test
                                        </Link>
                                    </MenuItem>

                                    
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper> */}
        </>
    )
}
