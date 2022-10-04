// import $ from "jquery"
// export class ReviewTab {
// 	constructor() {
// 		this.events()
// 		this.score = 0;
// 		this.content = '';

// 	}
// 	events() {
// 		$(".addReview").one("click", this.openMenu)
// 		$(document).on("keyup", this.charRemain)
// 		$("#starReviews").on("set-rating", (e) => {
// 			this.score = $("#starReviews").data("rating")
// 			console.table(this.score, $("#starReviews").data('rating'))
// 		})
// 		$("#review-submit").on('click',this.submitReview.bind(this))
		
// 	}
// 	submitReview() {
		
		
// 		$.ajax({
// 			beforeSend: (xhr) => {
// 				xhr.setRequestHeader("X-WP-Nonce", ioldata.nonce)
// 			},
// 			url: ioldata.root_url + "/wp-json/iol/v1/review",
// 			type: "POST",
// 			data: {
// 				course_id: ioldata.post_id,
// 				user_id: ioldata.user_id,
// 				score: this.score,
// 				content: $("#review-experience").val(),
// 			},
// 			success: (res) => {
// 				console.log(res, "res")
// 			},
// 			error: (res) => {
// 				console.log(res, "err")
// 			},
// 		})
// 	}

// 	openMenu(e) {
// 		e.preventDefault()
// 		if (ioldata.user_id == '0') {
// 			$(location).attr('href', `${ioldata.root_url}/login`)
			
// 		}
// 		window.scroll({
// 			top: 0,
// 			behavior: "smooth",
// 		})
		
// 		$(".review").addClass("container ph-4 bg-white mt-4")
		
// 		$(document).on({
// 			click: function (event) {
// 				if ($(event.target).closest(".review").length === 0) {
// 					$("#reviewDiv").toggleClass("invisible")
// 				}
// 			},
// 		})
// 	}
// 	charRemain(e) {
// 		if (e.target.id == "review-experience") {
// 			this.content = $("#review-experience").val()
// 			console.log(this.content)
// 			$("#remaining-characters").html(`(${280 - e.target.value.length}) characsters remaining `)
// 		}
// 	}
// }
// export class ReviewStars {
// 	constructor() {
// 		this.div = $("#starReviews")
// 		this.stars = $("#starReviews .reviewStar");
// 		this.score = $("#starReviews").data('initialscore');
// 		this.events()
// 	}
// 	events() {
// 		console.log(this.score)
// 		this.stars.on({
// 			mouseenter: this.starHover.bind(this),
			
// 			click: this.setRating.bind(this)
// 		})
// 		this.div.on({
// 			mouseleave: this.resetStars.bind(this),
// 		})

		
// 	}
// 	setRating(e) {
// 		const value = $(e.target).closest("label").data("star");
// 		this.div.data('rating', value)
// 		this.div.trigger("set-rating")

		
// 	$(".reviewStar").each((i, obj) => {
// 		const star = $(obj)
// 		if (star.data("star") <= value) {
// 			star.addClass("yellow")
// 		} else {
// 			star.addClass("gray")
// 		}
// 	})


// 	}
// 	resetStars() {
// 		if (this.score !== 0) return null
// 		$(".reviewStar").each((i, obj) => {
// 			const curr = $(obj);
// 			curr.removeClass('yellow')
// 			curr.addClass('gray')
// 		})
// 	}
// 	starHover(e) {
// 		const currStar = $(e.target).closest('.reviewStar');
// 		if (currStar.data('star')) {
// 			$(".reviewStar").each((i, obj) => {
// 				const star = $(obj)
// 				if (star.data('star') <= currStar.data('star')) {
// 					star.addClass('yellow')
// 					star.removeClass('gray')
// 					console.log(star.hasClass('yellow'))
// 				} else {
// 					star.removeClass("yellow")
// 					star.addClass('gray')
// 				}
// 		})
			
// 		}
		
// 	}
// }