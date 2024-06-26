import styled from 'styled-components';

const StyledTabsContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	margin-bottom: 50px;
`;

const StyledTabsButton = styled.button`
	background-color: #e0e6d5;
	border-radius: 5px 2px 5px 2px;
	padding: 10px 12px;
	border: none;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	font-weight: 600;
	font-size: 1em;
	transition: transform 0.2s ease-in-out;
	&:hover {
		transform: translateY(-2px);
	}

	@media screen and (min-width: 768px) {
		font-size: 0.9em;

		&:hover {
			cursor: pointer;
			background-color: #cadf70;
		}
	}
`;

export { StyledTabsButton, StyledTabsContainer };
