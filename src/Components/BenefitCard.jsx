import React from 'react'
import styled from 'styled-components'
const BenefitCard = ({icon, headText, description, aos}) => {
  return (
    <StyledCard
    
    >
         <div className="aboutbox-container"
            data-aos={aos}
         >
            <div className="icon-container">
                <img src={icon} alt="" />
            </div>

            <div className="text-container">
                <h6 className="headtext">
                    {headText}
                </h6>
                <p className="description">
                    {description}
                </p>
            </div>
            </div>
    </StyledCard>
  )
}

export default BenefitCard

const StyledCard = styled.div`
    .aboutbox-container{
        display: flex;
        column-gap: 1.25rem;
        .icon-container{
            padding: 0.970625rem 0.8325rem;
            border-radius: 100%;
            background-color: #DBF5FF;
            height: 3rem;
            width: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            @media (max-width: 768px) {
                margin-bottom: 1rem;
            }

            img{
                width: 1.5rem;
                height: 1.4375rem;
                object-fit: contain;
            }
        }
        .text-container{
            h6{
                font-family: 'Clash Display', sans-serif;
                font-size: 1.25rem;
                line-height:1.5375rem;
                font-weight: 600;
                color: #000000;
                max-width: 9.5rem;
                @media (max-width: 767px){
                    font-size: 1rem;
                }
            }
            p{
                font-family: 'Satoshi', sans-serif;
                font-size: 1rem;
                line-height: 1.6rem;
                font-weight: 400;
                margin-top: 0.625rem;
                width: 13.61875rem;

                @media (max-width: 768px) {
                    line-height: 1.2rem;
                    font-size: 0.95rem;
                    margin-top: 0.575rem;
                }
            }

        }
    }
`