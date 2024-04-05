import { styled } from 'styled-components';

const StyledForm = styled.form`
	background: linear-gradient(
		145deg,
		rgba(49, 58, 75, 1) 0%,
		rgba(39, 48, 63, 1) 100%
	);
	padding: 70px 30px;
	display: flex;
	border-radius: 10px;
	flex-direction: column;
	gap: 10px;

	@media screen and (min-width: 768px) {
		max-width: 700px;
		margin: 0 auto;
	}
`;

const StyledMainContainer = styled.div`
	padding: 40px;
`;

const StyledSelect = styled.select`
	padding: 8px 15px;
	border-radius: 5px;
	border: 1px solid #ccc;
	margin-bottom: 10px;
	font-size: 16px;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 15px;
`;

const StyledScheduleContainer = styled.div`
	padding: 5px 0px 15px 0px;
`;

const StyledLabels = styled.label`
	color: #cadf70;
	font-weight: 600;
	font-size: 1em;
	margin-bottom: 10px;
`;

export {
	StyledButtonsContainer,
	StyledForm,
	StyledLabels,
	StyledMainContainer,
	StyledScheduleContainer,
	StyledSelect
};
