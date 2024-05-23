import React from 'react'
import './Cadastro.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import {motion} from 'framer-motion'
const Cadastro = () => {
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
                              onChange={(e) => setEmail(e.target.value)}
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
                      <button onClick={(e) => handlesubmit(e)}>Entrar</button>
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