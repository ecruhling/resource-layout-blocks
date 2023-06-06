/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';
import {CardBody, CardHeader, Flex, FlexItem, SelectControl} from '@wordpress/components';

/**
 * AlignControl
 * Component for controlling the Text Align attribute
 *
 * @param breakpoint
 * @param breakpoint_name
 * @param alignText
 * @param setAlignText
 * @returns {JSX.Element}
 * @constructor
 */
export default function AlignControl ({
																				breakpoint,
																				breakpoint_name,
																				alignText,
																				setAlignText,
																			}) {
	return (
		<div>
			<CardHeader isBorderless={true} isShady={true}
									size='small'
									className='resource-card-header'>{__(`${breakpoint_name} ALIGN`, 'resource')}</CardHeader>
			<CardBody size='small'>
				<Flex wrap={true}>
					<FlexItem>
						<SelectControl label={__('Align Text', 'resource')}
													 value={alignText}
													 options={[
														 {value: '', label: __('Select Option', 'resource')},
														 {value: `text-${breakpoint}start`, label: __('Start', 'resource')},
														 {value: `text-${breakpoint}center`, label: __('Center', 'resource')},
														 {value: `text-${breakpoint}end`, label: __('End', 'resource')},
													 ]}
													 onChange={setAlignText}
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
