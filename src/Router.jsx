import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Quemsomos from './pages/Quemsomos'
import Cadastro from './pages/Cadastro'
import Footer from './components/Footer'
import Croche from './pages/Croche'
import Macrame from './pages/Macrame'


const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quemsomos" element={<Quemsomos />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/Croche" element={<Croche />}/>
        <Route path="/Macrame" element={<Macrame />}/>

      </Routes>
      <Footer content="Desenvolvido por Náira Nogueira 🌻" />
    </BrowserRouter>
  )
}

export default Router