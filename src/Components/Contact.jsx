import React from 'react'
import styled from 'styled-components'
import backIcon from '../assets/images/backIcon.svg'
import member1 from '../assets/images/team/member1.png'
import member2 from '../assets/images/team/member2.png'
import member3 from '../assets/images/team/member3.png'
import member4 from '../assets/images/team/member4.png'
import ContactCard from './ContactCard'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const contactContent = [
    {
        id: 1,
        imgSrc: member1,
        name: 'Abiodun-Fiwa',
        role: 'Founder',
        liurl: 'https://www.linkedin.com/in/abiodun-fiwa-okunade-6111a914a/'
    },
    {
        id: 2,
        imgSrc: member2,
        name: 'Olabanji  Ewenla',
        role: 'Product Manager',
        liurl: 'https://www.linkedin.com/in/olabanjiewenla/'
    },
    {
        id: 3,
        imgSrc: member3,
        name: 'Hakeem Texas',
        role: 'Fundraiser manager',
        liurl: 'https://www.linkedin.com/in/tijanihakeem'
    },
    {
        id: 4,
        imgSrc: member4,
        name: 'Thomas Banjo',
        role: 'Advisor',
        liurl: 'https://www.linkedin.com/in/thomas-banjo-b1b95536/'
    }
]


const Contact = () => {
  return (
    <StyledContact>
        <div className="contact-container">
           
            <div className="contact-left">
                
                 <div className="back-icon">
                 <Link to="/">
                <img src={backIcon} alt="back" />
                </Link>
                </div>
            
                <div className="text-container">
                    <h1>Meet the Team</h1>
                    <p>
                    We are enabling the empowerment of young people in Africa with digital skills that would make them more valuable to themselves, their community, their nation and the African continent
                    </p>
                </div>
                <div className="contact-btn">
                    <button>Be Part of this mission</button>
                </div>
                <div className="mail">
                    <p>
                     E: openhubafrica@gmail.com
                    </p>
                </div>
            </div>
            <div className="contact-right">
                <div className="team-grid">
                    {
                        contactContent.map((item) => {
                            return <ContactCard key={item.id} {...item} />
                        })
                    }
                </div>    
            </div>
        </div>
        <Footer/>
    </StyledContact>
  )
}

export default Contact

const StyledContact = styled.div`
    position: relative;
    background-color: #DBF5FF;
    padding: 8.375rem 5.125rem 1.125rem 5.125rem;
    max-width: 1440px;
  @media screen and (min-width: 1440px) {
          padding: 0 auto;
          margin: 0 auto;
     
  }
    @media screen and (max-width: 768px){
        padding: 4.125rem 2.625em 1.125rem 1.875rem;
    }
    

    .contact-container{
        display: flex;
        justify-content: space-between;
        padding-bottom: 2rem;
        @media screen and (max-width: 768px){
            flex-direction: column;
            gap: 4.875rem
        }
        .contact-left{
            width: 45%;

            @media screen and (max-width: 768px){
                width: 100%;
            }
           .back-icon{
                margin-bottom: 2.5rem;
                width: 2rem;
                height: 2rem;
                cursor: pointer;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
           }
            .text-container{
                h1{
                    font-family: 'Clash Display', sans-serif;
                    font-size: 4rem;
                    line-height: 4.92rem;
                    margin-bottom: 1.5rem;
                    font-weight: 700;
                    max-width: 50%;
                    margin-bottom: 2.375rem;

                    @media screen and (max-width: 768px){
                        max-width: 100%;
                    }
                }
                p{
                    font-family: 'Satoshi', sans-serif;
                    font-size: 1.25rem;
                    line-height: 2.0625rem;
                    color: #151515;
                    max-width: 80%;
                    margin-bottom: 2.8125rem;

                    @media screen and (max-width: 768px){
                        max-width: 100%;
                    }
                }
            }
            .contact-btn{
                button{
                    background: #0046FF;
                    border: none;
                    color: #fff;
                    font-family: 'Satoshi', sans-serif;
                    font-size: 1.25rem;                    line-height: 2rem;
                    padding: 0.9375rem 2rem;
                    margin-bottom: 3.25rem;
                    font-weight: 700;
                    border-radius: 5px;
                }
            }
            .mail{
                p{
                    font-family: 'Satoshi', sans-serif;
                    font-size: 1.25rem;
                    line-height: 2rem;
                    font-weight: 700;
                }
            }
        }
        .contact-right{
            width: 50%;
            .team-grid{
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 1.5rem;

                @media screen and (max-width: 768px){
                    grid-template-columns: 1fr;
                }
            }
        }
    }
`