import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { getDataById } from '../../utils/api/common.api';

const Player = ({ id, scheduleStart, scheduleEnd, location }) => {
	const [player, setPlayer] = useState([]);
	const { userData } = useContext(AuthContext);
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
				<div>
					<span>{player.username}</span>
					<span>{location}</span>
				</div>
				<div>
					<span>{player.position}</span>
					<span>{player.level}</span>
				</div>
				<div>
					<span>{scheduleStart}</span>
					<span> a </span>
					<span>{scheduleEnd}</span>
				</div>
			</div>
			{userData && (
				<div>
					<button
						onClick={() => navigate('/playerInfo', { state: { player } })}
					>
						Ver perfil
					</button>
					<button>Invitar</button>
				</div>
			)}
		</div>
	);
};

// FUNCION PARA OBTENER LOS DATOS DE CADA JUGADOR
const getDataOfPlayer = async (id, setPlayer) => {
	const dataPlayers = await getDataById(`${URLS.API_USERS}/${id}`);
	setPlayer(dataPlayers);
};

export default Player;
