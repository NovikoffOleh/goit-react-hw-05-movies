"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),s=r.n(c),i=r(791),u=r(689),o=r(367),p=r(673),h=r(447),f={list:"Reviews_list__okdpy",item:"Reviews_item__DJKij",thumb:"Reviews_thumb__ZtaIS",title:"Reviews_title__t265C",notification:"Reviews_notification__vpvwx"},l=r(184);var d=function(){var t=(0,i.useState)(null),e=(0,a.Z)(t,2),r=e[0],c=e[1],d=(0,i.useState)(!1),v=(0,a.Z)(d,2),m=v[0],_=v[1],w=(0,u.UO)().movieId;function x(){return x=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,_(!0),t.next=4,o.r.fetchReviewsById(e);case 4:r=t.sent,c(r.data.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,_(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])}))),x.apply(this,arguments)}return(0,i.useEffect)((function(){!function(t){x.apply(this,arguments)}(w)}),[w]),(0,l.jsxs)(l.Fragment,{children:[m&&(0,l.jsx)(p.Z,{}),r&&r.length>0?(0,l.jsx)("ul",{className:f.list,children:r.map((function(t){return(0,l.jsxs)("li",{className:f.item,children:[(0,l.jsxs)("div",{className:f.thumb,children:[t.author_details.avatar_path?t.author_details.avatar_path.includes("gravatar")?(0,l.jsx)("img",{width:"40",src:t.author_details.avatar_path.slice(1),alt:t.author}):(0,l.jsx)("img",{width:"40",src:"https://image.tmdb.org/t/p/w500".concat(t.author_details.avatar_path),alt:t.author}):(0,l.jsx)("img",{width:"40",src:h,alt:t.author}),(0,l.jsx)("h3",{className:f.title,children:t.author})]}),(0,l.jsx)("p",{className:f.text,children:t.content})]},t.id)}))}):(0,l.jsx)("h2",{className:f.notification,children:"We don`t have any reviews yet"})]})}},367:function(t,e,r){r.d(e,{r:function(){return u}});var n=r(861),a=r(757),c=r.n(a),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="eb8158c708d801ebc7494af7f42d91eb",u={fetchTrending:function(){return(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))()},fetchByQuery:function(t){return(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))()},fetchById:function(t){return(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))()},fetchCastById:function(t){return(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))()},fetchReviewsById:function(t){return(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))()}}},447:function(t,e,r){t.exports=r.p+"static/media/avatar-placeholder-1-225x300-1-200x300.fb1db70218457bae0a0d.png"}}]);
//# sourceMappingURL=168.cc6523da.chunk.js.map