/*! Built with http://stenciljs.com */
(function(appNamespace,publicPath){"use strict";
(function(publicPath){Context.store=function(){var t;return{getStore:function(){return t},setStore:function(e){t=e},getState:function(){return t&&t.getState()},mapDispatchToProps:function(e,n){Object.keys(n).forEach(function(r){var o=n[r];Object.defineProperty(e,r,{get:function(){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return o.apply(void 0,e)(t.dispatch,t.getState)}},configurable:!0,enumerable:!0})})},mapStateToProps:function(e,n){var r=function(r,o){var u=n(t.getState());Object.keys(u).forEach(function(t){var n=u[t];e[t]=n})},o=t.subscribe(function(){return r()});return r(),o}}}();
})(publicPath);
})("stencilredux","/build/stencilredux/");