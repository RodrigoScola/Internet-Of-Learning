wp.blocks.registerBlockType("iolblock/confirmation", {
	title: "confirmation header",

	edit: () => {
		return wp.element.createElement(
			"div",
			{
				className: "our-placeholder-block",
			},
			"2page header will go here"
		)
	},
	save: () => {
		return null
	},
})
