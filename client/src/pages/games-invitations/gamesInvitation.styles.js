import styled from 'styled-components';

const StyledForm = styled.form`
	background: linear-gradient(
		145deg,
		rgba(49, 58, 75, 1) 0%,
		rgba(39, 48, 63, 1) 100%
	);
	border: 1px solid rgba(202, 223, 112, 0.4);
	padding: 30px 60px;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	margin: 0px 40px 0px 40px;
	gap: 15px;
`;

const StyledContainerInputs = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 5px;
`;

const StyledContainerButtons = styled.div`
	display: flex;
	gap: 12px;
`;

const StyledTitle = styled.h3`
	margin-left: 40px;
	margin-bottom: 20px;
	font-size: 1.2em;
`;

export {
	StyledContainerButtons,
	StyledContainerInputs,
	StyledForm,
	StyledTitle
};
