import { useLocation, useNavigate } from 'react-router-dom';

const PlayerInfo = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const data = location.state.player;
	return (
		<div>
			<div>
				<img src='' alt='' />
			</div>
			<div>
				<p>{data.name}</p>
				<p>{data.username}</p>
				<p>{data.email}</p>
				<p>{data.gender}</p>
				<p>{data.level}</p>
				<p>{data.position}</p>
			</div>
			<div>
				<button onClick={() => navigate('/')}>Volver</button>
			</div>
		</div>
	);
};

export default PlayerInfo;
