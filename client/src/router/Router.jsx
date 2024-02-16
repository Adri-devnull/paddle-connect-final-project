import { Route, Routes } from 'react-router-dom';
import Main from '../components/main/Main';
import PlayerInfo from '../components/player-info/PlayerInfo';
import TabsProfile from '../components/tabs-profile/TabsProfile';
import Layout from '../layouts/Layout';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main />} />
				<Route path='/playerInfo' element={<PlayerInfo />} />
				<Route path='/profileInfo' element={<TabsProfile />} />
			</Route>
		</Routes>
	);
};

export default Router;
