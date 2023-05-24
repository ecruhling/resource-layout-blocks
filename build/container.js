/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./includes/block-editor/blocks/container/edit.js":
/*!********************************************************!*\
  !*** ./includes/block-editor/blocks/container/edit.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./includes/block-editor/blocks/container/editor.scss");

/**
 * External dependencies
 */


/**
 * WordPress dependencies.
 */




/**
 * Styles are applied only to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The Block edit function.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function edit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    verticalAlignment,
    isFluid,
    tagName: TagName = 'div',
    XsMarginTop,
    XsMarginBottom,
    XsMarginLeft,
    XsMarginRight,
    XsPaddingTop,
    XsPaddingBottom,
    XsPaddingLeft,
    XsPaddingRight,
    XsDisplay,
    XsCol,
    XsOffset,
    XsFlexBasis,
    XsAlignSelf,
    SmMarginTop,
    SmMarginBottom,
    SmMarginLeft,
    SmMarginRight,
    SmPaddingTop,
    SmPaddingBottom,
    SmPaddingLeft,
    SmPaddingRight,
    SmDisplay,
    SmCol,
    SmOffset,
    SmFlexBasis,
    SmAlignSelf,
    MdMarginTop,
    MdMarginBottom,
    MdMarginLeft,
    MdMarginRight,
    MdPaddingTop,
    MdPaddingBottom,
    MdPaddingLeft,
    MdPaddingRight,
    MdDisplay,
    MdCol,
    MdOffset,
    MdFlexBasis,
    MdAlignSelf,
    LgMarginTop,
    LgMarginBottom,
    LgMarginLeft,
    LgMarginRight,
    LgPaddingTop,
    LgPaddingBottom,
    LgPaddingLeft,
    LgPaddingRight,
    LgDisplay,
    LgCol,
    LgOffset,
    LgFlexBasis,
    LgAlignSelf,
    XlMarginTop,
    XlMarginBottom,
    XlMarginLeft,
    XlMarginRight,
    XlPaddingTop,
    XlPaddingBottom,
    XlPaddingLeft,
    XlPaddingRight,
    XlDisplay,
    XlCol,
    XlOffset,
    XlFlexBasis,
    XlAlignSelf,
    XxlMarginTop,
    XxlMarginBottom,
    XxlMarginLeft,
    XxlMarginRight,
    XxlPaddingTop,
    XxlPaddingBottom,
    XxlPaddingLeft,
    XxlPaddingRight,
    XxlDisplay,
    XxlCol,
    XxlOffset,
    XxlFlexBasis,
    XxlAlignSelf
  } = attributes;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [`is-vertically-aligned-${verticalAlignment}`]: verticalAlignment,
    'container': !isFluid,
    'container-fluid': isFluid
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: classes
  });
  const tagNameMessages = {
    header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The <header> element should represent introductory content, typically a group of introductory or navigational aids.'),
    main: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The <main> element should be used for the primary content of your document only. '),
    section: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The <section> element should represent a standalone portion of the document that can\'t be better represented by another element.'),
    article: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The <article> element should represent a self contained, syndicatable portion of the document.'),
    aside: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The <aside> element should represent a portion of a document whose content is only indirectly related to the document\'s main content.'),
    footer: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The <footer> element should represent a footer for its nearest sectioning element (e.g.: <section>, <article>, <main> etc.).')
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockVerticalAlignmentToolbar, {
    onChange: value => setAttributes({
      verticalAlignment: value
    }),
    value: verticalAlignment
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Container', 'resource-layout-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fluid', 'resource-layout-blocks'),
    checked: isFluid,
    onChange: value => setAttributes({
      isFluid: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('HTML element', 'resource-layout-blocks'),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default (<div>)'),
      value: 'div'
    }, {
      label: '<header>',
      value: 'header'
    }, {
      label: '<main>',
      value: 'main'
    }, {
      label: '<section>',
      value: 'section'
    }, {
      label: '<article>',
      value: 'article'
    }, {
      label: '<aside>',
      value: 'aside'
    }, {
      label: '<footer>',
      value: 'footer'
    }],
    value: TagName,
    onChange: value => setAttributes({
      tagName: value
    }),
    help: tagNameMessages[TagName]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TabPanel, {
    className: "breakpoint-tab-panel",
    activeClass: "is-active",
    orientation: "horizontal",
    tabs: [{
      name: 'base',
      title: '—',
      className: 'breakpoint-tab',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Base Tab")
    }, {
      name: 'small',
      title: 'SM',
      className: 'breakpoint-tab',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Small Tab")
    }, {
      name: 'medium',
      title: 'MD',
      className: 'breakpoint-tab',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Medium Tab")
    }, {
      name: 'large',
      title: 'LG',
      className: 'breakpoint-tab',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Large Tab")
    }, {
      name: 'extra-large',
      title: 'XL',
      className: 'breakpoint-tab',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Extra Large Tab")
    }, {
      name: 'extra-extra-large',
      title: 'XXL',
      className: 'breakpoint-tab',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Extra Extra Large Tab")
    }]
  }, _ref2 => {
    let {
      title,
      content,
      className
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, title), content);
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Base', 'resource-layout-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display', 'resource-layout-blocks'),
    value: XsDisplay,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'none',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'resource-layout-blocks')
    }, {
      value: 'inline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inline', 'resource-layout-blocks')
    }, {
      value: 'inline-block',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inline-Block', 'resource-layout-blocks')
    }, {
      value: 'block',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block', 'resource-layout-blocks')
    }, {
      value: 'grid',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Grid', 'resource-layout-blocks')
    }, {
      value: 'inline-grid',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inline Grid', 'resource-layout-blocks')
    }, {
      value: 'table',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Table', 'resource-layout-blocks')
    }, {
      value: 'table-cell',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Table Cell', 'resource-layout-blocks')
    }, {
      value: 'table-row',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Table Row', 'resource-layout-blocks')
    }, {
      value: 'flex',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flex', 'resource-layout-blocks')
    }, {
      value: 'inline-flex',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inline Flex', 'resource-layout-blocks')
    }],
    onChange: XsDisplay => setAttributes({
      XsDisplay
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Items', 'resource-layout-blocks'),
    value: XsAlignSelf,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'start',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start', 'resource-layout-blocks')
    }, {
      value: 'end',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End', 'resource-layout-blocks')
    }, {
      value: 'center',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'resource-layout-blocks')
    }, {
      value: 'baseline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Baseline', 'resource-layout-blocks')
    }, {
      value: 'stretch',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stretch', 'resource-layout-blocks')
    }],
    onChange: XsAlignSelf => setAttributes({
      XsAlignSelf
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Justify Content', 'resource-layout-blocks'),
    value: XsAlignSelf,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'start',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start', 'resource-layout-blocks')
    }, {
      value: 'end',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End', 'resource-layout-blocks')
    }, {
      value: 'center',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'resource-layout-blocks')
    }, {
      value: 'baseline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Baseline', 'resource-layout-blocks')
    }, {
      value: 'stretch',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stretch', 'resource-layout-blocks')
    }],
    onChange: XsAlignSelf => setAttributes({
      XsAlignSelf
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Self', 'resource-layout-blocks'),
    value: XsAlignSelf,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'start',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start', 'resource-layout-blocks')
    }, {
      value: 'end',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End', 'resource-layout-blocks')
    }, {
      value: 'center',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'resource-layout-blocks')
    }, {
      value: 'baseline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Baseline', 'resource-layout-blocks')
    }, {
      value: 'stretch',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stretch', 'resource-layout-blocks')
    }],
    onChange: XsAlignSelf => setAttributes({
      XsAlignSelf
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column Size', 'resource-layout-blocks'),
    value: XsCol,
    allowReset: true,
    onChange: XsCol => setAttributes({
      XsCol
    }),
    min: 1,
    max: 12
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column Offset', 'resource-layout-blocks'),
    value: XsOffset,
    allowReset: true,
    onChange: XsOffset => setAttributes({
      XsOffset
    }),
    min: 1,
    max: 12
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Top', 'resource-layout-blocks'),
    value: XsMarginTop,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: XsMarginTop => setAttributes({
      XsMarginTop
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Bottom', 'resource-layout-blocks'),
    value: XsMarginBottom,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: XsMarginBottom => setAttributes({
      XsMarginBottom
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Left', 'resource-layout-blocks'),
    value: XsMarginLeft,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: XsMarginLeft => setAttributes({
      XsMarginLeft
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Right', 'resource-layout-blocks'),
    value: XsMarginRight,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: XsMarginRight => setAttributes({
      XsMarginRight
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Top', 'resource-layout-blocks'),
    value: XsPaddingTop,
    allowReset: true,
    onChange: XsPaddingTop => setAttributes({
      XsPaddingTop
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Bottom', 'resource-layout-blocks'),
    value: XsPaddingBottom,
    allowReset: true,
    onChange: XsPaddingBottom => setAttributes({
      XsPaddingBottom
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Left', 'resource-layout-blocks'),
    value: XsPaddingLeft,
    allowReset: true,
    onChange: XsPaddingLeft => setAttributes({
      XsPaddingLeft
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Right', 'resource-layout-blocks'),
    value: XsPaddingRight,
    allowReset: true,
    onChange: XsPaddingRight => setAttributes({
      XsPaddingRight
    }),
    min: 0,
    max: 7
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('SM Settings', 'resource-layout-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column Size', 'resource-layout-blocks'),
    value: SmCol,
    allowReset: true,
    onChange: SmCol => setAttributes({
      SmCol
    }),
    min: 1,
    max: 12
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column Offset', 'resource-layout-blocks'),
    value: SmOffset,
    allowReset: true,
    onChange: SmOffset => setAttributes({
      SmOffset
    }),
    min: 1,
    max: 12
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Self', 'resource-layout-blocks'),
    value: SmAlignSelf,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'start',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start', 'resource-layout-blocks')
    }, {
      value: 'end',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End', 'resource-layout-blocks')
    }, {
      value: 'center',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'resource-layout-blocks')
    }, {
      value: 'baseline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Baseline', 'resource-layout-blocks')
    }, {
      value: 'stretch',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stretch', 'resource-layout-blocks')
    }],
    onChange: SmAlignSelf => setAttributes({
      SmAlignSelf
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display value', 'resource-layout-blocks'),
    value: SmDisplay,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'block',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block', 'resource-layout-blocks')
    }, {
      value: 'flex',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flex', 'resource-layout-blocks')
    }, {
      value: 'grid',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Grid', 'resource-layout-blocks')
    }, {
      value: 'inline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inline', 'resource-layout-blocks')
    }, {
      value: 'inline-block',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inline-Block', 'resource-layout-blocks')
    }, {
      value: 'none',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'resource-layout-blocks')
    }],
    onChange: SmDisplay => setAttributes({
      SmDisplay
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flex Basis', 'resource-layout-blocks'),
    value: SmFlexBasis,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Auto', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }],
    onChange: SmFlexBasis => setAttributes({
      SmFlexBasis
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Top', 'resource-layout-blocks'),
    value: SmMarginTop,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: SmMarginTop => setAttributes({
      SmMarginTop
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Bottom', 'resource-layout-blocks'),
    value: SmMarginBottom,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: SmMarginBottom => setAttributes({
      SmMarginBottom
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Left', 'resource-layout-blocks'),
    value: SmMarginLeft,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: SmMarginLeft => setAttributes({
      SmMarginLeft
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Right', 'resource-layout-blocks'),
    value: SmMarginRight,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: SmMarginRight => setAttributes({
      SmMarginRight
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Top', 'resource-layout-blocks'),
    value: SmPaddingTop,
    allowReset: true,
    onChange: SmPaddingTop => setAttributes({
      SmPaddingTop
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Bottom', 'resource-layout-blocks'),
    value: SmPaddingBottom,
    allowReset: true,
    onChange: SmPaddingBottom => setAttributes({
      SmPaddingBottom
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Left', 'resource-layout-blocks'),
    value: SmPaddingLeft,
    allowReset: true,
    onChange: SmPaddingLeft => setAttributes({
      SmPaddingLeft
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Right', 'resource-layout-blocks'),
    value: SmPaddingRight,
    allowReset: true,
    onChange: SmPaddingRight => setAttributes({
      SmPaddingRight
    }),
    min: 0,
    max: 7
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('MD Settings', 'resource-layout-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column Size', 'resource-layout-blocks'),
    value: MdCol,
    allowReset: true,
    onChange: MdCol => setAttributes({
      MdCol
    }),
    min: 1,
    max: 12
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column Offset', 'resource-layout-blocks'),
    value: MdOffset,
    allowReset: true,
    onChange: MdOffset => setAttributes({
      MdOffset
    }),
    min: 1,
    max: 12
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Self', 'resource-layout-blocks'),
    value: MdAlignSelf,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'start',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start', 'resource-layout-blocks')
    }, {
      value: 'end',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End', 'resource-layout-blocks')
    }, {
      value: 'center',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'resource-layout-blocks')
    }, {
      value: 'baseline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Baseline', 'resource-layout-blocks')
    }, {
      value: 'stretch',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stretch', 'resource-layout-blocks')
    }],
    onChange: MdAlignSelf => setAttributes({
      MdAlignSelf
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display value', 'resource-layout-blocks'),
    value: MdDisplay,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'block',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block', 'resource-layout-blocks')
    }, {
      value: 'flex',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flex', 'resource-layout-blocks')
    }, {
      value: 'grid',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Grid', 'resource-layout-blocks')
    }, {
      value: 'inline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inline', 'resource-layout-blocks')
    }, {
      value: 'inline-block',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inline-Block', 'resource-layout-blocks')
    }, {
      value: 'none',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'resource-layout-blocks')
    }],
    onChange: MdDisplay => setAttributes({
      MdDisplay
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flex Basis', 'resource-layout-blocks'),
    value: MdFlexBasis,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Auto', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }],
    onChange: MdFlexBasis => setAttributes({
      MdFlexBasis
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Top', 'resource-layout-blocks'),
    value: MdMarginTop,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: MdMarginTop => setAttributes({
      MdMarginTop
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Bottom', 'resource-layout-blocks'),
    value: MdMarginBottom,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: MdMarginBottom => setAttributes({
      MdMarginBottom
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Left', 'resource-layout-blocks'),
    value: MdMarginLeft,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: MdMarginLeft => setAttributes({
      MdMarginLeft
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Right', 'resource-layout-blocks'),
    value: MdMarginRight,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: MdMarginRight => setAttributes({
      MdMarginRight
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Top', 'resource-layout-blocks'),
    value: MdPaddingTop,
    allowReset: true,
    onChange: MdPaddingTop => setAttributes({
      MdPaddingTop
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Bottom', 'resource-layout-blocks'),
    value: MdPaddingBottom,
    allowReset: true,
    onChange: MdPaddingBottom => setAttributes({
      MdPaddingBottom
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Left', 'resource-layout-blocks'),
    value: MdPaddingLeft,
    allowReset: true,
    onChange: MdPaddingLeft => setAttributes({
      MdPaddingLeft
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Right', 'resource-layout-blocks'),
    value: MdPaddingRight,
    allowReset: true,
    onChange: MdPaddingRight => setAttributes({
      MdPaddingRight
    }),
    min: 0,
    max: 7
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('LG Settings', 'resource-layout-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column Size', 'resource-layout-blocks'),
    value: LgCol,
    allowReset: true,
    onChange: LgCol => setAttributes({
      LgCol
    }),
    min: 1,
    max: 12
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column Offset', 'resource-layout-blocks'),
    value: LgOffset,
    allowReset: true,
    onChange: LgOffset => setAttributes({
      LgOffset
    }),
    min: 1,
    max: 12
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Self', 'resource-layout-blocks'),
    value: LgAlignSelf,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'start',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start', 'resource-layout-blocks')
    }, {
      value: 'end',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End', 'resource-layout-blocks')
    }, {
      value: 'center',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'resource-layout-blocks')
    }, {
      value: 'baseline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Baseline', 'resource-layout-blocks')
    }, {
      value: 'stretch',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stretch', 'resource-layout-blocks')
    }],
    onChange: LgAlignSelf => setAttributes({
      LgAlignSelf
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display value', 'resource-layout-blocks'),
    value: LgDisplay,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'block',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block', 'resource-layout-blocks')
    }, {
      value: 'flex',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flex', 'resource-layout-blocks')
    }, {
      value: 'grid',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Grid', 'resource-layout-blocks')
    }, {
      value: 'inline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inline', 'resource-layout-blocks')
    }, {
      value: 'inline-block',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inline-Block', 'resource-layout-blocks')
    }, {
      value: 'none',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'resource-layout-blocks')
    }],
    onChange: LgDisplay => setAttributes({
      LgDisplay
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flex Basis', 'resource-layout-blocks'),
    value: LgFlexBasis,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Auto', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }],
    onChange: LgFlexBasis => setAttributes({
      LgFlexBasis
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Top', 'resource-layout-blocks'),
    value: LgMarginTop,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: LgMarginTop => setAttributes({
      LgMarginTop
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Bottom', 'resource-layout-blocks'),
    value: LgMarginBottom,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: LgMarginBottom => setAttributes({
      LgMarginBottom
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Left', 'resource-layout-blocks'),
    value: LgMarginLeft,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: LgMarginLeft => setAttributes({
      LgMarginLeft
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Right', 'resource-layout-blocks'),
    value: LgMarginRight,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: LgMarginRight => setAttributes({
      LgMarginRight
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Top', 'resource-layout-blocks'),
    value: LgPaddingTop,
    allowReset: true,
    onChange: LgPaddingTop => setAttributes({
      LgPaddingTop
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Bottom', 'resource-layout-blocks'),
    value: LgPaddingBottom,
    allowReset: true,
    onChange: LgPaddingBottom => setAttributes({
      LgPaddingBottom
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Left', 'resource-layout-blocks'),
    value: LgPaddingLeft,
    allowReset: true,
    onChange: LgPaddingLeft => setAttributes({
      LgPaddingLeft
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Right', 'resource-layout-blocks'),
    value: LgPaddingRight,
    allowReset: true,
    onChange: LgPaddingRight => setAttributes({
      LgPaddingRight
    }),
    min: 0,
    max: 7
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('XL Settings', 'resource-layout-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column Size', 'resource-layout-blocks'),
    value: XlCol,
    allowReset: true,
    onChange: XlCol => setAttributes({
      XlCol
    }),
    min: 1,
    max: 12
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column Offset', 'resource-layout-blocks'),
    value: XlOffset,
    allowReset: true,
    onChange: XlOffset => setAttributes({
      XlOffset
    }),
    min: 1,
    max: 12
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Self', 'resource-layout-blocks'),
    value: XlAlignSelf,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'start',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start', 'resource-layout-blocks')
    }, {
      value: 'end',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End', 'resource-layout-blocks')
    }, {
      value: 'center',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'resource-layout-blocks')
    }, {
      value: 'baseline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Baseline', 'resource-layout-blocks')
    }, {
      value: 'stretch',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stretch', 'resource-layout-blocks')
    }],
    onChange: XlAlignSelf => setAttributes({
      XlAlignSelf
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display value', 'resource-layout-blocks'),
    value: XlDisplay,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'block',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block', 'resource-layout-blocks')
    }, {
      value: 'flex',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flex', 'resource-layout-blocks')
    }, {
      value: 'grid',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Grid', 'resource-layout-blocks')
    }, {
      value: 'inline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inline', 'resource-layout-blocks')
    }, {
      value: 'inline-block',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inline-Block', 'resource-layout-blocks')
    }, {
      value: 'none',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'resource-layout-blocks')
    }],
    onChange: XlDisplay => setAttributes({
      XlDisplay
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flex Basis', 'resource-layout-blocks'),
    value: XlFlexBasis,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Auto', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }],
    onChange: XlFlexBasis => setAttributes({
      XlFlexBasis
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Top', 'resource-layout-blocks'),
    value: XlMarginTop,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: XlMarginTop => setAttributes({
      XlMarginTop
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Bottom', 'resource-layout-blocks'),
    value: XlMarginBottom,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: XlMarginBottom => setAttributes({
      XlMarginBottom
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Left', 'resource-layout-blocks'),
    value: XlMarginLeft,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: XlMarginLeft => setAttributes({
      XlMarginLeft
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Right', 'resource-layout-blocks'),
    value: XlMarginRight,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: XlMarginRight => setAttributes({
      XlMarginRight
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Top', 'resource-layout-blocks'),
    value: XlPaddingTop,
    allowReset: true,
    onChange: XlPaddingTop => setAttributes({
      XlPaddingTop
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Bottom', 'resource-layout-blocks'),
    value: XlPaddingBottom,
    allowReset: true,
    onChange: XlPaddingBottom => setAttributes({
      XlPaddingBottom
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Left', 'resource-layout-blocks'),
    value: XlPaddingLeft,
    allowReset: true,
    onChange: XlPaddingLeft => setAttributes({
      XlPaddingLeft
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Right', 'resource-layout-blocks'),
    value: XlPaddingRight,
    allowReset: true,
    onChange: XlPaddingRight => setAttributes({
      XlPaddingRight
    }),
    min: 0,
    max: 7
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('XXL Settings', 'resource-layout-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column Size', 'resource-layout-blocks'),
    value: XxlCol,
    allowReset: true,
    onChange: XxlCol => setAttributes({
      XxlCol
    }),
    min: 1,
    max: 12
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column Offset', 'resource-layout-blocks'),
    value: XxlOffset,
    allowReset: true,
    onChange: XxlOffset => setAttributes({
      XxlOffset
    }),
    min: 1,
    max: 12
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Self', 'resource-layout-blocks'),
    value: XxlAlignSelf,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'start',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start', 'resource-layout-blocks')
    }, {
      value: 'end',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End', 'resource-layout-blocks')
    }, {
      value: 'center',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'resource-layout-blocks')
    }, {
      value: 'baseline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Baseline', 'resource-layout-blocks')
    }, {
      value: 'stretch',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stretch', 'resource-layout-blocks')
    }],
    onChange: XxlAlignSelf => setAttributes({
      XxlAlignSelf
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display value', 'resource-layout-blocks'),
    value: XxlDisplay,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'block',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block', 'resource-layout-blocks')
    }, {
      value: 'flex',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flex', 'resource-layout-blocks')
    }, {
      value: 'grid',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Grid', 'resource-layout-blocks')
    }, {
      value: 'inline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inline', 'resource-layout-blocks')
    }, {
      value: 'inline-block',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inline-Block', 'resource-layout-blocks')
    }, {
      value: 'none',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'resource-layout-blocks')
    }],
    onChange: XxlDisplay => setAttributes({
      XxlDisplay
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flex Basis', 'resource-layout-blocks'),
    value: XxlFlexBasis,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Auto', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }],
    onChange: XxlFlexBasis => setAttributes({
      XxlFlexBasis
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Top', 'resource-layout-blocks'),
    value: XxlMarginTop,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: XxlMarginTop => setAttributes({
      XxlMarginTop
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Bottom', 'resource-layout-blocks'),
    value: XxlMarginBottom,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: XxlMarginBottom => setAttributes({
      XxlMarginBottom
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Left', 'resource-layout-blocks'),
    value: XxlMarginLeft,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: XxlMarginLeft => setAttributes({
      XxlMarginLeft
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Right', 'resource-layout-blocks'),
    value: XxlMarginRight,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: '0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'resource-layout-blocks')
    }, {
      value: '1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'resource-layout-blocks')
    }, {
      value: '2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'resource-layout-blocks')
    }, {
      value: '3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'resource-layout-blocks')
    }, {
      value: '4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'resource-layout-blocks')
    }, {
      value: '5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'resource-layout-blocks')
    }, {
      value: '6',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'resource-layout-blocks')
    }, {
      value: '7',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'resource-layout-blocks')
    }, {
      value: 'auto',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('auto', 'resource-layout-blocks')
    }],
    onChange: XxlMarginRight => setAttributes({
      XxlMarginRight
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Top', 'resource-layout-blocks'),
    value: XxlPaddingTop,
    allowReset: true,
    onChange: XxlPaddingTop => setAttributes({
      XxlPaddingTop
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Bottom', 'resource-layout-blocks'),
    value: XxlPaddingBottom,
    allowReset: true,
    onChange: XxlPaddingBottom => setAttributes({
      XxlPaddingBottom
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Left', 'resource-layout-blocks'),
    value: XxlPaddingLeft,
    allowReset: true,
    onChange: XxlPaddingLeft => setAttributes({
      XxlPaddingLeft
    }),
    min: 0,
    max: 7
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Right', 'resource-layout-blocks'),
    value: XxlPaddingRight,
    allowReset: true,
    onChange: XxlPaddingRight => setAttributes({
      XxlPaddingRight
    }),
    min: 0,
    max: 7
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Insert Rows', 'resource-layout-blocks')
  })));
}

/***/ }),

