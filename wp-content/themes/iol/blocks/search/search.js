import { registerBlockType } from "@wordpress/blocks"
import {Button} from '@wordpress/components'
import { RichText, BlockControls,  } from "@wordpress/block-editor"
import { search} from "@wordpress/icons"
import { ToolbarGroup, ToolbarButton, ToolbarDropdownMenu } from "@wordpress/components"

registerBlockType("iolblock/search", {
	title: "Search Bar",
	edit: EditComponent,
	save: saveComponents,

	attributes: {
		text: {
			type: "string",
			default:"whats on your maind"
		}
	},
})

function EditComponent(props) {
	return <div style={{
		textAlign: 'center',

	}}> 
		<input placeholder={props.attributes.text} />
	<Button  className="btn btn--yellow btn--small" icon={search}>Find My Course</Button>
	</div>
}
function saveComponents(props) {
	return null
}
