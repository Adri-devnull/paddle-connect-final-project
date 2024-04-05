import styled from 'styled-components';

const StyledContainer = styled.div`
	padding: 0px 40px;
	height: calc(100vh - 190px);

	@media screen and (min-width: 768px) {
		height: calc(100vh - 174px);
	}
`;

const SytledPlayerInfoContainer = styled.div`
	background: linear-gradient(
		145deg,
		rgba(49, 58, 75, 1) 0%,
		rgba(39, 48, 63, 1) 100%
	);
	border: 1px solid rgba(202, 223, 112, 0.4);
	color: #fff;
	margin: 30px;
	padding: 30px;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	margin: 0 auto;

	@media screen and (min-width: 768px) {
		max-width: 600px;
	}
`;

const StyledImage = styled.img`
	height: 110px;
	border-radius: 50%;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 20px;
`;

const StyledSpan = styled.span`
	font-weight: 800;
	margin-right: 3px;
	color: rgba(202, 223, 112, 0.8);
`;

const StyledInfo = styled.p`
	font-weight: 500;
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

export {
	StyledButton,
	StyledButtonsContainer,
	StyledContainer,
	StyledImage,
	StyledInfo,
	StyledSpan,
	SytledPlayerInfoContainer
};
