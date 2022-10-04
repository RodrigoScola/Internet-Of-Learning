import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
window.addEventListener( 'load', () => {
	const div = document.querySelector( '#aaa' );
	ReactDOM.render(
		<>
			<RenderComponent />
		</>,
		div
	);
} );
// toast({title: 'Chakra UI'})
function RenderComponent() {
	return <div></div>;
}
