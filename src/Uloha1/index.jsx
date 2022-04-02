import React from 'react'

// Zadání:
// Po kliku na tlačítko zobraz bublinu s textem „Ahoj“.
// "Bublinou" se myslí alert v prohlížeči.

const Uloha1 = () => {

	const handleClick = () => {
		alert('Ciao')
	}

	return (
		<button onClick={handleClick}>
			Klikni na mě
		</button>)
}

export default Uloha1;


// import React from 'react'

// // Zadání: Po kliku na tlačítko zobraz bublinu s textem „Ahoj“.

// export const Uloha1 = () => {
// 	return <button onClick={() => alert('Ahoj')}>Ukaž bublinu</button>
// }