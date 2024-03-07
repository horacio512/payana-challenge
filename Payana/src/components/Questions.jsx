import { Button, Grid, Typography } from "@mui/material"
import { CardQuestion } from "./CardQuestion"
import preguntas from "../preguntas.json"
import { useState } from "react"
import Table from "../components/Table"

const Questions = () => {

    const [pregunta, setPregunta] = useState(preguntas.preguntas[0].texto)
    const [counter, setCounter] = useState(1)
    const [result, setResult] = useState([])
    const [show, setShow] = useState(false)

    const submit = (number) => {
        counter < preguntas.preguntas.length ? (setCounter(counter + 1)) : (setShow(true))
        let newValue = { pregunta, number }
        setResult(result => [...result, newValue])
        setPregunta(preguntas.preguntas[counter].texto)


    }
    console.log(result)
    const data = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }]

    return (

        <Grid container justifyContent="center">
            <Grid item xs={12} sm={10} mt={3}>
                <Typography variant='h1' textAlign="center" color="whitesmoke"> Pregunta </Typography>
            </Grid>

            <CardQuestion PreguntaData={pregunta} />

            <Grid item xs={12} textAlign="center" mt={3}>
                <Typography variant="h4" color="white">Puntuación</Typography>
            </Grid>

            <Grid item xs={12} sm={10} display="flex" justifyContent="center" mt={3}>
                {data.map((number, index) => (
                    <Grid key={index} item xs={2}><Button onClick={() => submit(number.number)} color="secondary" variant='contained'>{number.number}</Button></Grid>
                ))}
            </Grid>

            {
                show === true ? ((<Table info={result} />)) : (<></>)
            }

        </Grid>
    )
}

export default Questions