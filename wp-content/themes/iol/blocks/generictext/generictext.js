import { registerBlockType } from '@wordpress/blocks';
import '../../css/style.scss';

import {
	RichText,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
registerBlockType( 'ourblocktheme/Title', {
	title: 'Iol Title',
	edit: EditComponent,
	save: SaveComponent,
	icon: 'text',
	attributes: {
		text: {
			type: 'string',
			default: '',
		},
	},
} );

function EditComponent( props ) {
	const { text } = props.attributes;
	return (
		<>
			<RichText
				tagName="h1"
				value={ text }
				className={ `subtitle left  w-100` }
				onChange={ ( e ) => {
					props.setAttributes( {
						text: e,
					} );
				} }
			/>
		</>
	);
}

function SaveComponent( props ) {
	const { text } = props.attributes;
	return (
		<RichText.Content
			tagName="h1"
			value={ text }
			className={ 'text-title bold' }
		/>
	);
}
