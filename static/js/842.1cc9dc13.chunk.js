"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{725:function(t,n,e){e.d(n,{s:function(){return u}});var r=e(6871),c=e(501),a=e(184);function u(t){var n=t.filmList,e=(0,r.TH)();return(0,a.jsx)("ul",{children:n&&n.map((function(t){var n=t.id,r=t.title,u=t.name;return(0,a.jsx)("li",{children:(0,a.jsx)(c.rU,{to:"".concat("/goit-react-hw-05-movies","/movies/").concat(n),state:e.search?e.pathname+e.search:e.pathname,children:null!==r&&void 0!==r?r:u})},n)}))})}},7842:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var r=e(885),c=e(2791),a=e(725),u=e(2083),i=e(184);function s(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1];return(0,c.useEffect)((function(){(0,u.Hg)().then(s)}),[]),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Trending today"}),(0,i.jsx)(a.s,{filmList:e})]})}},2083:function(t,n,e){e.d(n,{Hg:function(){return p},M1:function(){return l},d0:function(){return h},tx:function(){return x},uP:function(){return m}});var r=e(5861),c=e(7757),a=e.n(c),u=e(4569),i=e.n(u),s="https://api.themoviedb.org/3",o="776d9fc25cdee411748cae84044282cc";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(s,"/movie/").concat(n,"?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(s,"/search/movie?api_key=").concat(o,"&page=1&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=842.1cc9dc13.chunk.js.map