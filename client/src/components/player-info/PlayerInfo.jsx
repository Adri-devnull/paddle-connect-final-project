import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Message from '../../pages/message/Message';
import Modal from '../modal/Modal';
import { SytledPlayerInfoContainer } from './playerInfo.styles';

const PlayerInfo = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { userData } = useContext(AuthContext);
	const data = location.state.player;
	const [content, setContent] = useState();
	return (
		<>
			<SytledPlayerInfoContainer>
				<div>
					<img src={data.img} alt='user image' />
				</div>
				<div>
					<p>Id: {data._id}</p>
					<p>Nombre: {data.name}</p>
					<p>Usuario: {data.username}</p>
					<p>Email: {data.email}</p>
					<p>Genero: {data.gender}</p>
					<p>Nivel: {data.level}</p>
					<p>Posicion: {data.position}</p>
				</div>
				<div>
					<button onClick={() => navigate('/')}>Volver</button>
					{userData.id !== data._id && (
						<button
							onClick={() =>
								setContent(<Message setContent={setContent} data={data} />)
							}
						>
							Poner comentario al jugador
						</button>
					)}
				</div>
			</SytledPlayerInfoContainer>
			<Modal withButtonClose={false}>{content}</Modal>
		</>
	);
};

export default PlayerInfo;
