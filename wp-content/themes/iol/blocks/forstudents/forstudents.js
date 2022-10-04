wp.blocks.registerBlockType("iolblock/forstudents", {
	title: "for Students page",

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
