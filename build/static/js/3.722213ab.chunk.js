webpackJsonp([3],{69:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),u=n.n(c),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),i(t,[{key:"handleTouchTab",value:function(e){this.props.handleTouchTab(e)}},{key:"render",value:function(){var e=this,t=this.props.tabList;return u.a.createElement("div",{className:"hot_tab_list"},u.a.createElement("h3",null,"\u70ed\u95e8\u641c\u7d22"),u.a.createElement("ul",{className:"hot_tab_wrap"},t.map(function(t,n){return u.a.createElement("li",{key:n,className:"search_tab",onTouchStart:e.handleTouchTab.bind(e,t.k)},t.k)})))}}]),t}(c.Component);t.default=l}});
//# sourceMappingURL=3.722213ab.chunk.js.map