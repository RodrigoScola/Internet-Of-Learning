import React from "react"
import { DashBoardButton } from "../../utilComponents/buttons"
import { HeaderButtons } from "../../utilComponents/User/HeaderButtons"
export const MegaMenu = ({ categories }) => {
	return (
		<div className=" container black p-2 mt-2 w-80 ">
			<ul className="min-list mt-04">
				<li className="text-title text-center black bold">Categories</li>
				{categories.map((v, key) => (
					<li key={key}>
						<a className="text-center" href={v.link}>
							{v.name}
						</a>
					</li>
				))}
			</ul>
			<DashBoardButton />
			<HeaderButtons />
		</div>
	)
}
