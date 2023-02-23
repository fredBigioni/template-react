
import { Box, Toolbar } from '@mui/material';
// import { Navbar } from '../../ui/components/old';
import { NavBar, SideNav } from '../../ui/components';
import { styled } from '@mui/material/styles';


const drawerWidth = 240;

export const LayoutApp = ({ children }) => {   

    const BoxLayout = styled(Box, {})(({ theme }) => ({        
        backgroundColor : theme.palette.secondary.dark
    }));

    return (       
        <>
            <NavBar />

            <Box >
                <Box sx={{ display: 'fixed' }}>
                    <SideNav />
                    <BoxLayout component='main' sx={{
                        flexGrow: 1,
                        p: 3,
                        mt: 8,
                        height: 91 + "vh",     
                        // overflowY: 'scroll',                   
                        backgroundColor: 'theme.secondary.dark',                        
                    }}>
                        {children}
                    </BoxLayout>
                </Box>
            </Box>
        </>
    )
}
