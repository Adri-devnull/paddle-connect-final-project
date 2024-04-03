import { useState } from 'react';
import { TABS } from '../../constants/tabs';
import Profile from '../../pages/profile/Profile';
import Invitations from '../invitations/Invitations';
import UserComments from '../user-comments/UserComments';
import { StyledTabsButton, StyledTabsContainer } from './tabs.styles';

const TabsProfile = () => {
	const [tab, setTab] = useState(0);
	return (
		<div>
			<StyledTabsContainer>
				{TABS.map((tab, index) => (
					<StyledTabsButton key={index} onClick={() => setTab(index)}>
						{tab.name}
					</StyledTabsButton>
				))}
			</StyledTabsContainer>
			{tab === 0 && <Profile />}
			{tab === 1 && <UserComments />}
			{tab === 2 && <Invitations />}
		</div>
	);
};

export default TabsProfile;
