import React from 'react';
import styled from 'styled-components'
import ActiveListing from './components/active_listing/alisting';
import Featured from './components/featured/featured';
import Footer from './components/footer/footer';
import HaveSelf from './components/have_self/hSelf';
import Header from './components/header/header';

interface Props {

}

const Main: React.FunctionComponent<Props> = () => {

    return (
        <Wrapper>
            <Header/>
            <Featured/>
            <ActiveListing/>
            <HaveSelf/>
            <Footer/>
        </Wrapper>
    )
}

export default Main

const Wrapper = styled.div`
    
`
