/**
 * WordPress dependencies
 */
import {useInnerBlocksProps, useBlockProps} from '@wordpress/block-editor';

/**
 * External dependencies
 */
import classnames from 'classnames';
import {omit} from 'lodash';

/**
 * The Block save function
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function save ({
																attributes,
															}) {

	const {
		tagName: TagName = 'div',
	} = attributes;

	const classNameAttributes = omit(attributes, ['anchor', 'tagName', 'className']);

	const className = classnames(
		'row',
		Object.values(classNameAttributes),
	);

	const blockProps = useBlockProps.save({
		className,
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return (
		<TagName {...innerBlocksProps} />
	);
}
