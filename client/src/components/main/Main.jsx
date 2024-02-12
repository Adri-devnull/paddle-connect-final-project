import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Booking from '../../pages/booking/Booking';
import Modal from '../modal/Modal';
import PlayersForGame from '../players-for-game/PlayersForGame';

const Main = () => {
	const { userData } = useContext(AuthContext);
	const [content, setContent] = useState();
	return (
		<main>
			<div>
				<h1>
					¡No te pierdas ninguna partida! Encuentra tu compañero de pádel con un
					solo click
				</h1>
				<PlayersForGame />
				{userData && (
					<button
						onClick={() => setContent(<Booking setContent={setContent} />)}
					>
						Apuntarme
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

export default Main;
