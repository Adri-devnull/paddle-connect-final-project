import styled from 'styled-components';

const StyledFiltersContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	color: #fff;
	margin-bottom: 40px;
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
`;

const StyledInput = styled.input`
	padding: 5px;
	border-radius: 5px;
	border: 1px solid #ccc;
	font-size: 1rem;
	width: 150px;
`;

const StyledSelect = styled.select`
	padding: 5px;
	border-radius: 5px;
	border: 1px solid #ccc;
	font-size: 1rem;
	width: 150px;
`;

const StyledLabels = styled.label`
	color: #d2d976;
	font-weight: 500;
	font-size: 1rem;
`;

export {
	StyledAlignContainer,
	StyledFiltersContainer,
	StyledInput,
	StyledLabels,
	StyledSelect,
	StyledTitle
};
