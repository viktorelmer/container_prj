import React from "react";
import styled from "styled-components";
import { TEXT } from "../../../../exports/constants.text";

import SelfMan from "../../../../assets/images/self_man.png";
import BuyWoman from "../../../../assets/images/woman_buy.png";
import Button from "../../../../components/Button";
import LearnEveryBG from "../../../../assets/images/learn_every_bg.png";
import NewsCard from "../../../../components/NewsCard";
import { INewsCard } from "../../../../exports/types";


const CARDS: INewsCard[] = [
    {
        title: "Everything you need to know about how to buy a Self Storage",
        time: '5hr ago',
        label: 'Buy',
        user: 'Raza',
        id: 1
    },
    {
        title: "Learn Everything about managing and operating a Self Storage",
        time: '2days ago',
        label: 'Operate',
        user: 'Raza',
        id: 1
    },
    {
        title: "Everything you need to know about selling a Self Storage",
        time: '3days ago',
        label: 'Sell',
        user: 'Raza',
        id: 1
    },
    {
        title: "Everything you need to know about how to buy a Self Storage",
        time: '5days ago',
        label: 'Buy',
        user: 'Raza',
        id: 1
    }
]


const HaveSelf: React.FunctionComponent = () => {

    return (
        <>
            <HaveSelfWrapper>
                <HaveSelfInfo>
                    <HaveSelfHeadTitle>{TEXT.HAVE_SELF.TOP_TEXT}</HaveSelfHeadTitle>
                    <HaveSelfLowTitle>{TEXT.HAVE_SELF.LOW_TEXT}</HaveSelfLowTitle>

                    <Button text={TEXT.HAVE_SELF.BUTTON_TEXT} color='Blue' padding=".8rem 2rem" className="mt-5"/>
                </HaveSelfInfo>
                <ManPhoto src={SelfMan} alt="" />
            </HaveSelfWrapper>

            <BuySelfWrapper>
                <WomanPhoto src={BuyWoman} alt="" />
                <BuySelfInfo>
                    <BuySelfHeadTitle>{TEXT.BUY_SELF.TOP_TEXT}</BuySelfHeadTitle>
                    <BuySelfLowTitle>{TEXT.BUY_SELF.LOW_TEXT}</BuySelfLowTitle>

                    <Button text={TEXT.BUY_SELF.BUTTON_TEXT} color='Blue' padding=".8rem 2rem" className="mt-5"/>
                </BuySelfInfo>
            </BuySelfWrapper>


            <LearnEverythingWrapper>
                <div className="d-flex flex-column align-items-center text-center">
                    <LearnHeadTitle>{TEXT.LEARN_SELF.TOP_TEXT}</LearnHeadTitle>
                    <LearnLowTitle>{TEXT.LEARN_SELF.LOW_TEXT}</LearnLowTitle>
                </div>

                <LearnCards>
                    {CARDS.map(item => 
                        <NewsCard title={item.title} key={item.id} user={item.user} id={item.id} time={item.time} label={item.label}/>
                    )}
                </LearnCards>
            </LearnEverythingWrapper>
            
        </>
    )
}

const LearnCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .news-card {
        flex-basis: 25%;
    }
`;

const LearnHeadTitle = styled.span`
    max-width: 50%;
    font-size: 35px;
    font-weight: 600;
    color: #FFFFFF;
    z-index: 2;
`

const LearnLowTitle = styled.span`
    margin-top: 1rem;
    max-width: 50%;
    font-size: 15px;
    font-weight: 300;
    color: #FFFFFF;
    z-index: 2;
`;

const ManPhoto = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 0px 0px 300px 0px;
    z-index: 1;
`

const WomanPhoto = styled.img`
    position: absolute;
    left: 0;
    bottom: -3rem;
    z-index: 1;
`

const LearnEverythingWrapper = styled.div`
    margin-top: -4.3rem;
    padding: 5rem 0;
    padding-bottom: 23rem;
    border-radius: 300px 0px 0px 0px;
    background: url(${LearnEveryBG});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
`

const BuySelfWrapper = styled.div`
    position: relative;
    padding: 15rem 5rem 10rem 5rem;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
`;

const BuySelfInfo = styled.div`
    margin-top: 15rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const HaveSelfWrapper = styled.div`
    position: relative;
    padding: 15rem 5rem 10rem 5rem;
    width: 100%;
    height: 100%;
    background-color: #E8EFFF;
    border-radius: 0px 0px 300px 0px;
`;

const BuySelfHeadTitle = styled.span`
    font-size: 35px;
    font-weight: 600;
    color: #021850;
    text-align: right;
    z-index: 2;
`

const BuySelfLowTitle = styled.span`
    max-width: 50%;
    font-size: 15px;
    font-weight: 400;
    color: rgba(0, 1, 3, 0.7);
    text-align: right;
    z-index: 2;
`;

const HaveSelfInfo = styled.div`
    margin-top: 15rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const HaveSelfHeadTitle = styled.span`
    font-size: 35px;
    font-weight: 600;
    color: #021850;
    text-align: left;
    z-index: 2;
`

const HaveSelfLowTitle = styled.span`
    max-width: 50%;
    font-size: 15px;
    font-weight: 400;
    color: rgba(0, 1, 3, 0.7);
    text-align: left;
    z-index: 2;
`;


export default HaveSelf