import { useContext, useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { getDataById, patchData } from '../../utils/api/common.api';

const EditBooking = ({
	setContent,
	playersWaitingForGame,
	setPlayersWaitingForGame
}) => {
	const [turn, setTurn] = useState(0);
	const { userData } = useContext(AuthContext);
	const [bookingInfo, setBookingInfo] = useState({});

	useEffect(() => {
		if (!userData.booked) return;
		getBookingOfUser(userData, setBookingInfo);
	}, []);

	return (
		<div>
			<form
				onSubmit={event =>
					updateBookingOfUser(
						event,
						bookingInfo,
						setContent,
						playersWaitingForGame,
						setPlayersWaitingForGame
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
							getFormValues(event.target, bookingInfo, setBookingInfo)
						}
					>
						<option> {bookingInfo.scheduleStart} </option>
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
							getFormValues(event.target, bookingInfo, setBookingInfo)
						}
					>
						<option>{bookingInfo.scheduleEnd}</option>
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
							getFormValues(event.target, bookingInfo, setBookingInfo)
						}
						defaultValue={bookingInfo.location}
					/>
				</div>
				<div>
					<label htmlFor='message'>Message</label>
					<textarea
						id='message'
						name='message'
						cols='20'
						rows='4'
						onChange={event =>
							getFormValues(event.target, bookingInfo, setBookingInfo)
						}
						defaultValue={bookingInfo.message}
					/>
				</div>
				<div>
					<button>Guardar cambios</button>
					<button type='button' onClick={() => setContent()}>
						Cancelar
					</button>
				</div>
			</form>
		</div>
	);
};

// FUNCION PARA OBTENER LOS VALORES NUEVOS DE LA RESERVA
const getFormValues = (input, bookingInfo, setBookingInfo) => {
	const { name, value } = input;
	const updatedInfo = { ...bookingInfo, [name]: value };
	setBookingInfo(updatedInfo);
};

// FUNCION PARA OBTENER LA RESERVA DEL USUARIO PARA PODER MODIFICARLA
const getBookingOfUser = async (userData, setBookingInfo) => {
	const userBooking = await getDataById(`${URLS.API_BOOKING}/${userData.id}`);
	setBookingInfo(userBooking);
};

// FUNCION PARA ACTUALIZAR LOS DATOS DE LA RESERVA CREADA POR EL USUARIO
const updateBookingOfUser = async (
	event,
	bookingInfo,
	setContent,
	playersWaitingForGame,
	setPlayersWaitingForGame
) => {
	event.preventDefault();
	const updatedBookings = await patchData(
		`${URLS.API_BOOKING}/${bookingInfo._id}`,
		bookingInfo
	);

	const updatedPlayersWaitingForGame = playersWaitingForGame.map(
		(booking, index) => {
			if (booking._id === updatedBookings[index]._id) {
				booking = updatedBookings[index];
			}
			return booking;
		}
	);
	setPlayersWaitingForGame(updatedPlayersWaitingForGame);
	setContent();
};

export default EditBooking;
