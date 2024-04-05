import styled from 'styled-components';

const StyledCommentsContainer = styled.div`
	height: calc(100vh - 279px);
	padding: 0px 40px;
`;

const StyledComments = styled.div`
	margin-bottom: 30px;

	@media screen and (min-width: 768px) {
		max-width: 1200px;
		margin: 0 auto;
	}
`;

const StyledComment = styled.div`
	background-color: #d0d0d0;
	padding: 20px;
	border-radius: 15px;
	margin: 20px 0px;
`;
const StyledButton = styled.button`
	background-color: #cadf70;
	color: #11161e;
	border-radius: 5px;
	padding: 8px 14px;
	border: none;
	font-weight: 600;
`;

const StyledRatingContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`;
export {
	StyledButton,
	StyledComment,
	StyledComments,
	StyledCommentsContainer,
	StyledRatingContainer
};
