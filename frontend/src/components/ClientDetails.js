import React from 'react'
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const ClientDetails = () => {
    const { id } = useParams();

    console.log(id);

    const { fetchMovies } = useAuthContext();
    const [firstname, setFirstname] = React.useState("");
    const [email, setEmail] = React.useState("");

    const submitMovie = useCallback(async (firstname, email) => {
        try {
            const response = await fetch(`/api/clients/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstname, email }),
            });
            const json = await response.json();
            fetchMovies();
            //setToken(json);
            return json;
        } catch (e) {
            console.log('fetchChartData error: ', e);
            throw new Error((e).message);
        } finally {

        }
    }, []);

    return <Container maxWidth="md" component="main">
        <Card>
            <Typography variant="h5" style={{ margin: '10px' }}>Add a new movie</Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                style={{}}
            >
                <TextField id="username" label="Firstname" variant="outlined" type='text' value={firstname} onChange={(ev) => setFirstname(ev.target.value)} required />
                <TextField id="password" label="Email" variant="outlined" type='text' value={email} onChange={(ev) => setEmail(ev.target.value)} required />
                <br></br>
                <br></br><br></br>
                <Button variant="outlined" style={{ marginTop: '16px' }} onClick={async () => { submitMovie(firstname, email); }}>Submit customer</Button>
                <br></br><br></br><br></br>
            </Box>
        </Card>
    </Container>
};

export default ClientDetails;