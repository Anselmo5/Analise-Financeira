import React from 'react';
import styled from 'styled-components';
import { BiHomeAlt, BiCar } from 'react-icons/bi';

const Payment = () => {
  return (
    <Section>
      <div className="payment-title">
        <h4>Próximos Pagamentos</h4>
        <h6>24 jun 2024</h6>
      </div>
      <div className="payment-analytic">
        <div className="payment-design">
          <div className="payment-log">
            <BiHomeAlt />
          </div>
          <div className="payment-content">
            <h5>Aluguel de casa</h5>
            <h5 className="payment-color">Pendente</h5>
          </div>
        </div>  
        <div className="payment-money">
          <h5>$1500</h5>
        </div>
      </div>  
      <div className="payment-analytic">
        <div className="payment-design">
          <div className="payment-log">
            <BiCar />
          </div>
          <div className="payment-content">
            <h5>Seguro de automóvel</h5>
            <h5 className="payment-color">Pendente</h5>
          </div>
        </div>
        <div className="payment-money">
          <h5>$150</h5>
        </div>
      </div>
    </Section>
  );
};

export default Payment;

const Section = styled.section`
  display: grid;
  gap: 0.2rem;

  .payment-title {
    margin-left: 15px;

    h4 {
      font-weight: bold;
      color: white;
    }

    h6 {
      color: white;
    }
  }

  .payment-analytic {
    padding: 0.3rem 0.8rem 0.3rem 1.2rem;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    background-color: #f9f9f9;
    border-radius: 0.5rem;
    margin: 0.5rem 0;
  }


.payment-analytic:hover{
  background:#22202B;
  color:#fff;
} 


&:hover {
  color: white;
}

svg {
  color: black;
}

    .payment-design {
      display: flex;
      align-items: center;
      gap: 1rem;

      .payment-log {
        background-color: white;
        border-radius: 1rem;
        border: 1px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;

        svg {
          font-size: 1.5rem;
        }
      }
    }

    .payment-content {
      display: flex;
      flex-direction: column;

      h5 {
        margin: 0;
      }

      .payment-color {
        color: grey;
      }
    }

    .payment-money {
      h5 {
        margin: 0;
        float: right;
      }
    }
  }
`;
