import styled from 'styled-components';

const StyledPlayerContainer = styled.div`
	display: flex;
	background: rgb(235, 235, 235);
	background: linear-gradient(
		0deg,
		rgba(235, 235, 235, 1) 0%,
		rgba(245, 245, 245, 1) 100%
	);
	align-items: center;
	padding: 15px 10px;
	justify-content: space-around;
	border-radius: 20px;

	@media screen and (min-width: 768px) {
		padding: 20px 15px;
	}
`;

const StyledInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledImageContainer = styled.div`
	margin-right: 10px;
`;

const StyledSpans = styled.span`
	font-weight: 600;
`;

const SytledImg = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: 2px inset #cadf70;

	@media screen and (min-width: 768px) {
		width: 90px;
		height: 90px;
	}
`;

const StyledViewInviteContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const StyledButton = styled.button`
	background-color: #cadf70;
	border-radius: 5px 2px 5px 2px;
	padding: 6px 10px;
	width: 80px;
	border: none;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	font-size: 0.75em;

	@media screen and (min-width: 768px) {
		width: 110px;
		padding: 9px 11px;
		font-size: 0.9em;
	}
`;

export {
	StyledButton,
	StyledImageContainer,
	StyledInfoContainer,
	StyledPlayerContainer,
	StyledSpans,
	StyledViewInviteContainer,
	SytledImg
};
