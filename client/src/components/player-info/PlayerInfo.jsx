import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Message from '../../pages/message/Message';
import Modal from '../modal/Modal';
import {
	StyledButton,
	StyledButtonsContainer,
	StyledImage,
	StyledInfo,
	StyledSpan,
	SytledContainer,
	SytledPlayerInfoContainer
} from './playerInfo.styles';

const PlayerInfo = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { userData } = useContext(AuthContext);
	const data = location.state.player;
	const [content, setContent] = useState();
	console.log(data);
	return (
		<SytledContainer>
			<SytledPlayerInfoContainer>
				<div>
					<StyledImage src={data.img} alt='user image' />
				</div>
				<div>
					<StyledInfo>
						<StyledSpan>Nombre:</StyledSpan> {data.name}
					</StyledInfo>
					<StyledInfo>
						<StyledSpan>Usuario:</StyledSpan> {data.username}
					</StyledInfo>
					<StyledInfo>
						<StyledSpan>Email:</StyledSpan> {data.email}
					</StyledInfo>
					<StyledInfo>
						<StyledSpan>Genero:</StyledSpan> {data.gender}
					</StyledInfo>
					<StyledInfo>
						<StyledSpan>Nivel:</StyledSpan> {data.level}
					</StyledInfo>
					<StyledInfo>
						<StyledSpan>Posicion:</StyledSpan> {data.position}
					</StyledInfo>
					<StyledInfo>
						<StyledSpan>Created:</StyledSpan> {data.createdAt.substring(0, 10)}
					</StyledInfo>
				</div>
				<StyledButtonsContainer>
					<StyledButton onClick={() => navigate('/')}>Volver</StyledButton>
					{userData?.id !== data._id && (
						<StyledButton
							onClick={() =>
								setContent(<Message setContent={setContent} data={data} />)
							}
						>
							Poner comentario
						</StyledButton>
					)}
				</StyledButtonsContainer>
			</SytledPlayerInfoContainer>
			<Modal withButtonClose={false}>{content}</Modal>
		</SytledContainer>
	);
};

export default PlayerInfo;
