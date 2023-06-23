import { Card } from '@wordpress/components';
import DisplayControl from '../../block-components/displayControl';
import FlexControl from '../../block-components/flexControl';
import PaddingControl from '../../block-components/paddingControl';
import MarginControl from '../../block-components/marginControl';
import AlignControl from '../../block-components/alignControl';

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

// console.log(attributes['lgDisplay']);

let tabArray = [];
let tabObject;
{
	breakpoints.forEach( ( breakpoint ) => {
		const css_class = breakpoint.css_class;
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

		// console.log(modifier + 'Display');

		tabObject = {
			name: breakpoint.name,
			title: breakpoint.control_name,
			className: 'breakpoint-tab',
			content: (
				<Card>
					<DisplayControl
						breakpoint={ css_class }
						breakpointName={ css_class }
						display={ display }
						setDisplay={ ( display ) =>
							setAttributes( { display } )
						}
					></DisplayControl>
					{ ( display === 'd-' + css_class + 'flex' ||
						display === 'd-' + css_class + 'inline-flex' ) && (
						<FlexControl
							breakpoint={ css_class }
							breakpointName={ css_class }
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
					{ display !== 'd-' + css_class + 'none' && (
						<>
							<PaddingControl
								breakpoint={ css_class }
								breakpointName={ css_class }
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
								breakpoint={ css_class }
								breakpointName={ css_class }
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
								breakpoint={ css_class }
								breakpointName={ css_class }
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
