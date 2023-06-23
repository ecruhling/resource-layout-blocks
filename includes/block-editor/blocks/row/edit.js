/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Card,
	CardBody,
	CardHeader,
	Flex,
	FlexItem,
	SelectControl,
	TabPanel,
	TextControl,
	Toolbar,
	ToolbarItem,
} from '@wordpress/components';

/**
 * External dependencies
 */
import classnames from 'classnames';
import { omit } from 'lodash';

/**
 * Internal dependencies
 */
import { tagNameMessages } from '../../block-help/tagNameMessages';
import DisplayControl from '../../block-controls/displayControl';
import FlexControl from '../../block-controls/flexControl';
import PaddingControl from '../../block-controls/paddingControl';
import MarginControl from '../../block-controls/marginControl';
import AlignControl from '../../block-controls/alignControl';
import { convertStylesStringToObject } from '../../../lib/convertStylesStringToObject';

/**
 * Styles are applied only to the editor
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The Block edit function
 *
 * @param {Object}   root0
 * @param {Object}   root0.attributes
 * @param {Function} root0.setAttributes
 * @return {JSX.Element} React Element.
 * @class
 */
export default function edit( { attributes, setAttributes } ) {
	const {
		tagName: TagName = 'div',
		className,
		inlineStyles,
		baseDisplay,
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
		smDisplay,
		smPaddingTop,
		smPaddingRight,
		smPaddingBottom,
		smPaddingLeft,
		smMarginTop,
		smMarginRight,
		smMarginBottom,
		smMarginLeft,
		smAlignText,
		smFlexDirection,
		smFillGrowShrink,
		smWrap,
		smOrder,
		smAlignContent,
		smAlignItems,
		smAlignSelf,
		smJustifyContent,
		mdDisplay,
		mdPaddingTop,
		mdPaddingRight,
		mdPaddingBottom,
		mdPaddingLeft,
		mdMarginTop,
		mdMarginRight,
		mdMarginBottom,
		mdMarginLeft,
		mdAlignText,
		mdFlexDirection,
		mdFillGrowShrink,
		mdWrap,
		mdOrder,
		mdAlignContent,
		mdAlignItems,
		mdAlignSelf,
		mdJustifyContent,
		lgDisplay,
		lgPaddingTop,
		lgPaddingRight,
		lgPaddingBottom,
		lgPaddingLeft,
		lgMarginTop,
		lgMarginRight,
		lgMarginBottom,
		lgMarginLeft,
		lgAlignText,
		lgFlexDirection,
		lgFillGrowShrink,
		lgWrap,
		lgOrder,
		lgAlignContent,
		lgAlignItems,
		lgAlignSelf,
		lgJustifyContent,
		xlDisplay,
		xlPaddingTop,
		xlPaddingRight,
		xlPaddingBottom,
		xlPaddingLeft,
		xlMarginTop,
		xlMarginRight,
		xlMarginBottom,
		xlMarginLeft,
		xlAlignText,
		xlFlexDirection,
		xlFillGrowShrink,
		xlWrap,
		xlOrder,
		xlAlignContent,
		xlAlignItems,
		xlAlignSelf,
		xlJustifyContent,
		xxlDisplay,
		xxlPaddingTop,
		xxlPaddingRight,
		xxlPaddingBottom,
		xxlPaddingLeft,
		xxlMarginTop,
		xxlMarginRight,
		xxlMarginBottom,
		xxlMarginLeft,
		xxlAlignText,
		xxlFlexDirection,
		xxlFillGrowShrink,
		xxlWrap,
		xxlOrder,
		xxlAlignContent,
		xxlAlignItems,
		xxlAlignSelf,
		xxlJustifyContent,
	} = attributes;

	const classNameAttributes = omit( attributes, [
		'anchor',
		'tagName',
		'inlineStyles',
		'className',
	] );

	const classes = classnames(
		'row',
		Object.values( classNameAttributes ),
		className
	);

	const blockProps = useBlockProps( {
		className: classes,
		style: convertStylesStringToObject( inlineStyles ),
	} );

	return (
		<>
			<BlockControls>
				<Toolbar label="Class Inspector" id="class-inspector">
					<ToolbarItem as="p">{ classes }</ToolbarItem>
				</Toolbar>
			</BlockControls>
			<InspectorControls>
				<Card>
					<CardHeader
						isBorderless={ true }
						isShady={ true }
						size="small"
						className="resource-card-header"
					>
						{ __( 'ROW', 'resource' ) }
					</CardHeader>
					<CardBody size="small">
						<Flex wrap={ true }>
							<FlexItem>
								<SelectControl
									label={ __( 'HTML element', 'resource' ) }
									options={ [
										{
											label: __(
												'Default (<div>)',
												'resource'
											),
											value: 'div',
										},
										{ label: '<header>', value: 'header' },
										{ label: '<main>', value: 'main' },
										{
											label: '<section>',
											value: 'section',
										},
										{
											label: '<article>',
											value: 'article',
										},
										{ label: '<aside>', value: 'aside' },
										{ label: '<footer>', value: 'footer' },
									] }
									value={ TagName }
									onChange={ ( value ) =>
										setAttributes( { tagName: value } )
									}
									help={ tagNameMessages[ TagName ] }
								/>
							</FlexItem>
						</Flex>
					</CardBody>
				</Card>
				<TabPanel
					className="breakpoint-tab-panel"
					activeClass="is-active"
					orientation="horizontal"
					tabs={ [
						{
							name: 'base',
							title: '—',
							className: 'breakpoint-tab',
							content: (
								<Card>
									<DisplayControl
										breakpoint=""
										breakpointName=""
										display={ baseDisplay }
										setDisplay={ ( baseDisplay ) =>
											setAttributes( { baseDisplay } )
										}
										__nextHasNoMarginBottom
									></DisplayControl>
									{ ( baseDisplay === '' ||
										baseDisplay === 'd-flex' ||
										baseDisplay === 'd-inline-flex' ) && (
										<>
											<CardBody
												size="small"
												style={ {
													paddingTop: 0,
													paddingBottom: 0,
												} }
											>
												<Flex wrap={ true }>
													<FlexItem>
														<p>
															<em>
																Row block
																default display
																attribute is
																'flex'
															</em>
														</p>
													</FlexItem>
												</Flex>
											</CardBody>
											<FlexControl
												breakpoint=""
												breakpointName=""
												flexDirection={
													baseFlexDirection
												}
												justifyContent={
													baseJustifyContent
												}
												alignItems={ baseAlignItems }
												alignSelf={ baseAlignSelf }
												fillGrowShrink={
													baseFillGrowShrink
												}
												wrap={ baseWrap }
												order={ baseOrder }
												alignContent={
													baseAlignContent
												}
												setFlexDirection={ (
													baseFlexDirection
												) =>
													setAttributes( {
														baseFlexDirection,
													} )
												}
												setJustifyContent={ (
													baseJustifyContent
												) =>
													setAttributes( {
														baseJustifyContent,
													} )
												}
												setAlignItems={ (
													baseAlignItems
												) =>
													setAttributes( {
														baseAlignItems,
													} )
												}
												setAlignSelf={ (
													baseAlignSelf
												) =>
													setAttributes( {
														baseAlignSelf,
													} )
												}
												setFillGrowShrink={ (
													baseFillGrowShrink
												) =>
													setAttributes( {
														baseFillGrowShrink,
													} )
												}
												setWrap={ ( baseWrap ) =>
													setAttributes( {
														baseWrap,
													} )
												}
												setOrder={ ( baseOrder ) =>
													setAttributes( {
														baseOrder,
													} )
												}
												setAlignContent={ (
													baseAlignContent
												) =>
													setAttributes( {
														baseAlignContent,
													} )
												}
											></FlexControl>
										</>
									) }
									{ baseDisplay !== 'd-none' && (
										<>
											<PaddingControl
												breakpoint=""
												breakpointName=""
												paddingTop={ basePaddingTop }
												paddingRight={
													basePaddingRight
												}
												paddingBottom={
													basePaddingBottom
												}
												paddingLeft={ basePaddingLeft }
												setPaddingTop={ (
													basePaddingTop
												) =>
													setAttributes( {
														basePaddingTop,
													} )
												}
												setPaddingRight={ (
													basePaddingRight
												) =>
													setAttributes( {
														basePaddingRight,
													} )
												}
												setPaddingBottom={ (
													basePaddingBottom
												) =>
													setAttributes( {
														basePaddingBottom,
													} )
												}
												setPaddingLeft={ (
													basePaddingLeft
												) =>
													setAttributes( {
														basePaddingLeft,
													} )
												}
											></PaddingControl>
											<MarginControl
												breakpoint=""
												breakpointName=""
												marginTop={ baseMarginTop }
												marginRight={ baseMarginRight }
												marginBottom={
													baseMarginBottom
												}
												marginLeft={ baseMarginLeft }
												setMarginTop={ (
													baseMarginTop
												) =>
													setAttributes( {
														baseMarginTop,
													} )
												}
												setMarginRight={ (
													baseMarginRight
												) =>
													setAttributes( {
														baseMarginRight,
													} )
												}
												setMarginBottom={ (
													baseMarginBottom
												) =>
													setAttributes( {
														baseMarginBottom,
													} )
												}
												setMarginLeft={ (
													baseMarginLeft
												) =>
													setAttributes( {
														baseMarginLeft,
													} )
												}
											></MarginControl>
											<AlignControl
												breakpoint=""
												breakpointName=""
												alignText={ baseAlignText }
												flexDirection={
													baseFlexDirection
												}
												alignItems={ baseAlignItems }
												alignSelf={ baseAlignSelf }
												justifyContent={
													baseJustifyContent
												}
												setAlignText={ (
													baseAlignText
												) =>
													setAttributes( {
														baseAlignText,
													} )
												}
												setFlexDirection={ (
													baseFlexDirection
												) =>
													setAttributes( {
														baseFlexDirection,
													} )
												}
												setAlignItems={ (
													baseAlignItems
												) =>
													setAttributes( {
														baseAlignItems,
													} )
												}
												setAlignSelf={ (
													baseAlignSelf
												) =>
													setAttributes( {
														baseAlignSelf,
													} )
												}
												setJustifyContent={ (
													baseJustifyContent
												) =>
													setAttributes( {
														baseJustifyContent,
													} )
												}
											></AlignControl>
										</>
									) }
								</Card>
							),
						},
						{
							name: 'small',
							title: 'SM',
							className: 'breakpoint-tab',
							content: (
								<Card>
									<DisplayControl
										breakpoint="sm-"
										breakpointName="SM"
										display={ smDisplay }
										setDisplay={ ( smDisplay ) =>
											setAttributes( { smDisplay } )
										}
									></DisplayControl>
									{ ( smDisplay === '' ||
										smDisplay === 'd-sm-flex' ||
										smDisplay === 'd-sm-inline-flex' ) && (
										<>
											<CardBody
												size="small"
												style={ {
													paddingTop: 0,
													paddingBottom: 0,
												} }
											>
												<Flex wrap={ true }>
													<FlexItem>
														<p>
															<em>
																Row block
																default display
																attribute is
																'flex'
															</em>
														</p>
													</FlexItem>
												</Flex>
											</CardBody>
											<FlexControl
												breakpoint="sm-"
												breakpointName="SM"
												flexDirection={
													smFlexDirection
												}
												justifyContent={
													smJustifyContent
												}
												alignItems={ smAlignItems }
												alignSelf={ smAlignSelf }
												fillGrowShrink={
													smFillGrowShrink
												}
												wrap={ smWrap }
												order={ smOrder }
												alignContent={ smAlignContent }
												setFlexDirection={ (
													smFlexDirection
												) =>
													setAttributes( {
														smFlexDirection,
													} )
												}
												setJustifyContent={ (
													smJustifyContent
												) =>
													setAttributes( {
														smJustifyContent,
													} )
												}
												setAlignItems={ (
													smAlignItems
												) =>
													setAttributes( {
														smAlignItems,
													} )
												}
												setAlignSelf={ (
													smAlignSelf
												) =>
													setAttributes( {
														smAlignSelf,
													} )
												}
												setFillGrowShrink={ (
													smFillGrowShrink
												) =>
													setAttributes( {
														smFillGrowShrink,
													} )
												}
												setWrap={ ( smWrap ) =>
													setAttributes( { smWrap } )
												}
												setOrder={ ( smOrder ) =>
													setAttributes( { smOrder } )
												}
												setAlignContent={ (
													smAlignContent
												) =>
													setAttributes( {
														smAlignContent,
													} )
												}
											></FlexControl>
										</>
									) }
									{ smDisplay !== 'd-sm-none' && (
										<>
											<PaddingControl
												breakpoint="sm-"
												breakpointName="SM"
												paddingTop={ smPaddingTop }
												paddingRight={ smPaddingRight }
												paddingBottom={
													smPaddingBottom
												}
												paddingLeft={ smPaddingLeft }
												setPaddingTop={ (
													smPaddingTop
												) =>
													setAttributes( {
														smPaddingTop,
													} )
												}
												setPaddingRight={ (
													smPaddingRight
												) =>
													setAttributes( {
														smPaddingRight,
													} )
												}
												setPaddingBottom={ (
													smPaddingBottom
												) =>
													setAttributes( {
														smPaddingBottom,
													} )
												}
												setPaddingLeft={ (
													smPaddingLeft
												) =>
													setAttributes( {
														smPaddingLeft,
													} )
												}
											></PaddingControl>
											<MarginControl
												breakpoint="sm-"
												breakpointName="SM"
												marginTop={ smMarginTop }
												marginRight={ smMarginRight }
												marginBottom={ smMarginBottom }
												marginLeft={ smMarginLeft }
												setMarginTop={ (
													smMarginTop
												) =>
													setAttributes( {
														smMarginTop,
													} )
												}
												setMarginRight={ (
													smMarginRight
												) =>
													setAttributes( {
														smMarginRight,
													} )
												}
												setMarginBottom={ (
													smMarginBottom
												) =>
													setAttributes( {
														smMarginBottom,
													} )
												}
												setMarginLeft={ (
													smMarginLeft
												) =>
													setAttributes( {
														smMarginLeft,
													} )
												}
											></MarginControl>
											<AlignControl
												breakpoint="sm-"
												breakpointName="SM"
												alignText={ smAlignText }
												flexDirection={
													smFlexDirection
												}
												alignItems={ smAlignItems }
												alignSelf={ smAlignSelf }
												justifyContent={
													smJustifyContent
												}
												setAlignText={ (
													smAlignText
												) =>
													setAttributes( {
														smAlignText,
													} )
												}
												setAlignItems={ (
													smAlignItems
												) =>
													setAttributes( {
														smAlignItems,
													} )
												}
												setAlignSelf={ (
													smAlignSelf
												) =>
													setAttributes( {
														smAlignSelf,
													} )
												}
												setJustifyContent={ (
													smJustifyContent
												) =>
													setAttributes( {
														smJustifyContent,
													} )
												}
											></AlignControl>
										</>
									) }
								</Card>
							),
						},
						{
							name: 'medium',
							title: 'MD',
							className: 'breakpoint-tab',
							content: (
								<Card>
									<DisplayControl
										breakpoint="md-"
										breakpointName="MD"
										display={ mdDisplay }
										setDisplay={ ( mdDisplay ) =>
											setAttributes( { mdDisplay } )
										}
									></DisplayControl>
									{ ( mdDisplay === '' ||
										mdDisplay === 'd-md-flex' ||
										mdDisplay === 'd-md-inline-flex' ) && (
										<>
											<CardBody
												size="small"
												style={ {
													paddingTop: 0,
													paddingBottom: 0,
												} }
											>
												<Flex wrap={ true }>
													<FlexItem>
														<p>
															<em>
																Row block
																default display
																attribute is
																'flex'
															</em>
														</p>
													</FlexItem>
												</Flex>
											</CardBody>
											<FlexControl
												breakpoint="md-"
												breakpointName="MD"
												flexDirection={
													mdFlexDirection
												}
												justifyContent={
													mdJustifyContent
												}
												alignItems={ mdAlignItems }
												alignSelf={ mdAlignSelf }
												fillGrowShrink={
													mdFillGrowShrink
												}
												wrap={ mdWrap }
												order={ mdOrder }
												alignContent={ mdAlignContent }
												setFlexDirection={ (
													mdFlexDirection
												) =>
													setAttributes( {
														mdFlexDirection,
													} )
												}
												setJustifyContent={ (
													mdJustifyContent
												) =>
													setAttributes( {
														mdJustifyContent,
													} )
												}
												setAlignItems={ (
													mdAlignItems
												) =>
													setAttributes( {
														mdAlignItems,
													} )
												}
												setAlignSelf={ (
													mdAlignSelf
												) =>
													setAttributes( {
														mdAlignSelf,
													} )
												}
												setFillGrowShrink={ (
													mdFillGrowShrink
												) =>
													setAttributes( {
														mdFillGrowShrink,
													} )
												}
												setWrap={ ( mdWrap ) =>
													setAttributes( { mdWrap } )
												}
												setOrder={ ( mdOrder ) =>
													setAttributes( { mdOrder } )
												}
												setAlignContent={ (
													mdAlignContent
												) =>
													setAttributes( {
														mdAlignContent,
													} )
												}
											></FlexControl>
										</>
									) }
									{ mdDisplay !== 'd-md-none' && (
										<>
											<PaddingControl
												breakpoint="md-"
												breakpointName="MD"
												paddingTop={ mdPaddingTop }
												paddingRight={ mdPaddingRight }
												paddingBottom={
													mdPaddingBottom
												}
												paddingLeft={ mdPaddingLeft }
												setPaddingTop={ (
													mdPaddingTop
												) =>
													setAttributes( {
														mdPaddingTop,
													} )
												}
												setPaddingRight={ (
													mdPaddingRight
												) =>
													setAttributes( {
														mdPaddingRight,
													} )
												}
												setPaddingBottom={ (
													mdPaddingBottom
												) =>
													setAttributes( {
														mdPaddingBottom,
													} )
												}
												setPaddingLeft={ (
													mdPaddingLeft
												) =>
													setAttributes( {
														mdPaddingLeft,
													} )
												}
											></PaddingControl>
											<MarginControl
												breakpoint="md-"
												breakpointName="MD"
												marginTop={ mdMarginTop }
												marginRight={ mdMarginRight }
												marginBottom={ mdMarginBottom }
												marginLeft={ mdMarginLeft }
												setMarginTop={ (
													mdMarginTop
												) =>
													setAttributes( {
														mdMarginTop,
													} )
												}
												setMarginRight={ (
													mdMarginRight
												) =>
													setAttributes( {
														mdMarginRight,
													} )
												}
												setMarginBottom={ (
													mdMarginBottom
												) =>
													setAttributes( {
														mdMarginBottom,
													} )
												}
												setMarginLeft={ (
													mdMarginLeft
												) =>
													setAttributes( {
														mdMarginLeft,
													} )
												}
											></MarginControl>
											<AlignControl
												breakpoint="md-"
												breakpointName="MD"
												alignText={ mdAlignText }
												flexDirection={
													mdFlexDirection
												}
												alignItems={ mdAlignItems }
												alignSelf={ mdAlignSelf }
												justifyContent={
													mdJustifyContent
												}
												setAlignText={ (
													mdAlignText
												) =>
													setAttributes( {
														mdAlignText,
													} )
												}
												setAlignItems={ (
													mdAlignItems
												) =>
													setAttributes( {
														mdAlignItems,
													} )
												}
												setAlignSelf={ (
													mdAlignSelf
												) =>
													setAttributes( {
														mdAlignSelf,
													} )
												}
												setJustifyContent={ (
													mdJustifyContent
												) =>
													setAttributes( {
														mdJustifyContent,
													} )
												}
											></AlignControl>
										</>
									) }
								</Card>
							),
						},
						{
							name: 'large',
							title: 'LG',
							className: 'breakpoint-tab',
							content: (
								<Card>
									<DisplayControl
										breakpoint="lg-"
										breakpointName="LG"
										display={ lgDisplay }
										setDisplay={ ( lgDisplay ) =>
											setAttributes( { lgDisplay } )
										}
									></DisplayControl>
									{ ( lgDisplay === '' ||
										lgDisplay === 'd-lg-flex' ||
										lgDisplay === 'd-lg-inline-flex' ) && (
										<>
											<CardBody
												size="small"
												style={ {
													paddingTop: 0,
													paddingBottom: 0,
												} }
											>
												<Flex wrap={ true }>
													<FlexItem>
														<p>
															<em>
																Row block
																default display
																attribute is
																'flex'
															</em>
														</p>
													</FlexItem>
												</Flex>
											</CardBody>
											<FlexControl
												breakpoint="lg-"
												breakpointName="LG"
												flexDirection={
													lgFlexDirection
												}
												justifyContent={
													lgJustifyContent
												}
												alignItems={ lgAlignItems }
												alignSelf={ lgAlignSelf }
												fillGrowShrink={
													lgFillGrowShrink
												}
												wrap={ lgWrap }
												order={ lgOrder }
												alignContent={ lgAlignContent }
												setFlexDirection={ (
													lgFlexDirection
												) =>
													setAttributes( {
														lgFlexDirection,
													} )
												}
												setJustifyContent={ (
													lgJustifyContent
												) =>
													setAttributes( {
														lgJustifyContent,
													} )
												}
												setAlignItems={ (
													lgAlignItems
												) =>
													setAttributes( {
														lgAlignItems,
													} )
												}
												setAlignSelf={ (
													lgAlignSelf
												) =>
													setAttributes( {
														lgAlignSelf,
													} )
												}
												setFillGrowShrink={ (
													lgFillGrowShrink
												) =>
													setAttributes( {
														lgFillGrowShrink,
													} )
												}
												setWrap={ ( lgWrap ) =>
													setAttributes( { lgWrap } )
												}
												setOrder={ ( lgOrder ) =>
													setAttributes( { lgOrder } )
												}
												setAlignContent={ (
													lgAlignContent
												) =>
													setAttributes( {
														lgAlignContent,
													} )
												}
											></FlexControl>
										</>
									) }
									{ lgDisplay !== 'd-lg-none' && (
										<>
											<PaddingControl
												breakpoint="lg-"
												breakpointName="LG"
												paddingTop={ lgPaddingTop }
												paddingRight={ lgPaddingRight }
												paddingBottom={
													lgPaddingBottom
												}
												paddingLeft={ lgPaddingLeft }
												setPaddingTop={ (
													lgPaddingTop
												) =>
													setAttributes( {
														lgPaddingTop,
													} )
												}
												setPaddingRight={ (
													lgPaddingRight
												) =>
													setAttributes( {
														lgPaddingRight,
													} )
												}
												setPaddingBottom={ (
													lgPaddingBottom
												) =>
													setAttributes( {
														lgPaddingBottom,
													} )
												}
												setPaddingLeft={ (
													lgPaddingLeft
												) =>
													setAttributes( {
														lgPaddingLeft,
													} )
												}
											></PaddingControl>
											<MarginControl
												breakpoint="lg-"
												breakpointName="LG"
												marginTop={ lgMarginTop }
												marginRight={ lgMarginRight }
												marginBottom={ lgMarginBottom }
												marginLeft={ lgMarginLeft }
												setMarginTop={ (
													lgMarginTop
												) =>
													setAttributes( {
														lgMarginTop,
													} )
												}
												setMarginRight={ (
													lgMarginRight
												) =>
													setAttributes( {
														lgMarginRight,
													} )
												}
												setMarginBottom={ (
													lgMarginBottom
												) =>
													setAttributes( {
														lgMarginBottom,
													} )
												}
												setMarginLeft={ (
													lgMarginLeft
												) =>
													setAttributes( {
														lgMarginLeft,
													} )
												}
											></MarginControl>
											<AlignControl
												breakpoint="lg-"
												breakpointName="LG"
												alignText={ lgAlignText }
												flexDirection={
													lgFlexDirection
												}
												alignItems={ lgAlignItems }
												alignSelf={ lgAlignSelf }
												justifyContent={
													lgJustifyContent
												}
												setAlignText={ (
													lgAlignText
												) =>
													setAttributes( {
														lgAlignText,
													} )
												}
												setAlignItems={ (
													lgAlignItems
												) =>
													setAttributes( {
														lgAlignItems,
													} )
												}
												setAlignSelf={ (
													lgAlignSelf
												) =>
													setAttributes( {
														lgAlignSelf,
													} )
												}
												setJustifyContent={ (
													lgJustifyContent
												) =>
													setAttributes( {
														lgJustifyContent,
													} )
												}
											></AlignControl>
										</>
									) }
								</Card>
							),
						},
						{
							name: 'extra-large',
							title: 'XL',
							className: 'breakpoint-tab',
							content: (
								<Card>
									<DisplayControl
										breakpoint="xl-"
										breakpointName="XL"
										display={ xlDisplay }
										setDisplay={ ( xlDisplay ) =>
											setAttributes( { xlDisplay } )
										}
									></DisplayControl>
									{ ( xlDisplay === '' ||
										xlDisplay === 'd-xl-flex' ||
										xlDisplay === 'd-xl-inline-flex' ) && (
										<>
											<CardBody
												size="small"
												style={ {
													paddingTop: 0,
													paddingBottom: 0,
												} }
											>
												<Flex wrap={ true }>
													<FlexItem>
														<p>
															<em>
																Row block
																default display
																attribute is
																'flex'
															</em>
														</p>
													</FlexItem>
												</Flex>
											</CardBody>
											<FlexControl
												breakpoint="xl-"
												breakpointName="XL"
												flexDirection={
													xlFlexDirection
												}
												justifyContent={
													xlJustifyContent
												}
												alignItems={ xlAlignItems }
												alignSelf={ xlAlignSelf }
												fillGrowShrink={
													xlFillGrowShrink
												}
												wrap={ xlWrap }
												order={ xlOrder }
												alignContent={ xlAlignContent }
												setFlexDirection={ (
													xlFlexDirection
												) =>
													setAttributes( {
														xlFlexDirection,
													} )
												}
												setJustifyContent={ (
													xlJustifyContent
												) =>
													setAttributes( {
														xlJustifyContent,
													} )
												}
												setAlignItems={ (
													xlAlignItems
												) =>
													setAttributes( {
														xlAlignItems,
													} )
												}
												setAlignSelf={ (
													xlAlignSelf
												) =>
													setAttributes( {
														xlAlignSelf,
													} )
												}
												setFillGrowShrink={ (
													xlFillGrowShrink
												) =>
													setAttributes( {
														xlFillGrowShrink,
													} )
												}
												setWrap={ ( xlWrap ) =>
													setAttributes( { xlWrap } )
												}
												setOrder={ ( xlOrder ) =>
													setAttributes( { xlOrder } )
												}
												setAlignContent={ (
													xlAlignContent
												) =>
													setAttributes( {
														xlAlignContent,
													} )
												}
											></FlexControl>
										</>
									) }
									{ xlDisplay !== 'd-xl-none' && (
										<>
											<PaddingControl
												breakpoint="xl-"
												breakpointName="XL"
												paddingTop={ xlPaddingTop }
												paddingRight={ xlPaddingRight }
												paddingBottom={
													xlPaddingBottom
												}
												paddingLeft={ xlPaddingLeft }
												setPaddingTop={ (
													xlPaddingTop
												) =>
													setAttributes( {
														xlPaddingTop,
													} )
												}
												setPaddingRight={ (
													xlPaddingRight
												) =>
													setAttributes( {
														xlPaddingRight,
													} )
												}
												setPaddingBottom={ (
													xlPaddingBottom
												) =>
													setAttributes( {
														xlPaddingBottom,
													} )
												}
												setPaddingLeft={ (
													xlPaddingLeft
												) =>
													setAttributes( {
														xlPaddingLeft,
													} )
												}
											></PaddingControl>
											<MarginControl
												breakpoint="xl-"
												breakpointName="XL"
												marginTop={ xlMarginTop }
												marginRight={ xlMarginRight }
												marginBottom={ xlMarginBottom }
												marginLeft={ xlMarginLeft }
												setMarginTop={ (
													xlMarginTop
												) =>
													setAttributes( {
														xlMarginTop,
													} )
												}
												setMarginRight={ (
													xlMarginRight
												) =>
													setAttributes( {
														xlMarginRight,
													} )
												}
												setMarginBottom={ (
													xlMarginBottom
												) =>
													setAttributes( {
														xlMarginBottom,
													} )
												}
												setMarginLeft={ (
													xlMarginLeft
												) =>
													setAttributes( {
														xlMarginLeft,
													} )
												}
											></MarginControl>
											<AlignControl
												breakpoint="xl-"
												breakpointName="XL"
												alignText={ xlAlignText }
												flexDirection={
													xlFlexDirection
												}
												alignItems={ xlAlignItems }
												alignSelf={ xlAlignSelf }
												justifyContent={
													xlJustifyContent
												}
												setAlignText={ (
													xlAlignText
												) =>
													setAttributes( {
														xlAlignText,
													} )
												}
												setAlignItems={ (
													xlAlignItems
												) =>
													setAttributes( {
														xlAlignItems,
													} )
												}
												setAlignSelf={ (
													xlAlignSelf
												) =>
													setAttributes( {
														xlAlignSelf,
													} )
												}
												setJustifyContent={ (
													xlJustifyContent
												) =>
													setAttributes( {
														xlJustifyContent,
													} )
												}
											></AlignControl>
										</>
									) }
								</Card>
							),
						},
						{
							name: 'extra-extra-large',
							title: 'XXL',
							className: 'breakpoint-tab',
							content: (
								<Card>
									<DisplayControl
										breakpoint="xxl-"
										breakpointName="XXL"
										display={ xxlDisplay }
										setDisplay={ ( xxlDisplay ) =>
											setAttributes( { xxlDisplay } )
										}
									></DisplayControl>
									{ ( xxlDisplay === '' ||
										xxlDisplay === 'd-xxl-flex' ||
										xxlDisplay ===
											'd-xxl-inline-flex' ) && (
										<>
											<CardBody
												size="small"
												style={ {
													paddingTop: 0,
													paddingBottom: 0,
												} }
											>
												<Flex wrap={ true }>
													<FlexItem>
														<p>
															<em>
																Row block
																default display
																attribute is
																&lsquo;flex&rsquo;
															</em>
														</p>
													</FlexItem>
												</Flex>
											</CardBody>
											<FlexControl
												breakpoint="xxl-"
												breakpointName="XXL"
												flexDirection={
													xxlFlexDirection
												}
												justifyContent={
													xxlJustifyContent
												}
												alignItems={ xxlAlignItems }
												alignSelf={ xxlAlignSelf }
												fillGrowShrink={
													xxlFillGrowShrink
												}
												wrap={ xxlWrap }
												order={ xxlOrder }
												alignContent={ xxlAlignContent }
												setFlexDirection={ (
													xxlFlexDirection
												) =>
													setAttributes( {
														xxlFlexDirection,
													} )
												}
												setJustifyContent={ (
													xxlJustifyContent
												) =>
													setAttributes( {
														xxlJustifyContent,
													} )
												}
												setAlignItems={ (
													xxlAlignItems
												) =>
													setAttributes( {
														xxlAlignItems,
													} )
												}
												setAlignSelf={ (
													xxlAlignSelf
												) =>
													setAttributes( {
														xxlAlignSelf,
													} )
												}
												setFillGrowShrink={ (
													xxlFillGrowShrink
												) =>
													setAttributes( {
														xxlFillGrowShrink,
													} )
												}
												setWrap={ ( xxlWrap ) =>
													setAttributes( { xxlWrap } )
												}
												setOrder={ ( xxlOrder ) =>
													setAttributes( {
														xxlOrder,
													} )
												}
												setAlignContent={ (
													xxlAlignContent
												) =>
													setAttributes( {
														xxlAlignContent,
													} )
												}
											></FlexControl>
										</>
									) }
									{ xxlDisplay !== 'd-xxl-none' && (
										<>
											<PaddingControl
												breakpoint="xxl-"
												breakpointName="XXL"
												paddingTop={ xxlPaddingTop }
												paddingRight={ xxlPaddingRight }
												paddingBottom={
													xxlPaddingBottom
												}
												paddingLeft={ xxlPaddingLeft }
												setPaddingTop={ (
													xxlPaddingTop
												) =>
													setAttributes( {
														xxlPaddingTop,
													} )
												}
												setPaddingRight={ (
													xxlPaddingRight
												) =>
													setAttributes( {
														xxlPaddingRight,
													} )
												}
												setPaddingBottom={ (
													xxlPaddingBottom
												) =>
													setAttributes( {
														xxlPaddingBottom,
													} )
												}
												setPaddingLeft={ (
													xxlPaddingLeft
												) =>
													setAttributes( {
														xxlPaddingLeft,
													} )
												}
											></PaddingControl>
											<MarginControl
												breakpoint="xxl-"
												breakpointName="XXL"
												marginTop={ xxlMarginTop }
												marginRight={ xxlMarginRight }
												marginBottom={ xxlMarginBottom }
												marginLeft={ xxlMarginLeft }
												setMarginTop={ (
													xxlMarginTop
												) =>
													setAttributes( {
														xxlMarginTop,
													} )
												}
												setMarginRight={ (
													xxlMarginRight
												) =>
													setAttributes( {
														xxlMarginRight,
													} )
												}
												setMarginBottom={ (
													xxlMarginBottom
												) =>
													setAttributes( {
														xxlMarginBottom,
													} )
												}
												setMarginLeft={ (
													xxlMarginLeft
												) =>
													setAttributes( {
														xxlMarginLeft,
													} )
												}
											></MarginControl>
											<AlignControl
												breakpoint="xxl-"
												breakpointName="XXL"
												alignText={ xxlAlignText }
												flexDirection={
													xxlFlexDirection
												}
												alignItems={ xxlAlignItems }
												alignSelf={ xxlAlignSelf }
												justifyContent={
													xxlJustifyContent
												}
												setAlignText={ (
													xxlAlignText
												) =>
													setAttributes( {
														xxlAlignText,
													} )
												}
												setAlignItems={ (
													xxlAlignItems
												) =>
													setAttributes( {
														xxlAlignItems,
													} )
												}
												setAlignSelf={ (
													xxlAlignSelf
												) =>
													setAttributes( {
														xxlAlignSelf,
													} )
												}
												setJustifyContent={ (
													xxlJustifyContent
												) =>
													setAttributes( {
														xxlJustifyContent,
													} )
												}
											></AlignControl>
										</>
									) }
								</Card>
							),
						},
					] }
				>
					{ ( { content, className } ) => (
						<div className={ className }>{ content }</div>
					) }
				</TabPanel>
			</InspectorControls>
			<InspectorControls group="advanced">
				<TextControl
					__nextHasNoMarginBottom
					className="inline-style-control"
					autoComplete="off"
					label={ __( 'Inline Styles' ) }
					value={ inlineStyles || '' }
					onChange={ ( value ) => {
						setAttributes( {
							inlineStyles: value !== '' ? value : undefined,
						} );
					} }
				/>
			</InspectorControls>
			<TagName { ...blockProps }>
				<InnerBlocks
					placeholder={ __( 'Insert Columns', 'resource' ) }
				/>
			</TagName>
		</>
	);
}
