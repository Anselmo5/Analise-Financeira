import React from 'react'
import './Login.css'
import {Link,useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useState} from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null);;
  const navigate = useNavigate()

    const handlesubmit = async (e) => {
    e.preventDefault();

      if(!email || !password){
        Swal.fire({
          title: "Erro no envio!",
          text: "Preencha todos os campos",
          icon: "error"
        });
      }


      try {
        const response = await axios.post(
          'http://localhost:3003/Login',
          JSON.stringify({email,password}),
          {
            headers: { 'Content-Type': 'application/json'},
          }
        );

          setUser(response.data.user)
          navigate(response.data.redirect);
          console.log(response.data);
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
            <div className="efectlogin1"></div>
                <div className='user'>
                     <div className='form'>
                           {/* logo */}
                           <h2>Faça Login</h2>
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
                            <Link to='/cadastro'>Sign Up</Link>
                        </div>
                     </div>
                    <div className="efectlogin2"></div>
                </div>
          </div>
      </div>
    </div>
  )
}

export default Login