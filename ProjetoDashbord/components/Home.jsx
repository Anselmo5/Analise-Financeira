import React from 'react'
import {Link} from 'react-router-dom'

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

const Home = () => {
  return (
    <div>
         <header style={{backgroundImage:`url(${fundo1})`}}>
                <div className="Text">
                    <h1 className='titulo'>Grafico Financeiro</h1>
                    <h3 className='subtitulo'>Conheça nossa empressa</h3>
                    <Link to='' className='btn'>Sobre</Link>
                </div>
                <div className="efect1"></div>
         </header>



         <main>
                <section className="aprt">
                    <div className="containe">
                            <h2 className="sobre">Sobre Nossa Empressa</h2>
                            <h3 className="slogan">Virtualizando seu Dinheiro</h3>
                            <p className="prf">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa, ipsum ea eveniet possimus minus error nulla et nihil sit harum numquam ipsam excepturi tenetur laborum minima, perspiciatis iusto! Reprehenderit, eveniet voluptas. Quae eius reprehenderit quasi a voluptatem facilis pariatur iste eum, non laborum itaque, vitae nihil. Quam, doloribus reprehenderit?</p>
                            <p className="prf">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat id rem quod distinctio animi laboriosam perspiciatis totam tempora magni laudantium, culpa non consequuntur assumenda odit fugit quasi officia iure repellendus rerum nisi minus pariatur. Quaerat explicabo saepe dolorum, quos aliquam sunt numquam adipisci ipsa ad accusantium ipsum ipsam soluta accusamus.</p>
                            <Link to='' className='btn'>Increva-se</Link>
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
                <section className="membros">
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
                                <img src={Avatar2} alt="" />
                                <h4>Cezar -Database</h4>
                                <p>Responsavel pela criação do banco de dados</p>
                            </div>

                            <div className="card">
                                <img src={Avatar3} alt="" />
                                <h4>Henrique - Backend</h4>
                                <p>Responsavel pela parte funcional do site</p>
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

        <footer>
            <div className="containe">
                <h2 className="titulofooter">Entre em contado com nosco</h2>
                <h3 className="subtitulofooter">Nos de seu feedback</h3>
                <div className="footer">
                    <form action="">
                        <input type="text" placeholder='Nome'/>
                        <input type="email" placeholder='Email'/>
                        <textarea name="" id="" cols="30" rows="10px"></textarea>
                        <input type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Home
