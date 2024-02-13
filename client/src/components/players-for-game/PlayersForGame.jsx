import Player from '../player/Player';
import { StyledPlayersForGameContainer } from './styles';

const PlayersForGame = ({ playersWaitingForGame }) => {
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
			<StyledPlayersForGameContainer>
				{playersWaitingForGame.map(player => (
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
	);
};

export default PlayersForGame;
