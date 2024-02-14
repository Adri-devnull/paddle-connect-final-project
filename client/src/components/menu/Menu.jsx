import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { StyledMenu } from './styles';

const Menu = ({ isChecked }) => {
	const { userData } = useContext(AuthContext);
	return (
		<StyledMenu $isChecked={isChecked}>
			{userData && (
				<div>
					<span>{userData.name}</span>
					<span>{userData.username}</span>
				</div>
			)}
			<nav>
				<ul>
					<li>
						<Link>Mi perfil</Link>
					</li>
					<li>
						<Link to='/comments'>Comentarios</Link>
					</li>
					<li>
						<Link>Invitaciones</Link>
					</li>
					<li>
						<Link>Ultimos partidos</Link>
					</li>
				</ul>
			</nav>
		</StyledMenu>
	);
};

export default Menu;
