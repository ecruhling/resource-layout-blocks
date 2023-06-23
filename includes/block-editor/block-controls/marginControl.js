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
 * Internal dependencies
 */
import iconTop from './iconTop';
import iconEnd from './iconEnd';
import iconBottom from './iconBottom';
import iconStart from './iconStart';

/**
 * MarginControl.
 *
 * React Component for controlling Margin attributes.
 *
 * @since      1.0.0
 *
 * @class
 *
 * @param {Object}   props                 Component props.
 * @param {string}   props.breakpoint      The breakpoint name for this Component.
 * @param {string}   props.breakpointName  The short breakpoint name for this Component.
 * @param {string}   props.marginTop       The MarginTop attribute.
 * @param {string}   props.marginRight     The MarginRight attribute.
 * @param {string}   props.marginBottom    The MarginBottom attribute.
 * @param {string}   props.marginLeft      The MarginLeft attribute.
 * @param {Function} props.setMarginTop    Set the MarginTop attribute.
 * @param {Function} props.setMarginRight  Set the MarginRight attribute.
 * @param {Function} props.setMarginBottom Set the MarginBottom attribute.
 * @param {Function} props.setMarginLeft   Set the MarginLeft attribute.
 *
 * @return {JSX.Element} The Margin Component for the Block Editor sidebar.
 */
export default function MarginControl( {
	breakpoint,
	breakpointName,
	marginTop,
	marginRight,
	marginBottom,
	marginLeft,
	setMarginTop,
	setMarginRight,
	setMarginBottom,
	setMarginLeft,
} ) {
	return (
		<div>
			<CardHeader
				isBorderless={ true }
				isShady={ true }
				size="small"
				className="resource-card-header"
			>
				{ `${ breakpointName } MARGIN` }
			</CardHeader>
			<CardBody size="small">
				<Flex wrap={ true }>
					<FlexItem>
						<SelectControl
							label={ iconTop }
							value={ marginTop }
							style={ { maxWidth: '42.5px' } }
							options={ [
								{ value: '', label: __( '-', 'resource' ) },
								{
									value: `mt-${ breakpoint }0`,
									label: __( '0', 'resource' ),
								},
								{
									value: `mt-${ breakpoint }1`,
									label: __( '1', 'resource' ),
								},
								{
									value: `mt-${ breakpoint }2`,
									label: __( '2', 'resource' ),
								},
								{
									value: `mt-${ breakpoint }3`,
									label: __( '3', 'resource' ),
								},
								{
									value: `mt-${ breakpoint }4`,
									label: __( '4', 'resource' ),
								},
								{
									value: `mt-${ breakpoint }5`,
									label: __( '5', 'resource' ),
								},
								{
									value: `mt-${ breakpoint }auto`,
									label: __( 'Auto', 'resource' ),
								},
							] }
							onChange={ setMarginTop }
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl
							label={ iconEnd }
							value={ marginRight }
							style={ { maxWidth: '42.5px' } }
							options={ [
								{ value: '', label: __( '-', 'resource' ) },
								{
									value: `me-${ breakpoint }0`,
									label: __( '0', 'resource' ),
								},
								{
									value: `me-${ breakpoint }1`,
									label: __( '1', 'resource' ),
								},
								{
									value: `me-${ breakpoint }2`,
									label: __( '2', 'resource' ),
								},
								{
									value: `me-${ breakpoint }3`,
									label: __( '3', 'resource' ),
								},
								{
									value: `me-${ breakpoint }4`,
									label: __( '4', 'resource' ),
								},
								{
									value: `me-${ breakpoint }5`,
									label: __( '5', 'resource' ),
								},
								{
									value: `me-${ breakpoint }auto`,
									label: __( 'Auto', 'resource' ),
								},
							] }
							onChange={ setMarginRight }
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl
							label={ iconBottom }
							value={ marginBottom }
							style={ { maxWidth: '42.5px' } }
							options={ [
								{ value: '', label: __( '-', 'resource' ) },
								{
									value: `mb-${ breakpoint }0`,
									label: __( '0', 'resource' ),
								},
								{
									value: `mb-${ breakpoint }1`,
									label: __( '1', 'resource' ),
								},
								{
									value: `mb-${ breakpoint }2`,
									label: __( '2', 'resource' ),
								},
								{
									value: `mb-${ breakpoint }3`,
									label: __( '3', 'resource' ),
								},
								{
									value: `mb-${ breakpoint }4`,
									label: __( '4', 'resource' ),
								},
								{
									value: `mb-${ breakpoint }5`,
									label: __( '5', 'resource' ),
								},
								{
									value: `mb-${ breakpoint }auto`,
									label: __( 'Auto', 'resource' ),
								},
							] }
							onChange={ setMarginBottom }
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl
							label={ iconStart }
							value={ marginLeft }
							style={ { maxWidth: '42.5px' } }
							options={ [
								{ value: '', label: __( '-', 'resource' ) },
								{
									value: `ms-${ breakpoint }0`,
									label: __( '0', 'resource' ),
								},
								{
									value: `ms-${ breakpoint }1`,
									label: __( '1', 'resource' ),
								},
								{
									value: `ms-${ breakpoint }2`,
									label: __( '2', 'resource' ),
								},
								{
									value: `ms-${ breakpoint }3`,
									label: __( '3', 'resource' ),
								},
								{
									value: `ms-${ breakpoint }4`,
									label: __( '4', 'resource' ),
								},
								{
									value: `ms-${ breakpoint }5`,
									label: __( '5', 'resource' ),
								},
								{
									value: `ms-${ breakpoint }auto`,
									label: __( 'Auto', 'resource' ),
								},
							] }
							onChange={ setMarginLeft }
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
