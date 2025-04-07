import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'

function MyPalettes() {
	const [savedPalettes, setSavedPalettes] = useLocalStorage(
		'savedPalettes',
		[]
	)

	// Delete a saved palette
	const handleDelete = (index) => {
		const updatedSavedPalettes = savedPalettes.filter((_, i) => i !== index)
		setSavedPalettes(updatedSavedPalettes)

		/*using localStorage with useState for savedPalettes, without using useLocalStorage.jsx */
		// localStorage.setItem(
		// 	'savedPalettes',
		// 	JSON.stringify(updatedSavedPalettes)
		// )
	}
	/* Saved Palettes */
	return (
		<section className="p-2">
			<span className="font-bold text-xl mb-2">
				My Palettes ({savedPalettes.length})
			</span>
			<hr />
			{savedPalettes.length === 0 ? (
				<p>No palettes saved yet.</p>
			) : (
				savedPalettes.map((palette, index) => (
					<div
						key={index}
						className="mt-5 flex flex-row gap-5 flex-wrap items-center justify-around"
					>
						<div class="group rounded-md relative border-gray-200 border-2 flex gap-2 p-2 bg-gray-100">
							<span class="flex items-center justify-center gap-3">
								{palette.map((color) => (
									<div className="group-hover:opacity-10 flex flex-col gap-0.5 items-center">
										<div
											key={color.id}
											className="w-20 h-24 rounded-md"
											style={{
												backgroundColor: color.hexCode
											}}
										></div>
										<span class="group-hover:opacity-100 font-bold text-sm">
											{color.hexCode}
										</span>
									</div>
								))}
							</span>
							<section class="group-hover:visible invisible absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3">
								<button
									onClick={() => handleDelete(index)}
									className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
								>
									Delete
								</button>
							</section>
						</div>
					</div>
				))
			)}
		</section>
	)
}

export default MyPalettes
