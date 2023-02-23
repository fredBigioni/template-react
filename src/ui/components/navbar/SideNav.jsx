import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import {
    Box, Drawer as MuiDrawer, Toolbar, List, CssBaseline, Typography, Divider, IconButton,
    ListItem, ListItemButton, ListItemIcon, ListItemText, Grid, Collapse
} from '@mui/material';
import {
    ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon,
    LogoutOutlined,
    Mail as MailIcon, MoveToInbox as InboxIcon,
    Group, Home, Task, Settings, Create, PrecisionManufacturing, ExpandLess, ExpandMore, StarBorder
} from '@mui/icons-material';
import { DrawerComponent as Drawer } from '../drawer';
import { changeTheme, logout } from '../../../store';
import { LightBlueSwitch } from '../switches';
import { Menu } from './Menu';


export const SideNav = () => {

    const navigate = useNavigate();
    const { stateSideNav } = useSelector(state => state.general);
    const theme = useTheme();

    const { isDarkThemeSelected } = useSelector(state => state.general);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    }

    const onHandleChange = (event) => {
        dispatch(changeTheme(event.target.checked));
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                PaperProps={{
                    sx: {
                        backgroundColor: "primary.main"
                    }
                }}
                variant="permanent" open={stateSideNav}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: theme.spacing(0, 1),
                    // necessary for content to be below app bar
                    ...theme.mixins.toolbar
                }} />
                <Divider />
                <List>
                    <Menu />
                    {/* {
                        ["Home", "Task", "User", "ABMs", "Update Data Mantis", "Settings"].map((page) => {
                            return (
                                <ListItem
                                    key={page}
                                    disablePadding sx={{ display: 'block' }}
                                    onClick={() => { navigate(`/tracker/${page}`) }}>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                                color: 'secondary.light'
                                            }}
                                        >
                                            {
                                                setIcon(page)
                                            }
                                        </ListItemIcon>
                                        <ListItemText primary={`${page}`}
                                            sx={{
                                                opacity: open ? 1 : 0,
                                                color: 'secondary.light'
                                            }}

                                        />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })
                    } */}
                </List>

                <Divider />
                <List>
                    <ListItem
                        disablePadding sx={{ display: 'block' }}
                    // onClick={() => { navigate(`/tracker/${page}`) }}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 1,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <LightBlueSwitch
                                    checked={isDarkThemeSelected}
                                    onChange={onHandleChange}
                                />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        disablePadding sx={{ display: 'block' }}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: 'red'
                                }}
                            >
                                <LogoutOutlined onClick={onLogout} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}