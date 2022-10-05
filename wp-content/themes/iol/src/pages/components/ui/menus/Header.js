import React, { useEffect, useReducer, useRef, useState } from "react"
import { useDisclosure } from "../../../hooks/useDisclosure"
import { Menu } from "./Menu"
import { SearchForm } from "../../searchForm"
import { Tooltip } from "../Tooltip"
import apiFetch from "@wordpress/api-fetch"
import { remove_invisible_tag } from "../../../../utils"
import { Icon } from "../../Icon"
import { HeaderButtons } from "../../utilComponents/User/HeaderButtons"
import { MegaMenu } from "./MegaMenu"
export const Header = ({ innerHTML }) => {
	const [cat, setCat] = useState([])
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
		async function go() {
			const data = await apiFetch({
				path: `/wp/v2/categories`,
				method: "GET",

				headers: {
					"X-WP-Nonce": ioldata.nonce,
				},
			})
			console.log(data)
			setCat(
				data.filter((item) => {
					return item.count.courses > 0 && item.slug !== "blogs"
				})
			)
		}
		go()
	}, [])

	return (
		<>
			<div id="header_mobile" class=" flex header_background flex-row flex-evenly center-items w-100">
				<i
					onClick={handlemenu}
					id="search_menu"
					class={`bi text-md ${
						isOpen == true && type == "search_menu" ? "bi-x-lg white" : "bi-search yellow"
					} `}
				></i>
				{/* <a class="" id="" href="/"> */}
				<a class="text-title flex white flex-row center-items text-md ">
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
				<MegaMenu categories={cat} />
			) : type == "search_menu" && isOpen == true ? (
				<div className=" p-2 w-100 ">
					<SearchForm />
				</div>
			) : null}
		</>
	)
}
