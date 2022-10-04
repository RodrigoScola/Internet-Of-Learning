import React, { useEffect, useState, useRef } from 'react';
import {useOutsudeClick} from '../../hooks/useOutsideClick'
import { useDisclosure } from '../../hooks/useDisclosure';
export const AlertDialog = ({ isOpen, onClose , children}) => {
     	const wrapperRef = useRef(null)
		useOutsudeClick(wrapperRef, onClose)
     if (isOpen) {
          
     return (
		<aside className={`alert pt-3 `}>
			<div ref={wrapperRef} className="bg-white  w-90 p-1 h-fit m-auto zoom-in  container">
				{children}
				</div>
		</aside>
	)
     }
     return <></>
}

export const AlertDialogHeader = () => {
	return 
}