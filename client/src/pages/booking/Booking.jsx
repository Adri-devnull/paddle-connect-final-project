import { useState } from 'react';

const Booking = ({ setContent }) => {
	const [turn, setTurn] = useState(0);
	return (
		<div>
			<form>
				<div>
					<label htmlFor='turn'>Selecciona Turno</label>
					<label htmlFor='turn'>Manana</label>
					<input
						type='radio'
						name='turn'
						value='0'
						onChange={event => setTurn(Number(event.target.value))}
					/>
					<label htmlFor='turn'>Tarde</label>
					<input
						type='radio'
						name='turn'
						value='1'
						onChange={event => setTurn(Number(event.target.value))}
					/>
					<label htmlFor='schedule'>Horario</label>
					<select name='schedule' id='schedule'>
						<option value=''>Selecciona un horario</option>
						{turn === 0 && (
							<>
								<option value='08:00'>08:00</option>
								<option value='08:30'>08:30</option>
								<option value='09:00'>09:00</option>
								<option value='09:30'>09:30</option>
								<option value='10:00'>10:00</option>
								<option value='10:30'>10:30</option>
								<option value='11:00'>11:00</option>
								<option value='11:30'>11:30</option>
								<option value='12:00'>12:00</option>
								<option value='12:30'>12:30</option>
								<option value='13:00'>13:00</option>
								<option value='13:30'>13:30</option>
								<option value='14:00'>14:00</option>
								<option value='14:30'>14:30</option>
								<option value='15:00'>15:00</option>
								<option value='15:30'>15:30</option>
								<option value='16:00'>16:00</option>
							</>
						)}
						{turn === 1 && (
							<>
								<option value='16:30'>16:30</option>
								<option value='17:00'>17:00</option>
								<option value='17:30'>17:30</option>
								<option value='18:00'>18:00</option>
								<option value='18:30'>18:30</option>
								<option value='19:00'>19:00</option>
								<option value='19:30'>19:30</option>
								<option value='20:00'>20:00</option>
								<option value='20:30'>20:30</option>
								<option value='21:00'>21:00</option>
								<option value='21:30'>21:30</option>
								<option value='22:00'>22:00</option>
								<option value='22:30'>22:30</option>
								<option value='23:00'>23:00</option>
								<option value='23:30'>23:30</option>
							</>
						)}
					</select>
				</div>
				<div>
					<label htmlFor='location'>Localizacion</label>
					<input type='text' id='location' name='location' />
				</div>
				<div>
					<label htmlFor='message'>Message</label>
					<input type='text' id='message' name='message' />
				</div>
				<div>
					<button>Apuntarme</button>
					<button type='button' onClick={() => setContent()}>
						Cancelar
					</button>
				</div>
			</form>
		</div>
	);
};

export default Booking;
