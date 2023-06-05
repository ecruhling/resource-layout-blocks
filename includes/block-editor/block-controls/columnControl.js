/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';
import {CardBody, CardHeader, Flex, FlexItem, SelectControl} from '@wordpress/components';

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
export default function ColumnControl ({
																				 breakpoint,
																				 breakpoint_name,
																				 columns,
																				 offset,
																				 setColumns,
																				 setOffset,
																			 }) {
	return (
		<div>
			<CardHeader isBorderless={true} isShady={true} size='small' className='resource-card-header'>
				{__(`${breakpoint_name} COLUMNS`, 'resource-layout-blocks')}
			</CardHeader>
			<CardBody size='small'>
				<Flex wrap={true}>
					<FlexItem>
						<SelectControl label={__('Columns', 'resource-layout-blocks')}
													 value={columns}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: `col-${breakpoint}`, label: __('equal', 'resource-layout-blocks')},
														 {value: `col-${breakpoint}1`, label: __('1', 'resource-layout-blocks')},
														 {value: `col-${breakpoint}2`, label: __('2', 'resource-layout-blocks')},
														 {value: `col-${breakpoint}3`, label: __('3', 'resource-layout-blocks')},
														 {value: `col-${breakpoint}4`, label: __('4', 'resource-layout-blocks')},
														 {value: `col-${breakpoint}5`, label: __('5', 'resource-layout-blocks')},
														 {value: `col-${breakpoint}6`, label: __('6', 'resource-layout-blocks')},
														 {value: `col-${breakpoint}7`, label: __('7', 'resource-layout-blocks')},
														 {value: `col-${breakpoint}8`, label: __('8', 'resource-layout-blocks')},
														 {value: `col-${breakpoint}9`, label: __('9', 'resource-layout-blocks')},
														 {value: `col-${breakpoint}10`, label: __('10', 'resource-layout-blocks')},
														 {value: `col-${breakpoint}11`, label: __('11', 'resource-layout-blocks')},
														 {value: `col-${breakpoint}12`, label: __('12', 'resource-layout-blocks')},
														 {value: `col-${breakpoint}auto`, label: __('auto', 'resource-layout-blocks')},
													 ]}
													 onChange={setColumns}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Offset', 'resource-layout-blocks')}
													 value={offset}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: `offset-${breakpoint}1`, label: __('1', 'resource-layout-blocks')},
														 {value: `offset-${breakpoint}2`, label: __('2', 'resource-layout-blocks')},
														 {value: `offset-${breakpoint}3`, label: __('3', 'resource-layout-blocks')},
														 {value: `offset-${breakpoint}4`, label: __('4', 'resource-layout-blocks')},
														 {value: `offset-${breakpoint}5`, label: __('5', 'resource-layout-blocks')},
														 {value: `offset-${breakpoint}6`, label: __('6', 'resource-layout-blocks')},
														 {value: `offset-${breakpoint}7`, label: __('7', 'resource-layout-blocks')},
														 {value: `offset-${breakpoint}8`, label: __('8', 'resource-layout-blocks')},
														 {value: `offset-${breakpoint}9`, label: __('9', 'resource-layout-blocks')},
														 {value: `offset-${breakpoint}10`, label: __('10', 'resource-layout-blocks')},
														 {value: `offset-${breakpoint}11`, label: __('11', 'resource-layout-blocks')},
														 {value: `offset-${breakpoint}12`, label: __('12', 'resource-layout-blocks')},
													 ]}
													 onChange={setOffset}
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
