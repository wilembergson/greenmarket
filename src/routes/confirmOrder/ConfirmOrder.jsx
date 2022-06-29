import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import TitleHeader from "../../components/header/TitleHeader";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import API_URL from "../../CommonVariables";
import { useState } from "react";
import { Spin } from "react-cssfx-loading";

export default function ConfirmOrder(){
    const {cart, setCart} = useContext(UserContext)
    const token = JSON.parse(localStorage.getItem("auth")).token
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    function finishOrder(e){
        setLoading(true)
        const promise = axios.post(`${API_URL}/orders`, {
            products: cart.products,
            total: cart.total
        },
        {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        promise.then(response => {
            const promise = axios.get(`${API_URL}/orders`,{
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            promise.then(response => {
                localStorage.setItem("historic", JSON.stringify(response.data))
            })
            alert("Compra realizada com sucesso!")
            navigate('/home')
            setCart(null)
            setLoading(false)
        })
        .catch(error => {
            console.log("Algo deu errado na sua Compra.")
            setLoading(false)
        })
        
    }
    return(
        <Main>
            <TitleHeader/>
            <ListItems>
                <LabelTitle>Meu carrinho</LabelTitle>
                {(!loading) ? 
                <>
                    {cart.products.map(item => <Item>
                        <Halfline>
                            <Label>{item.name}</Label>
                        </Halfline>
                        <Halfline>
                            <Label>{item.amount}</Label>
                            <Label>R${item.price}</Label>
                        </Halfline>
                    </Item>)}
                </> : <Loading>
                        <Spin color="#a3aa7f" width="150px" height="150px" margin-top="150px"/>
                    </Loading>
                }
                
            </ListItems>
            <Footer title={'Finalizar'} route={finishOrder}/>
        </Main>
    )
}
const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    
`
const Main = styled.main`
    display: flex;
    position: relative;
`
const ListItems = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    background: #FBF6A9;
    width: 100%;
    position: fixed;
    top: 80px;
    bottom: 120px;
    padding: 15px 0;
`
const Item = styled.section`
    display: flex;
    width: 100%;
    height: 20px;
    padding: 20px 0;
`
const Label = styled.label`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 12px;
    color: rgba(0, 0, 0, 0.54);
`
const LabelTitle = styled.label`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 12px;
    color: #135713;
    margin: 14px;
`
const Halfline = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    padding: 15px;
`