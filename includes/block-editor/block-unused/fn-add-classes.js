//dynamically builds bootstrap classes
export function addClasses( breakpoint, type, value ) {
	let breakpointWithDashes;

	if ( breakpoint === 'xs' ) {
		//if this is Xs breakpoint, Bootstrap 5 no longer includes "xs" in the class name.
		breakpointWithDashes = '-';
	} else {
		//in all other instances, return something like "-sm-", as part of "col-sm-6"
		breakpointWithDashes = '-' + breakpoint + '-';
	}

	switch (
		type //switch statement going over the attribute name without the breakpoint
	) {
		case 'FullWidthContainer':
			return 'container-fluid';
		case 'Container':
			if ( breakpoint === 'xs' ) {
				return 'container';
			} else {
				return 'container-' + breakpoint;
			}
		case 'Display':
			return 'd' + breakpointWithDashes + value; //would return something like "d-lg-block"
		case 'MarginTop':
			return 'mt' + breakpointWithDashes + value;
		case 'MarginBottom':
			return 'mb' + breakpointWithDashes + value;
		case 'MarginLeft':
			return 'ms' + breakpointWithDashes + value;
		case 'MarginRight':
			return 'me' + breakpointWithDashes + value;
		case 'PaddingTop':
			return 'pt' + breakpointWithDashes + value;
		case 'PaddingBottom':
			return 'pb' + breakpointWithDashes + value;
		case 'PaddingLeft':
			return 'ps' + breakpointWithDashes + value;
		case 'PaddingRight':
			return 'pe' + breakpointWithDashes + value;
		case 'Col':
			return 'col' + breakpointWithDashes + value;
		case 'Offset':
			return 'offset' + breakpointWithDashes + value;
		case 'FlexBasis':
			return 'flex-basis' + breakpointWithDashes + value;
		case 'AlignSelf':
			return 'align-self' + breakpointWithDashes + value;
		case 'JustifyContent':
			return 'justify-content' + breakpointWithDashes + value;
		case 'AlignItems':
			return 'align-items' + breakpointWithDashes + value;
		case 'Wrap':
			return 'flex' + breakpointWithDashes + value;
		case 'AlignContent':
			return 'align-content' + breakpointWithDashes + value;
		case 'Gx':
			return 'gx' + breakpointWithDashes + value;
		case 'Gy':
			return 'gy' + breakpointWithDashes + value;
		case 'className': //className is tied to the block's "Advanced CSS class(es)" in the Advanced panel. Due to this, we just want to return the text stored in that text box.
			return value;
		default:
			return ''; //return blank string if attribute name does not match any of the above cases.
	}
}
