import React from "react"

export const ClaimCourseButton = ({ text = "Claim Your Course", color = "yellow", props }) => {
	return (
		<a className={`btn btn-${color} bold `} href={`${ioldata.root_url}/new-course`}>
			{text}
		</a>
	)
}
export const LogInButton = ({ text = "Log In", params = "" }) => {
	return (
		<a className="btn btn-blue" href={`/register/?${params}`}>
			{text}
		</a>
	)
}
export const DashBoardButton = ({}) => {
	if (ioldata.user_id !== 0) {
		return (
			<a href={ioldata.root_url + "/dashboard"} className="btn btn-blue white ">
				Dashboard
			</a>
		)
	}
	return <LogInButton />
}
export const CreateAccountLink = () => {
	if (ioldata.user_id !== 0) {
		return (
			<>
				<p>Don't have an account?</p>
				<a className="blue" href={`${ioldata.root_url}/register`}>
					Create one
				</a>
			</>
		)
	}
	return <></>
}
