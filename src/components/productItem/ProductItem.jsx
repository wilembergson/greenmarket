import { useState, useContext } from "react"
import styled from "styled-components"
import UserContext from "../../contexts/UserContext"

export default function ProductItem(props){
    const {cart, setCart} = useContext(UserContext)
    const {_id, name, price, image} = props.productItem
    const [selected, setSelected] = useState(false)

    function selectItem(){
        const cartCopy = cart
        if(selected){
            if(cart.products.length === 1){
                setCart(null)
            }else if(cart.products.length > 1){
                const products = cartCopy.products.filter((item) => item._id != _id)
                const total = (parseFloat(cartCopy.total) - parseFloat(price)).toFixed(2)
                setCart({products, total})
            }
            setSelected(false)
        }else{
            if(cartCopy !== null){
                const products = [...cartCopy.products, {_id, name, price, amount:1}]
                const total = (parseFloat(cartCopy.total) + parseFloat(price)).toFixed(2)
                setCart({products, total})
            }else{
                
                setCart({products:[{_id, name, price, amount:1}], total: price})

            }
            setSelected(true)
        }
    }

    return(
        <Item border={selected ? '6px solid rgba(239, 98, 98, 0.97)': 'none'} onClick={()=> selectItem()}>
            <Image src={image} alt=""/>
            <Data>
                <Name>{name}</Name>
                <Price>R${price}</Price>
            </Data>
        </Item>
    )
}

const Item = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 150px;
    height: 200px;
    background: rgba(85, 124, 54, 0.76);
    border-radius: 10px;
    margin: 10px 20px;
    position: relative;
    overflow: hidden;
    padding: 10px;
    border:${props => props.border};
`
const Image = styled.img`
    width: 130px;
    height: 110px;
    position: absolute;
    top:10px;
    border-radius: 10px;
    margin-bottom: 15px;
`
const Data = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 10px;
    margin-top: 110px;
`
const Name = styled.label`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 10px;
    color: #FFFFFF;
`
const Price = styled.label`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 10px;
    color: #FFFFFF;
    margin-top: 18px;
`