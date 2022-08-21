import React from 'react';
import styled from 'styled-components'


interface Props {
  placeholder?: string;
  fWeight?: string;
  className?: string;
  padding?: string;
}


const Input:React.FunctionComponent<Props> = ({placeholder, fWeight, className, padding}) => {
    
    const ButtonWrapper = styled.input`
        font-family: 'Poppins';
        font-weight: ${fWeight || 400};
        background: #FFFFFF;
        border: 1px solid #E8EFFF;
        border-radius: 10px;
        padding: ${padding || '1rem 5rem 1rem 2rem'};

        ::placeholder {
            color: rgba(0, 1, 3, 0.7);
            font-weight: 400;
            font-size: 12px;
            opacity: 0.4;
        }
    `;
    
    return (
        <ButtonWrapper className={className} placeholder={placeholder}></ButtonWrapper>
    )
}

export default Input
