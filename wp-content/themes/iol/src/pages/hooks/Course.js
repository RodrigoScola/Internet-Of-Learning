import apiFetch from "@wordpress/api-fetch"
export class Course {
	#_id
	constructor(id) {
		this.id = id;
		this.#_id = this.id
	}
	getDefaultItems({
		filled = false
	}) {
		if (filled == true) {
			return {
				courseName: "Building my Car Empire",
				coursePublisher: "Rodrigo Scola",
				courseLink:
					"https://medium.com/geekculture/how-to-upload-and-preview-images-in-react-js-4e22a903f3db",
				courseCategory: [],
				courseEntryLevel: "Beginner",
				courseTimeInvestment: 10,
				courseHighlights: [
					"In-depth 3-module program for beginner or intermediate artists",
					"Assignments And Exercises to Accelerate Your Learning",
					"Feedback on your art from our own Evenant tutors",
					"Private Visual Storytelling Community Group",
					"Over-the-shoulder Creation of Illustrations and Paintings",
					"Lifetime Access, Including Updates",
				],
				courseImage: "",
				courseBanner: "",
				courseDescription:
					"3D is such an amazing tool to use for Concept Art and Illustration. I’ve been using it for my professional artworks and illustrations for over a decade now and I just love this workflow. I wanted to share my knowledge with other artists, so I decided to create this course – 3D for Artists.",
				courseValue: "it has some value",
				courseOutcome: "it has some outcome",
				instructorName: "Rodrigo Scola",
				instructorImage: [],
				instructorExperience:
					"Adrian is a Concept Artist based in Spain, working in the video game industry,with a background in environment and character design, and a realistic visual style. Adrian has worked on a variety of different projects and game titles, including HIVE: Altenum Wars at Catness Game Studios as a Lead Concept Artist, Sons of Dawn, with the Narrative Designer Kiko Blasco, and Arker: The Legend of Ohm from Arker Labs, in which he created high end illustrations in in-game content and promotional art, as well as environment pieces and keyframe paintings. You can find more info on Adrian’s work at his website: https://hevenurion.com/.",
			}
		}
		return {
			courseName: "",
			coursePublisher: "",
			courseLink: "",
			courseCategory: 0,
			courseEntryLevel: "",
			courseTimeInvestment: 0,
			courseHighlights: [
				''
			],
			courseImage: [],
			courseBanner: "",
			courseDescription:
				"",
			courseValue: "",
			courseOutcome: "",
			instructorName: "",
			instructorImage: [],
			instructorExperience:
				"",
		}
		
	}
	
	log() {
		console.log(this)
	}
	async deleteCourse() {
		apiFetch({
			headers: {
				"X-WP-Nonce": ioldata.nonce,
			},
			url: "/wp-json/iol/v1/courses",
			data: {
				courseId: this.#_id,
				
			},
			method: "DELETE",
		}).then((id) => {
			return id
		})
	}
	
	/**
	 * @param {('draft'|'publish'|'private')} visibility
	 * @memberof Course
	 */
	async changeVisibility(visibility) {
		apiFetch({
			headers: {
				'X-WP-Nonce': ioldata.nonce
			},
			url: "/wp-json/iol/v1/course-visibility",
			data: {
				courseId: this.id,
				visibility_type: visibility,
			},
			method: "POST",
		}).then((id) => {
               return id 
		})
	}
}
