wp.blocks.registerBlockType("iolblock/aboutus", {
	title: "about header",

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
