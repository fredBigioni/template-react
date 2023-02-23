import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { SideNav } from '../../../ui';

export const Settings = () => {
  return (
    <>
      <Box height={20}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h5">Settings</Typography>
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>
      </Box>

    </>
  )
}
