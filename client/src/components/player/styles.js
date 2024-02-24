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
	padding: 15px;
	justify-content: space-around;
	border-radius: 20px;
	border: 3px solid #b59e45;
`;

const StyledInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledSpans = styled.span`
	font-weight: 600;
`;

const SytledImg = styled.img`
	width: 40px;
	height: 40px;
`;

const StyledViewInviteContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
export {
	StyledInfoContainer,
	StyledPlayerContainer,
	StyledSpans,
	StyledViewInviteContainer,
	SytledImg
};
