// import React, { useState } from 'react';
// import { useDisclosure } from '../hooks/useDisclosure';
// import { Icon } from './Icon';
// import { AlertDialog, AlertDialogHeader } from './ui/Alert';
// import apiFetch from "@wordpress/api-fetch"

// export const ReviewComponent = ({
//      title = 'Building car Empire',
//      initialScore = 3,

// }) => {
//      const [reviewContent, setReviewContent] = useState('');
//      const [count, setCount] = useState(initialScore)
//      const { isOpen, onClose, onOpen, ontoggle } = useDisclosure()
//      const [reviewScore, setReviewScore] = useState(0);

//      console.log(reviewScore)

//      const submitReview =async  () => {
// 		const data = await apiFetch({
// 			url:  "/wp-json/iol/v1/review",
//                type: "POST",
// 			headers: {
// 				"X-WP-Nonce": ioldata.nonce,
//                },
//                data: {
// 				course_id: ioldata.post_id,
// 				user_id: ioldata.user_id,
// 				score:  reviewScore > 0 ? reviewScore : initialScore,
//                     content: reviewContent,

// 			},
// 		}).then((res) => {
// 			console.log(res)
// 		})
// }

//      // $.ajax({
// // 			beforeSend: (xhr) => {
// // 				xhr.setRequestHeader("X-WP-Nonce", ioldata.nonce)
// // 			},
// // 			url: ioldata.root_url + "/wp-json/iol/v1/review",
// // 			type: "POST",
// // 			data: {
// // 				course_id: ioldata.post_id,
// // 				user_id: ioldata.user_id,
// // 				score: this.score,
// // 				content: $("#review-experience").val(),
// // 			},
// // 			success: (res) => {
// // 				console.log(res, "res")
// // 			},
// // 			error: (res) => {
// // 				console.log(res, "err")
// // 			},
// // 		})
//      return (
// 		<>
//                <button onClick={(e) => {
//                     onOpen()
//                     e.preventDefault()
//                }} className="btn white btn-blue">
// 				Write a Review
// 			</button>
// 			<AlertDialog isOpen={isOpen} onClose={onClose}>
// 				<aside className="black">
// 					<h1 className="text text-title bold black">{title}</h1>
// 					<p>
// 						Write down your experience with the course and the educator. You are helping The Internet
// 						of Learning and The Course a lot!
// 					</p>
// 				</aside>
// 				<aside>
// 					<p className="text-left black bold">*Rating</p>

//                          <div onMouseLeave={() => setCount(reviewScore > 0 ? reviewScore : initialScore)} id='starReviews' className=' text-left flex flex-row mv-2 flex-left'>
//                               {
//                                    new Array(5).fill(null).map((v, i) => {
//                                         return (
// 									<div
// 										onClick={() => {
// 											setReviewScore(i + 1)
// 										}}
// 										onMouseEnter={() => setCount(i)}
// 										className={`reviewStar ${
// 											count <= i || reviewScore <= i && reviewScore > 0 ? "gray" : "yellow"
// 										}`}
// 									>
// 										<Icon iconName="star" />
// 									</div>
// 								)
//                                    })
//                               }

//                          </div>
// 					<textarea value={reviewContent} maxLength={280} onChange={e => setReviewContent(e.target.value)}></textarea>
// 					<p className="black text-left">({280 - reviewContent.length})Characters remaining</p>
// 				</aside>
// 				<div className="flex flex-row flex-right">
// 					<button onClick={onClose} className="btn ph-2 btn-red-hollow">
// 						Cancel
// 					</button>
// 					<button onClick={submitReview} className="btn mh-3 btn-yellow bold">Submit Review</button>
// 				</div>
// 			</AlertDialog>
// 		</>
// 	)
// }
