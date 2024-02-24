import styled from 'styled-components';

const StyledMain = styled.main`
	padding: 40px;
`;

const StyledTitle = styled.h1`
	color: #fff;
	font-size: 2em;
	font-weight: 400;
	padding-bottom: 50px;
`;

const StyledSpanTitle = styled.span`
	color: #e6ed94;
	font-style: italic;
	font-weight: 600;
`;

const StyledButton = styled.button`
	background-color: #e6ed94;
	color: #000;
	border: 2px solid #d8e260;
	border-radius: 15px 10px;
	padding: 6px 10px;
	font-size: 16px;
	font-weight: bold;
`;

const StyledLogin = styled.p`
	color: #fff;
`;

const StyledLoginSpan = styled.span`
	color: #e6ed94;
	font-style: italic;
	font-weight: bold;
`;

export {
	StyledButton,
	StyledLogin,
	StyledLoginSpan,
	StyledMain,
	StyledSpanTitle,
	StyledTitle
};
