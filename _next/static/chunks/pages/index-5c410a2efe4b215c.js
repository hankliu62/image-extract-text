(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8603:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return D}}),a(73834);var s=a(21894),l=a.n(s);a(22278);var r=a(56687),n=a.n(r);a(38441);var i=a(12281),c=a.n(i);a(21687);var o=a(92596),d=a.n(o);a(99545);var x=a(14166),u=a.n(x);a(32098);var f=a(59321);a(73110);var h=a(88969);a(16385);var m=a(34146),p=a.n(m);a(15208);var v=a(70240),j=a.n(v);a(5337);var w=a(81181),N=a.n(w),b=a(41608),g=a(30298),y=a.n(g),k=a(57966),_=a.n(k),Z=a(75271),C=a(49462),I=a(38800),S=a(30769),E=a(62745),P=a(80704),O=a(2583),z=a.n(O),L=a(12875),M=a(90235),R=a(82829),T=a(89103),U=function(){var e=(0,T.Z)();return(0,Z.useCallback)(function(t){e?window.location.href="https://hankliu62.github.io/toolkits/":window.top.postMessage({type:"homepage"},"*"),null==t||t.preventDefault()},[e])},X=a(52676),q=Object.keys(R.lI).map(function(e){return{label:R.af[R.lI[e]],value:R.lI[e]}}),B=z()(function(){return Promise.all([a.e(3),a.e(854),a.e(580)]).then(a.bind(a,72145))},{ssr:!1,loadableGenerated:{webpack:function(){return[72145]}}});function D(){var e,t=(0,Z.useState)(),a=t[0],s=t[1],r=(0,Z.useState)(),i=r[0],o=r[1],x=(0,Z.useState)(R.lI.CHI_SIM),m=x[0],v=x[1],w=(0,Z.useState)(!1),g=w[0],k=w[1],O=(0,L.useRouter)(),z=U();(0,Z.useEffect)(function(){_().init()},[]);var T=(0,Z.useCallback)((0,b.Z)(y().mark(function e(){var t;return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,M.createWorker)(m);case 4:return t=e.sent,e.next=7,t.recognize(a);case 7:return o(e.sent.data.text),e.next=11,t.terminate();case 11:e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),o(""),N().error("图片提取文字失败"),console.error(e.t0);case 18:return e.prev=18,k(!1),e.finish(18);case 21:case"end":return e.stop()}},e,null,[[0,13,18,21]])})),[m,a]);return(0,X.jsxs)("div",{className:"relative w-full text-white/75",children:[!!(null!==(e=O.query)&&void 0!==e&&e["with-breadcrumb"])&&(0,X.jsxs)(j(),{className:"!m-6 !text-base",separator:"/",children:[(0,X.jsx)(j().Item,{children:(0,X.jsx)("a",{onClick:z,children:"小工具集合"})}),(0,X.jsx)(j().Item,{children:R.V1.split("-").pop().trim()})]}),(0,X.jsx)("div",{className:"relative z-20 mx-auto mt-6 w-full max-w-[1920px]",children:(0,X.jsxs)("div",{className:"flex flex-col flex-wrap",children:[(0,X.jsx)("div",{"data-aos":"fade-up","data-aos-offset":"200","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true",className:"info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in",children:(0,X.jsxs)(n(),{bordered:!0,className:"relative shadow-lg",children:[(0,X.jsx)(p(),{title:"图片提取文字",children:(0,X.jsx)("div",{className:"absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]",children:(0,X.jsx)(C.Z,{className:"text-[20px] text-white"})})}),(0,X.jsxs)("div",{className:"relative pt-4",children:[(0,X.jsxs)("div",{className:"flex flex-col justify-start",children:[(0,X.jsx)("label",{className:"text-xl font-medium",children:"上传图片开始处理"}),(0,X.jsx)("div",{className:"mt-2 w-full",children:(0,X.jsx)(h.ZP,{maxsize:5*h.ZP.SIZE_MB,onSelect:function(e){return s(e[0])},accept:"image/*",title:"上传图片 或 拖进来"})}),!!a&&(0,X.jsxs)("div",{className:"group/image mt-4 flex items-center justify-start overflow-hidden",children:[(0,X.jsx)(I.Z,{className:"text-xl text-green-400"}),(0,X.jsx)(u(),{placement:"topLeft",content:(0,X.jsx)(f.Z,{src:URL.createObjectURL(a)}),trigger:"hover",children:(0,X.jsx)("div",{className:"mx-3 flex-1 truncate text-base",children:null==a?void 0:a.name})}),(0,X.jsx)(S.Z,{className:"hidden h-[24px] cursor-pointer text-xl hover:text-red-600 group-hover/image:block",onClick:function(){return s(void 0)}})]})]}),(0,X.jsxs)("div",{className:"mt-8 flex flex-col  justify-start",children:[(0,X.jsx)("label",{className:"text-xl font-medium",children:"语言"}),(0,X.jsx)("div",{className:"mt-2 w-full",children:(0,X.jsx)(d(),{showSearch:!0,optionFilterProp:"label",className:"w-[320px]",options:q,placeholder:"请选择语言",value:m,onChange:function(e){return v(e)}})})]}),(0,X.jsx)("div",{className:"mt-8 flex justify-start",children:(0,X.jsx)(c(),{loading:g,disabled:!a||g,size:"medium",type:"primary",onClick:T,children:"开始处理"})})]})]})}),!!i&&(0,X.jsx)("div",{className:"info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in",children:(0,X.jsxs)(n(),{bordered:!0,className:"relative shadow-lg",children:[(0,X.jsx)(p(),{title:"图片提取文字成功",children:(0,X.jsx)("div",{className:"absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]",children:(0,X.jsx)(E.Z,{className:"text-[20px] text-white"})})}),(0,X.jsx)("div",{className:"relative flex flex-col pt-4",children:g?(0,X.jsx)(l(),{className:"w-full",active:!0}):(0,X.jsx)(B,{height:500,value:i,language:"markdown",readOnly:!0})})]})}),(0,X.jsx)("div",{"data-aos":"fade-up","data-aos-offset":"200","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true",className:"info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in",children:(0,X.jsxs)(n(),{bordered:!0,className:"relative shadow-lg",children:[(0,X.jsx)(p(),{title:"使用说明",children:(0,X.jsx)("div",{className:"absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]",children:(0,X.jsx)(P.Z,{className:"text-[20px] text-white"})})}),(0,X.jsxs)("div",{className:"relative grid grid-cols-1 gap-4 pt-4",children:[(0,X.jsx)("div",{className:"text-base",children:"在线图片转文字网站，用于解析您的上传的图片，获取图片中的文字内容。"}),(0,X.jsx)("div",{className:"text-base",children:"探索图像背后的文字世界！我们是您发现艺术与文学结合之美的理想场所。"}),(0,X.jsx)("div",{className:"text-base",children:"解读每一幅图像的独特故事，感受文字的魔力，开启创意之旅！"})]})]})})]})})]})}},69268:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(8603)}])}},function(e){e.O(0,[236,327,29,888,774,179],function(){return e(e.s=69268)}),_N_E=e.O()}]);