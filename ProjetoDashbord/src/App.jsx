import { Routes,Route,useLocation } from "react-router-dom"
import {AnimatePresence,motion} from 'framer-motion'
import Home from "../components/Home"
import Grafico from "../components/Grafico"
import Login from "../components/Login"
import Cadastro from "../components/Cadastro"
import fundo1 from './assets/fundo1.jpg'

function App() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence exitBeforeEntrer>
          <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTrasition><Home/></PageTrasition>}/>
              <Route path="/grafico" element={<PageTrasition><Grafico/></PageTrasition>}/>
              <Route path="/login" element={<PageTrasition><Login/></PageTrasition>}/>
              <Route path="/cadastro" element={<PageTrasition><Cadastro/></PageTrasition>}/>
          </Routes>
      </AnimatePresence>
    </>
  )
};

const PageTrasition = ({children}) =>{
 return(
  <motion.div
    style={{backgroundColor:'#fff'}}
    initial={{ opacity: 0,}}
    animate={{ opacity: "100%", }}
    exit={{ x: window.innerWidth, transition: {duration:0}}}
  >
  {children}
</motion.div>
 )
}

export default App
