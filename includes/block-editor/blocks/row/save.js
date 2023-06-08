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
 * The Block save function
 *
 * @param {Object} root0
 * @param {Object} root0.attributes
 * @return {JSX.Element} React Element.
 * @class
 */
export default function save( { attributes } ) {
	const { tagName: TagName = 'div' } = attributes;

	const classNameAttributes = omit( attributes, [
		'anchor',
		'tagName',
		'className',
	] );

	const className = classnames( 'row', Object.values( classNameAttributes ) );

	const blockProps = useBlockProps.save( {
		className,
	} );

	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return <TagName { ...innerBlocksProps } />;
}