/***/ "./includes/block-editor/blocks/container/icon.js":
/*!********************************************************!*\
  !*** ./includes/block-editor/blocks/container/icon.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": function() { return /* binding */ icon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m23.1 18.6h-.3v-13.2h.3c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-22.2c-.5 0-.9.4-.9.9s.4.9.9.9h.3v13.2h-.3c-.5 0-.9.4-.9.9s.4.9.9.9h22.2c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm-2.1 0h-18v-13.2h18zm-13.8-1.2c.5 0 .9-.4.9-.9v-9c0-.49-.4-.9-.9-.9s-.9.41-.9.9v9c0 .5.4.9.9.9zm4.8 0c.5 0 .9-.4.9-.9v-9c0-.5-.4-.9-.9-.9s-.9.41-.9.9v9c0 .5.4.9.9.9zm4.8 0c.5 0 .9-.4.9-.9v-9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v9c0 .5.41.9.9.9z"
}));

/***/ }),

/***/ "./includes/block-editor/blocks/container/index.js":
/*!*********************************************************!*\
  !*** ./includes/block-editor/blocks/container/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./includes/block-editor/blocks/container/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./includes/block-editor/blocks/container/block.json");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./includes/block-editor/blocks/container/icon.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./includes/block-editor/blocks/container/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./includes/block-editor/blocks/container/save.js");
/**
 * Import registerBlockType.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Styles are applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies.
 */




