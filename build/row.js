/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./includes/block-editor/block-controls/alignControl.js":
/*!**************************************************************!*\
  !*** ./includes/block-editor/block-controls/alignControl.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlignControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */



/**
 * AlignControl
 * Component for controlling the Text Align attribute.
 *
 * @param breakpoint
 * @param breakpoint_name
 * @param alignText
 * @param setAlignText
 * @returns {JSX.Element}
 * @constructor
 */
function AlignControl(_ref) {
  let {
    breakpoint,
    breakpoint_name,
    alignText,
    setAlignText
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {
    isBorderless: true,
    isShady: true,
    size: "small",
    className: "resource-card-header"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`${breakpoint_name} ALIGN`, 'resource-layout-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, {
    size: "small"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    wrap: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Text', 'resource-layout-blocks'),
    value: alignText,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: `text-${breakpoint}start`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Start', 'resource-layout-blocks')
    }, {
      value: `text-${breakpoint}center`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'resource-layout-blocks')
    }, {
      value: `text-${breakpoint}end`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('End', 'resource-layout-blocks')
    }],
    onChange: setAlignText
  })))));
}

/***/ }),

/***/ "./includes/block-editor/block-controls/displayControl.js":
/*!****************************************************************!*\
  !*** ./includes/block-editor/block-controls/displayControl.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColumnsDisplayControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */



/**
 * DisplayControl
 * Component for controlling the Display attribute
 *
 * @param breakpoint
 * @param breakpoint_name
 * @param display
 * @param setDisplay
 * @returns {JSX.Element}
 * @constructor
 */
function ColumnsDisplayControl(_ref) {
  let {
    breakpoint,
    breakpoint_name,
    display,
    setDisplay
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {
    isBorderless: true,
    isShady: true,
    size: "small",
    className: "resource-card-header"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`${breakpoint_name} DISPLAY`, 'resource-layout-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, {
    size: "small"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    wrap: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Display', 'resource-layout-blocks'),
    value: display,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: `d-${breakpoint}none`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'resource-layout-blocks')
    }, {
      value: `d-${breakpoint}inline`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inline', 'resource-layout-blocks')
    }, {
      value: `d-${breakpoint}inline-block`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inline-Block', 'resource-layout-blocks')
    }, {
      value: `d-${breakpoint}block`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block', 'resource-layout-blocks')
    }, {
      value: `d-${breakpoint}grid`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Grid', 'resource-layout-blocks')
    }, {
      value: `d-${breakpoint}inline-grid`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inline Grid', 'resource-layout-blocks')
    }, {
      value: `d-${breakpoint}table`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Table', 'resource-layout-blocks')
    }, {
      value: `d-${breakpoint}table-cell`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Table Cell', 'resource-layout-blocks')
    }, {
      value: `d-${breakpoint}table-row`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Table Row', 'resource-layout-blocks')
    }, {
      value: `d-${breakpoint}flex`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex', 'resource-layout-blocks')
    }, {
      value: `d-${breakpoint}inline-flex`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inline Flex', 'resource-layout-blocks')
    }],
    onChange: setDisplay
  })))));
}

/***/ }),

/***/ "./includes/block-editor/block-controls/flexControl.js":
/*!*************************************************************!*\
  !*** ./includes/block-editor/block-controls/flexControl.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FlexControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */



/**
 * FlexControl.
 * Component for controlling attributes of flex items
 *
 * @param breakpoint
 * @param breakpoint_name
 * @param flexDirection
 * @param justifyContent
 * @param alignItems
 * @param alignSelf
 * @param fillGrowShrink
 * @param wrap
 * @param order
 * @param alignContent
 * @param setFlexDirection
 * @param setJustifyContent
 * @param setAlignItems
 * @param setAlignSelf
 * @param setFillGrowShrink
 * @param setWrap
 * @param setOrder
 * @param setAlignContent
 * @returns {JSX.Element}
 * @constructor
 */
