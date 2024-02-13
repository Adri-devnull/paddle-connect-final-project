import { LEVELS } from '../../constants/level';
import { POSITIONS } from '../../constants/positions';

const Filters = ({ setPosition, setLevel }) => {
	return (
		<div>
			<div>
				<h3>Filtrar por</h3>
				<div>
					<label htmlFor='position'>Posicion</label>
					<select
						name='position'
						id='position'
						onChange={event => setPosition(Number(event.target.value))}
					>
						<option value={POSITIONS.BOTH}>Todos</option>
						<option value={POSITIONS.RIGHT}>Derecha</option>
						<option value={POSITIONS.LEFT}>Izquierda</option>
					</select>
				</div>
				<div>
					<label htmlFor='level'>Nivel</label>
					<select
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
					</select>
				</div>
				<div>
					<label htmlFor='schedule'>Horario</label>
					<select name='schedule' id='schedule'>
						<option value='sooner'>Mas pronto</option>
						<option value='later'>Mas tarde</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Filters;
