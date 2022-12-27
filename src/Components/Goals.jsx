import React from 'react'
import styled from 'styled-components'
import {FaDollarSign} from 'react-icons/fa'
const GoalsData = [
    'Tech skills training on uiux design, software development (front-end & backend), product management, no-code skills etc',
    'In-depth training and mentorship with experienced professionals',
    'Interactive live classes with an instructor and other trainees',
    'Internship placement to get real-life work experience',
    'Job recommendations, CV review & Interview support;',
    'Access to free resources for life'
]
const Goals = () => {
    const [value, setValue] = React.useState("100.00")
    const [hundred, setHundred] = React.useState("100.00")
    const [twoHundreds, setTwoHundreds] = React.useState("200.00")
    const [threeHundreds, setThreeHundreds] = React.useState("300.00")
    const [fiveHundreds, setFiveHundreds] = React.useState("500.00")
    const [clear, setClear] = React.useState('')

   

  return (
    <GoalsContainer id="focus">
        <div className="container"
            data-aos="fade-up"
            data-aos-duration="1000"
            delay="100"
        >
            <div className="head">
                <div className="head-pill">
                    <h6 className='desktop-text'>
                    OUR GOAL
                    </h6>
                    <h6 className='mobile-text'>
                        BENEFIT FOR STUDENTS
                    </h6>
                </div>
            </div>
            <div className="goals-content">
               <div className="goals-left-content">
               <div className="main-text">
                    <h1 className='desktop-text'>
                    To train and mentor <span> 100,000 African youths </span> with tech skills
                    </h1>
                    <h1 className='mobile-text'>
                    We are raising funds
to train and mentor <span> 10,000 African youths</span> with tech skills

                    </h1>
                </div>
                <div className="sub-text">
                    <h4>
                    What the trainees would benefit;
                    </h4>
                   <ul>
                        {
                            GoalsData.map((item) => {
                                return (
                                    <li>
                                        {item}
                                    </li>
                                )
                            })

                        } 
                   </ul>
                </div>
                </div>
                <div className="goals-right-content">
                    <div className="main-text">
                        <h1 className='desktop-text'>
                        Kindly support our goal now
                        </h1>
                        <h1 className='mobile-text'>
                        Please Donate Today!
                        </h1>
                    </div>
                    <div className="sub-text">
                        <p className='desktop-text'>
                        Every single contribution is equipping an African youth with digital skills
                        </p>
                        <p className='mobile-text'>
                        A gift from you can make a real differnce and impact positively on so many people’s lives
                        </p>
                    </div>
                    <div className="cards">
                        <div className="card-secondary">
                         
                            <div className="card-content">
                            <FaDollarSign className='icon'/>
                               <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                            </div>
                        </div>
                        <div className="card-container">
                            <div className="card-primary">
                                <div className="card-content" onClick={()=> setValue(hundred)}>
                                    <h1>
                                    $100.00
                                    </h1>
                                </div>
                            </div>
                            <div className="card-primary">
                                <div className="card-content" onClick={()=> setValue(twoHundreds)}>
                                    <h1>
                                    $200.00
                                    </h1>
                                </div>
                            </div>
                            <div className="card-primary">
                                <div className="card-content" onClick={()=> setValue(threeHundreds)}>
                                    <h1>
                                    $300.00
                                    </h1>
                                </div>
                            </div>
                            <div className="card-primary">
                                <div className="card-content" onClick={()=> setValue(fiveHundreds)}>
                                    <h1>
                                    $500.00
                                    </h1>
                                </div>
                            </div>
                            <div className="card-primary">
                                <div className="card-content" onClick={() => setValue(clear)}>
                                    <h1>
                                    custom amount
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="btn-card">
                            <button>
                            DONATE NOW
                            </button>
                        </div>
                    </div>
                </div>
               </div>
            
        </div>
    </GoalsContainer>
  )
}

export default Goals

