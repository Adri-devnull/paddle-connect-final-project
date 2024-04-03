import styled from 'styled-components';

const StyledLoginForm = styled.form`
	width: 350px;
	height: auto;
	margin: 0 auto;
	background-color: #f4f4f4;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	color: #333;
	align-items: center;
	justify-content: center;
	padding: 20px 35px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const StyledContainer = styled.div`
	padding: 30px;
`;

const StyledLogo = styled.img`
	height: 200px;
	object-fit: cover;
`;

const StyledContainerInputs = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 15px;
`;

const StyledInput = styled.input`
	padding: 12px 15px;
	border-radius: 5px;
	border: 1px solid #ccc;
	margin-bottom: 10px;
	font-size: 16px;

	&:focus {
		outline: 1px solid yellow;
	}
`;

const StyledButton = styled.button`
	background-color: #fecf2b;
	color: #333;
	border: none;
	border-radius: 15px 10px;
	padding: 12px 20px;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
	outline: none;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	gap: 25px;
`;

const StyledLabel = styled.label`
	font-weight: 500;
	font-size: 1.1em;
	margin-bottom: 5px;
`;

export {
	StyledButton,
	StyledButtonsContainer,
	StyledContainer,
	StyledContainerInputs,
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledLogo
};
