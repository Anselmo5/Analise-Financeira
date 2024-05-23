import { Routes,Route,useLocation } from "react-router-dom"
import {AnimatePresence,motion} from 'framer-motion'
import Home from "../components/Home"
import Grafico from "../components/Grafico"
import Login from "../components/Login"
import Cadastro from "../components/Cadastro"

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
    initial={{ opacity: 0,}}
    animate={{ opacity: 1, }}
    exit={{ opacity: 0,}}
    transition={{ duration: 1 }}
  >
  {children}
</motion.div>
 )
}

export default App
