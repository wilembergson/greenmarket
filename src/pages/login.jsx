import axios from 'axios';
import { Spin } from "react-cssfx-loading";
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API_URL from '../CommonVariables';
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
    const [loading, setLoading] = useState(false)

    function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        const user = { ...formData };
        try {
            const { data } = await api.login(user);
            setName(data.name)
            setToken(data.token)
            login(data);

            const promise = axios.get(`${API_URL}/orders`,{
                headers: {
                    authorization: `Bearer ${data.token}`
                }
            })
            promise.then(response => {
                localStorage.setItem("historic", JSON.stringify(response.data))
                setLoading(false)
                navigate('/home')
            })
            .catch(error => {
                console.log("Não foi possivel obter a lista de compras.")}
            )
            
        } catch (error) { 
            console.log(error)
            setLoading(false)
            alert("Email ou senha incorretos");
        }
    }

    return (
    <Container>
        {(!loading) ? 
        <>
            <Title>GreenMarket</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="E-mail"
                    type="email"
                    onChange={(e) => handleChange(e)}
                    name="email"
                    value={formData.email}
                    disabled={loading}
                    required
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    onChange={(e) => handleChange(e)}
                    name="password"
                    value={formData.password}
                    disabled={loading}
                    required
                />
                <Button type="submit">Entrar</Button>
            </Form>
            <StyledLink to="/register" >Registre-se!</StyledLink>
        </> 
        : <Spin color="#94a051" width="150px" height="150px"/>}     
    </Container>
);
}

export default Login;