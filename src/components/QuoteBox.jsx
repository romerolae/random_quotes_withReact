import React from 'react';

const QuoteBox = ({ randomQuotes, randomColors, getRandomAll }) => {
	const colorFont = {
		color: randomColors,
	};

	const bgColorBtn = {
		backgroundColor: randomColors,
	};

	return (
		<article className="card" style={colorFont}>
			<header className="card__header">
				<i className="bx bxs-quote-left"></i>
				<h2 className="card__quote">{randomQuotes.quote}</h2>
			</header>
			<div className="card__info">
				<p className="card__author">{randomQuotes.author}</p>
				<button onClick={getRandomAll} className="card__btn" style={bgColorBtn}>
					<i className="bx bxs-right-arrow"></i>
				</button>
			</div>
		</article>
	);
};

export default QuoteBox;
