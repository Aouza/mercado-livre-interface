import React from 'react';

import Product from '../Product';

import { Container, Wrapper } from './style';

const Layout: React.FC = () => {
    return(
        <Container>
            <Wrapper>
                <Product /> 
            </Wrapper>
        </Container>
    )
}

export default Layout;