<?php
/**
 * Front-end render template for the block. [NOT USED - BLOCK IS STATIC]
 *
 * @var array $attributes Block attributes.
 * @var string $content Block default content.
 * @var WP_Block $block Block instance.
 */
// Block name
$blockType = $block->name ?? '';
// Block classes
$alignContentClass = empty( $attributes['alignContent'] ) ? '' : "are-vertically-aligned-{$attributes['alignContent']}";
$fullHeightClass   = empty( $attributes['fullHeight'] ) ? '' : 'block-is-full-height';
$extraClassesList  = empty( $attributes['extraClassesList'] ) ? '' : $attributes['extraClassesList'];
$containerClass    = 'row';
$customAnchor      = $attributes['customAnchor'] ?? '';

$attribute_classes  = $containerClass . ' ' . $alignContentClass . ' ' . $fullHeightClass;
$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => $attribute_classes . ' ' . $extraClassesList ] );
?>

<<?= $attributes['tagName']; ?> id="<?= $customAnchor; ?>" <?= $wrapper_attributes; ?> data-type="<?= $blockType; ?>">
<?= $content; ?>
</<?= $attributes['tagName']; ?>>
