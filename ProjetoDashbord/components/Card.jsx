import React from 'react';
import styled from 'styled-components';
import { FcSimCardChip } from 'react-icons/fc';

const Card = () => {
  return (
    <Section>
      <div className="shopping">
        <div className="design">
          <FcSimCardChip />
        </div>
        <div className="number">
          <h6>4562 1122 4595 7852</h6>
        </div>
        <div className="image">
          {/* Adicione uma imagem real ou um placeholder */}
          <img src="placeholder.jpg" alt="Card" />
        </div>
        <div className="name">
          <h6>CARD HOLDER</h6>
        </div>
        <div className="profile">
          <h6>Cezar Junior</h6>
          <span className='t1'>Mastercard</span>
        </div>
      </div>
    </Section>
  );
};

export default Card;

const Section = styled.section`
  .shopping {
    padding: 0.8rem;
    border-radius: 1rem;
    color: white;
    background-color: #22202B;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transition: background-color 0.5s ease-in-out;

    &:hover {
      background-color: #1E90FF; /* Alterei para um tom de azul mais claro */
      color: black;
    }

    .design {
      display: flex;
      align-items: center;

      svg {
        font-size: 2rem;
      }
    }

    .number {
      display: flex;
      gap: 0.5rem;

      h6 {
        font-size: 1rem;
      }
    }

    .image {
      display: flex;
      align-items: center;
      justify-content: center;
      /* Ajustei a margem esquerda para centralizar a imagem */
      margin: 0 auto; 
      width: 2.5rem;
      height: 2.5rem;
    }

    .name {
      display: flex;
      gap: 0.5rem;
    }

    h6 {
      font-size: 0.6rem;
    }
  }

  .profile {
    display: flex;
    justify-content: space-between; /* Ajustei para space-between para espaçar os itens */
    align-items: center;
    gap: 2rem;
    margin-top: 10px;

    span,
    h6 {
      color: white;
    }
  }
`;
