const PlayerInfoInvited = ({ player }) => {
	return (
		<div>
			<div>
				<img src='/assets/images/user.svg' alt='' />
			</div>
			<div>
				<h2>{player.name}</h2>
				<h2>Posicion: {player.position}</h2>
				<h2>Nivel: {player.level}</h2>
			</div>
		</div>
	);
};

export default PlayerInfoInvited;
