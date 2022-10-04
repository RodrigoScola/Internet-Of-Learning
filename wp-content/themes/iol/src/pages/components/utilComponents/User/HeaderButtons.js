import React from "react"
import { ClaimCourseButton, CreateAccountLink, DashBoardButton } from "../buttons"

export const HeaderButtons = () => {
	if (ioldata.user_id == "0") {
		return (
			<div className="flex">
				<ClaimCourseButton />
				<DashBoardButton />
				<CreateAccountLink />
			</div>
		)
	}
	return <></>
}
