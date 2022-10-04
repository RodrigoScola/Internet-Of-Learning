import React, { useEffect, useState, useRef } from "react"
import { useOutsudeClick } from "../../../hooks/useOutsideClick"
export const Menu = ({ isOpen, onClose, children }) => {
     const wrapperRef = useRef(null)
     
     const closeMenu = () => {
          wrapperRef.current.classList.remove("animate__bounceInLeft")
          wrapperRef.current.classList.add("animate__slideOutLeft")
          onClose()
     }


	useOutsudeClick(wrapperRef, closeMenu)
	if (isOpen) {
		return (
			<aside className={`menu pt-3 pl-04  `}>
				<div
					ref={wrapperRef}
					className="bg-white animate__animated animate__bounceInLeft animate__faster container black w-30"
				>
					{children}
				<div>
					<button onClick={closeMenu} className="btn btn-red">
						Cancel
					</button>
				</div>
				</div>
			</aside>
		)
	}
	return <></>
}
