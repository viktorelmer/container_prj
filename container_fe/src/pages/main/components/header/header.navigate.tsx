import React from 'react';
import styled from 'styled-components'


import ContainerYellow from '../../../../assets/images/container_yellow.svg'
import Button from '../../../../components/Button';


import { BUTTON_TYPE, NAVIGATION_LIST } from '../../../../exports/constants.main';

interface Props {

}

const HeaderNavigation: React.FunctionComponent<Props> = () => {

    return (
        <HeaderWrapper>
            <LeftComponent className='font-inter'>
                <Image src={ContainerYellow} alt="" />
                <span>StorageeConnect</span>
            </LeftComponent>
            <RightComponent>
                {NAVIGATION_LIST.map((name, id)  => name !== BUTTON_TYPE &&
                    <NavigationItem key={id} >{name}</NavigationItem>
                )}
                <Button text={BUTTON_TYPE}/>
            </RightComponent>
        </HeaderWrapper>
    )
}

export default HeaderNavigation;

const NavigationItem = styled.div`
  margin: 0 20px;
`;

const HeaderWrapper = styled.div`
    padding: 2.2rem 6.2rem;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    justify-content: space-between;
`

// right components
const RightComponent = styled.div`
    display: flex;
    color: #FFFFFF;
    font-weight: 200 !important;
    align-items: center;
`


// left components
const LeftComponent = styled.div`
    display: flex;
    font-size: '20px';
    align-items: center;
    color: #FFFFFF;
`

const Image = styled.img`
    margin-right: 7px;
    width: 29px;
`;

