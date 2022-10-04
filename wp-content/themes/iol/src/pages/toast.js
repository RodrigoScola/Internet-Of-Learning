import React from "react"
import ReactDom from "react-dom"
import toast, {Toaster} from 'react-hot-toast'
window.addEventListener("load", () => {
	const div = document.querySelectorAll("#single-test-toast")
	div.forEach((elem) => {
		ReactDom.render(<RenderComponent />, elem)
	})
})
function RenderComponent() {
	const notify = (e) => {
	toast.success('hello ther',)
	
}
	
	return (
		<div className="">
		
			<section>
				<h1 className="text-title text-center bold">Directions</h1>
				<div className="w-40 m-auto">
					<button name={"top-center"} onClick={notify} className="btn zoom-in_click btn-blue-hollow">
						Toast Up
					</button>
					<button name="bottom-center" onClick={notify} className="btn zoom-in_click btn-blue-hollow">
						Toast down
					</button>
					<button name="bottom-left" onClick={notify} className="btn zoom-in_click btn-blue-hollow">
						Toast bottom left
					</button>
					<button name="bottom-right" onClick={notify} className="btn zoom-in_click btn-blue-hollow">
						Toast bottom right
					</button>
				</div>
			</section>
			<section>
				<h1 className="text-title text-center bold">Types</h1>
				<section className="w-40 m-auto">
					<button className="btn btn-red-hollow">Danger</button>
					<button className="btn btn-green-hollow">Success</button>
					<button className="btn btn-yellow-hollow">custom style</button>
				</section>
			</section>
			<section>
				<h1>custom Toasts</h1>
				<section>
					<button className="btn btn-yellow">Create An Account</button>
				</section>
			</section>
			<Toaster
				toastOptions={{}}
				containerStyle={{
					bottom: 20,
				}}
			/>
		</div>
	)
}
