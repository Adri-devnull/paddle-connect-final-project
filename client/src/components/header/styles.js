import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	color: #fff;
	justify-content: space-between;
	align-items: center;
	padding: 10px 25px 10px 50px;
	gap: 70px;
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
`;

const StyledSpanTitle = styled.span`
	color: #d8e260;
	font-style: italic;
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

const StyledContainerButtons = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export {
	StyledButton,
	StyledContainerButtons,
	StyledHeader,
	StyledImage,
	StyledSpanTitle
};
