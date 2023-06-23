/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	CardBody,
	CardHeader,
	Flex,
	FlexItem,
	SelectControl,
} from '@wordpress/components';

/**
 * AlignControl
 * Component for controlling the Text Align attribute
 *
 * @param {string}   breakpoint
 * @param {string}   breakpointName
 * @param {string}   alignText
 * @param {Function} setAlignText
 * @return {JSX.Element} The Alignment Control for the Block Editor sidebar.
 * @class
 */
export default function AlignControl( {
	breakpoint,
	breakpointName,
	alignText,
	setAlignText,
} ) {
	return (
		<div>
			<CardHeader
				isBorderless={ true }
				isShady={ true }
				size="small"
				className="resource-card-header"
			>
				{ `${ breakpointName } ALIGN` }
			</CardHeader>
			<CardBody size="small">
				<Flex wrap={ true }>
					<FlexItem>
						<SelectControl
							label={ __( 'Align Text', 'resource' ) }
							value={ alignText }
							options={ [
								{ value: '', label: __( 'None', 'resource' ) },
								{
									value: `text-${ breakpoint }start`,
									label: __( 'Start', 'resource' ),
								},
								{
									value: `text-${ breakpoint }center`,
									label: __( 'Center', 'resource' ),
								},
								{
									value: `text-${ breakpoint }end`,
									label: __( 'End', 'resource' ),
								},
							] }
							onChange={ setAlignText }
						/>
					</FlexItem>
				</Flex>
			</CardBody>
		</div>
	);
}
