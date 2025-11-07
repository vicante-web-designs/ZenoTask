import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard'

function App() {  

 return(
  <BrowserRouter>
    <>
      <Routes>
        <Route path='/' 
          element={
            <button className='bg-blue-600 px-4 py-2 rounded-full text-white'>
              <Link to='/dashboard'>
                Click me
              </Link>
            </button>
          }
        />
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </>
  </BrowserRouter>
 )
}

export default App
