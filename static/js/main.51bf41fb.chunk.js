(this["webpackJsonprodems.dev"]=this["webpackJsonprodems.dev"]||[]).push([[0],{18:function(n,t,a){n.exports={collapser:"Nav_collapser__F4hdF",collapsed:"Nav_collapsed__38uVM"}},37:function(n,t,a){},38:function(n,t,a){},43:function(n,t,a){"use strict";a.r(t);var e=a(1),o=a(0),c=a.n(o),r=a(26),i=a.n(r),s=a(21),l=(a(37),a(3)),d=(a(38),a(15)),u=a(5),p=a(4),b=421,j=768,h=1024,f=1366,m=1680,O=1920,S=1744,x={SM_PHONE:"(max-width: ".concat(420,"px)"),PHONE:"(min-width: ".concat(b,"px)"),TABLET:"(min-width: ".concat(j,"px)"),TABLET_LANDSCAPE:"(min-width: ".concat(h,"px)"),SM_DESKTOP:"(min-width: ".concat(f,"px)"),DESKTOP:"(min-width: ".concat(m,"px)"),LG_DESKTOP:"(min-width: ".concat(O,"px)"),DESKTOP_MAX:"(min-width: ".concat(S,"px)")},g="#161616",k="#2c2c2c",N="#f1f1f1",w="#4bb9ff",v="#049cfc",P="#f8f8af",D=a(16),y=a(10),T=a(17),E=a(2),z=a.n(E);function H(){var n=Object(l.a)(["\n  ","\n"]);return H=function(){return n},n}var L=p.b.div.attrs((function(n){return{display:n.flex?"flex":"grid"}}))(H(),(function(n){return"\n  display: ".concat(n.hideMobile?"none":n.display,";\n\n  ").concat(n.align?"align-items: ".concat(n.align,";"):"","\n  ").concat(n.justify?"justify-content: ".concat(n.justify,";"):"","\n  ").concat(!0===n.subGrid?"grid-template-columns: inherit;grid-gap: inherit;":"","\n  grid-area: ").concat(isNaN(n.smPhone.rowStart)?"auto":"".concat(n.smPhone.rowStart)," /\n  ").concat(isNaN(n.smPhone.colStart)?"auto":"".concat(n.smPhone.colStart)," / \n    ").concat(isNaN(n.smPhone.rowSpan)?"auto":"span ".concat(n.smPhone.rowSpan)," / \n    ").concat(isNaN(n.smPhone.colSpan)?"auto":"span ".concat(n.smPhone.colSpan),";\n    @media ").concat(x.PHONE," {\n      ").concat(null!==n.phone?"\n      grid-area: ".concat(isNaN(n.phone.rowStart)?"auto":"".concat(n.phone.rowStart)," /\n      ").concat(isNaN(n.phone.colStart)?"auto":"".concat(n.phone.colStart)," / \n        ").concat(isNaN(n.phone.rowSpan)?"auto":"span ".concat(n.phone.rowSpan)," / \n        ").concat(isNaN(n.phone.colSpan)?"auto":"span ".concat(n.phone.colSpan),";\n      "):"","\n    }\n\n    @media ").concat(x.TABLET," {\n      grid-area: ").concat(isNaN(n.tablet.rowStart)?"auto":"".concat(n.tablet.rowStart)," /\n      ").concat(isNaN(n.tablet.colStart)?"auto":"".concat(n.tablet.colStart)," / \n        ").concat(isNaN(n.tablet.rowSpan)?"auto":"span ".concat(n.tablet.rowSpan)," / \n        ").concat(isNaN(n.tablet.colSpan)?"auto":"span ".concat(n.tablet.colSpan),";\n    }\n\n    @media ").concat(x.TABLET_LANDSCAPE," {\n      display: ").concat(n.hideDesktop?"none":n.display,";\n      grid-area: ").concat(isNaN(n.tabletHz.rowStart)?"auto":"".concat(n.tabletHz.rowStart)," /\n      ").concat(isNaN(n.tabletHz.colStart)?"auto":"".concat(n.tabletHz.colStart)," / \n        ").concat(isNaN(n.tabletHz.rowSpan)?"auto":"span ".concat(n.tabletHz.rowSpan)," / \n        ").concat(isNaN(n.tabletHz.colSpan)?"auto":"span ".concat(n.tabletHz.colSpan),";\n    }\n\n    @media ").concat(x.SM_DESKTOP," {\n      ").concat(null!==n.smDesktop?"\n      grid-area: ".concat(isNaN(n.smDesktop.rowStart)?"auto":"".concat(n.smDesktop.rowStart)," /\n      ").concat(isNaN(n.smDesktop.colStart)?"auto":"".concat(n.smDesktop.colStart)," / \n        ").concat(isNaN(n.smDesktop.rowSpan)?"auto":"span ".concat(n.smDesktop.rowSpan)," / \n        ").concat(isNaN(n.smDesktop.colSpan)?"auto":"span ".concat(n.smDesktop.colSpan),";\n      "):"","\n    }\n\n    @media ").concat(x.DESKTOP," {\n      ").concat(null!==n.desktop?"\n      grid-area: ".concat(isNaN(n.desktop.rowStart)?"auto":"".concat(n.desktop.rowStart)," /\n      ").concat(isNaN(n.desktop.colStart)?"auto":"".concat(n.desktop.colStart)," / \n        ").concat(isNaN(n.desktop.rowSpan)?"auto":"span ".concat(n.desktop.rowSpan)," / \n        ").concat(isNaN(n.desktop.colSpan)?"auto":"span ".concat(n.desktop.colSpan),";\n      "):"","\n    }\n\n    @media ").concat(x.LG_DESKTOP," {\n      ").concat(null!==n.lgDesktop?"\n      grid-area: ".concat(isNaN(n.lgDesktop.rowStart)?"auto":"".concat(n.lgDesktop.rowStart)," /\n      ").concat(isNaN(n.lgDesktop.colStart)?"auto":"".concat(n.lgDesktop.colStart)," / \n        ").concat(isNaN(n.lgDesktop.rowSpan)?"auto":"span ".concat(n.lgDesktop.rowSpan)," / \n        ").concat(isNaN(n.lgDesktop.colSpan)?"auto":"span ".concat(n.lgDesktop.colSpan),";\n      "):"","\n    }\n  ")})),A={rowStart:"auto",rowSpan:"auto",colStart:"auto",colSpan:4},C={rowStart:"auto",rowSpan:"auto",colStart:"auto",colSpan:6},M=Object(o.forwardRef)((function(n,t){var a=n.subGrid,o=n.hideMobile,c=n.hideDesktop,r=n.smPhone,i=n.phone,s=n.tablet,l=n.tabletHz,d=n.smDesktop,u=n.desktop,p=n.lgDesktop,b=n.className,j=n.children,h=n.align,f=n.justify,m=n.cssClasses,O=n.flex,S=Object(T.a)(n,["subGrid","hideMobile","hideDesktop","smPhone","phone","tablet","tabletHz","smDesktop","desktop","lgDesktop","className","children","align","justify","cssClasses","flex"]);return Object(e.jsx)(L,Object(y.a)(Object(y.a)({smPhone:Object(y.a)(Object(y.a)({},A),r),phone:i,tablet:Object(y.a)(Object(y.a)({},C),s),tabletHz:Object(y.a)(Object(y.a)({},C),l),smDesktop:d,desktop:u,lgDesktop:p,className:"".concat(b," ").concat(m),subGrid:a,hideMobile:o,hideDesktop:c,align:h,justify:f,flex:O},S),{},{ref:t,children:j}))})),_={rowStart:z.a.oneOfType([z.a.oneOf(["auto"]),z.a.number]),rowSpan:z.a.oneOfType([z.a.oneOf(["auto"]),z.a.number]),colStart:z.a.oneOfType([z.a.oneOf(["auto"]),z.a.number]),colSpan:z.a.oneOfType([z.a.oneOf(["auto"]),z.a.number])};M.propTypes={smPhone:z.a.shape(_),phone:z.a.shape(_),tablet:z.a.shape(_),tabletHz:z.a.shape(_),smDesktop:z.a.shape(_),desktop:z.a.shape(_),lgDesktop:z.a.shape(_),subGrid:z.a.bool,children:z.a.node.isRequired,hideMobile:z.a.bool,hideDesktop:z.a.bool,className:z.a.string,align:z.a.string,justify:z.a.string,flex:z.a.bool,cssClasses:z.a.string},M.defaultProps={smPhone:A,phone:null,tablet:null,tabletHz:C,smDesktop:null,desktop:null,lgDesktop:null,subGrid:!1,hideMobile:!1,hideDesktop:!1,className:"",align:"",justify:"",cssClasses:"",flex:!1};var B=M;function K(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  padding: 16px;\n  grid-gap: 1rem;\n\n  @media "," {\n    ","\n  }\n\n  @media "," {\n    grid-template-columns: repeat(6, 1fr);\n  }\n\n  @media "," {\n    grid-template-columns: repeat(12, 1fr);\n  }\n\n  @media "," {\n  }\n\n  @media "," {\n  }\n\n  @media "," {\n    margin: 0 auto;\n    ","\n    ","\n  }\n\n  @media "," {\n  }\n"]);return K=function(){return n},n}var F=p.b.div(K(),x.PHONE,(function(n){return n.noPadding?"":"padding: 32px;"}),x.TABLET,x.TABLET_LANDSCAPE,x.SM_DESKTOP,x.DESKTOP,x.DESKTOP_MAX,(function(n){return n.noPadding?"":"padding: 32px 0;"}),(function(n){return n.noPadding?"":"max-width: 1680px;"}),x.LG_DESKTOP),G=function(n){var t=n.children,a=n.noPadding;return Object(e.jsx)(F,{noPadding:a,children:t})};G.defaultProps={noPadding:!1};var R=G;function W(){var n=Object(l.a)(["\n  color: ",";\n"]);return W=function(){return n},n}function X(){var n=Object(l.a)(["\n  color: ",";\n"]);return X=function(){return n},n}function q(){var n=Object(l.a)(["\n  color: ",";\n"]);return q=function(){return n},n}function I(){var n=Object(l.a)(["\n  font-family: 'Fira Code', monospace;\n  font-size: ",";\n"]);return I=function(){return n},n}var J=p.b.span(I(),(function(n){return n.size})),V=Object(p.b)(J)(q(),v),Q=Object(p.b)(J)(X(),P),U=Object(p.b)(J)(W(),N),Y=function(n){var t=n.size,a=Object(T.a)(n,["size"]);return Object(e.jsxs)(J,Object(y.a)(Object(y.a)({size:t},a),{},{children:[Object(e.jsx)(V,{children:"rodems"}),Object(e.jsx)(U,{children:"."}),Object(e.jsx)(Q,{children:"dev"}),Object(e.jsx)(U,{children:"();"})]}))};Y.defaultProps={size:"1rem"};var Z=Y;function $(){var n=Object(l.a)(["\n  y: 60;\n\n  &.clicked {\n    transform: rotate(-45deg) translate(-50%, 0%);\n    width: 120px;\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(l.a)(["\n  y: 30;\n  &.clicked {\n    opacity: 0;\n    transform: translateX(-200px);\n  }\n"]);return nn=function(){return n},n}function tn(){var n=Object(l.a)(["\n  &.clicked {\n    transform: rotate(45deg) translate(10%, -18%);\n    width: 120px;\n  }\n"]);return tn=function(){return n},n}function an(){var n=Object(l.a)(["\n  fill: white;\n  transition: all 250ms;\n  width: 100px;\n  height: 10px;\n"]);return an=function(){return n},n}function en(){var n=Object(l.a)(["\n  fill: white;\n  transition: all 250ms;\n  width: 25px;\n  height: 25px;\n"]);return en=function(){return n},n}var on=p.b.svg(en()),cn=p.b.rect(an()),rn=Object(p.b)(cn)(tn()),sn=Object(p.b)(cn)(nn()),ln=Object(p.b)(cn)($()),dn=Object(o.forwardRef)((function(n,t){var a=n.clicked;return Object(e.jsxs)(on,{viewBox:"0 0 100 80","aria-hidden":!0,ref:t,"data-testid":"burger-svg",children:[Object(e.jsx)(rn,{className:a?"clicked":""}),Object(e.jsx)(sn,{className:a?"clicked":""}),Object(e.jsx)(ln,{className:a?"clicked":""})]})}));dn.propTypes={clicked:z.a.bool.isRequired};var un=dn;function pn(){var n=Object(l.a)(["\n  position: relative;\n\n  &:before,\n  &:after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 2px;\n    background-color: ",";\n    visibility: hidden;\n    opacity: 0;\n    transition: all 600ms ease-in-out;\n  }\n\n  &:before {\n    top: 0;\n    right: 0;\n  }\n\n  &:after {\n    bottom: 0;\n    left: 0;\n  }\n\n  &:focus,\n  &:hover {\n    color: ",";\n\n    &:after,\n    &:before {\n      opacity: 1;\n      visibility: visible;\n      width: 100%;\n    }\n  }\n"]);return pn=function(){return n},n}var bn=Object(p.b)(d.b)(pn(),P,w);function jn(){var n=Object(l.a)(["\n  @media "," {\n    display: none;\n  }\n"]);return jn=function(){return n},n}function hn(){var n=Object(l.a)(["\n  padding: 0 0 1rem;\n\n  @media "," {\n    padding: unset;\n  }\n"]);return hn=function(){return n},n}function fn(){var n=Object(l.a)(["\n  display: grid;\n  text-align: center;\n\n  @media "," {\n    justify-content: flex-end;\n  }\n"]);return fn=function(){return n},n}function mn(){var n=Object(l.a)(["\n  font-weight: bold;\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n\n  @media "," {\n    text-align: right;\n  }\n"]);return mn=function(){return n},n}var On=Object(p.b)(bn)(mn(),v,w,x.TABLET),Sn=Object(p.b)(B)(fn(),x.TABLET),xn=Object(p.b)(Sn)(hn(),x.TABLET),gn=Object(p.b)(xn)(jn(),x.TABLET),kn=function(n){var t=n.callback;return Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(gn,{smPhone:{colSpan:4},tablet:{colStart:3,colSpan:1},tabletHz:{colStart:9,colSpan:1},children:Object(e.jsx)(On,{className:"nav-link",to:"/",onClick:function(){return t(!1)},children:"Home"})}),Object(e.jsx)(xn,{smPhone:{colSpan:4},tablet:{colStart:4,colSpan:1},tabletHz:{colStart:10,colSpan:1},children:Object(e.jsx)(On,{className:"nav-link",to:"/about",onClick:function(){return t(!1)},children:"About"})}),Object(e.jsx)(xn,{smPhone:{colSpan:4},tablet:{colStart:5,colSpan:1},tabletHz:{colStart:11,colSpan:1},children:Object(e.jsx)(On,{className:"nav-link",to:"/projects",onClick:function(){return t(!1)},children:"Projects"})}),Object(e.jsx)(Sn,{smPhone:{colSpan:4},tablet:{colStart:6,colSpan:1},tabletHz:{colStart:12,colSpan:1},children:Object(e.jsx)(On,{className:"nav-link",to:"/contact",onClick:function(){return t(!1)},children:"Contact"})})]})},Nn=a(18),wn=a.n(Nn);function vn(){var n=Object(l.a)(["\n  @media screen and (max-width: ","px) {\n    background-color: transparent;\n    text-align: left;\n    border: none;\n    padding: 0;\n    margin: 0;\n    height: 25px;\n    width: 25px;\n    display: flex;\n  }\n\n  @media "," {\n    pointer-events: none;\n  }\n"]);return vn=function(){return n},n}function Pn(){var n=Object(l.a)(["\n  @media screen and (max-width: ","px) {\n    background-color: ",";\n    grid-column: span 4;\n\n    &:not(.",") {\n      padding-top: 32px;\n      padding-bottom: 32px;\n    }\n  }\n\n  @media "," {\n    display: grid;\n  }\n"]);return Pn=function(){return n},n}function Dn(){var n=Object(l.a)(["\n  display: grid;\n  ",";\n\n  @media "," {\n    visibility: hidden;\n    display: none;\n  }\n"]);return Dn=function(){return n},n}function yn(){var n=Object(l.a)(["\n  background-color: ",";\n"]);return yn=function(){return n},n}var Tn=p.b.nav(yn(),k),En=Object(p.b)(B).attrs((function(n){return{show:n.show}}))(Dn(),(function(n){return n.show?"z-index: 1;":""}),x.TABLET),zn=p.b.div(Pn(),j,g,wn.a.collapsed,x.TABLET),Hn=p.b.button(vn(),j,x.TABLET),Ln=function(n){var t=n.windowWidth,a=Object(o.useRef)(),c=Object(o.useState)(!1),r=Object(D.a)(c,2),i=r[0],s=r[1],l=function(n){s(n)};return Object(o.useEffect)((function(){t>=j&&s(!1)}),[t,s]),Object(e.jsxs)(Tn,{children:[Object(e.jsxs)(R,{children:[Object(e.jsx)(B,{smPhone:{colSpan:2},tablet:{colSpan:1},tabletHz:{colSpan:2},flex:!0,children:Object(e.jsx)(bn,{className:"nav-link",to:"/",title:"home",onClick:function(){return l(!1)},children:Object(e.jsx)(Z,{"aria-hidden":!0})})}),t<j?Object(e.jsx)(e.Fragment,{children:Object(e.jsx)(En,{smPhone:{colSpan:2},tabletHz:{colSpan:2},align:"center",justify:"right",show:i,children:Object(e.jsx)(Hn,{type:"button","aria-controls":"navigation-menu",onClick:function(n){n.stopPropagation(),l(!i)},"aria-pressed":i,"aria-label":"".concat(i?"close":"open"," the navigation menu"),"data-testid":"burger-button",children:Object(e.jsx)(un,{clicked:i})})})}):Object(e.jsx)(kn,{callback:l,displayMobileNav:i})]}),t<j?Object(e.jsx)(zn,{ref:a,subGrid:!0,"aria-expanded":i,id:"navigation-menu",smPhone:{colSpan:4},tablet:{colStart:3,colSpan:2},tabletHz:{colStart:3,colSpan:10},show:i,className:"".concat(wn.a.collapser," ").concat(i?"":wn.a.collapsed),"data-testid":"mobile-nav-menu",children:Object(e.jsx)(kn,{callback:l})}):""]})},An=function(){return Object(e.jsx)(R,{children:Object(e.jsx)(B,{children:"Hello World!"})})},Cn=function(){var n=Object(o.useState)(0),t=Object(D.a)(n,2),a=t[0],e=t[1];return Object(o.useLayoutEffect)((function(){function n(){e(window.innerWidth)}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),a},Mn=function(){return Object(e.jsx)(R,{children:Object(e.jsx)(B,{children:"About Me"})})},_n=function(){return Object(e.jsx)(R,{children:Object(e.jsx)(B,{children:"My Projects"})})},Bn=function(){return Object(e.jsx)(R,{children:Object(e.jsx)(B,{children:"Contact Me"})})};function Kn(){var n=Object(l.a)(["\n  a:not(.nav-link) {\n    font-weight: bold;\n    color: ",";\n    text-decoration: underline;\n    &:hover {\n      color: ",";\n      background-color: ",";\n    }\n  }\n"]);return Kn=function(){return n},n}var Fn=Object(p.a)(Kn(),v,g,P),Gn=function(){return Object(e.jsxs)(d.a,{basename:"/","data-testid":"hash-router",children:[Object(e.jsx)(Fn,{}),Object(e.jsx)(Ln,{windowWidth:Cn()}),Object(e.jsx)(u.a,{exact:!0,path:"/",component:An}),Object(e.jsx)(u.a,{path:"/about",component:Mn}),Object(e.jsx)(u.a,{path:"/projects",component:_n}),Object(e.jsx)(u.a,{path:"/contact",component:Bn})]})},Rn=function(n){n&&n instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,e=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;a(n),e(n),o(n),c(n),r(n)}))};(0,i.a.hydrate)(Object(e.jsx)(c.a.StrictMode,{children:Object(e.jsxs)(s.b,{children:[Object(e.jsxs)(s.a,{children:[Object(e.jsx)("title",{children:"rodems.dev();"}),Object(e.jsx)("meta",{name:"description",content:"Personal website for Corey Rodems"}),Object(e.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(e.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap",rel:"stylesheet"})]}),Object(e.jsx)(Gn,{})]})}),document.getElementById("root")),Rn()}},[[43,1,2]]]);
//# sourceMappingURL=main.51bf41fb.chunk.js.map