(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(16),a=t.n(c),r=t(3),u=t(2),i=t(0),s=function(e){var n=e.filterName,t=e.handleFilter;return Object(i.jsxs)("div",{className:"filter",children:["Filter Names:",Object(i.jsx)("input",{className:"input",value:n,onChange:t})]})},o=function(e){var n=e.addPerson,t=e.newName,c=e.handleNameAddition,a=e.newNumber,r=e.handleNumberAddition;return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{className:"person_form",onSubmit:n,children:[Object(i.jsx)("h2",{children:"Add New Number"}),Object(i.jsxs)("div",{children:["Name:",Object(i.jsx)("input",{className:"input",value:t,onChange:c})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{children:["Number:",Object(i.jsx)("input",{className:"input",value:a,onChange:r})]}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{className:"button",type:"submit",children:"Add"})]})})},l=function(e){var n=e.person,t=e.deletePerson;return Object(i.jsxs)("p",{className:"person",children:[n.key,n.name," ",Object(i.jsx)("br",{}),n.number,Object(i.jsx)("button",{className:"button_del",onClick:t,children:"Delete"})]})},d=t(4),j=t.n(d),m="/api/persons",b=function(){return j.a.get(m).then((function(e){return e.data}))},f=function(e){return j.a.post(m,e).then((function(e){return e.data}))},h=function(e,n){return j.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},O=function(e){return j.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},p=function(){var e=Object(u.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],a=Object(u.useState)(""),d=Object(r.a)(a,2),j=d[0],m=d[1],p=Object(u.useState)(""),N=Object(r.a)(p,2),x=N[0],v=N[1],w=Object(u.useState)(""),g=Object(r.a)(w,2),y=g[0],S=g[1],A=Object(u.useState)(""),C=Object(r.a)(A,2),k=C[0],P=C[1],T=Object(u.useState)(""),D=Object(r.a)(T,2),F=D[0],E=D[1];Object(u.useEffect)((function(){b().then((function(e){c(e)}))}),[]);var J=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"error",children:n})},L=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"success",children:n})};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Phonebook"}),k?Object(i.jsx)(J,{message:k}):null,F?Object(i.jsx)(L,{message:F}):null,Object(i.jsx)(s,{filterName:y,handleFilter:function(e){S(e.target.value)}}),Object(i.jsx)(o,{addPerson:function(e){e.preventDefault();var n={name:j,number:x},a=t.find((function(e){return e.name===n.name}));j?x?a?window.confirm("".concat(j," already exists. Replace the number with a new one?"))&&(h(a.id,n).then((function(e){c(t.map((function(n){return n.id!==a.id?n:e}))),E("Number of ".concat(a.name," was updated"))})),setTimeout((function(){E(null)}),3e3)):(f(n).then((function(e){c(t.concat(e)),m(""),v("")})).catch((function(e){E(null),P("Name or number is too short!"),setTimeout((function(){P(null)}),3e3)})),E("".concat(j," was added")),setTimeout((function(){E(null)}),3e3)):window.confirm("Number missing!"):window.confirm("Name missing!")},newName:j,handleNameAddition:function(e){m(e.target.value)},newNumber:x,handleNumberAddition:function(e){v(e.target.value)}}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)("span",{children:y.length>1?t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())})).map((function(e){return Object(i.jsx)(l,{person:e},e.id)})):t.map((function(e){return Object(i.jsx)(l,{person:e,deletePerson:function(){return function(e){"/api/persons/".concat(e);var n=t.find((function(n){return n.id===e}));window.confirm("Do you really want to delete ".concat(n.name,"?"))&&(O(e).then(c(t.filter((function(n){return n.id!==e})))).catch((function(e){P("".concat(n.name," was already removed from server")),setTimeout((function(){P(null)}),3e3)})),E("Number of ".concat(n.name," was deleted")),setTimeout((function(){E(null)}),3e3))}(e.id)}},e.id)}))})]})]})};t(40);a.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.cb22f73a.chunk.js.map