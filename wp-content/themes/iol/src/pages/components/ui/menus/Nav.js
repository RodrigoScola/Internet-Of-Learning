import React, { useState } from "react"
import { useDisclosure } from "../../../hooks/useDisclosure"
import { Menu } from "./Menu"
import { Icon } from "../../Icon"
import { remove_invisible_tag } from "../../../../utils"
export const Nav = ({ innerHTML }) => {
	innerHTML = remove_invisible_tag(innerHTML)
	const { isOpen, onClose, onOpen, ontoggle } = useDisclosure()

	const openMenu = (e) => {
		e.preventDefault()
		ontoggle()
	}

	console.log(isOpen)
	return (
		<>
			<button className="btn btn-transparent " onClick={openMenu}>
				<Icon iconName="list" />
			</button>
			<Menu className={"navigation-bar"} isOpen={isOpen} onClose={onClose}>
				<div
					className="m-1 mt-03 pb-2 "
					dangerouslySetInnerHTML={{
						__html: innerHTML,
					}}
				></div>
			</Menu>
		</>
	)
}
