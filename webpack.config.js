/**
 * External Dependencies
 */
const path = require( 'path' );

/**
 * WordPress Dependencies
 */
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: {
		// global CSS file for the editor
		'global-editor-styles': path.resolve(
			process.cwd(),
			'./includes/global',
			'global-editor-styles.scss'
		),
		// blocks (in order)
		container: './includes/block-editor/blocks/container',
		row: './includes/block-editor/blocks/row',
		column: './includes/block-editor/blocks/column',
		div: './includes/block-editor/blocks/div',
	},
};
