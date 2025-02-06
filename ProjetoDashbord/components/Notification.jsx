import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import {Link} from 'react-router-dom'

import master from '../src/assets/mastercard.png'
import avatarImage from '../src/assets/Avatar3.jpg';

import { AiOutlineLogin } from "react-icons/ai";
import { FcSimCardChip } from 'react-icons/fc';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { GiPayMoney } from 'react-icons/gi';
import { BiHomeAlt, BiCar } from 'react-icons/bi';
import { AiOutlineThunderbolt, AiOutlineWifi } from 'react-icons/ai';
import { AiOutlineCaretDown,AiOutlineBars } from 'react-icons/ai';
const Notification = () => {

  const [isOpen, setIsOpen] = useState(false); // Controle de abertura/fechamento do menu

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Alterna entre abrir e fechar
  };

  return (
    <Nav>
      <div className="notification">
        <div className="icons">
          <Link to='/'> <AiOutlineLogin className='font_icon' color='white'/></Link>
          <AiOutlineBars className='font_icon' color='white'    
              onClick={toggleSidebar}          
            />
        </div>

        <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✖ {/* Ícone de fechar */}
        </button>
        <div className="sidebar-menu">
          {/* Card */}
            <section>
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
                </section>

              {/* activity */}

              <section className='activity'>
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
                    </section>

                    {/* payment */}

                <section className='payment'>
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
                    </section>        
        </div>
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

/* Sidebar.css */
.sidebar {
  position: fixed;
  top: 0;
  right: -350px; /* Escondido inicialmente */
  width: 21vw;
  height: 100%;
  background-color: #333;
  color: white;
  transition: left 0.3s ease;
  padding-top: 60px;
  padding: 25px;
    overflow-y: auto;
}

.sidebar.open {
  left: 79vw; /* Quando aberto, o menu aparece */
}




.sidebar-menu {
  list-style-type: none;
  padding: 0;
}

.sidebar-menu li {
  padding: 12px;
  border-bottom: 1px solid #444;
}

.sidebar-menu li a {
  text-decoration: none;
  color: white;
  display: block;
}

.sidebar-menu li a:hover {
  background-color: #575757;
}


/* Botão de fechar */
.close-btn {
  position: absolute;
  top: 1px;
  right: 15px;
  font-size: 20px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

  .notification {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;

    .icons {
      display: flex;
      gap: 1rem;

      .font_icon {
        font-size: 1.5rem;
        color: white;
        cursor: pointer;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: #ddd;
        }
      }
    }

    .image {
      display: flex;
      align-items: center;

      img {
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 50%;
      }
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .notification {
      gap: 0.8rem;
      padding: 0 0.5rem;

      .icons {
        gap: 0.5rem;

        .font_icon {
          font-size: 1.3rem;
        }
      }

      .image img {
        height: 2rem;
        width: 2rem;
      }
    }
  }

  @media (max-width: 480px) {
    .notification {
      gap: 0.5rem;

      .icons {
        gap: 0.3rem;

        .font_icon {
          font-size: 1.2rem;
        }
      }

      .image img {
        height: 1.8rem;
        width: 1.8rem;
      }
    }
  }
`;