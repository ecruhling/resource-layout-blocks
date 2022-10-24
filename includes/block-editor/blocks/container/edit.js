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
	TextControl,
} from '@wordpress/components';
import {useSelect} from '@wordpress/data';
import {store as blockEditorStore} from '@wordpress/block-editor';

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
	edit({
			 attributes,
			 setAttributes,
		 }) {

	const {
		alignContent,
		fullHeight,
		isFluid,
		tagName: TagName = 'div',
		customAnchor,
		extraClassesList,
	} = attributes;

	const classes = classnames({
		[`are-vertically-aligned-${alignContent}`]: alignContent,
		'container': !isFluid,
		'container-fluid': isFluid,
		'block-is-full-height': fullHeight,
	});

	const blockProps = useBlockProps({
		className: classes,
	});

	const tagNameMessages = {
		header: __(
			'The <header> element should represent introductory content, typically a group of introductory or navigational aids.'
		),
		main: __(
			'The <main> element should be used for the primary content of your document only. '
		),
		section: __(
			"The <section> element should represent a standalone portion of the document that can't be better represented by another element."
		),
		article: __(
			'The <article> element should represent a self contained, syndicatable portion of the document.'
		),
		aside: __(
			"The <aside> element should represent a portion of a document whose content is only indirectly related to the document's main content."
		),
		footer: __(
			'The <footer> element should represent a footer for its nearest sectioning element (e.g.: <section>, <article>, <main> etc.).'
		),
	};

	const {getBlock} = useSelect(blockEditorStore);

	function setAnchorValue(value) {
		setAttributes({customAnchor: value})
		const clientId = wp.data.select('core/block-editor').getSelectedBlock().clientId;
		// select the item in the list view that corresponds with this block.
		const listViewItem = document.querySelector("a[href='#block-" + clientId + "'][class*='block-editor-list-view-block-select-button']");
		// select the span element
		const spanElement = listViewItem.querySelector("span[class*='block-editor-list-view-block-select-button__anchor']");
		// if value is empty, remove the spanElement
		if (value === '') {
			listViewItem.removeChild(spanElement);
		} else {
			// else, check if spanElement exists first
			if (spanElement) {
				// if so, set it to value
				spanElement.innerHTML = value;
			} else {
				// otherwise, create it and set it to value
				let span = document.createElement('span');
				span.classList.add('block-editor-list-view-block-select-button__anchor');
				span.innerHTML = value;
				listViewItem.appendChild(span);
			}
		}
	}

	const listViewBlocks = document.querySelectorAll('.block-editor-list-view-leaf');
	if (listViewBlocks) {
		listViewBlocks.forEach(function (block) {
			const id = block.getAttribute('data-block');
			// TODO check here for what kind of block, if not container, don't do anything.
			const anchor = getBlock(id).attributes.customAnchor;
			if(anchor !== undefined && anchor !== '') {
				// select the span element
				const spanElement = block.querySelector("span[class*='block-editor-list-view-block-select-button__anchor']");
				if (!spanElement) {
					let span = document.createElement('span');
					span.classList.add('block-editor-list-view-block-select-button__anchor');
					span.innerHTML = anchor;
					block.querySelector('a').appendChild(span);
				}
			}
		});
	}

	return (
		<>
			<BlockControls>
				<BlockVerticalAlignmentToolbar
					onChange={(value) => setAttributes({alignContent: value})}
					value={alignContent}
				/>
				<FullHeightAlignmentControl
					isActive={fullHeight}
					onToggle={(value) => setAttributes({fullHeight: value})}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__('Container Attributes', 'resource')}>
					<TextControl
						className='html-anchor-control'
						label={__('HTML anchor', 'resource')}
						value={customAnchor}
						onChange={(value) => setAnchorValue(value)}
						autoCapitalize='none'
						autoComplete='off'
					/>
					<TextControl
						label={__('Extra CSS Classes', 'resource')}
						value={extraClassesList}
						onChange={(value) => setAttributes({extraClassesList: value})}
						autoCapitalize='none'
					/>
					<SelectControl label={__('HTML Tag', 'resource')}
								   value={TagName}
								   options={[
									   {label: __('Default (<div>)'), value: 'div'},
									   {label: '<header>', value: 'header'},
									   {label: '<main>', value: 'main'},
									   {label: '<section>', value: 'section'},
									   {label: '<article>', value: 'article'},
									   {label: '<aside>', value: 'aside'},
									   {label: '<footer>', value: 'footer'},
								   ]}
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
				<InnerBlocks placeholder={__('Insert Rows', 'resource')}/>
			</TagName>
		</>
	);
}
