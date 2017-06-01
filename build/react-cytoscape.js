!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("cytoscape")):"function"==typeof define&&define.amd?define(["prop-types","react","cytoscape"],t):"object"==typeof exports?exports.ReactCytoscape=t(require("prop-types"),require("react"),require("cytoscape")):e.ReactCytoscape=t(e.PropTypes,e.React,e.cytoscape)}(this,function(e,t,n){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="build/",t(t.s=4)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),p=o(l),f=n(0),y=o(f),d=n(5),C=o(d),b=n(3),v=o(b),CytoscapeContainer=function(e){function CytoscapeContainer(e){a(this,CytoscapeContainer);var t=s(this,(CytoscapeContainer.__proto__||Object.getPrototypeOf(CytoscapeContainer)).call(this,e));return t.state={cy:null},t.setCyInstance=t.setCyInstance.bind(t),t.unsetCyInstance=t.unsetCyInstance.bind(t),t}return c(CytoscapeContainer,e),i(CytoscapeContainer,[{key:"unsetCyInstance",value:function(){console.log("CytoscapeContainer unsetCyInstance"),null!=this.state.cy&&(console.log("CytoscapeContainer call destroy"),this.state.cy.destroy())}},{key:"setCyInstance",value:function(){console.log("CytoscapeContainer setCyInstance");var e=u({},this.props.cyOptions),t=e.elements,n=e.style,o=e.layout,a=r(e,["elements","style","layout"]),s=(0,C.default)(u({},{container:this.cyContainer},t?{elements:t}:{},n?{style:n}:{},o?{layout:o}:{},a?u({},a):{}));this.setState({cy:s}),"function"==typeof this.props.onCyReady&&s.ready(this.props.onCyReady),"function"==typeof this.props.onCyDestroy&&s.on("destroy",this.props.onCyDestroy)}},{key:"componentWillReceiveProps",value:function(e){console.log("CytoscapeContainer componentWillReceiveProps",e),this.unsetCyInstance(),this.setCyInstance()}},{key:"shouldComponentUpdate",value:function(){return!0}},{key:"componentDidMount",value:function(){this.unsetCyInstance(),this.setCyInstance()}},{key:"render",value:function(){var e=this;console.log("CytoscapeContainer render",this.props);var t=this.props,n=t.className,o=t.style;return p.default.createElement(v.default,u({},n?{className:n}:{},o?{style:o}:{},{cyContainerRef:function(t){return e.cyContainer=t}}))}}]),CytoscapeContainer}(p.default.Component);CytoscapeContainer.propTypes={className:y.default.string,style:y.default.object,onCyReady:y.default.func,onCyDestroy:y.default.func,cyOptions:y.default.object},CytoscapeContainer.displayName="CytoscapeContainer",t.default=CytoscapeContainer},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=n(1),c=o(s),u=n(0),i=o(u),CytoscapeRender=function(e){var t=e.cyContainerRef,n=r(e,["cyContainerRef"]);return c.default.createElement("div",a({ref:t},n))};CytoscapeRender.propTypes={cyContainerRef:i.default.func.isRequired,className:i.default.string,style:i.default.object},CytoscapeRender.displayName="CytoscapeRender",t.default=CytoscapeRender},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=r.default},function(e,t){e.exports=n}])});