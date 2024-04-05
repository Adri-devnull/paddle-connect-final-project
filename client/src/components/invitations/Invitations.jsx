import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { getDataById } from '../../utils/api/common.api';
import {
	StyledButton,
	StyledButtonsContainer,
	StyledInvitation,
	StyledInvitationsContainer,
	StyledSpans,
	StyledTitle
} from './invitation.styles';

const Invitations = () => {
	const { userData } = useContext(AuthContext);
	const [invitations, setInvitations] = useState([]);
	const [numberOfInvitations, setNumberOfInvitations] = useState(0);
	const navigate = useNavigate();
	console.log(invitations);

	useEffect(() => {
		getAllInvitations(userData, setInvitations, setNumberOfInvitations);
	}, []);
	return (
		<StyledInvitationsContainer>
			<StyledTitle>
				Tienes <span>{numberOfInvitations}</span> invitacion
				{numberOfInvitations === 1 ? '' : 'es'} a partidos.
			</StyledTitle>
			{invitations.map(invitation => (
				<StyledInvitation key={invitation._id}>
					<p>
						<StyledSpans>Te ha invitado:</StyledSpans>{' '}
						{invitation.senderUserName}
					</p>
					<p>
						<StyledSpans>Localizacion:</StyledSpans> {invitation.location}
					</p>
					<p>
						<StyledSpans>Hora partido:</StyledSpans> {invitation.schedule}
					</p>
					<p>
						<StyledSpans>Mensaje:</StyledSpans> {invitation.message}
					</p>
					<StyledButtonsContainer>
						<StyledButton>Aceptar invitacion</StyledButton>
						<StyledButton>Cancelar invitacion</StyledButton>
					</StyledButtonsContainer>
				</StyledInvitation>
			))}
			<StyledButton onClick={() => navigate('/')}>Volver</StyledButton>
		</StyledInvitationsContainer>
	);
};

// FUNCION PARA OBTENER TODAS LAS INVITACIONES A PARTIDAS

const getAllInvitations = async (
	userData,
	setInvitations,
	setNumberOfInvitations
) => {
	const updatedInvitations = await getDataById(
		`${URLS.API_GAMES}/${userData.id}`
	);
	setNumberOfInvitations(updatedInvitations.length);
	setInvitations(updatedInvitations);
};

export default Invitations;
