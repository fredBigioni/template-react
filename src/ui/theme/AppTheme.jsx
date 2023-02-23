import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from '.';

export const AppTheme = ({ children }) => {

    const { isDarkThemeSelected } = useSelector(store => store.general);

    return (
        <ThemeProvider theme={isDarkThemeSelected ? darkTheme : lightTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
