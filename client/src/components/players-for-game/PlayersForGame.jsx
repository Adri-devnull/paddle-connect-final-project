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
			<div>
				<h3>Filtrar por</h3>
				<div>
					<label htmlFor='position'>Posicion</label>
					<select name='position' id='position'>
						<option value='right'>Derecha</option>
						<option value='left'>Izquierda</option>
					</select>
				</div>
				<div>
					<label htmlFor='level'>Nivel</label>
					<select name='level' id='level'>
						<option value='2'>2</option>
						<option value='2.5'>2.5</option>
						<option value='3'>3</option>
						<option value='3.5'>3.5</option>
						<option value='4'>4</option>
						<option value='4.5'>5.5</option>
						<option value='5'>5</option>
					</select>
				</div>
				<div>
					<label htmlFor='schedule'>Horario</label>
					<select name='schedule' id='schedule'>
						<option value='sooner'>Mas pronto</option>
						<option value='later'>Mas tarde</option>
					</select>
				</div>
			</div>
			{playersWaitingForGame.map(player => (
				<Player
					key={player.id}
					id={player.id}
					scheduleStart={player.scheduleStart}
					scheduleEnd={player.scheduleEnd}
					location={player.location}
				/>
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
