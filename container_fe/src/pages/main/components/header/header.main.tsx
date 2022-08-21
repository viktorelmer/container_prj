import React from "react";
import styled from "styled-components";
import Button from "../../../../components/Button";
import { TEXT } from "../../../../exports/constants.text";

interface Props {}

const HeaderMain: React.FunctionComponent<Props> = (props) => {
  return (
    <HeaderMainWrapper>
        <HeadTitle>{TEXT.HEADER.MAIN_TITLE_1}<br/>{TEXT.HEADER.MAIN_TITLE_2}</HeadTitle>
        <LowTitle>{TEXT.HEADER.LOW_TITLE}</LowTitle>
        <ButtonsRow className="row mt-2 flex-nowrap justify-content-center">
            <Button text={TEXT.HEADER.BUTTON_SELL} className="col-7 p-2 text-center pt-3 pb-3 m-3 mt-5 mb-5" fWeight="500"/>
            <Button text={TEXT.HEADER.BUTTON_ACTIVE} color="White" className="col-7 p-2 text-center pt-3 pb-3 m-3 mt-5 mb-5" fWeight="500"/>
        </ButtonsRow>
    </HeaderMainWrapper>
  );
};

export default HeaderMain;

const HeaderMainWrapper = styled.div`
    margin: auto;
    margin-top: 3rem;
    width: fit-content;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5rem;
`

const HeadTitle = styled.span`
    font-weight: 800;
    font-size: 4rem;
    text-align: center;
    line-height: 4.8rem;
`

const LowTitle = styled.span`
    margin-top: .5rem;
    font-weight: 300;
    max-width: 60%;
    font-size: 1.2rem;
    text-align: center;
`

const ButtonsRow = styled.div`
    font-weight: 500 !important;
`