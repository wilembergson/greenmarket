import React, { useState } from 'react';
import { Spin } from 'react-cssfx-loading';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
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
    const [loading, setLoading] = useState(false)
    const erroMessage = () => toast.error("As senhas digitadas não batem.", {autoClose: 3000, position: toast.POSITION.TOP_CENTER})
    const sucessMessage = () => toast.success("Usuário criado com sucesso.", {autoClose: 3000, position: toast.POSITION.TOP_CENTER})

    function handleChange({ target }) {
        setFormData({ ...formData, [target.name]: target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        const user = { ...formData };

        try {
            console.log(user)
            const { data } = await api.createUser(user);
            sucessMessage()
            setTimeout(()=> navigation('/'), 3000)
        } catch (error) { 
            console.log(error);
            setLoading(false)
            erroMessage()
        }
    }

    return (
    <Container>
        <ToastContainer/>
        {(loading===false) ? 
        <>
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
        </> : <Spin color="#94a051" width="150px" height="150px"/>}    
    </Container>
    );
}

export default Register;