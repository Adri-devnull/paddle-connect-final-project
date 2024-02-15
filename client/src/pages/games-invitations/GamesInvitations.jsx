import { useContext, useState } from 'react';
import PlayerInfoInvited from '../../components/player-info-invited/PlayerInfoInvited';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { postData } from '../../utils/api/common.api';

const GamesInvitations = ({ setContent, player }) => {
	const invitedUserId = player._id;
	const [infoInvitation, setInfoInvitation] = useState({});
	const { userData } = useContext(AuthContext);
	console.log(infoInvitation);

	return (
		<div>
			<PlayerInfoInvited player={player} />
			<form>
				<div>
					<label htmlFor='location'>Localizacion</label>
					<input
						type='text'
						name='location'
						id='location'
						onChange={event =>
							getInputValues(
								event.target,
								infoInvitation,
								setInfoInvitation,
								invitedUserId
							)
						}
					/>
				</div>
				<div>
					<label htmlFor='schedule'>Horario</label>
					<input
						type='text'
						name='schedule'
						id='schedule'
						onChange={event =>
							getInputValues(
								event.target,
								infoInvitation,
								setInfoInvitation,
								invitedUserId
							)
						}
					/>
				</div>
				<div>
					<label htmlFor='message'>Mensaje</label>
					<textarea
						name='message'
						id='message'
						cols='20'
						rows='4'
						onChange={event =>
							getInputValues(
								event.target,
								infoInvitation,
								setInfoInvitation,
								invitedUserId
							)
						}
					></textarea>
				</div>
				<div>
					<button
						onClick={() => createInvitationToGame(infoInvitation, userData)}
					>
						Invitar
					</button>
					<button type='button' onClick={() => setContent()}>
						Cancelar
					</button>
				</div>
			</form>
		</div>
	);
};

// FUNCION PARA OBTENER LOS VALORES DE LOS DATOS DEL FORMULARIO DE INVITACION

const getInputValues = (
	input,
	infoInvitation,
	setInfoInvitation,
	invitedUserId
) => {
	const { name, value } = input;
	const updatedInfoInvitation = {
		...infoInvitation,
		[name]: value,
		invitedUserId
	};
	setInfoInvitation(updatedInfoInvitation);
};

// FUNCION PARA CREAR LA INVITACION DE UN USUARIO A LA PARTIDA

const createInvitationToGame = async (infoInvitation, userData) => {
	await postData(`${URLS.API_GAMES}/${userData.id}`, infoInvitation);
};

export default GamesInvitations;
