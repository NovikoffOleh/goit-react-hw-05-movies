"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{415:function(e,t,n){n.r(t);var r=n(861),c=n(439),a=n(757),u=n.n(a),s=n(791),o=n(367),i=n(673),f=n(184),p=(0,s.lazy)((function(){return n.e(198).then(n.bind(n,198))}));t.default=function(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),n=t[0],a=t[1],h=(0,s.useState)(!0),v=(0,c.Z)(h,2),d=v[0],l=v[1];function m(){return(m=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.r.fetchTrending();case 3:t=e.sent,a(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,l(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))).apply(this,arguments)}return(0,s.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)("h3",{style:{textAlign:"center",color:"#2a2a2a",margin:"10px 0"},children:"\u0424\u0456\u043b\u044c\u043c\u0438 \u0434\u043b\u044f \u0440\u043e\u0434\u0438\u043d\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u0434\u0443 \u0456 \u043d\u0435 \u0442\u0456\u043b\u044c\u043a\u0438"}),d?(0,f.jsx)(i.Z,{}):(0,f.jsx)(p,{moviesList:n})]})}},367:function(e,t,n){n.d(t,{r:function(){return o}});var r=n(861),c=n(757),a=n.n(c),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="eb8158c708d801ebc7494af7f42d91eb",o={fetchTrending:function(){return(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()},fetchByQuery:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()},fetchById:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()},fetchCastById:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()},fetchReviewsById:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=415.7b12f0a9.chunk.js.map