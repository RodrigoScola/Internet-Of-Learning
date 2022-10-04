import React, { useEffect, useReducer, useRef, useState } from "react"
import { useDisclosure } from "../../../hooks/useDisclosure"
import { Menu } from "./Menu"
import { SearchForm } from "../../searchForm"
import { Tooltip } from "../Tooltip"
import { remove_invisible_tag } from "../../../../utils"
import { Icon } from "../../Icon"
import { HeaderButtons } from "../../utilComponents/User/HeaderButtons"
export const Header = ({ innerHTML, categories }) => {
	const [cat, setCat] = useState(categories.split(","))
	const { isOpen, onClose, onOpen, ontoggle } = useDisclosure()
	const [type, setType] = useState("")
	const handlemenu = (e) => {
		if (e.target.id == type) {
			setType("")
			return onClose()
		}
		setType(e.target.id)
	}

	useEffect(() => {
		if (type !== "") {
			onOpen()
		}
	}, [type])

	useEffect(() => {
		if (innerHTML) {
			const men = document.querySelector("#header-menu")
			console.log(men)
		}
	})
	return (
		<>
			<div id="" class=" flex  flex-row flex-evenly center-items w-100">
				<i
					onClick={handlemenu}
					id="search_menu"
					class={`bi text-md ${
						isOpen == true && type == "search_menu" ? "bi-x-lg white" : "bi-search yellow"
					} `}
				></i>
				{/* <a class="" id="" href="/"> */}
				<a class="text-title flex flex-row center-items text-md ">
					I<Icon iconName="brain" />L
				</a>
				{/* </a> */}
				<i
					id="mega_menu"
					onClick={handlemenu}
					class={`bi ${isOpen == true && type == "mega_menu" ? "bi-x-lg" : "bi-list"} white text-md`}
				></i>
			</div>
			{type == "mega_menu" && isOpen == true ? (
				<div className="bg-white container p-2 w-100 ">
					<ul className="min-list black">
						<li>List your course</li>
						<li>Visit our blog</li>
						<ul>
							<li>Categories</li>
						</ul>
					</ul>
					<HeaderButtons />
				</div>
			) : type == "search_menu" && isOpen == true ? (
				<div className=" w-100 h-20">
					<SearchForm />
					<ul className="list round_semi p-2">
						{cat.map((v, i) => {
							return <li>{v}</li>
						})}
					</ul>
				</div>
			) : null}
		</>
	)
}
