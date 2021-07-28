/*! For license information please see component---src-templates-core-rules-template-js-3fa47b5621733447d6d6.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[51],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),a=r(7067);function o(t,r,i){return a()?(e.exports=o=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=o=function(e,t,r){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return r&&n(o,r.prototype),o},e.exports.default=e.exports,e.exports.__esModule=!0),o.apply(null,arguments)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},3715:function(e,t,r){"use strict";var n=r(2122),a=r(1253),o=r(6156),i=r(7294),u=r(2585),c=r(683),s=r(7969),l=i.forwardRef((function(e,t){var r=e.classes,o=e.className,c=e.component,l=void 0===c?"div":c,p=e.disableGutters,f=void 0!==p&&p,d=e.fixed,m=void 0!==d&&d,x=e.maxWidth,g=void 0===x?"lg":x,h=(0,a.Z)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(l,(0,n.Z)({className:(0,u.Z)(r.root,o,m&&r.fixed,f&&r.disableGutters,!1!==g&&r["maxWidth".concat((0,s.Z)(String(g)))]),ref:t},h))}));t.Z=(0,c.Z)((function(e){return{root:(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,r){var n=e.breakpoints.values[r];return 0!==n&&(t[e.breakpoints.up(r)]={maxWidth:n}),t}),{}),maxWidthXs:(0,o.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:(0,o.Z)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:(0,o.Z)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:(0,o.Z)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:(0,o.Z)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(l)},9473:function(e,t,r){"use strict";t.U1=function(e,t){e=u(e),t=a(t),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a");return e.values[3]=t,c(e)};var n=r(928);function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(t,e),r)}function o(e){e=e.substr(1);var t=new RegExp(".{1,".concat(e.length>=6?2:1,"}"),"g"),r=e.match(t);return r&&1===r[0].length&&(r=r.map((function(e){return e+e}))),r?"rgb".concat(4===r.length?"a":"","(").concat(r.map((function(e,t){return t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3})).join(", "),")"):""}function i(e){var t=(e=u(e)).values,r=t[0],n=t[1]/100,a=t[2]/100,o=n*Math.min(a,1-a),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+r/30)%12;return a-o*Math.max(Math.min(t-3,9-t,1),-1)},s="rgb",l=[Math.round(255*i(0)),Math.round(255*i(8)),Math.round(255*i(4))];return"hsla"===e.type&&(s+="a",l.push(t[3])),c({type:s,values:l})}function u(e){if(e.type)return e;if("#"===e.charAt(0))return u(o(e));var t=e.indexOf("("),r=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla"].indexOf(r))throw new Error((0,n.formatMuiErrorMessage)(3,e));var a=e.substring(t+1,e.length-1).split(",");return{type:r,values:a=a.map((function(e){return parseFloat(e)}))}}function c(e){var t=e.type,r=e.values;return-1!==t.indexOf("rgb")?r=r.map((function(e,t){return t<3?parseInt(e,10):e})):-1!==t.indexOf("hsl")&&(r[1]="".concat(r[1],"%"),r[2]="".concat(r[2],"%")),"".concat(t,"(").concat(r.join(", "),")")}function s(e){var t="hsl"===(e=u(e)).type?u(i(e)).values:e.values;return t=t.map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function l(e,t){if(e=u(e),t=a(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb"))for(var r=0;r<3;r+=1)e.values[r]*=1-t;return c(e)}function p(e,t){if(e=u(e),t=a(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(var r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;return c(e)}},928:function(e,t,r){"use strict";function n(e,t){return function(){return null}}r.r(t),r.d(t,{HTMLElementType:function(){return v},chainPropTypes:function(){return n},deepmerge:function(){return a.Z},elementAcceptingRef:function(){return c},elementTypeAcceptingRef:function(){return s},exactProp:function(){return l},formatMuiErrorMessage:function(){return p.Z},getDisplayName:function(){return b},ponyfillGlobal:function(){return y},refType:function(){return w}});var a=r(6775),o=r(5697),i=r.n(o);var u=(i().element,function(){return null});u.isRequired=(i().element.isRequired,function(){return null});var c=u;var s=(o.elementType,function(){return null});r(6156),r(2122);function l(e){return e}var p=r(5035),f=r(484),d=r(3669),m=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function x(e){var t="".concat(e).match(m);return t&&t[1]||""}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.displayName||e.name||x(e)||t}function h(e,t,r){var n=g(t);return e.displayName||(""!==n?"".concat(r,"(").concat(n,")"):r)}function b(e){if(null!=e){if("string"==typeof e)return e;if("function"==typeof e)return g(e,"Component");if("object"===(0,f.Z)(e))switch(e.$$typeof){case d.ForwardRef:return h(e,e.render,"ForwardRef");case d.Memo:return h(e,e.type,"memo");default:return}}}function v(e,t,r,n,a){return null}var y="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),w=i().oneOfType([i().func,i().object])},6283:function(e,t){"use strict";var r=60103,n=60106,a=60107,o=60108,i=60114,u=60109,c=60110,s=60112,l=60113,p=60120,f=60115,d=60116,m=60121,x=60122,g=60117,h=60129,b=60131;if("function"==typeof Symbol&&Symbol.for){var v=Symbol.for;r=v("react.element"),n=v("react.portal"),a=v("react.fragment"),o=v("react.strict_mode"),i=v("react.profiler"),u=v("react.provider"),c=v("react.context"),s=v("react.forward_ref"),l=v("react.suspense"),p=v("react.suspense_list"),f=v("react.memo"),d=v("react.lazy"),m=v("react.block"),x=v("react.server.block"),g=v("react.fundamental"),h=v("react.debug_trace_mode"),b=v("react.legacy_hidden")}function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case a:case i:case o:case l:case p:return e;default:switch(e=e&&e.$$typeof){case c:case s:case d:case f:case u:return e;default:return t}}case n:return t}}}var w=s,k=a,M=d,_=f,O=n,j=i,R=o,A=l;t.ForwardRef=w,t.Memo=_},3669:function(e,t,r){"use strict";e.exports=r(6283)},1274:function(e,t,r){var n=r(1048);e.exports={MDXRenderer:n}},1048:function(e,t,r){var n=r(9100),a=r(319),o=r(9713),i=r(7316),u=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=r(7294),p=r(3497).mdx,f=r(3191).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,o=i(e,u),c=f(t),d=l.useMemo((function(){if(!r)return null;var e=s({React:l,mdx:p},c),t=Object.keys(e),o=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(o)))}),[r,t]);return l.createElement(d,s({},o))}},8244:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7294),a=r(5444),o=r(3715),i=r(3497),u=r(1274),c=r(9172),s=r(2671),l=r(7399),p=r(9473),f=(0,l.Z)({content:{fontSize:"16px",paddingBottom:"16px","& p":{"& a":{color:function(e){return e.palette.info.dark}}},"& h2":{background:function(e){return"light"===e.palette.type?(0,p.U1)(e.palette.secondary.main,.15):e.palette.secondary.main},padding:"8px"},"& blockquote":{backgroundColor:function(e){return e.palette.background.paper},margin:"8px",padding:"15px"},"& .sticky-sidebar":{"& h3":{margin:"0"},"& p":{margin:"0"},"& blockquote":{background:"inherit",margin:"0",padding:"0"},float:"right",width:"43%",padding:"12px",margin:"0 0 0 16px",background:function(e){return e.palette.background.paper}},"& table":{width:"100%!important",background:"0 0!important",borderCollapse:"collapse",borderSpacing:"0",tableLayout:"fixed",display:"table","& .table-no-body":{"& th:first-of-type":{width:"25%"},"& th:nth-of-type(2)":{width:"25%"},"& th:nth-of-type(3)":{width:"50%"}}},"& thead":{display:"table-header-group",verticalAlign:"middle","& tr":{"& th":{padding:"0"}}},"& th":{padding:"7px",borderWidth:"0",textAlign:"center"},"& tr":{display:"table-row",verticalAlign:"inherit",borderColor:"inherit",border:"0","& td":{padding:"7px",borderWidth:"0",textAlign:"center"}},"& tbody":{display:"table-row-group",verticalAlign:"middle",borderSpacing:"0","& tr:nth-child(odd)":{background:function(e){return e.palette.warning.light},textAlign:"center"},"& tr:nth-child(even)":{background:function(e){return e.palette.warning.main},textAlign:"center"}},"& .table-no-body-heading":{marginBottom:"0",textAlign:"center"},"& .table-even-header":{textTransform:"uppercase",background:function(e){return e.palette.warning.dark},padding:"4px 0"}},navDiv:{display:"flex",flexDirection:"row",justifyContent:"center","& > a":{margin:"0 8px",color:function(e){return e.palette.info.dark}}}});function d(e){var t=e.data,r=e.pageContext,l=(0,n.useContext)(s.Yr).darkMode?c.$:c.W,p=f(l),d=r.prev?{url:""+r.prev.frontmatter.slug,title:r.prev.frontmatter.title}:null,m=r.next?{url:""+r.next.frontmatter.slug,title:r.next.frontmatter.title}:null,x=t.mdx,g=x.body,h=x.headings;return n.createElement(o.Z,{maxWidth:"xl",className:p.content},n.createElement(i.MDXProvider,null,n.createElement(u.MDXRenderer,{headings:h},g)),n.createElement("div",{className:p.navDiv},d&&n.createElement(a.Link,{to:d.url},n.createElement("h4",null," < Previous Chapter ")),m&&n.createElement(a.Link,{to:m.url},n.createElement("h4",null,"Next Chapter >"))))}}}]);
//# sourceMappingURL=component---src-templates-core-rules-template-js-3fa47b5621733447d6d6.js.map