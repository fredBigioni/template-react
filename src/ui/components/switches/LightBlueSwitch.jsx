
import { Switch } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors';

export const LightBlueSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: lightBlue[600],
        '&:hover': {
            backgroundColor: alpha(lightBlue[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: lightBlue[600],
    },
}));