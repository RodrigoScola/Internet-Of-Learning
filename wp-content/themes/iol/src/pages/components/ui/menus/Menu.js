import React, { useEffect, useState, useRef } from "react"
import { useOutsudeClick } from "../../../hooks/useOutsideClick"
export const Menu = ({ isOpen, onClose, children, className }) => {
	const wrapperRef = useRef(null)

	const closeMenu = () => {
		wrapperRef.current.classList.remove("animate__bounceInLeft")
		wrapperRef.current.classList.add("animate__slideOutLeft")
		onClose()
	}

	useOutsudeClick(wrapperRef, closeMenu)
	if (isOpen == true) {
		return (
			<aside className={`menu pt-3 pl-04  ${className} `}>
				<div
					ref={wrapperRef}
					className="bg-white animate__animated animate__bounceInLeft animate__faster container black min-w-200 w-30"
				>
					{children}
					<div className="center pb-2">
						<button onClick={closeMenu} className="btn white m-auto btn-red">
							Cancel
						</button>
					</div>
				</div>
			</aside>
		)
	}
	return <></>
}
