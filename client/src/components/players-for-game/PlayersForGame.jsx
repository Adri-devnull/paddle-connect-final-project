import { useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { getData } from '../../utils/api/common.api';
import Player from '../player/Player';

const PlayersForGame = () => {
	const [playersWaitingForGame, setPlayersWaitingForGame] = useState([]);

	useEffect(() => {
		getAllPlayersForGame(setPlayersWaitingForGame);
	}, []);
	return (
		<div>
			{playersWaitingForGame.map(player => (
				<Player key={player.id} id={player.id} />
			))}
		</div>
	);
};

// FUNCION PARA LLAMAR A LA BASE DE DATOS Y OBTENER LA LISTA DE JUGADORES DISPONIBLES PARA JUGAR
const getAllPlayersForGame = async setPlayersWaitingForGame => {
	const playersForGame = await getData(URLS.API_BOOKING);
	setPlayersWaitingForGame(playersForGame);
};

export default PlayersForGame;
