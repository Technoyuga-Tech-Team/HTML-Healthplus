import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './layouts/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './comman/header';
import Footer from './comman/footer';
import Register from './layouts/register';

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
