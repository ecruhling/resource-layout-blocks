const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
    ...defaultConfig,
    entry: {
		'container': './includes/block-editor/blocks/container'
	},
};
