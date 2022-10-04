wp.blocks.registerBlockType("iolblock/confirmationsingle", {
	title: "Confirmation Single",

	edit: () => {
		return wp.element.createElement(
			"div",
			{
				className: "our-placeholder-block",
			},
			"Header will go here"
		)
	},
	save: () => {
		return null
	},
})
