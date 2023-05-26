<?php
/**
 * Front-end render template for the block.
 *
 * @var array $attributes Block attributes.
 * @var string $content Block default content.
 * @var WP_Block $block Block instance.
 *
 * @package           resource-layout-blocks
 */

// Build text align class.
$align       = $attributes['align'] ?? '';
$align_class = '';
switch ( $align ) {
	case 'left':
		$align_class = 'text-start';
		break;
	case 'center':
		$align_class = 'text-center';
		break;
	case 'right':
		$align_class = 'text-end';
		break;
}

// Merge all the classes into one list.
$attribute_classes = implode(
	' ',
	array(
		$align_class,
		$attributes['isFluid'] ? 'container-fluid' : 'container',
		$attributes['baseDisplay'] ?? '',
		$attributes['basePaddingTop'] ?? '',
		$attributes['basePaddingRight'] ?? '',
		$attributes['basePaddingBottom'] ?? '',
		$attributes['basePaddingLeft'] ?? '',
		$attributes['baseMarginTop'] ?? '',
		$attributes['baseMarginRight'] ?? '',
		$attributes['baseMarginBottom'] ?? '',
		$attributes['baseMarginLeft'] ?? '',
		$attributes['baseAlignItems'] ?? '',
		$attributes['baseAlignSelf'] ?? '',
		$attributes['baseJustifyContent'] ?? '',
		$attributes['smDisplay'] ?? '',
		$attributes['smPaddingTop'] ?? '',
		$attributes['smPaddingRight'] ?? '',
		$attributes['smPaddingBottom'] ?? '',
		$attributes['smPaddingLeft'] ?? '',
		$attributes['smMarginTop'] ?? '',
		$attributes['smMarginRight'] ?? '',
		$attributes['smMarginBottom'] ?? '',
		$attributes['smMarginLeft'] ?? '',
		$attributes['smAlignItems'] ?? '',
		$attributes['smAlignSelf'] ?? '',
		$attributes['smJustifyContent'] ?? '',
		$attributes['mdDisplay'] ?? '',
		$attributes['mdPaddingTop'] ?? '',
		$attributes['mdPaddingRight'] ?? '',
		$attributes['mdPaddingBottom'] ?? '',
		$attributes['mdPaddingLeft'] ?? '',
		$attributes['mdMarginTop'] ?? '',
		$attributes['mdMarginRight'] ?? '',
		$attributes['mdMarginBottom'] ?? '',
		$attributes['mdMarginLeft'] ?? '',
		$attributes['mdAlignItems'] ?? '',
		$attributes['mdAlignSelf'] ?? '',
		$attributes['mdJustifyContent'] ?? '',
		$attributes['lgDisplay'] ?? '',
		$attributes['lgPaddingTop'] ?? '',
		$attributes['lgPaddingRight'] ?? '',
		$attributes['lgPaddingBottom'] ?? '',
		$attributes['lgPaddingLeft'] ?? '',
		$attributes['lgMarginTop'] ?? '',
		$attributes['lgMarginRight'] ?? '',
		$attributes['lgMarginBottom'] ?? '',
		$attributes['lgMarginLeft'] ?? '',
		$attributes['lgAlignItems'] ?? '',
		$attributes['lgAlignSelf'] ?? '',
		$attributes['lgJustifyContent'] ?? '',
		$attributes['xlDisplay'] ?? '',
		$attributes['xlPaddingTop'] ?? '',
		$attributes['xlPaddingRight'] ?? '',
		$attributes['xlPaddingBottom'] ?? '',
		$attributes['xlPaddingLeft'] ?? '',
		$attributes['xlMarginTop'] ?? '',
		$attributes['xlMarginRight'] ?? '',
		$attributes['xlMarginBottom'] ?? '',
		$attributes['xlMarginLeft'] ?? '',
		$attributes['xlAlignItems'] ?? '',
		$attributes['xlAlignSelf'] ?? '',
		$attributes['xlJustifyContent'] ?? '',
		$attributes['xxlDisplay'] ?? '',
		$attributes['xxlPaddingTop'] ?? '',
		$attributes['xxlPaddingRight'] ?? '',
		$attributes['xxlPaddingBottom'] ?? '',
		$attributes['xxlPaddingLeft'] ?? '',
		$attributes['xxlMarginTop'] ?? '',
		$attributes['xxlMarginRight'] ?? '',
		$attributes['xxlMarginBottom'] ?? '',
		$attributes['xxlMarginLeft'] ?? '',
		$attributes['xxlAlignItems'] ?? '',
		$attributes['xxlAlignSelf'] ?? '',
		$attributes['xxlJustifyContent'] ?? '',
	)
);

$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => preg_replace( '/\s+/', ' ', $attribute_classes ) ) );
?>

<<?php echo esc_attr( $attributes['tagName'] ); ?> <?php echo wp_kses_data( $wrapper_attributes ); ?> id="<?php echo esc_attr( $attributes['anchor'] ); ?>" data-type="<?php echo esc_attr( $block->name ?? '' ); ?>">
<?php echo $content; // phpcs:ignore ?>
</<?php echo esc_attr( $attributes['tagName'] ); ?>>
