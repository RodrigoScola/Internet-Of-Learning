import React, { useState, useEffect } from "react"
import ReactDom from "react-dom"
import { Icon } from "./components/Icon"
import { useDisclosure } from "./hooks/useDisclosure"
import { AlertDialog } from "./components/ui/Alert"
import apiFetch from "@wordpress/api-fetch"
import $ from "jquery"

const subitRev = ({ score, content }) => {
	$.ajax({
		beforeSend: (xhr) => {
			xhr.setRequestHeader("X-WP-Nonce", ioldata.nonce)
		},
		url: ioldata.root_url + "/wp-json/iol/v1/review",
		type: "POST",
		data: {
			course_id: ioldata.post_id,
			user_id: ioldata.user_id,
			score: score,
			content: content,
		},
		success: (res) => {},
		error: (res) => {},
	})
}

window.addEventListener("load", () => {
	const divs = document.querySelectorAll(".addReview")
	divs.forEach((item) => {
		ReactDom.render(<ReviewComponent classes={item.getAttribute("data-class")} title={ioldata.slug} />, item)
	})
})
const ReviewComponent = ({ title = ioldata.slug, initialScore = 0, classes = "btn btn-blue" }) => {
	const [reviewContent, setReviewContent] = useState("")
	const [count, setCount] = useState(initialScore)
	const { isOpen, onClose, onOpen, ontoggle } = useDisclosure()
	const [reviewScore, setReviewScore] = useState(0)

	const submitReview = async () => {
		if (reviewScore <= 0 || reviewScore > 5 || !reviewContent) return false
		const data = await apiFetch({
			url: "/wp-json/iol/v1/review",
			data: {
				course_id: ioldata.post_id,
				user_id: ioldata.user_id,
				score: reviewScore,
				content: reviewContent,
			},
			method: "POST",
			headers: {
				"X-WP-Nonce": ioldata.nonce,
			},
		}).then((res) => {
			window.location.reload()
		})
	}

	return (
		<>
			<button
				onClick={(e) => {
					if (ioldata.user_id == 0) {
						window.location.replace(ioldata.root_url + "/login/?path=course")
					}
					onOpen()
					e.preventDefault()
				}}
				className={classes}
			>
				Write a Review
			</button>
			<AlertDialog isOpen={isOpen} onClose={onClose}>
				<aside className="black">
					<h1 className="text text-left text-title bold black">{title.replace(/-/g, " ")}</h1>
					<p className="text-left">
						Write down your experience with the course and the educator. You are helping The Internet
						of Learning and The Course a lot!
					</p>
				</aside>
				<aside>
					<p className="black text-left bold">*Rating</p>

					<div
						onMouseLeave={() => setCount(reviewScore > 0 ? reviewScore : initialScore)}
						id="starReviews"
						className="flex flex-row mv-2 flex-left"
					>
						{new Array(5).fill(null).map((v, i) => {
							return (
								<div
									onClick={() => {
										setReviewScore(i + 1)
									}}
									onMouseEnter={() => setCount(i)}
									className={`reviewStar ${
										count <= i || (reviewScore <= i && reviewScore > 0)
											? "gray"
											: "yellow"
									}`}
								>
									<Icon iconName="star" />
								</div>
							)
						})}
					</div>
					<textarea
						style={{
							width: "100%",
						}}
						value={reviewContent}
						onChange={(e) => setReviewContent(e.target.value)}
					></textarea>
					<p className="text-left black">({280 - reviewContent.length})Characters remaining</p>
				</aside>
				<div className="flex flex-row flex-right">
					<button onClick={onClose} className="btn ph-2 btn-red-hollow">
						Cancel
					</button>
					<button onClick={submitReview} className="btn mh-3 btn-yellow bold">
						Submit Review
					</button>
				</div>
			</AlertDialog>
		</>
	)
}
