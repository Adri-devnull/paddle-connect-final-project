import styled from 'styled-components';

const SytledContainer = styled.div`
	height: calc(100vh - 190px);
	padding: 0px 40px;
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

const StyledButton = styled.button`
	background-color: #cadf70;
	border-radius: 5px 2px 5px 2px;
	padding: 10px 12px;
	border: none;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	font-size: 0.9em;

	@media screen and (min-width: 768px) {
		cursor: pointer;
	}
`;

const StyledInfo = styled.p`
	font-weight: 500;
`;

export {
	StyledButton,
	StyledButtonsContainer,
	StyledImage,
	StyledInfo,
	StyledSpan,
	SytledContainer,
	SytledPlayerInfoContainer
};
