import { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import quotes from './json/quotes.json';
import colors from './utils/colors';
function App() {
	const getRandomElement = (arr) => {
		const indexRandom = Math.floor(Math.random() * arr.length);
		return arr[indexRandom];
	};

	let quoteRandom = getRandomElement(quotes);
	let colorRandom = getRandomElement(colors);

	const [randomQuotes, setRandomQuote] = useState(quoteRandom);
	const [randomColors, setRandomColors] = useState(colorRandom);

	const bgColorApp = {
		backgroundColor: randomColors,
	};

	const getRandomAll = () => {
		quoteRandom = getRandomElement(quotes);
		colorRandom = getRandomElement(colors);
		setRandomQuote(quoteRandom);
		setRandomColors(colorRandom);
	};

	return (
		<div className="App" style={bgColorApp}>
			<QuoteBox
				randomQuotes={randomQuotes}
				randomColors={randomColors}
				getRandomAll={getRandomAll}
			/>
		</div>
	);
}

export default App;
