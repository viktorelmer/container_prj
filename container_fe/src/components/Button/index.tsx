import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { COLOR_CONFIG } from '../../exports/constants.main';
import { IColor } from '../../exports/types';


interface Props {
  text: string;
  color?: IColor;
  fWeight?: string;
  className?: string;
  padding?: string;
  icon?: string;
}


const Button:React.FunctionComponent<Props> = ({text, color = "Primary", fWeight, className, padding, icon}) => {
    const [colors, setColors] = useState({color: 'black', bg: '#FFCE31'})
    
    useEffect(() => {
        setColors(COLOR_CONFIG[color])
    }, [color, setColors])

    const ButtonWrapper = styled.div`
        color: ${colors.color};
        background: ${colors.bg};
        font-weight: ${fWeight || 400};
        padding: ${padding || '.2rem .6rem'};
        border-radius: .5rem;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    return (
        <ButtonWrapper className={className}>
            {text}
            {icon && <img src={icon} style={{marginLeft: '1.4rem'}} alt=''/>}
        </ButtonWrapper>
    )
}

export default Button
