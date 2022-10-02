import React, { Component, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

const ClientEdit = (props) => {
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');

    console.log('props');
    console.log(props.match);

    useEffect(() => {
        (async () => {
            if (this.props.match.params.id !== 'new') {
                const client = await (await fetch(`/clients/${this.props.match.params.id}`)).json();
                console.log(client);
                this.setState({ item: client });
            }
        })()

    }, []);

    const handleSubmit = async (event) => {
        /*event.preventDefault();
        const { item } = this.state;

        await fetch('/api/clients' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/clients');*/
    }

    return (<div>
        <AppNavbar />
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="firstname">Firstname</Label>
                    <Input type="text" name="firstname" id="firstname" value={firstname}
                        onChange={setFirstname} autoComplete="firstname" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="text" name="email" id="email" value={setEmail}
                        onChange={setEmail} autoComplete="email" />
                </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/clients">Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    </div>)
}

export default ClientEdit;