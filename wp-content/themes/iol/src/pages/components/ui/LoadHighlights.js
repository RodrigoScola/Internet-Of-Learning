import React, { useState, useEffect, useMemo } from "react"
import { List } from "../../../utils/structures/linkedList"
import toast ,{Toaster} from 'react-hot-toast'
const list = new List({
	maxIndex: 5,
})

function findParentNode(selector = "", element) {
	const parent = element.parentNode
	if (!parent || element.querySelector(selector)) {
		return element.querySelector(selector)
	}
	return findParentNode(selector, parent)
}

export const LoadHighlights = ({ highlights = [], setHighlights }) => {
	const addItem = (e) => {
          list.addAt(list.len, "")
          if (list.maxIndex == list.len - 1) {
               toast.error('you can only have ' + list.maxIndex + ' items at a time');
          }
		setHighlights(list.getElements())
	}
	useEffect(() => {
		if (highlights) {
			list.head = null
			highlights.map((v, i) => {
				if (i == 0) {
					list.addHead(v)
				} else {
					list.addAt(i, v)
				}
			})

			setHighlights(list.getElements())
		}
	}, [])
	const removeItem = (e, i) => {
		e.preventDefault()
		const parent = findParentNode("#courseHighlights-" + i, e.target)

		parent.classList.add("zoom-out")
		setTimeout(() => {
			parent.classList.remove('zoom-out')
			list.removeAt(i)
			e.target.value = ""
			setHighlights(list.getElements())
		}, 200)
	}
	const changeAt = (e) => {
		list.changeAt(e.target.name, e.target.value)
		setHighlights(list.getElements())
	}
	return (
		<>
			{highlights.map((v, i) => {
				return (
					<div id={`courseHighlights-${i}`} class={`inputIcon  mv-08`}>
						<input name={i} placeholder={i} onChange={changeAt} value={v} />
						{i == 0 ? (
							<span
								onClick={addItem}
								class={`right btn ph-05 ml-1 btn-blue ${
									list.len - 1 == list.maxIndex ? "error" : ""
								}`}
							>
								<i className="bi bi-plus-lg white p-1"></i>
							</span>
						) : (
							<button onClick={(e) => removeItem(e, i)} className="right  btn ph-05 ml-1 btn-red">
								<i class="bi white bold bi-dash"></i>
							</button>
						)}
					</div>
				)
               })}
               <Toaster />
		</>
	)
}
