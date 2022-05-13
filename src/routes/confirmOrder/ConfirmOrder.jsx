import { useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import TitleHeader from "../../components/header/TitleHeader";
import UserContext from "../../contexts/UserContext";
import queryToStr from 'query-string';

export default function ConfirmOrder(){

    const result = queryToStr.parse(useLocation().confirm);
    const {cart} = useContext(UserContext)
    return(
        <Main>
            <TitleHeader/>
            <ListItems>
                <h3>{result.data}</h3>
            </ListItems>
            <Footer/>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    background: #FBF6A9;
    position: relative;
`
const ListItems = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: scroll;
    background: #FBF6A9;
    width: 100%;
    position: fixed;
    top: 80px;
    bottom: 120px;
    padding: 15px 0;
`