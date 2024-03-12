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
	border: 2px solid #a3b451;
`;

const StyledInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledSpans = styled.span`
	font-weight: 600;
`;

const SytledImg = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: 2px inset #cadf70;
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
	border: 1px solid #333;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export {
	StyledButton,
	StyledInfoContainer,
	StyledPlayerContainer,
	StyledSpans,
	StyledViewInviteContainer,
	SytledImg
};
