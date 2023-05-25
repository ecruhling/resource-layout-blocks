/**
 * WordPress dependencies.
 */
import {__} from '@wordpress/i18n';
import {CardBody, CardHeader, Flex, FlexItem, SelectControl} from '@wordpress/components';

/**
 * DisplayControl.
 * Component for controlling Display attributes.
 *
 * @param columns
 * @param order
 * @param setOrder
 * @returns {JSX.Element}
 * @constructor
 */
export default function ColumnsDisplayControl ({
																								 order,
																								 setOrder,
																							 }) {
	return (
		<div>
			<CardHeader isBorderless={true} isShady={true} size='small'>ORDER</CardHeader>
			<CardBody size='small'>
				<Flex wrap={true}>
					<FlexItem>
						<SelectControl label={__('Order', 'resource-layout-blocks')}
													 value={order}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'first', label: __('First', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
														 {value: 'last', label: __('Last', 'resource-layout-blocks')},
													 ]}
													 onChange={setOrder}
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
