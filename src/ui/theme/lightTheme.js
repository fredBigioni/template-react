import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const lightTheme = createTheme({
    typography: {
        logo: {
            color: 'white',
            fontFamily: [
            ],
            fontSize: '1.2rem'
        },
        navLinks: {
            color: 'white',
            fontFamily: [
            ],            
        },
        buttonFont: {
            color: 'white',
            fontFamily: [
            ],            
        },

    },
    palette: {
        mode: 'light',
        primary: {
            light: '#FFFFFF',
            main: '#EAEDED',
            dark: '#42a5f5',
        },
        secondary: {
            light: '#000000',
            main: '#7F8C8D',
            dark: '#FFFFFF',
        },        
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
        },
        warning: {
            light: '#ffb74d',
            main: '#ffa726',
            dark: '#f57c00',
        },
        info: {
            light: '#4fc3f7',
            main: '#29b6f6',
            dark: '#0288d1',
        },
        success: {
            light: '#81c784',
            main: '#66bb6a',
            dark: '#388e3c',
        }
    }
})