const  GoalsContainer = styled.div`
    .container{
        padding: 3.125rem 2.3125rem ;
        @media screen and (max-width: 768px){
            padding: 0.875rem 0;
        }
        .head{
            display: flex;
            padding-left: 2rem;
            margin-bottom: 2.25rem;
            @media screen and (max-width: 768px){
                padding-left: 1.5rem;
            }
            .head-pill{
                background: #DBF5FF;
                border-radius: 100px;
                padding: 0.8125rem 3rem;
               
                h6{
                    font-family: 'Clash Display', sans-serif;
                    font-size: 1rem;
                    font-weight: 500;
                    line-height: 2.0625rem;
                    color: #0046FF;
                }
            }
        }
        .goals-content{
            display: flex;
            justify-content: space-between;
            @media screen and (max-width: 768px){
                flex-direction: column;
            }
            .goals-left-content{
                width: 50%;
                padding-left: 2rem;
                @media screen and (max-width: 768px){
                    padding-left: 1.5rem;
                    width: 100%;
                    padding-bottom: 3rem;
                    padding-right: 1.5rem;
                }
                .main-text{
                    h1{
                        font-family: 'Clash Display', sans-serif;
                        font-size: 3.125rem;
                        font-weight: 700;
                        line-height: 3.84375rem;
                        color: #151515;
                        span{
                            color: #0046FF;
                        }
                        @media screen and (max-width: 768px){
                            font-size: 1.875rem;
                            line-height:2.30625rem;
                        }
                    }
                }
                .sub-text{
                    max-width: 32.75rem;
                    @media screen and (max-width: 768px){
                        max-width: 100%;
                    }
                    h4{
                        font-family: 'Satoshi', sans-serif;
                        font-size: 1rem;
                        font-weight: 700;
                        line-height: 2.0625rem;
                        color: #151515;
                        
                    }
                    ul{
                        padding: 0 0 0 1rem;
                        li{
                            font-family: 'Satoshi', sans-serif;
                            font-size: 1rem;
                            font-weight: 400;
                            line-height: 2.0625rem;
                            color: #151515;
                        }
                    }
                }
            }
            .goals-right-content{
                background-color: #DBF5FF;
                padding: 3.125em 1.125rem 2.6875rem 3.75rem;
                width: 50%;
                @media screen and (max-width: 768px){
                    width: 100%;
                    padding: 5.0625rem 1rem 5.6875rem 1rem;
                }
                .main-text{
                    h1{
                        font-family: 'Clash Display', sans-serif;
                        font-size: 1.875rem;
                        line-height: 2.30625rem;
                        color: #151515;
                    }
                } 
                .sub-text{
                    p{
                        font-family: 'Satoshi', sans-serif;
                        font-size: 1.125rem;
                        font-weight: 400;
                        line-height: 1.873125rem;
                        color: #151515;

                       
                    }
                }
                .cards{
                    margin-top: 2.125rem;
                    .card-secondary{
                        display: flex;
                        
                        .card-content{
                            background-color: #F0FBFF;
                            padding: 0.6875rem 1.5625rem;
                            input{
                                border: none;
                                font-family: 'Satoshi', sans-serif;
                                font-size: 1.125rem;
                                font-weight: 700;
                                line-height: 1.873125rem;
                                background-color: transparent;
                                margin-left: 1rem;
                            }
                            h1{
                                font-family: 'Satoshi', sans-serif;
                                font-size: 1.125rem;
                                font-weight: 700;
                                line-height: 1.873125rem;
                                
                            }
                        }
                       
                    }
                    .card-container{
                            display: flex;
                            flex-wrap: wrap;
                            gap: 1.5rem;
                            margin-top: 0.75rem;
                            .card-primary{
                                display: flex;

                                .card-content{
                                    background-color: transparent;
                                    padding: 0.6875rem 2.8125rem;
                                    border: 0.5px solid #141414;;
                                    cursor: pointer;
                                    &:hover{
                                        background-color: #0046FF;
                                        h1{
                                            color: #fff;
                                        }
                                    }
                                    @media screen and (max-width: 768px){
                                        padding: 0.6875rem 2rem;
                                    }
                                   
                                    h1{
                                        font-family: 'Satoshi', sans-serif;
                                        font-size: 1.375rem;
                                        font-weight: 400;
                                        line-height:  2.289375rem;
                                        color: #000000;

                                        @media screen and (max-width: 768px){
                                            font-size: 1rem;
                                           
                                        }

                                    }
                                }
                            }
                        }
                        .btn-card{
                            margin-top: 1.5rem;
                            button{
                                background-color: #0046FF;
                                padding: 0.8125rem 3rem;
                                font-family: 'Satoshi', sans-serif;
                                font-size: 1.375rem;
                                font-weight: 400;
                                line-height: 1.873125rem;
                                color: #FFFFFF;
                                outline: none;
                                border: none;
                            }
                        }
                }
                
            }

        }
    }
    .desktop-text{

        @media screen and (max-width: 768px){
            display: none;
        }
    }
    .mobile-text{
        display: none;
        @media screen and (max-width: 768px){
            display: block;
        }
    }
`