function FlexControl(_ref) {
  let {
    breakpoint,
    breakpoint_name,
    flexDirection,
    justifyContent,
    alignItems,
    alignSelf,
    fillGrowShrink,
    wrap,
    order,
    alignContent,
    setFlexDirection,
    setJustifyContent,
    setAlignItems,
    setAlignSelf,
    setFillGrowShrink,
    setWrap,
    setOrder,
    setAlignContent
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {
    isBorderless: true,
    isShady: true,
    size: "small",
    className: "resource-card-header"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`${breakpoint_name} FLEX ATTRIBUTES`, 'resource-layout-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, {
    size: "small"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    wrap: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Direction', 'resource-layout-blocks'),
    value: flexDirection,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: `flex-${breakpoint}row`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex Row', 'resource-layout-blocks')
    }, {
      value: `flex-${breakpoint}row-reverse`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex Row Reverse', 'resource-layout-blocks')
    }, {
      value: `flex-${breakpoint}column`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex Column', 'resource-layout-blocks')
    }, {
      value: `flex-${breakpoint}column-reverse`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex Column Reverse', 'resource-layout-blocks')
    }],
    onChange: setFlexDirection
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Justify Content', 'resource-layout-blocks'),
    value: justifyContent,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: `justify-content-${breakpoint}start`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Start', 'resource-layout-blocks')
    }, {
      value: `justify-content-${breakpoint}end`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('End', 'resource-layout-blocks')
    }, {
      value: `justify-content-${breakpoint}center`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'resource-layout-blocks')
    }, {
      value: `justify-content-${breakpoint}between`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Between', 'resource-layout-blocks')
    }, {
      value: `justify-content-${breakpoint}around`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Around', 'resource-layout-blocks')
    }, {
      value: `justify-content-${breakpoint}evenly`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Evenly', 'resource-layout-blocks')
    }],
    onChange: setJustifyContent
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Items', 'resource-layout-blocks'),
    value: alignItems,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: `align-items-${breakpoint}start`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Start', 'resource-layout-blocks')
    }, {
      value: `align-items-${breakpoint}end`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('End', 'resource-layout-blocks')
    }, {
      value: `align-items-${breakpoint}center`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'resource-layout-blocks')
    }, {
      value: `align-items-${breakpoint}baseline`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Baseline', 'resource-layout-blocks')
    }, {
      value: `align-items-${breakpoint}stretch`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Stretch', 'resource-layout-blocks')
    }],
    onChange: setAlignItems
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Self', 'resource-layout-blocks'),
    value: alignSelf,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: `align-self-${breakpoint}start`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Start', 'resource-layout-blocks')
    }, {
      value: `align-self-${breakpoint}end`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('End', 'resource-layout-blocks')
    }, {
      value: `align-self-${breakpoint}center`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'resource-layout-blocks')
    }, {
      value: `align-self-${breakpoint}baseline`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Baseline', 'resource-layout-blocks')
    }, {
      value: `align-self-${breakpoint}stretch`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Stretch', 'resource-layout-blocks')
    }],
    onChange: setAlignSelf
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fill, Grow, & Shrink', 'resource-layout-blocks'),
    value: fillGrowShrink,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: `flex-${breakpoint}fill`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fill', 'resource-layout-blocks')
    }, {
      value: `flex-${breakpoint}grow-0`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Grow 0', 'resource-layout-blocks')
    }, {
      value: `flex-${breakpoint}grow-1`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Grow 1', 'resource-layout-blocks')
    }, {
      value: `flex-${breakpoint}shrink-0`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shrink 0', 'resource-layout-blocks')
    }, {
      value: `flex-${breakpoint}shrink-1`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shrink 1', 'resource-layout-blocks')
    }],
    onChange: setFillGrowShrink
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Wrap', 'resource-layout-blocks'),
    value: wrap,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: `flex-${breakpoint}nowrap`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No Wrap', 'resource-layout-blocks')
    }, {
      value: `flex-${breakpoint}wrap`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Wrap', 'resource-layout-blocks')
    }, {
      value: `flex-${breakpoint}wrap-reverse`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Wrap Reverse', 'resource-layout-blocks')
    }],
    onChange: setWrap
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Order', 'resource-layout-blocks'),
    value: order,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: 'order-first',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('first', 'resource-layout-blocks')
    }, {
      value: 'order-0',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('0', 'resource-layout-blocks')
    }, {
      value: 'order-1',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('1', 'resource-layout-blocks')
    }, {
      value: 'order-2',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2', 'resource-layout-blocks')
    }, {
      value: 'order-3',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('3', 'resource-layout-blocks')
    }, {
      value: 'order-4',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('4', 'resource-layout-blocks')
    }, {
      value: 'order-5',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('5', 'resource-layout-blocks')
    }, {
      value: 'order-last',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('last', 'resource-layout-blocks')
    }],
    onChange: setOrder
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Content', 'resource-layout-blocks'),
    value: alignContent,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Option', 'resource-layout-blocks')
    }, {
      value: `align-content-${breakpoint}start`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Start', 'resource-layout-blocks')
    }, {
      value: `align-content-${breakpoint}end`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('End', 'resource-layout-blocks')
    }, {
      value: `justify-content-${breakpoint}center`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'resource-layout-blocks')
    }, {
      value: `align-content-${breakpoint}between`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Between', 'resource-layout-blocks')
    }, {
      value: `align-content-${breakpoint}around`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Around', 'resource-layout-blocks')
    }, {
      value: `align-content-${breakpoint}stretch`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Stretch', 'resource-layout-blocks')
    }],
    onChange: setAlignContent
  })))));
}

/***/ }),

/***/ "./includes/block-editor/block-controls/marginControl.js":
/*!***************************************************************!*\
  !*** ./includes/block-editor/block-controls/marginControl.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarginControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */



/**
 * MarginControl
 * Component for controlling Margin attributes
 *
 * @param breakpoint
 * @param breakpoint_name
 * @param marginTop
 * @param marginRight
 * @param marginBottom
 * @param marginLeft
 * @param setMarginTop
 * @param setMarginRight
 * @param setMarginBottom
 * @param setMarginLeft
 * @returns {JSX.Element}
 * @constructor
 */
function MarginControl(_ref) {
  let {
    breakpoint,
    breakpoint_name,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    setMarginTop,
    setMarginRight,
    setMarginBottom,
    setMarginLeft
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {
    isBorderless: true,
    isShady: true,
    size: "small",
    className: "resource-card-header"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`${breakpoint_name} MARGIN`, 'resource-layout-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, {
    size: "small"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    wrap: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'resource-layout-blocks'),
    value: marginTop,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: `mt-${breakpoint}0`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('0', 'resource-layout-blocks')
    }, {
      value: `mt-${breakpoint}1`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('1', 'resource-layout-blocks')
    }, {
      value: `mt-${breakpoint}2`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2', 'resource-layout-blocks')
    }, {
      value: `mt-${breakpoint}3`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('3', 'resource-layout-blocks')
    }, {
      value: `mt-${breakpoint}4`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('4', 'resource-layout-blocks')
    }, {
      value: `mt-${breakpoint}5`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('5', 'resource-layout-blocks')
    }, {
      value: `mt-${breakpoint}auto`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto', 'resource-layout-blocks')
    }],
    onChange: setMarginTop
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'resource-layout-blocks'),
    value: marginRight,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: `me-${breakpoint}0`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('0', 'resource-layout-blocks')
    }, {
      value: `me-${breakpoint}1`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('1', 'resource-layout-blocks')
    }, {
      value: `me-${breakpoint}2`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2', 'resource-layout-blocks')
    }, {
      value: `me-${breakpoint}3`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('3', 'resource-layout-blocks')
    }, {
      value: `me-${breakpoint}4`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('4', 'resource-layout-blocks')
    }, {
      value: `me-${breakpoint}5`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('5', 'resource-layout-blocks')
    }, {
      value: `me-${breakpoint}auto`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto', 'resource-layout-blocks')
    }],
    onChange: setMarginRight
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'resource-layout-blocks'),
    value: marginBottom,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: `mb-${breakpoint}0`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('0', 'resource-layout-blocks')
    }, {
      value: `mb-${breakpoint}1`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('1', 'resource-layout-blocks')
    }, {
      value: `mb-${breakpoint}2`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2', 'resource-layout-blocks')
    }, {
      value: `mb-${breakpoint}3`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('3', 'resource-layout-blocks')
    }, {
      value: `mb-${breakpoint}4`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('4', 'resource-layout-blocks')
    }, {
      value: `mb-${breakpoint}5`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('5', 'resource-layout-blocks')
    }, {
      value: `mb-${breakpoint}auto`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto', 'resource-layout-blocks')
    }],
    onChange: setMarginBottom
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'resource-layout-blocks'),
    value: marginLeft,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: `ms-${breakpoint}0`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('0', 'resource-layout-blocks')
    }, {
      value: `ms-${breakpoint}1`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('1', 'resource-layout-blocks')
    }, {
      value: `ms-${breakpoint}2`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2', 'resource-layout-blocks')
    }, {
      value: `ms-${breakpoint}3`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('3', 'resource-layout-blocks')
    }, {
      value: `ms-${breakpoint}4`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('4', 'resource-layout-blocks')
    }, {
      value: `ms-${breakpoint}5`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('5', 'resource-layout-blocks')
    }, {
      value: `ms-${breakpoint}auto`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto', 'resource-layout-blocks')
    }],
    onChange: setMarginLeft
  })))));
}

