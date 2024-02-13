import styled from 'styled-components';

const StyledMenu = styled.div`
	position: fixed;
	top: 0;
	left: ${({ $isChecked }) => ($isChecked ? '0' : '-100%')};
	width: 100%;
	height: 100%;
	background-color: white;
	z-index: 9;
	transition: left 1s ease;
`;

export { StyledMenu };
