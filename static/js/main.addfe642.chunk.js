(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{123:function(e,t,a){},126:function(e,t,a){e.exports={header:"Header_header__cHPjA"}},137:function(e,t,a){e.exports=a(172)},142:function(e,t,a){},143:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),l=a.n(c),i=(a(142),a(143),a(128)),o=a(23),m=a(216),u=a(204),d=a(179),E=a(205),s=a(207),f=a(208),h=a(210),v=a(209),b=a(203),p=a(75),k=a(206),g=a(122),j=a.n(g),O=a(211),w=a(173);function y(e){return r.a.createElement("div",null,r.a.createElement(w.a,{id:e.id,variant:"contained",color:"primary",onClick:e.click},e.title))}var x=a(217),C=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(x.a,{id:e.id,checked:c,onClick:function(){l(c=!c)}}))},S=function(){var e=Object(n.useState)([{id:Object(m.a)(),n:"React",filter:"hight"},{id:Object(m.a)(),n:"Material-UI",filter:"low"},{id:Object(m.a)(),n:"JavaScript",filter:"middle"},{id:Object(m.a)(),n:"TDD",filter:"hight"},{id:Object(m.a)(),n:"Books",filter:"low"}]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),g=Object(o.a)(l,2),x=g[0],S=g[1],W=function(e){a.find((function(t){return t.filter===e}))};return r.a.createElement("div",null,r.a.createElement(u.a,{container:!0},r.a.createElement(u.a,{item:!0,xs:2}),r.a.createElement(u.a,{item:!0,xs:8},r.a.createElement(d.a,{elevation:3},r.a.createElement(E.a,null,r.a.createElement(p.a,{variant:"h2",align:"center"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b\u0430 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f"),r.a.createElement(k.a,{id:"filled-basic",label:"Filled",variant:"filled",value:x,onChange:function(e){S(e.currentTarget.value)}}),r.a.createElement(b.a,{"aria-label":"comments",color:"inherit",onClick:function(){""!==x.trim()?(c([].concat(Object(i.a)(a),[{id:Object(m.a)(),n:x,filter:"hight"}])),S("")):alert("\u0412\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u0435\u043b\u0438,\u043d\u0435 \u0434\u0435\u043b\u0430\u0439 \u0442\u0430\u043a \u0431\u043e\u043b\u044c\u0448\u0435 =)")}},r.a.createElement(j.a,{fontSize:"large"})),a.map((function(e){return r.a.createElement(s.a,{key:e.id,dense:!0,button:!0},r.a.createElement(f.a,null,r.a.createElement(C,{id:e.id})),r.a.createElement(v.a,{id:e.id,primary:e.n}),r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement(y,{id:e.id,title:"Delete",click:function(){!function(e){var t=a.filter((function(t){return t.id!==e}));c(t)}(e.id)}}))))})),r.a.createElement(O.a,{variant:"contained",color:"primary","aria-label":"contained primary button group"},r.a.createElement(w.a,{color:"secondary",onClick:function(){W("hight")}},"Hight"),r.a.createElement(w.a,{color:"primary",onClick:function(){W("middle")}},"middle"),r.a.createElement(w.a,{color:"inherit",onClick:function(){W("low")}},"low"))))),r.a.createElement(u.a,{item:!0,xs:2})))},W=a(218),N=a(123),H=a.n(N),T=a(213),B=a(125),A=a.n(B),D=a(124),I=a.n(D);function J(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(" "),m=Object(o.a)(i,2),u=m[0],d=m[1],E=function(){""!==u.trim()?(e.add(u),d("")):l("Title is required")};return r.a.createElement(I.a,{container:!0},r.a.createElement(A.a,{id:e.id,label:"Filled",variant:"filled",value:u,onChange:function(e){d(e.currentTarget.value)},onKeyPress:function(e){l(null),13===e.charCode&&E()},helperText:c,error:!!c}),r.a.createElement(y,{title:"Add",click:E,id:e.id}))}function _(e){var t=Object(n.useState)(0),a=Object(o.a)(t,2),c=a[0],l=a[1],i=function(e){e&&(c+=1),l(c)};return r.a.createElement("div",{className:H.a.item},r.a.createElement(T.a,{fixed:!0},r.a.createElement(u.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(u.a,{item:!0,xs:6},r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f!")),r.a.createElement(u.a,{item:!0,xs:8},r.a.createElement(J,{add:function(e){alert("\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c ".concat(e)),i(e)},id:"1"})),r.a.createElement(W.a,{component:"span"},r.a.createElement(p.a,{variant:"h3"},c)))))}var F=a(53),M=a(11),P=a(126),q=a.n(P),z=a(214),K=a(215),L=a(127),R=a.n(L),U=function(){return r.a.createElement("div",{className:q.a.header},r.a.createElement(z.a,{position:"static"},r.a.createElement(K.a,null,r.a.createElement(b.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(R.a,null)),r.a.createElement(p.a,{variant:"h6"},"News"),r.a.createElement(w.a,{color:"inherit"},"Login"))))};var $=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(U,null),r.a.createElement("div",{className:"nav"},r.a.createElement(F.b,{to:"/homeWork2"},"HomeWork-2"),r.a.createElement(F.b,{to:"/homeWork"},"HomeWork-3")),r.a.createElement("div",{className:"wrapper-content"},r.a.createElement(M.a,{path:"/homeWork2",render:function(){return r.a.createElement(S,null)}}),r.a.createElement(M.a,{path:"/homeWork",render:function(){return r.a.createElement(_,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F.a,null,r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[137,1,2]]]);
//# sourceMappingURL=main.addfe642.chunk.js.map