const {
  name,
  ...settings
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;

/**
 * Register this Block Type.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  ...settings,
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__.icon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"],
  transforms: {
    to: [{
      type: 'block',
      blocks: ['resource-layout-blocks/row'],
      transform: _ref => {
        let {
          content
        } = _ref;
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('resource-layout-blocks/row', {
          content
        });
      }
    }]
  }
});

/***/ }),

/***/ "./includes/block-editor/blocks/container/save.js":
/*!********************************************************!*\
  !*** ./includes/block-editor/blocks/container/save.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies.
 */


/**
 * The Block save function.
 *
 * Even though this is a dynamic block, it needs the save function to save any InnerBlocks contained within.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function save() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./includes/block-editor/blocks/container/editor.scss":
/*!************************************************************!*\
  !*** ./includes/block-editor/blocks/container/editor.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./includes/block-editor/blocks/container/style.scss":
/*!***********************************************************!*\
  !*** ./includes/block-editor/blocks/container/style.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./includes/block-editor/blocks/container/block.json":
/*!***********************************************************!*\
  !*** ./includes/block-editor/blocks/container/block.json ***!
  \***********************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"resource-layout-blocks/container","title":"Container","category":"resource-layout-blocks","description":"A container/wrapper; fluid or fixed.","keywords":["container","wrapper"],"version":"1.0.0","textdomain":"resource","render":"file:./index.php","attributes":{"anchor":{"type":"string"},"isFluid":{"type":"boolean","default":true},"tagName":{"type":"string","default":"div"},"verticalAlignment":{"type":"string"}},"supports":{"anchor":true,"align":true,"alignWide":false,"ariaLabel":true,"className":true,"color":{"background":true,"gradients":false,"link":false,"text":false},"customClassName":true,"defaultStylePicker":true,"dimensions":{"minHeight":false},"filter":{"duotone":false},"html":true,"inserter":true,"multiple":true,"reusable":true,"lock":true,"position":{"sticky":true},"spacing":{"margin":true,"padding":true,"blockGap":true},"typography":{"fontSize":false,"lineHeight":false}},"editorScript":"file:../../../../build/container.js","editorStyle":"file:../../../../build/container.css","style":"file:../../../../build/style-container.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"container": 0,
/******/ 			"./style-container": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkresource_layout_blocks"] = self["webpackChunkresource_layout_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-container"], function() { return __webpack_require__("./includes/block-editor/blocks/container/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=container.js.map