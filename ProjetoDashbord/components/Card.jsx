import React from 'react';
import styled from 'styled-components';
import { FcSimCardChip } from 'react-icons/fc';
import master from '../src/assets/mastercard.png'

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
          <img src={master} alt="card" />
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
    padding: 1rem;
    border-radius: 1rem;
    color: white;
    background-color: #22202B;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
    max-width: 320px;
    transition: background-color 0.5s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: #781b77;
      color: white;
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
      justify-content: center;

      h6 {
        font-size: 1.2rem;
        letter-spacing: 2px;
      }
    }

    .image {
      display: flex;
      justify-content: flex-end;

      img {
        width: 3rem;
        height: 3rem;
      }
    }

    .name {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
    }
  }

  .profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    h6 {
      font-size: 0.9rem;
    }

    .t1 {
      font-size: 0.8rem;
      color: #bbb;
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .shopping {
      max-width: 280px;
      padding: 0.8rem;
    }

    .number h6 {
      font-size: 1rem;
    }

    .image img {
      width: 2.5rem;
      height: 2.5rem;
    }

    .profile {
      flex-direction: column;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .shopping {
      max-width: 250px;
    }

    .number h6 {
      font-size: 0.9rem;
    }

    .image img {
      width: 2rem;
      height: 2rem;
    }

    .profile {
      flex-direction: column;
      text-align: center;
      gap: 5px;
    }
  }
`;
