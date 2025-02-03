import React from 'react';
import styled from 'styled-components';
import Notification from './Notification';
import Card from './Card';
import Activity from './Activity';
import Payment from './Payment';

const RightSidebar = () => {
  return (
    <Section>
      <div className="right-sidebar-grid">
        <Notification />
      </div>
    </Section>
  );
}

export default RightSidebar;

const Section = styled.section`
  position: fixed;
  right: 0;
  top: 0;
  background-color:#191919;
  height: 100vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Altere para flex-start para alinhar itens ao topo */
  padding: 1rem 0.5rem;
  gap: 2rem;
  overflow-y: auto; /* Adicione rolagem se o conteúdo ultrapassar a altura da tela */

  .right-sidebar-grid {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
