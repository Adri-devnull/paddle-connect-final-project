import styled from 'styled-components';

const StyledMenu = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgb(35, 44, 62), rgb(17, 21, 30));
	transform: translateX(${({ $isChecked }) => ($isChecked ? '0' : '-100%')});
	transition: transform 0.3s;
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledNameContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	padding: 30px;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	gap: 10px;
`;

const StyledButton = styled.button`
	background-color: #cadf70;
	color: #11161e;
	border-radius: 5px;
	padding: 6px 10px;
	border: none;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	font-size: 0.75em;
`;

const StyledUserName = styled.span`
	color: #fff;
`;

export {
	StyledButton,
	StyledButtonsContainer,
	StyledContainer,
	StyledMenu,
	StyledNameContainer,
	StyledUserName
};
