import React, { useState, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';

window.addEventListener( 'load', () => {
	const div = document.querySelectorAll( '.passwordCheck' );
	div.forEach( ( elem ) => {
		console.log( elem );
		ReactDom.render( <PasswordCheck />, elem );
	} );
} );
function PasswordCheck() {
	const [ passwords, setPasswords ] = useState( {
		oldPass: '',
		newPass: '',
		confirmPass: '',
	} );

	const handleChange = ( e ) => {
		setPasswords( ( curr ) => ( {
			...curr,
			[ e.target.name ]: e.target.value,
		} ) );
	};
	return (
		<form class="formInput">
			<label class="text-xsm text-title m-0 bold">
				*Old password
				<input
					name="oldPass"
					onFocus={ ( e ) => console.log( e ) }
					onChange={ handleChange }
					type="password"
					class="input mb-1"
					required
				/>
			</label>{ ' ' }
			<label class="text-xsm text-title m-0 bold">
				*new Password
				<input
					name="newPass"
					onChange={ handleChange }
					value={ passwords.newPass }
					type="password"
					class="input mb-1"
					required
				/>
			</label>
			<label class="text-xsm text-title m-0 bold">
				*same password
				<input
					name="confirmPass"
					onChange={ handleChange }
					type="password"
					class="input mb-1"
					required
				/>
			</label>
			<button
				onClick={ ( e ) => e.preventDefault() }
				class="btn btn-lg btn-yellow bold"
			>
				Change Password
			</button>
		</form>
	);
}
