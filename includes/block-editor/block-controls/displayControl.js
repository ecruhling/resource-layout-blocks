/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';
import {CardBody, CardHeader, Flex, FlexItem, SelectControl} from '@wordpress/components';

/**
 * DisplayControl
 * Component for controlling the Display attribute
 *
 * @param breakpoint
 * @param breakpoint_name
 * @param display
 * @param setDisplay
 * @returns {JSX.Element}
 * @constructor
 */
export default function ColumnsDisplayControl ({
																								 breakpoint,
																								 breakpoint_name,
																								 display,
																								 setDisplay,
																							 }) {
	return (
		<div>
			<CardHeader isBorderless={true} isShady={true} size='small' className='resource-card-header'>
				{__(`${breakpoint_name} DISPLAY`, 'resource-layout-blocks')}
			</CardHeader>
			<CardBody size='small'>
				<Flex wrap={true}>
					<FlexItem>
						<SelectControl label={__('Display', 'resource-layout-blocks')}
													 value={display}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: `d-${breakpoint}none`, label: __('None', 'resource-layout-blocks')},
														 {value: `d-${breakpoint}inline`, label: __('Inline', 'resource-layout-blocks')},
														 {
															 value: `d-${breakpoint}inline-block`,
															 label: __('Inline-Block', 'resource-layout-blocks'),
														 },
														 {value: `d-${breakpoint}block`, label: __('Block', 'resource-layout-blocks')},
														 {value: `d-${breakpoint}grid`, label: __('Grid', 'resource-layout-blocks')},
														 {
															 value: `d-${breakpoint}inline-grid`,
															 label: __('Inline Grid', 'resource-layout-blocks'),
														 },
														 {value: `d-${breakpoint}table`, label: __('Table', 'resource-layout-blocks')},
														 {
															 value: `d-${breakpoint}table-cell`,
															 label: __('Table Cell', 'resource-layout-blocks'),
														 },
														 {
															 value: `d-${breakpoint}table-row`,
															 label: __('Table Row', 'resource-layout-blocks'),
														 },
														 {value: `d-${breakpoint}flex`, label: __('Flex', 'resource-layout-blocks')},
														 {
															 value: `d-${breakpoint}inline-flex`,
															 label: __('Inline Flex', 'resource-layout-blocks'),
														 },
													 ]}
													 onChange={setDisplay}
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
