import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

function Navbar() {
  return (
    <Nav1>
      <div className="navbar-title">
        <h1>Dashboard</h1>
        <h5>Atualizações de pagamento</h5>
      </div>
      <div className="navbar-search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav1>
  );
}

export default Navbar;

const Nav1 = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Permite que os itens se reorganizem em telas menores */
  padding: 1rem;
  background-color: #771e76;
  width: 100%; /* Agora ocupa a largura total */
  max-width: 72vw;
  border-radius: 5px;

  .navbar-title {
    h1 {
      margin: 0;
      color: white;
      font-size: 1.8rem; /* Ajuste do tamanho da fonte */
    }

    h5 {
      color: white;
      margin: 0;
      font-size: 1rem; /* Tamanho da fonte menor */
    }
  }

  .navbar-search {
    background-color: white;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.4rem 1rem;
    border-radius: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15); /* Melhorando a sombra */

    svg {
      color: grey;
      font-size: 1.2rem; /* Ajuste do tamanho do ícone */
    }

    input {
      background-color: transparent;
      border: none;
      color: grey;
      font-size: 1rem;
      width: 150px; /* Ajuste inicial do tamanho */

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: grey;
      }
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 100%;

    .navbar-title h1 {
      font-size: 1.5rem;
    }

    .navbar-title h5 {
      font-size: 0.9rem;
    }

    .navbar-search {
      width: 50%; /* Ajusta a largura da barra de busca */
      margin-top: 10px;

      input {
        width: 20%; /* O input ocupa todo o espaço disponível */
      }
    }
  }

  @media (max-width: 650px) {
    .navbar-title h1 {
      font-size: 1.3rem;
    }

    .navbar-title h5 {
      font-size: 0.8rem;
    }

    .navbar-search {
      width: 50%;
      padding: 0.3rem 0.8rem;
      
      input {
        font-size: 0.8rem;
      }
    }

  @media (max-width: 588px) {
    .navbar-title h1 {
      font-size: 1.3rem;
    }

    .navbar-title h5 {
      font-size: 0.8rem;
    }

    .navbar-search {
      width: 50%;
      padding: 0.3rem 0.8rem;
      
      input {
        font-size: 0.6rem;
      }
    }


    @media (max-width: 481px) {
    .navbar-title h1 {
      font-size: 1.3rem;
    }

    .navbar-title h5 {
      font-size: 0.8rem;
    }

    .navbar-search {
      width: 50%;
      padding: 0.3rem 0.8rem;
      
      input {
        font-size: 0.5rem;
      }
    }

      @media (max-width: 401px) {
    .navbar-title h1 {
      font-size: 1.3rem;
    }

    .navbar-title h5 {
      font-size: 0.8rem;
    }

    .navbar-search {
      width: 50%;
      padding: 0.3rem 0.8rem;
      
      input {
        font-size: 0.4rem;
      }
    }



  }
`;

