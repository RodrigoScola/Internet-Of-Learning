import "../css/style.scss"
import { ChangeMode } from "./changeMode"
import $ from "jquery"
import ReactDOM from "react-dom"
const mode = new ChangeMode()
import { inputJquery } from "./pages/components/input"
import { AnimHandler } from "./pages/animations/buttonSubmit"
import { formatter } from "./utils"
import { Nav } from "./pages/components/ui/menus/Nav"
import { Header } from "./pages/components/ui/menus/Header"

const animations = new AnimHandler()

window.addEventListener("load", () => {
	console.log(ioldata)

	const headernav = document.querySelector("#header_mobile")

	ReactDOM.render(
		<Header categories={headernav.getAttribute("data-categories")} innerHTML={headernav.innerHTML} />,
		headernav
	)

	// if (!ioldata.is_mobile) {
	if (ioldata.slug == "inputs") {
		const nav = document.querySelector(".navigation-bar")
		const navHtml = nav.innerHTML
		ReactDOM.render(<Nav innerHTML={navHtml} />, nav)
	}

	// }
	// add jquery to all elements, even react
	$(".wp-site-blocks").one("DOMSubtreeModified", () => {
		inputJquery.makeOutline("red")
	})

	// const reviewButton
})
