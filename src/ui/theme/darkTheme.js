import { createTheme } from "@mui/material";
export const darkTheme = createTheme({
    palette: {
        //  mode: 'dark',
        primary:
        {
            main: '#303030',
        },
        secondary:
        {
            light: '#FFFFFF',
            main: '#212121',
            dark: '#808B96'
        },       
        // error: {
        //     light: '#e57373',
        //     main: '#f44336',
        //     dark: '#d32f2f',
        // },
        // warning: {
        //     light: '#ffb74d',
        //     main: '#ffa726',
        //     dark: '#f57c00',
        // },
        // info: {
        //     light: '#4fc3f7',
        //     main: '#29b6f6',
        //     dark: '#0288d1',
        // },
        // success: {
        //     light: '#81c784',
        //     main: '#66bb6a',
        //     dark: '#388e3c',
        // }
    },
});

// Color negro numero #000000 – Status bar
// Color gris numero #212121 – App bar
// Color gris numero #303030 – Background
// Color gris numero #424242 – Cards/Dialogs