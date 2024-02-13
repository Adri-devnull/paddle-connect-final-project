import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = () => {
	const navigate = useNavigate();
	const { userData } = useContext(AuthContext);
	return (
		<div>
			<div>
				<img src='/assets/images/user.svg' alt='' />
			</div>
			<div>
				<p>Nombre: {userData.name}</p>
				<p>Usuario: {userData.username}</p>
				<p>Email: {userData.email}</p>
				<p>Genero: {userData.gender}</p>
				<p>Nivel: {userData.level}</p>
				<p>Posicion: {userData.position}</p>
			</div>
			<div>
				<button onClick={() => navigate('/')}>Volver</button>
				<button>Editar informacion</button>
			</div>
		</div>
	);
};

export default Profile;
