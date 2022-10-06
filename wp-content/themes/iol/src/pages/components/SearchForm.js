import React, { useEffect, useState } from "react"
import { removeTags } from "../../utils"

export const SearchForm = () => {
	const [term, setTerm] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		// console.log(removeTags(term))
		window.location.href = ioldata.root_url + "/search/?term=" + removeTags(term)
	}
	const handleChange = (e) => {
		console.log(e)
		setTerm(e.target.value)
	}

	console.log(ioldata.root_url)
	return (
		<form method="GET" onSubmit={handleSubmit} action={ioldata.root_url + "/search/"} class="griditem-2-5 w-100 ">
			<div class="w-100 search-tab">
				<div class="search-input  w-60">
					<i class="searchicon bi bi-search yellow"></i>
					<input
						onChange={handleChange}
						id="search_input"
						autocomplete="off"
						name="term"
						class=""
						placeholder="What do you want to learn?"
					/>
				</div>
				<button id="header-search-button" class="btn btn-sm btn-yellow btn-round_right w-30" type="submit">
					<i class="searchicon bi bi-search"></i>
				</button>
			</div>
		</form>
	)
}
