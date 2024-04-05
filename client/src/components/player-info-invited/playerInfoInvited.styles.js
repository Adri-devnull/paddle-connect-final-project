import styled from 'styled-components';

const StyledPlayerContainer = styled.div`
	background: linear-gradient(
		145deg,
		rgba(49, 58, 75, 1) 0%,
		rgba(39, 48, 63, 1) 100%
	);
	display: flex;
	flex-direction: column;
	padding: 20px;
	align-items: center;
	margin-bottom: 30px;
	border-radius: 20px;
	margin: 0px 40px 30px 40px;
`;

const StyledImage = styled.img`
	border-radius: 50%;
	height: 80px;
	margin-bottom: 20px;
`;

const StyledSpansInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 10px;
`;

const StyledSpansContainer = styled.div`
	display: flex;
	gap: 5px;
`;

const StyledSpan = styled.span`
	font-size: 1.1em;
	font-weight: 600;
	color: rgba(202, 223, 112, 0.8);
`;

const StyledInfoPlayer = styled.span`
	font-size: 1.1em;
	font-weight: 600;
`;

export {
	StyledImage,
	StyledInfoPlayer,
	StyledPlayerContainer,
	StyledSpan,
	StyledSpansContainer,
	StyledSpansInfo
};
