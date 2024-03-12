import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { loginRequest } from '../../utils/api/auth.api';
import {
	StyledButton,
	StyledButtonsContainer,
	StyledContainerInputs,
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledLogo
} from './login.styles';
const Login = ({ setContent }) => {
	const [user, setUser] = useState({});
	const { setUserData } = useContext(AuthContext);
	return (
		<div>
			<StyledLoginForm
				onSubmit={event => handleSubmit(event, user, setUserData, setContent)}
			>
				<div>
					<StyledLogo
						src='/assets/images/logo-padel.png'
						alt='logo-padel image'
					/>
				</div>
				<StyledContainerInputs>
					<StyledLabel htmlFor='email'>Email</StyledLabel>
					<StyledInput
						type='text'
						id='email'
						name='email'
						onChange={event => getInputValues(event.target, user, setUser)}
					/>
				</StyledContainerInputs>
				<StyledContainerInputs>
					<StyledLabel htmlFor='password'>Password</StyledLabel>
					<StyledInput
						type='text'
						id='password'
						name='password'
						onChange={event => getInputValues(event.target, user, setUser)}
					/>
				</StyledContainerInputs>
				<StyledButtonsContainer>
					<StyledButton>Login</StyledButton>
					<StyledButton type='button' onClick={() => setContent()}>
						Cancel
					</StyledButton>
				</StyledButtonsContainer>
			</StyledLoginForm>
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
