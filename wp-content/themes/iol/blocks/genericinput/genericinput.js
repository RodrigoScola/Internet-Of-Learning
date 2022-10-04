import { registerBlockType } from '@wordpress/blocks';
import '../../css/style.scss';
import {
	PanelBody,
	PanelRow,
	ColorPalette,
	ToolbarGroup,
	ToolbarButton,
	Popover,
	Button,
} from '@wordpress/components';

import { colors } from '../../inc/js/colors';
import {
	RichText,
	BlockControls,
	InspectorControls,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
registerBlockType( 'ourblocktheme/genericinput', {
	title: 'Generic input',
	edit: EditComponent,
	save: SaveComponent,
	icon: 'heading',
	attributes: {
		label: {
			type: 'string',
			default: 'label',
		},
		placeholder: {
			type: 'string',
			default: 'placeholder text',
		},
	},
} );

function EditComponent( props ) {
	const { label, placeholder } = props.attributes;
	return (
		<div className="formInput mb-1">
			<label class="subtitle left  subtitle-xsm bold">
				<RichText
					tagName="p"
					className="subtitle bold left subtitle-xsm"
					onChange={ ( e ) => {
						props.setAttributes( {
							label: e,
						} );
					} }
					value={ label }
				/>
			</label>
			<input placeholder={ placeholder } class="input" required />
		</div>
	);
}

function SaveComponent( props ) {
	const { label, placeholder } = props.attributes;
	return (
		<div className=" mv-1">
			<label class="subtitle left  subtitle-xsm bold">{ label }</label>
			<input
				placeholder={ placeholder }
				class="input"
				type="email"
				required
			/>
		</div>
	);
}
