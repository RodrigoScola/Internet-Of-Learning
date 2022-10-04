
wp.blocks.registerBlockType("iolblock/footer", {
	title: "Iol Footer Component",

	edit: (props) => {
		return wp.element.createElement(
			"div",
			{
				className: "our-placeholder-block footer",
			},
			"Footer Component"
		)
	},
	save: () => {
		return null
	},
})
