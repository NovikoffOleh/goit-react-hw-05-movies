"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(861),s=r(439),a=r(757),c=r.n(a),i=r(791),o=r(87),u=r(689),l=r(367),v=r(673),d=r(638),p={movieCard:"MovieDetails_movieCard__UPRqg",poster:"MovieDetails_poster__yO7gD",title:"MovieDetails_title__cUGs9",subTitle:"MovieDetails_subTitle__t78ZZ",score:"MovieDetails_score__p8Kk2",genres:"MovieDetails_genres__Pnmgt",links:"MovieDetails_links__EzCWB",button:"MovieDetails_button__uXZxd",link:"MovieDetails_link__U+v+7"},f=r(184);var h=function(){var e,t,r,a,h,m=(0,i.useState)(null),_=(0,s.Z)(m,2),x=_[0],g=_[1],k=(0,i.useState)(!0),j=(0,s.Z)(k,2),b=j[0],w=j[1],Z=(0,u.UO)().movieId,y=(0,u.TH)(),N=null!==(e=null===(t=y.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";function D(){return D=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.r.fetchById(t);case 3:r=e.sent,g(r.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,w(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])}))),D.apply(this,arguments)}return(0,i.useEffect)((function(){!function(e){D.apply(this,arguments)}(Z)}),[Z]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.rU,{className:p.link,to:N,children:"Back to list"}),b&&(0,f.jsx)(v.Z,{}),x&&(0,f.jsxs)("div",{className:p.movieCard,children:[(0,f.jsx)("img",{className:p.poster,src:x.poster_path?"https://image.tmdb.org/t/p/w500".concat(x.poster_path):d,alt:x.original_title}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{className:p.title,children:x.original_title}),(0,f.jsxs)("p",{className:p.text,children:["User Score:"," ",(0,f.jsx)("span",{className:p.score,children:x.vote_average.toFixed(1)})," ","/ ",x.vote_count]}),(0,f.jsx)("h3",{className:p.subTitle,children:"Overview"}),(0,f.jsx)("p",{className:p.text,children:x.overview}),(0,f.jsx)("h3",{className:p.subTitle,children:"Genres"}),(0,f.jsx)("p",{className:p.genres,children:(null===x||void 0===x||null===(r=x.genres)||void 0===r?void 0:r.length)>0?x.genres.map((function(e){var t=e.id,r=e.name;return(0,f.jsx)("span",{children:r},t)})):"There are no genres available"})]})]}),(0,f.jsxs)("ul",{className:p.links,children:[(0,f.jsx)("li",{children:(0,f.jsx)(o.OL,{className:p.button,to:"cast",state:{from:null===(a=y.state)||void 0===a?void 0:a.from},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(o.OL,{className:p.button,to:"reviews",state:{from:null===(h=y.state)||void 0===h?void 0:h.from},children:"Reviews"})})]}),(0,f.jsx)(i.Suspense,{fallback:(0,f.jsx)(v.Z,{}),children:(0,f.jsx)(u.j3,{})})]})}},367:function(e,t,r){r.d(t,{r:function(){return o}});var n=r(861),s=r(757),a=r.n(s),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="d753c7c06260672f2cde39e68c02f927",o={fetchTrending:function(){return(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()},fetchByQuery:function(e){return(0,n.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},fetchById:function(e){return(0,n.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},fetchCastById:function(e){return(0,n.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},fetchReviewsById:function(e){return(0,n.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()}}},638:function(e,t,r){e.exports=r.p+"static/media/noposter.4be44f1b6a2a14ed503d.jpg"}}]);
//# sourceMappingURL=135.857e30cc.chunk.js.map