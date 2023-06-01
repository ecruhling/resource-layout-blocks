/**
 * WordPress dependencies
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import {registerBlockType} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import json from './block.json';
import {icon} from './icon';
import edit from './edit';
import save from './save';

const {name, ...settings} = json;

/**
 * Styles are applied both to the front of your site and to the editor
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Register this Block Type
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(name, {
	...settings,
	icon,
	edit,
	save,
});
