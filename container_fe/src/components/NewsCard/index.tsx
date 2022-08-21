import React from "react";
import styled from 'styled-components'

import ClockIcon from '../../assets/images/clock_icon.svg'
import LabelIcon from "../../assets/images/label_icon.svg";
import { TEXT } from "../../exports/constants.text";
import Button from "../Button";

interface Props {
    title?: string;
    time: string;
    label: string;
    user: string;
    id: number;  
}

const NewsCard: React.FunctionComponent<Props> = ({title, time, label, user, id}) => {

    const CardInfo = styled.div`
        display: flex;
        flex-wrap: wrap;
        flex-basis: 20%;
        height: 6rem;
    `

    const NewsCardWrapper = styled.div`
        background: #e7e7e7;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        width: fit-content;
        max-width: 300px;
        padding: 0.2rem;
        padding-bottom: 1rem;
    `

    const CardInfoItem = styled.div`
        display: flex;
        font-weight: 400;
        align-items: center;
        font-size: 14px;
        color: rgba(0, 1, 3, 0.7);
        margin-right: 1rem;

        img {
            width: 1rem;
            margin-right: .4rem;
        }
    `;

    return (
        <NewsCardWrapper className="m-2 news-card">
            <CardImage src={require(`../../assets/images/news_${id}.png`)} alt=""/>
            <div className="mt-4 p-2 pt-0 d-flex flex-column">
                <div style={{fontSize: '20px', lineHeight: '20px', wordBreak: 'break-word', fontWeight: '600'}}>{title}</div>
                <CardInfo className="mt-4">
                        {/* Clock */}
                        <CardInfoItem>
                            <img src={ClockIcon} alt=""/>
                            {time}
                        </CardInfoItem>

                        {/* Label */}
                        <CardInfoItem>
                            <img src={LabelIcon} alt=""/>
                            {label}
                        </CardInfoItem>

                        {/* User */}
                        <CardInfoItem>
                            {/* TODO: user circle img here */}
                            {user}
                        </CardInfoItem>
                        
                </CardInfo>
                <Button text={TEXT.NEWS_CARD.BUTTON_TEXT} color="Blue" className="col-9 align-self-center text-center mt-4" padding=".7rem 0rem"/>
            </div>
        </NewsCardWrapper>
    )
} 


const CardImage = styled.img`
    border-radius: 10px 10px 0px 0px;
`

export default  React.memo(NewsCard)