import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import TitleHeader from "../../components/header/TitleHeader";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import API_URL from "../../CommonVariables";

export default function ConfirmOrder(){
    const {cart, setCart, token} = useContext(UserContext)
    const navigate = useNavigate()

    function finishOrder(e){
        const promise = axios.post(`${API_URL}/orders`, {
            products: cart.products,
            total: cart.total
        },
        {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            alert("Compra realizada com sucesso!")
            navigate('/home')
            setCart(null)
        })
        .catch(error => console.log("Algo deu errado na sua Compra."))
    }
    return(
        <Main>
            <TitleHeader/>
            <ListItems>
                <LabelTitle>Meu carrinho</LabelTitle>
                {cart.products.map(item => <Item>
                    <Halfline>
                        <Label>{item.name}</Label>
                    </Halfline>
                    <Halfline>
                        <Label>{item.amount}</Label>
                        <Label>R${item.price}</Label>
                    </Halfline>
                </Item>)}
            </ListItems>
            <Footer title={'Finalizar'} route={finishOrder}/>
        </Main>
    )
}

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
const Div = styled.div`
    display: flex;
`