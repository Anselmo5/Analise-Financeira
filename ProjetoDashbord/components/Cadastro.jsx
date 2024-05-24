import React from 'react'
import './Cadastro.css'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios   from 'axios';

const Cadastro = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setPassword ] = useState('');
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3003/create-user', {
        nome,
        email,
        senha,
      });
      setUser(response.data);
      navigate('/grafico');
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      setError(true);
    }
  };


  return (
    <div>
        <div className='aling'>
          <div className='container'>
            <div className="efectcadastro1"></div>
                <div className='user'>
                     <div className='form'>
                           {/* logo */}
                           <h2>Faça Login</h2>

                        <div className='group'>
                            <label>Nome</label>
                            <input 
                              type="text" 
                              placeholder='Ex: Maria anjo martim' 
                              onChange={(e) => setNome(e.target.value)}
                              />
                        </div>
                        <div className='group'>
                            <label>Email</label>
                            <input 
                              type="email" 
                              placeholder='Ex: Maria@gmail.com' 
                              onChange={(e) => setEmail(e.target.value)}
                              />
                        </div>
                        <div className='group'>
                            <label>Senha</label>
                            <input 
                              type="password" 
                              placeholder='Digite sua senha' 
                              onChange={(e) => setPassword(e.target.value)}
                              required 
                              />
                        </div>
                      <button onClick={(e) => handleSubmit(e)}>Entrar</button>
                        <div className='redirect'>
                            <Link to="/">to go back</Link>
                            <Link to='/login'>Sing in</Link>
                        </div>
                     </div>
                    <div className="efectcadastro2"></div>
                </div>
          </div>
      </div>
  </div>
  )
}

export default Cadastro