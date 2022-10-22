/**
 * WordPress dependencies.
 */
import {InnerBlocks} from '@wordpress/block-editor';

/**
 * The Block save function.
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function save() {
	return (
		<InnerBlocks.Content/>
	);
}
