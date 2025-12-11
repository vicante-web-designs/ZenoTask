import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard'

function App() {  

 return(
  <Router>
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Dashboard' element={<Dashboard />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
 )
}

export default App
