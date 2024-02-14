import styled from 'styled-components';

const StyledMenu = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: white;
	transform: translateX(${({ $isChecked }) => ($isChecked ? '0' : '-100%')});
	transition: transform 0.3s;
`;

export { StyledMenu };
