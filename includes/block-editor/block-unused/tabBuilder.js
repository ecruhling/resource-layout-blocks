/* eslint-disable */
import { Card } from '@wordpress/components';
import DisplayControl from '../block-controls/displayControl';
import FlexControl from '../block-controls/flexControl';
import PaddingControl from '../block-controls/paddingControl';
import MarginControl from '../block-controls/marginControl';
import AlignControl from '../block-controls/alignControl';

const breakpoints = [
	{
		name: 'base',
		control_name: '-',
		modifier: 'base',
		css_class: '',
	},
	{
		name: 'small',
		control_name: 'SM',
		modifier: 'sm',
		css_class: 'sm-',
	},
	{
		name: 'medium',
		control_name: 'MD',
		modifier: 'md',
		css_class: 'md-',
	},
	{
		name: 'large',
		control_name: 'LG',
		modifier: 'lg',
		css_class: 'lg-',
	},
	{
		name: 'extra-large',
		control_name: 'XL',
		modifier: 'xl',
		css_class: 'xl-',
	},
	{
		name: 'extra-extra-large',
		control_name: 'XXL',
		modifier: 'xxl',
		css_class: 'xxl-',
	},
];

const tabArray = [];
let tabObject;
{
	breakpoints.forEach( ( breakpoint ) => {
		const cssClass = breakpoint.css_class;
		const modifier = breakpoint.modifier;
		const display = attributes[ modifier + 'Display' ];
		const flexDirection = attributes[ modifier + 'FlexDirection' ];
		const justifyContent = attributes[ modifier + 'JustifyContent' ];
		const alignItems = attributes[ modifier + 'AlignItems' ];
		const alignSelf = attributes[ modifier + 'AlignSelf' ];
		const fillGrowShrink = attributes[ modifier + 'FillGrowShrink' ];
		const wrap = attributes[ modifier + 'Wrap' ];
		const order = attributes[ modifier + 'Order' ];
		const alignContent = attributes[ modifier + 'AlignContent' ];
		const paddingTop = attributes[ modifier + 'PaddingTop' ];
		const paddingRight = attributes[ modifier + 'PaddingRight' ];
		const paddingBottom = attributes[ modifier + 'PaddingBottom' ];
		const paddingLeft = attributes[ modifier + 'PaddingLeft' ];
		const marginTop = attributes[ modifier + 'MarginTop' ];
		const marginRight = attributes[ modifier + 'MarginRight' ];
		const marginBottom = attributes[ modifier + 'MarginBottom' ];
		const marginLeft = attributes[ modifier + 'MarginLeft' ];
		const alignText = attributes[ modifier + 'AlignText' ];

		tabObject = {
			name: breakpoint.name,
			title: breakpoint.control_name,
			className: 'breakpoint-tab',
			content: (
				<Card>
					<DisplayControl
						breakpoint={ cssClass }
						breakpointName={ cssClass }
						display={ display }
						setDisplay={ ( display ) =>
							setAttributes( { display } )
						}
					></DisplayControl>
					{ ( display === 'd-' + cssClass + 'flex' ||
						display === 'd-' + cssClass + 'inline-flex' ) && (
						<FlexControl
							breakpoint={ cssClass }
							breakpointName={ cssClass }
							flexDirection={ flexDirection }
							justifyContent={ justifyContent }
							alignItems={ alignItems }
							alignSelf={ alignSelf }
							fillGrowShrink={ fillGrowShrink }
							wrap={ wrap }
							order={ order }
							alignContent={ alignContent }
							setFlexDirection={ ( flexDirection ) =>
								setAttributes( { flexDirection } )
							}
							setJustifyContent={ ( justifyContent ) =>
								setAttributes( { justifyContent } )
							}
							setAlignItems={ ( alignItems ) =>
								setAttributes( { alignItems } )
							}
							setAlignSelf={ ( alignSelf ) =>
								setAttributes( { alignSelf } )
							}
							setFillGrowShrink={ ( fillGrowShrink ) =>
								setAttributes( { fillGrowShrink } )
							}
							setWrap={ ( wrap ) => setAttributes( { wrap } ) }
							setOrder={ ( order ) => setAttributes( { order } ) }
							setAlignContent={ ( alignContent ) =>
								setAttributes( { alignContent } )
							}
						></FlexControl>
					) }
					{ display !== 'd-' + cssClass + 'none' && (
						<>
							<PaddingControl
								breakpoint={ cssClass }
								breakpointName={ cssClass }
								paddingTop={ paddingTop }
								paddingRight={ paddingRight }
								paddingBottom={ paddingBottom }
								paddingLeft={ paddingLeft }
								setPaddingTop={ ( paddingTop ) =>
									setAttributes( { paddingTop } )
								}
								setPaddingRight={ ( paddingRight ) =>
									setAttributes( { paddingRight } )
								}
								setPaddingBottom={ ( paddingBottom ) =>
									setAttributes( { paddingBottom } )
								}
								setPaddingLeft={ ( paddingLeft ) =>
									setAttributes( { paddingLeft } )
								}
							></PaddingControl>
							<MarginControl
								breakpoint={ cssClass }
								breakpointName={ cssClass }
								marginTop={ marginTop }
								marginRight={ marginRight }
								marginBottom={ marginBottom }
								marginLeft={ marginLeft }
								setMarginTop={ ( marginTop ) =>
									setAttributes( { marginTop } )
								}
								setMarginRight={ ( marginRight ) =>
									setAttributes( { marginRight } )
								}
								setMarginBottom={ ( marginBottom ) =>
									setAttributes( { marginBottom } )
								}
								setMarginLeft={ ( marginLeft ) =>
									setAttributes( { marginLeft } )
								}
							></MarginControl>
							<AlignControl
								breakpoint={ cssClass }
								breakpointName={ cssClass }
								alignText={ alignText }
								setAlignText={ ( alignText ) =>
									setAttributes( { alignText } )
								}
							></AlignControl>
						</>
					) }
				</Card>
			),
		};

		tabArray.push( tabObject );
	} );
}

// console.log(tabArray);
