import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import Balance from './Balance';
import Analytic from './Analytic';
const Dashboard = () => {
  return (
    <Section>
        <Navbar/>
        <Analytic/>
        <Balance/>
    </Section>
  )
}

export default Dashboard
const Section = styled.section `
margin-left: 5vw;
margin-right: 14px;
padding: 2rem;
height: 60rem;
background-color: #191919;
.grid{ 
    margin-top: 0.5rem;
    z-index: 2;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
   
}
`;
