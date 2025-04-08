import React from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MyPalettes from './pages/MyPalettes.jsx'

function App() {
	return (
		<Router>
			<nav className="bg-gray-200 py-2 px-4 flex justify-between items-center">
				<Link
					to="/"
					className="text-3xl font-bold rounded-lg hover:bg-gray-300 px-4 py-2"
				>
					Color Palette Generator
				</Link>
				<Link
					to="/my-palette"
					className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:text-gray-100 hover:bg-blue-600 focus:z-10 focus:ring-4 focus:ring-gray-200"
				>
					My Palettes
				</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/my-palette" element={<MyPalettes />} />
			</Routes>
		</Router>
	)
}

export default App
