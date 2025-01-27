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
  align-items: center; /* Adicionado para melhor alinhamento vertical */
  color: black;
  padding: 1rem; /* Adicionado para espaçamento interno */
  background-color:#771e76; /* Adicionado para um fundo diferente */
  width:72vw;
  border-radius:5px;

  .navbar-title {
    h1{
      margin: 0; /* Adicionado para remover margem padrão */
      color:white;
    }

    h5{
      color: white;
      margin: 0; /* Adicionado para remover margem padrão */
    }
  }

  .navbar-search {
    background-color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 1rem; /* Ajustado para espaçamento interno */
    border-radius: 1.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adicionado para sombra */

  }
    svg {
      color: grey;
    }

    .navbar-search input{
      background-color: transparent;
      border: none;
      color: grey;
      font-size: 1rem; /* Adicionado para tamanho de fonte */
      border:none;

      &:focus {
        outline: none;
      }
      &::placeholder {
        color: grey;
      }
    }
  }
`;
