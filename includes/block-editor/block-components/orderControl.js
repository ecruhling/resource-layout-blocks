/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';
import {CardBody, CardHeader, Flex, FlexItem, SelectControl} from '@wordpress/components';

/**
 * OrderControl
 * Component for controlling Order attributes.
 *
 * @param columns
 * @param order
 * @param setOrder
 * @returns {JSX.Element}
 * @constructor
 */
export default function OrderControl ({
																				order,
																				setOrder,
																			}) {
	return (
		<div>
			<CardHeader isBorderless={true} isShady={true} size='small'>{__('ORDER', 'resource-layout-blocks')}</CardHeader>
			<CardBody size='small'>
				<Flex wrap={true}>
					<FlexItem>
						<SelectControl label={__('Order', 'resource-layout-blocks')}
													 value={order}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'order-first', label: __('first', 'resource-layout-blocks')},
														 {value: 'order-1', label: __('1', 'resource-layout-blocks')},
														 {value: 'order-2', label: __('2', 'resource-layout-blocks')},
														 {value: 'order-3', label: __('3', 'resource-layout-blocks')},
														 {value: 'order-4', label: __('4', 'resource-layout-blocks')},
														 {value: 'order-5', label: __('5', 'resource-layout-blocks')},
														 {value: 'order-last', label: __('last', 'resource-layout-blocks')},
													 ]}
													 onChange={setOrder}
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
