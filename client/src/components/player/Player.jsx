import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import EditBooking from '../../pages/edit-booking/EditBooking';
import GamesInvitations from '../../pages/games-invitations/GamesInvitations';
import { getDataById } from '../../utils/api/common.api';
import Modal from '../modal/Modal';
import {
	StyledButton,
	StyledImageContainer,
	StyledInfoContainer,
	StyledPlayerContainer,
	StyledSpans,
	StyledViewInviteContainer,
	SytledImg
} from './styles';

const Player = ({
	id,
	scheduleStart,
	scheduleEnd,
	location,
	playersWaitingForGame,
	setPlayersWaitingForGame
}) => {
	const [player, setPlayer] = useState([]);
	const { userData } = useContext(AuthContext);
	const [content, setContent] = useState();
	const navigate = useNavigate();
	console.log(player);
	useEffect(() => {
		getDataOfPlayer(id, setPlayer);
	}, []);

	return (
		<>
			<StyledPlayerContainer>
				<StyledImageContainer>
					<SytledImg src={player.img} alt='Imagen del avatar del jugador' />
				</StyledImageContainer>
				<div>
					<StyledInfoContainer>
						<StyledSpans>{player.username}</StyledSpans>
						<span>{location}</span>
					</StyledInfoContainer>
					<StyledInfoContainer>
						<span>Posicion: {player.position}</span>
						<span>Nivel: {player.level}</span>
					</StyledInfoContainer>
					<div>
						<span>{scheduleStart}</span>
						<span> a </span>
						<span>{scheduleEnd}</span>
					</div>
				</div>
				{userData?.id !== player._id && (
					<StyledViewInviteContainer>
						{userData && (
							<StyledButton
								onClick={() => navigate('/playerInfo', { state: { player } })}
							>
								Ver perfil
							</StyledButton>
						)}
						{userData && (
							<StyledButton
								onClick={() =>
									setContent(
										<GamesInvitations setContent={setContent} player={player} />
									)
								}
							>
								Invitar
							</StyledButton>
						)}
					</StyledViewInviteContainer>
				)}
				{userData?.id === player._id && (
					<div>
						<StyledButton
							onClick={() =>
								setContent(
									<EditBooking
										setContent={setContent}
										playersWaitingForGame={playersWaitingForGame}
										setPlayersWaitingForGame={setPlayersWaitingForGame}
									/>
								)
							}
						>
							Editar reserva
						</StyledButton>
					</div>
				)}
			</StyledPlayerContainer>
			<Modal withButtonClose={false}>{content}</Modal>
		</>
	);
};

// FUNCION PARA OBTENER LOS DATOS DE CADA JUGADOR
const getDataOfPlayer = async (id, setPlayer) => {
	const dataPlayers = await getDataById(`${URLS.API_USERS}/${id}`);
	setPlayer(dataPlayers);
};

// FUNCION PARA EDITAR MI RESERVA

export default Player;
