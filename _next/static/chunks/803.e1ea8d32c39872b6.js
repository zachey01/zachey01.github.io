"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[803],{5803:function(e,n,i){i.r(n);var t=i(5893),a=i(7294),o=i(990);n.default=()=>{let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{(async()=>{try{let n=await i.e(737).then(i.bind(i,9477)),t=e.current,a=window.devicePixelRatio||1,l=window.innerWidth,u=window.innerHeight,s=!1,r=new n.WebGLRenderer({canvas:t});r.setSize(l*a,u*a,!1);let v=180*Math.atan(u/2/180)/Math.PI*2,d=new n.PerspectiveCamera(v,l/u,.1,200);d.position.z=180;let c=new n.Scene,m={u_time:{value:0},u_mouse:{value:new n.Vector2},u_planeRes:{value:new n.Vector2(l,u)},u_isHovering:{value:0},u_windowRes:{value:new n.Vector2(l,u)}},f=new n.PlaneGeometry(1,1,20,20),p=new n.ShaderMaterial({uniforms:m,vertexShader:"\n          uniform float u_time;\n          uniform vec2 u_mouse;\n          uniform vec2 u_planeRes;\n          uniform float u_isHovering;\n          varying vec2 vUv;\n\n          void main(){\n            vUv = uv;\n\n            vec3 transformed = position;\n\n            vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n\n            float dist = distance(worldPosition.xy, u_mouse);\n\n            float inCircle = 1.0 - (clamp(dist, 0.0, 300.0) / 300.0);\n\n            float waves = sin(worldPosition.x * 0.004 - u_time * 2.3) * 7.0;\n\n            float elevation = 23.0 * inCircle * u_isHovering;\n\n            transformed.z += waves + elevation;\n\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);\n          }\n        ",fragmentShader:"\n          uniform float u_time;\n          varying vec2 vUv;\n          uniform vec2 u_planeRes;\n          uniform vec2 u_windowRes;\n\n          float makeRect(vec2 dimensions, float blur, vec2 uv, float position){\n            float h = smoothstep(dimensions.x + blur, dimensions.x - blur, length(uv.x - position));\n            float v = smoothstep(dimensions.y + blur, dimensions.y - blur, length(uv.y - position));\n            return h * v;\n          }\n\n          void main(){\n            vec2 uv = vUv;\n            float minRes = min(u_windowRes.x, u_windowRes.y);\n            uv *= u_windowRes / minRes;\n            uv = fract(uv * 10.0);\n\n            float gridLineWidth = 1.2 * 0.5 * 10.0 * 0.9/ minRes;\n            float gridBlur = 1.5 * 0.5 * 10.0 * 0.9/ minRes;\n\n            float gridSpaceSize = 0.5 - gridLineWidth;\n\n            float gridSpace = makeRect(vec2(gridSpaceSize), gridBlur, uv, 0.5);\n\n            float plusLineWidth = gridLineWidth;\n            float plusBlur = gridBlur;\n\n            float plusSize = 0.03;\n\n            float plusVertical = makeRect(vec2(plusLineWidth, plusSize), plusBlur, uv, 0.87);\n            float plusHorizontal = makeRect(vec2(plusSize, plusLineWidth), plusBlur, uv, 0.87);\n\n            float plusSign = clamp(plusVertical + plusHorizontal, 0.0, 1.0) * 3.2;\n\n            float mask = gridSpace - plusSign;\n\n            vec3 red = vec3(1.0, 16.0/255.0, 61.0/255.0);\n            vec3 darkRed = vec3(220.0/255.0, 14.0/255.0, 56.0/255.0);\n\n            vec3 color = mix(darkRed, red, mask);\n\n            gl_FragColor = vec4(vec3(gridSpace), 1.0);\n          }\n        ",transparent:!0}),w=new n.Mesh(f,p);w.scale.x=m.u_planeRes.value.x=l+.1*l,w.scale.y=m.u_planeRes.value.y=u+.1*u,c.add(w);let _=()=>{m.u_time.value+=.01,r.render(c,d),requestAnimationFrame(_)};_(),document.addEventListener("mousemove",e=>{s||(m.u_mouse.value.x=e.clientX-l/2,m.u_mouse.value.y=-e.clientY+u/2,o.ZP.to(m.u_isHovering,{value:1})),o.ZP.to(m.u_mouse.value,{x:e.clientX-l/2,y:-e.clientY+u/2,duration:.7}),s=!0}),document.addEventListener("mouseleave",()=>{o.ZP.to(m.u_isHovering,{value:0}),s=!1}),window.addEventListener("resize",()=>{l=window.innerWidth,u=window.innerHeight,w.scale.x=m.u_planeRes.value.x=l+.1*l,w.scale.y=m.u_planeRes.value.y=u+.1*u,m.u_windowRes.value.x=l,m.u_windowRes.value.y=u,d.fov=180*Math.atan(u/2/180)/Math.PI*2,d.aspect=l/u,d.updateProjectionMatrix(),r.setSize(l*a,u*a,!1)})}catch(e){console.error("Failed to load animations:",e)}})()},[]),(0,t.jsx)("canvas",{ref:e,id:"c-bg",className:"absolute inset-0 z-[-1] h-full w-full"})}}}]);