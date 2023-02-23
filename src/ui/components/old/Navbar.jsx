
import { AppBar, Toolbar, IconButton, Grid, Typography, Switch } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme, logout } from '../../../store';

import { Maestros } from '../Maestros';
import { LightBlueSwitch } from '../switches';



export const Navbar = ({ drawerWidth }) => {

    const { isDarkThemeSelected } = useSelector(state => state.general);
    const dispatch = useDispatch();

    const onLogout = () => {

        dispatch(logout());

        // navigate('/login', {
        //     replace: true
        // });
    }

    const onHandleChange = (event) => {
        dispatch(changeTheme(event.target.checked));
    }

    return (
        <AppBar
            position='fixed'
            sx={{
                // width: { sm: `calc(100% - ${drawerWidth}px)` },
                width: { sm: `calc(100%)` },
                // ml: { sm: `${drawerWidth}px` },          
                backgroundColor: 'secondary.ligth'
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>
                <Grid container direction="row" justifyContent="start">
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/tracker"
                    >
                        <Typography variant='logo' noWrap component='div'>TimeTracker</Typography>
                    </NavLink>
                </Grid>

                <Grid container direction='row' justifyContent="end" alignItems='center'>
                    <Grid item xs={2}>
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/tracker/task"
                        >
                            <Typography variant='navLinks' noWrap component='div' >Task</Typography>
                        </NavLink>
                    </Grid>
                    <Grid item xs={2}>
                        <Maestros />
                    </Grid>
                    <Grid item xs={2}>                       
                        <LightBlueSwitch
                            checked={isDarkThemeSelected}
                            onChange={onHandleChange}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton color='error' onClick={onLogout} >
                            <LogoutOutlined />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar >

    )
}
