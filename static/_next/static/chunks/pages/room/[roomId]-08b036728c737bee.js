(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[947],{6073:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/room/[roomId]",function(){return s(9277)}])},9277:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var a=s(5893),n=s(7294),r=s(1163),o=s(434),l=s(1759);function c(e){let{name:t,setName:s,avatarUrl:r,setAvatarUrl:o,generateAvatar:l}=e,[c,i]=(0,n.useState)(!1);return(0,a.jsx)("div",{className:"mb-4",children:c?(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("input",{type:"text",value:t,onChange:e=>s(e.target.value),placeholder:"Enter your name",className:"rounded-md border border-gray-300 px-2 py-1"}),(0,a.jsx)("button",{onClick:()=>{i(!1),localStorage.setItem("username",t),o(l(t))},className:"rounded-md bg-green-500 px-3 py-1 text-white",children:"Save"})]}):(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("img",{src:r,alt:"avatar",className:"h-10 w-10 rounded-full"}),(0,a.jsx)("span",{className:"font-bold",children:t||"Anonymous"}),(0,a.jsx)("button",{onClick:()=>i(!0),className:"rounded-md bg-blue-500 px-3 py-1 text-white",children:"Edit Name"})]})})}function i(e){let{messages:t}=e;return(0,a.jsx)("div",{className:"mb-4 h-64 overflow-y-scroll rounded-md border border-gray-200 p-2",children:t.map((e,t)=>(0,a.jsxs)("div",{className:"mb-2 flex items-center space-x-2",children:[(0,a.jsx)("img",{src:e.avatarUrl,alt:"avatar",className:"h-8 w-8 rounded-full"}),(0,a.jsxs)("strong",{children:[e.name,":"]}),e.text.includes("![image]")?(0,a.jsx)("img",{src:e.text.split("(")[1].split(")")[0],alt:"sent_image",className:"h-24 w-24 rounded object-cover"}):e.text.includes("![emoji]")?(0,a.jsx)("img",{src:e.text.split("(")[1].split(")")[0],alt:"emoji",className:"h-16 w-16"}):e.text]},t))})}function d(e){let{sendMessage:t,message:s,setMessage:n}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("input",{type:"text",value:s,onChange:e=>n(e.target.value),placeholder:"Type your message",className:"mb-2 w-full rounded-md border border-gray-300 px-2 py-1"}),(0,a.jsx)("button",{onClick:t,className:"w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600",children:"Send"})]})}function u(e){let{uploadImage:t,setImageFile:s}=e;return(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("input",{type:"file",onChange:e=>s(e.target.files[0]),accept:"image/*",className:"mb-2"}),(0,a.jsx)("button",{onClick:t,className:"w-full rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600",children:"Upload Image"})]})}function m(){let{roomId:e}=(0,r.useRouter)().query,[t,s]=(0,n.useState)(null),[m,p]=(0,n.useState)([]),[x,f]=(0,n.useState)([]),[h,g]=(0,n.useState)(""),[b,j]=(0,n.useState)(""),[N,y]=(0,n.useState)(""),[v,w]=(0,n.useState)(null),[S,_]=(0,n.useState)(!0),E=e=>"https://api.dicebear.com/9.x/big-smile/svg?seed=".concat(e,"&skinColor=c99c62,e2ba87,efcc9f,f5d7b1,ffe4c0");(0,n.useEffect)(()=>{let e=localStorage.getItem("username");if(e)j(e),y(E(e));else{let e=(0,l.XR)();j(e),y(E(e)),localStorage.setItem("username",e)}},[]),(0,n.useEffect)(()=>{let t=new o.ZP(void 0,{host:"0.peerjs.com",port:443,path:"/",secure:!0});return t.on("open",a=>{s(t),fetch("/api/peers/".concat(e)).then(e=>e.json()).then(e=>{let{peers:s}=e;s.forEach(e=>{if(e!==a){let s=t.connect(e);s.on("open",()=>{p(e=>[...e,s]),s.on("data",C)})}})}),fetch("/api/peers/".concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({peerId:a})})}),t.on("connection",e=>{p(t=>[...t,e]),e.on("data",C)}),()=>{t.destroy()}},[e]);let C=e=>{f(t=>[...t,e]),S||"granted"!==Notification.permission||new Notification("New message from ".concat(e.name),{body:e.text})},k=async()=>{if(!v)return;let e=new FormData;e.append("image",v),e.append("key","YOUR_API_KEY");try{let t=await fetch("https://api.imgbb.com/1/upload",{method:"POST",body:e}),s=await t.json();if(s.success){let e={name:b||"Anonymous",text:"![image](".concat(s.data.url,")"),avatarUrl:N};m.forEach(t=>{t.send(e)}),f(t=>[...t,e])}}catch(e){console.error("Error uploading image:",e)}};return(0,a.jsxs)("div",{className:"flex h-screen flex-col items-center justify-center p-4",children:[(0,a.jsxs)("h1",{className:"mb-4 text-2xl font-bold",children:["Room: ",e]}),(0,a.jsx)(c,{name:b,setName:j,avatarUrl:N,setAvatarUrl:y,generateAvatar:E}),(0,a.jsx)(i,{messages:x}),(0,a.jsx)(d,{sendMessage:()=>{let e={name:b||"Anonymous",text:h,avatarUrl:N};m.forEach(t=>{t.send(e)}),f(t=>[...t,e]),g("")},message:h,setMessage:g}),(0,a.jsx)(u,{uploadImage:k,setImageFile:w})]})}}},function(e){e.O(0,[282,714,539,888,774,179],function(){return e(e.s=6073)}),_N_E=e.O()}]);