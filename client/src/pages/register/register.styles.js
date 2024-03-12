import styled from 'styled-components';

const StyledRegisterForm = styled.div`
	width: 350px;
	height: auto;
	background-color: #f4f4f4;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	color: #333;
	align-items: center;
	justify-content: center;
	padding: 20px 35px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	max-height: calc(100vh - 20px);
	overflow-y: auto;
`;

const StyledLogo = styled.img`
	padding-top: 30px;
	width: 170px;
	height: 130px;
	object-fit: cover;
`;

const StyledContainerInputs = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 5px;
`;

const StyledInput = styled.input`
	padding: 8px 15px;
	border-radius: 5px;
	border: 1px solid #ccc;
	margin-bottom: 10px;
	font-size: 16px;

	&:focus {
		outline: 1px solid yellow;
	}
`;

const StyledContainerRadioInput = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 15px;
`;

const StyledImageUserContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	gap: 30px;
`;

const StyledButtonAvatar = styled.button`
	background-color: #fbf297;
	color: #000;
	border: none;
	border-radius: 15px 10px;
	padding: 5px;
	height: 35px;
	font-size: 0.8em;
	font-weight: 600;
	outline: none;
	border: 1px solid #000;
`;

const StyledImageAvatar = styled.img`
	height: 80px;
	border-radius: 50%;
	border: 1px solid #000;
`;

const StyledPositionsContainer = styled.div`
	display: flex;
	gap: 5px;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	gap: 25px;
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

const StyledSelectContainer = styled.div`
	width: 100%;
	display: flex;
`;

const StyledSelect = styled.select`
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	background-color: #fff;
	margin: 20px 0px;
	font-family: 'Montserrat', sans-serif;
`;

export {
	StyledButton,
	StyledButtonAvatar,
	StyledButtonsContainer,
	StyledContainerInputs,
	StyledContainerRadioInput,
	StyledImageAvatar,
	StyledImageUserContainer,
	StyledInput,
	StyledLogo,
	StyledPositionsContainer,
	StyledRegisterForm,
	StyledSelect,
	StyledSelectContainer
};
