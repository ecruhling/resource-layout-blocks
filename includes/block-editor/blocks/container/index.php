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

// Block name.
$block_type = $block->name ?? '';

// Block classes.
$align_content_class = empty( $attributes['alignContent'] ) ? '' : "are-vertically-aligned-{$attributes['alignContent']}";
$full_height_class   = empty( $attributes['fullHeight'] ) ? '' : 'block-is-full-height';
$extra_classes_list  = empty( $attributes['extraClassesList'] ) ? '' : $attributes['extraClassesList'];
$container_class     = $attributes['isFluid'] ? 'container-fluid' : 'container';
$custom_anchor       = $attributes['customAnchor'] ?? '';
$attribute_classes   = $container_class . ' ' . $align_content_class . ' ' . $full_height_class;
$wrapper_attributes  = get_block_wrapper_attributes( array( 'class' => $attribute_classes . ' ' . $extra_classes_list ) );
?>

<<?php echo esc_attr( $attributes['tagName'] ); ?> id="<?php echo esc_attr( $custom_anchor ); ?>" <?php echo esc_attr( $wrapper_attributes ); ?> data-type="<?php echo esc_attr( $block_type ); ?>">
<?php echo $content; // phpcs:ignore ?>
</<?php echo esc_attr( $attributes['tagName'] ); ?>>
