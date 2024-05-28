import React from 'react';
import styled from 'styled-components';
import { AiOutlineCalendar, AiOutlineBell, AiOutlineCaretDown } from 'react-icons/ai';
import avatarImage from '../src/assets/fundo1.jpg';

const Notification = () => {
  return (
    <Nav>
      <div className="notification">
        <div className="icons">
          <AiOutlineCalendar className='font_icon' />
          <AiOutlineBell className='font_icon' />
        </div>
        <div className="image">
          <img src={avatarImage} alt="Avatar" />
        </div>
        <AiOutlineCaretDown className='font_icon' />
      </div>
    </Nav>
  );
}

export default Notification;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  
  .notification {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;

    .font_icon {
      font-size: 1.5rem;
      color: grey;
    }

    .image {
      display: flex;
      align-items: center;
      gap: 1rem;

      img {
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 50%;
      }
    }
  }
`;