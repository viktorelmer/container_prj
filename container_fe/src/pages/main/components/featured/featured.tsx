import React, { useState } from "react";
import styled from "styled-components";
import StorageCard from "../../../../components/StorageCard";
import { TEXT } from "../../../../exports/constants.text";
import { IStorageCard } from "../../../../exports/types";


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
]

const PAGES = [
    1,2,3,4
]


const Featured: React.FunctionComponent = () => {
    const [activePage, setActivePage] = useState(2)

    return (
        <FeaturedWrapper >
            <FeatuerdHeadTitle>{TEXT.FEATURED.TOP_TEXT}</FeatuerdHeadTitle>
            <FeatuerdLowTitle>{TEXT.FEATURED.LOW_TEXT}</FeatuerdLowTitle>

            <FeaturedCards>
                {CARDS_CONFIG.map((card) => 
                    <StorageCard key={`featured_card_${card.uniq_id}`} title={card.title} location={card.location} totalUnits={card.totalUnits} occupancy={card.occupancy} size={card.size} id={card.id}/>
                )}
            </FeaturedCards>

            <SelectPage>
                {PAGES.map(pageId => <span key={pageId} onClick={() => setActivePage(pageId)} className={activePage === pageId ? 'active' : ''}></span>)}
            </SelectPage>
        </FeaturedWrapper>
    )
}

const FeaturedWrapper = styled.div`
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 6rem;
`

const FeaturedCards = styled.div`
    display: flex;
    margin-top: 4rem;
    flex-wrap: wrap;
    justify-content: center;
    
    .storage-card {
        flex: 0 0 25%;
    }
`;

const FeatuerdHeadTitle = styled.span`
    font-size: 35px;
    font-weight: 600;
    color: #021850;
    text-align: center;
`

const FeatuerdLowTitle = styled.span`
    max-width: 40%;
    font-size: 18px;
    font-weight: 400;
    color: rgba(0, 1, 3, 0.7);
    text-align: center;
`

const SelectPage = styled.div`
    display: flex;
    margin-top: 1.5rem;

    span {
        transition: .5s;
        height: 25px;
        width: 25px;
        border: 1px solid #DBDEE7;
        border-radius: 50%;
        margin: 0.3rem;
    }

    .storage-card {
        flex: 0 0 25%;
    }

    .active {
        transition: .5s;
        background: #1849C6;
    }
`

export default Featured