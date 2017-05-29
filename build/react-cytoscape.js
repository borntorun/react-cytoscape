!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("cytoscape")):"function"==typeof define&&define.amd?define(["prop-types","react","cytoscape"],t):"object"==typeof exports?exports.ReactCytoscape=t(require("prop-types"),require("react"),require("cytoscape")):e.ReactCytoscape=t(e.PropTypes,e.React,e.cytoscape)}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="build/",t(t.s=4)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),l=r(f),p=n(0),y=r(p),d=n(5),b=r(d),v=n(3),h=r(v),CytoscapeContainer=function(e){function CytoscapeContainer(e){u(this,CytoscapeContainer);var t=a(this,(CytoscapeContainer.__proto__||Object.getPrototypeOf(CytoscapeContainer)).call(this,e));return t.state={cy:null},t.setCyInstance=t.setCyInstance.bind(t),t.unsetCyInstance=t.unsetCyInstance.bind(t),t}return c(CytoscapeContainer,e),i(CytoscapeContainer,[{key:"unsetCyInstance",value:function(){return null!=this.state.cy&&this.state.cy.destroy(),this}},{key:"setCyInstance",value:function(){var e=s({},this.props.cyOptions),t=e.elements,n=e.style,r=e.layout,u=o(e,["elements","style","layout"]),a=s({},{container:this.cyContainer},t?{elements:t}:{},n?{style:n}:{},r?{layout:r}:{},u?s({},u):{});console.log("ccc",a);var c=(0,b.default)(a);this.setState({cy:c}),"function"==typeof this.props.onCyReady&&c.ready(this.props.onCyReady.bind(c)),"function"==typeof this.props.onCyDestroy&&c.on("destroy",this.props.onCyDestroy.bind(c))}},{key:"componentWillReceiveProps",value:function(){}},{key:"shouldComponentUpdate",value:function(){return!0}},{key:"componentDidMount",value:function(){this.unsetCyInstance().setCyInstance()}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.style;return l.default.createElement(h.default,s({},n?{className:n}:{},r?{style:r}:{},{cyContainerRef:function(t){return e.cyContainer=t}},this.otherProps))}}]),CytoscapeContainer}(l.default.Component);CytoscapeContainer.propTypes={className:y.default.string,style:y.default.object,onCyReady:y.default.func,onCyDestroy:y.default.func,cyOptions:y.default.object},CytoscapeContainer.displayName="CytoscapeContainer",t.default=CytoscapeContainer},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),c=r(a),s=n(0),i=r(s),CytoscapeRender=function(e){var t=e.cyContainerRef,n=o(e,["cyContainerRef"]);return c.default.createElement("div",u({ref:t},n))};CytoscapeRender.propTypes={cyContainerRef:i.default.func.isRequired,className:i.default.string,style:i.default.object},CytoscapeRender.displayName="CytoscapeRender",t.default=CytoscapeRender},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=o.default},function(e,t){e.exports=n}])});