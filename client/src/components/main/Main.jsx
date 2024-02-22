import { useContext, useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { ListPlayersContext } from '../../contexts/ListPlayersContext';
import Booking from '../../pages/booking/Booking';
import { deleteData, getData } from '../../utils/api/common.api';
import Modal from '../modal/Modal';
import PlayersForGame from '../players-for-game/PlayersForGame';

const Main = () => {
	const { userData, setUserData } = useContext(AuthContext);
	const { setPlayersWaitingForGame } = useContext(ListPlayersContext);
	const [content, setContent] = useState();

	useEffect(() => {
		getAllPlayersForGame(setPlayersWaitingForGame);
	}, []);

	return (
		<main>
			<div>
				<h1>
					¡No te pierdas ninguna partida! Encuentra tu compañero de pádel con un
					solo click
				</h1>
				<PlayersForGame />
				{userData && !userData.booked && (
					<button
						onClick={() =>
							setContent(
								<Booking
									setContent={setContent}
									setPlayersWaitingForGame={setPlayersWaitingForGame}
								/>
							)
						}
					>
						Apuntarme
					</button>
				)}
				{userData && userData.booked && (
					<button
						onClick={() =>
							deleteBooked(userData.id, setPlayersWaitingForGame, setUserData)
						}
					>
						Eliminarme de la lista
					</button>
				)}
				{!userData && (
					<p>
						<span>Inicia sesion</span> para apuntarte o para buscar un jugador.
					</p>
				)}
				<Modal withButtonClose={false}>{content}</Modal>
			</div>
		</main>
	);
};

// FUNCION PARA BORRAR RESERVA DE USUARIO
const deleteBooked = async (id, setPlayersWaitingForGame, setUserData) => {
	const response = await deleteData(`${URLS.API_BOOKING}/${id}`);
	setPlayersWaitingForGame(response.bookings);
	setUserData({ ...response.userData, booked: false });
};

// FUNCION PARA LLAMAR A LA BASE DE DATOS Y OBTENER LA LISTA DE JUGADORES DISPONIBLES PARA JUGAR
const getAllPlayersForGame = async setPlayersWaitingForGame => {
	const playersForGame = await getData(URLS.API_BOOKING);
	setPlayersWaitingForGame(playersForGame);
};

export default Main;
