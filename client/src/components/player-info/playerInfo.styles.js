import styled from 'styled-components';

const SytledPlayerInfoContainer = styled.div`
	background-image: linear-gradient(to right, #cccccc, #faffdc);
	margin: 30px;
	padding: 40px 30px;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 3px solid #333333;
`;

const StyledImage = styled.img`
	height: 100px;
	border-radius: 50%;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 20px;
`;

const StyledSpan = styled.span`
	font-weight: 800;
	margin-right: 3px;
	font-style: italic;
`;

const StyledButton = styled.button`
	background-color: #cadf70;
	border-radius: 5px 2px 5px 2px;
	padding: 6px 10px;
	border: 1px solid #1b1b1b;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	font-size: 0.75em;
`;

const StyledInfo = styled.p`
	font-weight: 500;
`;

export {
	StyledButton,
	StyledButtonsContainer,
	StyledImage,
	StyledInfo,
	StyledSpan,
	SytledPlayerInfoContainer
};

// #cadf70
