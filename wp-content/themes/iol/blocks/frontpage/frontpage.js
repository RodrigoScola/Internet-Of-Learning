wp.blocks.registerBlockType("iolblock/frontpage", {
	title: "Iol frontpage",
	
	edit: () => {
		return wp.element.createElement(
			"div",
			{
				className: "our-placeholder-block",
			},
			"This is the front page"
		)
	},
	save: () => {
		return null
	},
})
