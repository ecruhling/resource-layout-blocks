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
} from '@wordpress/block-editor';
import {
	CheckboxControl,
	PanelBody,
	SelectControl,
	PanelRow,
	RangeControl,
	TabPanel,
	CardBody,
	Card,
	Flex,
	FlexItem,
	CardHeader,
} from '@wordpress/components';

/**
 * Styles are applied only to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Custom components.
 */
import ColumnsDisplay from './columnsDisplay';

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
		verticalAlignment,
		isFluid,
		tagName: TagName = 'div',
		baseColumns,
		baseDisplay,
		baseOffset,
		baseAlignItems,
		baseAlignSelf,
		baseJustifyContent,
		baseOrder,
		baseMarginTop,
		baseMarginBottom,
		baseMarginLeft,
		baseMarginRight,
		basePaddingTop,
		basePaddingBottom,
		basePaddingLeft,
		basePaddingRight,
		SmMarginTop,
		SmMarginBottom,
		SmMarginLeft,
		SmMarginRight,
		SmPaddingTop,
		SmPaddingBottom,
		SmPaddingLeft,
		SmPaddingRight,
		SmDisplay,
		SmCol,
		SmOffset,
		SmFlexBasis,
		SmAlignSelf,
		MdMarginTop,
		MdMarginBottom,
		MdMarginLeft,
		MdMarginRight,
		MdPaddingTop,
		MdPaddingBottom,
		MdPaddingLeft,
		MdPaddingRight,
		MdDisplay,
		MdCol,
		MdOffset,
		MdFlexBasis,
		MdAlignSelf,
		LgMarginTop,
		LgMarginBottom,
		LgMarginLeft,
		LgMarginRight,
		LgPaddingTop,
		LgPaddingBottom,
		LgPaddingLeft,
		LgPaddingRight,
		LgDisplay,
		LgCol,
		LgOffset,
		LgFlexBasis,
		LgAlignSelf,
		XlMarginTop,
		XlMarginBottom,
		XlMarginLeft,
		XlMarginRight,
		XlPaddingTop,
		XlPaddingBottom,
		XlPaddingLeft,
		XlPaddingRight,
		XlDisplay,
		XlCol,
		XlOffset,
		XlFlexBasis,
		XlAlignSelf,
		XxlMarginTop,
		XxlMarginBottom,
		XxlMarginLeft,
		XxlMarginRight,
		XxlPaddingTop,
		XxlPaddingBottom,
		XxlPaddingLeft,
		XxlPaddingRight,
		XxlDisplay,
		XxlCol,
		XxlOffset,
		XxlFlexBasis,
		XxlAlignSelf,
	} = attributes;

	const classes = classnames({
		[`is-vertically-aligned-${verticalAlignment}`]: verticalAlignment,
		'container': !isFluid,
		'container-fluid': isFluid,
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
					onChange={(value) => setAttributes({verticalAlignment: value})}
					value={verticalAlignment}
				/>
			</BlockControls>
			<InspectorControls>
				<Card>
					<CardHeader isBorderless={true} isShady={true}
											size='small'>{__('CONTAINER', 'resource-layout-blocks')}</CardHeader>
					<CardBody size='small'>
						<Flex wrap={true}>
							<FlexItem>
								<SelectControl
									__nextHasNoMarginBottom
									label={__('HTML element', 'resource-layout-blocks')}
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
							</FlexItem>
							<FlexItem>
								<CheckboxControl
									label={__('Fluid', 'resource-layout-blocks')}
									checked={isFluid}
									onChange={(value) => setAttributes({isFluid: value})}
								/>
							</FlexItem>
						</Flex>
					</CardBody>
				</Card>
				<TabPanel
					className='breakpoint-tab-panel'
					activeClass='is-active'
					orientation='horizontal'
					tabs={[
						{
							name: 'base',
							title: '—',
							className: 'breakpoint-tab',
							content:
								<Card>
									<ColumnsDisplay
										attributes={attributes}
										columns={baseColumns}
										display={baseDisplay}
										offset={baseOffset}
										setColumns={baseColumns => setAttributes({baseColumns})}
										setDisplay={baseDisplay => setAttributes({baseDisplay})}
										setOffset={baseOffset => setAttributes({baseOffset})}
									></ColumnsDisplay>
									<CardHeader isBorderless={true} isShady={true} size='small'>PADDING</CardHeader>
									<CardBody size='small'>
										<Flex wrap={true}>
											<FlexItem>
												<SelectControl label={__('Top', 'resource-layout-blocks')}
																			 value={basePaddingTop}
																			 options={[
																				 {value: '', label: __('Select Value', 'resource-layout-blocks')},
																				 {value: '0', label: __('0', 'resource-layout-blocks')},
																				 {value: '1', label: __('1', 'resource-layout-blocks')},
																				 {value: '2', label: __('2', 'resource-layout-blocks')},
																				 {value: '3', label: __('3', 'resource-layout-blocks')},
																				 {value: '4', label: __('4', 'resource-layout-blocks')},
																				 {value: '5', label: __('5', 'resource-layout-blocks')},
																			 ]}
																			 onChange={basePaddingTop => setAttributes({basePaddingTop})}
												/>
											</FlexItem>
											<FlexItem>
												<SelectControl label={__('Right', 'resource-layout-blocks')}
																			 value={basePaddingRight}
																			 options={[
																				 {value: '', label: __('Select Value', 'resource-layout-blocks')},
																				 {value: '0', label: __('0', 'resource-layout-blocks')},
																				 {value: '1', label: __('1', 'resource-layout-blocks')},
																				 {value: '2', label: __('2', 'resource-layout-blocks')},
																				 {value: '3', label: __('3', 'resource-layout-blocks')},
																				 {value: '4', label: __('4', 'resource-layout-blocks')},
																				 {value: '5', label: __('5', 'resource-layout-blocks')},
																			 ]}
																			 onChange={basePaddingRight => setAttributes({basePaddingRight})}
												/>
											</FlexItem>
											<FlexItem>
												<SelectControl label={__('Bottom', 'resource-layout-blocks')}
																			 value={basePaddingBottom}
																			 options={[
																				 {value: '', label: __('Select Value', 'resource-layout-blocks')},
																				 {value: '0', label: __('0', 'resource-layout-blocks')},
																				 {value: '1', label: __('1', 'resource-layout-blocks')},
																				 {value: '2', label: __('2', 'resource-layout-blocks')},
																				 {value: '3', label: __('3', 'resource-layout-blocks')},
																				 {value: '4', label: __('4', 'resource-layout-blocks')},
																				 {value: '5', label: __('5', 'resource-layout-blocks')},
																			 ]}
																			 onChange={basePaddingBottom => setAttributes({basePaddingBottom})}
												/>
											</FlexItem>
											<FlexItem>
												<SelectControl label={__('Left', 'resource-layout-blocks')}
																			 value={basePaddingLeft}
																			 options={[
																				 {value: '', label: __('Select Value', 'resource-layout-blocks')},
																				 {value: '0', label: __('0', 'resource-layout-blocks')},
																				 {value: '1', label: __('1', 'resource-layout-blocks')},
																				 {value: '2', label: __('2', 'resource-layout-blocks')},
																				 {value: '3', label: __('3', 'resource-layout-blocks')},
																				 {value: '4', label: __('4', 'resource-layout-blocks')},
																				 {value: '5', label: __('5', 'resource-layout-blocks')},
																			 ]}
																			 onChange={basePaddingLeft => setAttributes({basePaddingLeft})}
												/>
											</FlexItem>
										</Flex>
									</CardBody>
									<CardHeader isBorderless={true} isShady={true} size='small'>MARGIN</CardHeader>
									<CardBody size='small'>
										<Flex wrap={true}>
											<FlexItem>
												<SelectControl label={__('Top', 'resource-layout-blocks')}
																			 value={baseMarginTop}
																			 options={[
																				 {value: '', label: __('Select Value', 'resource-layout-blocks')},
																				 {value: '0', label: __('0', 'resource-layout-blocks')},
																				 {value: '1', label: __('1', 'resource-layout-blocks')},
																				 {value: '2', label: __('2', 'resource-layout-blocks')},
																				 {value: '3', label: __('3', 'resource-layout-blocks')},
																				 {value: '4', label: __('4', 'resource-layout-blocks')},
																				 {value: '5', label: __('5', 'resource-layout-blocks')},
																				 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
																			 ]}
																			 onChange={baseMarginTop => setAttributes({baseMarginTop})}
												/>
											</FlexItem>
											<FlexItem>
												<SelectControl label={__('Right', 'resource-layout-blocks')}
																			 value={baseMarginRight}
																			 options={[
																				 {value: '', label: __('Select Value', 'resource-layout-blocks')},
																				 {value: '0', label: __('0', 'resource-layout-blocks')},
																				 {value: '1', label: __('1', 'resource-layout-blocks')},
																				 {value: '2', label: __('2', 'resource-layout-blocks')},
																				 {value: '3', label: __('3', 'resource-layout-blocks')},
																				 {value: '4', label: __('4', 'resource-layout-blocks')},
																				 {value: '5', label: __('5', 'resource-layout-blocks')},
																				 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
																			 ]}
																			 onChange={baseMarginRight => setAttributes({baseMarginRight})}
												/>
											</FlexItem>
											<FlexItem>
												<SelectControl label={__('Bottom', 'resource-layout-blocks')}
																			 value={baseMarginBottom}
																			 options={[
																				 {value: '', label: __('Select Value', 'resource-layout-blocks')},
																				 {value: '0', label: __('0', 'resource-layout-blocks')},
																				 {value: '1', label: __('1', 'resource-layout-blocks')},
																				 {value: '2', label: __('2', 'resource-layout-blocks')},
																				 {value: '3', label: __('3', 'resource-layout-blocks')},
																				 {value: '4', label: __('4', 'resource-layout-blocks')},
																				 {value: '5', label: __('5', 'resource-layout-blocks')},
																				 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
																			 ]}
																			 onChange={baseMarginBottom => setAttributes({baseMarginBottom})}
												/>
											</FlexItem>
											<FlexItem>
												<SelectControl label={__('Left', 'resource-layout-blocks')}
																			 value={baseMarginLeft}
																			 options={[
																				 {value: '', label: __('Select Value', 'resource-layout-blocks')},
																				 {value: '0', label: __('0', 'resource-layout-blocks')},
																				 {value: '1', label: __('1', 'resource-layout-blocks')},
																				 {value: '2', label: __('2', 'resource-layout-blocks')},
																				 {value: '3', label: __('3', 'resource-layout-blocks')},
																				 {value: '4', label: __('4', 'resource-layout-blocks')},
																				 {value: '5', label: __('5', 'resource-layout-blocks')},
																				 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
																			 ]}
																			 onChange={baseMarginLeft => setAttributes({baseMarginLeft})}
												/>
											</FlexItem>
										</Flex>
									</CardBody>
									<CardHeader isBorderless={true} isShady={true} size='small'>ALIGN & JUSTIFY</CardHeader>
									<CardBody size='small'>
										<Flex wrap={true}>
											<FlexItem>
												<SelectControl label={__('Align Items', 'resource-layout-blocks')}
																			 value={baseAlignItems}
																			 options={[
																				 {value: '', label: __('Select Option', 'resource-layout-blocks')},
																				 {value: 'start', label: __('Start', 'resource-layout-blocks')},
																				 {value: 'center', label: __('Center', 'resource-layout-blocks')},
																				 {value: 'end', label: __('End', 'resource-layout-blocks')},
																			 ]}
																			 onChange={baseAlignItems => setAttributes({baseAlignItems})}
												/>
											</FlexItem>
											<FlexItem>
												<SelectControl label={__('Align Self', 'resource-layout-blocks')}
																			 value={baseAlignSelf}
																			 options={[
																				 {value: '', label: __('Select Option', 'resource-layout-blocks')},
																				 {value: 'start', label: __('Start', 'resource-layout-blocks')},
																				 {value: 'center', label: __('Center', 'resource-layout-blocks')},
																				 {value: 'end', label: __('End', 'resource-layout-blocks')},
																			 ]}
																			 onChange={baseAlignSelf => setAttributes({baseAlignSelf})}
												/>
											</FlexItem>
											<FlexItem>
												<SelectControl label={__('Justify Content', 'resource-layout-blocks')}
																			 value={baseJustifyContent}
																			 options={[
																				 {value: '', label: __('Select Option', 'resource-layout-blocks')},
																				 {value: 'start', label: __('Start', 'resource-layout-blocks')},
																				 {value: 'center', label: __('Center', 'resource-layout-blocks')},
																				 {value: 'end', label: __('End', 'resource-layout-blocks')},
																				 {value: 'around', label: __('Around', 'resource-layout-blocks')},
																				 {value: 'between', label: __('Between', 'resource-layout-blocks')},
																				 {value: 'evenly', label: __('Evenly', 'resource-layout-blocks')},
																			 ]}
																			 onChange={baseJustifyContent => setAttributes({baseJustifyContent})}
												/>
											</FlexItem>
										</Flex>
									</CardBody>
									<CardHeader isBorderless={true} isShady={true} size='small'>ORDER</CardHeader>
									<CardBody size='small'>
										<Flex wrap={true}>
											<FlexItem>
												<SelectControl label={__('Order', 'resource-layout-blocks')}
																			 value={baseOrder}
																			 options={[
																				 {value: '', label: __('Select Option', 'resource-layout-blocks')},
																				 {value: 'first', label: __('First', 'resource-layout-blocks')},
																				 {value: '1', label: __('1', 'resource-layout-blocks')},
																				 {value: '2', label: __('2', 'resource-layout-blocks')},
																				 {value: '3', label: __('3', 'resource-layout-blocks')},
																				 {value: '4', label: __('4', 'resource-layout-blocks')},
																				 {value: '5', label: __('5', 'resource-layout-blocks')},
																				 {value: 'last', label: __('Last', 'resource-layout-blocks')},
																			 ]}
																			 onChange={baseOrder => setAttributes({baseOrder})}
												/>
											</FlexItem>
										</Flex>
									</CardBody>
								</Card>,
						},
						{
							name: 'small',
							title: 'SM',
							className: 'breakpoint-tab',
							content: <p>Small Tab</p>,
						},
						{
							name: 'medium',
							title: 'MD',
							className: 'breakpoint-tab',
							content: <p>Medium Tab</p>,
						},
						{
							name: 'large',
							title: 'LG',
							className: 'breakpoint-tab',
							content: <p>Large Tab</p>,
						},
						{
							name: 'extra-large',
							title: 'XL',
							className: 'breakpoint-tab',
							content: <p>Extra Large Tab</p>,
						},
						{
							name: 'extra-extra-large',
							title: 'XXL',
							className: 'breakpoint-tab',
							content: <p>Extra Extra Large Tab</p>,
						},
					]}
				>
					{({content, className}) =>
						<div className={className}>
							{content}
						</div>}
				</TabPanel>
				<PanelBody title={__('SM Settings', 'resource-layout-blocks')} initialOpen={false}>
					<PanelRow>
						<RangeControl label={__('Column Size', 'resource-layout-blocks')}
													value={SmCol}
													allowReset={true}
													onChange={SmCol => setAttributes({SmCol})}
													min={1}
													max={12}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Column Offset', 'resource-layout-blocks')}
													value={SmOffset}
													allowReset={true}
													onChange={SmOffset => setAttributes({SmOffset})}
													min={1}
													max={12}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Align Self', 'resource-layout-blocks')}
													 value={SmAlignSelf}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'start', label: __('Start', 'resource-layout-blocks')},
														 {value: 'end', label: __('End', 'resource-layout-blocks')},
														 {value: 'center', label: __('Center', 'resource-layout-blocks')},
														 {value: 'baseline', label: __('Baseline', 'resource-layout-blocks')},
														 {value: 'stretch', label: __('Stretch', 'resource-layout-blocks')},
													 ]}
													 onChange={SmAlignSelf => setAttributes({SmAlignSelf})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Display value', 'resource-layout-blocks')}
													 value={SmDisplay}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'block', label: __('Block', 'resource-layout-blocks')},
														 {value: 'flex', label: __('Flex', 'resource-layout-blocks')},
														 {value: 'grid', label: __('Grid', 'resource-layout-blocks')},
														 {value: 'inline', label: __('Inline', 'resource-layout-blocks')},
														 {value: 'inline-block', label: __('Inline-Block', 'resource-layout-blocks')},
														 {value: 'none', label: __('None', 'resource-layout-blocks')},
													 ]}
													 onChange={SmDisplay => setAttributes({SmDisplay})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Flex Basis', 'resource-layout-blocks')}
													 value={SmFlexBasis}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'auto', label: __('Auto', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')}]}
													 onChange={SmFlexBasis => setAttributes({SmFlexBasis})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Top', 'resource-layout-blocks')}
													 value={SmMarginTop}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={SmMarginTop => setAttributes({SmMarginTop})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Bottom', 'resource-layout-blocks')}
													 value={SmMarginBottom}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={SmMarginBottom => setAttributes({SmMarginBottom})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Left', 'resource-layout-blocks')}
													 value={SmMarginLeft}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={SmMarginLeft => setAttributes({SmMarginLeft})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Right', 'resource-layout-blocks')}
													 value={SmMarginRight}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={SmMarginRight => setAttributes({SmMarginRight})}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Top', 'resource-layout-blocks')}
													value={SmPaddingTop}
													allowReset={true}
													onChange={SmPaddingTop => setAttributes({SmPaddingTop})}
													min={0}
													max={7}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Bottom', 'resource-layout-blocks')}
													value={SmPaddingBottom}
													allowReset={true}
													onChange={SmPaddingBottom => setAttributes({SmPaddingBottom})}
													min={0}
													max={7}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Left', 'resource-layout-blocks')}
													value={SmPaddingLeft}
													allowReset={true}
													onChange={SmPaddingLeft => setAttributes({SmPaddingLeft})}
													min={0}
													max={7}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Right', 'resource-layout-blocks')}
													value={SmPaddingRight}
													allowReset={true}
													onChange={SmPaddingRight => setAttributes({SmPaddingRight})}
													min={0}
													max={7}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={__('MD Settings', 'resource-layout-blocks')} initialOpen={false}>
					<PanelRow>
						<RangeControl label={__('Column Size', 'resource-layout-blocks')}
													value={MdCol}
													allowReset={true}
													onChange={MdCol => setAttributes({MdCol})}
													min={1}
													max={12}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Column Offset', 'resource-layout-blocks')}
													value={MdOffset}
													allowReset={true}
													onChange={MdOffset => setAttributes({MdOffset})}
													min={1}
													max={12}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Align Self', 'resource-layout-blocks')}
													 value={MdAlignSelf}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'start', label: __('Start', 'resource-layout-blocks')},
														 {value: 'end', label: __('End', 'resource-layout-blocks')},
														 {value: 'center', label: __('Center', 'resource-layout-blocks')},
														 {value: 'baseline', label: __('Baseline', 'resource-layout-blocks')},
														 {value: 'stretch', label: __('Stretch', 'resource-layout-blocks')},
													 ]}
													 onChange={MdAlignSelf => setAttributes({MdAlignSelf})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Display value', 'resource-layout-blocks')}
													 value={MdDisplay}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'block', label: __('Block', 'resource-layout-blocks')},
														 {value: 'flex', label: __('Flex', 'resource-layout-blocks')},
														 {value: 'grid', label: __('Grid', 'resource-layout-blocks')},
														 {value: 'inline', label: __('Inline', 'resource-layout-blocks')},
														 {value: 'inline-block', label: __('Inline-Block', 'resource-layout-blocks')},
														 {value: 'none', label: __('None', 'resource-layout-blocks')},
													 ]}
													 onChange={MdDisplay => setAttributes({MdDisplay})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Flex Basis', 'resource-layout-blocks')}
													 value={MdFlexBasis}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'auto', label: __('Auto', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')}]}
													 onChange={MdFlexBasis => setAttributes({MdFlexBasis})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Top', 'resource-layout-blocks')}
													 value={MdMarginTop}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={MdMarginTop => setAttributes({MdMarginTop})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Bottom', 'resource-layout-blocks')}
													 value={MdMarginBottom}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={MdMarginBottom => setAttributes({MdMarginBottom})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Left', 'resource-layout-blocks')}
													 value={MdMarginLeft}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={MdMarginLeft => setAttributes({MdMarginLeft})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Right', 'resource-layout-blocks')}
													 value={MdMarginRight}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={MdMarginRight => setAttributes({MdMarginRight})}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Top', 'resource-layout-blocks')}
													value={MdPaddingTop}
													allowReset={true}
													onChange={MdPaddingTop => setAttributes({MdPaddingTop})}
													min={0}
													max={7}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Bottom', 'resource-layout-blocks')}
													value={MdPaddingBottom}
													allowReset={true}
													onChange={MdPaddingBottom => setAttributes({MdPaddingBottom})}
													min={0}
													max={7}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Left', 'resource-layout-blocks')}
													value={MdPaddingLeft}
													allowReset={true}
													onChange={MdPaddingLeft => setAttributes({MdPaddingLeft})}
													min={0}
													max={7}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Right', 'resource-layout-blocks')}
													value={MdPaddingRight}
													allowReset={true}
													onChange={MdPaddingRight => setAttributes({MdPaddingRight})}
													min={0}
													max={7}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={__('LG Settings', 'resource-layout-blocks')} initialOpen={false}>
					<PanelRow>
						<RangeControl label={__('Column Size', 'resource-layout-blocks')}
													value={LgCol}
													allowReset={true}
													onChange={LgCol => setAttributes({LgCol})}
													min={1}
													max={12}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Column Offset', 'resource-layout-blocks')}
													value={LgOffset}
													allowReset={true}
													onChange={LgOffset => setAttributes({LgOffset})}
													min={1}
													max={12}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Align Self', 'resource-layout-blocks')}
													 value={LgAlignSelf}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'start', label: __('Start', 'resource-layout-blocks')},
														 {value: 'end', label: __('End', 'resource-layout-blocks')},
														 {value: 'center', label: __('Center', 'resource-layout-blocks')},
														 {value: 'baseline', label: __('Baseline', 'resource-layout-blocks')},
														 {value: 'stretch', label: __('Stretch', 'resource-layout-blocks')},
													 ]}
													 onChange={LgAlignSelf => setAttributes({LgAlignSelf})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Display value', 'resource-layout-blocks')}
													 value={LgDisplay}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'block', label: __('Block', 'resource-layout-blocks')},
														 {value: 'flex', label: __('Flex', 'resource-layout-blocks')},
														 {value: 'grid', label: __('Grid', 'resource-layout-blocks')},
														 {value: 'inline', label: __('Inline', 'resource-layout-blocks')},
														 {value: 'inline-block', label: __('Inline-Block', 'resource-layout-blocks')},
														 {value: 'none', label: __('None', 'resource-layout-blocks')},
													 ]}
													 onChange={LgDisplay => setAttributes({LgDisplay})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Flex Basis', 'resource-layout-blocks')}
													 value={LgFlexBasis}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'auto', label: __('Auto', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')}]}
													 onChange={LgFlexBasis => setAttributes({LgFlexBasis})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Top', 'resource-layout-blocks')}
													 value={LgMarginTop}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={LgMarginTop => setAttributes({LgMarginTop})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Bottom', 'resource-layout-blocks')}
													 value={LgMarginBottom}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={LgMarginBottom => setAttributes({LgMarginBottom})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Left', 'resource-layout-blocks')}
													 value={LgMarginLeft}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={LgMarginLeft => setAttributes({LgMarginLeft})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Right', 'resource-layout-blocks')}
													 value={LgMarginRight}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={LgMarginRight => setAttributes({LgMarginRight})}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Top', 'resource-layout-blocks')}
													value={LgPaddingTop}
													allowReset={true}
													onChange={LgPaddingTop => setAttributes({LgPaddingTop})}
													min={0}
													max={7}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Bottom', 'resource-layout-blocks')}
													value={LgPaddingBottom}
													allowReset={true}
													onChange={LgPaddingBottom => setAttributes({LgPaddingBottom})}
													min={0}
													max={7}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Left', 'resource-layout-blocks')}
													value={LgPaddingLeft}
													allowReset={true}
													onChange={LgPaddingLeft => setAttributes({LgPaddingLeft})}
													min={0}
													max={7}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Right', 'resource-layout-blocks')}
													value={LgPaddingRight}
													allowReset={true}
													onChange={LgPaddingRight => setAttributes({LgPaddingRight})}
													min={0}
													max={7}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={__('XL Settings', 'resource-layout-blocks')} initialOpen={false}>
					<PanelRow>
						<RangeControl label={__('Column Size', 'resource-layout-blocks')}
													value={XlCol}
													allowReset={true}
													onChange={XlCol => setAttributes({XlCol})}
													min={1}
													max={12}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Column Offset', 'resource-layout-blocks')}
													value={XlOffset}
													allowReset={true}
													onChange={XlOffset => setAttributes({XlOffset})}
													min={1}
													max={12}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Align Self', 'resource-layout-blocks')}
													 value={XlAlignSelf}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'start', label: __('Start', 'resource-layout-blocks')},
														 {value: 'end', label: __('End', 'resource-layout-blocks')},
														 {value: 'center', label: __('Center', 'resource-layout-blocks')},
														 {value: 'baseline', label: __('Baseline', 'resource-layout-blocks')},
														 {value: 'stretch', label: __('Stretch', 'resource-layout-blocks')},
													 ]}
													 onChange={XlAlignSelf => setAttributes({XlAlignSelf})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Display value', 'resource-layout-blocks')}
													 value={XlDisplay}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'block', label: __('Block', 'resource-layout-blocks')},
														 {value: 'flex', label: __('Flex', 'resource-layout-blocks')},
														 {value: 'grid', label: __('Grid', 'resource-layout-blocks')},
														 {value: 'inline', label: __('Inline', 'resource-layout-blocks')},
														 {value: 'inline-block', label: __('Inline-Block', 'resource-layout-blocks')},
														 {value: 'none', label: __('None', 'resource-layout-blocks')},
													 ]}
													 onChange={XlDisplay => setAttributes({XlDisplay})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Flex Basis', 'resource-layout-blocks')}
													 value={XlFlexBasis}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'auto', label: __('Auto', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')}]}
													 onChange={XlFlexBasis => setAttributes({XlFlexBasis})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Top', 'resource-layout-blocks')}
													 value={XlMarginTop}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={XlMarginTop => setAttributes({XlMarginTop})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Bottom', 'resource-layout-blocks')}
													 value={XlMarginBottom}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={XlMarginBottom => setAttributes({XlMarginBottom})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Left', 'resource-layout-blocks')}
													 value={XlMarginLeft}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={XlMarginLeft => setAttributes({XlMarginLeft})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Right', 'resource-layout-blocks')}
													 value={XlMarginRight}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={XlMarginRight => setAttributes({XlMarginRight})}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Top', 'resource-layout-blocks')}
													value={XlPaddingTop}
													allowReset={true}
													onChange={XlPaddingTop => setAttributes({XlPaddingTop})}
													min={0}
													max={7}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Bottom', 'resource-layout-blocks')}
													value={XlPaddingBottom}
													allowReset={true}
													onChange={XlPaddingBottom => setAttributes({XlPaddingBottom})}
													min={0}
													max={7}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Left', 'resource-layout-blocks')}
													value={XlPaddingLeft}
													allowReset={true}
													onChange={XlPaddingLeft => setAttributes({XlPaddingLeft})}
													min={0}
													max={7}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Right', 'resource-layout-blocks')}
													value={XlPaddingRight}
													allowReset={true}
													onChange={XlPaddingRight => setAttributes({XlPaddingRight})}
													min={0}
													max={7}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={__('XXL Settings', 'resource-layout-blocks')} initialOpen={false}>
					<PanelRow>
						<RangeControl label={__('Column Size', 'resource-layout-blocks')}
													value={XxlCol}
													allowReset={true}
													onChange={XxlCol => setAttributes({XxlCol})}
													min={1}
													max={12}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Column Offset', 'resource-layout-blocks')}
													value={XxlOffset}
													allowReset={true}
													onChange={XxlOffset => setAttributes({XxlOffset})}
													min={1}
													max={12}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Align Self', 'resource-layout-blocks')}
													 value={XxlAlignSelf}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'start', label: __('Start', 'resource-layout-blocks')},
														 {value: 'end', label: __('End', 'resource-layout-blocks')},
														 {value: 'center', label: __('Center', 'resource-layout-blocks')},
														 {value: 'baseline', label: __('Baseline', 'resource-layout-blocks')},
														 {value: 'stretch', label: __('Stretch', 'resource-layout-blocks')},
													 ]}
													 onChange={XxlAlignSelf => setAttributes({XxlAlignSelf})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Display value', 'resource-layout-blocks')}
													 value={XxlDisplay}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'block', label: __('Block', 'resource-layout-blocks')},
														 {value: 'flex', label: __('Flex', 'resource-layout-blocks')},
														 {value: 'grid', label: __('Grid', 'resource-layout-blocks')},
														 {value: 'inline', label: __('Inline', 'resource-layout-blocks')},
														 {value: 'inline-block', label: __('Inline-Block', 'resource-layout-blocks')},
														 {value: 'none', label: __('None', 'resource-layout-blocks')},
													 ]}
													 onChange={XxlDisplay => setAttributes({XxlDisplay})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Flex Basis', 'resource-layout-blocks')}
													 value={XxlFlexBasis}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'auto', label: __('Auto', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')}]}
													 onChange={XxlFlexBasis => setAttributes({XxlFlexBasis})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Top', 'resource-layout-blocks')}
													 value={XxlMarginTop}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={XxlMarginTop => setAttributes({XxlMarginTop})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Bottom', 'resource-layout-blocks')}
													 value={XxlMarginBottom}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={XxlMarginBottom => setAttributes({XxlMarginBottom})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Left', 'resource-layout-blocks')}
													 value={XxlMarginLeft}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={XxlMarginLeft => setAttributes({XxlMarginLeft})}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl label={__('Margin Right', 'resource-layout-blocks')}
													 value={XxlMarginRight}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={XxlMarginRight => setAttributes({XxlMarginRight})}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Top', 'resource-layout-blocks')}
													value={XxlPaddingTop}
													allowReset={true}
													onChange={XxlPaddingTop => setAttributes({XxlPaddingTop})}
													min={0}
													max={7}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Bottom', 'resource-layout-blocks')}
													value={XxlPaddingBottom}
													allowReset={true}
													onChange={XxlPaddingBottom => setAttributes({XxlPaddingBottom})}
													min={0}
													max={7}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Left', 'resource-layout-blocks')}
													value={XxlPaddingLeft}
													allowReset={true}
													onChange={XxlPaddingLeft => setAttributes({XxlPaddingLeft})}
													min={0}
													max={7}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl label={__('Padding Right', 'resource-layout-blocks')}
													value={XxlPaddingRight}
													allowReset={true}
													onChange={XxlPaddingRight => setAttributes({XxlPaddingRight})}
													min={0}
													max={7}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<TagName {...blockProps}>
				<InnerBlocks placeholder={__('Insert Rows', 'resource-layout-blocks')} />
			</TagName>
		</>
	);
}
