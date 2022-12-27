import React from "react";
import styled from "styled-components";
import whyImage from "../assets/images/whyImage.png";
import whyImageMobile from "../assets/images/whyImageMobile.png";
const Why = () => {
  return (
    <WhyContainer id="why">
      <div className="container">
        <div className="head-content"
         data-aos="fade-down"
         data-aos-duration="1000"
         data-aos-delay="100"
        >
            <h1>Our Why?</h1>
        </div>
        <div className="why-card-container">
          <div className="why-card">
            <div className="card-head">
              <h1>
                1
              </h1>
            </div>
            <div className="card-body">
              <p>
                According to the International Finance Corporation (IFC), a
                member of the World Bank Group, “57 million jobs will require
                digital skills by 2030 in sub saharan Africa alone” Meanwhile,
                “Africa has the youngest population in the world with more than
                400 million young people aged between the ages of 15 to 35
                years.” (Source: African Union)
              </p>

              <p>
                The development of Africa today and in the future is in the
                hands of the youth.
              </p>

              <p>
                We want to lay a strong foundation that we believe will impact
                millions of youths across Africa over the years to come.
              </p>
            </div>
          </div>
          <div className="why-card blue-card">
            <div className="card-head">
              <h1>
                <span>2</span>
              </h1>
            </div>
            <div className="card-body">
              <p>
                {" "}
                We want to raise funds to equip 100,000 youth with digital
                skills every year for the next 7 years (2023 - 2030); we want to
                help young people across Africa get access to practical hands-on
                digital skill training over the next 7 years.
              </p>

              <p>
                We know big results come from a combination of many small
                actions, so we are focused on the small actions today that will
                lead to the big results we want tomorrow.
              </p>

              <p>
                Your small contribution in an African youth today will lead to
                the development of the Africa of our dreams tomorrow
              </p>
            </div>
          </div>
        </div>
        <div className="why-image-container">
            <div className="why-image">
                <img src={whyImage} alt="why" className="why-desktop" />
                <img src={whyImageMobile} alt="why" className="why-mobile" />
            </div>
          </div>
      </div>
    </WhyContainer>
  );
};

export default Why;

const WhyContainer = styled.div`
    position: relative;
    .container{
        position: relative;
        .head-content{
            position: relative;
            padding-left: 6.4375rem;
            transform: translate(0, 2rem);
            @media screen and (max-width: 768px){
                padding-left: 1.75rem;
                transform: translate(0, 0);
            }
            h1{
                font-family: 'Clash Display', sans-serif;
                font-size: 3.5rem;
                line-height: 3.6rem;
                color: #151515;
                font-weight: 700;

                @media screen and (max-width: 768px){
                    font-size: 1.875em;
                    line-height: 2rem;
                }
            }
        }
        .why-card-container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding-left: 1.625rem;
            position: relative;
            padding-top: 1rem;
            height: 52.25rem;
            @media screen and (max-width: 768px){
                grid-template-columns: 1fr;
                padding-left: 0rem;
                height: auto;
                padding-top: 0;
            }
            .why-card{
               padding: 0 1.625rem;
                @media screen and (max-width: 768px){
                    padding: 0 1.6875rem;
                }
                .card-head{
                    @media screen and (max-width: 768px){
                        display: none;
                    }
                    h1{
                        font-family: 'Clash Display', sans-serif;
                        font-size: 4.375rem;
                        line-height: 7.284375rem;
                        color: #DDE6FF;
                        font-weight: 700;
                    }
                }
                .card-body{
                    padding: 0 3.5rem;
                    position: relative;
                    transform: translate(0, -3.8rem);
                    @media screen and (max-width: 768px){
                        transform: translate(0, 0);
                        padding: 2.6875rem 0;
                    }
                    p{
                        font-family: 'Satoshi', sans-serif;
                        font-size: 1.125rem;
                        color: #151515;
                        line-height: 1.873125rem;
                        margin-bottom: 1.5rem;
                        @media screen and (max-width: 768px){
                            font-size: 1.125rem;
                            line-height: 1.873125rem;
                        }
                    }
                }
            }
            .blue-card{
                background: #0046FF;
                .card-head{
                    h1{
                        color: #537EEF;
                    }
                }
                .card-body{
                    p{
                        color: #fff;
                    }
                }
            }
        }
        .why-image-container{
            position: absolute;
            padding-left: 5.5625rem;
            height: 0rem;
            padding-right: 10.125rem;
            @media screen and (max-width: 768px){
                padding-left: 0rem;
                position: relative;
                /* height: 50rem; */
            }
            @media screen and (min-width: 2560px) {
                padding: 0 20%;
              }
           
            .why-image{
                transform: translate(0, -85%);
               
                @media screen and (max-width: 768px){
                    transform: translate(0, 0);
                    height: 29.25rem;
                    width: 50%;
                }
                @media screen and (min-width: 2560px) {
                  transform: translate(0, -78%);
              }
               
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain; 
                    
                    @media screen and (max-width: 768px){
                        width: 100%;
                        object-fit: cover;
                        overflow: hidden;
                        object-position: right center;
                    }
                }
                .why-desktop{
                    @media screen and (max-width: 768px){
                        display: none;
                    }
                }
                .why-mobile{
                    display: none;
                    @media screen and (max-width: 768px){
                        display: block;
                    }
                }
            }
        }
    }
`