/***/ }),

/***/ "./includes/block-editor/block-controls/paddingControl.js":
/*!****************************************************************!*\
  !*** ./includes/block-editor/block-controls/paddingControl.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PaddingControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies.
 */



/**
 * PaddingControl.
 * Component for controlling Padding attributes.
 *
 * @param breakpoint
 * @param breakpoint_name
 * @param paddingTop
 * @param paddingRight
 * @param paddingBottom
 * @param paddingLeft
 * @param setPaddingTop
 * @param setPaddingRight
 * @param setPaddingBottom
 * @param setPaddingLeft
 * @returns {JSX.Element}
 * @constructor
 */
function PaddingControl(_ref) {
  let {
    breakpoint,
    breakpoint_name,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    setPaddingTop,
    setPaddingRight,
    setPaddingBottom,
    setPaddingLeft
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {
    isBorderless: true,
    isShady: true,
    size: "small",
    className: "resource-card-header"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`${breakpoint_name} PADDING`, 'resource-layout-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, {
    size: "small"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    wrap: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'resource-layout-blocks'),
    value: paddingTop,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: `pt-${breakpoint}0`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('0', 'resource-layout-blocks')
    }, {
      value: `pt-${breakpoint}1`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('1', 'resource-layout-blocks')
    }, {
      value: `pt-${breakpoint}2`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2', 'resource-layout-blocks')
    }, {
      value: `pt-${breakpoint}3`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('3', 'resource-layout-blocks')
    }, {
      value: `pt-${breakpoint}4`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('4', 'resource-layout-blocks')
    }, {
      value: `pt-${breakpoint}5`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('5', 'resource-layout-blocks')
    }],
    onChange: setPaddingTop
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'resource-layout-blocks'),
    value: paddingRight,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: `pe-${breakpoint}0`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('0', 'resource-layout-blocks')
    }, {
      value: `pe-${breakpoint}1`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('1', 'resource-layout-blocks')
    }, {
      value: `pe-${breakpoint}2`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2', 'resource-layout-blocks')
    }, {
      value: `pe-${breakpoint}3`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('3', 'resource-layout-blocks')
    }, {
      value: `pe-${breakpoint}4`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('4', 'resource-layout-blocks')
    }, {
      value: `pe-${breakpoint}5`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('5', 'resource-layout-blocks')
    }],
    onChange: setPaddingRight
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'resource-layout-blocks'),
    value: paddingBottom,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: `pb-${breakpoint}0`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('0', 'resource-layout-blocks')
    }, {
      value: `pb-${breakpoint}1`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('1', 'resource-layout-blocks')
    }, {
      value: `pb-${breakpoint}2`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2', 'resource-layout-blocks')
    }, {
      value: `pb-${breakpoint}3`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('3', 'resource-layout-blocks')
    }, {
      value: `pb-${breakpoint}4`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('4', 'resource-layout-blocks')
    }, {
      value: `pb-${breakpoint}5`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('5', 'resource-layout-blocks')
    }],
    onChange: setPaddingBottom
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'resource-layout-blocks'),
    value: paddingLeft,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Value', 'resource-layout-blocks')
    }, {
      value: `ps-${breakpoint}0`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('0', 'resource-layout-blocks')
    }, {
      value: `ps-${breakpoint}1`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('1', 'resource-layout-blocks')
    }, {
      value: `ps-${breakpoint}2`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2', 'resource-layout-blocks')
    }, {
      value: `ps-${breakpoint}3`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('3', 'resource-layout-blocks')
    }, {
      value: `ps-${breakpoint}4`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('4', 'resource-layout-blocks')
    }, {
      value: `ps-${breakpoint}5`,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('5', 'resource-layout-blocks')
    }],
    onChange: setPaddingLeft
  })))));
}

/***/ }),

/***/ "./includes/block-editor/block-help/tagNameMessages.js":
/*!*************************************************************!*\
  !*** ./includes/block-editor/block-help/tagNameMessages.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tagNameMessages": () => (/* binding */ tagNameMessages)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const tagNameMessages = {
  header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The <header> element should represent introductory content, typically a group of introductory or navigational aids.'),
  main: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The <main> element should be used for the primary content of your document only. '),
  section: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The <section> element should represent a standalone portion of the document that can\'t be better represented by another element.'),
  article: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The <article> element should represent a self contained, syndicatable portion of the document.'),
  aside: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The <aside> element should represent a portion of a document whose content is only indirectly related to the document\'s main content.'),
  footer: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The <footer> element should represent a footer for its nearest sectioning element (e.g.: <section>, <article>, <main> etc.).')
};

/***/ }),

/***/ "./includes/block-editor/blocks/row/edit.js":
/*!**************************************************!*\
  !*** ./includes/block-editor/blocks/row/edit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _block_help_tagNameMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../block-help/tagNameMessages */ "./includes/block-editor/block-help/tagNameMessages.js");
/* harmony import */ var _block_controls_displayControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../block-controls/displayControl */ "./includes/block-editor/block-controls/displayControl.js");
/* harmony import */ var _block_controls_flexControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../block-controls/flexControl */ "./includes/block-editor/block-controls/flexControl.js");
/* harmony import */ var _block_controls_paddingControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../block-controls/paddingControl */ "./includes/block-editor/block-controls/paddingControl.js");
/* harmony import */ var _block_controls_marginControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../block-controls/marginControl */ "./includes/block-editor/block-controls/marginControl.js");
/* harmony import */ var _block_controls_alignControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../block-controls/alignControl */ "./includes/block-editor/block-controls/alignControl.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./editor.scss */ "./includes/block-editor/blocks/row/editor.scss");

/**
 * WordPress dependencies
 */




/**
 * External dependencies
 */



/**
 * Internal dependencies
 */







