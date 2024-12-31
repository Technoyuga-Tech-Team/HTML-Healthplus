import { BrowserRouter, Router, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Router path="/" element={<ProtectedRoutesAfterLogin element={<Login />} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
