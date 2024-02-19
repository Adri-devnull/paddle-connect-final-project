import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import { logoutUser } from '../../utils/api/auth.api';
import Menu from '../menu/Menu';
import Modal from '../modal/Modal';
import { StyledHeader, StyledImage } from './styles';

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
				/>
			)}

			<StyledHeader>
				<Menu isChecked={isChecked} setIsChecked={setIsChecked} />
				<div>
					<h1>Paddle Connect</h1>
				</div>
				<div>
					{!userData && (
						<div>
							<button
								onClick={() => setContent(<Login setContent={setContent} />)}
							>
								Login
							</button>
							<button
								onClick={() => setContent(<Register setContent={setContent} />)}
							>
								Register
							</button>
						</div>
					)}
					{userData && (
						<div>
							<span>Hola {userData.name}</span>
							<button onClick={() => logoutUser(setUserData, navigate)}>
								Logout
							</button>
						</div>
					)}
				</div>
				<Modal withButtonClose={false}>{content}</Modal>
			</StyledHeader>
		</>
	);
};

export default Header;
