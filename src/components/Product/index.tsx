import React from 'react';
import path from 'path';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './style';

import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import image from '../../assets/images/product-01.png';
const productImage = path.join(__dirname, 'assets', 'images', 'product-01.png');






console.log(productImage)

const Product: React.FC = () => {
    return(
        <Container>
            <Row>
                <a href="#">Compartilhar</a>
                <a href="#">Vender um igual</a>
            </Row>

            <Panel>
                <Column>
                    <Gallery>
                        <img src={image} alt="Imagem do produto"/>
                    </Gallery>

                    <Info />
                </Column>
                <Column>
                    <ProductAction />
                    <SellerInfo />

                    <WarrantySection />
                    <WarrantySection />
                    <WarrantySection /> 
                </Column>
            </Panel>
        </Container>
    )
};

const WarrantySection = () => {

    return(

    <Section>
        <h4>Garantia</h4>

        <div>
            <span>
                <p className="title">Compra garantida com o lorem ipsum</p>
                <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro.</p>
            </span>
            <span>
                <p className="title">Garantia do vendedor</p>
                <p className="description">Sem garantia.</p>
            </span>
        </div>

        <a href="#">Saiba mais sobre garantia</a>
    </Section>

    );
}

const Info = () => {

    return(
        <Description>
            <h2>Descrição</h2>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur, placeat dolores facilis dolorum officiis. Facere enim ipsam quis, sequi in sint culpa, dolorem voluptas commodi sit nemo recusandae distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur, placeat dolores facilis dolorum officiis. Facere enim ipsam quis, sequi in sint culpa, dolorem voluptas commodi sit nemo recusandae distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur, placeat dolores facilis dolorum officiis. Facere enim ipsam quis, sequi in sint culpa, dolorem voluptas commodi sit nemo recusandae distinctio!

                <br />
                <br />

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur, placeat dolores facilis dolorum officiis. Facere enim ipsam quis, sequi in sint culpa, dolorem voluptas commodi sit nemo recusandae distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur, placeat dolores facilis dolorum officiis. Facere enim ipsam quis, sequi in sint culpa, dolorem voluptas commodi sit nemo recusandae distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur, placeat dolores facilis dolorum officiis. Facere enim ipsam quis, sequi in sint culpa, dolorem voluptas commodi sit nemo recusandae 
            </p>
        </Description>

    );
}

export default Product;