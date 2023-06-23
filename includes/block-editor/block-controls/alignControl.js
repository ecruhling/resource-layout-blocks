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
 * AlignControl.
 *
 * React Component for controlling the Text Align attribute.
 *
 * @since      1.0.0
 *
 * @class
 *
 * @param {Object}   props                Component props.
 * @param {string}   props.breakpoint     The breakpoint name for this Component.
 * @param {string}   props.breakpointName The short breakpoint name for this Component.
 * @param {string}   props.alignText      The AlignText attribute.
 * @param {Function} props.setAlignText   set AlignText attribute.
 *
 * @return {JSX.Element} The Alignment Component for the Block Editor sidebar.
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
