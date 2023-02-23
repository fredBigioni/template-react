import {
    Typography, Toolbar, Grid, Card,
    CardContent, CardActions, Stack, Box, Paper
} from "@mui/material"
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

import {
    StorefrontOutlined as StoreFrontIcon,
    CreditCardOutlined as CreditCardIcon,
    ShoppingBag as ShoppingBagIcon,

} from '@mui/icons-material';
import './Dash.css';

export const Home = () => {
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Stack spacing={1} direction="row">
                        <Card sx={{
                            minWidth: {
                                sm: 48 + "%",
                                md: 49 + "%"
                            },
                            minHeight: {
                                // sx: 200 + "vh",
                                sm: 26.5 + "vh",
                                md: 150
                            }
                        }} className="gradient">
                            <CardContent>
                                <div>
                                    <CreditCardIcon className="iconstyle" />
                                </div>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#FFF" }}>
                                    $500.00
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="body2"
                                    component="div"
                                    sx={{ color: "#CCD1D1" }}>
                                    Total Orders
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            minWidth: {
                                sm: 48 + "%",
                                md: 49 + "%"
                            },
                            minHeight: {
                                // sx: 200 + "vh",
                                sm: 26.5 + "vh",
                                md: 150
                            }
                        }} className="gradientlight">
                            <CardContent>
                                <div>
                                    <ShoppingBagIcon className="iconstyle" />
                                </div>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#FFF" }}>
                                    $900.00
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="body2"
                                    component="div"
                                    sx={{ color: "#CCD1D1" }}>
                                    Total Earned
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack spacing={1.5}>
                        <Card sx={{ minWidth: 49 + "%" }}>
                            <Stack spacing={1} direction="row" className="gradientlight">
                                <div className="iconstyle">
                                    <StoreFrontIcon />
                                </div>

                                <div className="paddingball" sx={{ color: "#FFF" }}>
                                    <span className="pricetitle" sx={{ color: "#FFF" }}>$230 K </span>
                                    <br />
                                    <span className="pricesubtitle">Total Income</span>
                                </div>
                            </Stack>
                        </Card>
                        <Card sx={{ minWidth: 49 + "%" }}>
                            <Stack spacing={1} direction="row" >
                                <div className="iconstyleblack">
                                    <StoreFrontIcon />
                                </div>

                                <div className="paddingball">
                                    <span className="pricetitle">$230 K </span>
                                    <br />
                                    <span className="pricesubtitle">Total Income</span>
                                </div>
                            </Stack>
                        </Card>
                    </Stack>
                </Grid>
            </Grid>
            <Box sx={{
                minHeight: {
                    // sx: 200 + "vh",
                    sm: 5,
                    md: 15
                }
            }} />
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Stack spacing={1} direction="row">
                        <Card sx={{ minWidth: 99 + "%", height: 60 + "vh" }}>
                            <CardContent>
                                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={8}>
                                        <Item>1</Item>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Item>2</Item>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Item>3</Item>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Item>4</Item>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack spacing={1}>
                        <Card sx={{ minWidth: 99 + "%", height: 60 + "vh" }}>
                            <CardContent>

                            </CardContent>
                        </Card>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}
