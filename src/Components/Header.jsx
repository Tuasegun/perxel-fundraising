import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.png'
import menuIcon from '../assets/images/menu-icon.svg'
import {AiOutlineClose} from 'react-icons/ai'
import {RiMenu3Fill} from 'react-icons/ri'
import {Link} from 'react-router-dom'
const Header = () => {
    const [active, setActive] = React.useState(false)
  return (
    <StyledHeader>
        <div className={!active ? "header-container" : "mobile-container"}>
            <div className="logo-container">
                <img src={logo} alt="logo" />

                <AiOutlineClose className="close-icon" onClick={() => setActive(!active)} />
            </div>
            <div className="nav-container">
                <ul >
                    <a href="#why" onClick={()=> setActive(false)}><li> Our Why</li></a>
                    <a href="#benefit" onClick={()=> setActive(false)}><li>Benefit</li></a>
                    <a href="#focus" onClick={()=> setActive(false)}><li>Focus</li></a>
                </ul>
            </div>
            <div className="contact-btn active">
                <Link to="/contact-us">
                <button>Contact Us</button>
                </Link>
            </div>
            <div className="menu-icon">
                <RiMenu3Fill className='icon'  onClick={() => setActive(!active)}/>
            </div>
        </div>
        <div className={active? "overlay active" : "overlay"} onClick={() => setActive(!active)} />
    </StyledHeader>

  )
}

export default Header

const StyledHeader = styled.div`
    .header-container{
        width: 100%;
        padding: 1.875rem 5.25rem 1.875rem 6.25rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 768px){
            padding: 1.875rem 1rem;
        }

        .logo-container{
            width: 12.5625rem;
            height: 1.6875rem;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
            .close-icon{
                display: none;

            }
        }
        .nav-container{
            ul{
                display: flex;
                column-gap: 3.5625rem;

                @media (max-width: 768px){
                    display: none;
                }
                a{
                        text-decoration: none;
                        color: #6D6A75;
                    }
                li{
                    list-style-type: none;
                    font-family: 'Satoshi', sans-serif;
                    font-size: 1rem;
                    line-height: 1.25rem;
                  
                }

            }
        }
        .contact-btn{
            button{
                background-color: #0046FF;
                border: none;
                outline: none;
                border-radius: 0.25rem;
                padding: 0.625rem 1.25rem;
                font-family: 'Satoshi', sans-serif;
                color: #FFFFFF;
                font-weight: 700;
                font-size: 1.25rem;

                @media (max-width: 768px){
                    display: none;
                }
            }
        }
        .menu-icon{
            display: none;
            @media (max-width: 768px){
                display: block;
                width: 25px;
                .icon{
                    font-size: 1.5625rem;
                    color: #000;
                }
                /* img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                } */
            }
        }
    }
    .overlay{
        @media (max-width: 768px){
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            cursor: pointer;
            z-index: 3;
            display: none;

            /* background-color: red; */
            &.active {
        display: block;
      }
        }
    }

    @media(max-width: 768px){
        .mobile-container{
            position: fixed;
            top: 0;
            width: 100%;
            padding: 1.875rem 1rem;
            background-color: #FFFFFF;
            z-index: 4;
            overflow-y: scroll;
            display: flex;
            flex-direction: column;
            height: 100vh;
            .logo-container{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
                img{
                    width: 9.5625rem;
                height: 1.9375rem;
                    object-fit: contain;
                }
                .close-icon{
                    display: block;
                    font-size: 1.5rem;
                }
            }

            .nav-container{
                    display: block;
                    ul{
                        display: flex;
                        flex-direction: column;
                        row-gap: 1rem;
                        a{
                        text-decoration: none;
                         color: #0046FF;
                    }
                        li{
                            list-style-type: none;
                            font-family: 'Satoshi', sans-serif;
                            font-size: 1rem;
                            line-height: 1.5rem;
                            background-color: #DBF5FF;
                            padding: 0.8rem 1.5rem;
                            text-align: center;
                            color: #0046FF;
                            border-radius: 0.25rem;

                         
                        } 
                }
            }
            .contact-btn{
                margin-top: 1.25rem;
                button{
                background-color: #0046FF;
                border: none;
                outline: none;
                border-radius: 0.25rem;
                padding: 0.625rem 1.25rem;
                font-family: 'Satoshi', sans-serif;
                color: #FFFFFF;
                font-weight: 700;
                font-size: 1.25rem;
                width: 100%;
              
            }
            }
            .menu-icon{
                display: none;
                
            }
        }
       
    }
    

`