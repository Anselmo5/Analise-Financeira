import React from 'react';
import styled from 'styled-components';
import { AiOutlineCalendar, AiOutlineBell, AiOutlineCaretDown } from 'react-icons/ai';
import avatarImage from '../src/assets/Avatar3.jpg';
import { AiOutlineLogin } from "react-icons/ai";
import {Link} from 'react-router-dom'
const Notification = () => {
  return (
    <Nav>
      <div className="notification">
        <div className="icons">
          <Link to='/'> <AiOutlineLogin className='font_icon' color='white'/></Link>
          <AiOutlineCalendar className='font_icon' color='white'/>
          <AiOutlineBell className='font_icon' color='white'/>
        </div>
        <div className="image">
          <img src={avatarImage} alt="Avatar" />
        </div>
        <AiOutlineCaretDown className='font_icon' color='white'/>
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
