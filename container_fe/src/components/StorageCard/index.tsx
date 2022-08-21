import React from "react";
import styled from 'styled-components'

import LocationIcon from '../../assets/images/location_icon.svg'
import HouseIcon from "../../assets/images/house_icon.svg";
import UserIcon from "../../assets/images/user_icon.svg";
import DottedBoxIcon from "../../assets/images/dotted_box_icon.svg";
import { TEXT } from "../../exports/constants.text";
import Button from "../Button";

interface Props {
    title?: string;
    location: string;
    totalUnits: string;
    occupancy: string;
    size: string;
    id: number; 
    type?: string;
}

const StorageCard: React.FunctionComponent<Props> = ({title, location, totalUnits, occupancy, size, id, type}) => {

    const CardInfo = styled.div`
        display: flex;
        flex-direction: ${title ? 'row' : 'column'};
        flex-wrap: wrap;
        flex-basis: 20%;
        height: 6rem;
        justify-content: ${title && 'flex-start'};
    `

    const StorageCardWrapper = styled.div`
        background: #e7e7e7;
        display: flex;
        flex-direction: column;
        padding: 1.1rem;
        border-radius: 10px;
        max-width: 390px;
        align-items: ${title && 'center'};
    `

    const CardInfoItem = styled.div`
        display: flex;
        width: 10rem;
        font-weight: 400;
        align-items: center;
        font-size: 16px;
        color: rgba(0, 1, 3, 0.7);
        margin-bottom: ${!title && ".5rem"};

        img {
            width: 1rem;
            margin-right: .4rem;
        }
    `;

    return (
        <StorageCardWrapper className="m-2 storage-card">
            <CardImage src={require(`../../assets/images/container_${id}.png`)} alt=""/>
            <div className="mt-4">
                {title ?
                    <h4 className={title && 'w-100 text-center'} style={{fontSize: '25px', lineHeight: '20px'}}>{title}</h4>
                    :
                    <NoTitle><img src={LocationIcon} alt=""/> {location}</NoTitle>
                }
                <CardInfo className="mt-4">
                        {/* Location if Title */}
                        {title &&
                            <CardInfoItem>
                                <img src={LocationIcon} alt=""/>
                                {location}
                            </CardInfoItem>
                        }

                        {/* Size */}
                        <CardInfoItem>
                            <img src={DottedBoxIcon} alt=""/>
                            {TEXT.STORAGE_CARD.SIZE}{size}
                        </CardInfoItem>

                        {/* Total Units */}
                        <CardInfoItem>
                            <img src={HouseIcon} alt=""/>
                            {TEXT.STORAGE_CARD.TOTAL_UNITS}{totalUnits}
                        </CardInfoItem>
                        
                        {/* Occupancy */}
                        <CardInfoItem>
                            <img src={UserIcon} alt=""/>
                            {TEXT.STORAGE_CARD.OCCUPANCY}{occupancy}
                        </CardInfoItem>
                </CardInfo>
                <Button text={TEXT.STORAGE_CARD.BUTTON_TEXT} color="Blue" className="col-9 m-auto mt-4 text-center h-5" padding=".7rem 3rem"/>
            </div>
        </StorageCardWrapper>
    )
} 


const CardImage = styled.img`
    max-width: 353px;
    border-radius: 10px;
`

const NoTitle = styled.h4`
    color: rgba(0, 1, 3, 0.7);
`


export default  React.memo(StorageCard)