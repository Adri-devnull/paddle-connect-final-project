import { useLocation, useNavigate } from 'react-router-dom';

const PlayerInfo = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const data = location.state.player;
	return (
		<div>
			<div>
				<img src='/assets/images/user.svg' alt='' />
			</div>
			<div>
				<p>Nombre: {data.name}</p>
				<p>Usuario: {data.username}</p>
				<p>Email: {data.email}</p>
				<p>Genero: {data.gender}</p>
				<p>Nivel: {data.level}</p>
				<p>Posicion: {data.position}</p>
			</div>
			<div>
				<button onClick={() => navigate('/')}>Volver</button>
				<button>Poner comentario al jugador</button>
			</div>
		</div>
	);
};

export default PlayerInfo;
