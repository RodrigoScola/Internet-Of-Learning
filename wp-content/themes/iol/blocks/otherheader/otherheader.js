wp.blocks.registerBlockType("iolblock/otherheader", {
	title: "Other header",

	edit: () => {
		return wp.element.createElement(
			"div",
			{
				className: "our-placeholder-block",
			},
			"3page header will go here"
		)
	},
	save: () => {
		return null
	},
})
