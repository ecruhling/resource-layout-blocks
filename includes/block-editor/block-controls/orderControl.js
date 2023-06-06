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
				{__(`${breakpoint_name} ORDER`, 'resource')}
			</CardHeader>
			<CardBody size='small'>
				<Flex wrap={true}>
					<FlexItem>
						<SelectControl label={__('Order', 'resource')}
													 value={order}
													 options={[
														 {value: '', label: __('Select Option', 'resource')},
														 {value: `order-${breakpoint}first`, label: __('first', 'resource')},
														 {value: `order-${breakpoint}1`, label: __('1', 'resource')},
														 {value: `order-${breakpoint}2`, label: __('2', 'resource')},
														 {value: `order-${breakpoint}3`, label: __('3', 'resource')},
														 {value: `order-${breakpoint}4`, label: __('4', 'resource')},
														 {value: `order-${breakpoint}5`, label: __('5', 'resource')},
														 {value: `order-${breakpoint}last`, label: __('last', 'resource')},
													 ]}
													 onChange={setOrder}
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
