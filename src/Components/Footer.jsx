import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <FooterContainer>
        <div className="footer-container">
            <p>
            copyright © openhubafrica 2022 
            </p>
            <p>
            All rights reserved
            </p>
        </div>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
    .footer-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem 0;
       @media (max-width: 768px) {
            padding: 2rem 0;
       }
        p{
            font-family: 'Satoshi', sans-serif;
            font-size: 1.375rem;
            line-height: 1.525rem;
            color: #151515;
            margin-bottom: 0.5rem;
            
            @media (max-width: 768px) {
                font-size: 0.875rem;
            }
        }
    }
`