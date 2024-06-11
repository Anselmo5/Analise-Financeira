import React from 'react'
import styled from'styled-components'
import Sidebar from '../components/Sidebar'
import RightSidebar from '../components/RightSidebar'
import Dashboard from '../components/Dashboard'

const Grafico = () => {
  
  return (
    <Div>
        <Sidebar/>
        <Dashboard/>
        <RightSidebar/>
    </Div>
  )
}

export default Grafico

const Div = styled.div`
  position:realative;
`;