import styled from 'styled-components';

const StyledPlayerContainer = styled.div`
	display: flex;
	background: rgb(49, 58, 75);
	background: linear-gradient(
		145deg,
		rgba(49, 58, 75, 1) 0%,
		rgba(39, 48, 63, 1) 100%
	);
	align-items: center;
	padding: 20px 10px;
	justify-content: space-around;
	border-radius: 20px;
	border: 1px solid rgba(202, 223, 112, 0.2);
	color: #fff;

	@media screen and (min-width: 768px) {
		padding: 20px 15px;
	}
`;

const StyledInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const StyledImageContainer = styled.div`
	margin-right: 10px;
	padding: 2px;
	background: linear-gradient(145deg, #cadf70, rgba(202, 223, 112, 0.6));
	border-radius: 50%;
`;

const StyledSpans = styled.span`
	font-weight: 700;
	color: #f0f0f0;
`;

const StyledInfoSpan = styled.span`
	font-weight: 600;
	color: rgba(202, 223, 112, 0.8);
`;

const SytledImg = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 50%;

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
	color: #11161e;
	border-radius: 5px;
	padding: 6px 10px;
	width: 80px;
	border: none;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	font-size: 0.75em;
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: translateY(-2px);
	}

	@media screen and (min-width: 768px) {
		width: 110px;
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
	StyledImageContainer,
	StyledInfoContainer,
	StyledInfoSpan,
	StyledPlayerContainer,
	StyledSpans,
	StyledViewInviteContainer,
	SytledImg
};
