import { Grid, Typography } from '@mui/material'
import React from 'react'

export const CardQuestion = ({ PreguntaData }) => {

  return (
    <Grid container display="flex" justifyContent="center">

      <Grid item xs={12} sm={10} mt={3}>
        <Typography variant='h5' textAlign="center" color="white">{PreguntaData}</Typography>
      </Grid>

    </Grid>

  )
}
