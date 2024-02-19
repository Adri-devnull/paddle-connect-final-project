import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { getDataById } from '../../utils/api/common.api';

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
		<div>
			<h2>Invitaciones a partidos ({numberOfInvitations})</h2>
			{invitations.map(invitation => (
				<div key={invitation._id}>
					<h2>Invitacion de: {invitation.senderUserName}</h2>
					<h2>Localizacion: {invitation.location}</h2>
					<h2>Hora partido: {invitation.schedule}</h2>
					<h2>Mensaje: {invitation.message}</h2>
					<div>
						<button>Aceptar invitacion</button>
						<button>Cancelar invitacion</button>
					</div>
				</div>
			))}
			<button onClick={() => navigate('/')}>Volver</button>
		</div>
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
