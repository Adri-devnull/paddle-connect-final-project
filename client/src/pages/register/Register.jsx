import { useState } from 'react';
import { URLS } from '../../constants/urls';
import { postData } from '../../utils/api/common.api';
import { generateRandomNumber } from '../../utils/randomNumber';
import {
	StyledButton,
	StyledButtonAvatar,
	StyledButtonsContainer,
	StyledContainerInputs,
	StyledContainerRadioInput,
	StyledImageAvatar,
	StyledImageUserContainer,
	StyledInput,
	StyledLogo,
	StyledPositionsContainer,
	StyledRegisterForm,
	StyledSelect,
	StyledSelectContainer
} from './register.styles';

const Register = ({ setContent }) => {
	// ESTADO QUE GUARDA LA INFORMACION DEL NUEVO USUARIO
	const [infoUser, setInfoUser] = useState({});
	return (
		<div>
			<StyledRegisterForm onSubmit={handleSubmit}>
				<div>
					<StyledLogo
						src='/assets/images/logo-padel.png'
						alt='logo-padel image'
					/>
				</div>
				<StyledContainerInputs>
					<label htmlFor='name'>Name</label>
					<StyledInput
						type='text'
						name='name'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</StyledContainerInputs>
				<StyledContainerInputs>
					<label htmlFor='username'>Username</label>
					<StyledInput
						type='text'
						name='username'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</StyledContainerInputs>
				<StyledContainerInputs>
					<label htmlFor='email'>Email</label>
					<StyledInput
						type='text'
						name='email'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</StyledContainerInputs>
				<StyledContainerInputs>
					<label htmlFor='password'>Password</label>
					<StyledInput
						type='password'
						name='password'
						onChange={event =>
							getInputValues(event.target, infoUser, setInfoUser)
						}
					/>
				</StyledContainerInputs>
				<StyledContainerRadioInput>
					<h4>Gender</h4>
					<div>
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
						<label htmlFor='men'>Men</label>
						<input
							type='radio'
							name='gender'
							id='men'
							value='men'
							onChange={event =>
								getInputValues(event.target, infoUser, setInfoUser)
							}
						/>
					</div>
				</StyledContainerRadioInput>
				<StyledImageUserContainer>
					{infoUser.gender && (
						<StyledButtonAvatar
							onClick={() =>
								getUserImage(infoUser, setInfoUser, infoUser.gender)
							}
						>
							Selecciona tu avatar
						</StyledButtonAvatar>
					)}
					{infoUser.gender && infoUser.img && (
						<div>
							<StyledImageAvatar
								src={infoUser.img}
								alt='image of user profile'
							/>
						</div>
					)}
				</StyledImageUserContainer>
				<StyledContainerRadioInput>
					<h4>Position</h4>
					<StyledPositionsContainer>
						<div>
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
						</div>
						<div>
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
						</div>
						<div>
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
					</StyledPositionsContainer>
				</StyledContainerRadioInput>
				<StyledSelectContainer>
					<StyledSelect
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
					</StyledSelect>
				</StyledSelectContainer>
				<StyledButtonsContainer>
					<StyledButton onClick={() => registerNewUser(infoUser, setContent)}>
						Registrarme
					</StyledButton>
					<StyledButton type='button' onClick={() => setContent()}>
						Cancel
					</StyledButton>
				</StyledButtonsContainer>
			</StyledRegisterForm>
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

// OBTENER IMAGEN USUARIO
const getUserImage = (infoUser, setInfoUser, gender) => {
	const randomNumber = generateRandomNumber();
	const url = `https://randomuser.me/api/portraits/med/${gender}/${randomNumber}.jpg`;
	setInfoUser({ ...infoUser, img: url });
};

// REGISTRAR NUEVO USUARIO A LA BASE DE DATOS
const registerNewUser = async (infoUser, setContent) => {
	await postData(URLS.AUTH_REGISTER, infoUser);
	setContent();
};

export default Register;
