import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import apiFetch from '@wordpress/api-fetch';

window.addEventListener( 'load', () => {
	const div = document.querySelectorAll( '.sign-up' );
	div.forEach( ( elem ) => {
		ReactDom.render( <RenderComponent />, elem );
	} );
} );
function RenderComponent() {
	return (
		<>
			<div class="">
				<h1 class="text-title text-lg bold ">
					Sign up to Internet of learning
				</h1>
				<p class=" text-sm ">
					To write a review, you need to set up an account on The
					Internet of Learning.{ ' ' }
				</p>
				<form class="formInput">
					<label class="text-xsm text-title bold">
						*Username
						<input
							class="input  mb-1"
							placeholder="John"
							required
						/>
					</label>
					<label class="text-xsm text-title bold">
						*First Name
						<input
							class="input  mb-1"
							placeholder="John"
							required
						/>
					</label>
					<label class=" text-xsm text-title bold">*Last Name</label>
					<input class="input mb-1" placeholder="Doe" required />
					<label class="text text-title  text-xsm bold">*Email</label>
					<input
						class="input  mb-1"
						placeholder="JohnDoe@email.com"
						type="email"
						required
					/>
					<label class="text text-title   text-xsm bold">
						*Password
					</label>

					<input
						class="input  mb-1"
						type="password"
						required
						pattern="[a-z0-5]{8,}"
						placeholder="admin123"
					/>
					<label class="text left text-title m-0 text-xsm bold">
						*Confirm Password
					</label>

					<input
						class="input text-title  mb-1"
						type="password"
						required
						pattern="[a-z0-5]{8,}"
						placeholder="admin123"
					/>
					<br />
					<button type="submit" class=" btn btn-yellow bold ">
						Confirm Sign up
					</button>
					<a class="blue ml-2" href="#">
						Forgot your password?
					</a>
					<p class="left ">
						Already a member?{ ' ' }
						<a class="blue" href="#">
							Log in here
						</a>
					</p>
				</form>
			</div>
		</>
	);
}
