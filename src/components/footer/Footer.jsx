import { useContext, useState } from "react"
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function Footer(props){
    const {cart} = useContext(UserContext)

    return(
        <HomeFooter>
            {console.log(cart)}
            {(cart === null) ? 
                <EmptyCartTitle>Selecione seus itens</EmptyCartTitle>
            :
                <h3>R${cart.total}</h3>
            }
            
        </HomeFooter>
    )
}

const HomeFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 120px;
    background:#e2dd7b;
`
const EmptyCartTitle = styled.label`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 15px;
    color: rgba(0, 0, 0, 0.28);
`