import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const EditProfile = ({ setContent }) => {
	const { userData } = useContext(AuthContext);

	return (
		<div>
			<form onSubmit={event => event.preventDefault()}>
				<div>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' defaultValue={userData.name} />
				</div>
				<div>
					<label htmlFor='username'>Username</label>
					<input type='text' name='username' defaultValue={userData.username} />
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' defaultValue={userData.email} />
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
					/>
					<label htmlFor='man'>Man</label>
					<input
						type='radio'
						name='gender'
						id='man'
						value='man'
						defaultChecked={userData.gender === 'man'}
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
					/>
					<label htmlFor='left'>Left</label>
					<input
						type='radio'
						name='position'
						id='left'
						value='left'
						defaultChecked={userData.position === 'left'}
					/>
					<label htmlFor='both'>Both</label>
					<input
						type='radio'
						name='position'
						id='both'
						value='both'
						defaultChecked={userData.position === 'both'}
					/>
				</div>
				<div>
					<select name='level' id='level'>
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

const getInputValues = () => {};

export default EditProfile;
