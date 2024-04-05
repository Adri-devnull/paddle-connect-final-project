import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditProfile from '../../components/edit-profile/EditProfile';
import Modal from '../../components/modal/Modal';
import { AuthContext } from '../../contexts/AuthContext';
import {
	StyledButton,
	StyledButtonsContainer,
	StyledImage,
	StyledSpan,
	SytledPlayerInfoContainer
} from './profile.styles';

const Profile = () => {
	const { userData, setUserData } = useContext(AuthContext);
	const [content, setContent] = useState();
	const navigate = useNavigate();
	return (
		<>
			<SytledPlayerInfoContainer>
				{userData && (
					<>
						<div>
							<StyledImage src={userData.img} alt='user image' />
						</div>
						<div>
							<p>
								<StyledSpan>Nombre:</StyledSpan> {userData.name}
							</p>
							<p>
								<StyledSpan>Usuario:</StyledSpan> {userData.username}
							</p>
							<p>
								<StyledSpan>Email:</StyledSpan> {userData.email}
							</p>
							<p>
								<StyledSpan>Género:</StyledSpan> {userData.gender}
							</p>
							<p>
								<StyledSpan>Nivel:</StyledSpan> {userData.level}
							</p>
							<p>
								<StyledSpan>Posición:</StyledSpan> {userData.position}
							</p>
						</div>
						<StyledButtonsContainer>
							<StyledButton
								onClick={() =>
									setContent(
										<EditProfile
											setContent={setContent}
											setUserData={setUserData}
										/>
									)
								}
							>
								Editar perfil
							</StyledButton>
							<StyledButton>Eliminar mi cuenta</StyledButton>
						</StyledButtonsContainer>
						<StyledButton onClick={() => navigate('/')}>Volver</StyledButton>
					</>
				)}
				{!userData && <p>No hay datos de usuario disponibles.</p>}
			</SytledPlayerInfoContainer>
			<Modal withButtonClose={false}>{content}</Modal>
		</>
	);
};

export default Profile;
