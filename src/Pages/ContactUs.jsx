import React from 'react'
import Contact from '../Components/Contact'
import Header from '../Components/Header'
import styled from 'styled-components'
const ContactUs = () => {
  return (
    <StyledContact>
      <Header contact/>
        <Contact/>
    </StyledContact>
  )
}

export default ContactUs

const StyledContact = styled.div`
  background:   #DBF5FF;
  min-height: 100vh;

  @media screen and (max-width: 768px){
  height: 100%;
  }
`

