import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import { useNavigate } from 'react-router-dom';
import { StyledMenu, StyledUserName } from './styles';

const Menu = ({ isChecked, setIsChecked }) => {
	const { userData } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<StyledMenu $isChecked={isChecked}>
			{userData && (
				<div>
					<StyledUserName>Usuario/a: {userData.name}</StyledUserName>
					<button onClick={() => goToProfile(setIsChecked, navigate)}>
						Ver mi perfil
					</button>
					<button onClick={() => setIsChecked(!isChecked)}>Close</button>
				</div>
			)}
		</StyledMenu>
	);
};

const goToProfile = (setIsChecked, navigate) => {
	setIsChecked(false);
	navigate('/profileInfo');
};

export default Menu;
