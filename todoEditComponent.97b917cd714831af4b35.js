(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[3],{67:function(e,t,a){e.exports={Header:"GI565tbmxjb0QnnAlGVdb"}},68:function(e,t,a){e.exports={Wrapper:"_2QxHmRplYApR5tbV-8roo7",Header:"_2G0JvtbHYulhlt-RlvR01R",FormWrapper:"_1CS7wmtE6W7GJq-NNDO9x7",FormContent:"_3be0Zaxml625HIyNbznh4m",FormGroup:"_3-ZspcFf4YFuq-PPySjRhN",Tip:"_2G-TaSfwmkCbpnEzw_zOFP"}},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),l=a(59),c=a(17),o=a(56),s=a(22),m=a(67),d=a.n(m);const p=({save:e,cancel:t})=>r.a.createElement("div",{className:d.a.Header},r.a.createElement("button",{onClick:t,"data-testid":"cancel"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{d:"M19 12H6M12 5l-7 7 7 7"})),r.a.createElement("p",null,"Back")),r.a.createElement("h1",{"data-testid":"title"},"TODO EDIT"),r.a.createElement("span",null," "));var u=a(68),h=a.n(u);t.default=()=>{let{id:e}=Object(l.e)();const t=Object(i.b)(),a=Object(i.c)(e=>e.todo_edit);return Object(n.useEffect)(()=>(t(Object(c.b)(e)),()=>t(Object(c.c)())),[]),r.a.createElement("div",{className:h.a.Wrapper},r.a.createElement(p,{cancel:()=>t(Object(s.a)({model:"todo",action:"list"}))}),!1===a.isLoading&&!0===a.hasFetchedOnce&&r.a.createElement(E,{data:a.item}))};const E=({data:e={}})=>{var t,a,n,l;const s=Object(i.b)(),{handleSubmit:m,setValue:d,register:p,errors:u}=Object(o.a)({defaultValues:{...e}});return r.a.createElement("div",{className:h.a.FormWrapper},r.a.createElement("form",{onSubmit:m(e=>s(Object(c.h)(e))),className:h.a.FormContent},r.a.createElement("div",{className:h.a.FormGroup},r.a.createElement("label",{htmlFor:"title"},"TITLE"),r.a.createElement("input",{id:"title",name:"title",type:"text",autoComplete:"off",ref:p({required:"Required",minLength:5})}),"required"===(null===(t=u.title)||void 0===t?void 0:t.type)&&r.a.createElement("div",{className:h.a.Tip},"Title is required"),"minLength"===(null===(a=u.title)||void 0===a?void 0:a.type)&&r.a.createElement("div",{className:h.a.Tip},"5 characters min length")),r.a.createElement("div",{className:h.a.FormGroup},r.a.createElement("label",{htmlFor:"description"},"DESCRIPTION"),r.a.createElement("textarea",{id:"description",name:"description",rows:"12",ref:p({required:"Required",minLength:5})}),"required"===(null===(n=u.description)||void 0===n?void 0:n.type)&&r.a.createElement("div",{className:h.a.Tip},"Description is required"),"minLength"===(null===(l=u.description)||void 0===l?void 0:l.type)&&r.a.createElement("div",{className:h.a.Tip},"5 characters min length")),r.a.createElement("button",{type:"submit"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),r.a.createElement("polyline",{points:"17 21 17 13 7 13 7 21"}),r.a.createElement("polyline",{points:"7 3 7 8 15 8"})),r.a.createElement("p",null,"Save"))))}}}]);