(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(2533)}])},8864:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{default:function(){return o},noSSR:function(){return s}});let r=l(8754);l(5893),l(7294);let n=r._(l(6016));function a(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}function o(e,t){let l=n.default,r={loading:e=>{let{error:t,isLoading:l,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e});let o=(r={...r,...t}).loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?l({...r,loader:()=>null!=o?o().then(a):Promise.resolve(a(()=>null))}):(delete r.webpack,delete r.modules,s(l,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},572:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return r}});let r=l(8754)._(l(7294)).default.createContext(null)},6016:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let r=l(8754)._(l(7294)),n=l(572),a=[],s=[],o=!1;function i(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function i(){if(!a){let t=new d(e,l);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!o){let e=l.webpack?l.webpack():l.modules;e&&s.push(t=>{for(let l of e)if(t.includes(l))return i()})}function u(e,t){!function(){i();let e=r.default.useContext(n.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let s=r.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),r.default.useMemo(()=>{var t;return s.loading||s.error?r.default.createElement(l.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:a.retry}):s.loaded?r.default.createElement((t=s.loaded)&&t.default?t.default:t,e):null},[e,s])}return u.preload=()=>i(),u.displayName="LoadableComponent",r.default.forwardRef(u)}(i,e)}function c(e,t){let l=[];for(;e.length;){let r=e.pop();l.push(r(t))}return Promise.all(l).then(()=>{if(e.length)return c(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{c(a).then(e,t)}),u.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let l=()=>(o=!0,t());c(s,e).then(l,l)})),window.__NEXT_PRELOADREADY=u.preloadReady;let h=u},2533:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return u}});var r=l(5893),n=l(7294),a=l(5152),s=l.n(a),o=()=>(0,r.jsx)("section",{id:"features",className:"bg-white py-16",children:(0,r.jsxs)("div",{className:"container mx-auto text-center",children:[(0,r.jsx)("h2",{className:"mb-8 text-4xl font-bold",children:"Our Features"}),(0,r.jsxs)("div",{className:"grid gap-12 px-4 md:grid-cols-3",children:[(0,r.jsxs)("div",{className:"rounded-lg bg-gray-100 p-8 shadow-lg",children:[(0,r.jsx)("h3",{className:"mb-4 text-xl font-semibold",children:"Sync Videos in Real-Time"}),(0,r.jsx)("p",{children:"Watch YouTube, Vimeo, and VK videos together in perfect sync."})]}),(0,r.jsxs)("div",{className:"rounded-lg bg-gray-100 p-8 shadow-lg",children:[(0,r.jsx)("h3",{className:"mb-4 text-xl font-semibold",children:"Integrated Chat"}),(0,r.jsx)("p",{children:"Chat with friends while watching videos. Stay connected during the fun!"})]}),(0,r.jsxs)("div",{className:"rounded-lg bg-gray-100 p-8 shadow-lg",children:[(0,r.jsx)("h3",{className:"mb-4 text-xl font-semibold",children:"Ad Skipping"}),(0,r.jsx)("p",{children:"Use SponsorBlock to automatically skip YouTube ads and sponsor segments."})]})]})]})}),i=l(990);let d=s()(()=>l.e(234).then(l.bind(l,234)),{loadableGenerated:{webpack:()=>[234]},ssr:!1});var u=()=>{let e=(0,n.useRef)(null),t=(0,n.useRef)(null);return(0,n.useEffect)(()=>{i.p8.from(e.current,{duration:1,y:-50,opacity:0,ease:"power3.out"}),i.p8.from(t.current,{duration:1,opacity:0,y:50,ease:"power3.out",delay:.3})},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"relative mt-20 flex h-[65vh] w-full flex-col items-center justify-between p-6 text-center md:flex-row md:text-left",children:[(0,r.jsx)(d,{}),(0,r.jsxs)("div",{className:"relative z-10 mb-8 rounded-lg bg-transparent bg-opacity-50 p-6 text-center shadow-xl backdrop-blur-sm md:mb-0 md:w-1/2 md:text-left lg:pl-20",ref:e,children:[(0,r.jsx)("h2",{className:"text-shadow-lg mb-4 font-sans text-5xl font-bold text-black",children:"Watch Videos Together, Anywhere"}),(0,r.jsxs)("p",{className:"text-2xl text-black no-underline",ref:t,children:["Sync YouTube, Vimeo, and VK videos with friends and skip ads with"," ",(0,r.jsx)("a",{href:"https://sponsor.ajay.app",className:"font-medium hover:underline",children:"SponsorBlock"}),"."]})]}),(0,r.jsx)("div",{className:"relative z-10 text-center md:w-1/2 md:text-right lg:pr-20",children:(0,r.jsx)("button",{id:"createRoomBtn",className:"select-none rounded-lg bg-transparent px-8 py-4 text-sm font-medium text-black shadow-xl backdrop-blur-sm",onClick:()=>{fetch("/api/createRoom",{method:"POST"}).then(e=>{e.redirected&&(window.location.href=e.url)})},children:"Create a Room"})})]}),(0,r.jsx)(o,{})]})}},5152:function(e,t,l){e.exports=l(8864)}},function(e){e.O(0,[802,990,888,774,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);