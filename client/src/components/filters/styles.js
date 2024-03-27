import styled from 'styled-components';

const StyledContainer = styled.div`
	@media screen and (min-width: 768px) {
		max-width: 1200px;
		margin: 0 auto;
	}
`;

const StyledFiltersContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	color: #fff;
	margin-bottom: 40px;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

const StyledAlignContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const StyledTitle = styled.h3`
	font-weight: 500;
	font-size: 1.3em;
	margin-bottom: 20px;
	color: #fff;
`;

const StyledInput = styled.input`
	padding: 5px;
	border-radius: 5px;
	border: 1px solid #ccc;
	font-size: 1rem;
	width: 150px;
	background: rgb(200, 200, 200);
	background: linear-gradient(
		0deg,
		rgba(200, 200, 200, 1) 0%,
		rgba(220, 220, 220, 1) 100%
	);
`;

const StyledSelect = styled.select`
	padding: 5px;
	border-radius: 5px;
	border: 1px solid #ccc;
	font-size: 0.9rem;
	width: 150px;
	background: rgb(200, 200, 200);
	background: linear-gradient(
		0deg,
		rgba(200, 200, 200, 1) 0%,
		rgba(220, 220, 220, 1) 100%
	);

	font-weight: 600;
	font-style: italic;

	@media screen and (min-width: 768px) {
		cursor: pointer;
	}
`;

const StyledLabels = styled.label`
	color: #cadf70;
	font-weight: 500;
	font-size: 1rem;
`;

export {
	StyledAlignContainer,
	StyledContainer,
	StyledFiltersContainer,
	StyledInput,
	StyledLabels,
	StyledSelect,
	StyledTitle
};
