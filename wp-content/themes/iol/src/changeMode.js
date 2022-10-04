import $ from "jquery"
export class ChangeMode {
	constructor(elements = []) {
		this.events()
	}
	events() {
		$("#change-mode").on("click", this.changeMode.bind(this))
	}
     changeMode() {
          $(".changeMode").toggleClass("courses gridcol-3 gap-2")
          $(".changeMode > div").toggleClass("course-card_list")
		return false
	}
}
