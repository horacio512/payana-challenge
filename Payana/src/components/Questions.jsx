import React from 'react'
import { Button, Grid, Typography } from "@mui/material"


const Questions = () => {

    const data = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }]


    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} sm={10} mt={3}>
                <Typography variant='h1' textAlign="center" color="whitesmoke"> Pregunta </Typography>
            </Grid>

            <Grid item xs={12} sm={10} mt={3}>
                <Typography variant='h5' color="white">Nihil, enim repellat, ad odit fugit nulla molestiae eveniet dicta laborum voluptas rem in odio quo, cumque ab? Provident ducimus voluptatem aliquam.</Typography>
            </Grid>
            <Grid xs={12} textAlign="center" mt={3}>
                <Typography variant="h4" color="white">Puntuación</Typography>
            </Grid>

            <Grid item xs={12} sm={10} display="flex" justifyContent="center" mt={3}>

                {data.map((number) => (
                    <Grid xs={2}><Button color="secondary" variant='contained'>{number.number}</Button></Grid>
                ))}
            </Grid>

        </Grid>
    )
}

export default Questions