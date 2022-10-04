wp.blocks.registerBlockType("iolblock/header", {
	title: "Iol Header",
	
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
