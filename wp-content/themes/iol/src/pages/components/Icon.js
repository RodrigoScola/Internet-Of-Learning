import React, { useState, useEffect } from "react"

// php and react are using different icons, need to create new folder to store the icons or invent a different solution

export const GetIcon = async (iconname) => {
	const icon = await import("../../../icons/ArrowUp.svg")
	console.log(icon.default)
	return icon
}
/**
 *
 *
 * @param {(beginner|intermediate|advanced)} { iconName = '' }
 */

export const Icon = ({ iconName = "" }) => {
	const [currIcon, SetCurrIcon] = useState("")
	useEffect(() => {
		if (iconName) {
			SetCurrIcon(iconName.toLowerCase())
		}
	}, [iconName])
	console.log(getIcon("asdf"))
	switch (currIcon) {
		case "list":
			return (
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.5 13.85C4.7 13.85 4.875 13.775 5.025 13.625C5.175 13.475 5.25 13.3 5.25 13.1C5.25 12.9 5.175 12.725 5.025 12.575C4.875 12.425 4.7 12.35 4.5 12.35C4.3 12.35 4.125 12.425 3.975 12.575C3.825 12.725 3.75 12.9 3.75 13.1C3.75 13.3 3.825 13.475 3.975 13.625C4.125 13.775 4.3 13.85 4.5 13.85ZM4.5 9.75C4.7 9.75 4.875 9.675 5.025 9.525C5.175 9.375 5.25 9.2 5.25 9C5.25 8.8 5.175 8.625 5.025 8.475C4.875 8.325 4.7 8.25 4.5 8.25C4.3 8.25 4.125 8.325 3.975 8.475C3.825 8.625 3.75 8.8 3.75 9C3.75 9.2 3.825 9.375 3.975 9.525C4.125 9.675 4.3 9.75 4.5 9.75ZM4.5 5.65C4.7 5.65 4.875 5.575 5.025 5.425C5.175 5.275 5.25 5.1 5.25 4.9C5.25 4.7 5.175 4.525 5.025 4.375C4.875 4.225 4.7 4.15 4.5 4.15C4.3 4.15 4.125 4.225 3.975 4.375C3.825 4.525 3.75 4.7 3.75 4.9C3.75 5.1 3.825 5.275 3.975 5.425C4.125 5.575 4.3 5.65 4.5 5.65ZM7.8 13.85H13.9V12.35H7.8V13.85ZM7.8 9.75H13.9V8.25H7.8V9.75ZM7.8 5.65H13.9V4.15H7.8V5.65ZM1.5 18C1.1 18 0.75 17.85 0.45 17.55C0.15 17.25 0 16.9 0 16.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H16.5C16.9 0 17.25 0.15 17.55 0.45C17.85 0.75 18 1.1 18 1.5V16.5C18 16.9 17.85 17.25 17.55 17.55C17.25 17.85 16.9 18 16.5 18H1.5ZM1.5 16.5H16.5V1.5H1.5V16.5ZM1.5 1.5V16.5V1.5Z"
						fill="currentColor"
					/>
				</svg>
			)
		case "beginner":
			return (
				<>
					<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<mask id="path-1-inside-1_2168_1481" fill="white">
							<path d="M0 6.5H3V9.5H0V6.5Z" />
							<path d="M4.5 3.5H7.5V9.5H4.5V3.5Z" />
							<path d="M9 0.5H12V9.5H9V0.5Z" />
						</mask>
						<path d="M0 6.5H3V9.5H0V6.5Z" fill="#282828" />
						<path
							d="M0 6.5V5.75H-0.75V6.5H0ZM3 6.5H3.75V5.75H3V6.5ZM3 9.5V10.25H3.75V9.5H3ZM0 9.5H-0.75V10.25H0V9.5ZM4.5 3.5V2.75H3.75V3.5H4.5ZM7.5 3.5H8.25V2.75H7.5V3.5ZM7.5 9.5V10.25H8.25V9.5H7.5ZM4.5 9.5H3.75V10.25H4.5V9.5ZM9 0.5V-0.25H8.25V0.5H9ZM12 0.5H12.75V-0.25H12V0.5ZM12 9.5V10.25H12.75V9.5H12ZM9 9.5H8.25V10.25H9V9.5ZM0 7.25H3V5.75H0V7.25ZM2.25 6.5V9.5H3.75V6.5H2.25ZM3 8.75H0V10.25H3V8.75ZM0.75 9.5V6.5H-0.75V9.5H0.75ZM4.5 4.25H7.5V2.75H4.5V4.25ZM6.75 3.5V9.5H8.25V3.5H6.75ZM7.5 8.75H4.5V10.25H7.5V8.75ZM5.25 9.5V3.5H3.75V9.5H5.25ZM9 1.25H12V-0.25H9V1.25ZM11.25 0.5V9.5H12.75V0.5H11.25ZM12 8.75H9V10.25H12V8.75ZM9.75 9.5V0.5H8.25V9.5H9.75Z"
							fill="#282828"
							mask="url(#path-1-inside-1_2168_1481)"
						/>
					</svg>
				</>
			)
		case "intermediate":
			return (
				<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<mask id="path-1-inside-1_2168_3193" fill="white">
						<path d="M0 6.5H3V9.5H0V6.5Z" />
						<path d="M4.5 3.5H7.5V9.5H4.5V3.5Z" />
						<path d="M9 0.5H12V9.5H9V0.5Z" />
					</mask>
					<path d="M0 6.5H3V9.5H0V6.5Z" fill="#282828" />
					<path d="M4.5 3.5H7.5V9.5H4.5V3.5Z" fill="#282828" />
					<path
						d="M0 6.5V5.75H-0.75V6.5H0ZM3 6.5H3.75V5.75H3V6.5ZM3 9.5V10.25H3.75V9.5H3ZM0 9.5H-0.75V10.25H0V9.5ZM4.5 3.5V2.75H3.75V3.5H4.5ZM7.5 3.5H8.25V2.75H7.5V3.5ZM7.5 9.5V10.25H8.25V9.5H7.5ZM4.5 9.5H3.75V10.25H4.5V9.5ZM9 0.5V-0.25H8.25V0.5H9ZM12 0.5H12.75V-0.25H12V0.5ZM12 9.5V10.25H12.75V9.5H12ZM9 9.5H8.25V10.25H9V9.5ZM0 7.25H3V5.75H0V7.25ZM2.25 6.5V9.5H3.75V6.5H2.25ZM3 8.75H0V10.25H3V8.75ZM0.75 9.5V6.5H-0.75V9.5H0.75ZM4.5 4.25H7.5V2.75H4.5V4.25ZM6.75 3.5V9.5H8.25V3.5H6.75ZM7.5 8.75H4.5V10.25H7.5V8.75ZM5.25 9.5V3.5H3.75V9.5H5.25ZM9 1.25H12V-0.25H9V1.25ZM11.25 0.5V9.5H12.75V0.5H11.25ZM12 8.75H9V10.25H12V8.75ZM9.75 9.5V0.5H8.25V9.5H9.75Z"
						fill="#282828"
						mask="url(#path-1-inside-1_2168_3193)"
					/>
				</svg>
			)
		case "advanced":
			return (
				<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M0.375 6.875H2.625V9.125H0.375V6.875ZM4.875 3.875H7.125V9.125H4.875V3.875ZM9.375 0.875H11.625V9.125H9.375V0.875Z"
						fill="#282828"
						stroke="#282828"
						stroke-width="0.75"
					/>
				</svg>
			)
		case "star":
			return (
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8 12.4298L11.9892 15.3326C12.6217 15.8029 13.4811 15.1704 13.2379 14.4245L11.7135 9.73793L15.6541 6.9325C16.3028 6.47844 15.9785 5.45681 15.1839 5.45681H10.3514L8.77839 0.559465C8.53514 -0.186488 7.48108 -0.186488 7.23783 0.559465L5.64863 5.45681H0.816148C0.0215454 5.45681 -0.302782 6.47844 0.345873 6.9325L4.28645 9.73793L2.76211 14.4245C2.51887 15.1704 3.37833 15.7866 4.01077 15.3326L8 12.4298Z"
						fill="currentColor"
					/>
				</svg>
			)
		default:
			return <></>
	}
}
