import styled from 'styled-components';

const StyledForm = styled.div`
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
	gap: 10px;
	margin: 0 auto;

	@media screen and (min-width: 768px) {
		width: 650px;
	}
`;

const StyledLabels = styled.label`
	font-size: 1.1em;
	font-weight: 600;
`;

const StyledInputsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledScheduleContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export {
	StyledForm,
	StyledInputsContainer,
	StyledLabels,
	StyledScheduleContainer
};
