import React from "react";
import styled from "styled-components";
import heroMan from "../assets/images/heroMan.png";
import heroManMobile from "../assets/images/heroManMobile.png";
const Hero = () => {
  return (
    <HeroContainer>
      <div className="container">
        <div className="text-content"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"

        >
          <div className="text-main">
            <h1>Equipping</h1>
            <h1>African Youths</h1>
            <h1>with digital skills</h1>
          </div>
          <div className="text-sub">
            <p>
              We are enabling the empowerment of young people in Africa with
              digital skills that would make them more valuable to themselves,
              their community, their nation and the African continent
            </p>
          </div>
        </div>
        <div className="image-content"
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-delay="200"
        >
          <div className="image-container">
            <img src={heroMan} alt="hero-man" className="hero-desktop" />
            <img src={heroManMobile} alt="hero class" className="hero-mobile" />
          </div>
          <div className="image-text">
            <p>Changing the African youth narrative</p>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  padding: 4.125rem 5.125rem;
  height: 90vh;
  max-width: 1440px;
  @media screen and (min-width: 1440px) {
          padding: 0 auto;
          margin: 0 auto;
          max-height: 70vh;
  }
  @media screen and (max-width: 768px) {
    padding: 4.125rem 2.625em 5.125rem 0.9rem;
    min-height: 100vh;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 9.9375rem;
    align-items: center;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-gap: 1.5625rem;
      align-items: flex-start;
    }

    .text-content {
      .text-main {
        margin-bottom: 1.25rem;
        @media screen and (max-width: 768px) {
          margin-bottom: 0.875rem;
        }
        h1 {
          font-family: "Clash Display", sans-serif;
          line-height: 4.52rem;
          font-size: 4rem;
          color: #151515;
          font-weight: 700;

          @media screen and (max-width: 768px) {
            font-size: 2.375rem;
            line-height: 2.675rem;
          }
        }
      }
      .text-sub {
        p {
          font-family: "Satoshi", sans-serif;
          font-size: 1.25rem;
          line-height: 2.0625rem;
          color: #151515;
          font-weight: 400;
          max-width: 29.375rem;

          @media screen and (max-width: 768px) {
            font-size: 0.875rem;
            line-height: 1.28125rem;
          }
        }
      }
    }
    .image-content {
      position: relative;

      .image-container {
        width: 80%;
        height: 100%;
        @media screen and (max-width: 768px) {
          width: 80%;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .hero-desktop {
          @media screen and (max-width: 768px) {
            display: none;
          }
        }
        .hero-mobile {
          display: none;
          @media screen and (max-width: 768px) {
            display: block;
          }
        }
      }
      .image-text {
        max-width: 100%;
        position: absolute;
        background-color: #0046ff;
        padding: 1.5625rem 1.875rem;
        bottom: 0;
        left: 35%;
        
        
        
        @media screen and (max-width: 768px) {
          left: 25;
          padding: 1rem 2rem;
          max-width: 15.3125rem;
        }
        p {
          font-family: "Satoshi", sans-serif;
          font-size: 1.875rem;
          line-height: 2.0625rem;
          color: #ffffff;
          font-weight: 400;

          @media screen and (max-width: 768px) {
            font-size: 1rem;
            line-height: 1.5125rem;
          }
        }
      }
    }
  }
`;
