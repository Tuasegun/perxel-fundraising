import React, {useState} from 'react'
 import styled from 'styled-components'
 import emp1 from '../assets/images/empower/emp1.png'
const EmpowerCard = ({bgUrl}) => {
    const [isHover, setIsHover] = useState(false)
  return (
    <EmpowerCardContainer bgUrl={bgUrl}>
        <div className={`empower-card-${isHover ? 'hover' : 'not-hover'}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        >
            {
                isHover ? (
                    <div className="empower-card-content">
                        <div className="overlay" />
                    </div>
                ) : null
            }
        </div>
    </EmpowerCardContainer>
  )
}

export default EmpowerCard

const EmpowerCardContainer = styled.div`
    .empower-card-not-hover{
        width: 100%;
        height: 24.625em;
        background-image: url(${props => props.bgUrl ? props.bgUrl : null});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        filter: grayscale(100%);
        transition: all 0.5s ease-in-out;

        @media (max-width: 768px){
            height: 15.445rem;
        }
        @media screen and (min-width: 2560px) {
            height: 40.625rem;
        }

    }
    .empower-card-hover{
        width: 100%;
        height: 24.625em;
        background-image: url(${props => props.bgUrl ? props.bgUrl : null});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: grayscale(0);
        transition: all 0.5s ease-in-out;
        @media (max-width: 768px){
            height: 15.445rem;
        }
        @media screen and (min-width: 2560px) {
            height: 40.625rem;
        }
        .empower-card-content{
            width: 100%;
            height: 100%;
            position: relative;
            .overlay{
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
                    transform: matrix(1, 0, 0, -1, 0, 0);
            }
        }
    }
`