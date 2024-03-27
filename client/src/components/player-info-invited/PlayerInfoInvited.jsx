import {
	StyledImage,
	StyledInfoPlayer,
	StyledPlayerContainer,
	StyledSpan,
	StyledSpansContainer,
	StyledSpansInfo
} from './playerInfoInvited.styles';

const PlayerInfoInvited = ({ player }) => {
	return (
		<StyledPlayerContainer>
			<div>
				<StyledImage src={player.img} alt='user invited image' />
			</div>
			<StyledSpansInfo>
				<StyledInfoPlayer>{player.name.toUpperCase()}</StyledInfoPlayer>
				<StyledSpansContainer>
					<StyledSpan>Posicion:</StyledSpan>
					<StyledInfoPlayer>{player.position}</StyledInfoPlayer>
				</StyledSpansContainer>
				<StyledSpansContainer>
					<StyledSpan>Nivel:</StyledSpan>
					<StyledInfoPlayer>{player.level}</StyledInfoPlayer>
				</StyledSpansContainer>
			</StyledSpansInfo>
		</StyledPlayerContainer>
	);
};

export default PlayerInfoInvited;
