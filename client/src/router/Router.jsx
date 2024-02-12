import { Route, Routes } from 'react-router-dom';
import Main from '../components/main/Main';
import Layout from '../layouts/Layout';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main />} />
			</Route>
		</Routes>
	);
};

export default Router;
