import React from 'react';
import styled from 'styled-components';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { GiPayMoney } from 'react-icons/gi';
import { AiOutlineThunderbolt, AiOutlineWifi } from 'react-icons/ai';

const Activity = () => {
  return (
    <Section className='activity'>
      <div className='activity-title'>
        <h4>Atividades recentes</h4>
        <h6>6 Jul 2024</h6>
      </div>
      <div className="activity-analytic">
        <div className="activity-design">
          <div className="activity-logo">
            <MdOutlineWaterDrop />
          </div>  
          <div className="activity-content">
            <h5>Conta de Água</h5>
            <h6 className='activity-color'>Sucesso</h6>
          </div>
        </div>
        <div className="activity-money">
          <h5>$120</h5>
        </div>
      </div>
      <div className="activity-analytic">
        <div className="activity-design">
          <div className="activity-logo">
            <GiPayMoney />
          </div>
          <div className="activity-content">
            <h5>Renda Salário</h5>
            <h6 className='activity-color'>Recebido</h6>
          </div>
        </div>
        <div className="activity-money">
          <h5>$4500</h5>
        </div>
      </div>
      <div className="activity-analytic">
        <div className="activity-design">
          <div className="activity-logo"> 
            <AiOutlineThunderbolt />
          </div>
          <div className="activity-content">
            <h5>Conta de luz</h5>
            <h6 className='activity-color'>Sucesso</h6>
          </div>
        </div>
        <div className="activity-money">
          <h5>$150</h5>
        </div>
      </div>
      <div className="activity-analytic">
        <div className="activity-design">
          <div className="activity-logo">
            <AiOutlineWifi />
          </div>
          <div className="activity-content">
            <h5>Conta da Internet</h5>
            <h6 className='activity-color'>Sucesso</h6>
          </div>
        </div>
        <div className="activity-money">
          <h5>$60</h5>
        </div>
      </div>
    </Section>
  );
};

export default Activity;

const Section = styled.section`
  display: grid;


  .activity-title {
    margin-left: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-weight: bold;
      color: white;
    }

    h6 {
      color: white;
    }
  }

  .activity-analytic {
    padding: 0.8rem;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    background-color: #f9f9f9;
    border-radius: 0.5rem;
    margin: 0.5rem 0;
    max-width: 600px;
    width: 100%;
  }

  .activity-analytic:hover {
    background: #22202b;
    color: #fff;
  }

  .activity-design {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .activity-logo {
    background-color: white;
    border-radius: 50%;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    width: 40px;
    height: 40px;
  }

  svg {
    font-size: 1.5rem;
  }

  .activity-content {
    display: flex;
    flex-direction: column;

    h5 {
      margin: 0;
    }

    .activity-color {
      color: grey;
    }
  }

  .activity-money h5 {
    margin: 0;
  }

  /* Responsividade */
  @media (max-width: 768px) {
  

    .activity-title {
      flex-direction: column;
      text-align: center;
    }

    .activity-analytic {
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .activity-analytic {
      padding: 1rem;
    }

    .activity-logo {
      width: 35px;
      height: 35px;
    }

    svg {
      font-size: 1.3rem;
    }
  }
`;
