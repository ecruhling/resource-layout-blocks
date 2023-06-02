/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';
import {
	BlockControls,
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	SelectControl,
	TabPanel,
	CardBody,
	Card,
	Flex,
	FlexItem,
	CardHeader,
	PanelBody,
	PanelRow,
	RangeControl, Toolbar, ToolbarItem,
} from '@wordpress/components';

/**
 * External dependencies
 */
import classnames from 'classnames';
import {omit} from 'lodash';

/**
 * Internal dependencies
 */
import {tagNameMessages} from '../../block-help/tagNameMessages';
import DisplayControl from '../../block-controls/displayControl';
import FlexControl from '../../block-controls/flexControl';
import PaddingControl from '../../block-controls/paddingControl';
import MarginControl from '../../block-controls/marginControl';
import AlignControl from '../../block-controls/alignControl';
import ColumnControl from '../../block-controls/columnControl';
import OrderControl from '../../block-controls/orderControl';

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
		baseDisplay,
		baseColumns,
		baseOffset,
		basePaddingTop,
		basePaddingRight,
		basePaddingBottom,
		basePaddingLeft,
		baseMarginTop,
		baseMarginRight,
		baseMarginBottom,
		baseMarginLeft,
		baseAlignText,
		baseFlexDirection,
		baseFillGrowShrink,
		baseWrap,
		baseOrder,
		baseAlignContent,
		baseAlignItems,
		baseAlignSelf,
		baseJustifyContent,
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

	const classNameAttributes = omit(attributes, ['anchor', 'isFluid', 'tagName', 'className']);

	const classes = classnames(
		Object.values(classNameAttributes),
	);

	const blockProps = useBlockProps({
		className: classes,
	});

	return (
		<>
			<BlockControls>
				<Toolbar label='Class Inspector' id='class-inspector'>
					<ToolbarItem as='p'>{classes}</ToolbarItem>
				</Toolbar>
			</BlockControls>
			<InspectorControls>
				<Card>
					<CardHeader isBorderless={true} isShady={true}
											size='small'
											className='resource-card-header'>{__('COLUMN', 'resource-layout-blocks')}</CardHeader>
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
									<DisplayControl
										breakpoint=''
										breakpoint_name=''
										display={baseDisplay}
										setDisplay={baseDisplay => setAttributes({baseDisplay})}
										__nextHasNoMarginBottom
									></DisplayControl>
									{(baseDisplay === 'd-flex' || baseDisplay === 'd-inline-flex') && (
										<FlexControl
											breakpoint=''
											breakpoint_name=''
											flexDirection={baseFlexDirection}
											justifyContent={baseJustifyContent}
											alignItems={baseAlignItems}
											alignSelf={baseAlignSelf}
											fillGrowShrink={baseFillGrowShrink}
											wrap={baseWrap}
											order={baseOrder}
											alignContent={baseAlignContent}
											setFlexDirection={baseFlexDirection => setAttributes({baseFlexDirection})}
											setJustifyContent={baseJustifyContent => setAttributes({baseJustifyContent})}
											setAlignItems={baseAlignItems => setAttributes({baseAlignItems})}
											setAlignSelf={baseAlignSelf => setAttributes({baseAlignSelf})}
											setFillGrowShrink={baseFillGrowShrink => setAttributes({baseFillGrowShrink})}
											setWrap={baseWrap => setAttributes({baseWrap})}
											setOrder={baseOrder => setAttributes({baseOrder})}
											setAlignContent={baseAlignContent => setAttributes({baseAlignContent})}
										>
										</FlexControl>
									)}
									{(baseDisplay !== 'd-none') && (
										<>
											<ColumnControl
												breakpoint=''
												breakpoint_name=''
												columns={baseColumns}
												offset={baseOffset}
												setColumns={baseColumns => setAttributes({baseColumns})}
												setOffset={baseOffset => setAttributes({baseOffset})}
											>
											</ColumnControl>
											<PaddingControl
												breakpoint=''
												breakpoint_name=''
												paddingTop={basePaddingTop}
												paddingRight={basePaddingRight}
												paddingBottom={basePaddingBottom}
												paddingLeft={basePaddingLeft}
												setPaddingTop={basePaddingTop => setAttributes({basePaddingTop})}
												setPaddingRight={basePaddingRight => setAttributes({basePaddingRight})}
												setPaddingBottom={basePaddingBottom => setAttributes({basePaddingBottom})}
												setPaddingLeft={basePaddingLeft => setAttributes({basePaddingLeft})}
											></PaddingControl>
											<MarginControl
												breakpoint=''
												breakpoint_name=''
												marginTop={baseMarginTop}
												marginRight={baseMarginRight}
												marginBottom={baseMarginBottom}
												marginLeft={baseMarginLeft}
												setMarginTop={baseMarginTop => setAttributes({baseMarginTop})}
												setMarginRight={baseMarginRight => setAttributes({baseMarginRight})}
												setMarginBottom={baseMarginBottom => setAttributes({baseMarginBottom})}
												setMarginLeft={baseMarginLeft => setAttributes({baseMarginLeft})}
											></MarginControl>
											<AlignControl
												breakpoint=''
												breakpoint_name=''
												alignText={baseAlignText}
												flexDirection={baseFlexDirection}
												alignItems={baseAlignItems}
												alignSelf={baseAlignSelf}
												justifyContent={baseJustifyContent}
												setAlignText={baseAlignText => setAttributes({baseAlignText})}
												setFlexDirection={baseFlexDirection => setAttributes({baseFlexDirection})}
												setAlignItems={baseAlignItems => setAttributes({baseAlignItems})}
												setAlignSelf={baseAlignSelf => setAttributes({baseAlignSelf})}
												setJustifyContent={baseJustifyContent => setAttributes({baseJustifyContent})}
											></AlignControl>
											<OrderControl
												breakpoint=''
												breakpoint_name=''
												order={baseOrder}
												setOrder={baseOrder => setAttributes({baseOrder})}
											></OrderControl>
										</>
									)}
								</Card>,
						},
					]}
				>
					{({content, className}) =>
						<div className={className}>
							{content}
						</div>}
				</TabPanel>
			</InspectorControls>
			<div {...blockProps}>
				<InnerBlocks placeholder={__('Insert Blocks', 'resource-layout-blocks')} />
			</div>
		</>
	);
}
