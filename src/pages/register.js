import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, Container, Form, Input, StyledLink } from '../components/FormComponents';
import api from '../services/api';
import {Title} from './style'

function Register() {
    const navigation = useNavigate();
    const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
    confirmpassword: ''

    });

    function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
    }

    async function handleSubmit(e) {
    e.preventDefault();

    const user = { ...formData };

    try {
        console.log(user)
        const { data } = await api.createUser(user);
        console.log(data)
        // login(data);
        navigation('/');
    } catch (error) { 
        console.log(error);
        alert("Email ou senha incorretos");
    }
    }

    return (
    <Container>
        <Title>GreenMarket</Title>
        <Form onSubmit={handleSubmit}>
        <Input
            placeholder="Nome"
            type="nome"
            onChange={(e) => handleChange(e)}
            name="name"
            value={formData.nome}
            required
        />

        <Input
            placeholder="E-mail"
            type="email"
            onChange={(e) => handleChange(e)}
            name="email"
            value={formData.email}
            required
        />
        <Input
            placeholder="Senha"
            type="password"
            onChange={(e) => handleChange(e)}
            name="password"
            value={formData.password}
            required
        />

<Input
            placeholder="Repita a senha"
            type="password"
            onChange={(e) => handleChange(e)}
            name="confirmpassword"
            value={formData.confirmpassword}
            required
        />
        <Button type="submit">Registre-se</Button>
        </Form>
        <StyledLink to="/">Login</StyledLink>
    </Container>
);
}

export default Register;