import { POSITIONS } from '../../constants/positions';

const Filters = ({ setPosition }) => {
	return (
		<div>
			<div>
				<h3>Filtrar por</h3>
				<div>
					<label htmlFor='position'>Posicion</label>
					<select
						name='position'
						id='position'
						onChange={event =>
							changePosition(Number(event.target.value), setPosition)
						}
					>
						<option value={POSITIONS.BOTH}>Todos</option>
						<option value={POSITIONS.RIGHT}>Derecha</option>
						<option value={POSITIONS.LEFT}>Izquierda</option>
					</select>
				</div>
				<div>
					<label htmlFor='level'>Nivel</label>
					<select name='level' id='level'>
						<option value='2'>2</option>
						<option value='2.5'>2.5</option>
						<option value='3'>3</option>
						<option value='3.5'>3.5</option>
						<option value='4'>4</option>
						<option value='4.5'>5.5</option>
						<option value='5'>5</option>
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

const changePosition = (value, setPosition) => {
	setPosition(value);
};
export default Filters;
