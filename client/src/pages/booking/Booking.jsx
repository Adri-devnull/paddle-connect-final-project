import { useContext, useState } from 'react';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { postData } from '../../utils/api/common.api';

const Booking = ({ setContent, setPlayersWaitingForGame }) => {
	const [turn, setTurn] = useState(0);
	const [bookingInfo, setBookingInfo] = useState({});
	const { userData, setUserData } = useContext(AuthContext);
	const id = userData.id;
	return (
		<div>
			<form
				onSubmit={event =>
					signUpAvaiblePlayerList(
						event,
						id,
						bookingInfo,
						setContent,
						setPlayersWaitingForGame,
						userData,
						setUserData
					)
				}
			>
				<div>
					<label htmlFor='turn'>Selecciona Turno</label>
					<div>
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
					</div>
					<label htmlFor='schedule'>Horario</label>
					<select
						name='scheduleStart'
						id='schedule'
						onChange={event =>
							getInputValues(event.target, bookingInfo, setBookingInfo)
						}
					>
						<option>Selecciona horario que tienes disponible </option>
						{turn === 0 && (
							<>
								<option value='08:00'>08:00</option>
								<option value='09:00'>09:00</option>
								<option value='10:00'>10:00</option>
								<option value='11:00'>11:00</option>
								<option value='12:00'>12:00</option>
								<option value='13:00'>13:00</option>
								<option value='14:00'>14:00</option>
								<option value='15:00'>15:00</option>
								<option value='16:00'>16:00</option>
							</>
						)}
						{turn === 1 && (
							<>
								<option value='16:30'>16:00</option>
								<option value='17:00'>17:00</option>
								<option value='18:00'>18:00</option>
								<option value='19:00'>19:00</option>
								<option value='20:00'>20:00</option>
								<option value='21:00'>21:00</option>
								<option value='22:00'>22:00</option>
								<option value='23:00'>23:00</option>
							</>
						)}
					</select>
					<select
						name='scheduleEnd'
						id='schedule'
						onChange={event =>
							getInputValues(event.target, bookingInfo, setBookingInfo)
						}
					>
						<option>Selecciona horario que tienes disponible</option>
						{turn === 0 && (
							<>
								<option value='08:00'>08:00</option>
								<option value='09:00'>09:00</option>
								<option value='10:00'>10:00</option>
								<option value='11:00'>11:00</option>
								<option value='12:00'>12:00</option>
								<option value='13:00'>13:00</option>
								<option value='14:00'>14:00</option>
								<option value='15:00'>15:00</option>
								<option value='16:00'>16:00</option>
							</>
						)}
						{turn === 1 && (
							<>
								<option value='16:30'>16:00</option>
								<option value='17:00'>17:00</option>
								<option value='18:00'>18:00</option>
								<option value='19:00'>19:00</option>
								<option value='20:00'>20:00</option>
								<option value='21:00'>21:00</option>
								<option value='22:00'>22:00</option>
								<option value='23:00'>23:00</option>
							</>
						)}
					</select>
				</div>
				<div>
					<label htmlFor='location'>Localizacion</label>
					<input
						type='text'
						id='location'
						name='location'
						onChange={event =>
							getInputValues(event.target, bookingInfo, setBookingInfo)
						}
					/>
				</div>
				<div>
					<label htmlFor='message'>Message</label>
					<input
						type='text'
						id='message'
						name='message'
						onChange={event =>
							getInputValues(event.target, bookingInfo, setBookingInfo)
						}
					/>
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

// FUNCION PARA OBTENER LOS VALORES DEL FORMULARIO
const getInputValues = (input, bookingInfo, setBookingInfo) => {
	const { name, value } = input;
	const updateInfo = { ...bookingInfo, [name]: value };
	setBookingInfo(updateInfo);
};

// FUNCION PARA APUNTARME A LA LISTA DE JUGADORES DISPONIBLES
const signUpAvaiblePlayerList = async (
	event,
	id,
	bookingInfo,
	setContent,
	setPlayersWaitingForGame,
	userData,
	setUserData
) => {
	event.preventDefault();
	const updatedPlayers = await postData(
		`${URLS.API_BOOKING}/${id}`,
		bookingInfo
	);
	setPlayersWaitingForGame(updatedPlayers);
	setUserData({ ...userData, booked: true });
	setContent();
};

export default Booking;
