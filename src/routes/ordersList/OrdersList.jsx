import { useContext } from "react"
import UserContext from "../../contexts/UserContext"
import styled from 'styled-components'
import TitleHeader from "../../components/header/TitleHeader"
import { useNavigate } from "react-router-dom"

export default function OrdersList(){
    const { setCart} = useContext(UserContext)
    const orders = JSON.parse(localStorage.getItem("historic"))
    const navigate = useNavigate()

    function backToHome(){
        navigate('/home')
        setCart(null)
    }
    return(
        <Main>
            <TitleHeader/>
            <ListItems>
                <LabelTitle>Hitórico de compras</LabelTitle>
                {orders.map(item => <Item>
                    <Line>
                        <Label>{item.date}</Label>
                        <Label>{item.total}</Label>
                    </Line>
                </Item>)}
            </ListItems>
            <ListFooter>
                    <Button onClick={()=> backToHome()}>Voltar</Button>
            </ListFooter>
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
const Line = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
`
const ListFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 120px;
    background:#e2dd7b;
`
const Button = styled.button`
    background: #135713;
    border-radius: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 12px;
    color: #FFFFFF;
    border: none;
    padding: 25px 15px;
    margin-bottom: 10px;
`