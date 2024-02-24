import { useContext, useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { AuthContext } from '../../contexts/AuthContext';
import { patchData } from '../../utils/api/common.api';

const EditProfile = ({ setContent, setUserData }) => {
	const { userData } = useContext(AuthContext);
	const [userInfo, setUserInfo] = useState();

	useEffect(() => setUserInfo(userData), []);

	return (
		<div>
			<form
				onSubmit={event =>
					updateProfile(
						event,
						userData,
						userInfo,
						setContent,
						setUserInfo,
						setUserData
					)
				}
			>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						defaultValue={userData.name}
						onInput={event =>
							getInputValues(event.target, userInfo, setUserInfo)
						}
					/>
				</div>
				<div>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						name='username'
						defaultValue={userData.username}
						onInput={event =>
							getInputValues(event.target, userInfo, setUserInfo)
						}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						name='email'
						defaultValue={userData.email}
						onInput={event =>
							getInputValues(event.target, userInfo, setUserInfo)
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
						defaultChecked={userData.gender === 'women'}
						onChange={event =>
							getInputValues(event.target, userInfo, setUserInfo)
						}
					/>
					<label htmlFor='man'>Man</label>
					<input
						type='radio'
						name='gender'
						id='man'
						value='man'
						defaultChecked={userData.gender === 'man'}
						onChange={event =>
							getInputValues(event.target, userInfo, setUserInfo)
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
						defaultChecked={userData.position === 'right'}
						onChange={event =>
							getInputValues(event.target, userInfo, setUserInfo)
						}
					/>
					<label htmlFor='left'>Left</label>
					<input
						type='radio'
						name='position'
						id='left'
						value='left'
						defaultChecked={userData.position === 'left'}
						onChange={event =>
							getInputValues(event.target, userInfo, setUserInfo)
						}
					/>
					<label htmlFor='both'>Both</label>
					<input
						type='radio'
						name='position'
						id='both'
						value='both'
						defaultChecked={userData.position === 'both'}
						onChange={event =>
							getInputValues(event.target, userInfo, setUserInfo)
						}
					/>
				</div>
				<div>
					<select
						name='level'
						id='level'
						onChange={event =>
							getInputValues(event.target, userInfo, setUserInfo)
						}
					>
						<option>{userData.level}</option>
						<option value='2.5'>2.5</option>
						<option value='3'>3</option>
						<option value='3.5'>3.5</option>
						<option value='4'>4</option>
						<option value='4.5'>4.5</option>
						<option value='5'>5</option>
					</select>
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

// FUNCION PARA GUARDAR LA INFORMACION DEL USUSARIO MODIFICADO EN LA BD
const updateProfile = async (
	event,
	userData,
	userInfo,
	setContent,
	setUserInfo,
	setUserData
) => {
	event.preventDefault();
	const updatedUser = await patchData(
		`${URLS.API_USERS}/${userData.id}`,
		userInfo
	);
	setUserInfo(updatedUser);
	setUserData(updatedUser);
	setContent();
};

// OBTENER INFORMACION DEL NUEVO PERFIL EDITADO
const getInputValues = (input, userInfo, setUserInfo) => {
	const { name, value } = input;
	const updatedUserInfo = { ...userInfo, [name]: value };
	setUserInfo(updatedUserInfo);
};

export default EditProfile;
