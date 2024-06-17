import React from 'react'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import {motion} from 'framer-motion'
import { Routes,Route,useLocation } from "react-router-dom"

// estilo do site
import './styles.css'

// imagens 
import grafi1 from '../src/assets/1.png'
import grafi2 from '../src/assets/2.png'
import grafi3 from '../src/assets/3.jpg'
import grafi4 from '../src/assets/4.jpg'
import grafi5 from '../src/assets/5.jpg'
import fundo1 from '../src/assets/fundo1.jpg'
import Avatar1 from '../src/assets/Avatar1.jpg'
import Avatar2 from '../src/assets/Avatar2.jpg'
import Avatar3 from '../src/assets/Avatar3.jpg'
import Avatar4 from '../src/assets/Avatar4.jpg'

const Home = () => {
  return (

<div>


         <header style={{backgroundImage:`url(${fundo1})`}}>
                <div className="aling">
                    <Link to="/login">Login</Link>
                    <HashLink smooth to="#sobre">Sobre</HashLink>
                    <HashLink smooth to="#contato">Contato</HashLink>
                    <HashLink smooth to="#equipe">Equipe</HashLink>
                </div>
                
                <div className="Text">
                    <h1 className='titulo'>Grafico Financeiro</h1>
                    <h3 className='subtitulo'>Conheça nossa empressa</h3>
                    <HashLink smooth to='#sobre' className='btn'>Sobre</HashLink>
                </div>
                <div className="efect1"></div>
         </header>



         <main>
                <section className="aprt" id='sobre'>
                    <div className="containe">
                            <h2 className="sobre">Sobre Nossa Empressa</h2>
                            <h3 className="slogan">Virtualizando seu Dinheiro</h3>
                            <p className="prf">A Gráfico Financeiro é uma empresa especializada em oferecer soluções financeiras personalizadas para indivíduos e empresas que buscam otimizar seus investimentos e gerenciar seus recursos de maneira eficiente. Com uma equipe de especialistas altamente qualificados e uma abordagem centrada no cliente, proporcionamos análises detalhadas, consultorias estratégicas e ferramentas inovadoras que facilitam a tomada de decisões informadas. Nosso compromisso é garantir que nossos clientes alcancem seus objetivos financeiros com segurança e sustentabilidade, aproveitando as melhores oportunidades do mercado.</p>
                            <p className="prf">Além dos serviços de consultoria financeira, a Gráfico Financeiro também se destaca pela criação de gráficos e relatórios financeiros precisos e de fácil compreensão. Utilizamos tecnologia de ponta para transformar dados complexos em informações acessíveis e visuais impactantes, permitindo que nossos clientes entendam melhor suas finanças e façam escolhas mais assertivas. Nossa missão é ser um parceiro confiável e transparente, ajudando nossos clientes a prosperar financeiramente através de soluções eficazes e inovadoras.</p>
                            <Link to='/login' className='btn'>Increva-se</Link>
                    </div>
                </section>

                <section className="galeria">
                    <div className="efect1"></div>

                    <div className="imagenes none">
                        <img src={grafi1} alt="" />
                    </div>

                    <div className="imagenes">
                        <img src={grafi2} alt="" />
                    </div>

                    <div className="imagenes">
                        <img src={grafi3} alt="" />
                        <div className="logo">
                            <h2>Grafico Financeiro</h2>
                            <div></div>
                        </div>
                    </div>

                    <div className="imagenes">
                        <img src={grafi4} alt="" />
                    </div>

                    <div className="imagenes none">
                        <img src={grafi5} alt="" />
                    </div>
                <div className="efect2"></div>
                </section>

                {/* Membros da equipe */}
                <section className="membros" id='equipe'>
                    <div className="containe">
                        <h2 className="sbrequipe">Membros da Equipe</h2>
                        <h3 className="slogan">Conheça a nossa equipe</h3>
                        <div className="cards">

                            <div className="card">
                                <img src={Avatar1} alt="" />
                                <h4>Anselmo - FrontEnd</h4>
                                <p>Responsavel pela criação do websit</p>
                            </div>

                            <div className="card">
                                <img src={Avatar3} alt="" />
                                <h4>Cezar -Database</h4>
                                <p>Responsavel pela criação do banco de dados</p>
                            </div>

                            <div className="card">
                                <img src={Avatar2} alt="" />
                                <h4>Henrique - Backend</h4>
                                <p>Responsavel pela parte funcional do site</p>
                            </div>


                            <div className="card">
                                <img src={Avatar4} alt="" />
                                <h4>Dudinha - Front End</h4>
                                <p>Responsavel pela criação do websit</p>
                            </div>
                        </div>
                    </div>
                </section>

            <section className="fundo" style={{backgroundImage:`url(${fundo1})`}}>
                <div className="efect2"></div>
                <div className="containe">

                </div>
                <div className="efectunico"></div>
            </section>
         </main>

        <footer id='contato'>
            <div className="containe">
                <h2 className="titulofooter">Entre em contado com nosco</h2>
                <h3 className="subtitulofooter">Nos de seu feedback</h3>
                <div className="footer">
                    <form action="https://formsubmit.co/anselmo_reis@estudante.sesisenai.org.br.com" method="POST">
                        <input type="text" placeholder='Nome'/>
                        <input type="email" placeholder='Email'/>
                        <textarea name="message" id="" cols="30" rows="10px" ></textarea>
                        <input type="submit" value="Enviar" />

                        <input type="hidden" name='_subject' value="Mensagem Grafico Financeiro"/>
                        <input type="text" name='_honey' style={{display:'none'}}/>
                        <input type="hidden" name='_captcha' value="false"/>
                    </form>
                </div>
            </div>
        </footer>
     </div>
  )
}

export default Home
