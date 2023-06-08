/**
 * WordPress dependencies
 */
import { createBlock } from "@wordpress/blocks";

const transforms = {
	from: [
		{
			type: "block",
			blocks: ["core/group"],
			transform: ({ content }) => {
				return createBlock("resource-layout-blocks/container", {
					content,
				});
			},
		},
		{
			type: "block",
			blocks: ["resource-layout-blocks/row"],
			transform: ({ content }) => {
				return createBlock("resource-layout-blocks/container", {
					content,
				});
			},
		},
	],
	to: [
		{
			type: "block",
			blocks: ["resource-layout-blocks/row"],
			transform: ({ content }) => {
				return createBlock("resource-layout-blocks/row", {
					content,
				});
			},
		},
	],
};

export default transforms;
