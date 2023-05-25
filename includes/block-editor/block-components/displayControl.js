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
 * @param display
 * @param setDisplay
 * @returns {JSX.Element}
 * @constructor
 */
export default function ColumnsDisplayControl ({
																								 display,
																								 setDisplay,
																							 }) {
	return (
		<div>
			<CardHeader isBorderless={true} isShady={true}
									size='small'>{__('DISPLAY', 'resource-layout-blocks')}</CardHeader>
			<CardBody size='small'>
				<Flex wrap={true}>
					<FlexItem>
						<SelectControl label={__('Display', 'resource-layout-blocks')}
													 value={display}
													 options={[
														 {value: '', label: __('Select Option', 'resource-layout-blocks')},
														 {value: 'none', label: __('None', 'resource-layout-blocks')},
														 {value: 'inline', label: __('Inline', 'resource-layout-blocks')},
														 {
															 value: 'inline-block',
															 label: __('Inline-Block', 'resource-layout-blocks'),
														 },
														 {value: 'block', label: __('Block', 'resource-layout-blocks')},
														 {value: 'grid', label: __('Grid', 'resource-layout-blocks')},
														 {
															 value: 'inline-grid',
															 label: __('Inline Grid', 'resource-layout-blocks'),
														 },
														 {value: 'table', label: __('Table', 'resource-layout-blocks')},
														 {
															 value: 'table-cell',
															 label: __('Table Cell', 'resource-layout-blocks'),
														 },
														 {
															 value: 'table-row',
															 label: __('Table Row', 'resource-layout-blocks'),
														 },
														 {value: 'flex', label: __('Flex', 'resource-layout-blocks')},
														 {
															 value: 'inline-flex',
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
