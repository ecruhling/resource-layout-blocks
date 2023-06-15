/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { convertStylesStringToObject } from '../../../lib/convertStylesStringToObject';

/**
 * The Block save function
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function save( { attributes } ) {
	const blockProps = useBlockProps.save( {
		className,
		style: convertStylesStringToObject( inlineStyles ),
	} );

	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return <div { ...innerBlocksProps } />;
}
