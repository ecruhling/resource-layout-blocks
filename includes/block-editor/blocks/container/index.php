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
$align_class       = empty( $attributes['align'] ) ? '' : "are-vertically-aligned-{$attributes['align']}";
$full_height_class = empty( $attributes['minHeight'] ) ? '' : 'block-is-full-height';
//$class_names        = empty( $attributes['className'] ) ? '' : $attributes['className'];
$container_class    = $attributes['isFluid'] ? 'container-fluid' : 'container';
$custom_anchor      = $attributes['anchor'] ?? '';
$attribute_classes  = $container_class . ' ' . $align_class . ' ' . $full_height_class;
$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $attribute_classes ) );
?>

<pre><?= var_dump( $attributes ); ?></pre>

<<?php echo esc_attr( $attributes['tagName'] ); ?> <?php echo $wrapper_attributes; ?> id="<?php echo esc_attr( $attributes['anchor'] ); ?>" data-type="<?php echo esc_attr( $block_type ); ?>">
<?php echo $content; // phpcs:ignore ?>
</<?php echo esc_attr( $attributes['tagName'] ); ?>>
