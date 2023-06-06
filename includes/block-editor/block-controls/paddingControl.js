/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';
import {CardBody, CardHeader, Flex, FlexItem, SelectControl} from '@wordpress/components';

/**
 * PaddingControl
 * Component for controlling Padding attributes
 *
 * @param breakpoint
 * @param breakpoint_name
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
																					breakpoint,
																					breakpoint_name,
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
			<CardHeader isBorderless={true} isShady={true} size='small'
									className='resource-card-header'>{__(`${breakpoint_name} PADDING`, 'resource')}</CardHeader>
			<CardBody size='small'>
				<Flex wrap={true}>
					<FlexItem>
						<SelectControl label={__('Top', 'resource')}
													 value={paddingTop}
													 options={[
														 {value: '', label: __('-', 'resource')},
														 {value: `pt-${breakpoint}0`, label: __('0', 'resource')},
														 {value: `pt-${breakpoint}1`, label: __('1', 'resource')},
														 {value: `pt-${breakpoint}2`, label: __('2', 'resource')},
														 {value: `pt-${breakpoint}3`, label: __('3', 'resource')},
														 {value: `pt-${breakpoint}4`, label: __('4', 'resource')},
														 {value: `pt-${breakpoint}5`, label: __('5', 'resource')},
													 ]}
													 onChange={setPaddingTop}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Right', 'resource')}
													 value={paddingRight}
													 options={[
														 {value: '', label: __('-', 'resource')},
														 {value: `pe-${breakpoint}0`, label: __('0', 'resource')},
														 {value: `pe-${breakpoint}1`, label: __('1', 'resource')},
														 {value: `pe-${breakpoint}2`, label: __('2', 'resource')},
														 {value: `pe-${breakpoint}3`, label: __('3', 'resource')},
														 {value: `pe-${breakpoint}4`, label: __('4', 'resource')},
														 {value: `pe-${breakpoint}5`, label: __('5', 'resource')},
													 ]}
													 onChange={setPaddingRight}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Bottom', 'resource')}
													 value={paddingBottom}
													 options={[
														 {value: '', label: __('-', 'resource')},
														 {value: `pb-${breakpoint}0`, label: __('0', 'resource')},
														 {value: `pb-${breakpoint}1`, label: __('1', 'resource')},
														 {value: `pb-${breakpoint}2`, label: __('2', 'resource')},
														 {value: `pb-${breakpoint}3`, label: __('3', 'resource')},
														 {value: `pb-${breakpoint}4`, label: __('4', 'resource')},
														 {value: `pb-${breakpoint}5`, label: __('5', 'resource')},
													 ]}
													 onChange={setPaddingBottom}
						/>
					</FlexItem>
					<FlexItem>
						<SelectControl label={__('Left', 'resource')}
													 value={paddingLeft}
													 options={[
														 {value: '', label: __('-', 'resource')},
														 {value: `ps-${breakpoint}0`, label: __('0', 'resource')},
														 {value: `ps-${breakpoint}1`, label: __('1', 'resource')},
														 {value: `ps-${breakpoint}2`, label: __('2', 'resource')},
														 {value: `ps-${breakpoint}3`, label: __('3', 'resource')},
														 {value: `ps-${breakpoint}4`, label: __('4', 'resource')},
														 {value: `ps-${breakpoint}5`, label: __('5', 'resource')},
													 ]}
													 onChange={setPaddingLeft}
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
