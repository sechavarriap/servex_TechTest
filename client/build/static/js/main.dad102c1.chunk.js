(this["webpackJsonprickandmorty-front"]=this["webpackJsonprickandmorty-front"]||[]).push([[0],{11:function(e,t,c){},19:function(e,t,c){},22:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(12),r=c.n(n),i=(c(19),c(10)),o=c.n(i),l=c(13),j=c(7),b=c(30),u=c(28),d=(c(21),c(11),c(22),c(1)),h=function(){return Object(d.jsxs)("div",{className:"spinner",children:[Object(d.jsx)("div",{className:"double-bounce1"}),Object(d.jsx)("div",{className:"double-bounce2"})]})},O=c(29),x=c(32),m=function(e){var t=e.setCurrentPage,c=e.previousPage,a=e.nextPage;return Object(d.jsx)(u.a,{className:"control-button",children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)("button",{className:"btn btn-dark btn-lg",onClick:function(){t(c)},style:{visibility:c?"visible":"hidden"},children:"Prev. page"}),Object(d.jsx)(x.a,{className:"btn btn-dark btn-lg",onClick:function(){return t(a)},style:{visibility:a?"visible":"hidden"},children:"Next page"})]})})},f=c(31),p=c(14),g=function(e){var t=e.character,c=t.image,a=t.name,s=t.status,n=t.species,r=t.location,i=t.url,o=t.gender,l=t.episode;return Object(d.jsxs)("div",{className:"card character",children:[Object(d.jsxs)("a",{href:i,children:[Object(d.jsx)("div",{className:"overlay overlay-".concat(s),children:Object(d.jsx)(f.a.Img,{src:c,className:"image-".concat(s)})}),Object(d.jsxs)(f.a.Title,{className:"character-name character-name-".concat(s),"data-tip":"".concat(a.length>18?a:""),children:[" ","".concat(a.substring(0,18).trim()," ").concat(a.length>18?"...":"")]}),Object(d.jsx)(p.a,{className:"tooltip"})]}),Object(d.jsx)("div",{className:"state-".concat(s)}),Object(d.jsxs)(f.a.Text,{className:"character-description character-description-".concat(s),children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("i",{className:"fas fa-user-circle"})," ",n]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("i",{className:"fas fa-thumbtack"})," ",r.name]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("i",{className:"fas fa-transgender-alt"})," ",o]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("i",{className:"fas fa-tv"})," ","".concat(l.length," episodes")]})]})]})},v=function(e){var t=e.characters,c=e.loading;return Object(d.jsx)(u.a,{className:"characters",style:{visibility:c?"hidden":"visible"},children:t.map((function(e){return Object(d.jsx)(g,{character:e},e.id)}))})},N=function(){return Object(d.jsxs)(u.a,{className:"error-container",children:[Object(d.jsx)("p",{className:"error-text",children:"Estamos presentando problemas con el servidor, intenta m\xe1s tarde"}),Object(d.jsx)("img",{className:"error-img",src:"https://assets.stickpng.com/images/58f37731a4fa116215a92411.png",alt:"Error"})]})};var y=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(),r=Object(j.a)(n,2),i=r[0],O=r[1],x=Object(a.useState)(),f=Object(j.a)(x,2),p=f[0],g=f[1],y=Object(a.useState)("https://rickandmortyapi.com/api/character"),k=Object(j.a)(y,2),P=k[0],w=k[1],C=Object(a.useState)(!1),S=Object(j.a)(C,2),T=S[0],F=S[1],E=Object(a.useState)(!1),I=Object(j.a)(E,2),M=I[0],B=I[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,a,n,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=P.slice(),e.next=3,fetch(t).catch((function(e){return console.log(e),null}));case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,c.ok?(n=a.results.filter((function(e){return"unknown"!==e.status})),r=a.info.next,i=a.info.prev,s(n),O(r),g(i),setTimeout((function(){return F(!1)}),1e3)):(F(!1),B(!0));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();F(!0),window.scrollTo(0,0),e()}),[P]),Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(b.a,{fluid:!0,children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)("p",{className:"title",children:"The Rick and Morty API"}),Object(d.jsxs)("p",{className:"description",children:["The place to find your prefered characters of the ",Object(d.jsx)("span",{style:{color:"yellowgreen"},children:"Rick and Morty"})," series!"]})]})}),Object(d.jsx)(m,{setCurrentPage:w,previousPage:p,nextPage:i}),M?Object(d.jsx)(N,{}):null,T?Object(d.jsx)(h,{}):null,Object(d.jsx)(v,{loading:T,characters:c}),Object(d.jsx)(m,{setCurrentPage:w,previousPage:p,nextPage:i})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),k()}},[[26,1,2]]]);
//# sourceMappingURL=main.dad102c1.chunk.js.map