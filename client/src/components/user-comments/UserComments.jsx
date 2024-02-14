import { useContext, useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { getData } from '../../utils/api/common.api';

const UserComments = () => {
	const [messages, setMessages] = useState([]);
	const { userData } = useContext(AuthContext);
	useEffect(() => {
		getAllMessages(userData, setMessages);
	}, []);

	return (
		<div>
			<h2>Los comentarios de este jugador son: </h2>
			{messages.map(msg => (
				<div key={msg._id}>
					<h2>{msg.message}</h2>
					<h2>{msg.average}</h2>
				</div>
			))}
		</div>
	);
};

// FUNCION PARA LLAMAR A LA BASE DE DATOS Y OBTENER TODOS LOS MENSAJES DEL USUARIO
const getAllMessages = async (userData, setMessages) => {
	const allMessages = await getData(URLS.API_MESSAGES);
	const filteredMessages = allMessages.filter(msg => msg.id === userData.id);
	setMessages(filteredMessages);
};

export default UserComments;
