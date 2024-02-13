const Message = ({ setContent }) => {
	return (
		<div>
			<form>
				<div>
					<label htmlFor='message'>Mensaje</label>
					<textarea name='message' id='message' cols='20' rows='4'></textarea>
				</div>
				<div>
					<label htmlFor='average'>Valoracion</label>
					<select name='average' id='average'>
						<option value='0'>0</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</select>
				</div>
				<div>
					<button>Publicar</button>
					<button type='button' onClick={() => setContent()}>
						Cancelar
					</button>
				</div>
			</form>
		</div>
	);
};

export default Message;
