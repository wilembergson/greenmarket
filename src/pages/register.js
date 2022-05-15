import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button, Container, Form, Input, StyledLink } from '../components/FormComponents';
import useAuth from '../hooks/useAuth';
import api from '../services/api';
import {Title} from './style'

function Register() {
    const { auth,login } = useAuth();
    const navigation = useNavigate();
    const navigate =useNavigate();
    const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
    confirmpassword: ''

    });
    useEffect(() => {
    // async function verificarLogin() {
    //     try{
    //     if (auth) {
    //     const { data } = await api.getUser(auth);
    //     if(data){
    //         navigate('/home');
    //     }
    //     else{
    //         return;
    //     }
    //     }
    //     }catch (error) {
    //     console.log(error);
    //     alert("Erro, recarregue a página em alguns segundos");
    //     }}
        // verificarLogin();
    },[auth])


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
        navigation('/login');
    } catch (error) { 
        console.log(error);
        alert("Email ou senha incorretos");
    }
    }

    return (
    <Container>
        <Title>Green Market</Title>
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
    </Container>
);
}

export default Register;