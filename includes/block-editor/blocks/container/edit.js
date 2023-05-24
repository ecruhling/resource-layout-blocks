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
import {
	CheckboxControl,
	PanelBody,
	SelectControl,
} from '@wordpress/components';

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
	edit ({
					attributes,
					setAttributes,
				}) {

	const {
		alignContent,
		minHeight,
		isFluid,
		tagName: TagName = 'div',
	} = attributes;

	const classes = classnames({
		[`are-vertically-aligned-${alignContent}`]: alignContent,
		'container': !isFluid,
		'container-fluid': isFluid,
		'block-is-full-height': minHeight,
	});

	const blockProps = useBlockProps({
		className: classes,
	});

	const tagNameMessages = {
		header: __(
			'The <header> element should represent introductory content, typically a group of introductory or navigational aids.',
		),
		main: __(
			'The <main> element should be used for the primary content of your document only. ',
		),
		section: __(
			'The <section> element should represent a standalone portion of the document that can\'t be better represented by another element.',
		),
		article: __(
			'The <article> element should represent a self contained, syndicatable portion of the document.',
		),
		aside: __(
			'The <aside> element should represent a portion of a document whose content is only indirectly related to the document\'s main content.',
		),
		footer: __(
			'The <footer> element should represent a footer for its nearest sectioning element (e.g.: <section>, <article>, <main> etc.).',
		),
	};

	return (
		<>
			<BlockControls>
				<BlockVerticalAlignmentToolbar
					onChange={(value) => setAttributes({alignContent: value})}
					value={alignContent}
				/>
				<FullHeightAlignmentControl
					isActive={minHeight}
					onToggle={(value) => setAttributes({minHeight: value})}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__('Container Attributes', 'resource')}>
					<SelectControl
						__nextHasNoMarginBottom
						label={__('HTML element', 'resource')}
						options={[
							{label: __('Default (<div>)'), value: 'div'},
							{label: '<header>', value: 'header'},
							{label: '<main>', value: 'main'},
							{label: '<section>', value: 'section'},
							{label: '<article>', value: 'article'},
							{label: '<aside>', value: 'aside'},
							{label: '<footer>', value: 'footer'},
						]}
						value={TagName}
						onChange={(value) =>
							setAttributes({tagName: value})
						}
						help={tagNameMessages[TagName]}
					/>
					<CheckboxControl
						label={__('Fluid', 'resource')}
						checked={isFluid}
						onChange={(value) => setAttributes({isFluid: value})}
					/>
				</PanelBody>
			</InspectorControls>
			<TagName {...blockProps}>
				<InnerBlocks placeholder={__('Insert Rows', 'resource')} />
			</TagName>
		</>
	);
}
