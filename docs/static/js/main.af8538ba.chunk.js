(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(10),c=a.n(r),i=a(4),s=a(3),l=a(1),o=function(e){var t=e.setCategories,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],o=r[1];return Object(l.jsx)("div",{children:Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>=2&&t((function(e){return[c].concat(Object(s.a)(e))}))},children:Object(l.jsx)("input",{type:"text",value:c,onChange:function(e){o(e.target.value)}})})})},d=a(0),u=a(9),j=a.n(u),h=a(11),m=function(){var e=Object(h.a)(j.a.mark((function e(t){var a,n,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.giphy.com/v1/gifs/search?api_key=4lrQF3ryJ0lyRlm8vKohQ3QvmLbmEK3g&limit=10&q=",e.next=3,fetch("https://api.giphy.com/v1/gifs/search?api_key=4lrQF3ryJ0lyRlm8vKohQ3QvmLbmEK3g&limit=10&q="+t);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,r=n.data,c=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url,giphyUrl:e.url}})),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.id,a=e.title,n=e.url,r=e.giphyUrl;return console.log("hhhhhhh",a,t,n,r),Object(l.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-12 animate__animated animate__flip",children:Object(l.jsxs)("div",{className:"card card-gif",children:[Object(l.jsx)("img",{src:n,className:"card-img-top",alt:""}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:a}),Object(l.jsx)("a",{href:r,className:"btn btn-primary",children:"Ver en GYPHY"})]})]})})},b=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){m(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),r=a.data,c=a.loading;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"animate__animated animate__lightSpeedInRight",children:t}),c?Object(l.jsx)("div",{className:"loader",children:"Loading..."}):"",Object(l.jsx)("div",{className:"row",children:r.map((function(e){return Object(l.jsx)(p,Object(d.a)({},e),e.id)}))})]})},f=function(){var e=Object(n.useState)(["Dragon ball"]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"animate__animated animate__lightSpeedInRight",children:" GifExpertAppJS "}),Object(l.jsx)(o,{setCategories:r}),Object(l.jsx)("hr",{}),a.map((function(e){return Object(l.jsx)(b,{category:e},e)}))]})};a(18),a(21),a(19),a(20);c.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.af8538ba.chunk.js.map