/**
 * WordPress dependencies.
 */
import {InnerBlocks} from '@wordpress/block-editor';

/**
 * The Block save function.
 *
 * Even though this is a dynamic block, it needs the save function to save any InnerBlocks contained within.
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function save() {
	return (
		<InnerBlocks.Content/>
	);
}
