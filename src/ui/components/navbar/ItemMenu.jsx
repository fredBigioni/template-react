import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Create, ExpandLess, ExpandMore, Group, Home, PrecisionManufacturing, Settings, StarBorder, Task } from "@mui/icons-material"
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

export const ItemMenu = (props) => {
    const {urlNavigate, itemTitle, subMenues } = props;
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            {
                subMenues.length === 0 ?
                    <ListItemButton onClick={() => { navigate(urlNavigate) }}>
                        <ListItemIcon sx={{ color: 'secondary.light' }}>
                            {
                                itemTitle.toLowerCase() === 'home' ? <Home /> :
                                    itemTitle.toLowerCase() === 'tasks' ? <Task /> :
                                        itemTitle.toLowerCase() === 'users' ? <Group /> :
                                            itemTitle.toLowerCase() === 'update data mantis' ? <PrecisionManufacturing /> :
                                                <Settings />
                            }
                        </ListItemIcon>
                        <ListItemText primary={itemTitle} sx={{ color: 'secondary.light' }} />
                    </ListItemButton>
                    :
                    <>
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon sx={{ color: 'secondary.light' }}>
                                <Create />
                            </ListItemIcon>
                            <ListItemText primary="ABMs" sx={{ color: 'secondary.light' }}/>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon sx={{ color: 'secondary.light' }}>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary={subMenues[0].itemTitle} sx={{ color: 'secondary.light' }}/>
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </>
            }
        </>
    )
}
