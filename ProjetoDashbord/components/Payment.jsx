import React from 'react';
import styled from 'styled-components';
import { BiHomeAlt, BiCar } from 'react-icons/bi';

const Payment = () => {
  return (
    <Section className='payment'>
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
  gap: 0.5rem;


  .payment-title {
    margin-left: 15px;

    h4 {
      font-weight: bold;
      color: white;
      font-size: 1.2rem;
    }

    h6 {
      color: white;
      font-size: 1rem;
    }
  }

  .payment-analytic {
    padding: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    background-color: #f9f9f9;
    border-radius: 0.5rem;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: #22202B;
      color: white;
    }
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
    width: 100%;

    h5 {
      margin: 0;
      font-size: 1rem;
    }

    .payment-color {
      color: grey;
    }
  }

  .payment-money {
    h5 {
      margin: 0;
      font-size: 1rem;
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .payment-analytic {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .payment-design {
      gap: 0.5rem;
    }

    .payment-money {
      align-self: flex-end;
    }
  }

  @media (max-width: 480px) {
    .payment-title {
      text-align: center;
      margin-left: 0;
    }

    .payment-analytic {
      padding: 0.5rem;
    }

    .payment-design {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.3rem;
    }

    .payment-money {
      align-self: flex-start;
    }

    h5 {
      font-size: 0.9rem;
    }
  }
`;
  