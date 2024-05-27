import React from 'react';
import styled from 'styled-components';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { GiPayMoney } from 'react-icons/gi';
import { AiOutlineThunderbolt, AiOutlineWifi } from 'react-icons/ai';

const Activity = () => {
  return (
    <Section>
      <div className='activity-title'>
        <h4>Recent Activities</h4>
        <h6>10 Jan 2022</h6>
      </div>
      <div className="activity-analytic">
        <div className="activity-design">
          <div className="activity-logo">
            <MdOutlineWaterDrop />
          </div>
          <div className="activity-content">
            <h5>Water Bill</h5>
            <h6 className='activity-color'>Successfully</h6>
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
            <h5>Income Salary</h5>
            <h6 className='activity-color'>Received</h6>
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
            <h5>Electric Bill</h5>
            <h6 className='activity-color'>Successfully</h6>
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
            <h5>Internet Bill</h5>
            <h6 className='activity-color'>Successfully</h6>
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
  gap: 0.2rem;

  .activity-title {
    margin-left: 15px;

    h4 {
      font-weight: bold;
    }

    h6 {
      color: grey;
    }
  }

  .activity-analytic {
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

    &:hover {
      background-color: #F5F5FD;
      color: black;

      svg {
        color: black;
      }
    }

    .activity-design {
      display: flex;
      align-items: center;
      gap: 1rem;

      .activity-logo {
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
    }

    .activity-money {
      h5 {
        margin: 0;
      }
    }
  }
`;
