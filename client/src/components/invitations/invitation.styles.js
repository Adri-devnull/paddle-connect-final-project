import { styled } from 'styled-components';

const StyledInvitationsContainer = styled.div`
	height: calc(100vh - 278px);
	padding: 0px 40px;

	@media screen and (min-width: 768px) {
		height: calc(100vh - 260px);
		max-width: 900px;
		margin: 0 auto;
	}
`;

const StyledTitle = styled.h2`
	margin-bottom: 20px;
	color: #fff;
`;

const StyledInvitation = styled.div`
	background: rgb(49, 58, 75);
	background: linear-gradient(
		145deg,
		rgba(49, 58, 75, 1) 0%,
		rgba(39, 48, 63, 1) 100%
	);
	padding: 20px;
	border-radius: 10px;
	color: #fff;
	margin-bottom: 30px;

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;

const StyledSpans = styled.span`
	color: #cadf70;
	font-weight: 500;
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
	font-weight: 700;
	font-size: 0.75em;

	@media screen and (min-width: 768px) {
		&:hover {
			cursor: pointer;
			background-color: #e1ec9f;
		}
	}
`;

export {
	StyledButton,
	StyledButtonsContainer,
	StyledInvitation,
	StyledInvitationsContainer,
	StyledSpans,
	StyledTitle
};
