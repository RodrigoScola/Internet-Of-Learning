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
registerBlockType( 'ourblocktheme/genericbutton', {
	title: 'Generic Button',
	edit: EditComponent,
	save: SaveComponent,
	icon: 'button',
	attributes: {
		text: {
			type: 'string',
			default: 'click me',
		},
		colorName: {
			type: 'string',
			default: 'yellow',
		},
		colorText: {
			type: 'string',
			default: 'black',
		},
		options: {
			type: 'array',
			default: [],
		},
	},
} );

function EditComponent( props ) {
	const { text, colorName, colorText, options } = props.attributes;

	const changeColor = ( color ) => {
		const currC = colors.reduce( ( curr, next ) => {
			if ( next.color == color ) {
				curr = next.name;
			}
			return curr;
		}, '' );
		props.setAttributes( {
			colorName: currC,
		} );
	};
	const addOption = ( option ) => {
		console.log( option );
		console.log( options.indexOf( option ) );
		if ( options.indexOf( option ) == -1 ) {
			options.push( option );
			console.log( options );
		} else {
			props.setAttributes( {
				options: options.filter( ( item ) => item !== option ),
			} );
		}
	};
	const changetextColor = ( color ) => {
		const currC = colors.reduce( ( curr, next ) => {
			if ( next.color == color ) {
				curr = next.name;
			}
			return curr;
		}, '' );
		props.setAttributes( {
			colorText: currC,
		} );
	};

	return (
		<>
			<BlockControls>
				<ToolbarButton
					isPressed={ options.indexOf( 'bold' ) == 0 }
					onClick={ () => addOption( 'bold' ) }
				>
					Bold
				</ToolbarButton>
			</BlockControls>
			<RichText
				tagName="button"
				className={ `btn btn-${ colorName }  ${ colorText }` }
				value={ text }
				onChange={ ( e ) => {
					props.setAttributes( {
						text: e,
					} );
				} }
			/>
			<InspectorControls>
				<PanelBody initialOpen={ true } title="Button Color">
					<PanelRow>
						<ColorPalette
							disableCustomColors
							clearable={ false }
							colors={ colors }
							value={ colorName }
							onChange={ changeColor }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody initialOpen={ true } title="Text Color">
					<PanelRow>
						<ColorPalette
							disableCustomColors
							clearable={ false }
							colors={ colors }
							value={ colorName }
							onChange={ changetextColor }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
}

function SaveComponent( props ) {
	const { text, colorName, colorText } = props.attributes;
	return (
		<button className={ `btn btn-${ colorName } bold ${ colorText }` }>
			{ text }
		</button>
	);
}
