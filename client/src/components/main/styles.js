import styled from 'styled-components';

const StyledMain = styled.main`
	padding: 40px;
`;

const StyledTitle = styled.h1`
	color: #fff;
	font-size: 2em;
	font-weight: 400;
	padding-bottom: 50px;

	@media screen and (min-width: 768px) {
		font-size: 3em;
		width: 800px;
		margin: 0 auto;
		margin-bottom: 60px;
	}
`;

const StyledSpanTitle = styled.span`
	color: #cadf70;
	font-style: italic;
	font-weight: 600;

	@media screen and (min-width: 768px) {
		&:hover {
			cursor: pointer;
			filter: drop-shadow(0px 0px 1px #e1ec9f);
		}
	}
`;

const StyledButton = styled.button`
	background-color: #cadf70;
	color: #11161e;
	border: none;
	border-radius: 15px 10px;
	padding: 10px;
	font-size: 16px;
	font-weight: bold;
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: translateY(-2px);
	}

	@media screen and (min-width: 768px) {
		&:hover {
			cursor: pointer;
			background-color: #e1ec9f;
		}
	}
`;

const StyledLogin = styled.p`
	color: #fff;

	@media screen and (min-width: 768px) {
		max-width: 1200px;
		margin: 0 auto;
	}
`;

const StyledDeleteContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledContainerSignUp = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledLoginSpan = styled.span`
	color: #cadf70;
	font-style: italic;
	font-weight: bold;
	margin-right: 5px;
	@media screen and (min-width: 768px) {
		&:hover {
			cursor: pointer;
			transition: 0.3s;
			color: yellow;
		}
	}
`;

export {
	StyledButton,
	StyledContainerSignUp,
	StyledDeleteContainer,
	StyledLogin,
	StyledLoginSpan,
	StyledMain,
	StyledSpanTitle,
	StyledTitle
};
