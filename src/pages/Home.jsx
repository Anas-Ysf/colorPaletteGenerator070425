import React, { useState, useEffect } from 'react'
import { generateColorPalette } from '../utils.js'
import useLocalStorage from '../hooks/useLocalStorage.js'
import ColorPicker from '../components/ColorPicker.jsx'

function Home() {
	const [currentPalette, setCurrentPalette] = useState(generateColorPalette())
	const [savedPalettes, setSavedPalettes] = useLocalStorage(
		'savedPalettes',
		[]
	)

	// Generate a new palette
	const handleGenerate = () => {
		const newPalette = generateColorPalette()
		setCurrentPalette(newPalette)
	}

	// Save the current palette
	const handleSave = () => {
		const updatedSavedPalettes = [...savedPalettes, currentPalette]
		setSavedPalettes(updatedSavedPalettes)

		/*commented part: using localStorage with useState for savedPalettes, 
        without using useLocalStorage.jsx */
		// localStorage.setItem(
		// 	'savedPalettes',
		// 	JSON.stringify(updatedSavedPalettes)
		// )
	}
	/*commented part: using localStorage with useState for savedPalettes, 
        without using useLocalStorage.jsx */
	// Load saved palettes from localStorage on component mount
	// useEffect(() => {
	// 	const saved = JSON.parse(localStorage.getItem('savedPalettes')) || []
	// 	setSavedPalettes(saved)
	// }, [])

	const handleColorChange = (id, newColor) => {
		setCurrentPalette(
			currentPalette.map((color) =>
				color.id === id ? { ...color, hexCode: newColor } : color
			)
		)
	}

	return (
		<main class="p-2">
			<div class="px-2 py-3 border-2 border-gray-300 shadow-md rounded-md min-w-fit mx-8 mt-16">
				{/* Current Palette */}
				<div className="flex gap-3 justify-center items-center">
					<ColorPicker
						currentPalette={currentPalette}
						onColorChange={handleColorChange}
					/>
				</div>

				<div className="mt-3 flex gap-7 items-center justify-center">
					<button
						onClick={handleGenerate}
						className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
					>
						Generate Random
					</button>
					<button
						onClick={handleSave}
						className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
					>
						Save Palette
					</button>
				</div>
			</div>
		</main>
	)
}

export default Home
