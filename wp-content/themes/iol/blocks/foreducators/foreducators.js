wp.blocks.registerBlockType("iolblock/foreducators", {
	title: "For Educators page",

	edit: () => {
		return wp.element.createElement(
			"div",
			{
				className: "our-placeholder-block",
			},
			"for educators page"
		)
	},
	save: () => {
		return null
	},
})
