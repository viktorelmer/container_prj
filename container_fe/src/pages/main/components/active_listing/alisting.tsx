import React from "react";
import styled from "styled-components";
import StorageCard from "../../../../components/StorageCard";
import { TEXT } from "../../../../exports/constants.text";
import { IStorageCard } from "../../../../exports/types";

import ActiveListingBG from "../../../../assets/images/active_listing_bg.png";
import Button from "../../../../components/Button";

const CARDS_CONFIG: IStorageCard[] = [
    {
        location: 'Jersy City, NJ',
        totalUnits: '89',
        occupancy: '50%',
        size: '40,233 Sq Ft',
        id: 1,
        uniq_id: 1
    },
    {
        title: 'Heading of this Self Storage',
        location: 'Jersy City, NJ',
        totalUnits: '89',
        occupancy: '50%',
        size: '40,233 Sq Ft',
        id: 2,
        uniq_id: 2
    },
    {
        title: 'Heading of this Self Storage',
        location: 'Jersy City, NJ',
        totalUnits: '89',
        occupancy: '50%',
        size: '40,233 Sq Ft',
        id: 3,
        uniq_id: 3
    },
    {
        location: 'Jersy City, NJ',
        totalUnits: '89',
        occupancy: '50%',
        size: '40,233 Sq Ft',
        id: 1,
        uniq_id: 4
    },
    {
        title: 'Heading of this Self Storage',
        location: 'Jersy City, NJ',
        totalUnits: '89',
        occupancy: '50%',
        size: '40,233 Sq Ft',
        id: 2,
        uniq_id: 5
    },
    {
        title: 'Heading of this Self Storage',
        location: 'Jersy City, NJ',
        totalUnits: '89',
        occupancy: '50%',
        size: '40,233 Sq Ft',
        id: 3,
        uniq_id: 6
    }
]


const ActiveListing: React.FunctionComponent = () => {

    return (
        <ActiveListingWrapper>
            <ActiveListingHeadTitle>{TEXT.ACTIVE_LISTING.TOP_TEXT}</ActiveListingHeadTitle>
            <ActiveListingLowTitle>{TEXT.ACTIVE_LISTING.LOW_TEXT}</ActiveListingLowTitle>

            <AListingCards>
                {CARDS_CONFIG.map((card, id) => 
                    <React.Fragment key={`listing_card_${card.uniq_id}`} >
                        <StorageCard title={card.title} location={card.location} totalUnits={card.totalUnits} occupancy={card.occupancy} size={card.size} id={card.id}/>
                        {!((id + 1) % 3) && <div className="w-100"></div>}
                    </React.Fragment>
                )}
            </AListingCards>

            <Button text={TEXT.ACTIVE_LISTING.BUTTON_TEXT} className="text-center mt-5 listing-button" padding="1.3rem"/>
        </ActiveListingWrapper>
    )
}

const ActiveListingWrapper = styled.div`
    padding-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 6rem;
    background: url(${ActiveListingBG});
    background-size: cover;
    background-repeat: no-repeat;
`

const AListingCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 4rem;
`;

const ActiveListingHeadTitle = styled.span`
    font-size: 35px;
    font-weight: 600;
    color: #FFFFFF;
    text-align: center;
`

const ActiveListingLowTitle = styled.span`
    max-width: 40%;
    font-size: 18px;
    font-weight: 300;
    color: #FFFFFF;
    text-align: center;
`

export default ActiveListing