import { LEVELS } from '../../constants/level';
import { POSITIONS } from '../../constants/positions';
import {
	StyledAlignContainer,
	StyledFiltersContainer,
	StyledInput,
	StyledLabels,
	StyledSelect,
	StyledTitle
} from './styles';

const Filters = ({ setPosition, setLevel, setLocation }) => {
	return (
		<StyledFiltersContainer>
			<StyledTitle>Filtrar jugadores por:</StyledTitle>
			<StyledAlignContainer>
				<StyledLabels htmlFor='location'>Localizacion</StyledLabels>
				<StyledInput
					type='text'
					name='location'
					id='location'
					onChange={event => setLocation(event.target.value)}
				/>
			</StyledAlignContainer>
			<StyledAlignContainer>
				<StyledLabels htmlFor='position'>Posicion</StyledLabels>
				<StyledSelect
					name='position'
					id='position'
					onChange={event => setPosition(Number(event.target.value))}
				>
					<option value={POSITIONS.BOTH}>Todos</option>
					<option value={POSITIONS.RIGHT}>Derecha</option>
					<option value={POSITIONS.LEFT}>Izquierda</option>
				</StyledSelect>
			</StyledAlignContainer>
			<StyledAlignContainer>
				<StyledLabels htmlFor='level'>Nivel</StyledLabels>
				<StyledSelect
					name='level'
					id='level'
					onChange={event => setLevel(Number(event.target.value))}
				>
					<option value={LEVELS.ALL}>Todos</option>
					<option value={LEVELS.JUNIOR}>2</option>
					<option value={LEVELS.MID_JUNIOR}>2.5</option>
					<option value={LEVELS.MIDDLE}>3</option>
					<option value={LEVELS.ADVANCED}>3.5</option>
					<option value={LEVELS.MID_PRO}>4</option>
					<option value={LEVELS.PRO}>4.5</option>
					<option value={LEVELS.JESUSCRIST}>5</option>
				</StyledSelect>
			</StyledAlignContainer>
		</StyledFiltersContainer>
	);
};

export default Filters;