/**
 * Styles are applied only to the editor
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The Block edit function
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
    tagName: TagName = 'div',
    baseDisplay,
    basePaddingTop,
    basePaddingRight,
    basePaddingBottom,
    basePaddingLeft,
    baseMarginTop,
    baseMarginRight,
    baseMarginBottom,
    baseMarginLeft,
    baseAlignText,
    baseFlexDirection,
    baseFillGrowShrink,
    baseWrap,
    baseOrder,
    baseAlignContent,
    baseAlignItems,
    baseAlignSelf,
    baseJustifyContent,
    smDisplay,
    smPaddingTop,
    smPaddingRight,
    smPaddingBottom,
    smPaddingLeft,
    smMarginTop,
    smMarginRight,
    smMarginBottom,
    smMarginLeft,
    smAlignText,
    smFlexDirection,
    smFillGrowShrink,
    smWrap,
    smOrder,
    smAlignContent,
    smAlignItems,
    smAlignSelf,
    smJustifyContent,
    mdDisplay,
    mdPaddingTop,
    mdPaddingRight,
    mdPaddingBottom,
    mdPaddingLeft,
    mdMarginTop,
    mdMarginRight,
    mdMarginBottom,
    mdMarginLeft,
    mdAlignText,
    mdFlexDirection,
    mdFillGrowShrink,
    mdWrap,
    mdOrder,
    mdAlignContent,
    mdAlignItems,
    mdAlignSelf,
    mdJustifyContent,
    lgDisplay,
    lgPaddingTop,
    lgPaddingRight,
    lgPaddingBottom,
    lgPaddingLeft,
    lgMarginTop,
    lgMarginRight,
    lgMarginBottom,
    lgMarginLeft,
    lgAlignText,
    lgFlexDirection,
    lgFillGrowShrink,
    lgWrap,
    lgOrder,
    lgAlignContent,
    lgAlignItems,
    lgAlignSelf,
    lgJustifyContent,
    xlDisplay,
    xlPaddingTop,
    xlPaddingRight,
    xlPaddingBottom,
    xlPaddingLeft,
    xlMarginTop,
    xlMarginRight,
    xlMarginBottom,
    xlMarginLeft,
    xlAlignText,
    xlFlexDirection,
    xlFillGrowShrink,
    xlWrap,
    xlOrder,
    xlAlignContent,
    xlAlignItems,
    xlAlignSelf,
    xlJustifyContent,
    xxlDisplay,
    xxlPaddingTop,
    xxlPaddingRight,
    xxlPaddingBottom,
    xxlPaddingLeft,
    xxlMarginTop,
    xxlMarginRight,
    xxlMarginBottom,
    xxlMarginLeft,
    xxlAlignText,
    xxlFlexDirection,
    xxlFillGrowShrink,
    xxlWrap,
    xxlOrder,
    xxlAlignContent,
    xxlAlignItems,
    xxlAlignSelf,
    xxlJustifyContent
  } = attributes;
  const classNameAttributes = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.omit)(attributes, ['anchor', 'tagName', 'className']);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('row', Object.values(classNameAttributes));
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classes
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {
    label: "Class Inspector",
    id: "class-inspector"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarItem, {
    as: "p"
  }, classes))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Card, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
    isBorderless: true,
    isShady: true,
    size: "small",
    className: "resource-card-header"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('ROW', 'resource-layout-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardBody, {
    size: "small"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    wrap: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('HTML element', 'resource-layout-blocks'),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default (<div>)'),
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
    help: _block_help_tagNameMessages__WEBPACK_IMPORTED_MODULE_6__.tagNameMessages[TagName]
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "breakpoint-tab-panel",
    activeClass: "is-active",
    orientation: "horizontal",
    tabs: [{
      name: 'base',
      title: '—',
      className: 'breakpoint-tab',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Card, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_displayControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
        breakpoint: "",
        breakpoint_name: "",
        display: baseDisplay,
        setDisplay: baseDisplay => setAttributes({
          baseDisplay
        }),
        __nextHasNoMarginBottom: true
      }), (baseDisplay === '' || baseDisplay === 'd-flex' || baseDisplay === 'd-inline-flex') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardBody, {
        size: "small",
        style: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
        wrap: true
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "Row block default display attribute is 'flex'"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_flexControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
        breakpoint: "",
        breakpoint_name: "",
        flexDirection: baseFlexDirection,
        justifyContent: baseJustifyContent,
        alignItems: baseAlignItems,
        alignSelf: baseAlignSelf,
        fillGrowShrink: baseFillGrowShrink,
        wrap: baseWrap,
        order: baseOrder,
        alignContent: baseAlignContent,
        setFlexDirection: baseFlexDirection => setAttributes({
          baseFlexDirection
        }),
        setJustifyContent: baseJustifyContent => setAttributes({
          baseJustifyContent
        }),
        setAlignItems: baseAlignItems => setAttributes({
          baseAlignItems
        }),
        setAlignSelf: baseAlignSelf => setAttributes({
          baseAlignSelf
        }),
        setFillGrowShrink: baseFillGrowShrink => setAttributes({
          baseFillGrowShrink
        }),
        setWrap: baseWrap => setAttributes({
          baseWrap
        }),
        setOrder: baseOrder => setAttributes({
          baseOrder
        }),
        setAlignContent: baseAlignContent => setAttributes({
          baseAlignContent
        })
      })), baseDisplay !== 'd-none' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_paddingControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
        breakpoint: "",
        breakpoint_name: "",
        paddingTop: basePaddingTop,
        paddingRight: basePaddingRight,
        paddingBottom: basePaddingBottom,
        paddingLeft: basePaddingLeft,
        setPaddingTop: basePaddingTop => setAttributes({
          basePaddingTop
        }),
        setPaddingRight: basePaddingRight => setAttributes({
          basePaddingRight
        }),
        setPaddingBottom: basePaddingBottom => setAttributes({
          basePaddingBottom
        }),
        setPaddingLeft: basePaddingLeft => setAttributes({
          basePaddingLeft
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_marginControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
        breakpoint: "",
        breakpoint_name: "",
        marginTop: baseMarginTop,
        marginRight: baseMarginRight,
        marginBottom: baseMarginBottom,
        marginLeft: baseMarginLeft,
        setMarginTop: baseMarginTop => setAttributes({
          baseMarginTop
        }),
        setMarginRight: baseMarginRight => setAttributes({
          baseMarginRight
        }),
        setMarginBottom: baseMarginBottom => setAttributes({
          baseMarginBottom
        }),
        setMarginLeft: baseMarginLeft => setAttributes({
          baseMarginLeft
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_alignControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
        breakpoint: "",
        breakpoint_name: "",
        alignText: baseAlignText,
        flexDirection: baseFlexDirection,
        alignItems: baseAlignItems,
        alignSelf: baseAlignSelf,
        justifyContent: baseJustifyContent,
        setAlignText: baseAlignText => setAttributes({
          baseAlignText
        }),
        setFlexDirection: baseFlexDirection => setAttributes({
          baseFlexDirection
        }),
        setAlignItems: baseAlignItems => setAttributes({
          baseAlignItems
        }),
        setAlignSelf: baseAlignSelf => setAttributes({
          baseAlignSelf
        }),
        setJustifyContent: baseJustifyContent => setAttributes({
          baseJustifyContent
        })
      })))
    }, {
      name: 'small',
      title: 'SM',
      className: 'breakpoint-tab',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Card, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_displayControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
        breakpoint: "sm-",
        breakpoint_name: "SM",
        display: smDisplay,
        setDisplay: smDisplay => setAttributes({
          smDisplay
        })
      }), (baseDisplay === '' || baseDisplay === 'd-sm-flex' || baseDisplay === 'd-sm-inline-flex') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardBody, {
        size: "small",
        style: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
        wrap: true
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "Row block default display attribute is 'flex'"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_flexControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
        breakpoint: "sm-",
        breakpoint_name: "SM",
        flexDirection: smFlexDirection,
        justifyContent: smJustifyContent,
        alignItems: smAlignItems,
        alignSelf: smAlignSelf,
        fillGrowShrink: smFillGrowShrink,
        wrap: smWrap,
        order: smOrder,
        alignContent: smAlignContent,
        setFlexDirection: smFlexDirection => setAttributes({
          smFlexDirection
        }),
        setJustifyContent: smJustifyContent => setAttributes({
          smJustifyContent
        }),
        setAlignItems: smAlignItems => setAttributes({
          smAlignItems
        }),
        setAlignSelf: smAlignSelf => setAttributes({
          smAlignSelf
        }),
        setFillGrowShrink: smFillGrowShrink => setAttributes({
          smFillGrowShrink
        }),
        setWrap: smWrap => setAttributes({
          smWrap
        }),
        setOrder: smOrder => setAttributes({
          smOrder
        }),
        setAlignContent: smAlignContent => setAttributes({
          smAlignContent
        })
      })), smDisplay !== 'd-sm-none' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_paddingControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
        breakpoint: "sm-",
        breakpoint_name: "SM",
        paddingTop: smPaddingTop,
        paddingRight: smPaddingRight,
        paddingBottom: smPaddingBottom,
        paddingLeft: smPaddingLeft,
        setPaddingTop: smPaddingTop => setAttributes({
          smPaddingTop
        }),
        setPaddingRight: smPaddingRight => setAttributes({
          smPaddingRight
        }),
        setPaddingBottom: smPaddingBottom => setAttributes({
          smPaddingBottom
        }),
        setPaddingLeft: smPaddingLeft => setAttributes({
          smPaddingLeft
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_marginControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
        breakpoint: "sm-",
        breakpoint_name: "SM",
        marginTop: smMarginTop,
        marginRight: smMarginRight,
        marginBottom: smMarginBottom,
        marginLeft: smMarginLeft,
        setMarginTop: smMarginTop => setAttributes({
          smMarginTop
        }),
        setMarginRight: smMarginRight => setAttributes({
          smMarginRight
        }),
        setMarginBottom: smMarginBottom => setAttributes({
          smMarginBottom
        }),
        setMarginLeft: smMarginLeft => setAttributes({
          smMarginLeft
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_alignControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
        breakpoint: "sm-",
        breakpoint_name: "SM",
        alignText: smAlignText,
        flexDirection: smFlexDirection,
        alignItems: smAlignItems,
        alignSelf: smAlignSelf,
        justifyContent: smJustifyContent,
        setAlignText: smAlignText => setAttributes({
          smAlignText
        }),
        setAlignItems: smAlignItems => setAttributes({
          smAlignItems
        }),
        setAlignSelf: smAlignSelf => setAttributes({
          smAlignSelf
        }),
        setJustifyContent: smJustifyContent => setAttributes({
          smJustifyContent
        })
      })))
    }, {
      name: 'medium',
      title: 'MD',
      className: 'breakpoint-tab',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Card, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_displayControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
        breakpoint: "md-",
        breakpoint_name: "MD",
        display: mdDisplay,
        setDisplay: mdDisplay => setAttributes({
          mdDisplay
        })
      }), (baseDisplay === '' || baseDisplay === 'd-md-flex' || baseDisplay === 'd-md-inline-flex') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardBody, {
        size: "small",
        style: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
        wrap: true
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "Row block default display attribute is 'flex'"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_flexControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
        breakpoint: "md-",
        breakpoint_name: "MD",
        flexDirection: mdFlexDirection,
        justifyContent: mdJustifyContent,
        alignItems: mdAlignItems,
        alignSelf: mdAlignSelf,
        fillGrowShrink: mdFillGrowShrink,
        wrap: mdWrap,
        order: mdOrder,
        alignContent: mdAlignContent,
        setFlexDirection: mdFlexDirection => setAttributes({
          mdFlexDirection
        }),
        setJustifyContent: mdJustifyContent => setAttributes({
          mdJustifyContent
        }),
        setAlignItems: mdAlignItems => setAttributes({
          mdAlignItems
        }),
        setAlignSelf: mdAlignSelf => setAttributes({
          mdAlignSelf
        }),
        setFillGrowShrink: mdFillGrowShrink => setAttributes({
          mdFillGrowShrink
        }),
        setWrap: mdWrap => setAttributes({
          mdWrap
        }),
        setOrder: mdOrder => setAttributes({
          mdOrder
        }),
        setAlignContent: mdAlignContent => setAttributes({
          mdAlignContent
        })
      })), mdDisplay !== 'd-md-none' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_paddingControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
        breakpoint: "md-",
        breakpoint_name: "MD",
        paddingTop: mdPaddingTop,
        paddingRight: mdPaddingRight,
        paddingBottom: mdPaddingBottom,
        paddingLeft: mdPaddingLeft,
        setPaddingTop: mdPaddingTop => setAttributes({
          mdPaddingTop
        }),
        setPaddingRight: mdPaddingRight => setAttributes({
          mdPaddingRight
        }),
        setPaddingBottom: mdPaddingBottom => setAttributes({
          mdPaddingBottom
        }),
        setPaddingLeft: mdPaddingLeft => setAttributes({
          mdPaddingLeft
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_marginControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
        breakpoint: "md-",
        breakpoint_name: "MD",
        marginTop: mdMarginTop,
        marginRight: mdMarginRight,
        marginBottom: mdMarginBottom,
        marginLeft: mdMarginLeft,
        setMarginTop: mdMarginTop => setAttributes({
          mdMarginTop
        }),
        setMarginRight: mdMarginRight => setAttributes({
          mdMarginRight
        }),
        setMarginBottom: mdMarginBottom => setAttributes({
          mdMarginBottom
        }),
        setMarginLeft: mdMarginLeft => setAttributes({
          mdMarginLeft
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_alignControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
        breakpoint: "md-",
        breakpoint_name: "MD",
        alignText: mdAlignText,
        flexDirection: mdFlexDirection,
        alignItems: mdAlignItems,
        alignSelf: mdAlignSelf,
        justifyContent: mdJustifyContent,
        setAlignText: mdAlignText => setAttributes({
          mdAlignText
        }),
        setAlignItems: mdAlignItems => setAttributes({
          mdAlignItems
        }),
        setAlignSelf: mdAlignSelf => setAttributes({
          mdAlignSelf
        }),
        setJustifyContent: mdJustifyContent => setAttributes({
          mdJustifyContent
        })
      })))
    }, {
      name: 'large',
      title: 'LG',
      className: 'breakpoint-tab',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Card, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_displayControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
        breakpoint: "lg-",
        breakpoint_name: "LG",
        display: lgDisplay,
        setDisplay: lgDisplay => setAttributes({
          lgDisplay
        })
      }), (baseDisplay === '' || baseDisplay === 'd-lg-flex' || baseDisplay === 'd-lg-inline-flex') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardBody, {
        size: "small",
        style: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
        wrap: true
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "Row block default display attribute is 'flex'"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_flexControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
        breakpoint: "lg-",
        breakpoint_name: "LG",
        flexDirection: lgFlexDirection,
        justifyContent: lgJustifyContent,
        alignItems: lgAlignItems,
        alignSelf: lgAlignSelf,
        fillGrowShrink: lgFillGrowShrink,
        wrap: lgWrap,
        order: lgOrder,
        alignContent: lgAlignContent,
        setFlexDirection: lgFlexDirection => setAttributes({
          lgFlexDirection
        }),
        setJustifyContent: lgJustifyContent => setAttributes({
          lgJustifyContent
        }),
        setAlignItems: lgAlignItems => setAttributes({
          lgAlignItems
        }),
        setAlignSelf: lgAlignSelf => setAttributes({
          lgAlignSelf
        }),
        setFillGrowShrink: lgFillGrowShrink => setAttributes({
          lgFillGrowShrink
        }),
        setWrap: lgWrap => setAttributes({
          lgWrap
        }),
        setOrder: lgOrder => setAttributes({
          lgOrder
        }),
        setAlignContent: lgAlignContent => setAttributes({
          lgAlignContent
        })
      })), lgDisplay !== 'd-lg-none' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_paddingControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
        breakpoint: "lg-",
        breakpoint_name: "LG",
        paddingTop: lgPaddingTop,
        paddingRight: lgPaddingRight,
        paddingBottom: lgPaddingBottom,
        paddingLeft: lgPaddingLeft,
        setPaddingTop: lgPaddingTop => setAttributes({
          lgPaddingTop
        }),
        setPaddingRight: lgPaddingRight => setAttributes({
          lgPaddingRight
        }),
        setPaddingBottom: lgPaddingBottom => setAttributes({
          lgPaddingBottom
        }),
        setPaddingLeft: lgPaddingLeft => setAttributes({
          lgPaddingLeft
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_marginControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
        breakpoint: "lg-",
        breakpoint_name: "LG",
        marginTop: lgMarginTop,
        marginRight: lgMarginRight,
        marginBottom: lgMarginBottom,
        marginLeft: lgMarginLeft,
        setMarginTop: lgMarginTop => setAttributes({
          lgMarginTop
        }),
        setMarginRight: lgMarginRight => setAttributes({
          lgMarginRight
        }),
        setMarginBottom: lgMarginBottom => setAttributes({
          lgMarginBottom
        }),
        setMarginLeft: lgMarginLeft => setAttributes({
          lgMarginLeft
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_alignControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
        breakpoint: "lg-",
        breakpoint_name: "LG",
        alignText: lgAlignText,
        flexDirection: lgFlexDirection,
        alignItems: lgAlignItems,
        alignSelf: lgAlignSelf,
        justifyContent: lgJustifyContent,
        setAlignText: lgAlignText => setAttributes({
          lgAlignText
        }),
        setAlignItems: lgAlignItems => setAttributes({
          lgAlignItems
        }),
        setAlignSelf: lgAlignSelf => setAttributes({
          lgAlignSelf
        }),
        setJustifyContent: lgJustifyContent => setAttributes({
          lgJustifyContent
        })
      })))
    }, {
      name: 'extra-large',
      title: 'XL',
      className: 'breakpoint-tab',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Card, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_displayControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
        breakpoint: "xl-",
        breakpoint_name: "XL",
        display: xlDisplay,
        setDisplay: xlDisplay => setAttributes({
          xlDisplay
        })
      }), (baseDisplay === '' || baseDisplay === 'd-xl-flex' || baseDisplay === 'd-xl-inline-flex') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardBody, {
        size: "small",
        style: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
        wrap: true
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "Row block default display attribute is 'flex'"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_flexControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
        breakpoint: "xl-",
        breakpoint_name: "XL",
        flexDirection: xlFlexDirection,
        justifyContent: xlJustifyContent,
        alignItems: xlAlignItems,
        alignSelf: xlAlignSelf,
        fillGrowShrink: xlFillGrowShrink,
        wrap: xlWrap,
        order: xlOrder,
        alignContent: xlAlignContent,
        setFlexDirection: xlFlexDirection => setAttributes({
          xlFlexDirection
        }),
        setJustifyContent: xlJustifyContent => setAttributes({
          xlJustifyContent
        }),
        setAlignItems: xlAlignItems => setAttributes({
          xlAlignItems
        }),
        setAlignSelf: xlAlignSelf => setAttributes({
          xlAlignSelf
        }),
        setFillGrowShrink: xlFillGrowShrink => setAttributes({
          xlFillGrowShrink
        }),
        setWrap: xlWrap => setAttributes({
          xlWrap
        }),
        setOrder: xlOrder => setAttributes({
          xlOrder
        }),
        setAlignContent: xlAlignContent => setAttributes({
          xlAlignContent
        })
      })), xlDisplay !== 'd-xl-none' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_paddingControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
        breakpoint: "xl-",
        breakpoint_name: "XL",
        paddingTop: xlPaddingTop,
        paddingRight: xlPaddingRight,
        paddingBottom: xlPaddingBottom,
        paddingLeft: xlPaddingLeft,
        setPaddingTop: xlPaddingTop => setAttributes({
          xlPaddingTop
        }),
        setPaddingRight: xlPaddingRight => setAttributes({
          xlPaddingRight
        }),
        setPaddingBottom: xlPaddingBottom => setAttributes({
          xlPaddingBottom
        }),
        setPaddingLeft: xlPaddingLeft => setAttributes({
          xlPaddingLeft
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_marginControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
        breakpoint: "xl-",
        breakpoint_name: "XL",
        marginTop: xlMarginTop,
        marginRight: xlMarginRight,
        marginBottom: xlMarginBottom,
        marginLeft: xlMarginLeft,
        setMarginTop: xlMarginTop => setAttributes({
          xlMarginTop
        }),
        setMarginRight: xlMarginRight => setAttributes({
          xlMarginRight
        }),
        setMarginBottom: xlMarginBottom => setAttributes({
          xlMarginBottom
        }),
        setMarginLeft: xlMarginLeft => setAttributes({
          xlMarginLeft
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_alignControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
        breakpoint: "xl-",
        breakpoint_name: "XL",
        alignText: xlAlignText,
        flexDirection: xlFlexDirection,
        alignItems: xlAlignItems,
        alignSelf: xlAlignSelf,
        justifyContent: xlJustifyContent,
        setAlignText: xlAlignText => setAttributes({
          xlAlignText
        }),
        setAlignItems: xlAlignItems => setAttributes({
          xlAlignItems
        }),
        setAlignSelf: xlAlignSelf => setAttributes({
          xlAlignSelf
        }),
        setJustifyContent: xlJustifyContent => setAttributes({
          xlJustifyContent
        })
      })))
    }, {
      name: 'extra-extra-large',
      title: 'XXL',
      className: 'breakpoint-tab',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Card, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_displayControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
        breakpoint: "xxl-",
        breakpoint_name: "XXL",
        display: xxlDisplay,
        setDisplay: xxlDisplay => setAttributes({
          xxlDisplay
        })
      }), (baseDisplay === '' || baseDisplay === 'd-xxl-flex' || baseDisplay === 'd-xxl-inline-flex') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardBody, {
        size: "small",
        style: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
        wrap: true
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "Row block default display attribute is 'flex'"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_flexControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
        breakpoint: "xxl-",
        breakpoint_name: "XXL",
        flexDirection: xxlFlexDirection,
        justifyContent: xxlJustifyContent,
        alignItems: xxlAlignItems,
        alignSelf: xxlAlignSelf,
        fillGrowShrink: xxlFillGrowShrink,
        wrap: xxlWrap,
        order: xxlOrder,
        alignContent: xxlAlignContent,
        setFlexDirection: xxlFlexDirection => setAttributes({
          xxlFlexDirection
        }),
        setJustifyContent: xxlJustifyContent => setAttributes({
          xxlJustifyContent
        }),
        setAlignItems: xxlAlignItems => setAttributes({
          xxlAlignItems
        }),
        setAlignSelf: xxlAlignSelf => setAttributes({
          xxlAlignSelf
        }),
        setFillGrowShrink: xxlFillGrowShrink => setAttributes({
          xxlFillGrowShrink
        }),
        setWrap: xxlWrap => setAttributes({
          xxlWrap
        }),
        setOrder: xxlOrder => setAttributes({
          xxlOrder
        }),
        setAlignContent: xxlAlignContent => setAttributes({
          xxlAlignContent
        })
      })), xxlDisplay !== 'd-xxl-none' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_paddingControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
        breakpoint: "xxl-",
        breakpoint_name: "XXL",
        paddingTop: xxlPaddingTop,
        paddingRight: xxlPaddingRight,
        paddingBottom: xxlPaddingBottom,
        paddingLeft: xxlPaddingLeft,
        setPaddingTop: xxlPaddingTop => setAttributes({
          xxlPaddingTop
        }),
        setPaddingRight: xxlPaddingRight => setAttributes({
          xxlPaddingRight
        }),
        setPaddingBottom: xxlPaddingBottom => setAttributes({
          xxlPaddingBottom
        }),
        setPaddingLeft: xxlPaddingLeft => setAttributes({
          xxlPaddingLeft
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_marginControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
        breakpoint: "xxl-",
        breakpoint_name: "XXL",
        marginTop: xxlMarginTop,
        marginRight: xxlMarginRight,
        marginBottom: xxlMarginBottom,
        marginLeft: xxlMarginLeft,
        setMarginTop: xxlMarginTop => setAttributes({
          xxlMarginTop
        }),
        setMarginRight: xxlMarginRight => setAttributes({
          xxlMarginRight
        }),
        setMarginBottom: xxlMarginBottom => setAttributes({
          xxlMarginBottom
        }),
        setMarginLeft: xxlMarginLeft => setAttributes({
          xxlMarginLeft
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_alignControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
        breakpoint: "xxl-",
        breakpoint_name: "XXL",
        alignText: xxlAlignText,
        flexDirection: xxlFlexDirection,
        alignItems: xxlAlignItems,
        alignSelf: xxlAlignSelf,
        justifyContent: xxlJustifyContent,
        setAlignText: xxlAlignText => setAttributes({
          xxlAlignText
        }),
        setAlignItems: xxlAlignItems => setAttributes({
          xxlAlignItems
        }),
        setAlignSelf: xxlAlignSelf => setAttributes({
          xxlAlignSelf
        }),
        setJustifyContent: xxlJustifyContent => setAttributes({
          xxlJustifyContent
        })
      })))
    }]
  }, _ref2 => {
    let {
      content,
      className
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, content);
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Insert Columns', 'resource-layout-blocks')
  })));
}

/***/ }),

