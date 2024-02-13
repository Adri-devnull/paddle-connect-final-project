import { Route, Routes } from 'react-router-dom';
import Main from '../components/main/Main';
import PlayerInfo from '../components/player-info/PlayerInfo';
import UserComments from '../components/user-comments/UserComments';
import Layout from '../layouts/Layout';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main />} />
				<Route path='/playerInfo' element={<PlayerInfo />} />
				<Route path='/comments' element={<UserComments />} />
			</Route>
		</Routes>
	);
};

export default Router;
