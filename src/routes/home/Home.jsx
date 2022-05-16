import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import TitleHeader from "../../components/header/TitleHeader";
import ProductItem from "../../components/productItem/ProductItem";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import useAuth from "../../hooks/useAuth";
import API_URL from "../../CommonVariables";

export default function Home(){
    
    const {name, token} = useContext(UserContext)
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    
    useEffect(()=>{
        const promise = axios.get(`${API_URL}/products`)
        .then(response => {
            setProducts(response.data)
        })
        .catch(error => console.log('Não foi possivel obter os produtos.'))
    }, [])

    function goConfirm(){
        navigate('/confirm')
    }
    
    return(
        <Main>
            <TitleHeader/>
            <UserName>
                Bem-vindo, {name}! 
                <HistoricBtn onClick={()=> navigate('/ordersList')}>historico</HistoricBtn>
            </UserName>
            <ListItems>
                {
                    products.map(item => <ProductItem productItem={item}/>)
                }
            </ListItems>
            <Footer title={'Continuar'} route={goConfirm}/>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    background: #FBF6A9;
    position: relative;
`
const UserName = styled.h3`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: #FBF6A9;
    position: absolute;
    top: 80px;
    padding: 15px;  

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 15px;
    color: #135713;
`
const ListItems = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: scroll;
    background: #FBF6A9;
    width: 100%;
    position: fixed;
    top: 120px;
    bottom: 120px;
    padding: 15px 0;
`
const HistoricBtn = styled.button`
    color: #FFFFFF;
    background: #135713;
    border: none;
    border-radius: 3px;
    padding: 8px;
    font-size: 16px;
    margin-bottom: 8px;
    position: absolute;
    top: 8px;
    right: 15px;
`