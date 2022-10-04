import React from 'react'
import ReactDom from 'react-dom'
 window.addEventListener('load', () => {
	const div = document.querySelectorAll('.search')
	div.forEach((elem) => {		
console.log(elem)	
	ReactDom.render(<RenderComponent />, elem)
	}) }) 
 function RenderComponent() {
 return ( <>
<h1>Works</h1>
</>
	)}