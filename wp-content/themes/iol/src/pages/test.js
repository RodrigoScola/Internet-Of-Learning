import React, { useEffect, useRef, useState } from 'react';
import { useDisclosure } from './hooks/useDisclosure';
import ReactDom from 'react-dom';
import apiFetch from '@wordpress/api-fetch';
import { Tooltip } from './components/ui/Tooltip';
import { AlertDialog } from './components/ui/Alert';
import { useOutsudeClick } from './hooks/useOutsideClick';
import { ElementSelect } from './components/CategorySelect';
import { ReviewComponent } from './components/ReviewComponent';
window.addEventListener( 'load', () => {
	const div = document.querySelectorAll( '#jsx' );
	div.forEach( ( elem ) => {
		ReactDom.render( <RenderComponent />, elem );
	} );
} );
function RenderComponent() {
	const [ cat, setCat ] = useState( [] );

	useEffect( () => {
		const go = async () => {
			const data = await apiFetch( {
				url: '/wp-json/wp/v2/categories',
			} );
			setCat( data );
		};
		go();
	}, [] );

	return (
		<>
			<h1>Modals</h1>
			<section>
				<AlertDialogExample />
				<ToastExample />
				<ReviewComponent />
			</section>

			<ElementSelect elements={ cat } setElements={ setCat } />
		</>
	);
}
function ToastExample() {
	const { isOpen, ontoggle, onClose } = useDisclosure();
	return (
		<>
			<button onClick={ ontoggle } className="btn btn-yellow">
				Toast
			</button>
			{ /* <Toast onClose={onClose} isOpen={isOpen} /> */ }
		</>
	);
}
function AlertDialogExample() {
	const { isOpen, onClose, onOpen, ontoggle } = useDisclosure();

	return (
		<>
			<button onClick={ onOpen } className="btn btn-red-hollow ">
				Alert Dialogue
			</button>
			<AlertDialog isOpen={ isOpen } onClose={ onClose }>
				<div onClick={ onClose } className="right black">
					<i class="bi bi-x-lg"></i>
				</div>
				<h1 className="black text-title">
					Are you sure you want to delete this user?
				</h1>
				<p className="black">
					This user has done nothing wrong for us, are you sure you
					want to ruin our establishment?
				</p>
				<div className="flex flex-row flex-right">
					<button
						onClick={ onClose }
						className="btn ph-2 btn-red-hollow"
					>
						Cancel
					</button>
					<button className="btn mh-3 btn-yellow">Continue</button>
				</div>
			</AlertDialog>
		</>
	);
}
