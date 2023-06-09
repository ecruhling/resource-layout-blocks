/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import classnames from 'classnames';
import { omit } from 'lodash';
import { convertStylesStringToObject } from '../../../lib/convertStylesStringToObject';

/**
 * The Block save function
 *
 * @param {Object} root0
 * @param {Object} root0.attributes
 * @return {JSX.Element} React Element.
 * @class
 */
export default function save( { attributes } ) {
	const { tagName: TagName = 'div', inlineStyles } = attributes;

	const classNameAttributes = omit( attributes, [
		'anchor',
		'tagName',
		'inlineStyles',
		'className',
	] );

	const className = classnames( 'row', Object.values( classNameAttributes ) );

	const blockProps = useBlockProps.save( {
		className,
		style: convertStylesStringToObject( inlineStyles ),
	} );

	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return <TagName { ...innerBlocksProps } />;
}
