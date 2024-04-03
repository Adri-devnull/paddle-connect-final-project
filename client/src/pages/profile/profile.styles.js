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
	border-radius: 5px 2px 5px 2px;
	padding: 10px 12px;
	border: none;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	font-size: 0.9em;

	@media screen and (min-width: 768px) {
		cursor: pointer;
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
