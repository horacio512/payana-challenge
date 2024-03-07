import { Grid, Typography } from '@mui/material'
import React from 'react'

const Table = ({ info }) => {

    console.log(info)
    return (
        <Grid container display="flex" justifyContent="center" mt={3}>
            {info.map((data) => (
                <Grid item xs={10}>
                    <Grid item xs={12}><Typography variant='h6' color="white" textAlign="center">Pregunta: {data.pregunta}</Typography></Grid>
                    <Grid item xs={12}><Typography variant='h6' color="white" textAlign="center">Valoración: {data.number}</Typography></Grid>
                </Grid>
            ))}
        </Grid>
    )
}

export default Table