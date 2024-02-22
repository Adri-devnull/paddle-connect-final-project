import { useState } from 'react';
import { ListPlayersContext } from '../contexts/ListPlayersContext';

export const ListPlayersProvider = ({ children }) => {
	const [playersWaitingForGame, setPlayersWaitingForGame] = useState([]);

	return (
		<ListPlayersContext.Provider
			value={{ playersWaitingForGame, setPlayersWaitingForGame }}
		>
			{children}
		</ListPlayersContext.Provider>
	);
};
