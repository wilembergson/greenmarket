import styled from 'styled-components'
import React, {useContext} from 'react'
import UserContext from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

export default function TitleHeader(){
    const {setName, setToken, setCart} = useContext(UserContext)
    const navigate = useNavigate()

    function logOut(){
        navigate('/')
        setName(null)
        setToken(null)
        setCart(null)
    }
    return(
        <>
            <Title>
                <h3>GreenMarket</h3>
                <ButtonLogout onClick={()=> logOut()}>
                    Sair
                </ButtonLogout>
            </Title>
        </>
    )
}

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    color: #FFFFFF;
    background: #135713;
    padding: 10px;
    position: fixed;
    z-index: 9;

    font-family: 'Inspiration', cursive;
    font-style: normal;
    font-size: 38px;
    line-height: 50px;
`

const ButtonLogout = styled.button`
    padding: 10px;
    left: 88%;
    display: flex;
    color: #FFFFFF;
    background: none;
    border: none;
    font-size: 20px;
`