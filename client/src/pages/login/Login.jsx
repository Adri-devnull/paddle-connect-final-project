import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { loginRequest } from '../../utils/api/auth.api';
const Login = ({ setContent }) => {
	const [user, setUser] = useState({});
	const { setUserData } = useContext(AuthContext);
	return (
		<div>
			<form
				onSubmit={event => handleSubmit(event, user, setUserData, setContent)}
			>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						id='email'
						name='email'
						onChange={event => getInputValues(event.target, user, setUser)}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='text'
						id='password'
						name='password'
						onChange={event => getInputValues(event.target, user, setUser)}
					/>
				</div>
				<div>
					<button>Login</button>
					<button type='button' onClick={() => setContent()}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

// OBTENER VALORES DE LOS INPUTS DEL LOGIN
const getInputValues = (input, user, setUser) => {
	const { name, value } = input;
	const updateUserInfo = { ...user, [name]: value };
	setUser(updateUserInfo);
};

// LOGEAR USUARIO CON LAS CREDENCIALES
const handleSubmit = async (event, user, setUserData, setContent) => {
	event.preventDefault();
	await loginRequest(user, setUserData);
	setContent();
};

export default Login;
