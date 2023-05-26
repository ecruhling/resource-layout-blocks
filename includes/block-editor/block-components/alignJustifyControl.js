/**
 * WordPress dependencies.
 */
import {__} from '@wordpress/i18n';
import {CardBody, CardHeader, Flex, FlexItem, SelectControl} from '@wordpress/components';

/**
 * AlignJustifyControl.
 * Component for controlling Align & Justify attributes.
 *
 * @param breakpoint
 * @param alignText
 * @param alignItems
 * @param alignSelf
 * @param justifyContent
 * @param setAlignText
 * @param setAlignItems
 * @param setAlignSelf
 * @param setJustifyContent
 * @returns {JSX.Element}
 * @constructor
 */
export default function AlignJustifyControl ({
																							 breakpoint,
																							 alignText,
																							 alignItems,
																							 alignSelf,
																							 justifyContent,
																							 setAlignText,
																							 setAlignItems,
																							 setAlignSelf,
																							 setJustifyContent,
																						 }) {
	return (
		<div>
			<CardHeader isBorderless={true} isShady={true}
									size='small'>{__('ALIGN & JUSTIFY', 'resource-layout-blocks')}</CardHeader>
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
				</Flex>
			</CardBody>
		</div>
	);
}
