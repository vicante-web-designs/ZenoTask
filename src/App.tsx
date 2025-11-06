import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard'

function App() {  

 return(
  <BrowserRouter>
    <>
      <button className='bg-blue-600 px-4 py-2 rounded-full text-white'>
        <Link to='/dashboard'>
          Click me
        </Link>
      </button>

      <Routes>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </>
  </BrowserRouter>
 )
}

export default App
