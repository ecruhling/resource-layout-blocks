/**
 * WordPress dependencies.
 */
import {__} from '@wordpress/i18n';
import {CardBody, CardHeader, Flex, FlexItem, SelectControl} from '@wordpress/components';

/**
 * AlignControl.
 * Component for controlling Align & Justify attributes.
 *
 * @param breakpoint
 * @param breakpoint_name
 * @param alignText
 * @param flexDirection
 * @param alignItems
 * @param alignSelf
 * @param justifyContent
 * @param setAlignText
 * @param setFlexDirection
 * @param setAlignItems
 * @param setAlignSelf
 * @param setJustifyContent
 * @returns {JSX.Element}
 * @constructor
 */
export default function AlignControl ({
																				breakpoint,
																				breakpoint_name,
																				alignText,
																				flexDirection,
																				alignItems,
																				alignSelf,
																				justifyContent,
																				setAlignText,
																				setFlexDirection,
																				setAlignItems,
																				setAlignSelf,
																				setJustifyContent,
																			}) {
	return (
		<div>
			<CardHeader isBorderless={true} isShady={true}
									size='small'
									className='resource-card-header'>{__(`${breakpoint_name} ALIGN`, 'resource-layout-blocks')}</CardHeader>
			<CardBody size='small'>
				<Flex wrap={true}>
					<FlexItem>
						<SelectControl label={__('Align Text', 'resource-layout-blocks')}
													 value={alignText}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: `text-${breakpoint}start`, label: __('Start', 'resource-layout-blocks')},
														 {value: `text-${breakpoint}center`, label: __('Center', 'resource-layout-blocks')},
														 {value: `text-${breakpoint}end`, label: __('End', 'resource-layout-blocks')},
													 ]}
													 onChange={setAlignText}
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
