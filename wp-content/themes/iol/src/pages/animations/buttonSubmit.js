import $ from 'jquery'



export class AnimHandler {
     constructor() {
          this.init()
     }
     init() {
          this.buttonSubmit();
     }
     buttonSubmit() {
          const buttonName = ".buttonSubmit";
           $(buttonName).on("click", () => {
				$(buttonName)
					.addClass("onclic", 250)
					.queue((next) => {
						setTimeout( () => {
							$(buttonName).removeClass("onclic")
							$(buttonName).addClass("validate", 450)
							next()
						}, 2250)
					})
					.queue((next) => {
						setTimeout( () => {
							$(buttonName).removeClass("validate")
						}, 1250)
						next()
					})
			})
     }
}