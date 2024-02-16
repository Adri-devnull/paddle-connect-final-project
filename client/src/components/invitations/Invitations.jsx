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

	useEffect(() => {
		getAllInvitations(userData, setInvitations, setNumberOfInvitations);
	}, []);
	return (
		<div>
			<h2>Invitaciones a partidos ({numberOfInvitations})</h2>
			{invitations.map((inv, index) => (
				<div key={index}>
					<h2>Localizacion: {inv.location}</h2>
					<h2>Hora partido: {inv.schedule}</h2>
					<h2>Mensaje: {inv.message}</h2>
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
