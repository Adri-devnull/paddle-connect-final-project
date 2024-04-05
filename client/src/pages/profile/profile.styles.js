import styled from 'styled-components';

const SytledPlayerInfoContainer = styled.div`
	height: calc(100vh - 230px);
	color: #fff;
	padding: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	margin: 0 auto;
`;

const StyledImage = styled.img`
	height: 110px;
	border-radius: 50%;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	gap: 15px;
`;
const StyledButton = styled.button`
	background-color: #cadf70;
	color: #11161e;
	border-radius: 5px;
	padding: 6px 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	font-size: 0.75em;
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: translateY(-2px);
	}

	@media screen and (min-width: 768px) {
		padding: 9px 11px;
		font-size: 0.9em;

		&:hover {
			cursor: pointer;
			background-color: #e1ec9f;
		}
	}
`;
const StyledSpan = styled.span`
	font-weight: 600;
	font-size: 1.1em;
	color: #cadf70;
`;

export {
	StyledButton,
	StyledButtonsContainer,
	StyledImage,
	StyledSpan,
	SytledPlayerInfoContainer
};
