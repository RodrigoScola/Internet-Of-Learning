import React, { useState, useEffect, useCallback } from "react"
import toast, { Toaster } from "react-hot-toast"
import { Tooltip } from "./ui/Tooltip"

export const ElementSelect = ({ elements, defaultSelected = [], setElements }) => {
	const [selected, setSelected] = useState([...defaultSelected])
	const [cat, setCat] = useState(elements)
	const [justRemoved, setJustRemoved] = useState()
	const errorToast = (message) => {
		toast.error(message, {
			position: "bottom-center",
			className: "bg-white red border-red",
		})
	}
	// change to use Set instead of filters and reducers
	const removeItem = (v) => {
		const nset = new Set([...selected])
		nset.delete(v)
		setSelected([...nset])
		const sorted = [...cat, v].sort((a, b) => b.id - a.id)
		setCat(sorted)
	}
	const additem = (v) => {
		if (selected.length >= 3) return null
		const sorted = selected.sort((a, b) => a.id - b.id)
		const nset = new Set(sorted)
		nset.delete(v)
		setSelected((curr) => [...curr, v])
		const withoutItem = cat.filter((item) => item.id != v.id)
		setCat(withoutItem)
	}
	useEffect(() => {
		const ids = selected.map((category, idx) => category.id)
		setElements(ids)
	}, [selected])

	useEffect(() => {
		if (elements) {
			const nset = new Set([...elements])
			setCat([...nset.difference(defaultSelected)])
		}
	}, [elements])

	return (
		<>
			<h1 className="text-title bold text-center">{selected.length}/3 Categories Selected</h1>
			<div className="flex flex-center ">
				{selected &&
					selected.map((v, i) => {
						return (
							<div>
								<button
									onClick={() => removeItem(v)}
									className="btn zoom-in m-05 btn-yellow-dt"
								>
									{v.name.replace(/&amp;/g, "&")}
								</button>
							</div>
						)
					})}
			</div>
			<div className="divider"></div>
			<div className="flex flex-center ">
				{cat &&
					cat.map((v, i) => {
						return (
							<button
								onClick={() => {
									additem(v)
									if (selected.length == 3) {
										errorToast("you can only add 3 categories")
									}
								}}
								className={`btn ${justRemoved == v.id ? "zoom-in" : ""}  ${
									selected.length == 3 ? "error" : ""
								} m-05 btn-blue-hollow`}
							>
								{v.name.replace(/&amp;/g, "&")}
							</button>
						)
					})}
			</div>
		</>
	)
}
