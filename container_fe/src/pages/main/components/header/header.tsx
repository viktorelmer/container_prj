import React from 'react';
import styled from 'styled-components'
import HeaderNavigation from './header.navigate';

import HeaderBG from "../../../../assets/images/header_background.png";
import HeaderMain from './header.main';
interface Props {

}

const Header: React.FunctionComponent<Props> = (props) => {

    return (
        <Wrapper>
            <HeaderNavigation/>
            <HeaderMain/>
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    background: url(${HeaderBG});
    background-size: cover;
    background-repeat: no-repeat;
    
`
