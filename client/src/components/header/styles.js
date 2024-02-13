import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
`;

const StyledInputBurguer = styled.input`
	z-index: 99;
	position: fixed;
	background-image: url('assets/images/menu.svg');
`;

export { StyledHeader, StyledInputBurguer };
