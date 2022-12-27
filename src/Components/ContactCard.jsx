import React from 'react'
import styled from 'styled-components'
import linkedin from '../assets/images/team/linkedin.svg'
const ContactCard = ({imgSrc, name, role}) => {
  return (
    <ContactCardStyled>
        <div className="container">
            <div className="image-container">
                <img src={imgSrc} alt="" />
            </div>
            <div className="text-container">
                <div className="name-role-container">
                <h6 className="name">
                    {name}
                </h6>
                <p className="role">
                    {role}
                </p>
                </div>
                <div className="social-container">
                    <img src={linkedin} alt="" />
                </div>
            </div>
        </div>
    </ContactCardStyled>
  )
}

export default ContactCard

const ContactCardStyled = styled.div`
    .container{
        display: flex;
        flex-direction: column;
        width: 17.0625rem;
        .image-container{
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        .text-container{
            display: flex;
            justify-content: space-between;
            margin-top: 1.9375rem;
            .name-role-container{
                h6{
                    font-family: 'Clash Display', sans-serif;
                    font-size: 1.5625rem;
                    line-height: 1.875rem;
                    font-weight: 700;
                }
                p{
                    font-family: 'Satoshi', sans-serif;
                    font-size: 1.25rem;
                    line-height: 2.0625em;
                    color: #6D6A75;

                }
            }
            .social-container{
                img{
                    width: 1.25rem;
                    height: 1.25rem;
                }
            }
        }
    }
`