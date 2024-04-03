import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { getData } from '../../utils/api/common.api';
import RatingStars from '../rating-stars/RatingStars';
import {
	StyledButton,
	StyledComment,
	StyledComments,
	StyledCommentsContainer,
	StyledRatingContainer
} from './user-comments.styles';

const UserComments = () => {
	const [messages, setMessages] = useState([]);
	const { userData } = useContext(AuthContext);
	const navigate = useNavigate();
	console.log(messages);
	useEffect(() => {
		getAllMessages(userData, setMessages);
	}, []);

	return (
		<StyledCommentsContainer>
			<StyledComments>
				{!messages && <p>No hay ningun mensaje</p>}
				{messages.map(msg => (
					<StyledComment key={msg._id}>
						<h3>{msg.userSender.name.toUpperCase()}</h3>
						<p>{msg.message}</p>
						<StyledRatingContainer>
							Valoracion:
							<RatingStars average={msg.average} />
						</StyledRatingContainer>
					</StyledComment>
				))}
			</StyledComments>
			<StyledButton onClick={() => navigate('/')}>Volver</StyledButton>
		</StyledCommentsContainer>
	);
};

// FUNCION PARA LLAMAR A LA BASE DE DATOS Y OBTENER TODOS LOS MENSAJES DEL USUARIO
const getAllMessages = async (userData, setMessages) => {
	const allMessages = await getData(URLS.API_MESSAGES);
	const filteredMessages = allMessages.filter(msg => msg.id === userData.id);
	setMessages(filteredMessages);
};

export default UserComments;
