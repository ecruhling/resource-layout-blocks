/**
 * WordPress dependencies.
 */
import {__} from '@wordpress/i18n';
import {CardBody, CardHeader, Flex, FlexItem, SelectControl} from '@wordpress/components';

/**
 * FlexControl.
 * Component for controlling attributes of flex items.
 *
 * @param breakpoint
 * @param breakpoint_name
 * @param flexDirection
 * @param justifyContent
 * @param alignItems
 * @param alignSelf
 * @param fillGrowShrink
 * @param wrap
 * @param order
 * @param alignContent
 * @param setFlexDirection
 * @param setJustifyContent
 * @param setAlignItems
 * @param setAlignSelf
 * @param setFillGrowShrink
 * @param setWrap
 * @param setOrder
 * @param setAlignContent
 * @returns {JSX.Element}
 * @constructor
 */
export default function FlexControl ({
																			 breakpoint,
																			 breakpoint_name,
																			 flexDirection,
																			 justifyContent,
																			 alignItems,
																			 alignSelf,
																			 fillGrowShrink,
																			 wrap,
																			 order,
																			 alignContent,
																			 setFlexDirection,
																			 setJustifyContent,
																			 setAlignItems,
																			 setAlignSelf,
																			 setFillGrowShrink,
																			 setWrap,
																			 setOrder,
																			 setAlignContent,
																		 }) {
	return (
		<div>
			<CardHeader isBorderless={true} isShady={true}
									size='small'
									className='resource-card-header'>{__(`${breakpoint_name} FLEX ATTRIBUTES`, 'resource-layout-blocks')}</CardHeader>
			<CardBody size='small'>
				<Flex wrap={true}>
					<FlexItem>
						<SelectControl label={__('Direction', 'resource-layout-blocks')}
													 value={flexDirection}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: `flex-${breakpoint}row`, label: __('Flex Row', 'resource-layout-blocks')},
														 {
															 value: `flex-${breakpoint}row-reverse`,
															 label: __('Flex Row Reverse', 'resource-layout-blocks'),
														 },
														 {value: `flex-${breakpoint}column`, label: __('Flex Column', 'resource-layout-blocks')},
														 {
															 value: `flex-${breakpoint}column-reverse`,
															 label: __('Flex Column Reverse', 'resource-layout-blocks'),
														 },
													 ]}
													 onChange={setFlexDirection}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Justify Content', 'resource-layout-blocks')}
													 value={justifyContent}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {
															 value: `justify-content-${breakpoint}start`,
															 label: __('Start', 'resource-layout-blocks'),
														 },
														 {value: `justify-content-${breakpoint}end`, label: __('End', 'resource-layout-blocks')},
														 {
															 value: `justify-content-${breakpoint}center`,
															 label: __('Center', 'resource-layout-blocks'),
														 },
														 {
															 value: `justify-content-${breakpoint}between`,
															 label: __('Between', 'resource-layout-blocks'),
														 },
														 {
															 value: `justify-content-${breakpoint}around`,
															 label: __('Around', 'resource-layout-blocks'),
														 },
														 {
															 value: `justify-content-${breakpoint}evenly`,
															 label: __('Evenly', 'resource-layout-blocks'),
														 },
													 ]}
													 onChange={setJustifyContent}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Align Items', 'resource-layout-blocks')}
													 value={alignItems}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: `align-items-${breakpoint}start`, label: __('Start', 'resource-layout-blocks')},
														 {value: `align-items-${breakpoint}end`, label: __('End', 'resource-layout-blocks')},
														 {value: `align-items-${breakpoint}center`, label: __('Center', 'resource-layout-blocks')},
														 {
															 value: `align-items-${breakpoint}baseline`,
															 label: __('Baseline', 'resource-layout-blocks'),
														 },
														 {
															 value: `align-items-${breakpoint}stretch`,
															 label: __('Stretch', 'resource-layout-blocks'),
														 },
													 ]}
													 onChange={setAlignItems}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Align Self', 'resource-layout-blocks')}
													 value={alignSelf}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: `align-self-${breakpoint}start`, label: __('Start', 'resource-layout-blocks')},
														 {value: `align-self-${breakpoint}end`, label: __('End', 'resource-layout-blocks')},
														 {value: `align-self-${breakpoint}center`, label: __('Center', 'resource-layout-blocks')},
														 {
															 value: `align-self-${breakpoint}baseline`,
															 label: __('Baseline', 'resource-layout-blocks'),
														 },
														 {value: `align-self-${breakpoint}stretch`, label: __('Stretch', 'resource-layout-blocks')},
													 ]}
													 onChange={setAlignSelf}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Fill, Grow, & Shrink', 'resource-layout-blocks')}
													 value={fillGrowShrink}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: `flex-${breakpoint}fill`, label: __('Fill', 'resource-layout-blocks')},
														 {value: `flex-${breakpoint}grow-0`, label: __('Grow 0', 'resource-layout-blocks')},
														 {value: `flex-${breakpoint}grow-1`, label: __('Grow 1', 'resource-layout-blocks')},
														 {value: `flex-${breakpoint}shrink-0`, label: __('Shrink 0', 'resource-layout-blocks')},
														 {value: `flex-${breakpoint}shrink-1`, label: __('Shrink 1', 'resource-layout-blocks')},
													 ]}
													 onChange={setFillGrowShrink}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Wrap', 'resource-layout-blocks')}
													 value={wrap}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: `flex-${breakpoint}nowrap`, label: __('No Wrap', 'resource-layout-blocks')},
														 {value: `flex-${breakpoint}wrap`, label: __('Wrap', 'resource-layout-blocks')},
														 {
															 value: `flex-${breakpoint}wrap-reverse`,
															 label: __('Wrap Reverse', 'resource-layout-blocks'),
														 },
													 ]}
													 onChange={setWrap}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Order', 'resource-layout-blocks')}
													 value={order}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'order-first', label: __('first', 'resource-layout-blocks')},
														 {value: 'order-0', label: __('0', 'resource-layout-blocks')},
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
					<FlexItem>
						<SelectControl label={__('Align Content', 'resource-layout-blocks')}
													 value={alignContent}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {
															 value: `align-content-${breakpoint}start`,
															 label: __('Start', 'resource-layout-blocks'),
														 },
														 {value: `align-content-${breakpoint}end`, label: __('End', 'resource-layout-blocks')},
														 {
															 value: `justify-content-${breakpoint}center`,
															 label: __('Center', 'resource-layout-blocks'),
														 },
														 {
															 value: `align-content-${breakpoint}between`,
															 label: __('Between', 'resource-layout-blocks'),
														 },
														 {
															 value: `align-content-${breakpoint}around`,
															 label: __('Around', 'resource-layout-blocks'),
														 },
														 {
															 value: `align-content-${breakpoint}stretch`,
															 label: __('Stretch', 'resource-layout-blocks'),
														 },
													 ]}
													 onChange={setAlignContent}
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
