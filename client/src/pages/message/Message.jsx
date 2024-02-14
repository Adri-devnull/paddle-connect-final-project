import { useContext, useState } from 'react';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { postData } from '../../utils/api/common.api';

const Message = ({ setContent, data }) => {
	const { userData } = useContext(AuthContext);
	const [infoMessage, setInfoMessage] = useState({ senderId: userData.id });
	const userId = data._id;
	return (
		<div>
			<form onSubmit={event => event.preventDefault()}>
				<div>
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
				</div>
				<div>
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
				</div>
				<div>
					<button onClick={() => postMessage(userId, infoMessage, setContent)}>
						Publicar
					</button>
					<button type='button' onClick={() => setContent()}>
						Cancelar
					</button>
				</div>
			</form>
		</div>
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
	console.log('message sended');
};

export default Message;
