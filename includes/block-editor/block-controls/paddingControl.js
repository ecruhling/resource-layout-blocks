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
 * PaddingControl
 * Component for controlling Padding attributes
 *
 * @param {string}   breakpoint
 * @param {string}   breakpointName
 * @param {string}   paddingTop
 * @param {string}   paddingRight
 * @param {string}   paddingBottom
 * @param {string}   paddingLeft
 * @param {Function} setPaddingTop
 * @param {Function} setPaddingRight
 * @param {Function} setPaddingBottom
 * @param {Function} setPaddingLeft
 * @return {JSX.Element} The Padding Control for the Block Editor sidebar.
 * @class
 */
export default function PaddingControl( {
	breakpoint,
	breakpointName,
	paddingTop,
	paddingRight,
	paddingBottom,
	paddingLeft,
	setPaddingTop,
	setPaddingRight,
	setPaddingBottom,
	setPaddingLeft,
} ) {
	return (
		<div>
			<CardHeader
				isBorderless={ true }
				isShady={ true }
				size="small"
				className="resource-card-header"
			>
				{ `${ breakpointName } PADDING` }
			</CardHeader>
			<CardBody size="small">
				<Flex wrap={ true }>
					<FlexItem>
						<SelectControl
							label={ iconTop }
							value={ paddingTop }
							style={ { maxWidth: '42.5px' } }
							options={ [
								{ value: '', label: __( '-', 'resource' ) },
								{
									value: `pt-${ breakpoint }0`,
									label: __( '0', 'resource' ),
								},
								{
									value: `pt-${ breakpoint }1`,
									label: __( '1', 'resource' ),
								},
								{
									value: `pt-${ breakpoint }2`,
									label: __( '2', 'resource' ),
								},
								{
									value: `pt-${ breakpoint }3`,
									label: __( '3', 'resource' ),
								},
								{
									value: `pt-${ breakpoint }4`,
									label: __( '4', 'resource' ),
								},
								{
									value: `pt-${ breakpoint }5`,
									label: __( '5', 'resource' ),
								},
							] }
							onChange={ setPaddingTop }
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl
							label={ iconEnd }
							value={ paddingRight }
							style={ { maxWidth: '42.5px' } }
							options={ [
								{ value: '', label: __( '-', 'resource' ) },
								{
									value: `pe-${ breakpoint }0`,
									label: __( '0', 'resource' ),
								},
								{
									value: `pe-${ breakpoint }1`,
									label: __( '1', 'resource' ),
								},
								{
									value: `pe-${ breakpoint }2`,
									label: __( '2', 'resource' ),
								},
								{
									value: `pe-${ breakpoint }3`,
									label: __( '3', 'resource' ),
								},
								{
									value: `pe-${ breakpoint }4`,
									label: __( '4', 'resource' ),
								},
								{
									value: `pe-${ breakpoint }5`,
									label: __( '5', 'resource' ),
								},
							] }
							onChange={ setPaddingRight }
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl
							label={ iconBottom }
							value={ paddingBottom }
							style={ { maxWidth: '42.5px' } }
							options={ [
								{ value: '', label: __( '-', 'resource' ) },
								{
									value: `pb-${ breakpoint }0`,
									label: __( '0', 'resource' ),
								},
								{
									value: `pb-${ breakpoint }1`,
									label: __( '1', 'resource' ),
								},
								{
									value: `pb-${ breakpoint }2`,
									label: __( '2', 'resource' ),
								},
								{
									value: `pb-${ breakpoint }3`,
									label: __( '3', 'resource' ),
								},
								{
									value: `pb-${ breakpoint }4`,
									label: __( '4', 'resource' ),
								},
								{
									value: `pb-${ breakpoint }5`,
									label: __( '5', 'resource' ),
								},
							] }
							onChange={ setPaddingBottom }
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl
							label={ iconStart }
							value={ paddingLeft }
							style={ { maxWidth: '42.5px' } }
							options={ [
								{ value: '', label: __( '-', 'resource' ) },
								{
									value: `ps-${ breakpoint }0`,
									label: __( '0', 'resource' ),
								},
								{
									value: `ps-${ breakpoint }1`,
									label: __( '1', 'resource' ),
								},
								{
									value: `ps-${ breakpoint }2`,
									label: __( '2', 'resource' ),
								},
								{
									value: `ps-${ breakpoint }3`,
									label: __( '3', 'resource' ),
								},
								{
									value: `ps-${ breakpoint }4`,
									label: __( '4', 'resource' ),
								},
								{
									value: `ps-${ breakpoint }5`,
									label: __( '5', 'resource' ),
								},
							] }
							onChange={ setPaddingLeft }
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
