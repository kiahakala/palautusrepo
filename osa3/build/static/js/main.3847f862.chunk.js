(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(16),a=n.n(c),u=n(3),r=n(1),i=n(0),o=function(e){var t=e.filterName,n=e.handleFilter;return Object(i.jsxs)("div",{className:"filter",children:["Filter Names:",Object(i.jsx)("input",{className:"input",value:t,onChange:n})]})},s=function(e){var t=e.addPerson,n=e.newName,c=e.handleNameAddition,a=e.newNumber,u=e.handleNumberAddition;return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{className:"person_form",onSubmit:t,children:[Object(i.jsx)("h2",{children:"Add New Number"}),Object(i.jsxs)("div",{children:["Name:",Object(i.jsx)("input",{className:"input",value:n,onChange:c})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{children:["Number:",Object(i.jsx)("input",{className:"input",value:a,onChange:u})]}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{className:"button",type:"submit",children:"Add"})]})})},l=function(e){var t=e.person,n=e.deletePerson;return Object(i.jsxs)("p",{className:"person",children:[t.key,t.name," ",Object(i.jsx)("br",{}),t.number,Object(i.jsx)("button",{className:"button_del",onClick:n,children:"Delete"})]})},d=n(4),j=n.n(d),b="/api/persons",f=function(){return j.a.get(b).then((function(e){return e.data}))},m=function(e){return j.a.get("".concat(b,"/").concat(e)).then((function(e){return e.data}))},h=function(e){return j.a.get(b/e).then((function(e){return e.data}))},O=function(e){return j.a.post(b,e).then((function(e){return e.data}))},p=function(e,t){return j.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))},x=function(e){return j.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},N=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),d=Object(u.a)(a,2),j=(d[0],d[1]),b=Object(r.useState)(""),N=Object(u.a)(b,2),v=(N[0],N[1]),w=Object(r.useState)(""),g=Object(u.a)(w,2),S=g[0],y=g[1],A=Object(r.useState)(""),C=Object(u.a)(A,2),k=C[0],P=C[1],E=Object(r.useState)(""),T=Object(u.a)(E,2),D=T[0],F=T[1],J=Object(r.useState)(""),L=Object(u.a)(J,2),_=L[0],B=L[1],I=Object(r.useState)(""),R=Object(u.a)(I,2),q=R[0],z=R[1];Object(r.useEffect)((function(){f().then((function(e){c(e)}))}),[]),Object(r.useEffect)((function(){m().then((function(e){j(e)}))})),Object(r.useEffect)((function(){h().then((function(e){v(e)}))}));var G=function(e){var t=e.message;return null===t?null:Object(i.jsx)("div",{className:"error",children:t})},H=function(e){var t=e.message;return null===t?null:Object(i.jsx)("div",{className:"success",children:t})};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Phonebook"}),_?Object(i.jsx)(G,{message:_}):null,q?Object(i.jsx)(H,{message:q}):null,Object(i.jsx)(o,{filterName:D,handleFilter:function(e){F(e.target.value)}}),Object(i.jsx)(s,{addPerson:function(e){e.preventDefault();var t={name:S,number:k},a=n.find((function(e){return e.name===t.name}));a?window.confirm("".concat(S," already exists. Replace the number with a new one?"))&&(p(a.id,t).then((function(e){c(n.map((function(t){return t.id!==a.id?t:e}))),z("Number of ".concat(a.name," was updated"))})),setTimeout((function(){z(null)}),3e3)):(O(t).then((function(e){c(n.concat(e))})),y(""),P(""),z("".concat(S," was added")),setTimeout((function(){z(null)}),3e3))},newName:S,handleNameAddition:function(e){y(e.target.value)},newNumber:k,handleNumberAddition:function(e){P(e.target.value)}}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)("span",{children:D.length>1?n.filter((function(e){return e.name.toLowerCase().includes(D.toLowerCase())})).map((function(e){return Object(i.jsx)(l,{person:e},e.id)})):n.map((function(e){return Object(i.jsx)(l,{person:e,deletePerson:function(){return function(e){"/api/persons/".concat(e);var t=n.find((function(t){return t.id===e}));window.confirm("Do you really want to delete ".concat(t.name,"?"))&&(x(e).then(c(n.filter((function(t){return t.id!==e})))).catch((function(e){B("".concat(t.name," was already removed from server")),setTimeout((function(){B(null)}),5e3)})),z("Number of ".concat(t.name," was deleted")),setTimeout((function(){z(null)}),3e3))}(e.id)}},e.id)}))})]})]})};n(40);a.a.render(Object(i.jsx)(N,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.3847f862.chunk.js.map