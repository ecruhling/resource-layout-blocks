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
 * Register layout blocks.
 */
function resource_init()
{
    // The order below is the order that they will appear in the editor.
    $blocks = array(
        'container/',
    );

    foreach ($blocks as $block) {
        register_block_type(
            plugin_dir_path(__FILE__) . 'includes/block-editor/blocks/' . $block
        );
    }
}

add_action('init', 'resource_init');

/**
 * Enqueue global block JS & CSS for the editor.
 */
function resource_styles_scripts()
{
//    wp_enqueue_style(
//        'resource-global-editor-css',
//        plugins_url('/build/global.css', __FILE__),
//        ['wp-edit-blocks'],
//        filemtime(plugin_dir_path(__FILE__) . 'build/global.css')
//    );
//
//    wp_enqueue_script(
//        'resource-meta',
//        plugins_url('build/global.js', __FILE__),
//        ['wp-plugins', 'wp-edit-post', 'wp-element', 'wp-components', 'wp-data', 'wp-block-editor', 'wp-dom-ready']
//    );
}

add_action('enqueue_block_editor_assets', 'resource_styles_scripts');

/**
 * Enqueue global frontend and editor CSS.
 */
function resource_styles()
{
//    wp_enqueue_style(
//        'resource-global-css',
//        plugins_url('/build/style-global.css', __FILE__),
//        [],
//        filemtime(plugin_dir_path(__FILE__) . 'build/style-global.css')
//    );
}

add_action('enqueue_block_assets', 'resource_styles');

/**
 * Register Resource Layout Blocks category.
 *
 * @param array $block_categories Array of categories for block types.
 */
function resource_category(array $block_categories): array
{
    $resource_category = array(
        'slug' => 'resource-layout-blocks',
        'title' => __('Resource Layout Blocks', 'resource'),
        'icon' => null, // icon is set in index.js of each block.
    );

    // move the new category to the start of the block category list.
    array_unshift($block_categories, $resource_category);

    return $block_categories;
}

add_action('block_categories_all', 'resource_category', 10, 2);
