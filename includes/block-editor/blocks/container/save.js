/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import classnames from 'classnames';
import { omit } from 'lodash';

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
	const { isFluid, tagName: TagName = 'div', inlineStyles } = attributes;

	const classNameAttributes = omit( attributes, [
		'anchor',
		'isFluid',
		'tagName',
		'inlineStyles',
		'className',
	] );

	const className = classnames(
		{
			container: ! isFluid,
			'container-fluid': isFluid,
		},
		Object.values( classNameAttributes )
	);

	const blockProps = useBlockProps.save( {
		className,
		style: convertStylesStringToObject( inlineStyles ),
	} );

	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return <TagName { ...innerBlocksProps } />;
}
