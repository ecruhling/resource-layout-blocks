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
 * OrderControl.
 *
 * React Component for controlling Order attributes.
 *
 * @since      1.0.0
 *
 * @class
 *
 * @param {Object}   props                Component props.
 * @param {string}   props.breakpoint     The breakpoint name for this Component.
 * @param {string}   props.breakpointName The short breakpoint name for this Component.
 * @param {string}   props.order          The Order attribute.
 * @param {Function} props.setOrder       Set the Order attribute.
 *
 * @return {JSX.Element} The Order Component for the Block Editor sidebar.
 */
export default function OrderControl( {
	breakpoint,
	breakpointName,
	order,
	setOrder,
} ) {
	return (
		<div>
			<CardHeader
				isBorderless={ true }
				isShady={ true }
				size="small"
				className="resource-card-header"
			>
				{ `${ breakpointName } ORDER` }
			</CardHeader>
			<CardBody size="small">
				<Flex wrap={ true }>
					<FlexItem>
						<SelectControl
							label={ __( 'Order', 'resource' ) }
							value={ order }
							options={ [
								{
									value: '',
									label: __( 'Default', 'resource' ),
								},
								{
									value: `order-${ breakpoint }first`,
									label: __( 'first', 'resource' ),
								},
								{
									value: `order-${ breakpoint }1`,
									label: __( '1', 'resource' ),
								},
								{
									value: `order-${ breakpoint }2`,
									label: __( '2', 'resource' ),
								},
								{
									value: `order-${ breakpoint }3`,
									label: __( '3', 'resource' ),
								},
								{
									value: `order-${ breakpoint }4`,
									label: __( '4', 'resource' ),
								},
								{
									value: `order-${ breakpoint }5`,
									label: __( '5', 'resource' ),
								},
								{
									value: `order-${ breakpoint }last`,
									label: __( 'last', 'resource' ),
								},
							] }
							onChange={ setOrder }
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
