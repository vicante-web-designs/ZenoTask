import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {  

 return(
  <BrowserRouter>
    <>
      <button className='bg-blue-600 px-4 py-2 rounded-full text-white'>
        <a href="./components/pages/Dashboard.tsx">
          click me
        </a>
      </button>
    </>
  </BrowserRouter>
 )
}

export default App
