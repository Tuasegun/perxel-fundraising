import React from 'react'
import styled from 'styled-components'
import codingIcon from '../assets/images/coding-icon.svg'
import laptopIcon from '../assets/images/laptopIcon.svg'
import parcelIcon from '../assets/images/parcelIcon.svg'
import penIcon from '../assets/images/penIcon.svg'
import BenefitCard from './BenefitCard'
const BenefitData = [
  {
    id: 1,
    icon: penIcon,
    headText: 'Product Design',
    description: 'Intensive training on user interface user experience design using figma',
    aos: 'fade-up'
  },
  {
    id: 2,
    icon: parcelIcon,
    headText: 'Product Management',
    description: 'In-depth coaching on how to become a skilled product manager',
    aos: 'fade-up'
  },
  {
    id: 3,
    icon: codingIcon,
    headText: 'Software Development',
    description: 'Practical training on different coding languages and how to build tech products',
    aos: 'fade-up'
  },
  {
    id: 4,
    icon: laptopIcon,
    headText: 'No-Code Programs',
    description: 'Exposure to no-code tech skills like UX writing, product marketing, motion design etc',
    aos: 'fade-up'
  }
]

const Benefits = () => {
  return (
    <BenefitsContainer id="benefit">
        <div className="container">
            <div className="benefit-text">
                <div className="main-text">
               <h1>
               What the funding will enable
               </h1>
                </div>
                <div className="sub-text">
                Providing tech skills training on uiux design, software development, product management and no-code skills
                </div>
            </div>
            <div className="benefit-boxes">
              {
                BenefitData.map((item) => {
                  return (
                    <BenefitCard key={item.id} icon={item.icon} headText={item.headText} description={item.description} 
                    aos={item.aos}
                    />
                  )
              }
              )}
            </div>
        </div>
    </BenefitsContainer>
  )
}

export default Benefits

const BenefitsContainer = styled.div`
  position: relative;
  padding: 13.125rem 10% 13.125rem 10%;
  max-width: 1440px;
  @media screen and (min-width: 1440px) {
          padding: 0 auto;
          margin: 0 auto;
  }
  @media (max-width: 768px) {
    margin-top: 20rem;
   padding-bottom: 6rem;
  }
  
    .container{
        display: flex;
        column-gap: 10%;
        @media (max-width: 768px) {
          flex-direction: column;
          gap: 4.0625rem;
        }
      
        .benefit-text{
         
          .main-text{
            margin-top: 0.8rem;
            h1{
              font-family: 'Clash Display', sans-serif;
              font-size: 3.75rem;
              line-height: 3.69375rem;
              max-width: 22.6875rem;

              @media (max-width: 768px) {
                font-size: 2.5rem;
                line-height: 2.5rem;
                max-width: 100%;
              }
            }
          }
          .sub-text{
            font-family: 'Satoshi', sans-serif;
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 1.816875rem;
            margin-top: 2.1875rem;
            max-width: 22.6875rem;
            @media (max-width: 768px) {
              font-size: 1rem;
              line-height: 1.6rem;
              max-width: 100%;
              margin-top: 1rem;
            }
          }
        }
        .benefit-boxes{
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 5.3125rem;

          @media (max-width: 768px) {
            grid-template-columns: 1fr;
          }
        }
    }
`