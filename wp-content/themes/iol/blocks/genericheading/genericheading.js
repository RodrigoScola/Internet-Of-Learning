import { registerBlockType } from '@wordpress/blocks';
import { RichText, BlockControls } from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu,
} from '@wordpress/components';

registerBlockType( 'iolblock/genericheading', {
	title: 'Generic heading',
	edit: Genericheading,
	save: saveComponents,

	attributes: {
		text: {
			type: 'string',
			default: 'Default value of the Title',
		},
		align: {
			type: 'string',
			default: 'center',
		},
		size: {
			type: 'string',
			default: 'medium',
		},
		type: {
			default: 'h1',
			type: 'string',
		},
	},
} );

export default function Genericheading( props ) {
	const { text, size, align, type } = props.attributes;
	const allowedSizes = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p' ];
	const setAttr = ( e ) => {
		props.setAttributes( {
			[ e.target.name ]: e.target.value,
		} );
	};
	console.log( size );
	return (
		<>
			<BlockControls>
				<ToolbarDropdownMenu
					label="Select Size"
					controls={ allowedSizes.map( ( v, i ) => {
						return {
							title: v,
							onClick: () => {
								props.setAttributes( {
									type: v,
								} );
							},
						};
					} ) }
				/>

				<ToolbarGroup>
					<ToolbarButton
						isPressed={ align == 'left' }
						name="align"
						value="left"
						onClick={ setAttr }
					>
						Left
					</ToolbarButton>
					<ToolbarButton
						isPressed={ align == 'center' }
						name="align"
						value="center"
						onClick={ setAttr }
					>
						Center
					</ToolbarButton>
					<ToolbarButton
						isPressed={ align == 'right' }
						name="align"
						value="right"
						onClick={ setAttr }
					>
						Right
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				tagName={ type }
				style={ {
					textAlign: align,
				} }
				onChange={ ( e ) => {
					props.setAttributes( {
						text: e,
					} );
				} }
			></RichText>
		</>
	);
}
function saveComponents( props ) {
	return null;
}
