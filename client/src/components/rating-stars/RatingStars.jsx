const RatingStars = ({ average }) => {
	const stars = [];
	for (let i = 0; i < 5; i++) {
		stars.push(<span key={i}>{i < average ? '★' : '☆'}</span>);
	}
	return <div>{stars}</div>;
};

export default RatingStars;
