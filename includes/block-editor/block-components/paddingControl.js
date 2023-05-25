/**
 * WordPress dependencies.
 */
import {__} from '@wordpress/i18n';
import {CardBody, CardHeader, Flex, FlexItem, SelectControl} from '@wordpress/components';

/**
 * DisplayControl.
 * Component for controlling Display attributes.
 *
 * @param paddingTop
 * @param paddingRight
 * @param paddingBottom
 * @param paddingLeft
 * @param setPaddingTop
 * @param setPaddingRight
 * @param setPaddingBottom
 * @param setPaddingLeft
 * @returns {JSX.Element}
 * @constructor
 */
export default function PaddingControl ({
																					paddingTop,
																					paddingRight,
																					paddingBottom,
																					paddingLeft,
																					setPaddingTop,
																					setPaddingRight,
																					setPaddingBottom,
																					setPaddingLeft,
																				}) {
	return (
		<div>
			<CardHeader isBorderless={true} isShady={true} size='small'>PADDING</CardHeader>
			<CardBody size='small'>
				<Flex wrap={true}>
					<FlexItem>
						<SelectControl label={__('Top', 'resource-layout-blocks')}
													 value={paddingTop}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
													 ]}
													 onChange={setPaddingTop}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Right', 'resource-layout-blocks')}
													 value={paddingRight}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
													 ]}
													 onChange={setPaddingRight}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Bottom', 'resource-layout-blocks')}
													 value={paddingBottom}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
													 ]}
													 onChange={setPaddingBottom}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Left', 'resource-layout-blocks')}
													 value={paddingLeft}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: '0', label: __('0', 'resource-layout-blocks')},
														 {value: '1', label: __('1', 'resource-layout-blocks')},
														 {value: '2', label: __('2', 'resource-layout-blocks')},
														 {value: '3', label: __('3', 'resource-layout-blocks')},
														 {value: '4', label: __('4', 'resource-layout-blocks')},
														 {value: '5', label: __('5', 'resource-layout-blocks')},
													 ]}
													 onChange={setPaddingLeft}
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
