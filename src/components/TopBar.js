import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import api from '../services/api';
export  function Topbar(){
    const { logout } = useAuth();

    const navigate =useNavigate();
    function sair(){
        logout();
        navigate('/');
    }
    return(
        <Container>
            <div className="topbar__logo">
                <p>Green Market</p>
            </div>
            <div className="topbar__menu">
                
                    <span onClick={()=>navigate('/home')}>Home</span>
                    <span onClick={()=>navigate('/user')}>Perfil</span>
                        
            </div>
        </Container>
    )
}

const Container = styled.div`
padding:10px 15px ;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
top: 0;
width: 100%;
background: #5D9040;

p{
    color: #fff;
    font-size: 30px;
}
span{
    cursor: pointer;
    color:#fff;
    margin-left: 10px;
}

`