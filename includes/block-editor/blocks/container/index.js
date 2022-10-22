/**
 * Import registerBlockType.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Styles are applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies.
 */
import json from './block.json';
import edit from './edit';
import save from './save';

const { name, ...settings } = json;

/**
 * Register this Block Type.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( name, {
	...settings,
	icon: (<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m23.1 18.6h-.3v-13.2h.3c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-22.2c-.5 0-.9.4-.9.9s.4.9.9.9h.3v13.2h-.3c-.5 0-.9.4-.9.9s.4.9.9.9h22.2c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm-2.1 0h-18v-13.2h18zm-13.8-1.2c.5 0 .9-.4.9-.9v-9c0-.49-.4-.9-.9-.9s-.9.41-.9.9v9c0 .5.4.9.9.9zm4.8 0c.5 0 .9-.4.9-.9v-9c0-.5-.4-.9-.9-.9s-.9.41-.9.9v9c0 .5.4.9.9.9zm4.8 0c.5 0 .9-.4.9-.9v-9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v9c0 .5.41.9.9.9z"/></svg>),
	edit,
	save,
} );
