import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import { logoutUser } from '../../utils/api/auth.api';
import Menu from '../menu/Menu';
import Modal from '../modal/Modal';
import { StyledHeader, StyledInputBurguer } from './styles';

const Header = () => {
	const [content, setContent] = useState();
	const { userData, setUserData } = useContext(AuthContext);
	const [isChecked, setIsChecked] = useState(false);
	const navigate = useNavigate();
	return (
		<StyledHeader>
			<div>
				<label htmlFor='checkbox'></label>
				<StyledInputBurguer
					type='checkbox'
					id='checkbox'
					onChange={() => setIsChecked(!isChecked)}
				/>
				{isChecked && <Menu isChecked={isChecked} />}
			</div>
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
	);
};

export default Header;
