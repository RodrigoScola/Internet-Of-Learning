Array.prototype.toObj = function (delimiter, callback = null) {
	const narr = this.reduce((curr, next) => {
		if (next.includes(delimiter)) {
			let [key, value] = next.split(delimiter)
			if (callback) {
				value = callback(value)
			}
			Object.assign(curr, {
				[key]: value,
			})
		}
		return curr
	}, {})
	return narr
}
String.prototype.replaceLast = function (search, replace) {
	return this.replace(new RegExp(search + "([^" + search + "]*)$"), replace + "$1")
}

Set.prototype.difference = function (set) {
	if (!(set instanceof Set)) set = new Set(set)
	const nset = new Set()
	;[...this].forEach((item) => {
		if (!set.has(item)) {
			nset.add(item)
		}
	})
	return nset
}

export const form = {
	filledFields: (obj) => {
		const notFilled = Object.entries(obj).reduce((curr, next) => {
			let [key, value] = next
			if (!value || value == []) {
				curr.push({
					[key]: value,
				})
			}
			return curr
		}, [])
		return notFilled
	},
}

export const formatter = {
	highlightsToArr: (obj) => {
		return Object.values(obj)
	},
	highlights: (obj) => {
		if (typeof obj !== "object") throw new Error("has to be an object")
		const narr = Object.entries(obj).reduce((curr, next) => {
			curr.push({
				id: [next[0] - 1],
				value: next[1],
			})
			return curr
		}, [])
		return narr
	},
	getUrlParams: () => {
		const params = window.location.search
			.substring(1)
			.split("&")
			.reduce((curr, next) => {
				const [key, value] = next.split("=")
				if (key && value) {
					Object.assign(curr, {
						[key]: Number(value) ? Number(value) : value,
					})
				}
				return curr
			}, {})

		return params
	},
	getPageParams: () => {
		try {
			const item = document
				.querySelector(`#${ioldata.slug.replace(" ", "-")}`)
				?.className.split(" ")
				.toObj("=", (elem) => Number(elem))
			return item ? item : {}
		} catch (err) {
			return {}
		}
	},
	getAllParams: () => {
		return {
			...formatter.getUrlParams(),
			...formatter.getPageParams(),
		}
	},
	/**
	 *
	 *
	 * @param {string[]} arr
	 * @param {string} delimiter
	 * @param {CallableFunction} callback
	 * @returns {Object[]}
	 */
	arrayToObj: (arr, delimiter, callback = null) => {
		const narr = arr.reduce((curr, next) => {
			if (next.includes(delimiter)) {
				let [key, value] = next.split(delimiter)
				if (callback) {
					value = callback(value)
				}
				Object.assign(curr, {
					[key]: value,
				})
			}
			return curr
		}, {})

		return narr
	},
}
var support = function () {
	if (!window.DOMParser) return false
	const parser = new DOMParser()
	try {
		parser.parseFromString("x", "text/html")
	} catch (err) {
		return false
	}
	return true
}
const getIcons = (html = "") => {
	console.log(typeof html)
}
export const stringToHtml = (str = "") => {
	if (support) {
		const parser = new DOMParser()
		const html = parser.parseFromString(str, "text/html")
		return html.body
	}
	const dom = document.createElement("div")
	dom.innerHTML = str
	return dom
}
export const remove_invisible_tag = (html = "") => {
	if (typeof html !== "string") {
		html = JSON.stringify(html)
	}
	html = html.replace('<div class="invisible">', "")
	html = html.replaceLast("</div>", "")
	return html
}
export const fetchData = {
	featuredImage: async (id, siteUrl = "http://localhost:10016/") => {
		const data = await fetch(siteUrl + "wp-json/wp/v2/media/" + id)
		return data
	},
}
export const removeTags = (str) => {
	return str.replace(/(<([^>]+)>)/gi, "")
}
