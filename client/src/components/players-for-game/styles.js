import styled from 'styled-components';

const StyledContainer = styled.div`
	@media screen and (min-width: 768px) {
		max-width: 1200px;
		margin: 0 auto;
	}
`;

const StyledPlayersForGameContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 30px;
`;

export { StyledContainer, StyledPlayersForGameContainer };
