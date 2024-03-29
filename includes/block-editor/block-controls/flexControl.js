/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	CardBody,
	CardHeader,
	Flex,
	FlexItem,
	SelectControl,
} from '@wordpress/components';

/**
 * FlexControl.
 *
 * React Component for controlling Flex attributes.
 *
 * @since      1.0.0
 *
 * @class
 *
 * @param {Object}   props                   Component props.
 * @param {string}   props.breakpoint        The breakpoint name for this Component.
 * @param {string}   props.breakpointName    The short breakpoint name for this Component.
 * @param {string}   props.flexDirection     The FlexDirection attribute.
 * @param {string}   props.justifyContent    The JustifyContent attribute.
 * @param {string}   props.alignItems        The AlignItems attribute.
 * @param {string}   props.alignSelf         The AlignSelf attribute.
 * @param {string}   props.fillGrowShrink    The FillGrowShrink attribute.
 * @param {string}   props.wrap              The Wrap attribute.
 * @param {string}   props.order             The Order attribute.
 * @param {string}   props.alignContent      The AlignContent attribute.
 * @param {Function} props.setFlexDirection  Set the FlexDirection attribute.
 * @param {Function} props.setJustifyContent Set the JustifyContent attribute.
 * @param {Function} props.setAlignItems     Set the AlignItems attribute.
 * @param {Function} props.setAlignSelf      Set the AlignSelf attribute.
 * @param {Function} props.setFillGrowShrink Set the FillGrowShrink attribute.
 * @param {Function} props.setWrap           Set the Wrap attribute.
 * @param {Function} props.setOrder          Set the Order attribute.
 * @param {Function} props.setAlignContent   Set the AlignContent attribute.
 *
 * @return {JSX.Element} The Flex Component for the Block Editor sidebar.
 */
