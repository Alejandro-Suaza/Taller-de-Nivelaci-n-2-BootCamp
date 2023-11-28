import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import MiComponente from './component/MiComponente'
import MiContador from './component/MiContador'
import MisProductos from './component/MisProductos'
import UseReducer from './component/UseReducer'
import Nav from './Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
          {<Route path='/' element={ <Nav/> } />}
          {<Route path='/micomponente' element={ <MiComponente/> } />}
          {<Route path='/micontador' element={ <MiContador/> } />}
          {<Route path='/misproductos' element={ <MisProductos/> } />}
          {<Route path='/miContadorConuseReducer' element={ <UseReducer/> } />}


      </Routes>        
    </Router>
  ) 
}

export default App