(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6972)}])},370:function(e,t,n){"use strict";n(5893),n(1664),n(9755)},6691:function(e,t){"use strict";var n,r,i,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return d},ACTION_NAVIGATE:function(){return l},ACTION_PREFETCH:function(){return c},ACTION_REFRESH:function(){return a},ACTION_RESTORE:function(){return u},ACTION_SERVER_ACTION:function(){return f},ACTION_SERVER_PATCH:function(){return s},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n},isThenable:function(){return p}});let a="refresh",l="navigate",u="restore",s="server-patch",c="prefetch",d="fast-refresh",f="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(i=n||(n={})).AUTO="auto",i.FULL="full",i.TEMPORARY="temporary",(o=r||(r={})).fresh="fresh",o.reusable="reusable",o.expired="expired",o.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3438:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let r=n(8754),i=n(1757),o=n(5893),a=i._(n(7294)),l=r._(n(7828)),u=n(7903),s=n(2905),c=n(4938);n(1997);let d=n(8364);function f(e){return"/"===e[0]?e.slice(1):e}let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!1},h=new Set,g="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",m=new Map([["default",function(e){let{config:t,src:n,width:r,quality:i}=e;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:(0,d.normalizePathTrailingSlash)(t.path)+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}],["imgix",function(e){let{config:t,src:n,width:r,quality:i}=e,o=new URL(""+t.path+f(n)),a=o.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString()),o.href}],["cloudinary",function(e){let{config:t,src:n,width:r,quality:i}=e,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return""+t.path+o+f(n)}],["akamai",function(e){let{config:t,src:n,width:r}=e;return""+t.path+f(n)+"?imwidth="+r}],["custom",function(e){let{src:t}=e;throw Error('Image with src "'+t+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}]]);function b(e){return void 0!==e.default}function v(e){let{config:t,src:n,unoptimized:r,layout:i,width:o,quality:a,sizes:l,loader:u}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n,r){let{deviceSizes:i,allSizes:o}=e;if(r&&("fill"===n||"responsive"===n)){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,i,l),d=s.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:s.map((e,r)=>u({config:t,src:n,quality:a,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:u({config:t,src:n,quality:a,width:s[d]})}}function y(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function w(e){var t;let n=(null==(t=e.config)?void 0:t.loader)||"default",r=m.get(n);if(r)return r(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '+u.VALID_LOADERS.join(", ")+". Received: "+n)}function _(e,t,n,r,i,o){e&&e.src!==g&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentNode&&(h.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){let{naturalWidth:t,naturalHeight:n}=e;i.current({naturalWidth:t,naturalHeight:n})}}))}let x=e=>{let{imgAttributes:t,heightInt:n,widthInt:r,qualityInt:i,layout:l,className:u,imgStyle:s,blurStyle:c,isLazy:d,placeholder:f,loading:p,srcString:h,config:g,unoptimized:m,loader:b,onLoadingCompleteRef:y,setBlurComplete:w,setIntersection:x,onLoad:j,onError:A,isVisible:k,noscriptSizes:S,...E}=e;return p=d?"lazy":p,(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{...E,...t,decoding:"async","data-nimg":l,className:u,style:{...s,...c},ref:(0,a.useCallback)(e=>{x(e),(null==e?void 0:e.complete)&&_(e,h,l,f,y,w)},[x,h,l,f,y,w]),onLoad:e=>{_(e.currentTarget,h,l,f,y,w),j&&j(e)},onError:e=>{"blur"===f&&w(!0),A&&A(e)}}),(d||"blur"===f)&&(0,o.jsx)("noscript",{children:(0,o.jsx)("img",{...E,loading:p,decoding:"async","data-nimg":l,style:s,className:u,...v({config:g,src:h,unoptimized:m,layout:l,width:r,quality:i,sizes:S,loader:b})})})]})};function j(e){var t;let n,{src:r,sizes:i,unoptimized:d=!1,priority:f=!1,loading:m,lazyRoot:_=null,lazyBoundary:j,className:A,quality:k,width:S,height:E,style:O,objectFit:P,objectPosition:T,onLoadingComplete:C,placeholder:R="empty",blurDataURL:M,...I}=e,z=(0,a.useContext)(c.ImageConfigContext),N=(0,a.useMemo)(()=>{let e=p||z||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[z]),L=i?"responsive":"intrinsic";"layout"in I&&(I.layout&&(L=I.layout),delete I.layout);let U=w;if("loader"in I){if(I.loader){let e=I.loader;U=t=>{let{config:n,...r}=t;return e(r)}}delete I.loader}let F="";if("object"==typeof(t=r)&&(b(t)||void 0!==t.src)){let e=b(r)?r.default:r;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(M=M||e.blurDataURL,F=e.src,(!L||"fill"!==L)&&(E=E||e.height,S=S||e.width,!e.height||!e.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e))}let W=!f&&("lazy"===m||void 0===m);((r="string"==typeof r?r:F).startsWith("data:")||r.startsWith("blob:"))&&(d=!0,W=!1),h.has(r)&&(W=!1),N.unoptimized&&(d=!0);let[q,D]=(0,a.useState)(!1),[H,V,K]=(0,s.useIntersection)({rootRef:_,rootMargin:j||"200px",disabled:!W}),B=!W||V,G={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},$={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y=!1,J=y(S),X=y(E),Q=y(k),Z=Object.assign({},O,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:T}),ee="blur"!==R||q?{}:{backgroundSize:P||"cover",backgroundPosition:T||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'+M+'")'};if("fill"===L)G.display="block",G.position="absolute",G.top=0,G.left=0,G.bottom=0,G.right=0;else if(void 0!==J&&void 0!==X){let e=X/J,t=isNaN(e)?"100%":""+100*e+"%";"responsive"===L?(G.display="block",G.position="relative",Y=!0,$.paddingTop=t):"intrinsic"===L?(G.display="inline-block",G.position="relative",G.maxWidth="100%",Y=!0,$.maxWidth="100%",n="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27"+J+"%27%20height=%27"+X+"%27/%3e"):"fixed"===L&&(G.display="inline-block",G.position="relative",G.width=J,G.height=X)}let et={src:g,srcSet:void 0,sizes:void 0};B&&(et=v({config:N,src:r,unoptimized:d,layout:L,width:J,quality:Q,sizes:i,loader:U}));let en=r,er={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:I.crossOrigin,referrerPolicy:I.referrerPolicy},ei=a.default.useLayoutEffect,eo=(0,a.useRef)(C),ea=(0,a.useRef)(r);(0,a.useEffect)(()=>{eo.current=C},[C]),ei(()=>{ea.current!==r&&(K(),ea.current=r)},[K,r]);let el={isLazy:W,imgAttributes:et,heightInt:X,widthInt:J,qualityInt:Q,layout:L,className:A,imgStyle:Z,blurStyle:ee,loading:m,config:N,unoptimized:d,placeholder:R,loader:U,srcString:en,onLoadingCompleteRef:eo,setBlurComplete:D,setIntersection:H,isVisible:B,noscriptSizes:i,...I};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("span",{style:G,children:[Y?(0,o.jsx)("span",{style:$,children:n?(0,o.jsx)("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:n}):null}):null,(0,o.jsx)(x,{...el})]}),f?(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",as:"image",href:et.srcSet?void 0:et.src,...er},"__nimg-"+et.src+et.srcSet+et.sizes)}):null]})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});let r=n(8754),i=n(5893),o=r._(n(7294)),a=n(1401),l=n(2045),u=n(7420),s=n(7201),c=n(1443),d=n(9953),f=n(5320),p=n(2905),h=n(4318),g=n(953),m=n(6691),b=new Set;function v(e,t,n,r,i,o){if(o||(0,l.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let i=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(b.has(i))return;b.add(i)}(async()=>o?e.prefetch(t,i):e.prefetch(t,n,r))().catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let w=o.default.forwardRef(function(e,t){let n,r;let{href:u,as:b,children:w,prefetch:_=null,passHref:x,replace:j,shallow:A,scroll:k,locale:S,onClick:E,onMouseEnter:O,onTouchStart:P,legacyBehavior:T=!1,...C}=e;n=w,T&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let R=o.default.useContext(d.RouterContext),M=o.default.useContext(f.AppRouterContext),I=null!=R?R:M,z=!R,N=!1!==_,L=null===_?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:U,as:F}=o.default.useMemo(()=>{if(!R){let e=y(u);return{href:e,as:b?y(b):e}}let[e,t]=(0,a.resolveHref)(R,u,!0);return{href:e,as:b?(0,a.resolveHref)(R,b):t||e}},[R,u,b]),W=o.default.useRef(U),q=o.default.useRef(F);T&&(r=o.default.Children.only(n));let D=T?r&&"object"==typeof r&&r.ref:t,[H,V,K]=(0,p.useIntersection)({rootMargin:"200px"}),B=o.default.useCallback(e=>{(q.current!==F||W.current!==U)&&(K(),q.current=F,W.current=U),H(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[F,D,U,K,H]);o.default.useEffect(()=>{I&&V&&N&&v(I,U,F,{locale:S},{kind:L},z)},[F,U,V,S,N,null==R?void 0:R.locale,I,z,L]);let G={ref:B,onClick(e){T||"function"!=typeof E||E(e),T&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,i,a,u,s,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let f=()=>{let e=null==u||u;"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:a,locale:s,scroll:e}):t[i?"replace":"push"](r||n,{scroll:e})};c?o.default.startTransition(f):f()}(e,I,U,F,j,A,k,S,z)},onMouseEnter(e){T||"function"!=typeof O||O(e),T&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(N||!z)&&v(I,U,F,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:L},z)},onTouchStart:function(e){T||"function"!=typeof P||P(e),T&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(N||!z)&&v(I,U,F,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:L},z)}};if((0,s.isAbsoluteUrl)(F))G.href=F;else if(!T||x||"a"===r.type&&!("href"in r.props)){let e=void 0!==S?S:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,h.getDomainLocale)(F,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);G.href=t||(0,g.addBasePath)((0,c.addLocale)(F,e,null==R?void 0:R.defaultLocale))}return T?o.default.cloneElement(r,G):(0,i.jsx)("a",{...C,...G,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let r=n(7294),i=n(3815),o="function"==typeof IntersectionObserver,a=new Map,l=[];function u(e){let{rootRef:t,rootMargin:n,disabled:u}=e,s=u||!o,[c,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{f.current=e},[]);return(0,r.useEffect)(()=>{if(o){if(s||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:i,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let i=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:i},l.push(n),a.set(n,t),t}(n);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),a.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,i.requestIdleCallback)(()=>d(!0));return()=>(0,i.cancelIdleCallback)(e)}},[s,n,t,c,f.current]),[p,c,(0,r.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6972:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),i=n(9008),o=n.n(i);n(9311);var a=n(7294),l=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function u(){return"undefined"!=typeof window}function s(){return"production"}function c(){return"development"===((u()?window.vam:s())||"production")}function d(e){return(0,a.useEffect)(()=>{!function(e={debug:!0}){var t;if(!u())return;(function(e="auto"){if("auto"===e){window.vam=s();return}window.vam=e})(e.mode),l(),e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend));let n=e.scriptSrc||(c()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js");if(document.head.querySelector(`script[src*="${n}"]`))return;let r=document.createElement("script");r.src=n,r.defer=!0,r.dataset.sdkn="@vercel/analytics"+(e.framework?`/${e.framework}`:""),r.dataset.sdkv="1.3.1",e.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),e.endpoint&&(r.dataset.endpoint=e.endpoint),e.dsn&&(r.dataset.dsn=e.dsn),r.onerror=()=>{let e=c()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${e}`)},c()&&!1===e.debug&&(r.dataset.debug="false"),document.head.appendChild(r)}({framework:e.framework||"react",...void 0!==e.route&&{disableAutoTrack:!0},...e})},[]),(0,a.useEffect)(()=>{e.route&&e.path&&function({route:e,path:t}){var n;null==(n=window.va)||n.call(window,"pageview",{route:e,path:t})}({route:e.route,path:e.path})},[e.route,e.path]),null}n(1664),n(370);var f=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"FlickSync – Watch YouTube, Movies, TV Shows, and Anime Together"}),(0,r.jsx)("meta",{name:"description",content:"FlickSync is your go-to platform for watching YouTube videos, movies, TV shows, and anime together with friends in real-time. Enjoy synchronized viewing, chat, and have fun watching your favorite content together from anywhere!"}),(0,r.jsx)("meta",{charSet:"UTF-8"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)(d,{})]}),(0,r.jsx)(t,{...n})]})}},9311:function(){},9008:function(e,t,n){e.exports=n(7828)},9755:function(e,t,n){e.exports=n(3438)},1664:function(e,t,n){e.exports=n(9577)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(3837),t(9090)}),_N_E=e.O()}]);