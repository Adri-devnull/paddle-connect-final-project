import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditProfile from '../../components/edit-profile/EditProfile';
import Modal from '../../components/modal/Modal';
import { AuthContext } from '../../contexts/AuthContext';
// import { ListPlayersContext } from '../../contexts/ListPlayersContext';

const Profile = () => {
	const { userData } = useContext(AuthContext);
	// const { setPlayersWaitingForGame } = useContext(ListPlayersContext);
	const [content, setContent] = useState();
	const navigate = useNavigate();
	return (
		<>
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
							<button
								onClick={() =>
									setContent(<EditProfile setContent={setContent} />)
								}
							>
								Editar perfil
							</button>
							<button>Eliminar mi cuenta</button>
						</div>
						<button onClick={() => navigate('/')}>Volver</button>
					</>
				)}
				{!userData && <p>No hay datos de usuario disponibles.</p>}
			</div>
			<Modal withButtonClose={false}>{content}</Modal>
		</>
	);
};

// FUNCION PARA ELIMINAR CUENTA DEL USUARIO

export default Profile;
