(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(16),a=t.n(c),r=t(3),u=t(1),i=t(0),s=function(e){var n=e.filterName,t=e.handleFilter;return Object(i.jsxs)("div",{className:"filter",children:["Filter Names:",Object(i.jsx)("input",{className:"input",value:n,onChange:t})]})},o=function(e){var n=e.addPerson,t=e.newName,c=e.handleNameAddition,a=e.newNumber,r=e.handleNumberAddition;return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{className:"person_form",onSubmit:n,children:[Object(i.jsx)("h2",{children:"Add New Number"}),Object(i.jsxs)("div",{children:["Name:",Object(i.jsx)("input",{className:"input",value:t,onChange:c})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{children:["Number:",Object(i.jsx)("input",{className:"input",value:a,onChange:r})]}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{className:"button",type:"submit",children:"Add"})]})})},l=function(e){var n=e.person,t=e.deletePerson;return Object(i.jsxs)("p",{className:"person",children:[n.key,n.name," ",Object(i.jsx)("br",{}),n.number,Object(i.jsx)("button",{className:"button_del",onClick:t,children:"Delete"})]})},d=t(4),j=t.n(d),b="/api/persons",f=function(){return j.a.get(b).then((function(e){return e.data}))},m=function(){return j.a.get("/api/persons/:id").then((function(e){return e.data}))},h=function(){return j.a.get("/info").then((function(e){return e.data}))},O=function(e){return j.a.post(b,e).then((function(e){return e.data}))},p=function(e,n){return j.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},x=function(e){return j.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},N=function(){var e=Object(u.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],a=Object(u.useState)([]),d=Object(r.a)(a,2),j=(d[0],d[1]),b=Object(u.useState)(""),N=Object(r.a)(b,2),v=(N[0],N[1]),w=Object(u.useState)(""),g=Object(r.a)(w,2),S=g[0],y=g[1],A=Object(u.useState)(""),C=Object(r.a)(A,2),k=C[0],P=C[1],E=Object(u.useState)(""),T=Object(r.a)(E,2),D=T[0],F=T[1],J=Object(u.useState)(""),L=Object(r.a)(J,2),_=L[0],B=L[1],I=Object(u.useState)(""),R=Object(r.a)(I,2),q=R[0],z=R[1];Object(u.useEffect)((function(){f().then((function(e){c(e)}))}),[]),Object(u.useEffect)((function(){m().then((function(e){j(e)}))}),[]),Object(u.useEffect)((function(){h().then((function(e){v(e)}))}),[]);var G=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"error",children:n})},H=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"success",children:n})};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Phonebook"}),_?Object(i.jsx)(G,{message:_}):null,q?Object(i.jsx)(H,{message:q}):null,Object(i.jsx)(s,{filterName:D,handleFilter:function(e){F(e.target.value)}}),Object(i.jsx)(o,{addPerson:function(e){e.preventDefault();var n={name:S,number:k},a=t.find((function(e){return e.name===n.name}));S?k?a?window.confirm("".concat(S," already exists. Replace the number with a new one?"))&&(p(a.id,n).then((function(e){c(t.map((function(n){return n.id!==a.id?n:e}))),z("Number of ".concat(a.name," was updated"))})),setTimeout((function(){z(null)}),3e3)):(O(n).then((function(e){c(t.concat(e))})),y(""),P(""),z("".concat(S," was added")),setTimeout((function(){z(null)}),3e3)):window.confirm("Number missing!"):window.confirm("Name missing!")},newName:S,handleNameAddition:function(e){y(e.target.value)},newNumber:k,handleNumberAddition:function(e){P(e.target.value)}}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)("span",{children:D.length>1?t.filter((function(e){return e.name.toLowerCase().includes(D.toLowerCase())})).map((function(e){return Object(i.jsx)(l,{person:e},e.id)})):t.map((function(e){return Object(i.jsx)(l,{person:e,deletePerson:function(){return function(e){"/api/persons/".concat(e);var n=t.find((function(n){return n.id===e}));window.confirm("Do you really want to delete ".concat(n.name,"?"))&&(x(e).then(c(t.filter((function(n){return n.id!==e})))).catch((function(e){B("".concat(n.name," was already removed from server")),setTimeout((function(){B(null)}),5e3)})),z("Number of ".concat(n.name," was deleted")),setTimeout((function(){z(null)}),3e3))}(e.id)}},e.id)}))})]})]})};t(40);a.a.render(Object(i.jsx)(N,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.432d8c5a.chunk.js.map