/***/ "./includes/block-editor/blocks/row/icon.js":
/*!**************************************************!*\
  !*** ./includes/block-editor/blocks/row/icon.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m23.1 16.6h-.3v-9.2h.3c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-22.2c-.5 0-.9.4-.9.9s.4.9.9.9h.3v9.2h-.3c-.5 0-.9.4-.9.9s.4.9.9.9h22.2c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm-2.1 0h-18v-9.2h18zm-16.4-4.6c0 .5.4.9.9.9h13c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-13c-.5 0-.9.4-.9.9z"
}));

/***/ }),

/***/ "./includes/block-editor/blocks/row/index.js":
/*!***************************************************!*\
  !*** ./includes/block-editor/blocks/row/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./includes/block-editor/blocks/row/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./includes/block-editor/blocks/row/block.json");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./includes/block-editor/blocks/row/icon.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./includes/block-editor/blocks/row/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./includes/block-editor/blocks/row/save.js");
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
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./includes/block-editor/blocks/row/save.js":
/*!**************************************************!*\
  !*** ./includes/block-editor/blocks/row/save.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */


/**
 * External dependencies
 */



/**
 * The Block save function
 *
 * @returns {JSX.Element}
 * @constructor
 */
function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    tagName: TagName = 'div'
  } = attributes;
  const classNameAttributes = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.omit)(attributes, ['anchor', 'tagName', 'className']);
  const className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('row', Object.values(classNameAttributes));
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save(blockProps);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, innerBlocksProps);
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

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