export default function FlexControl( {
	breakpoint,
	breakpointName,
	flexDirection,
	justifyContent,
	alignItems,
	alignSelf,
	fillGrowShrink,
	wrap,
	order,
	alignContent,
	setFlexDirection,
	setJustifyContent,
	setAlignItems,
	setAlignSelf,
	setFillGrowShrink,
	setWrap,
	setOrder,
	setAlignContent,
} ) {
	return (
		<div>
			<CardHeader
				isBorderless={ true }
				isShady={ true }
				size="small"
				className="resource-card-header"
			>
				{ `${ breakpointName } FLEX ATTRIBUTES` }
			</CardHeader>
			<CardBody size="small">
				<Flex wrap={ true }>
					<FlexItem>
						<SelectControl
							label={ __( 'Direction', 'resource' ) }
							value={ flexDirection }
							options={ [
								{ value: '', label: __( 'None', 'resource' ) },
								{
									value: `flex-${ breakpoint }row`,
									label: __( 'Flex Row', 'resource' ),
								},
								{
									value: `flex-${ breakpoint }row-reverse`,
									label: __( 'Flex Row Reverse', 'resource' ),
								},
								{
									value: `flex-${ breakpoint }column`,
									label: __( 'Flex Column', 'resource' ),
								},
								{
									value: `flex-${ breakpoint }column-reverse`,
									label: __(
										'Flex Column Reverse',
										'resource'
									),
								},
							] }
							onChange={ setFlexDirection }
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl
							label={ __( 'Justify Content', 'resource' ) }
							value={ justifyContent }
							options={ [
								{ value: '', label: __( 'None', 'resource' ) },
								{
									value: `justify-content-${ breakpoint }start`,
									label: __( 'Start', 'resource' ),
								},
								{
									value: `justify-content-${ breakpoint }end`,
									label: __( 'End', 'resource' ),
								},
								{
									value: `justify-content-${ breakpoint }center`,
									label: __( 'Center', 'resource' ),
								},
								{
									value: `justify-content-${ breakpoint }between`,
									label: __( 'Between', 'resource' ),
								},
								{
									value: `justify-content-${ breakpoint }around`,
									label: __( 'Around', 'resource' ),
								},
								{
									value: `justify-content-${ breakpoint }evenly`,
									label: __( 'Evenly', 'resource' ),
								},
							] }
							onChange={ setJustifyContent }
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl
							label={ __( 'Align Items', 'resource' ) }
							value={ alignItems }
							options={ [
								{ value: '', label: __( 'None', 'resource' ) },
								{
									value: `align-items-${ breakpoint }start`,
									label: __( 'Start', 'resource' ),
								},
								{
									value: `align-items-${ breakpoint }end`,
									label: __( 'End', 'resource' ),
								},
								{
									value: `align-items-${ breakpoint }center`,
									label: __( 'Center', 'resource' ),
								},
								{
									value: `align-items-${ breakpoint }baseline`,
									label: __( 'Baseline', 'resource' ),
								},
								{
									value: `align-items-${ breakpoint }stretch`,
									label: __( 'Stretch', 'resource' ),
								},
							] }
							onChange={ setAlignItems }
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl
							label={ __( 'Align Self', 'resource' ) }
							value={ alignSelf }
							options={ [
								{ value: '', label: __( 'None', 'resource' ) },
								{
									value: `align-self-${ breakpoint }start`,
									label: __( 'Start', 'resource' ),
								},
								{
									value: `align-self-${ breakpoint }end`,
									label: __( 'End', 'resource' ),
								},
								{
									value: `align-self-${ breakpoint }center`,
									label: __( 'Center', 'resource' ),
								},
								{
									value: `align-self-${ breakpoint }baseline`,
									label: __( 'Baseline', 'resource' ),
								},
								{
									value: `align-self-${ breakpoint }stretch`,
									label: __( 'Stretch', 'resource' ),
								},
							] }
							onChange={ setAlignSelf }
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl
							label={ __( 'Fill, Grow, & Shrink', 'resource' ) }
							value={ fillGrowShrink }
							options={ [
								{ value: '', label: __( 'None', 'resource' ) },
								{
									value: `flex-${ breakpoint }fill`,
									label: __( 'Fill', 'resource' ),
								},
								{
									value: `flex-${ breakpoint }grow-0`,
									label: __( 'Grow 0', 'resource' ),
								},
								{
									value: `flex-${ breakpoint }grow-1`,
									label: __( 'Grow 1', 'resource' ),
								},
								{
									value: `flex-${ breakpoint }shrink-0`,
									label: __( 'Shrink 0', 'resource' ),
								},
								{
									value: `flex-${ breakpoint }shrink-1`,
									label: __( 'Shrink 1', 'resource' ),
								},
							] }
							onChange={ setFillGrowShrink }
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl
							label={ __( 'Wrap', 'resource' ) }
							value={ wrap }
							options={ [
								{ value: '', label: __( 'None', 'resource' ) },
								{
									value: `flex-${ breakpoint }nowrap`,
									label: __( 'No Wrap', 'resource' ),
								},
								{
									value: `flex-${ breakpoint }wrap`,
									label: __( 'Wrap', 'resource' ),
								},
								{
									value: `flex-${ breakpoint }wrap-reverse`,
									label: __( 'Wrap Reverse', 'resource' ),
								},
							] }
							onChange={ setWrap }
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl
							label={ __( 'Order', 'resource' ) }
							value={ order }
							options={ [
								{ value: '', label: __( 'None', 'resource' ) },
								{
									value: 'order-first',
									label: __( 'first', 'resource' ),
								},
								{
									value: 'order-0',
									label: __( '0', 'resource' ),
								},
								{
									value: 'order-1',
									label: __( '1', 'resource' ),
								},
								{
									value: 'order-2',
									label: __( '2', 'resource' ),
								},
								{
									value: 'order-3',
									label: __( '3', 'resource' ),
								},
								{
									value: 'order-4',
									label: __( '4', 'resource' ),
								},
								{
									value: 'order-5',
									label: __( '5', 'resource' ),
								},
								{
									value: 'order-last',
									label: __( 'last', 'resource' ),
								},
							] }
							onChange={ setOrder }
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl
							label={ __( 'Align Content', 'resource' ) }
							value={ alignContent }
							options={ [
								{ value: '', label: __( 'None', 'resource' ) },
								{
									value: `align-content-${ breakpoint }start`,
									label: __( 'Start', 'resource' ),
								},
								{
									value: `align-content-${ breakpoint }end`,
									label: __( 'End', 'resource' ),
								},
								{
									value: `align-content-${ breakpoint }center`,
									label: __( 'Center', 'resource' ),
								},
								{
									value: `align-content-${ breakpoint }between`,
									label: __( 'Between', 'resource' ),
								},
								{
									value: `align-content-${ breakpoint }around`,
									label: __( 'Around', 'resource' ),
								},
								{
									value: `align-content-${ breakpoint }stretch`,
									label: __( 'Stretch', 'resource' ),
								},
							] }
							onChange={ setAlignContent }
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
