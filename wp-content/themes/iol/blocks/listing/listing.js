wp.blocks.registerBlockType("iolblock/listing", {
	title: "Other listing",

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
