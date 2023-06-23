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
 * DisplayControl.
 *
 * React Component for controlling Display attributes.
 *
 * @since      1.0.0
 *
 * @class
 *
 * @param {Object}   props                Component props.
 * @param {string}   props.breakpoint     The breakpoint name for this Component.
 * @param {string}   props.breakpointName The short breakpoint name for this Component.
 * @param {string}   props.display        The Display attribute.
 * @param {Function} props.setDisplay     Set the Display attribute.
 *
 * @return {JSX.Element} The Display Component for the Block Editor sidebar.
 */
export default function ColumnsDisplayControl( {
	breakpoint,
	breakpointName,
	display,
	setDisplay,
} ) {
	return (
		<div>
			<CardHeader
				isBorderless={ true }
				isShady={ true }
				size="small"
				className="resource-card-header"
			>
				{ `${ breakpointName } DISPLAY` }
			</CardHeader>
			<CardBody size="small">
				<Flex wrap={ true }>
					<FlexItem>
						<SelectControl
							label={ __( 'Display', 'resource' ) }
							value={ display }
							options={ [
								{
									value: '',
									label: __( 'Default', 'resource' ),
								},
								{
									value: `d-${ breakpoint }none`,
									label: __( 'None', 'resource' ),
								},
								{
									value: `d-${ breakpoint }inline`,
									label: __( 'Inline', 'resource' ),
								},
								{
									value: `d-${ breakpoint }inline-block`,
									label: __( 'Inline-Block', 'resource' ),
								},
								{
									value: `d-${ breakpoint }block`,
									label: __( 'Block', 'resource' ),
								},
								{
									value: `d-${ breakpoint }grid`,
									label: __( 'Grid', 'resource' ),
								},
								{
									value: `d-${ breakpoint }inline-grid`,
									label: __( 'Inline Grid', 'resource' ),
								},
								{
									value: `d-${ breakpoint }table`,
									label: __( 'Table', 'resource' ),
								},
								{
									value: `d-${ breakpoint }table-cell`,
									label: __( 'Table Cell', 'resource' ),
								},
								{
									value: `d-${ breakpoint }table-row`,
									label: __( 'Table Row', 'resource' ),
								},
								{
									value: `d-${ breakpoint }flex`,
									label: __( 'Flex', 'resource' ),
								},
								{
									value: `d-${ breakpoint }inline-flex`,
									label: __( 'Inline Flex', 'resource' ),
								},
							] }
							onChange={ setDisplay }
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
