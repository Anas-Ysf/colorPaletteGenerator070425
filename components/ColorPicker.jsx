import React from 'react'

function ColorPicker({ currentPalette, onColorChange }) {
	return (
		<>
			{currentPalette.map((color) => (
				<span key={color.id} className="group relative">
					<input
						type="color"
						className="color rounded-md flex-1 w-32 h-48 z-0 group-hover:opacity-30 cursor-pointer"
						id={color.id}
						value={color.hexCode}
						onChange={(e) =>
							onColorChange(color.id, e.target.value)
						}
					/>
					<p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 z-10 font-bold text-gray-900 pointer-events-none"
					for={color.hexCode}>
						{color.hexCode}
					</p>
				</span>
			))}
		</>
	)
}

export default ColorPicker
