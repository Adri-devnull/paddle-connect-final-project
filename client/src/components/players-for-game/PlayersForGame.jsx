import { useState } from 'react';
import { POSITIONS } from '../../constants/positions';
import Filters from '../filters/Filters';
import Player from '../player/Player';
import { StyledPlayersForGameContainer } from './styles';

const PlayersForGame = ({ playersWaitingForGame }) => {
	const [position, setPosition] = useState(0);
	const filteredPlayers = filteredByPosition(playersWaitingForGame, position);
	return (
		<>
			<Filters setPosition={setPosition} />
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
	return playersWaitingForGame.filter(player => {
		const playerPosition = POSITIONS[player.position.toUpperCase()];
		return playerPosition === position;
	});
};

export default PlayersForGame;
