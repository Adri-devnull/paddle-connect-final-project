import { useContext, useState } from 'react';
import PlayerInfoInvited from '../../components/player-info-invited/PlayerInfoInvited';
import { StyledButton } from '../../components/player/styles';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { postData } from '../../utils/api/common.api';
import { StyledInput } from '../register/register.styles';
import {
	StyledContainerButtons,
	StyledContainerInputs,
	StyledForm,
	StyledTitle
} from './gamesInvitation.styles';

const GamesInvitations = ({ setContent, player }) => {
	const invitedUserId = player._id;
	const [infoInvitation, setInfoInvitation] = useState({});
	const { userData } = useContext(AuthContext);

	return (
		<div>
			<StyledTitle>Jugador a invitar: </StyledTitle>
			<PlayerInfoInvited player={player} />
			<StyledForm
				onSubmit={event =>
					createInvitationToGame(
						event,
						infoInvitation,
						userData,
						invitedUserId,
						setContent
					)
				}
			>
				<StyledContainerInputs>
					<label htmlFor='location'>Localizacion</label>
					<StyledInput
						type='text'
						name='location'
						id='location'
						onChange={event =>
							getInputValues(event.target, infoInvitation, setInfoInvitation)
						}
					/>
				</StyledContainerInputs>
				<StyledContainerInputs>
					<label htmlFor='schedule'>Horario</label>
					<StyledInput
						type='text'
						name='schedule'
						id='schedule'
						onChange={event =>
							getInputValues(event.target, infoInvitation, setInfoInvitation)
						}
					/>
				</StyledContainerInputs>
				<StyledContainerInputs>
					<label htmlFor='message'>Mensaje</label>
					<textarea
						name='message'
						id='message'
						cols='20'
						rows='4'
						onChange={event =>
							getInputValues(event.target, infoInvitation, setInfoInvitation)
						}
					></textarea>
				</StyledContainerInputs>
				<StyledContainerButtons>
					<StyledButton>Invitar</StyledButton>
					<StyledButton type='button' onClick={() => setContent()}>
						Cancelar
					</StyledButton>
				</StyledContainerButtons>
			</StyledForm>
		</div>
	);
};

// FUNCION PARA OBTENER LOS VALORES DE LOS DATOS DEL FORMULARIO DE INVITACION

const getInputValues = (input, infoInvitation, setInfoInvitation) => {
	const { name, value } = input;
	const updatedInfoInvitation = {
		...infoInvitation,
		[name]: value
	};
	setInfoInvitation(updatedInfoInvitation);
};

// FUNCION PARA CREAR LA INVITACION DE UN USUARIO A LA PARTIDA

const createInvitationToGame = async (
	event,
	infoInvitation,
	userData,
	invitedUserId,
	setContent
) => {
	event.preventDefault();
	await postData(
		`${URLS.API_GAMES}/${userData.id}/${invitedUserId}`,
		infoInvitation
	);
	setContent();
};

export default GamesInvitations;
