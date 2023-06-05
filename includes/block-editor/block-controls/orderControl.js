/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';
import {CardBody, CardHeader, Flex, FlexItem, SelectControl} from '@wordpress/components';

/**
 * OrderControl
 * Component for controlling Order attributes
 *
 * @param breakpoint
 * @param breakpoint_name
 * @param order
 * @param setOrder
 * @returns {JSX.Element}
 * @constructor
 */
export default function OrderControl ({
																				breakpoint,
																				breakpoint_name,
																				order,
																				setOrder,
																			}) {
	return (
		<div>
			<CardHeader isBorderless={true} isShady={true} size='small' className='resource-card-header'>
				{__(`${breakpoint_name} ORDER`, 'resource-layout-blocks')}
			</CardHeader>
			<CardBody size='small'>
				<Flex wrap={true}>
					<FlexItem>
						<SelectControl label={__('Order', 'resource-layout-blocks')}
													 value={order}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: `order-${breakpoint}first`, label: __('first', 'resource-layout-blocks')},
														 {value: `order-${breakpoint}1`, label: __('1', 'resource-layout-blocks')},
														 {value: `order-${breakpoint}2`, label: __('2', 'resource-layout-blocks')},
														 {value: `order-${breakpoint}3`, label: __('3', 'resource-layout-blocks')},
														 {value: `order-${breakpoint}4`, label: __('4', 'resource-layout-blocks')},
														 {value: `order-${breakpoint}5`, label: __('5', 'resource-layout-blocks')},
														 {value: `order-${breakpoint}last`, label: __('last', 'resource-layout-blocks')},
													 ]}
													 onChange={setOrder}
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
