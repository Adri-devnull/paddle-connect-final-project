import { useState } from 'react';
import { URLS } from '../../constants/urls';
import { postData } from '../../utils/api/common.api';

const Register = ({ setContent }) => {
	// ESTADO QUE GUARDA LA INFORMACION DEL NUEVO USUARIO
	const [infoUser, setInfoUser] = useState({});
	console.log(infoUser);
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</div>
				<div>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						name='username'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						name='email'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</div>
				<div>
					<h4>Gender</h4>
					<label htmlFor='women'>Women</label>
					<input
						type='radio'
						name='gender'
						id='women'
						value='women'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
					<label htmlFor='man'>Man</label>
					<input
						type='radio'
						name='gender'
						id='man'
						value='man'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</div>
				<div>
					<h4>Position</h4>
					<label htmlFor='right'>Right</label>
					<input
						type='radio'
						name='position'
						id='right'
						value='right'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
					<label htmlFor='left'>Left</label>
					<input
						type='radio'
						name='position'
						id='left'
						value='left'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
					<label htmlFor='both'>Both</label>
					<input
						type='radio'
						name='position'
						id='both'
						value='both'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</div>
				<div>
					<select
						name='level'
						id='level'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					>
						<option>Selecciona tu nivel</option>
						<option value='2.5'>2.5</option>
						<option value='3'>3</option>
						<option value='3.5'>3.5</option>
						<option value='4'>4</option>
						<option value='4.5'>4.5</option>
						<option value='5'>5</option>
					</select>
				</div>
				<button onClick={() => registerNewUser(infoUser, setContent)}>
					Registrarme
				</button>
				<button type='button' onClick={() => setContent()}>
					Cancel
				</button>
			</form>
		</div>
	);
};

// CONTROLAR COMPORTAMIENTO POR DEFAULT DEL FORMULARIO
const handleSubmit = event => {
	event.preventDefault();
};

// OBTENER VALORES DE LOS INPUT
const getInputValues = (input, infoUser, setInfoUser) => {
	const { name, value } = input;
	const updatedUserInfo = { ...infoUser, [name]: value };
	setInfoUser(updatedUserInfo);
};

// REGISTRAR NUEVO USUARIO A LA BASE DE DATOS
const registerNewUser = async (infoUser, setContent) => {
	const newUser = await postData(URLS.AUTH_REGISTER, infoUser);
	setContent();
	console.log(newUser);
};

export default Register;