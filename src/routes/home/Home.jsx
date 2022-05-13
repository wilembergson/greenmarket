import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import TitleHeader from "../../components/header/TitleHeader";
import ProductItem from "../../components/productItem/ProductItem";


export default function Home(){
    const listProducts = [
        {
            "_id": "627c99752a127d466e8c1cab",
            "name": "Pimentão",
            "price": "1.30",
            "image": "https://a-static.mlcdn.com.br/618x463/pimentao-pimentao-verde/fruitexpress/ffe1f428caf811ebba344201ac18500e/63913b3076e82d73aa978fe9a59234c0.jpg"
        },
        {
            "_id": "627c9d4000df502ba183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        },
        {
            "_id": "627c9d4000df502fba183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        },
        {
            "_id": "627c9d4000df502r3ba183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        },
        {
            "_id": "627c9d4000df502booa183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        },
        {
            "_id": "627c9d4000df5qw02ba183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        },
        {
            "_id": "627c9d4000df502ba8961183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        },
        {
            "_id": "627c9d400veve0df502ba183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        },
        {
            "_id": "627c9d4000df5qplx02ba183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        },
        {
            "_id": "62117c9d4000df502ba183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        },
        {
            "_id": "627c9d4000df502ba183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        },
        {
            "_id": "627c9d400rtel0df502ba183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        },
        {
            "_id": "627c9d4000df533m502ba183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        },
        {
            "_id": "627c9d4000df502bartbo183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        },
        {
            "_id": "627fffc9d4000df502ba183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        },
        {
            "_id": "627ciii9d4000df502ba183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        },
        {
            "_id": "62hh887c9d4000df502ba183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        },
        {
            "_id": "627c9bb71d4000df502ba183f75e",
            "name": "Abacate",
            "price": "3.10",
            "image": "https://static1.conquistesuavida.com.br/articles//6/10/04/6/@/28484-o-avocado-e-um-tipo-de-abacate-menor-ma-article_block_media-3.jpg"
        }
    ]

    return(
        <Main>
            <TitleHeader/>
            <ListItems>
                {
                    listProducts.map(item => <ProductItem productItem={item}/>)
                }
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