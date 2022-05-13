import styled from 'styled-components'

export default function TitleHeader(){
    return(
        <Title>
            <h3>GreenMarket</h3>
        </Title>
    )
}

const Title = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    color: #FFFFFF;
    background: #135713;
    padding: 10px;
    position: fixed;
    z-index: 9;

    font-family: 'Inspiration', cursive;
    font-style: normal;
    font-size: 34px;
    line-height: 50px;
`