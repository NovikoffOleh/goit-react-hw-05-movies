"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(791),i=r(689),o=r(673),p=r(367),f=r(447),d="Cast_castCards__IjCNo",h="Cast_castCard__m8Shz",m="Cast_img__-isbW",v="Cast_text__P2vgu",l=r(184);var x=function(){var e=(0,u.useState)(null),t=(0,a.Z)(e,2),r=t[0],c=t[1],x=(0,u.useState)(!1),_=(0,a.Z)(x,2),w=_[0],b=_[1],k=(0,i.UO)().movieId;function g(){return g=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,p.r.fetchCastById(t);case 4:r=e.sent,c(r.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])}))),g.apply(this,arguments)}return(0,u.useEffect)((function(){!function(e){g.apply(this,arguments)}(k)}),[k]),(0,l.jsxs)(l.Fragment,{children:[w&&(0,l.jsx)(o.Z,{}),r&&(0,l.jsx)("ul",{className:d,children:r.cast.map((function(e){return(0,l.jsxs)("li",{className:h,children:[(0,l.jsx)("img",{className:m,width:"200",src:e.profile_path?"https://image.tmdb.org/t/p/w500".concat(e.profile_path):f,alt:e.name}),(0,l.jsx)("p",{className:v,children:e.name})]},e.id)}))})]})}},367:function(e,t,r){r.d(t,{r:function(){return i}});var n=r(861),a=r(757),c=r.n(a),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="eb8158c708d801ebc7494af7f42d91eb",i={fetchTrending:function(){return(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day?api_key=".concat(u));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()},fetchByQuery:function(e){return(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("search/movie?api_key=".concat(u,"&query=").concat(e));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},fetchById:function(e){return(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"?api_key=").concat(u));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},fetchCastById:function(e){return(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"/credits?api_key=").concat(u));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},fetchReviewsById:function(e){return(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()}}},447:function(e,t,r){e.exports=r.p+"static/media/avatar-placeholder-1-225x300-1-200x300.fb1db70218457bae0a0d.png"}}]);
//# sourceMappingURL=76.67a7de2a.chunk.js.map