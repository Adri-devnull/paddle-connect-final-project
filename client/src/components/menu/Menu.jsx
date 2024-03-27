import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import { useNavigate } from 'react-router-dom';
import { SytledImg } from '../player/styles';
import {
	StyledButton,
	StyledButtonsContainer,
	StyledContainer,
	StyledMenu,
	StyledNameContainer,
	StyledUserName
} from './styles';

const Menu = ({ isChecked, setIsChecked }) => {
	const { userData } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<StyledMenu $isChecked={isChecked}>
			{userData && (
				<StyledContainer>
					<StyledNameContainer>
						<SytledImg src={userData.img} alt='image of user' />
						<StyledUserName>Usuario/a: {userData.name}</StyledUserName>
					</StyledNameContainer>
					<StyledButtonsContainer>
						<StyledButton onClick={() => goToProfile(setIsChecked, navigate)}>
							Ver mi perfil
						</StyledButton>
						<StyledButton onClick={() => setIsChecked(!isChecked)}>
							Close
						</StyledButton>
					</StyledButtonsContainer>
				</StyledContainer>
			)}
		</StyledMenu>
	);
};

const goToProfile = (setIsChecked, navigate) => {
	setIsChecked(false);
	navigate('/profileInfo');
};

export default Menu;
