/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

/**
 * The Block save function.
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function ContainerBlockSave({ attributes }) {
	const {isFluid, alignContent, fullHeight} = attributes;
	const className = classnames( {
		[ `are-vertically-aligned-${ alignContent }` ]: alignContent,
		'container': !isFluid,
		'container-fluid': isFluid,
		'block-is-full-height': fullHeight,
	} );
	const blockProps = useBlockProps.save({ className });

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
