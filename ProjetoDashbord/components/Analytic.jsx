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
            <BsCreditCard />
          </div>
          <div className="analytic-action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="analytic-transfer">
          <h6>Transfer via</h6>
          <h6>Card number</h6>
        </div>
        <div className="analytic-money">
          <h5>$1500</h5>
        </div>
      </div>

      <div className="analytic-card">
        <div className="analytic-design">
          <div className="analytic-logo">
            <BiTrashAlt />
          </div>
          <div className="analytic-action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="analytic-transfer">
          <h6>Transfer via</h6>
          <h6>Card number</h6>
        </div>
        <div className="analytic-money">
          <h5>$1500</h5>
        </div>
      </div>

      <div className="analytic-card">
        <div className="analytic-design">
          <div className="analytic-logo">
            <BsBank />
          </div>
          <div className="analytic-action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="analytic-transfer">
          <h6>Transfer via</h6>
          <h6>Card number</h6>
        </div>
        <div className="analytic-money">
          <h5>$1500</h5>
        </div>
      </div>

      <div className="analytic-card">
        <div className="analytic-design">
          <div className="analytic-logo">
            <GiTakeMyMoney />
          </div>
          <div className="analytic-action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="analytic-transfer">
          <h6>Transfer via</h6>
          <h6>Card number</h6>
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
  justify-content: space-between;
  margin: 0 60px;

  .analytic-card {
    padding: 1rem;
    border-radius: 1rem;
    color: black;
    background-color: white;
    justify-content: space-evenly;
    align-items: center;
    transition: 0.5s ease-in-out;
    width: 170px;

    .analytic-design {
      display: flex;
      align-items: center;

      .analytic-logo {
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          font-size: 2rem;
        }
      }
      .analytic-action {
        margin-left: 0.5rem; /* Ajuste a margem esquerda */
        svg {
          font-size: 1.5rem;
        }
      }
    }

    .analytic-transfer {
      margin-top: 20px;
      color: grey;
    }
    .analytic-money {
      margin-top: 20px;
    }
  }
`;
