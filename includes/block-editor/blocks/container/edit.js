/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import {__} from '@wordpress/i18n';
import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
	BlockVerticalAlignmentToolbar,
	BlockControls,
	__experimentalBlockFullHeightAligmentControl as FullHeightAlignmentControl,
} from '@wordpress/block-editor';
import {CheckboxControl, PanelBody} from "@wordpress/components";

/**
 * Styles are applied only to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The Block edit function.
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function
	ContainerBlockEdit({
						   attributes,
						   setAttributes,
					   }) {

	const {isFluid, alignContent, fullHeight} = attributes;
	const classes = classnames({
		[`are-vertically-aligned-${alignContent}`]: alignContent,
		'container': !isFluid,
		'container-fluid': isFluid,
		'block-is-full-height': fullHeight,
	});
	const blockProps = useBlockProps({
		className: classes,
	});

	return (
		<>
			<BlockControls>
				<BlockVerticalAlignmentToolbar
					onChange={(alignment) => setAttributes({alignContent: alignment})}
					value={alignContent}
				/>
				<FullHeightAlignmentControl
					isActive={fullHeight}
					onToggle={(height) => setAttributes({fullHeight: height})}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__('Fluid', 'resource-layout-blocks')}>
					<CheckboxControl
						label={__('Fluid', 'resource-layout-blocks')}
						checked={isFluid}
						onChange={(isChecked) => {
							setAttributes({isFluid: isChecked});
						}}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<InnerBlocks placeholder={__('Insert Rows', 'resource-layout-blocks')}/>
			</div>
		</>
	);
}
