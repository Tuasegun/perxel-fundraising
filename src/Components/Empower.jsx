import React from "react";
import EmpowerCard from "./EmpowerCard";
import styled from "styled-components";
import Emp1 from "../assets/images/empower/emp1.png";
import Emp2 from "../assets/images/empower/emp2.png";
import Emp3 from "../assets/images/empower/emp3.png";
import Emp4 from "../assets/images/empower/emp4.png";
import Emp5 from "../assets/images/empower/emp5.png";
import Emp6 from "../assets/images/empower/emp6.png";
import Emp7 from "../assets/images/empower/emp7.png";
import Emp8 from "../assets/images/empower/emp8.png";

const EmpowerContent = [
  {
    id: 1,
    bgUrl: Emp1,
  },
  {
    id: 2,
    bgUrl: Emp2,
  },
  {
    id: 3,
    bgUrl: Emp3,
  },
  {
    id: 4,
    bgUrl: Emp4,
  },
  {
    id: 5,
    bgUrl: Emp5,
  },
  {
    id: 6,
    bgUrl: Emp6,
  },
  {
    id: 7,
    bgUrl: Emp7,
  },
  {
    id: 8,
    bgUrl: Emp8,
  },
];
const Empower = () => {
  return (
    <EmpowerContainer>
      <div className="head-content">
        <div className="text-container">
          <h1 className="desktop-text">Empower an African Youth today</h1>
            <h1 className="mobile-text">Let’s Help Empower Africa Youth</h1>
          <p className="desktop-text">
            Your contribution can significantly lead to the development of the
            Africa of our dreams tomorrow
          </p>
            <p className="mobile-text">
            We are proud to see our students getting design jobs, impacting product teams with their skills and being paid well for their value.
            </p>
        </div>
      </div>
      <div className="empower-image-grid">
        {EmpowerContent.map((item, index) => {
          return <EmpowerCard key={index} bgUrl={item.bgUrl} />;
        })}
      </div>
    </EmpowerContainer>
  );
};

export default Empower;

const EmpowerContainer = styled.div`
  position: relative;
  padding: 10rem 0 5rem 0;
  @media screen and (max-width: 768px) {
    padding: 4.125rem 0 1.125rem 0;
  }
  
  .head-content {
    .text-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 4.8125rem;
      @media screen and (max-width: 768px) {
        padding: 0 1.75rem;
        margin-bottom: 3.75rem;
        align-items: flex-start;
      }
      h1 {
        font-family: "Clash Display", sans-serif;
        font-size: 3.5rem;
        line-height: 3.6rem;
        color: #151515;
        font-weight: 700;
        text-align: center;

        @media screen and (max-width: 768px) {
            font-size: 1.25rem;
            line-height: 1.5rem;
            text-align: left;
        }

      }
      p {
        font-family: "Satoshi", sans-serif;
        font-size: 1.525rem;
        line-height: 1.525rem;
        color: #151515;
        text-align: center;
        max-width: 50%;
        margin-top: 0.9375rem;

        @media screen and (max-width: 768px) {
            font-size: 0.875rem;
            line-height: 1rem;
            max-width: 100%;
            text-align: left;
        }
      }
    }
  }
  .empower-image-grid {
    padding: 0 5%;
    /* padding: 0 10%; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0;
    

    @media screen and (max-width: 768px) {
        padding: 0;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.5rem;
    }
  }
  .desktop-text{
        @media screen and (max-width: 768px) {
            display: none;
        }
  }
    .mobile-text{
        display: none;
        @media screen and (max-width: 768px) {
            display: block;
        }
    }
`;
