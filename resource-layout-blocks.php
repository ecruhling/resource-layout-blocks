<?php
/**
 * Plugin Name:       Resource Layout Blocks
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Erik Rühling
 * Text Domain:       resource
 *
 * @package           resource
 */

/**
 * Constants.
 */
const RESOURCE_LAYOUT_BLOCKS_SLUG = 'resource-layout-blocks';

/**
 * Register layout blocks.
 */
function resource_layout_blocks_init()
{
    // The order below is the order that they will appear in the editor.
    $blocks = array(
        'container',
    );

    foreach ($blocks as $block) {
        $render_callback = [];
        $block_json = wp_json_file_decode(plugin_dir_path(__FILE__) . 'includes/block-editor/blocks/' . $block . '/block.json');
        // check block.json for existence of 'render' key.
        // it does not work presently, but if it does exist, then this is a dynamic block,
        // and a render_callback needs to be sent to the block registration.
        if (array_key_exists('render', $block_json)) {
            $render_callback = [
                'render_callback' => 'dynamic_block_render_callback',
            ];
        }
        register_block_type_from_metadata(
            plugin_dir_path(__FILE__) . 'includes/block-editor/blocks/' . trailingslashit($block),
            $render_callback,
        );
    }
}

add_action('init', 'resource_layout_blocks_init');

/**
 * Render callback function.
 * A generic function that routes to a PHP template stored in the named block's directory.
 *
 * @param array $attributes Block attributes.
 * @param string $content Block default content.
 * @param WP_Block $block Block instance.
 *
 * @return string The rendered output.
 */
function dynamic_block_render_callback(array $attributes, string $content, WP_Block $block): string
{
    ob_start();
    // the block name is stored with the slug preceding it, so remove the slug and the trailing slash.
    // Use the block name as a way to find the PHP render template associated with the named block.
    $realBlockName = str_replace(trailingslashit(RESOURCE_LAYOUT_BLOCKS_SLUG), '', $block->name);
    require plugin_dir_path(__FILE__) . 'includes/block-editor/blocks/' . $realBlockName . '/render.php';
    return ob_get_clean();
}

/**
 * Register Resource Layout Blocks category.
 *
 * @param array $block_categories Array of categories for block types.
 */
function resource_category(array $block_categories): array
{
    $resource_category = array(
        'slug'  => RESOURCE_LAYOUT_BLOCKS_SLUG,
        'title' => __('Resource Layout Blocks', 'resource'),
        'icon'  => null, // icon is set in index.js of each block.
    );

    // move the new category to the start of the block category list.
    array_unshift($block_categories, $resource_category);

    return $block_categories;
}

add_action('block_categories_all', 'resource_category', 10, 2);
