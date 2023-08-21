import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Inicio from './pages/inicio'



const App = () => {
	return (
		<div>
			<BrowserRouter>
                <Routes>
				<Route path="/" element={<Login/>} />
				<Route path="/register"  element={<Register/>} />
                <Route path="/inicio"  element={<Inicio/>} />
				
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App