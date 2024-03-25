import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import { logoutUser } from '../../utils/api/auth.api';
import Menu from '../menu/Menu';
import Modal from '../modal/Modal';
import {
	StyledButton,
	StyledContainerButtons,
	StyledHeader,
	StyledImage,
	StyledImageProfileContainer,
	StyledProfileImage,
	StyledSpanHello,
	StyledSpanTitle,
	StyledTitle
} from './styles';

const Header = () => {
	const [content, setContent] = useState();
	const { userData, setUserData } = useContext(AuthContext);
	const [isChecked, setIsChecked] = useState(false);
	const navigate = useNavigate();
	return (
		<>
			{userData && (
				<StyledImage
					src='/assets/images/menu.svg'
					alt=''
					onClick={() => setIsChecked(!isChecked)}
					$isChecked={isChecked}
				/>
			)}
			<StyledHeader>
				<Menu isChecked={isChecked} setIsChecked={setIsChecked} />
				<div>
					<StyledTitle>
						<StyledSpanTitle>Paddle</StyledSpanTitle> Connect
					</StyledTitle>
				</div>
				<div>
					{!userData && (
						<StyledContainerButtons>
							<StyledButton
								onClick={() => setContent(<Login setContent={setContent} />)}
							>
								Login
							</StyledButton>
							<StyledButton
								onClick={() => setContent(<Register setContent={setContent} />)}
							>
								Register
							</StyledButton>
						</StyledContainerButtons>
					)}
					{userData && (
						<StyledImageProfileContainer>
							{userData && (
								<StyledProfileImage
									src='/assets/images/profile.svg'
									alt=''
									onClick={() => setIsChecked(!isChecked)}
								/>
							)}
							<StyledSpanHello>Hola {userData.name}</StyledSpanHello>
							<StyledButton onClick={() => logoutUser(setUserData, navigate)}>
								Logout
							</StyledButton>
						</StyledImageProfileContainer>
					)}
				</div>
				<Modal withButtonClose={false}>{content}</Modal>
			</StyledHeader>
		</>
	);
};

export default Header;
