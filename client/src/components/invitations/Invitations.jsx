import { useContext, useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { getDataById } from '../../utils/api/common.api';

const Invitations = () => {
	const { userData } = useContext(AuthContext);
	const [invitations, setInvitations] = useState([]);
	const [numberOfInvitations, setNumberOfInvitations] = useState(0);

	useEffect(() => {
		getAllInvitations(userData, setInvitations, setNumberOfInvitations);
	}, []);
	return (
		<div>
			<h2>Invitaciones a partidos ({numberOfInvitations})</h2>
			<h2>
				{invitations.map((inv, index) => (
					<div key={index}>
						<h2>{inv.location}</h2>
						<h2>{inv.schedule}</h2>
						<h2>{inv.message}</h2>
					</div>
				))}
			</h2>
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
