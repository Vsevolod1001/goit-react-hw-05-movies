"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[184],{4184:function(e,t,r){r.r(t),r.d(t,{MoviesPage:function(){return v}});var n=r(5861),a=r(885),c=r(7757),u=r.n(c),s=r(2791),i=r(9177),o=r(501),p=r(6871),f=r(6373),l=r(184),v=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],v=(0,o.lr)(),h=(0,a.Z)(v,2),m=h[0],d=h[1],x=(0,s.useState)(!1),y=(0,a.Z)(x,2),g=y[0],b=y[1],w=(0,p.TH)(),k=m.get("query");(0,s.useEffect)((function(){function e(){return(e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,(0,i.Gl)(k);case 4:0===(t=e.sent).length&&(alert('\u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 "'.concat(k,'", \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e')),d("")),c(t),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,9,11,14]])})))).apply(this,arguments)}null!==k&&function(){e.apply(this,arguments)}()}),[k,d]);return(0,l.jsxs)(l.Fragment,{children:[g&&(0,l.jsx)(f.gy,{}),(0,l.jsx)("div",{children:(0,l.jsx)("header",{className:"searchbar",children:(0,l.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),d({query:e.currentTarget.elements.query.value}),""!==e.currentTarget.elements.query.value.trim()?e.currentTarget.reset():alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430")},children:[(0,l.jsx)("button",{type:"submit",className:"button",children:(0,l.jsx)("span",{className:"button-label",children:"Search"})}),(0,l.jsx)("input",{className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"query"})]})})}),r.length>0&&(0,l.jsx)("ul",{children:r.map((function(e){var t=e.id,r=e.title;return(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"/movies/".concat(t),state:{from:w},children:r})},t)}))})]})}},9177:function(e,t,r){r.d(t,{FH:function(){return o},R:function(){return p},jh:function(){return f},mg:function(){return l},Gl:function(){return v}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),s=r.n(u);s().defaults.baseURL="https://api.themoviedb.org/3";var i="f8fb1aa4ecd91eaa841106c5d2d7056f",o=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/movie/week?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=184.7bcd999e.chunk.js.map