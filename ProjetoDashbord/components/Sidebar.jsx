import React, { useState } from 'react';
import styled from 'styled-components';
import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineFundProjectionScreen, AiOutlineFileText, AiOutlineTrophy, AiOutlineDotChart } from 'react-icons/ai';
import { BsCreditCard2Front, BsCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [currentLink, setCurrentLink] = useState(1);
  
  return (
    <Section>
      <div className="top">
        <div className="brand">
          <BsCircleFill className='color1'/>
          <BsCircleFill className='color2'/>
          <BsCircleFill className='color3'/>
        </div>
        <div className="links">
          <ul>
            <li className={currentLink === 1 ? "active" : ""}
              onClick={() => setCurrentLink(1)}
            >
              <Link to='#'>
                <BiHomeAlt/>
              </Link>
            </li>
            <li className={currentLink === 2 ? "active" : ""}
              onClick={() => setCurrentLink(2)}
            >
              <Link to='#'>
                <AiOutlineFundProjectionScreen/>
              </Link>
            </li>
            <li className={currentLink === 3 ? "active" : ""}
              onClick={() => setCurrentLink(3)}
            >
              <Link to='#'>
                <AiOutlineFileText/>
              </Link>
            </li>
            <li className={currentLink === 4 ? "active" : ""}
              onClick={() => setCurrentLink(4)}
            >
              <Link to='#' className='noti'>
                <BsCreditCard2Front/>
                <span>2</span>
              </Link>
            </li>
            <li className={currentLink === 5 ? "active" : ""}
              onClick={() => setCurrentLink(5)}
            >
              <Link to='#'>
                <AiOutlineTrophy/>
              </Link>
            </li>
            <li className={currentLink === 6 ? "active" : ""}
              onClick={() => setCurrentLink(6)}
            >
              <Link to='#'>
                <AiOutlineDotChart/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Sidebar;

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color:#191919;
  height: 100vh;
  width: 6vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;

  .top {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;

    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      
      .color1 {
        color: red;
      }
      .color2 {
        color: yellow;
      }
      .color3 {
        color: green;
      }

      svg {
        font-size: 0.8rem;
      }
    }

    .links {
      ul {
        width: 100%;
        padding: 0;
        margin: 0;
        list-style-type: none;

        .active {
          border-right: 0.2rem solid white;

          a {
            color: white;
          }
        }

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 0.2rem solid transparent;
          margin: 1rem 0;
          transition: 0.3s ease-in-out;

          a {
            text-decoration: none;
            color: grey;
            font-size: 1.6rem;
          }

          .noti {
            position: relative;
            display: flex;

            span {
              position: absolute;
              top: -10px;
              right: -10px;
              background-color: red;
              font-size: 0.5rem;
              border-radius: 50%;
              padding: 2px 5px;
              color: white;
            }
          }

          &:hover {
            a {
              color: white;
            }
          }
        }
      }
    }
  }
`;
