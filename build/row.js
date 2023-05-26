!function(){var e,t={124:function(e,t,o){"use strict";var n=window.wp.blocks,r=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"resource-layout-blocks/row","title":"Row","category":"resource-layout-blocks","description":"A Row.","keywords":["row"],"version":"1.0.0","textdomain":"resource","render":"file:./index.php","attributes":{"alignContent":{"type":"string"},"fullHeight":{"type":"boolean","default":false},"tagName":{"type":"string","default":"div"},"customAnchor":{"type":"string","default":""},"extraClassesList":{"type":"string","default":""}},"supports":{"jsx":true,"anchor":false,"align":false,"alignContent":true,"alignText":false,"alignWide":false,"ariaLabel":true,"className":true,"color":{"background":true,"gradients":false,"link":false,"text":false,"__experimentalDuotone":false},"customClassName":false,"defaultStylePicker":false,"fullHeight":true,"html":true,"inserter":true,"multiple":true,"reusable":true,"lock":true,"spacing":{"margin":false,"padding":false,"blockGap":false},"typography":{"fontSize":false,"lineHeight":false}},"editorScript":"file:../../../../build/row.js","editorStyle":"file:../../../../build/row.css","style":"file:../../../../build/style-row.css"}'),l=window.wp.element;const a=(0,l.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)("path",{d:"m23.1 18.6h-.3v-13.2h.3c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-22.2c-.5 0-.9.4-.9.9s.4.9.9.9h.3v13.2h-.3c-.5 0-.9.4-.9.9s.4.9.9.9h22.2c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm-2.1 0h-18v-13.2h18zm-16.4-6.6c0 .5.4.9.9.9h13c.5 0 .9-.4.9-.9s-.41-.9-.9-.9h-13c-.5 0-.9.4-.9.9z"}));var i=o(184),s=o.n(i),c=window.wp.i18n,u=window.wp.blockEditor,d=window.wp.components,f=window.wp.data;const{name:h,...p}=r;(0,n.registerBlockType)(h,{...p,icon:a,edit:function(e){let{attributes:t,setAttributes:o}=e;const{alignContent:n,fullHeight:r,tagName:a="div",customAnchor:i,extraClassesList:h}=t,p=s()("row",{[`are-vertically-aligned-${n}`]:n,"block-is-full-height":r}),m=(0,u.useBlockProps)({className:p}),b={header:(0,c.__)("The <header> element should represent introductory content, typically a group of introductory or navigational aids."),main:(0,c.__)("The <main> element should be used for the primary content of your document only. "),section:(0,c.__)("The <section> element should represent a standalone portion of the document that can't be better represented by another element."),article:(0,c.__)("The <article> element should represent a self contained, syndicatable portion of the document."),aside:(0,c.__)("The <aside> element should represent a portion of a document whose content is only indirectly related to the document's main content."),footer:(0,c.__)("The <footer> element should represent a footer for its nearest sectioning element (e.g.: <section>, <article>, <main> etc.).")},{getBlock:g}=(0,f.useSelect)(u.store),v=document.querySelectorAll(".block-editor-list-view-leaf");return v&&v.forEach((function(e){const t=e.getAttribute("data-block"),o=g(t).name;if("resource-layout-blocks/row"===o){console.log(o);const n=g(t).attributes.customAnchor;if(void 0!==n&&""!==n&&!e.querySelector("span[class*='block-editor-list-view-block-select-button__anchor']")){let t=document.createElement("span");t.classList.add("block-editor-list-view-block-select-button__anchor"),t.innerHTML=n,e.querySelector("a").appendChild(t)}}})),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(u.BlockControls,null,(0,l.createElement)(u.BlockVerticalAlignmentToolbar,{onChange:e=>o({alignContent:e}),value:n}),(0,l.createElement)(u.__experimentalBlockFullHeightAligmentControl,{isActive:r,onToggle:e=>o({fullHeight:e})})),(0,l.createElement)(u.InspectorControls,null,(0,l.createElement)(d.PanelBody,{title:(0,c.__)("Row Attributes","resource")},(0,l.createElement)(d.TextControl,{className:"html-anchor-control",label:(0,c.__)("HTML anchor","resource"),value:i,onChange:e=>function(e){o({customAnchor:e});const t=wp.data.select("core/block-editor").getSelectedBlock().clientId,n=document.querySelector("a[href='#block-"+t+"'][class*='block-editor-list-view-block-select-button']"),r=n.querySelector("span[class*='block-editor-list-view-block-select-button__anchor']");if(""===e)n.removeChild(r);else if(r)r.innerHTML=e;else{let t=document.createElement("span");t.classList.add("block-editor-list-view-block-select-button__anchor"),t.innerHTML=e,n.appendChild(t)}}(e),autoCapitalize:"none",autoComplete:"off"}),(0,l.createElement)(d.TextControl,{label:(0,c.__)("Extra CSS Classes","resource"),value:h,onChange:e=>o({extraClassesList:e}),autoCapitalize:"none"}),(0,l.createElement)(d.SelectControl,{label:(0,c.__)("HTML Tag","resource"),value:a,options:[{label:(0,c.__)("Default (<div>)"),value:"div"},{label:"<header>",value:"header"},{label:"<main>",value:"main"},{label:"<section>",value:"section"},{label:"<article>",value:"article"},{label:"<aside>",value:"aside"},{label:"<footer>",value:"footer"}],onChange:e=>o({tagName:e}),help:b[a]}))),(0,l.createElement)(a,m,(0,l.createElement)(u.InnerBlocks,{placeholder:(0,c.__)("Insert Columns","resource")})))},save:function(){return(0,l.createElement)(u.InnerBlocks.Content,null)}})},184:function(e,t){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var l=typeof o;if("string"===l||"number"===l)e.push(o);else if(Array.isArray(o)){if(o.length){var a=r.apply(null,o);a&&e.push(a)}}else if("object"===l){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var i in o)n.call(o,i)&&o[i]&&e.push(i)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=function(t,o,r,l){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],l=e[u][2];for(var i=!0,s=0;s<o.length;s++)(!1&l||a>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(i=!1,l<a&&(a=l));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[o,r,l]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={906:0,899:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,l,a=o[0],i=o[1],s=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(s)var u=s(n)}for(t&&t(o);c<a.length;c++)l=a[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},o=self.webpackChunkresource_layout_blocks=self.webpackChunkresource_layout_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var r=n.O(void 0,[899],(function(){return n(124)}));r=n.O(r)}();