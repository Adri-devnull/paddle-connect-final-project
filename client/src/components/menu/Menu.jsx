import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import { useNavigate } from 'react-router-dom';
import { StyledMenu } from './styles';

const Menu = ({ isChecked }) => {
	const { userData } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<StyledMenu $isChecked={isChecked}>
			{userData && (
				<div>
					<span>Usuario/a: {userData.name}</span>
					<button onClick={() => navigate('/profileInfo')}>
						Ver mi perfil
					</button>
				</div>
			)}
		</StyledMenu>
	);
};

export default Menu;
