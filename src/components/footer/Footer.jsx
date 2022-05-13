import styled from "styled-components";

export default function Footer(){
    return(
        <HomeFooter>
            <EmptyCartTitle>Selecione seus itens</EmptyCartTitle>
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