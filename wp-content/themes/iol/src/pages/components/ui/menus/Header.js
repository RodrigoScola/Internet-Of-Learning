import React, { useEffect, useReducer, useRef, useState } from "react"
import { useDisclosure } from "../../../hooks/useDisclosure"
import { Menu } from "./Menu"

import { Icon, GetIcon } from "../../Icon"
import { remove_invisible_tag } from "../../../../utils"
export const Header = ({ innerHTML }) => {
	const { isOpen, onClose, onOpen, ontoggle } = useDisclosure()
	const menuRef = useRef(null)
	const [s, ss] = useState(0)
	const openMenu = (e) => {
		e.preventDefault()
		onOpen()
	}
	useEffect(() => {
		if (innerHTML) {
			const men = document.querySelector("#header-menu")
			console.log(men)
		}
	})

	return (
		<>
			<div
				className="flex  flex-row flex-evenly center-items w-100"
				dangerouslySetInnerHTML={{
					__html: innerHTML,
				}}
			></div>
		</>
	)
}
