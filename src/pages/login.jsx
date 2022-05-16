import React, { useState,useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form, Input, StyledLink } from '../components/FormComponents';
import UserContext from '../contexts/UserContext';
import useAuth from '../hooks/useAuth';
import api from '../services/api';
import {Title} from './style'

function Login() {
    const { login } = useAuth();
    const {setName, setToken} = useContext(UserContext)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
    email: '',
    password: ''
    });

    function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const user = { ...formData };
        try {
            const { data } = await api.login(user);
            setName(data.name)
            setToken(data.token)
            login(data);
            navigate('/home')
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
            <Button type="submit">Entrar</Button>
        </Form>
        <StyledLink to="/register">Registre-se!</StyledLink>
    </Container>
);
}

export default Login;