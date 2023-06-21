(()=>{var e,t={167:(e,t,l)=>{"use strict";const n=window.wp.blocks,a=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"resource-layout-blocks/container","title":"Container","category":"resource-layout-blocks","description":"A Container/Wrapper; fluid or fixed width. By default, Containers get padding on both sides; half of the gutter value - usually 12px.","keywords":["container","wrapper"],"version":"1.0.0","textdomain":"resource","attributes":{"anchor":{"type":"string"},"isFluid":{"type":"boolean","default":true},"tagName":{"type":"string","default":"div"},"inlineStyles":{"type":"string"},"baseDisplay":{"type":"string"},"basePaddingTop":{"type":"string"},"basePaddingRight":{"type":"string"},"basePaddingBottom":{"type":"string"},"basePaddingLeft":{"type":"string"},"baseMarginTop":{"type":"string"},"baseMarginRight":{"type":"string"},"baseMarginBottom":{"type":"string"},"baseMarginLeft":{"type":"string"},"baseAlignText":{"type":"string"},"baseFlexDirection":{"type":"string"},"baseFillGrowShrink":{"type":"string"},"baseWrap":{"type":"string"},"baseOrder":{"type":"string"},"baseAlignContent":{"type":"string"},"baseAlignItems":{"type":"string"},"baseAlignSelf":{"type":"string"},"baseJustifyContent":{"type":"string"},"smDisplay":{"type":"string"},"smPaddingTop":{"type":"string"},"smPaddingRight":{"type":"string"},"smPaddingBottom":{"type":"string"},"smPaddingLeft":{"type":"string"},"smMarginTop":{"type":"string"},"smMarginRight":{"type":"string"},"smMarginBottom":{"type":"string"},"smMarginLeft":{"type":"string"},"smAlignText":{"type":"string"},"smFlexDirection":{"type":"string"},"smFillGrowShrink":{"type":"string"},"smWrap":{"type":"string"},"smOrder":{"type":"string"},"smAlignContent":{"type":"string"},"smAlignItems":{"type":"string"},"smAlignSelf":{"type":"string"},"smJustifyContent":{"type":"string"},"mdDisplay":{"type":"string"},"mdPaddingTop":{"type":"string"},"mdPaddingRight":{"type":"string"},"mdPaddingBottom":{"type":"string"},"mdPaddingLeft":{"type":"string"},"mdMarginTop":{"type":"string"},"mdMarginRight":{"type":"string"},"mdMarginBottom":{"type":"string"},"mdMarginLeft":{"type":"string"},"mdAlignText":{"type":"string"},"mdFlexDirection":{"type":"string"},"mdFillGrowShrink":{"type":"string"},"mdWrap":{"type":"string"},"mdOrder":{"type":"string"},"mdAlignContent":{"type":"string"},"mdAlignItems":{"type":"string"},"mdAlignSelf":{"type":"string"},"mdJustifyContent":{"type":"string"},"lgDisplay":{"type":"string"},"lgPaddingTop":{"type":"string"},"lgPaddingRight":{"type":"string"},"lgPaddingBottom":{"type":"string"},"lgPaddingLeft":{"type":"string"},"lgMarginTop":{"type":"string"},"lgMarginRight":{"type":"string"},"lgMarginBottom":{"type":"string"},"lgMarginLeft":{"type":"string"},"lgAlignText":{"type":"string"},"lgFlexDirection":{"type":"string"},"lgFillGrowShrink":{"type":"string"},"lgWrap":{"type":"string"},"lgOrder":{"type":"string"},"lgAlignContent":{"type":"string"},"lgAlignItems":{"type":"string"},"lgAlignSelf":{"type":"string"},"lgJustifyContent":{"type":"string"},"xlDisplay":{"type":"string"},"xlPaddingTop":{"type":"string"},"xlPaddingRight":{"type":"string"},"xlPaddingBottom":{"type":"string"},"xlPaddingLeft":{"type":"string"},"xlMarginTop":{"type":"string"},"xlMarginRight":{"type":"string"},"xlMarginBottom":{"type":"string"},"xlMarginLeft":{"type":"string"},"xlAlignText":{"type":"string"},"xlFlexDirection":{"type":"string"},"xlFillGrowShrink":{"type":"string"},"xlWrap":{"type":"string"},"xlOrder":{"type":"string"},"xlAlignContent":{"type":"string"},"xlAlignItems":{"type":"string"},"xlAlignSelf":{"type":"string"},"xlJustifyContent":{"type":"string"},"xxlDisplay":{"type":"string"},"xxlPaddingTop":{"type":"string"},"xxlPaddingRight":{"type":"string"},"xxlPaddingBottom":{"type":"string"},"xxlPaddingLeft":{"type":"string"},"xxlMarginTop":{"type":"string"},"xxlMarginRight":{"type":"string"},"xxlMarginBottom":{"type":"string"},"xxlMarginLeft":{"type":"string"},"xxlAlignText":{"type":"string"},"xxlFlexDirection":{"type":"string"},"xxlFillGrowShrink":{"type":"string"},"xxlWrap":{"type":"string"},"xxlOrder":{"type":"string"},"xxlAlignContent":{"type":"string"},"xxlAlignItems":{"type":"string"},"xxlAlignSelf":{"type":"string"},"xxlJustifyContent":{"type":"string"}},"supports":{"anchor":true,"align":false,"alignWide":false,"ariaLabel":true,"className":true,"color":{"background":true,"gradients":false,"link":false,"text":false},"customClassName":true,"defaultStylePicker":true,"dimensions":{"minHeight":false},"filter":{"duotone":false},"html":false,"inserter":true,"multiple":true,"reusable":true,"lock":true,"position":{"sticky":false},"spacing":{"margin":false,"padding":false,"blockGap":false},"typography":{"fontSize":false,"lineHeight":false}},"editorScript":"file:../../../../build/container.js","editorStyle":"file:../../../../build/container.css","style":"file:../../../../build/style-container.css"}'),r=window.wp.element,i=(0,r.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{d:"m23.1 18.6h-.3v-13.2h.3c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-22.2c-.5 0-.9.4-.9.9s.4.9.9.9h.3v13.2h-.3c-.5 0-.9.4-.9.9s.4.9.9.9h22.2c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm-2.1 0h-18v-13.2h18z"}),(0,r.createElement)("g",{fill:"#ccc"},(0,r.createElement)("path",{d:"m7.2 17.4c.5 0 .9-.4.9-.9v-9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v9c0 .5.4.9.9.9z"}),(0,r.createElement)("path",{d:"m12 17.4c.5 0 .9-.4.9-.9v-9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v9c0 .5.4.9.9.9z"}),(0,r.createElement)("path",{d:"m16.8 17.4c.5 0 .9-.4.9-.9v-9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v9c0 .5.4.9.9.9z"}))),s=window.wp.i18n,o=window.wp.blockEditor,g=window.wp.components;var m=l(184),d=l.n(m);const c=window.lodash,u={header:(0,s.__)("The <header> element should represent introductory content, typically a group of introductory or navigational aids."),main:(0,s.__)("The <main> element should be used for the primary content of your document only. "),section:(0,s.__)("The <section> element should represent a standalone portion of the document that can't be better represented by another element."),article:(0,s.__)("The <article> element should represent a self contained, syndicatable portion of the document."),aside:(0,s.__)("The <aside> element should represent a portion of a document whose content is only indirectly related to the document's main content."),footer:(0,s.__)("The <footer> element should represent a footer for its nearest sectioning element (e.g.: <section>, <article>, <main> etc.).")};function p({breakpoint:e,breakpoint_name:t,display:l,setDisplay:n}){return(0,r.createElement)("div",null,(0,r.createElement)(g.CardHeader,{isBorderless:!0,isShady:!0,size:"small",className:"resource-card-header"},(0,s.__)(`${t} DISPLAY`,"resource")),(0,r.createElement)(g.CardBody,{size:"small"},(0,r.createElement)(g.Flex,{wrap:!0},(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:(0,s.__)("Display","resource"),value:l,options:[{value:"",label:(0,s.__)("Default","resource")},{value:`d-${e}none`,label:(0,s.__)("None","resource")},{value:`d-${e}inline`,label:(0,s.__)("Inline","resource")},{value:`d-${e}inline-block`,label:(0,s.__)("Inline-Block","resource")},{value:`d-${e}block`,label:(0,s.__)("Block","resource")},{value:`d-${e}grid`,label:(0,s.__)("Grid","resource")},{value:`d-${e}inline-grid`,label:(0,s.__)("Inline Grid","resource")},{value:`d-${e}table`,label:(0,s.__)("Table","resource")},{value:`d-${e}table-cell`,label:(0,s.__)("Table Cell","resource")},{value:`d-${e}table-row`,label:(0,s.__)("Table Row","resource")},{value:`d-${e}flex`,label:(0,s.__)("Flex","resource")},{value:`d-${e}inline-flex`,label:(0,s.__)("Inline Flex","resource")}],onChange:n})))))}const b=(0,r.createElement)("svg",{height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{d:"m3 0h10v1.9h-10z"}),(0,r.createElement)("g",{fill:"#bbb"},(0,r.createElement)("path",{d:"m3 14.1h10v1.9h-10z"}),(0,r.createElement)("path",{d:"m10 7h10v1.9h-10z",transform:"matrix(0 1 -1 0 23.0293 -7.0293)"}),(0,r.createElement)("path",{d:"m-4.1 7h10v1.9h-10z",transform:"matrix(0 1 -1 0 8.9707 7.0293)"}))),x=(0,r.createElement)("svg",{height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{d:"m3 0h10v1.9h-10z",fill:"#bbb"}),(0,r.createElement)("path",{d:"m3 14.1h10v1.9h-10z",fill:"#bbb"}),(0,r.createElement)("path",{d:"m10 7h10v1.9h-10z",transform:"matrix(0 1 -1 0 23.0293 -7.0293)"}),(0,r.createElement)("path",{d:"m-4.1 7h10v1.9h-10z",fill:"#bbb",transform:"matrix(0 1 -1 0 8.9707 7.0293)"})),_=(0,r.createElement)("svg",{height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{d:"m3 0h10v1.9h-10z",fill:"#bbb"}),(0,r.createElement)("path",{d:"m3 14.1h10v1.9h-10z"}),(0,r.createElement)("g",{fill:"#bbb"},(0,r.createElement)("path",{d:"m10 7h10v1.9h-10z",transform:"matrix(0 1 -1 0 23.0293 -7.0293)"}),(0,r.createElement)("path",{d:"m-4.1 7h10v1.9h-10z",transform:"matrix(0 1 -1 0 8.9707 7.0293)"}))),f=(0,r.createElement)("svg",{height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("g",{fill:"#bbb"},(0,r.createElement)("path",{d:"m3 0h10v1.9h-10z"}),(0,r.createElement)("path",{d:"m3 14.1h10v1.9h-10z"}),(0,r.createElement)("path",{d:"m10 7h10v1.9h-10z",transform:"matrix(0 1 -1 0 23.0293 -7.0293)"})),(0,r.createElement)("path",{d:"m-4.1 7h10v1.9h-10z",transform:"matrix(0 1 -1 0 8.9707 7.0293)"}));function h({breakpoint:e,breakpoint_name:t,paddingTop:l,paddingRight:n,paddingBottom:a,paddingLeft:i,setPaddingTop:o,setPaddingRight:m,setPaddingBottom:d,setPaddingLeft:c}){return(0,r.createElement)("div",null,(0,r.createElement)(g.CardHeader,{isBorderless:!0,isShady:!0,size:"small",className:"resource-card-header"},(0,s.__)(`${t} PADDING`,"resource")),(0,r.createElement)(g.CardBody,{size:"small"},(0,r.createElement)(g.Flex,{wrap:!0},(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:b,value:l,style:{maxWidth:"42.5px"},options:[{value:"",label:(0,s.__)("-","resource")},{value:`pt-${e}0`,label:(0,s.__)("0","resource")},{value:`pt-${e}1`,label:(0,s.__)("1","resource")},{value:`pt-${e}2`,label:(0,s.__)("2","resource")},{value:`pt-${e}3`,label:(0,s.__)("3","resource")},{value:`pt-${e}4`,label:(0,s.__)("4","resource")},{value:`pt-${e}5`,label:(0,s.__)("5","resource")}],onChange:o})),(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:x,value:n,style:{maxWidth:"42.5px"},options:[{value:"",label:(0,s.__)("-","resource")},{value:`pe-${e}0`,label:(0,s.__)("0","resource")},{value:`pe-${e}1`,label:(0,s.__)("1","resource")},{value:`pe-${e}2`,label:(0,s.__)("2","resource")},{value:`pe-${e}3`,label:(0,s.__)("3","resource")},{value:`pe-${e}4`,label:(0,s.__)("4","resource")},{value:`pe-${e}5`,label:(0,s.__)("5","resource")}],onChange:m})),(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:_,value:a,style:{maxWidth:"42.5px"},options:[{value:"",label:(0,s.__)("-","resource")},{value:`pb-${e}0`,label:(0,s.__)("0","resource")},{value:`pb-${e}1`,label:(0,s.__)("1","resource")},{value:`pb-${e}2`,label:(0,s.__)("2","resource")},{value:`pb-${e}3`,label:(0,s.__)("3","resource")},{value:`pb-${e}4`,label:(0,s.__)("4","resource")},{value:`pb-${e}5`,label:(0,s.__)("5","resource")}],onChange:d})),(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:f,value:i,style:{maxWidth:"42.5px"},options:[{value:"",label:(0,s.__)("-","resource")},{value:`ps-${e}0`,label:(0,s.__)("0","resource")},{value:`ps-${e}1`,label:(0,s.__)("1","resource")},{value:`ps-${e}2`,label:(0,s.__)("2","resource")},{value:`ps-${e}3`,label:(0,s.__)("3","resource")},{value:`ps-${e}4`,label:(0,s.__)("4","resource")},{value:`ps-${e}5`,label:(0,s.__)("5","resource")}],onChange:c})))))}function y({breakpoint:e,breakpoint_name:t,marginTop:l,marginRight:n,marginBottom:a,marginLeft:i,setMarginTop:o,setMarginRight:m,setMarginBottom:d,setMarginLeft:c}){return(0,r.createElement)("div",null,(0,r.createElement)(g.CardHeader,{isBorderless:!0,isShady:!0,size:"small",className:"resource-card-header"},(0,s.__)(`${t} MARGIN`,"resource")),(0,r.createElement)(g.CardBody,{size:"small"},(0,r.createElement)(g.Flex,{wrap:!0},(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:b,value:l,style:{maxWidth:"42.5px"},options:[{value:"",label:(0,s.__)("-","resource")},{value:`mt-${e}0`,label:(0,s.__)("0","resource")},{value:`mt-${e}1`,label:(0,s.__)("1","resource")},{value:`mt-${e}2`,label:(0,s.__)("2","resource")},{value:`mt-${e}3`,label:(0,s.__)("3","resource")},{value:`mt-${e}4`,label:(0,s.__)("4","resource")},{value:`mt-${e}5`,label:(0,s.__)("5","resource")},{value:`mt-${e}auto`,label:(0,s.__)("Auto","resource")}],onChange:o})),(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:x,value:n,style:{maxWidth:"42.5px"},options:[{value:"",label:(0,s.__)("-","resource")},{value:`me-${e}0`,label:(0,s.__)("0","resource")},{value:`me-${e}1`,label:(0,s.__)("1","resource")},{value:`me-${e}2`,label:(0,s.__)("2","resource")},{value:`me-${e}3`,label:(0,s.__)("3","resource")},{value:`me-${e}4`,label:(0,s.__)("4","resource")},{value:`me-${e}5`,label:(0,s.__)("5","resource")},{value:`me-${e}auto`,label:(0,s.__)("Auto","resource")}],onChange:m})),(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:_,value:a,style:{maxWidth:"42.5px"},options:[{value:"",label:(0,s.__)("-","resource")},{value:`mb-${e}0`,label:(0,s.__)("0","resource")},{value:`mb-${e}1`,label:(0,s.__)("1","resource")},{value:`mb-${e}2`,label:(0,s.__)("2","resource")},{value:`mb-${e}3`,label:(0,s.__)("3","resource")},{value:`mb-${e}4`,label:(0,s.__)("4","resource")},{value:`mb-${e}5`,label:(0,s.__)("5","resource")},{value:`mb-${e}auto`,label:(0,s.__)("Auto","resource")}],onChange:d})),(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:f,value:i,style:{maxWidth:"42.5px"},options:[{value:"",label:(0,s.__)("-","resource")},{value:`ms-${e}0`,label:(0,s.__)("0","resource")},{value:`ms-${e}1`,label:(0,s.__)("1","resource")},{value:`ms-${e}2`,label:(0,s.__)("2","resource")},{value:`ms-${e}3`,label:(0,s.__)("3","resource")},{value:`ms-${e}4`,label:(0,s.__)("4","resource")},{value:`ms-${e}5`,label:(0,s.__)("5","resource")},{value:`ms-${e}auto`,label:(0,s.__)("Auto","resource")}],onChange:c})))))}function v({breakpoint:e,breakpoint_name:t,alignText:l,setAlignText:n}){return(0,r.createElement)("div",null,(0,r.createElement)(g.CardHeader,{isBorderless:!0,isShady:!0,size:"small",className:"resource-card-header"},(0,s.__)(`${t} ALIGN`,"resource")),(0,r.createElement)(g.CardBody,{size:"small"},(0,r.createElement)(g.Flex,{wrap:!0},(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:(0,s.__)("Align Text","resource"),value:l,options:[{value:"",label:(0,s.__)("None","resource")},{value:`text-${e}start`,label:(0,s.__)("Start","resource")},{value:`text-${e}center`,label:(0,s.__)("Center","resource")},{value:`text-${e}end`,label:(0,s.__)("End","resource")}],onChange:n})))))}function C({breakpoint:e,breakpoint_name:t,flexDirection:l,justifyContent:n,alignItems:a,alignSelf:i,fillGrowShrink:o,wrap:m,order:d,alignContent:c,setFlexDirection:u,setJustifyContent:p,setAlignItems:b,setAlignSelf:x,setFillGrowShrink:_,setWrap:f,setOrder:h,setAlignContent:y}){return(0,r.createElement)("div",null,(0,r.createElement)(g.CardHeader,{isBorderless:!0,isShady:!0,size:"small",className:"resource-card-header"},(0,s.__)(`${t} FLEX ATTRIBUTES`,"resource")),(0,r.createElement)(g.CardBody,{size:"small"},(0,r.createElement)(g.Flex,{wrap:!0},(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:(0,s.__)("Direction","resource"),value:l,options:[{value:"",label:(0,s.__)("None","resource")},{value:`flex-${e}row`,label:(0,s.__)("Flex Row","resource")},{value:`flex-${e}row-reverse`,label:(0,s.__)("Flex Row Reverse","resource")},{value:`flex-${e}column`,label:(0,s.__)("Flex Column","resource")},{value:`flex-${e}column-reverse`,label:(0,s.__)("Flex Column Reverse","resource")}],onChange:u})),(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:(0,s.__)("Justify Content","resource"),value:n,options:[{value:"",label:(0,s.__)("None","resource")},{value:`justify-content-${e}start`,label:(0,s.__)("Start","resource")},{value:`justify-content-${e}end`,label:(0,s.__)("End","resource")},{value:`justify-content-${e}center`,label:(0,s.__)("Center","resource")},{value:`justify-content-${e}between`,label:(0,s.__)("Between","resource")},{value:`justify-content-${e}around`,label:(0,s.__)("Around","resource")},{value:`justify-content-${e}evenly`,label:(0,s.__)("Evenly","resource")}],onChange:p})),(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:(0,s.__)("Align Items","resource"),value:a,options:[{value:"",label:(0,s.__)("None","resource")},{value:`align-items-${e}start`,label:(0,s.__)("Start","resource")},{value:`align-items-${e}end`,label:(0,s.__)("End","resource")},{value:`align-items-${e}center`,label:(0,s.__)("Center","resource")},{value:`align-items-${e}baseline`,label:(0,s.__)("Baseline","resource")},{value:`align-items-${e}stretch`,label:(0,s.__)("Stretch","resource")}],onChange:b})),(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:(0,s.__)("Align Self","resource"),value:i,options:[{value:"",label:(0,s.__)("None","resource")},{value:`align-self-${e}start`,label:(0,s.__)("Start","resource")},{value:`align-self-${e}end`,label:(0,s.__)("End","resource")},{value:`align-self-${e}center`,label:(0,s.__)("Center","resource")},{value:`align-self-${e}baseline`,label:(0,s.__)("Baseline","resource")},{value:`align-self-${e}stretch`,label:(0,s.__)("Stretch","resource")}],onChange:x})),(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:(0,s.__)("Fill, Grow, & Shrink","resource"),value:o,options:[{value:"",label:(0,s.__)("None","resource")},{value:`flex-${e}fill`,label:(0,s.__)("Fill","resource")},{value:`flex-${e}grow-0`,label:(0,s.__)("Grow 0","resource")},{value:`flex-${e}grow-1`,label:(0,s.__)("Grow 1","resource")},{value:`flex-${e}shrink-0`,label:(0,s.__)("Shrink 0","resource")},{value:`flex-${e}shrink-1`,label:(0,s.__)("Shrink 1","resource")}],onChange:_})),(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:(0,s.__)("Wrap","resource"),value:m,options:[{value:"",label:(0,s.__)("None","resource")},{value:`flex-${e}nowrap`,label:(0,s.__)("No Wrap","resource")},{value:`flex-${e}wrap`,label:(0,s.__)("Wrap","resource")},{value:`flex-${e}wrap-reverse`,label:(0,s.__)("Wrap Reverse","resource")}],onChange:f})),(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:(0,s.__)("Order","resource"),value:d,options:[{value:"",label:(0,s.__)("None","resource")},{value:"order-first",label:(0,s.__)("first","resource")},{value:"order-0",label:(0,s.__)("0","resource")},{value:"order-1",label:(0,s.__)("1","resource")},{value:"order-2",label:(0,s.__)("2","resource")},{value:"order-3",label:(0,s.__)("3","resource")},{value:"order-4",label:(0,s.__)("4","resource")},{value:"order-5",label:(0,s.__)("5","resource")},{value:"order-last",label:(0,s.__)("last","resource")}],onChange:h})),(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:(0,s.__)("Align Content","resource"),value:c,options:[{value:"",label:(0,s.__)("None","resource")},{value:`align-content-${e}start`,label:(0,s.__)("Start","resource")},{value:`align-content-${e}end`,label:(0,s.__)("End","resource")},{value:`justify-content-${e}center`,label:(0,s.__)("Center","resource")},{value:`align-content-${e}between`,label:(0,s.__)("Between","resource")},{value:`align-content-${e}around`,label:(0,s.__)("Around","resource")},{value:`align-content-${e}stretch`,label:(0,s.__)("Stretch","resource")}],onChange:y})))))}const k=e=>"string"==typeof e?e.split(";").reduce(((e,t)=>{const l=t.indexOf(":");if(-1===l)return e;const n=t.slice(0,l).trim().replace(/^-ms-/,"ms-").replace(/-./g,(e=>e.slice(1).toUpperCase())),a=t.slice(l+1).trim();return a?{...e,[n]:a}:e}),{}):{},E={from:[{type:"block",blocks:["core/group"],transform:({content:e})=>(0,n.createBlock)("resource-layout-blocks/container",{content:e})},{type:"block",blocks:["resource-layout-blocks/row"],transform:({content:e})=>(0,n.createBlock)("resource-layout-blocks/container",{content:e})}],to:[{type:"block",blocks:["resource-layout-blocks/row"],transform:({content:e})=>(0,n.createBlock)("resource-layout-blocks/row",{content:e})}]},{name:A,...S}=a;(0,n.registerBlockType)(A,{...S,icon:i,transforms:E,edit:function({attributes:e,setAttributes:t}){const{isFluid:l,tagName:n="div",className:a,inlineStyles:i,baseDisplay:m,basePaddingTop:b,basePaddingRight:x,basePaddingBottom:_,basePaddingLeft:f,baseMarginTop:E,baseMarginRight:A,baseMarginBottom:S,baseMarginLeft:w,baseAlignText:T,baseFlexDirection:M,baseFillGrowShrink:P,baseWrap:$,baseOrder:F,baseAlignContent:B,baseAlignItems:I,baseAlignSelf:L,baseJustifyContent:D,smDisplay:R,smPaddingTop:G,smPaddingRight:N,smPaddingBottom:O,smPaddingLeft:J,smMarginTop:W,smMarginRight:z,smMarginBottom:j,smMarginLeft:X,smAlignText:H,smFlexDirection:U,smFillGrowShrink:V,smWrap:Y,smOrder:q,smAlignContent:K,smAlignItems:Q,smAlignSelf:Z,smJustifyContent:ee,mdDisplay:te,mdPaddingTop:le,mdPaddingRight:ne,mdPaddingBottom:ae,mdPaddingLeft:re,mdMarginTop:ie,mdMarginRight:se,mdMarginBottom:oe,mdMarginLeft:ge,mdAlignText:me,mdFlexDirection:de,mdFillGrowShrink:ce,mdWrap:ue,mdOrder:pe,mdAlignContent:be,mdAlignItems:xe,mdAlignSelf:_e,mdJustifyContent:fe,lgDisplay:he,lgPaddingTop:ye,lgPaddingRight:ve,lgPaddingBottom:Ce,lgPaddingLeft:ke,lgMarginTop:Ee,lgMarginRight:Ae,lgMarginBottom:Se,lgMarginLeft:we,lgAlignText:Te,lgFlexDirection:Me,lgFillGrowShrink:Pe,lgWrap:$e,lgOrder:Fe,lgAlignContent:Be,lgAlignItems:Ie,lgAlignSelf:Le,lgJustifyContent:De,xlDisplay:Re,xlPaddingTop:Ge,xlPaddingRight:Ne,xlPaddingBottom:Oe,xlPaddingLeft:Je,xlMarginTop:We,xlMarginRight:ze,xlMarginBottom:je,xlMarginLeft:Xe,xlAlignText:He,xlFlexDirection:Ue,xlFillGrowShrink:Ve,xlWrap:Ye,xlOrder:qe,xlAlignContent:Ke,xlAlignItems:Qe,xlAlignSelf:Ze,xlJustifyContent:et,xxlDisplay:tt,xxlPaddingTop:lt,xxlPaddingRight:nt,xxlPaddingBottom:at,xxlPaddingLeft:rt,xxlMarginTop:it,xxlMarginRight:st,xxlMarginBottom:ot,xxlMarginLeft:gt,xxlAlignText:mt,xxlFlexDirection:dt,xxlFillGrowShrink:ct,xxlWrap:ut,xxlOrder:pt,xxlAlignContent:bt,xxlAlignItems:xt,xxlAlignSelf:_t,xxlJustifyContent:ft}=e,ht=(0,c.omit)(e,["anchor","isFluid","tagName","inlineStyles","className"]),yt=d()({container:!l,"container-fluid":l},Object.values(ht),a),vt=(0,o.useBlockProps)({className:yt,style:k(i)});return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(o.BlockControls,null,(0,r.createElement)(g.Toolbar,{label:"Class Inspector",id:"class-inspector"},(0,r.createElement)(g.ToolbarItem,{as:"p"},yt))),(0,r.createElement)(o.InspectorControls,null,(0,r.createElement)(g.Card,null,(0,r.createElement)(g.CardHeader,{isBorderless:!0,isShady:!0,size:"small",className:"resource-card-header"},(0,s.__)("CONTAINER","resource")),(0,r.createElement)(g.CardBody,{size:"small"},(0,r.createElement)(g.Flex,{wrap:!0},(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.SelectControl,{label:(0,s.__)("HTML element","resource"),options:[{label:(0,s.__)("Default (<div>)","resource"),value:"div"},{label:"<header>",value:"header"},{label:"<main>",value:"main"},{label:"<section>",value:"section"},{label:"<article>",value:"article"},{label:"<aside>",value:"aside"},{label:"<footer>",value:"footer"}],value:n,onChange:e=>t({tagName:e}),help:u[n]})),(0,r.createElement)(g.FlexItem,null,(0,r.createElement)(g.CheckboxControl,{label:(0,s.__)("Fluid","resource"),checked:l,onChange:e=>t({isFluid:e})}))))),(0,r.createElement)(g.TabPanel,{className:"breakpoint-tab-panel",activeClass:"is-active",orientation:"horizontal",tabs:[{name:"base",title:"—",className:"breakpoint-tab",content:(0,r.createElement)(g.Card,null,(0,r.createElement)(p,{breakpoint:"",breakpoint_name:"",display:m,setDisplay:e=>t({baseDisplay:e})}),("d-flex"===m||"d-inline-flex"===m)&&(0,r.createElement)(C,{breakpoint:"",breakpoint_name:"",flexDirection:M,justifyContent:D,alignItems:I,alignSelf:L,fillGrowShrink:P,wrap:$,order:F,alignContent:B,setFlexDirection:e=>t({baseFlexDirection:e}),setJustifyContent:e=>t({baseJustifyContent:e}),setAlignItems:e=>t({baseAlignItems:e}),setAlignSelf:e=>t({baseAlignSelf:e}),setFillGrowShrink:e=>t({baseFillGrowShrink:e}),setWrap:e=>t({baseWrap:e}),setOrder:e=>t({baseOrder:e}),setAlignContent:e=>t({baseAlignContent:e})}),"d-none"!==m&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(h,{breakpoint:"",breakpoint_name:"",paddingTop:b,paddingRight:x,paddingBottom:_,paddingLeft:f,setPaddingTop:e=>t({basePaddingTop:e}),setPaddingRight:e=>t({basePaddingRight:e}),setPaddingBottom:e=>t({basePaddingBottom:e}),setPaddingLeft:e=>t({basePaddingLeft:e})}),(0,r.createElement)(y,{breakpoint:"",breakpoint_name:"",marginTop:E,marginRight:A,marginBottom:S,marginLeft:w,setMarginTop:e=>t({baseMarginTop:e}),setMarginRight:e=>t({baseMarginRight:e}),setMarginBottom:e=>t({baseMarginBottom:e}),setMarginLeft:e=>t({baseMarginLeft:e})}),(0,r.createElement)(v,{breakpoint:"",breakpoint_name:"",alignText:T,flexDirection:M,alignItems:I,alignSelf:L,justifyContent:D,setAlignText:e=>t({baseAlignText:e}),setFlexDirection:e=>t({baseFlexDirection:e}),setAlignItems:e=>t({baseAlignItems:e}),setAlignSelf:e=>t({baseAlignSelf:e}),setJustifyContent:e=>t({baseJustifyContent:e})})))},{name:"small",title:"SM",className:"breakpoint-tab",content:(0,r.createElement)(g.Card,null,(0,r.createElement)(p,{breakpoint:"sm-",breakpoint_name:"SM",display:R,setDisplay:e=>t({smDisplay:e})}),("d-sm-flex"===R||"d-sm-inline-flex"===R)&&(0,r.createElement)(C,{breakpoint:"sm-",breakpoint_name:"SM",flexDirection:U,justifyContent:ee,alignItems:Q,alignSelf:Z,fillGrowShrink:V,wrap:Y,order:q,alignContent:K,setFlexDirection:e=>t({smFlexDirection:e}),setJustifyContent:e=>t({smJustifyContent:e}),setAlignItems:e=>t({smAlignItems:e}),setAlignSelf:e=>t({smAlignSelf:e}),setFillGrowShrink:e=>t({smFillGrowShrink:e}),setWrap:e=>t({smWrap:e}),setOrder:e=>t({smOrder:e}),setAlignContent:e=>t({smAlignContent:e})}),"d-sm-none"!==R&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(h,{breakpoint:"sm-",breakpoint_name:"SM",paddingTop:G,paddingRight:N,paddingBottom:O,paddingLeft:J,setPaddingTop:e=>t({smPaddingTop:e}),setPaddingRight:e=>t({smPaddingRight:e}),setPaddingBottom:e=>t({smPaddingBottom:e}),setPaddingLeft:e=>t({smPaddingLeft:e})}),(0,r.createElement)(y,{breakpoint:"sm-",breakpoint_name:"SM",marginTop:W,marginRight:z,marginBottom:j,marginLeft:X,setMarginTop:e=>t({smMarginTop:e}),setMarginRight:e=>t({smMarginRight:e}),setMarginBottom:e=>t({smMarginBottom:e}),setMarginLeft:e=>t({smMarginLeft:e})}),(0,r.createElement)(v,{breakpoint:"sm-",breakpoint_name:"SM",alignText:H,flexDirection:U,alignItems:Q,alignSelf:Z,justifyContent:ee,setAlignText:e=>t({smAlignText:e}),setAlignItems:e=>t({smAlignItems:e}),setAlignSelf:e=>t({smAlignSelf:e}),setJustifyContent:e=>t({smJustifyContent:e})})))},{name:"medium",title:"MD",className:"breakpoint-tab",content:(0,r.createElement)(g.Card,null,(0,r.createElement)(p,{breakpoint:"md-",breakpoint_name:"MD",display:te,setDisplay:e=>t({mdDisplay:e})}),("d-md-flex"===te||"d-md-inline-flex"===te)&&(0,r.createElement)(C,{breakpoint:"md-",breakpoint_name:"MD",flexDirection:de,justifyContent:fe,alignItems:xe,alignSelf:_e,fillGrowShrink:ce,wrap:ue,order:pe,alignContent:be,setFlexDirection:e=>t({mdFlexDirection:e}),setJustifyContent:e=>t({mdJustifyContent:e}),setAlignItems:e=>t({mdAlignItems:e}),setAlignSelf:e=>t({mdAlignSelf:e}),setFillGrowShrink:e=>t({mdFillGrowShrink:e}),setWrap:e=>t({mdWrap:e}),setOrder:e=>t({mdOrder:e}),setAlignContent:e=>t({mdAlignContent:e})}),"d-md-none"!==te&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(h,{breakpoint:"md-",breakpoint_name:"MD",paddingTop:le,paddingRight:ne,paddingBottom:ae,paddingLeft:re,setPaddingTop:e=>t({mdPaddingTop:e}),setPaddingRight:e=>t({mdPaddingRight:e}),setPaddingBottom:e=>t({mdPaddingBottom:e}),setPaddingLeft:e=>t({mdPaddingLeft:e})}),(0,r.createElement)(y,{breakpoint:"md-",breakpoint_name:"MD",marginTop:ie,marginRight:se,marginBottom:oe,marginLeft:ge,setMarginTop:e=>t({mdMarginTop:e}),setMarginRight:e=>t({mdMarginRight:e}),setMarginBottom:e=>t({mdMarginBottom:e}),setMarginLeft:e=>t({mdMarginLeft:e})}),(0,r.createElement)(v,{breakpoint:"md-",breakpoint_name:"MD",alignText:me,flexDirection:de,alignItems:xe,alignSelf:_e,justifyContent:fe,setAlignText:e=>t({mdAlignText:e}),setAlignItems:e=>t({mdAlignItems:e}),setAlignSelf:e=>t({mdAlignSelf:e}),setJustifyContent:e=>t({mdJustifyContent:e})})))},{name:"large",title:"LG",className:"breakpoint-tab",content:(0,r.createElement)(g.Card,null,(0,r.createElement)(p,{breakpoint:"lg-",breakpoint_name:"LG",display:he,setDisplay:e=>t({lgDisplay:e})}),("d-lg-flex"===he||"d-lg-inline-flex"===he)&&(0,r.createElement)(C,{breakpoint:"lg-",breakpoint_name:"LG",flexDirection:Me,justifyContent:De,alignItems:Ie,alignSelf:Le,fillGrowShrink:Pe,wrap:$e,order:Fe,alignContent:Be,setFlexDirection:e=>t({lgFlexDirection:e}),setJustifyContent:e=>t({lgJustifyContent:e}),setAlignItems:e=>t({lgAlignItems:e}),setAlignSelf:e=>t({lgAlignSelf:e}),setFillGrowShrink:e=>t({lgFillGrowShrink:e}),setWrap:e=>t({lgWrap:e}),setOrder:e=>t({lgOrder:e}),setAlignContent:e=>t({lgAlignContent:e})}),"d-lg-none"!==he&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(h,{breakpoint:"lg-",breakpoint_name:"LG",paddingTop:ye,paddingRight:ve,paddingBottom:Ce,paddingLeft:ke,setPaddingTop:e=>t({lgPaddingTop:e}),setPaddingRight:e=>t({lgPaddingRight:e}),setPaddingBottom:e=>t({lgPaddingBottom:e}),setPaddingLeft:e=>t({lgPaddingLeft:e})}),(0,r.createElement)(y,{breakpoint:"lg-",breakpoint_name:"LG",marginTop:Ee,marginRight:Ae,marginBottom:Se,marginLeft:we,setMarginTop:e=>t({lgMarginTop:e}),setMarginRight:e=>t({lgMarginRight:e}),setMarginBottom:e=>t({lgMarginBottom:e}),setMarginLeft:e=>t({lgMarginLeft:e})}),(0,r.createElement)(v,{breakpoint:"lg-",breakpoint_name:"LG",alignText:Te,flexDirection:Me,alignItems:Ie,alignSelf:Le,justifyContent:De,setAlignText:e=>t({lgAlignText:e}),setAlignItems:e=>t({lgAlignItems:e}),setAlignSelf:e=>t({lgAlignSelf:e}),setJustifyContent:e=>t({lgJustifyContent:e})})))},{name:"extra-large",title:"XL",className:"breakpoint-tab",content:(0,r.createElement)(g.Card,null,(0,r.createElement)(p,{breakpoint:"xl-",breakpoint_name:"XL",display:Re,setDisplay:e=>t({xlDisplay:e})}),("d-xl-flex"===Re||"d-xl-inline-flex"===Re)&&(0,r.createElement)(C,{breakpoint:"xl-",breakpoint_name:"XL",flexDirection:Ue,justifyContent:et,alignItems:Qe,alignSelf:Ze,fillGrowShrink:Ve,wrap:Ye,order:qe,alignContent:Ke,setFlexDirection:e=>t({xlFlexDirection:e}),setJustifyContent:e=>t({xlJustifyContent:e}),setAlignItems:e=>t({xlAlignItems:e}),setAlignSelf:e=>t({xlAlignSelf:e}),setFillGrowShrink:e=>t({xlFillGrowShrink:e}),setWrap:e=>t({xlWrap:e}),setOrder:e=>t({xlOrder:e}),setAlignContent:e=>t({xlAlignContent:e})}),"d-xl-none"!==Re&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(h,{breakpoint:"xl-",breakpoint_name:"XL",paddingTop:Ge,paddingRight:Ne,paddingBottom:Oe,paddingLeft:Je,setPaddingTop:e=>t({xlPaddingTop:e}),setPaddingRight:e=>t({xlPaddingRight:e}),setPaddingBottom:e=>t({xlPaddingBottom:e}),setPaddingLeft:e=>t({xlPaddingLeft:e})}),(0,r.createElement)(y,{breakpoint:"xl-",breakpoint_name:"XL",marginTop:We,marginRight:ze,marginBottom:je,marginLeft:Xe,setMarginTop:e=>t({xlMarginTop:e}),setMarginRight:e=>t({xlMarginRight:e}),setMarginBottom:e=>t({xlMarginBottom:e}),setMarginLeft:e=>t({xlMarginLeft:e})}),(0,r.createElement)(v,{breakpoint:"xl-",breakpoint_name:"XL",alignText:He,flexDirection:Ue,alignItems:Qe,alignSelf:Ze,justifyContent:et,setAlignText:e=>t({xlAlignText:e}),setAlignItems:e=>t({xlAlignItems:e}),setAlignSelf:e=>t({xlAlignSelf:e}),setJustifyContent:e=>t({xlJustifyContent:e})})))},{name:"extra-extra-large",title:"XXL",className:"breakpoint-tab",content:(0,r.createElement)(g.Card,null,(0,r.createElement)(p,{breakpoint:"xxl-",breakpoint_name:"XXL",display:tt,setDisplay:e=>t({xxlDisplay:e})}),("d-xxl-flex"===tt||"d-xxl-inline-flex"===tt)&&(0,r.createElement)(C,{breakpoint:"xxl-",breakpoint_name:"XXL",flexDirection:dt,justifyContent:ft,alignItems:xt,alignSelf:_t,fillGrowShrink:ct,wrap:ut,order:pt,alignContent:bt,setFlexDirection:e=>t({xxlFlexDirection:e}),setJustifyContent:e=>t({xxlJustifyContent:e}),setAlignItems:e=>t({xxlAlignItems:e}),setAlignSelf:e=>t({xxlAlignSelf:e}),setFillGrowShrink:e=>t({xxlFillGrowShrink:e}),setWrap:e=>t({xxlWrap:e}),setOrder:e=>t({xxlOrder:e}),setAlignContent:e=>t({xxlAlignContent:e})}),"d-xxl-none"!==tt&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(h,{breakpoint:"xxl-",breakpoint_name:"XXL",paddingTop:lt,paddingRight:nt,paddingBottom:at,paddingLeft:rt,setPaddingTop:e=>t({xxlPaddingTop:e}),setPaddingRight:e=>t({xxlPaddingRight:e}),setPaddingBottom:e=>t({xxlPaddingBottom:e}),setPaddingLeft:e=>t({xxlPaddingLeft:e})}),(0,r.createElement)(y,{breakpoint:"xxl-",breakpoint_name:"XXL",marginTop:it,marginRight:st,marginBottom:ot,marginLeft:gt,setMarginTop:e=>t({xxlMarginTop:e}),setMarginRight:e=>t({xxlMarginRight:e}),setMarginBottom:e=>t({xxlMarginBottom:e}),setMarginLeft:e=>t({xxlMarginLeft:e})}),(0,r.createElement)(v,{breakpoint:"xxl-",breakpoint_name:"XXL",alignText:mt,flexDirection:dt,alignItems:xt,alignSelf:_t,justifyContent:ft,setAlignText:e=>t({xxlAlignText:e}),setAlignItems:e=>t({xxlAlignItems:e}),setAlignSelf:e=>t({xxlAlignSelf:e}),setJustifyContent:e=>t({xxlJustifyContent:e})})))}]},(({content:e,className:t})=>(0,r.createElement)("div",{className:t},e)))),(0,r.createElement)(o.InspectorControls,{group:"advanced"},(0,r.createElement)(g.TextControl,{__nextHasNoMarginBottom:!0,className:"inline-style-control",autoComplete:"off",label:(0,s.__)("Inline Styles"),value:i||"",onChange:e=>{t({inlineStyles:""!==e?e:void 0})}})),(0,r.createElement)(n,vt,(0,r.createElement)(o.InnerBlocks,{placeholder:(0,s.__)("Insert Rows","resource")})))},save:function({attributes:e}){const{isFluid:t,tagName:l="div",inlineStyles:n}=e,a=(0,c.omit)(e,["anchor","isFluid","tagName","inlineStyles","className"]),i=d()({container:!t,"container-fluid":t},Object.values(a)),s=o.useBlockProps.save({className:i,style:k(n)}),g=o.useInnerBlocksProps.save(s);return(0,r.createElement)(l,g)}})},184:(e,t)=>{var l;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)){if(l.length){var i=a.apply(null,l);i&&e.push(i)}}else if("object"===r){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var s in l)n.call(l,s)&&l[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()}},l={};function n(e){var a=l[e];if(void 0!==a)return a.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,l,a,r)=>{if(!l){var i=1/0;for(m=0;m<e.length;m++){for(var[l,a,r]=e[m],s=!0,o=0;o<l.length;o++)(!1&r||i>=r)&&Object.keys(n.O).every((e=>n.O[e](l[o])))?l.splice(o--,1):(s=!1,r<i&&(i=r));if(s){e.splice(m--,1);var g=a();void 0!==g&&(t=g)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[l,a,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={413:0,182:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var a,r,[i,s,o]=l,g=0;if(i.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(o)var m=o(n)}for(t&&t(l);g<i.length;g++)r=i[g],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(m)},l=globalThis.webpackChunkresource_layout_blocks=globalThis.webpackChunkresource_layout_blocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var a=n.O(void 0,[182],(()=>n(167)));a=n.O(a)})();