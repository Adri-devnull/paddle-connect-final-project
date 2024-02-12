import { useLocation } from 'react-router-dom';

const PlayerInfo = () => {
	const location = useLocation();
	const data = location.state.player;
	return (
		<div>
			<h2>{data.name}</h2>
		</div>
	);
};

export default PlayerInfo;