/***/ "./includes/block-editor/blocks/row/editor.scss":
/*!******************************************************!*\
  !*** ./includes/block-editor/blocks/row/editor.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./includes/block-editor/blocks/row/style.scss":
/*!*****************************************************!*\
  !*** ./includes/block-editor/blocks/row/style.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./includes/block-editor/blocks/row/block.json":
/*!*****************************************************!*\
  !*** ./includes/block-editor/blocks/row/block.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"resource-layout-blocks/row","title":"Row","category":"resource-layout-blocks","description":"A Row used to contain Column blocks. By default, Rows get negative margin on both sides; half of the gutter value - usually -12px. The number of Columns is set by manually adding Column blocks and adjusting the CSS classes.","keywords":["row"],"version":"1.0.0","textdomain":"resource","attributes":{"anchor":{"type":"string"},"tagName":{"type":"string","default":"div"},"baseDisplay":{"type":"string"},"basePaddingTop":{"type":"string"},"basePaddingRight":{"type":"string"},"basePaddingBottom":{"type":"string"},"basePaddingLeft":{"type":"string"},"baseMarginTop":{"type":"string"},"baseMarginRight":{"type":"string"},"baseMarginBottom":{"type":"string"},"baseMarginLeft":{"type":"string"},"baseAlignText":{"type":"string"},"baseFlexDirection":{"type":"string"},"baseFillGrowShrink":{"type":"string"},"baseWrap":{"type":"string"},"baseOrder":{"type":"string"},"baseAlignContent":{"type":"string"},"baseAlignItems":{"type":"string"},"baseAlignSelf":{"type":"string"},"baseJustifyContent":{"type":"string"},"smDisplay":{"type":"string"},"smPaddingTop":{"type":"string"},"smPaddingRight":{"type":"string"},"smPaddingBottom":{"type":"string"},"smPaddingLeft":{"type":"string"},"smMarginTop":{"type":"string"},"smMarginRight":{"type":"string"},"smMarginBottom":{"type":"string"},"smMarginLeft":{"type":"string"},"smAlignText":{"type":"string"},"smFlexDirection":{"type":"string"},"smFillGrowShrink":{"type":"string"},"smWrap":{"type":"string"},"smOrder":{"type":"string"},"smAlignContent":{"type":"string"},"smAlignItems":{"type":"string"},"smAlignSelf":{"type":"string"},"smJustifyContent":{"type":"string"},"mdDisplay":{"type":"string"},"mdPaddingTop":{"type":"string"},"mdPaddingRight":{"type":"string"},"mdPaddingBottom":{"type":"string"},"mdPaddingLeft":{"type":"string"},"mdMarginTop":{"type":"string"},"mdMarginRight":{"type":"string"},"mdMarginBottom":{"type":"string"},"mdMarginLeft":{"type":"string"},"mdAlignText":{"type":"string"},"mdFlexDirection":{"type":"string"},"mdFillGrowShrink":{"type":"string"},"mdWrap":{"type":"string"},"mdOrder":{"type":"string"},"mdAlignContent":{"type":"string"},"mdAlignItems":{"type":"string"},"mdAlignSelf":{"type":"string"},"mdJustifyContent":{"type":"string"},"lgDisplay":{"type":"string"},"lgPaddingTop":{"type":"string"},"lgPaddingRight":{"type":"string"},"lgPaddingBottom":{"type":"string"},"lgPaddingLeft":{"type":"string"},"lgMarginTop":{"type":"string"},"lgMarginRight":{"type":"string"},"lgMarginBottom":{"type":"string"},"lgMarginLeft":{"type":"string"},"lgAlignText":{"type":"string"},"lgFlexDirection":{"type":"string"},"lgFillGrowShrink":{"type":"string"},"lgWrap":{"type":"string"},"lgOrder":{"type":"string"},"lgAlignContent":{"type":"string"},"lgAlignItems":{"type":"string"},"lgAlignSelf":{"type":"string"},"lgJustifyContent":{"type":"string"},"xlDisplay":{"type":"string"},"xlPaddingTop":{"type":"string"},"xlPaddingRight":{"type":"string"},"xlPaddingBottom":{"type":"string"},"xlPaddingLeft":{"type":"string"},"xlMarginTop":{"type":"string"},"xlMarginRight":{"type":"string"},"xlMarginBottom":{"type":"string"},"xlMarginLeft":{"type":"string"},"xlAlignText":{"type":"string"},"xlFlexDirection":{"type":"string"},"xlFillGrowShrink":{"type":"string"},"xlWrap":{"type":"string"},"xlOrder":{"type":"string"},"xlAlignContent":{"type":"string"},"xlAlignItems":{"type":"string"},"xlAlignSelf":{"type":"string"},"xlJustifyContent":{"type":"string"},"xxlDisplay":{"type":"string"},"xxlPaddingTop":{"type":"string"},"xxlPaddingRight":{"type":"string"},"xxlPaddingBottom":{"type":"string"},"xxlPaddingLeft":{"type":"string"},"xxlMarginTop":{"type":"string"},"xxlMarginRight":{"type":"string"},"xxlMarginBottom":{"type":"string"},"xxlMarginLeft":{"type":"string"},"xxlAlignText":{"type":"string"},"xxlFlexDirection":{"type":"string"},"xxlFillGrowShrink":{"type":"string"},"xxlWrap":{"type":"string"},"xxlOrder":{"type":"string"},"xxlAlignContent":{"type":"string"},"xxlAlignItems":{"type":"string"},"xxlAlignSelf":{"type":"string"},"xxlJustifyContent":{"type":"string"}},"supports":{"anchor":true,"align":false,"alignWide":false,"ariaLabel":true,"className":true,"color":{"background":true,"gradients":false,"link":false,"text":false},"customClassName":true,"defaultStylePicker":true,"dimensions":{"minHeight":false},"filter":{"duotone":false},"html":false,"inserter":true,"multiple":true,"reusable":true,"lock":true,"position":{"sticky":false},"spacing":{"margin":false,"padding":false,"blockGap":false},"typography":{"fontSize":false,"lineHeight":false}},"editorScript":"file:../../../../build/row.js","editorStyle":"file:../../../../build/row.css","style":"file:../../../../build/style-row.css"}');

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
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"row": 0,
/******/ 			"./style-row": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkresource_layout_blocks"] = globalThis["webpackChunkresource_layout_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-row"], () => (__webpack_require__("./includes/block-editor/blocks/row/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=row.js.map