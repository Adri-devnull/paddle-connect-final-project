import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = () => {
	const { userData } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<div>
			{userData && (
				<>
					<div>
						<img src='/assets/images/user.svg' alt='' />
					</div>
					<div>
						<p>Nombre: {userData.name}</p>
						<p>Usuario: {userData.username}</p>
						<p>Email: {userData.email}</p>
						<p>Género: {userData.gender}</p>
						<p>Nivel: {userData.level}</p>
						<p>Posición: {userData.position}</p>
					</div>
					<div>
						<button>Editar perfil</button>
						<button>Eliminar mi cuenta</button>
					</div>
					<button onClick={() => navigate('/')}>Volver</button>
				</>
			)}
			{!userData && <p>No hay datos de usuario disponibles.</p>}
		</div>
	);
};

export default Profile;
