/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';
import {CardBody, CardHeader, Flex, FlexItem, SelectControl} from '@wordpress/components';

/**
 * MarginControl
 * Component for controlling Margin attributes
 *
 * @param breakpoint
 * @param breakpoint_name
 * @param marginTop
 * @param marginRight
 * @param marginBottom
 * @param marginLeft
 * @param setMarginTop
 * @param setMarginRight
 * @param setMarginBottom
 * @param setMarginLeft
 * @returns {JSX.Element}
 * @constructor
 */
export default function MarginControl ({
																				 breakpoint,
																				 breakpoint_name,
																				 marginTop,
																				 marginRight,
																				 marginBottom,
																				 marginLeft,
																				 setMarginTop,
																				 setMarginRight,
																				 setMarginBottom,
																				 setMarginLeft,
																			 }) {
	return (
		<div>
			<CardHeader isBorderless={true} isShady={true} size='small'
									className='resource-card-header'>{__(`${breakpoint_name} MARGIN`, 'resource-layout-blocks')}</CardHeader>
			<CardBody size='small'>
				<Flex wrap={true}>
					<FlexItem>
						<SelectControl label={__('Top', 'resource-layout-blocks')}
													 value={marginTop}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: `mt-${breakpoint}0`, label: __('0', 'resource-layout-blocks')},
														 {value: `mt-${breakpoint}1`, label: __('1', 'resource-layout-blocks')},
														 {value: `mt-${breakpoint}2`, label: __('2', 'resource-layout-blocks')},
														 {value: `mt-${breakpoint}3`, label: __('3', 'resource-layout-blocks')},
														 {value: `mt-${breakpoint}4`, label: __('4', 'resource-layout-blocks')},
														 {value: `mt-${breakpoint}5`, label: __('5', 'resource-layout-blocks')},
														 {value: `mt-${breakpoint}auto`, label: __('Auto', 'resource-layout-blocks')},
													 ]}
													 onChange={setMarginTop}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Right', 'resource-layout-blocks')}
													 value={marginRight}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: `me-${breakpoint}0`, label: __('0', 'resource-layout-blocks')},
														 {value: `me-${breakpoint}1`, label: __('1', 'resource-layout-blocks')},
														 {value: `me-${breakpoint}2`, label: __('2', 'resource-layout-blocks')},
														 {value: `me-${breakpoint}3`, label: __('3', 'resource-layout-blocks')},
														 {value: `me-${breakpoint}4`, label: __('4', 'resource-layout-blocks')},
														 {value: `me-${breakpoint}5`, label: __('5', 'resource-layout-blocks')},
														 {value: `me-${breakpoint}auto`, label: __('Auto', 'resource-layout-blocks')},
													 ]}
													 onChange={setMarginRight}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Bottom', 'resource-layout-blocks')}
													 value={marginBottom}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: `mb-${breakpoint}0`, label: __('0', 'resource-layout-blocks')},
														 {value: `mb-${breakpoint}1`, label: __('1', 'resource-layout-blocks')},
														 {value: `mb-${breakpoint}2`, label: __('2', 'resource-layout-blocks')},
														 {value: `mb-${breakpoint}3`, label: __('3', 'resource-layout-blocks')},
														 {value: `mb-${breakpoint}4`, label: __('4', 'resource-layout-blocks')},
														 {value: `mb-${breakpoint}5`, label: __('5', 'resource-layout-blocks')},
														 {value: `mb-${breakpoint}auto`, label: __('Auto', 'resource-layout-blocks')},
													 ]}
													 onChange={setMarginBottom}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Left', 'resource-layout-blocks')}
													 value={marginLeft}
													 options={[
														 {value: '', label: __('Select Value', 'resource-layout-blocks')},
														 {value: `ms-${breakpoint}0`, label: __('0', 'resource-layout-blocks')},
														 {value: `ms-${breakpoint}1`, label: __('1', 'resource-layout-blocks')},
														 {value: `ms-${breakpoint}2`, label: __('2', 'resource-layout-blocks')},
														 {value: `ms-${breakpoint}3`, label: __('3', 'resource-layout-blocks')},
														 {value: `ms-${breakpoint}4`, label: __('4', 'resource-layout-blocks')},
														 {value: `ms-${breakpoint}5`, label: __('5', 'resource-layout-blocks')},
														 {value: `ms-${breakpoint}auto`, label: __('Auto', 'resource-layout-blocks')},
													 ]}
													 onChange={setMarginLeft}
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
