/**
 * WordPress dependencies.
 */
import {__} from '@wordpress/i18n';
import {CardBody, CardHeader, Flex, FlexItem, SelectControl} from '@wordpress/components';

/**
 * ColumnsDisplayControl.
 * Component for controlling Columns & Display attributes.
 *
 * @param columns
 * @param display
 * @param offset
 * @param setColumns
 * @param setDisplay
 * @param setOffset
 * @returns {JSX.Element}
 * @constructor
 */
export default function ColumnsDisplayControl ({
																								 columns,
																								 display,
																								 offset,
																								 setColumns,
																								 setDisplay,
																								 setOffset,
																							 }) {
	return (
		<div>
			<CardHeader isBorderless={true} isShady={true}
									size='small'>{__('COLUMNS & DISPLAY', 'resource-layout-blocks')}</CardHeader>
			<CardBody size='small'>
				<Flex wrap={true}>
					<FlexItem>
						<SelectControl label={__('Columns', 'resource-layout-blocks')}
													 value={columns}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: 'equal', label: __('equal', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: '8', label: __('8', 'resource-layout-blocks')},
														 {value: '9', label: __('9', 'resource-layout-blocks')},
														 {value: '10', label: __('10', 'resource-layout-blocks')},
														 {value: '11', label: __('11', 'resource-layout-blocks')},
														 {value: '12', label: __('12', 'resource-layout-blocks')},
														 {value: 'auto', label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={setColumns}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Display', 'resource-layout-blocks')}
													 value={display}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'none', label: __('None', 'resource-layout-blocks')},
														 {value: 'inline', label: __('Inline', 'resource-layout-blocks')},
														 {
															 value: 'inline-block',
															 label: __('Inline-Block', 'resource-layout-blocks'),
														 },
														 {value: 'block', label: __('Block', 'resource-layout-blocks')},
														 {value: 'grid', label: __('Grid', 'resource-layout-blocks')},
														 {
															 value: 'inline-grid',
															 label: __('Inline Grid', 'resource-layout-blocks'),
														 },
														 {value: 'table', label: __('Table', 'resource-layout-blocks')},
														 {
															 value: 'table-cell',
															 label: __('Table Cell', 'resource-layout-blocks'),
														 },
														 {
															 value: 'table-row',
															 label: __('Table Row', 'resource-layout-blocks'),
														 },
														 {value: 'flex', label: __('Flex', 'resource-layout-blocks')},
														 {
															 value: 'inline-flex',
															 label: __('Inline Flex', 'resource-layout-blocks'),
														 },
													 ]}
													 onChange={setDisplay}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Offset', 'resource-layout-blocks')}
													 value={offset}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: '6', label: __('6', 'resource-layout-blocks')},
														 {value: '7', label: __('7', 'resource-layout-blocks')},
														 {value: '8', label: __('8', 'resource-layout-blocks')},
														 {value: '9', label: __('9', 'resource-layout-blocks')},
														 {value: '10', label: __('10', 'resource-layout-blocks')},
														 {value: '11', label: __('11', 'resource-layout-blocks')},
														 {value: '12', label: __('12', 'resource-layout-blocks')},
													 ]}
													 onChange={setOffset}
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
