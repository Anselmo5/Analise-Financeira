import React from 'react'
import './Login.css'
import {Link,useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useState,useEffect } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate()

   const handlesubmit = async (e) => {
    e.preventDefault();

      if(!email || !senha){
        Swal.fire({
          title: "Erro no envio!",
          text: "Preencha todos os campos",
          icon: "error"
        });
      }


      try {
        const response = await axios.post(
          'http://localhost:5173/grafico',
          JSON.stringify({ email,senha}),
          {
            headers: { 'Content-Type': 'application/json'},
          }
        )

          setUser(response.data.user)
          navigate(response.data.redirect)

      } catch (error) {
        if (!error?.response) {
          Swal.fire({
            title: "Erro Server",
            text: "Erro ao acessar o servidor",
            icon: "error"
          });
        } else if (error.response.status === 401) {
          Swal.fire({
            title: "Erro de envio",
            text: "Usuário ou senha inválidos",
            icon: "error"
          });
        }
      }
   }

  return (
    <div>
      <div className='aling'>
          <div className='container'>
                <div className='user'>
                     <div className='form'>
                           {/* logo */}
                        <div className='group'>
                            <label>Email</label>
                            <input 
                              type="email" 
                              placeholder='Ex: Maria@gmail.com' 
                              onChange={(event) => setEmail(event.target.value)}
                              />
                        </div>
                        <div className='group'>
                            <label>Senha</label>
                            <input 
                              type="password" 
                              placeholder='Digite sua senha' 
                              onChange={(event) => setSenha(event.target.value)}
                              required 
                              />
                        </div>
                      <button onClick={(event) => handlesubmit(event)}>Entrar</button>
                     </div>
                </div>
          </div>
      </div>
    </div>
  )
}

export default Login