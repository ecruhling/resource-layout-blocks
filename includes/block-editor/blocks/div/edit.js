/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import classnames from 'classnames';
import { omit } from 'lodash';

/**
 * Internal dependencies
 */
import DisplayControl from '../../block-controls/displayControl';
import PaddingControl from '../../block-controls/paddingControl';
import MarginControl from '../../block-controls/marginControl';
import AlignControl from '../../block-controls/alignControl';
import FlexControl from '../../block-controls/flexControl';
import { convertStylesStringToObject } from '../../../lib/convertStylesStringToObject';

/**
 * Styles are applied only to the editor
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The Block edit function
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function edit( { attributes, setAttributes } ) {
	const {
		className,
		inlineStyles,
		baseDisplay,
		basePaddingTop,
		basePaddingRight,
		basePaddingBottom,
		basePaddingLeft,
		baseMarginTop,
		baseMarginRight,
		baseMarginBottom,
		baseMarginLeft,
		baseAlignText,
		baseFlexDirection,
		baseFillGrowShrink,
		baseWrap,
		baseOrder,
		baseAlignContent,
		baseAlignItems,
		baseAlignSelf,
		baseJustifyContent,
		smDisplay,
		smPaddingTop,
		smPaddingRight,
		smPaddingBottom,
		smPaddingLeft,
		smMarginTop,
		smMarginRight,
		smMarginBottom,
		smMarginLeft,
		smAlignText,
		smFlexDirection,
		smFillGrowShrink,
		smWrap,
		smOrder,
		smAlignContent,
		smAlignItems,
		smAlignSelf,
		smJustifyContent,
		mdDisplay,
		mdPaddingTop,
		mdPaddingRight,
		mdPaddingBottom,
		mdPaddingLeft,
		mdMarginTop,
		mdMarginRight,
		mdMarginBottom,
		mdMarginLeft,
		mdAlignText,
		mdFlexDirection,
		mdFillGrowShrink,
		mdWrap,
		mdOrder,
		mdAlignContent,
		mdAlignItems,
		mdAlignSelf,
		mdJustifyContent,
		lgDisplay,
		lgPaddingTop,
		lgPaddingRight,
		lgPaddingBottom,
		lgPaddingLeft,
		lgMarginTop,
		lgMarginRight,
		lgMarginBottom,
		lgMarginLeft,
		lgAlignText,
		lgFlexDirection,
		lgFillGrowShrink,
		lgWrap,
		lgOrder,
		lgAlignContent,
		lgAlignItems,
		lgAlignSelf,
		lgJustifyContent,
		xlDisplay,
		xlPaddingTop,
		xlPaddingRight,
		xlPaddingBottom,
		xlPaddingLeft,
		xlMarginTop,
		xlMarginRight,
		xlMarginBottom,
		xlMarginLeft,
		xlAlignText,
		xlFlexDirection,
		xlFillGrowShrink,
		xlWrap,
		xlOrder,
		xlAlignContent,
		xlAlignItems,
		xlAlignSelf,
		xlJustifyContent,
		xxlDisplay,
		xxlPaddingTop,
		xxlPaddingRight,
		xxlPaddingBottom,
		xxlPaddingLeft,
		xxlMarginTop,
		xxlMarginRight,
		xxlMarginBottom,
		xxlMarginLeft,
		xxlAlignText,
		xxlFlexDirection,
		xxlFillGrowShrink,
		xxlWrap,
		xxlOrder,
		xxlAlignContent,
		xxlAlignItems,
		xxlAlignSelf,
		xxlJustifyContent,
	} = attributes;

	const classNameAttributes = omit( attributes, [
		'anchor',
		'inlineStyles',
		'className',
	] );

	const classes = classnames(
		Object.values( classNameAttributes ),
		className
	);

	const blockProps = useBlockProps( {
		className: classes,
		style: convertStylesStringToObject( inlineStyles ),
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks placeholder={ __( 'Insert Blocks', 'resource' ) } />
		</div>
	);
}
