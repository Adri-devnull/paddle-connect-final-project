import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	color: #fff;
	justify-content: space-between;
	align-items: center;
	padding: 30px 25px 10px 50px;
	gap: 70px;
	margin-bottom: 80px;
`;

const StyledImage = styled.img`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	width: 40px;
	height: 40px;
	background-color: #d8e260;
	border-radius: 10px;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

const StyledTitle = styled.h1`
	font-size: 1.8em;

	@media screen and (min-width: 768px) {
		font-size: 2.8em;
	}
`;

const StyledSpanTitle = styled.span`
	color: #cadf70;
	font-style: italic;
`;

const StyledSpanHello = styled.span`
	margin-right: 15px;
`;

const StyledButton = styled.button`
	background-color: #cadf70;
	color: #000;
	border: 2px solid #d8e260;
	border-radius: 15px 10px;
	padding: 6px 10px;
	font-size: 16px;
	font-weight: bold;
`;

const StyledContainerButtons = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export {
	StyledButton,
	StyledContainerButtons,
	StyledHeader,
	StyledImage,
	StyledSpanHello,
	StyledSpanTitle,
	StyledTitle
};
