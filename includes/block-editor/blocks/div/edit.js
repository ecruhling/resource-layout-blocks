/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { convertStylesStringToObject } from '../../../lib/convertStylesStringToObject';

/**
 * Styles are applied only to the editor
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The Block edit function
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function edit( { attributes, setAttributes } ) {
	return (
		<div { ...blockProps }>
			<InnerBlocks placeholder={ __( 'Insert Blocks', 'resource' ) } />
		</div>
	);
}
