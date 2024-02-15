import { useContext, useState } from 'react';
import { TABS } from '../../constants/tabs';
import { AuthContext } from '../../contexts/AuthContext';
import Profile from '../../pages/profile/Profile';
import Invitations from '../invitations/Invitations';
import UserComments from '../user-comments/UserComments';
import { StyledMenu } from './styles';

const Menu = ({ isChecked }) => {
	const { userData } = useContext(AuthContext);
	const [tab, setTab] = useState(0);
	return (
		<StyledMenu $isChecked={isChecked}>
			{userData && (
				<div>
					<span>Usuario/a: {userData.name}</span>
				</div>
			)}
			<div>
				{TABS.map((tab, index) => (
					<button key={index} onClick={() => setTab(index)}>
						{tab.name}
					</button>
				))}
			</div>
			{tab === 2 && <Invitations />}
			{tab === 1 && <UserComments />}
			{tab === 0 && <Profile />}
		</StyledMenu>
	);
};

export default Menu;
