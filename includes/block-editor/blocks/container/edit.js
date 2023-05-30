/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import {__} from '@wordpress/i18n';
import {
	BlockControls,
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Button,
	CheckboxControl,
	SelectControl,
	TabPanel,
	CardBody,
	Card,
	Flex,
	FlexItem,
	CardHeader,
	Toolbar,
	ToolbarItem,
} from '@wordpress/components';

/**
 * Styles are applied only to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Control components.
 */
import DisplayControl from './../../block-components/displayControl';
import PaddingControl from './../../block-components/paddingControl';
import MarginControl from './../../block-components/marginControl';
import AlignJustifyControl from './../../block-components/alignJustifyControl';
import FlexControl from './../../block-components/flexControl';

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
		isFluid,
		tagName: TagName = 'div',
		className,
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
		xxlAlignItems,
		xxlAlignSelf,
		xxlJustifyContent,
	} = attributes;

	const classes = classnames(
		{
			'container': !isFluid,
			'container-fluid': isFluid,
		},
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
		xxlAlignItems,
		xxlAlignSelf,
		xxlJustifyContent,
		className,
	);

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
				<Toolbar label='Class Inspector' id='class-inspector'>
					<ToolbarItem as='p'>{classes}</ToolbarItem>
				</Toolbar>
			</BlockControls>
			<InspectorControls>
				<Card>
					<CardHeader isBorderless={true} isShady={true}
											size='small'
											className='resource-card-header'>{__('CONTAINER', 'resource-layout-blocks')}</CardHeader>
					<CardBody size='small'>
						<Flex wrap={true}>
							<FlexItem>
								<SelectControl
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
									<DisplayControl
										breakpoint=''
										breakpoint_name=''
										display={baseDisplay}
										setDisplay={baseDisplay => setAttributes({baseDisplay})}
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
											<AlignJustifyControl
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
											></AlignJustifyControl>
										</>
									)}
								</Card>,
						},
						{
							name: 'small',
							title: 'SM',
							className: 'breakpoint-tab',
							content:
								<Card>
									<DisplayControl
										breakpoint='sm-'
										breakpoint_name='SM'
										display={smDisplay}
										setDisplay={smDisplay => setAttributes({smDisplay})}
									></DisplayControl>
									<PaddingControl
										breakpoint='sm-'
										breakpoint_name='SM'
										paddingTop={smPaddingTop}
										paddingRight={smPaddingRight}
										paddingBottom={smPaddingBottom}
										paddingLeft={smPaddingLeft}
										setPaddingTop={smPaddingTop => setAttributes({smPaddingTop})}
										setPaddingRight={smPaddingRight => setAttributes({smPaddingRight})}
										setPaddingBottom={smPaddingBottom => setAttributes({smPaddingBottom})}
										setPaddingLeft={smPaddingLeft => setAttributes({smPaddingLeft})}
									></PaddingControl>
									<MarginControl
										breakpoint='sm-'
										breakpoint_name='SM'
										marginTop={smMarginTop}
										marginRight={smMarginRight}
										marginBottom={smMarginBottom}
										marginLeft={smMarginLeft}
										setMarginTop={smMarginTop => setAttributes({smMarginTop})}
										setMarginRight={smMarginRight => setAttributes({smMarginRight})}
										setMarginBottom={smMarginBottom => setAttributes({smMarginBottom})}
										setMarginLeft={smMarginLeft => setAttributes({smMarginLeft})}
									></MarginControl>
									<AlignJustifyControl
										breakpoint='sm-'
										breakpoint_name='SM'
										alignText={smAlignText}
										flexDirection={smFlexDirection}
										alignItems={smAlignItems}
										alignSelf={smAlignSelf}
										justifyContent={smJustifyContent}
										setAlignText={smAlignText => setAttributes({smAlignText})}
										setAlignItems={smAlignItems => setAttributes({smAlignItems})}
										setAlignSelf={smAlignSelf => setAttributes({smAlignSelf})}
										setJustifyContent={smJustifyContent => setAttributes({smJustifyContent})}
									></AlignJustifyControl>
								</Card>,
						},
						{
							name: 'medium',
							title: 'MD',
							className: 'breakpoint-tab',
							content:
								<Card>
									<DisplayControl
										breakpoint='md-'
										breakpoint_name='MD'
										display={mdDisplay}
										setDisplay={mdDisplay => setAttributes({mdDisplay})}
									></DisplayControl>
									<PaddingControl
										breakpoint='md-'
										breakpoint_name='MD'
										paddingTop={mdPaddingTop}
										paddingRight={mdPaddingRight}
										paddingBottom={mdPaddingBottom}
										paddingLeft={mdPaddingLeft}
										setPaddingTop={mdPaddingTop => setAttributes({mdPaddingTop})}
										setPaddingRight={mdPaddingRight => setAttributes({mdPaddingRight})}
										setPaddingBottom={mdPaddingBottom => setAttributes({mdPaddingBottom})}
										setPaddingLeft={mdPaddingLeft => setAttributes({mdPaddingLeft})}
									></PaddingControl>
									<MarginControl
										breakpoint='md-'
										breakpoint_name='MD'
										marginTop={mdMarginTop}
										marginRight={mdMarginRight}
										marginBottom={mdMarginBottom}
										marginLeft={mdMarginLeft}
										setMarginTop={mdMarginTop => setAttributes({mdMarginTop})}
										setMarginRight={mdMarginRight => setAttributes({mdMarginRight})}
										setMarginBottom={mdMarginBottom => setAttributes({mdMarginBottom})}
										setMarginLeft={mdMarginLeft => setAttributes({mdMarginLeft})}
									></MarginControl>
									<AlignJustifyControl
										breakpoint='md-'
										breakpoint_name='MD'
										alignText={mdAlignText}
										flexDirection={mdFlexDirection}
										alignItems={mdAlignItems}
										alignSelf={mdAlignSelf}
										justifyContent={mdJustifyContent}
										setAlignText={mdAlignText => setAttributes({mdAlignText})}
										setAlignItems={mdAlignItems => setAttributes({mdAlignItems})}
										setAlignSelf={mdAlignSelf => setAttributes({mdAlignSelf})}
										setJustifyContent={mdJustifyContent => setAttributes({mdJustifyContent})}
									></AlignJustifyControl>
								</Card>,
						},
						{
							name: 'large',
							title: 'LG',
							className: 'breakpoint-tab',
							content:
								<Card>
									<DisplayControl
										breakpoint='lg-'
										breakpoint_name='LG'
										display={lgDisplay}
										setDisplay={lgDisplay => setAttributes({lgDisplay})}
									></DisplayControl>
									<PaddingControl
										breakpoint='lg-'
										breakpoint_name='LG'
										paddingTop={lgPaddingTop}
										paddingRight={lgPaddingRight}
										paddingBottom={lgPaddingBottom}
										paddingLeft={lgPaddingLeft}
										setPaddingTop={lgPaddingTop => setAttributes({lgPaddingTop})}
										setPaddingRight={lgPaddingRight => setAttributes({lgPaddingRight})}
										setPaddingBottom={lgPaddingBottom => setAttributes({lgPaddingBottom})}
										setPaddingLeft={lgPaddingLeft => setAttributes({lgPaddingLeft})}
									></PaddingControl>
									<MarginControl
										breakpoint='lg-'
										breakpoint_name='LG'
										marginTop={lgMarginTop}
										marginRight={lgMarginRight}
										marginBottom={lgMarginBottom}
										marginLeft={lgMarginLeft}
										setMarginTop={lgMarginTop => setAttributes({lgMarginTop})}
										setMarginRight={lgMarginRight => setAttributes({lgMarginRight})}
										setMarginBottom={lgMarginBottom => setAttributes({lgMarginBottom})}
										setMarginLeft={lgMarginLeft => setAttributes({lgMarginLeft})}
									></MarginControl>
									<AlignJustifyControl
										breakpoint='lg-'
										breakpoint_name='LG'
										alignText={lgAlignText}
										flexDirection={lgFlexDirection}
										alignItems={lgAlignItems}
										alignSelf={lgAlignSelf}
										justifyContent={lgJustifyContent}
										setAlignText={lgAlignText => setAttributes({lgAlignText})}
										setAlignItems={lgAlignItems => setAttributes({lgAlignItems})}
										setAlignSelf={lgAlignSelf => setAttributes({lgAlignSelf})}
										setJustifyContent={lgJustifyContent => setAttributes({lgJustifyContent})}
									></AlignJustifyControl>
								</Card>,
						},
						{
							name: 'extra-large',
							title: 'XL',
							className: 'breakpoint-tab',
							content:
								<Card>
									<DisplayControl
										breakpoint='xl-'
										breakpoint_name='XL'
										display={xlDisplay}
										setDisplay={xlDisplay => setAttributes({xlDisplay})}
									></DisplayControl>
									<PaddingControl
										breakpoint='xl-'
										breakpoint_name='XL'
										paddingTop={xlPaddingTop}
										paddingRight={xlPaddingRight}
										paddingBottom={xlPaddingBottom}
										paddingLeft={xlPaddingLeft}
										setPaddingTop={xlPaddingTop => setAttributes({xlPaddingTop})}
										setPaddingRight={xlPaddingRight => setAttributes({xlPaddingRight})}
										setPaddingBottom={xlPaddingBottom => setAttributes({xlPaddingBottom})}
										setPaddingLeft={xlPaddingLeft => setAttributes({xlPaddingLeft})}
									></PaddingControl>
									<MarginControl
										breakpoint='xl-'
										breakpoint_name='XL'
										marginTop={xlMarginTop}
										marginRight={xlMarginRight}
										marginBottom={xlMarginBottom}
										marginLeft={xlMarginLeft}
										setMarginTop={xlMarginTop => setAttributes({xlMarginTop})}
										setMarginRight={xlMarginRight => setAttributes({xlMarginRight})}
										setMarginBottom={xlMarginBottom => setAttributes({xlMarginBottom})}
										setMarginLeft={xlMarginLeft => setAttributes({xlMarginLeft})}
									></MarginControl>
									<AlignJustifyControl
										breakpoint='xl-'
										breakpoint_name='XL'
										alignText={xlAlignText}
										flexDirection={xlFlexDirection}
										alignItems={xlAlignItems}
										alignSelf={xlAlignSelf}
										justifyContent={xlJustifyContent}
										setAlignText={xlAlignText => setAttributes({xlAlignText})}
										setAlignItems={xlAlignItems => setAttributes({xlAlignItems})}
										setAlignSelf={xlAlignSelf => setAttributes({xlAlignSelf})}
										setJustifyContent={xlJustifyContent => setAttributes({xlJustifyContent})}
									></AlignJustifyControl>
								</Card>,
						},
						{
							name: 'extra-extra-large',
							title: 'XXL',
							className: 'breakpoint-tab',
							content:
								<Card>
									<DisplayControl
										breakpoint='xxl-'
										breakpoint_name='XXL'
										display={xxlDisplay}
										setDisplay={xxlDisplay => setAttributes({xxlDisplay})}
									></DisplayControl>
									<PaddingControl
										breakpoint='xxl-'
										breakpoint_name='XXL'
										paddingTop={xxlPaddingTop}
										paddingRight={xxlPaddingRight}
										paddingBottom={xxlPaddingBottom}
										paddingLeft={xxlPaddingLeft}
										setPaddingTop={xxlPaddingTop => setAttributes({xxlPaddingTop})}
										setPaddingRight={xxlPaddingRight => setAttributes({xxlPaddingRight})}
										setPaddingBottom={xxlPaddingBottom => setAttributes({xxlPaddingBottom})}
										setPaddingLeft={xxlPaddingLeft => setAttributes({xxlPaddingLeft})}
									></PaddingControl>
									<MarginControl
										breakpoint='xxl-'
										breakpoint_name='XXL'
										marginTop={xxlMarginTop}
										marginRight={xxlMarginRight}
										marginBottom={xxlMarginBottom}
										marginLeft={xxlMarginLeft}
										setMarginTop={xxlMarginTop => setAttributes({xxlMarginTop})}
										setMarginRight={xxlMarginRight => setAttributes({xxlMarginRight})}
										setMarginBottom={xxlMarginBottom => setAttributes({xxlMarginBottom})}
										setMarginLeft={xxlMarginLeft => setAttributes({xxlMarginLeft})}
									></MarginControl>
									<AlignJustifyControl
										breakpoint='xxl-'
										breakpoint_name='XXL'
										alignText={xxlAlignText}
										flexDirection={xxlFlexDirection}
										alignItems={xxlAlignItems}
										alignSelf={xxlAlignSelf}
										justifyContent={xxlJustifyContent}
										setAlignText={xxlAlignText => setAttributes({xxlAlignText})}
										setAlignItems={xxlAlignItems => setAttributes({xxlAlignItems})}
										setAlignSelf={xxlAlignSelf => setAttributes({xxlAlignSelf})}
										setJustifyContent={xxlJustifyContent => setAttributes({xxlJustifyContent})}
									></AlignJustifyControl>
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
			<TagName {...blockProps}>
				<InnerBlocks placeholder={__('Insert Blocks', 'resource-layout-blocks')} />
			</TagName>
		</>
	);
}
