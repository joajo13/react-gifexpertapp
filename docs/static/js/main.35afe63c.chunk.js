(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(7),r=a.n(c),i=(a(15),a(2)),s=a(9),u=a(0),o=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{className:"animate__animated animate__fadeInDown",placeholder:"Search gifs...",type:"text",value:r,onChange:function(e){o(e.target.value)}})})},j=a(10),d=a(6),l=a.n(d),m=a(8),p=function(){var e=Object(m.a)(l.a.mark((function e(t){var a,n,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=1FfTbKnMrWkZ9GPXut4SUSt1RjYjzCTp"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.original.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.title,a=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeInDown",children:[Object(u.jsx)("img",{src:a,alt:t}),Object(u.jsxs)("p",{children:[" ",t," "]})]})},b=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){p(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=a.data,r=a.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{className:"animate__animated animate__fadeInDown",children:[" ",t," "]}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(f,Object(j.a)({},e),e.id)}))})]})},h=function(){var e=Object(n.useState)(["DragonBall"]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"top",children:[Object(u.jsx)("h1",{className:"App animate__animated animate__fadeInDown",children:"GidExpertApp"}),Object(u.jsx)(o,{setCategories:c})]}),Object(u.jsx)("hr",{className:"Line"}),Object(u.jsx)("ol",{children:a.map((function(e){return Object(u.jsx)(b,{category:e},e)}))})]})};r.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.35afe63c.chunk.js.map