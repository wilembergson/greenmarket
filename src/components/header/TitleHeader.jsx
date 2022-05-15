import styled from 'styled-components'
import React, {useState} from 'react'
import Footer from "../../components/footer/Footer";

export default function TitleHeader(){

    const[nome, setNome] = useState()

    const sair =(auth)=>{
        localStorage.removeItem(auth)
    }
    return(
        <>
        <Title>
            <h3>GreenMarket</h3>
        <ButtonLogout>
        <button onClick={()=>sair('auth')}>Logout</button>
        </ButtonLogout>
        </Title>
        </>
    )
}

const Title = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    color: #FFFFFF;
    background: #135713;
    padding: 10px;
    position: fixed;
    z-index: 9;

    font-family: 'Inspiration', cursive;
    font-style: normal;
    font-size: 34px;
    line-height: 50px;
`

const ButtonLogout = styled.div`
    position: relative;
    height: 70px;
    padding: 10px;
    left: 88%;
    font-family: 'Inspiration', cursive;
    display: flex;
    background-color: #A000A;
    color: #87CEEB;
    
    button{
        background-color: #95a842;  
        color: white;
        border-color: #95a842;
        height: 45px;
        border-radius: 10px;
        width: 100%;
        font: bold 15px arial, sans-serif;
    }
    
    
`