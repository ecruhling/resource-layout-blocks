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
$full_height_class = empty( $attributes['minHeight'] ) ? '' : 'block-is-full-height';

// Block attributes, as defined in block.json.
$anchor          = $attributes['anchor'] ?? '';
$container_class = $attributes['isFluid'] ? 'container-fluid' : 'container';
$tag_name        = $attributes['tagName'];
$vertical_align  = empty( $attributes['verticalAlignment'] ) ? '' : "is-vertically-aligned-{$attributes['verticalAlignment']}";

$attribute_classes  = $container_class . ' ' . $vertical_align . ' ' . $full_height_class;
$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $attribute_classes ) );
?>

<pre><?= var_dump( $attributes ); ?></pre>

<<?php echo esc_attr( $tag_name ); ?> <?php echo wp_kses_data( $wrapper_attributes ); ?> id="<?php echo esc_attr( $attributes['anchor'] ); ?>" data-type="<?php echo esc_attr( $block_type ); ?>">
<?php echo $content; // phpcs:ignore ?>
</<?php echo esc_attr( $attributes['tagName'] ); ?>>
