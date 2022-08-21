import React from "react";
import styled from "styled-components";

import HelpBG from "../../../../assets/images/help_bg.png";
import PlaneIcon from "../../../../assets/images/plane_icon.svg";
import ContainerYellow from "../../../../assets/images/container_yellow.svg";
import Button from "../../../../components/Button";
import { TEXT } from "../../../../exports/constants.text";
import Input from "../../../../components/Input";

import FBIcon from "../../../../assets/images/facebook_icon.svg";
import TwitterIcon from "../../../../assets/images/twitter_icon.svg";
import LinkedIcon from "../../../../assets/images/linked_icon.svg";
import InstIcon from "../../../../assets/images/instagram_icon.svg";

const Footer:React.FunctionComponent = () => {


    return (
        <>
            <HelpWrapper>
                <HelpBox>
                    <div>
                        <HelpTopTitle>{TEXT.FOOTER.HELP.TOP_TEXT}</HelpTopTitle> <br/>
                        <HelpLowTitle>{TEXT.FOOTER.HELP.LOW_TEXT}</HelpLowTitle>
                    </div>
                    <div>
                        <Button text={TEXT.FOOTER.HELP.BUTTON_TEXT} color="Blue" padding="1rem 3rem" icon={PlaneIcon}/>
                    </div>
                </HelpBox>
            </HelpWrapper>
            <FooterWrapper className="w-100 p-5">
                <FooterItem>
                    <FItemTitle><img src={ContainerYellow} alt="" />  {TEXT.FOOTER.ABOUT.STORAGE_CONNECT}</FItemTitle>
                    <FSubItem className="mt-3">{TEXT.FOOTER.ABOUT.AFTER_STORAGE}</FSubItem>
                    <FSubItem className="mt-5">{TEXT.FOOTER.ABOUT.ALL_RIGHTS_RESERVED}</FSubItem>
                </FooterItem>
                <FooterItem>
                    <FItemTitle>{TEXT.FOOTER.ABOUT.QUICK_LINKS.TITLE}</FItemTitle>
                    <FSubItem className="mt-3">{TEXT.FOOTER.ABOUT.QUICK_LINKS.ACTIVE_LISTING}</FSubItem>
                    <FSubItem className="mt-3">{TEXT.FOOTER.ABOUT.QUICK_LINKS.TITLE}</FSubItem>
                    <FSubItem className="mt-3">{TEXT.FOOTER.ABOUT.QUICK_LINKS.FREE_EVALUATION}</FSubItem>
                    <FSubItem className="mt-3">{TEXT.FOOTER.ABOUT.QUICK_LINKS.LEARN}</FSubItem>
                </FooterItem>
                <FooterItem>
                    <FItemTitle>{TEXT.FOOTER.ABOUT.NEWSLETER.TITLE}</FItemTitle>
                    <FSubItem className="mt-3">{TEXT.FOOTER.ABOUT.NEWSLETER.LOW_TITLE}</FSubItem>
                    <Input placeholder={TEXT.FOOTER.ABOUT.NEWSLETER.PLACEHOLDER} className="mt-2"/>
                    <Button text="Subscribe Now" color="Blue" className="col-5 mt-2" padding="1rem 1rem"/>
                </FooterItem>
                <FooterItem>
                    <FItemTitle>{TEXT.FOOTER.ABOUT.SOCIAL}</FItemTitle>
                    <FSubItem className="mt-3 d-flex">
                        <img src={FBIcon} alt="" />
                        <img src={LinkedIcon} alt="" />
                        <img src={TwitterIcon} alt="" />
                        <img src={InstIcon} alt="" />
                    </FSubItem>
                </FooterItem>
            </FooterWrapper>
        </>
    )
}

const FooterWrapper = styled.div`
    display: flex;
    background: #FFFFFF;
`

const FooterItem = styled.div`
    width: 40%;
`

const FItemTitle = styled.span`
    color: '#1849C6';
    font-family: 'Inter';
    font-weight: 700;
    font-size: 22px;
`

const FSubItem = styled.div`
    color: #4A4A4A;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 15px;
    width: 85%;
    
    img {
        margin-right: 1rem;
    }
`;

const HelpTopTitle = styled.span`
    max-width: 50%;
    font-size: 35px;
    font-weight: 600;
    color: #021850;
`

const HelpLowTitle = styled.span`
    margin-top: 1rem;
    max-width: 50%;
    font-size: 16px;
    font-weight: 400;
    color: #021850;
`;

const HelpBox = styled.div`
    padding: 7rem 3rem;
    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 30px 40px rgba(24, 73, 198, 0.1);
    border-radius: 10px;
`

const HelpWrapper = styled.div`
    padding: 10rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${HelpBG});
    background-size: cover;
    background-repeat: no-repeat;
`

export default Footer