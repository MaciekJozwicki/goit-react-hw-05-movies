"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[64],{713:function(t,e,r){r.d(e,{Hx:function(){return x},Y5:function(){return f},uV:function(){return v},vw:function(){return d}});var n=r(861),a=r(757),u=r.n(a),i=r(294),c="/trending/all/day",s="/search/movie?query=",o="/movie/",p="/movie/",h="https://api.themoviedb.org/3",l="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmI0MjEwNWRhZDRkNTEyMTk0OTY4NTJjMDIxMGVmNiIsInN1YiI6IjY0NjdlYzBjYTUwNDZlMDEwNThiMTFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J4oILHsNaxOa2wR7QI4IP-gTp_TQuJdUfMCgRJwoQAU",d=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)({method:"GET",url:h+c,headers:{accept:"application/json",Authorization:l}});case 2:return e=t.sent,t.next=5,e;case 5:return r=t.sent,t.abrupt("return",r.data.results);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)({method:"GET",url:h+s+e,headers:{accept:"application/json",Authorization:l}});case 2:return r=t.sent,t.next=5,r;case 5:return n=t.sent,t.abrupt("return",n.data.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)({method:"GET",url:h+o+e+"/credits",headers:{accept:"application/json",Authorization:l}});case 2:return r=t.sent,t.next=5,r;case 5:return n=t.sent,console.log(n),t.abrupt("return",n.data.cast);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)({method:"GET",url:h+p+e+"/reviews",headers:{accept:"application/json",Authorization:l}});case 2:return r=t.sent,t.next=5,r;case 5:return n=t.sent,t.abrupt("return",n.data.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},854:function(t,e,r){var n=r(923),a=r(184);e.Z=function(){return(0,a.jsx)(n.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})}},64:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(861),a=r(439),u=r(757),i=r.n(u),c=r(791),s=r(689),o=r(854),p=r(184),h=function(t){var e=t.id,r=t.author,n=t.image,a=t.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("h2",{children:["Author: ",r]}),n&&(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n),alt:r})]}),(0,p.jsx)("p",{children:a})]},e)},l=r(713),d=function(){var t=(0,s.TH)().state.movie.id,e=(0,c.useState)(),r=(0,a.Z)(e,2),u=r[0],d=r[1];return(0,c.useEffect)((function(){console.log(t);var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Hx)(t);case 3:r=e.sent,d(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),u?(0,p.jsxs)("div",{children:[0===u.length&&(0,p.jsx)("p",{children:"We don't have any reviews for this movie"}),u.map((function(t){return(0,p.jsx)(h,{id:t.id,author:t.author_details.name,image:t.author_details.avatar_path,content:t.content},t.id)}))]}):(0,p.jsx)(o.Z,{})}}}]);
//# sourceMappingURL=64.0ce9caa4.chunk.js.map