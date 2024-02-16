import { useState } from 'react';
import { TABS } from '../../constants/tabs';
import Profile from '../../pages/profile/Profile';
import Invitations from '../invitations/Invitations';
import UserComments from '../user-comments/UserComments';

const TabsProfile = () => {
	const [tab, setTab] = useState(0);
	return (
		<div>
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
		</div>
	);
};

export default TabsProfile;
