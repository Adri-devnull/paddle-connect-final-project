import { useContext, useState } from 'react';
import { StyledButton } from '../../components/player/styles';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { postData } from '../../utils/api/common.api';
import {
	StyledContainerButtons,
	StyledForm
} from '../games-invitations/gamesInvitation.styles';
import { StyledContainerInputs } from '../register/register.styles';
import { StyledMainContainer } from './message.styles';

const Message = ({ setContent, data }) => {
	const { userData } = useContext(AuthContext);
	const [infoMessage, setInfoMessage] = useState({ senderId: userData.id });
	const userId = data._id;
	return (
		<StyledMainContainer>
			<StyledForm onSubmit={event => event.preventDefault()}>
				<StyledContainerInputs>
					<label htmlFor='message'>Mensaje</label>
					<textarea
						name='message'
						id='message'
						cols='20'
						rows='4'
						onChange={event =>
							getInputValues(event.target, infoMessage, setInfoMessage)
						}
					></textarea>
				</StyledContainerInputs>
				<StyledContainerInputs>
					<label htmlFor='average'>Valoracion</label>
					<select
						name='average'
						id='average'
						onChange={event =>
							getInputValues(event.target, infoMessage, setInfoMessage)
						}
					>
						<option value='0'>0</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</select>
				</StyledContainerInputs>
				<StyledContainerButtons>
					<StyledButton
						onClick={() => postMessage(userId, infoMessage, setContent)}
					>
						Publicar
					</StyledButton>
					<StyledButton type='button' onClick={() => setContent()}>
						Cancelar
					</StyledButton>
				</StyledContainerButtons>
			</StyledForm>
		</StyledMainContainer>
	);
};

// FUNCION PARA OBTENER LOS VALORES DEL FORMULARIO
const getInputValues = (input, infoMessage, setInfoMessage) => {
	const { name, value } = input;
	const newMessage = { ...infoMessage, [name]: value };
	setInfoMessage(newMessage);
};

// FUNCION PARA POSTEAR EL MENSAJE EN LA BASE DE DATOS
const postMessage = async (userId, infoMessage, setContent) => {
	await postData(`${URLS.API_MESSAGES}/${userId}`, infoMessage);
	setContent();
};

export default Message;
