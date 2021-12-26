(this["webpackJsonppractice-app"]=this["webpackJsonppractice-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(7),r=a.n(s),i=(a(15),a(16),a(3)),l=a(4),j=a(2),d={searchkey:"",startDate:"",endDate:""},b=function(e,t){switch(t.type){case"searchkey":return Object(i.a)(Object(i.a)({},e),{},{searchkey:t.data});case"startDate":return Object(i.a)(Object(i.a)({},e),{},{startDate:t.data});case"endDate":return Object(i.a)(Object(i.a)({},e),{},{endDate:t.data});case"reset":return d;default:return e}};function o(e){var t=e.sendData,a=Object(c.useState)(!1),n=Object(l.a)(a,2),s=n[0],r=n[1],o=Object(c.useState)(!1),u=Object(l.a)(o,2),h=u[0],O=u[1],m=Object(c.useReducer)(b,d),p=Object(l.a)(m,2),f=p[0],x=p[1];Object(c.useEffect)((function(){r(!1)}),[f.searchkey]),Object(c.useEffect)((function(){O(!1)}),[f.startDate,f.endDate]);var v=function(e){e.preventDefault(),x({type:e.target.id,data:e.target.value})};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Search Articles"}),Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==f.searchkey&&f.endDate>=f.startDate?(t(Object(i.a)({},f)),x({type:"reset"})):(""===f.searchkey&&r(!0),f.endDate<f.startDate&&O(!0))},className:"form-main",children:[Object(j.jsxs)("div",{className:"inputbox",children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsxs)("label",{htmlFor:"searchkey",className:"form-label",children:["Search Topic",Object(j.jsx)("span",{className:"red",children:"*"})]}),Object(j.jsx)("input",{type:"text",value:f.searchkey,onChange:v,className:"form-control",id:"searchkey","aria-describedby":"emailHelp",placeholder:"Enter Your Topic of Interest"}),Object(j.jsx)("span",{className:s?"red":"hide",children:" Please fill the required field "})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"startDate",className:"form-label",children:"Start Date"}),Object(j.jsx)("input",{type:"date",value:f.startDate,onChange:v,className:"form-control",id:"startDate"})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{className:"form-label",htmlFor:"endDate",children:"End Date"}),Object(j.jsx)("input",{type:"date",value:f.endDate,onChange:v,className:"form-control",id:"endDate"}),Object(j.jsx)("span",{className:h?"red":"hide",children:" Enter correct start and end dates"})]})]})]}),Object(j.jsx)("button",{type:"submit",className:"btn-main btn btn-primary",children:"Get Articles"})]})})]})}var u=n.a.memo(o),h=a(6),O=a.n(h),m=a(8),p=a(9),f=function(e,t){return"set"===t.type?t.data:e};function x(e){var t=e.inputdata,a=Object(c.useReducer)(f,{}),n=Object(l.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(-1),d=Object(l.a)(i,2),b=d[0],o=d[1],u=Object(c.useState)(0),h=Object(l.a)(u,2),x=h[0],v=h[1],y=function(){var e=Object(m.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r({type:"set",data:t.response.docs});case 2:return e.next=4,o(0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){if(""!==t.searchkey){o(1);var e="".concat("https://api.nytimes.com/svc/search/v2/articlesearch.json","?api-key=").concat("omWzfc2BGpS20PfbCTWB6eaVUOGbF1qd","&page=").concat(x,"&q=").concat(t.searchkey,'&fq=document_type:("article")');""!==t.startDate&&(e+="&begin_date=".concat(t.startDate,"&end_date=").concat(t.endDate)),fetch(e).then((function(e){return e.json()})).then((function(e){y(e)})).catch((function(e){console.error(e)}))}}),[t,x]),Object(c.useEffect)((function(){v(0)}),[t]);var D=Object.entries(s),N=Object(j.jsxs)("div",{className:"result",children:[Object(j.jsxs)("span",{children:['Showing results for "',t.searchkey,'"']}),Object(j.jsx)("div",{className:"card-deck",children:D.map((function(e,t){var a=e[1];return console.log(a),a.multimedia.length>0?Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{className:"card-img-top",src:"https://www.nytimes.com/".concat(a.multimedia[0].url),alt:"Error Loading"}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:Object(j.jsx)("a",{href:a.web_url,target:"_blank",rel:"noreferrer",children:a.headline.main})}),Object(j.jsx)("p",{className:"card-text",children:a.abstract})]})]},t):Object(j.jsx)(j.Fragment,{})}))}),Object(j.jsxs)("div",{className:"next-prev-btn",children:[Object(j.jsx)("button",{className:"btn-main btn btn-primary",onClick:function(){0!==x&&v(x-1)},children:"Previous"}),Object(j.jsx)("h4",{children:x+1}),Object(j.jsx)("button",{className:"btn-main btn btn-primary",onClick:function(){v(x+1)},children:"Next"})]})]});return-1===b?Object(j.jsx)(j.Fragment,{}):b?Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Please wait while we get your Articles"}),Object(j.jsx)(p.a,{postStyle:"STYLE_FOUR",col:4,row:1,gap:10})]}):N}var v=n.a.memo(x),y=a(10),D={searchkey:"",startDate:"",endDate:""};var N=function(){var e=Object(c.useState)(D),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{sendData:function(e){!1===Object(y.isEqual)(a,e)&&n(Object(i.a)({},e))}}),Object(j.jsx)(v,{inputdata:Object(i.a)({},a)})]})};var g=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(N,{})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};a(23);r.a.render(Object(j.jsx)(g,{}),document.getElementById("root")),k()}},[[24,1,2]]]);
//# sourceMappingURL=main.cc736f3f.chunk.js.map