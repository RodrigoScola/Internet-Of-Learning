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
const getIcon = async (iconname) => {
	const str = "../../../icons/ArrowUp.svg"
	const icon = await import("../../../icons/ArrowUp.svg")
	console.log(icon)
	return icon
}
window.addEventListener("load", () => {
	const headernav = document.querySelector("#header_mobile")
	ReactDOM.render(<Header innerHTML={headernav.innerHTML} />, headernav)

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

$("input[name=payment]").on("change", () => {
	const value = $("input[name=payment]:checked").val()

	const cards = {
		creditCard: `
     <div class=''>
           <label class='text-xsm text-title m-0 bold'>
                    *Card Name
                    <input name='card_name' class='input mb-1' required />
          </label>
     <div class=''>
           <label class='text-xsm text-title m-0 bold'>
                    *Card Number
                    <input type="number" name='card_number' maxlegnth='10' class='input mb-1' required />
          </label>
     </div>
     <div class='gridcol-2 gap-2'>
            <label class='text-xsm text-title m-0 bold'>
                    *Expiration Date
                    <input name='card_date' type="date" class='input mb-1' required />
          </label>
          <label class='text-xsm text-title m-0 bold'>
                    *CVV
                    <input name='cvv' type="number" maxlength='3' class='input mb-1' required />
          </label>
     </div>
     </div>
     `,
		stripe: `
     
          <div>
          <label class='text-xsm text-title m-0 bold'>
                    *Card Number 
                    <input name='card_number_stripe' type="number" class='input mb-1' required />
          </label>
          </div>
     `,
	}

	$("#payment-options").html(cards[value])
})
