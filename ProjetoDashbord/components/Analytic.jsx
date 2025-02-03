import React from 'react';
import styled from 'styled-components';
import { BsCreditCard } from 'react-icons/bs';
import { AiOutlineMore } from 'react-icons/ai';
import { BiTrashAlt } from 'react-icons/bi';
import { BsBank } from 'react-icons/bs';
import { GiTakeMyMoney } from 'react-icons/gi';

const Analytic = () => {
  return (
    <AnalyticSection>
      <div className="analytic-card">
        <div className="analytic-design">
          <div className="analytic-logo">
            <BsCreditCard className='analytic-icon' />
          </div>
          <div className="analytic-action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="analytic-transfer">
          <h6>Transferência via</h6>
          <h6>Número do cartão</h6>
        </div>
        <div className="analytic-money">
          <h5>$1500</h5>
        </div>
      </div>

      <div className="analytic-card">
        <div className="analytic-design">
          <div className="analytic-logo">
            <BiTrashAlt className='analytic-icon' />
          </div>
          <div className="analytic-action">
            <AiOutlineMore/>
          </div>
        </div>
        <div className="analytic-transfer">
          <h6>Transferência via</h6>
          <h6>Número do cartão</h6>
        </div>
        <div className="analytic-money">
          <h5>$1500</h5>
        </div>
      </div>

      <div className="analytic-card">
        <div className="analytic-design">
          <div className="analytic-logo">
            <BsBank className='analytic-icon'/>
          </div>
          <div className="analytic-action">
            <AiOutlineMore/>
          </div>
        </div>
        <div className="analytic-transfer">
          <h6>Transferência via</h6>
          <h6>Número do cartão</h6>
        </div>
        <div className="analytic-money">
          <h5>$1500</h5>
        </div>
      </div>

      <div className="analytic-card">
        <div className="analytic-design">
          <div className="analytic-logo">
            <GiTakeMyMoney className='analytic-icon' />
          </div>
          <div className="analytic-action">
            <AiOutlineMore/>
          </div>
        </div>
        <div className="analytic-transfer">
          <h6>Transferência via</h6>
          <h6>Número do cartão</h6>
        </div>
        <div className="analytic-money">
          <h5>$1500</h5>
        </div>
      </div>
    </AnalyticSection>
  );
};

export default Analytic;

const AnalyticSection = styled.section`
  display: flex;
  flex-wrap: wrap;  

  .analytic-card {
    padding: 0.8rem;
    border-radius: 1rem;
    color: black;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.5s ease-in-out;
    width: 170px;
    max-width: 100%;
    margin: 1em;
  }

  .analytic-card:hover {
    background: #22202b;
  }

  .analytic-design {
    display: flex;
    align-items: center;
  }

  .analytic-logo {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    font-size: 2rem;
  }

  .analytic-action {
    margin-left: 0.5rem;
    svg {
      font-size: 1.5rem;
    }
  }

  .analytic-transfer {
    margin-top: 20px;
    color: grey;
    text-align: center;
  }

  .analytic-money {
    margin-top: 20px;
    font-weight: bold;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .analytic-card {
      width: 100%;
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    .analytic-card {
      width: 100%;
      max-width: 250px;
    }
  }
`;

