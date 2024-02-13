import { useState } from 'react';
import { LEVELS } from '../../constants/level';
import { POSITIONS } from '../../constants/positions';
import Filters from '../filters/Filters';
import Player from '../player/Player';
import { StyledPlayersForGameContainer } from './styles';

const PlayersForGame = ({ playersWaitingForGame }) => {
	const [position, setPosition] = useState(0);
	const [level, setLevel] = useState(0);
	const [location, setLocation] = useState('');
	let filteredPlayers = filteredByPosition(playersWaitingForGame, position);
	filteredPlayers = filteredByLevel(filteredPlayers, level);
	filteredPlayers = filterbByLocation(filteredPlayers, location);
	return (
		<>
			<Filters
				setPosition={setPosition}
				setLevel={setLevel}
				setLocation={setLocation}
			/>
			<div>
				<StyledPlayersForGameContainer>
					{filteredPlayers.map(player => (
						<Player
							key={player.id}
							id={player.id}
							scheduleStart={player.scheduleStart}
							scheduleEnd={player.scheduleEnd}
							location={player.location}
						/>
					))}
				</StyledPlayersForGameContainer>
			</div>
		</>
	);
};

// FUNCION PARA FILTRAR POR POSICION
const filteredByPosition = (playersWaitingForGame, position) => {
	const playersFiltered = [...playersWaitingForGame];
	if (position === 0) return playersFiltered;
	return playersFiltered.filter(player => {
		const playerPosition = POSITIONS[player.position.toUpperCase()];
		return playerPosition === position;
	});
};

// FUNCION PARA FILTRAR POR NIVEL
const filteredByLevel = (filteredPlayers, level) => {
	if (level === LEVELS.ALL) return filteredPlayers;
	return filteredPlayers.filter(player => {
		const playerLevel = LEVELS[player.level];
		return playerLevel === level;
	});
};

// FUNCION PARA FILTRAR POR LOCALIZACION
const filterbByLocation = (filteredPlayers, location) => {
	if (location === '') return filteredPlayers;
	return filteredPlayers.filter(player => player.location.includes(location));
};

export default PlayersForGame;
