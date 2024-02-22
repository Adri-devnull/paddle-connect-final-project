import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers/Auth.provider';
import { ListPlayersProvider } from './providers/ListPlayers.provider';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<ListPlayersProvider>
					<AuthProvider>
						<Router />
					</AuthProvider>
				</ListPlayersProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
