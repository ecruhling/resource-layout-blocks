<?php
/**
 * Front-end render template for the block. [NOT USED - BLOCK IS STATIC]
 *
 * @var array $attributes Block attributes.
 * @var string $content Block default content.
 * @var WP_Block $block Block instance.
 *
 * @package           resource-layout-blocks
 */

// get these early.
$tag_name        = $attributes['tagName'];
$anchor          = $attributes['anchor'] ?? '';
$container_class = $attributes['isFluid'] ? 'container-fluid' : 'container';

// because these get removed.
unset( $attributes['isFluid'], $attributes['anchor'], $attributes['tagName'] );

// and then one long class list is made from the remaining attributes.
$attributes_classes = preg_replace( '/\s+/', ' ', implode( ' ', $attributes ) );

// finally, merge all the classes into one long list.
$attribute_classes = implode(
	' ',
	array(
		$container_class,
		$attributes_classes,
	)
);

// and then make the wrapper markup.
$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => preg_replace( '/\s+/', ' ', $attribute_classes ) ) );
?>

<<?php echo esc_attr( $tag_name ); ?> <?php echo wp_kses_data( $wrapper_attributes ); ?> id="<?php echo esc_attr( $anchor ); ?>" data-type="<?php echo esc_attr( $block->name ?? '' ); ?>">
<?php echo $content; // phpcs:ignore ?>
</<?php echo esc_attr( $tag_name ); ?>>
