(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[480],{1063:function(e,t,n){"use strict";var l=n(5318),r=n(3257);t.Z=void 0;var a=r(n(7294)),c=(0,l(n(6461)).default)(a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.Z=c},7508:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var l=n(7294),r=n(4594),a=n(1907),c=n(8663),s=n(6163),u=n(7399),i=n(1063),o=(0,u.Z)({featSection:{fontSize:"16px",margin:"24px",paddingBottom:"24px"},toolbar:{backgroundColor:"rgba(81,45,168, 0.9)",color:"rgba(255,255,255,0.87)",fontSize:"20px"},backButton:{"&:hover":{backgroundColor:"transparent"}},backIcon:{color:"rgba(255,255,255,0.87)"}});function m(e){var t=o(),n=r.filter((function(t){return t.name===e.feat.name}))[0];return l.createElement("div",{className:t.container},l.createElement(c.Z,{className:t.toolbar},l.createElement(s.IconButton,{disableRipple:!0,to:"/feats",className:t.backButton},l.createElement(i.Z,{className:t.backIcon})),"Back To Feats List"),l.createElement("div",{className:t.featSection},l.createElement("h2",{id:n.name,style:{lineHeight:"40px"}},n.name),l.createElement("p",null,l.createElement("strong",null,"Cost: "),n.cost.toString()," ",n.cost.length>1?"points":"point"),l.createElement("p",null,l.createElement("strong",null,"Prerequisites: ")),l.createElement("ul",null,l.createElement("ul",null,Object.entries(n.prerequisites).map((function(e,t){var n=e[0].charAt(0).toUpperCase()+e[0].slice(1,4),r=e[0].slice(4);if("Other"===Object.keys(e[1])[0])return l.createElement("li",{key:t},l.createElement("strong",null,n+" "+r+":"," "),""+Object.values(e[1])[0]);if("Feat"===Object.entries(e[1])[0][0])return l.createElement("li",{key:""+n+t},l.createElement("strong",null,n+" "+r+":"," "),"Feat: "+e[1].Feat.reduce((function(e,t){return e+" "+t+","}),"").slice(0,-1));if("Attribute"===Object.entries(e[1])[0][0]){if(void 0!==Object.entries(e[1])[1]){var a="";Object.entries(Object.values(e[1])[0]).forEach((function(e){a+=Object.keys(e[1])[0]+" "+Object.values(e[1])[0]+", or "}));var c="Feat: "+Object.entries(Object.values(e[1])[1])[0][1];return l.createElement("li",{key:t+n},l.createElement("strong",null,n+" "+r+":"," "),l.createElement("ul",null,l.createElement("li",null,a.slice(0,-5)),l.createElement("li",{key:""+t+n+"Feat"},c)))}var s=" "+Object.keys(Object.entries(Object.values(e[1])[0])[0][1])[0]+" "+Object.values(Object.entries(Object.values(e[1])[0])[0][1])[0];return l.createElement("li",{key:t},l.createElement("strong",null,n+" "+r+":"," "),s)}var u=e[1].any.Attribute.reduce((function(e,t){return e+(Object.keys(t)[0]+" ")+Object.values(t)[0]+", or "}),"").slice(0,-5);return l.createElement("li",{key:t+e},l.createElement("strong",null,n+" "+r+":"," "),""+u)})))),l.createElement("p",null,l.createElement("strong",null,"Description")),l.createElement("p",null,n.description),l.createElement("p",null,l.createElement("strong",null,"Effect")),l.createElement("div",null,(0,a.ZP)(n.effect)),l.createElement("p",null)))}var b=n(3471);function E(e){var t=e.data.allFeatsFeatsYaml.edges[0].node;return l.createElement("div",null,l.createElement(b.Z,null,l.createElement(m,{feat:t})))}}}]);
//# sourceMappingURL=component---src-templates-single-feat-template-js-c4bb43781ff8dc834a5f.js.map