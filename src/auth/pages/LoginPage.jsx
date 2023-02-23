import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, TextField, Typography, Button, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { startLogin } from '../../store';
import { red } from '@mui/material/colors';


export const LoginPage = () => {

  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.general);

  const onAuthenticate = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');

    dispatch(startLogin(username, password));

  }  

  return (
    <AuthLayout title='TimeTracker Login'>
      <form
        onSubmit={onAuthenticate}
      >
        <fieldset disabled={isLoading}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                name='username'
                label="UserName"
                type="text"
                variant="outlined"
                placeholder="Ingrese su username"
                fullWidth
                sx={{
                  color: 'white'
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                name='password'
                label="Password"
                type="password"
                variant="outlined"
                fullWidth />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button
                variant='contained'
                type='submit'
                color='success'
                fullWidth>
                <Typography variant='buttonFont'>Login</Typography>
              </Button>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 2, ml: 35 }}>
              <Grid item xs={12} sm={12}>
                <Typography
                  sx={{
                    fontSize: '12px',

                  }}>
                  <i><b>V2.0</b></i></Typography>
              </Grid>
            </Grid>
          </Grid>
        </fieldset>
      </form>
    </AuthLayout >
  )
}
