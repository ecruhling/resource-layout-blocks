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
 * ColumnControl
 * Component for controlling Column attributes
 *
 * @param breakpoint
 * @param breakpoint_name
 * @param columns
 * @param offset
 * @param setColumns
 * @param setOffset
 * @returns {JSX.Element}
 * @constructor
 */
export default function ColumnControl( {
	breakpoint,
	breakpoint_name,
	columns,
	offset,
	setColumns,
	setOffset,
} ) {
	// since the equal column class has no dash at the end, e.g. 'col', 'col-sm', 'col-md', etc,
	// check to see if there happens to be a dash on the end in the breakpoint builder.
	// if there is, remove the last character (dash)
	let equal_column_class = `col-${ breakpoint }`;

	if ( equal_column_class.slice( -1 ) === '-' ) {
		equal_column_class = equal_column_class.slice( 0, -1 );
	}

	return (
		<div>
			<CardHeader
				isBorderless={ true }
				isShady={ true }
				size="small"
				className="resource-card-header"
			>
				{ __( `${ breakpoint_name } COLUMNS`, 'resource' ) }
			</CardHeader>
			<CardBody size="small">
				<Flex wrap={ true }>
					<FlexItem>
						<SelectControl
							label={ __( 'Columns', 'resource' ) }
							value={ columns }
							options={ [
								{ value: '', label: __( '-', 'resource' ) },
								{
									value: equal_column_class,
									label: __( 'equal', 'resource' ),
								},
								{
									value: `col-${ breakpoint }1`,
									label: __( '1', 'resource' ),
								},
								{
									value: `col-${ breakpoint }2`,
									label: __( '2', 'resource' ),
								},
								{
									value: `col-${ breakpoint }3`,
									label: __( '3', 'resource' ),
								},
								{
									value: `col-${ breakpoint }4`,
									label: __( '4', 'resource' ),
								},
								{
									value: `col-${ breakpoint }5`,
									label: __( '5', 'resource' ),
								},
								{
									value: `col-${ breakpoint }6`,
									label: __( '6', 'resource' ),
								},
								{
									value: `col-${ breakpoint }7`,
									label: __( '7', 'resource' ),
								},
								{
									value: `col-${ breakpoint }8`,
									label: __( '8', 'resource' ),
								},
								{
									value: `col-${ breakpoint }9`,
									label: __( '9', 'resource' ),
								},
								{
									value: `col-${ breakpoint }10`,
									label: __( '10', 'resource' ),
								},
								{
									value: `col-${ breakpoint }11`,
									label: __( '11', 'resource' ),
								},
								{
									value: `col-${ breakpoint }12`,
									label: __( '12', 'resource' ),
								},
								{
									value: `col-${ breakpoint }auto`,
									label: __( 'auto', 'resource' ),
								},
							] }
							onChange={ setColumns }
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl
							label={ __( 'Offset', 'resource' ) }
							value={ offset }
							options={ [
								{ value: '', label: __( '-', 'resource' ) },
								{
									value: `offset-${ breakpoint }1`,
									label: __( '1', 'resource' ),
								},
								{
									value: `offset-${ breakpoint }2`,
									label: __( '2', 'resource' ),
								},
								{
									value: `offset-${ breakpoint }3`,
									label: __( '3', 'resource' ),
								},
								{
									value: `offset-${ breakpoint }4`,
									label: __( '4', 'resource' ),
								},
								{
									value: `offset-${ breakpoint }5`,
									label: __( '5', 'resource' ),
								},
								{
									value: `offset-${ breakpoint }6`,
									label: __( '6', 'resource' ),
								},
								{
									value: `offset-${ breakpoint }7`,
									label: __( '7', 'resource' ),
								},
								{
									value: `offset-${ breakpoint }8`,
									label: __( '8', 'resource' ),
								},
								{
									value: `offset-${ breakpoint }9`,
									label: __( '9', 'resource' ),
								},
								{
									value: `offset-${ breakpoint }10`,
									label: __( '10', 'resource' ),
								},
								{
									value: `offset-${ breakpoint }11`,
									label: __( '11', 'resource' ),
								},
								{
									value: `offset-${ breakpoint }12`,
									label: __( '12', 'resource' ),
								},
							] }
							onChange={ setOffset }
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
