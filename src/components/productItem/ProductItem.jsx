import { useState } from "react"
import styled from "styled-components"

export default function ProductItem(props){
    const {name, price, image} = props.productItem
    const [selected, setSelected] = useState(false)

    function changeBorder(){
        if(selected){
            setSelected(false)
        }else{
            setSelected(true)
        }
    }

    return(
        <Item border={selected ? '6px solid rgba(239, 98, 98, 0.97)': 'none'} onClick={()=> changeBorder()}>
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
    width: 130px;
    height: 180px;
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