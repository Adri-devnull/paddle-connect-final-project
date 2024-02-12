import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { getDataById } from '../../utils/api/common.api';

const Player = ({ id }) => {
	const [player, setPlayer] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		getDataOfPlayer(id, setPlayer);
	}, []);

	return (
		<div>
			<div>
				<img src='/assets/images/user.svg' alt='' />
			</div>
			<div>
				<span>{player.username}</span>
				<div>
					<span>{player.position}</span>
					<span>{player.level}</span>
				</div>
			</div>
			<div>
				<button onClick={() => navigate('/playerInfo', { state: { player } })}>
					Ver perfil
				</button>
				<button>Invitar</button>
			</div>
		</div>
	);
};

// FUNCION PARA OBTENER LOS DATOS DE CADA JUGADOR
const getDataOfPlayer = async (id, setPlayer) => {
	const dataPlayers = await getDataById(`${URLS.API_USERS}/${id}`);
	setPlayer(dataPlayers);
};

export default Player;
