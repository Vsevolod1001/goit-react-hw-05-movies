"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[105],{9105:function(t,n,e){e.r(n),e.d(n,{HomePage:function(){return v}});var r=e(5861),a=e(885),c=e(7757),u=e.n(c),s=e(9177),i=e(2791),o=e(6871),p=e(501),f=e(184),v=function(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],v=(0,o.TH)();return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.FH)();case 3:n=t.sent,c(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,f.jsx)("main",{children:(0,f.jsx)("ul",{children:e.map((function(t){return(0,f.jsx)("li",{children:(0,f.jsx)(p.rU,{to:"/movies/".concat(t.id),state:{from:v},children:t.title})},t.id)}))})})}},9177:function(t,n,e){e.d(n,{FH:function(){return o},R:function(){return p},jh:function(){return f},mg:function(){return v},Gl:function(){return h}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),s=e.n(u);s().defaults.baseURL="https://api.themoviedb.org/3";var i="f8fb1aa4ecd91eaa841106c5d2d7056f",o=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/trending/movie/week?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=105.db27484f.chunk.js.map