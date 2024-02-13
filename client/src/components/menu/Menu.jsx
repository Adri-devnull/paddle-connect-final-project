import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { StyledMenu } from './styles';

const Menu = ({ isChecked }) => {
	const { userData } = useContext(AuthContext);
	return (
		<StyledMenu $isChecked={isChecked}>
			<div>
				<div>
					<img src='/assets/images/user.svg' alt='' />
				</div>
				<div>
					<span>{userData.name}</span>
					<span>{userData.username}</span>
				</div>
			</div>
			<nav>
				<ul>
					<Link>Mi perfil</Link>
					<Link to='/comments'>Comentarios</Link>
					<Link>Invitaciones</Link>
					<Link>Ultimos partidos</Link>
				</ul>
			</nav>
		</StyledMenu>
	);
};

export default Menu;
