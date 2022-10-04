import React from "react"

export const StepItem = ({ count = 0, title = "", completed = false, current = false }) => {
	return (
		<div class="center-items mr-2">
			{completed == true ? (
				<div className="align-center">
					<i class="bi align-center bi-check-lg mr-02 border border-circle border-lightgreen bg-teal   text-title text-md bold ph-02 pv-02 yellow"></i>
				</div>
			) : (
				<p class=" mr-03 border border-circle border-lightgreen bg-lightgreen darkgray  text-title text-md bold ph-04 pv-01 white">
					{count}
				</p>
			)}
			<p class={`align-center ${completed == true || current == true ? "black" : "gray"} w-fit`}>{title}</p>
		</div>
	)
}
