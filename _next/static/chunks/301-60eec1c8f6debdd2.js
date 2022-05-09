"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{3210:function(e,t,n){var r=n(2809),i=n(917),o=n(9353),c=n(5944);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=null!=e.onClick;return(0,c.tZ)(o.jX,{level:3,children:(0,c.tZ)("div",a({css:(0,i.iv)({borderRadius:14,boxSizing:"border-box",cursor:t?"pointer":"default",transition:"opacity 0.2s ease-in-out","&:hover":{opacity:t?.7:void 0}},"",""),role:t?"button":void 0},e))})}},7065:function(e,t,n){var r=n(917),i=n(9421),o=n(1371),c=n(9353),u=n(5944);t.Z=function(e){var t=e.description;return(0,u.BX)(c.kC,{direction:"column",align:"center",justify:"center",css:(0,r.iv)({position:"fixed",top:0,left:0,width:"100%",height:"100vh",zIndex:200,backgroundColor:o.O.white},"",""),children:[(0,u.tZ)(i.Z,{color:o.O.primary,size:50}),(0,u.tZ)(c.Ki,{size:16}),t&&(0,u.tZ)(c.xv,{color:o.O.gray[6],size:14,children:t})]})}},2309:function(e,t,n){n.d(t,{Z:function(){return _}});var r=n(917),i=n(266),o=n(9711),c=n(809),u=n.n(c),a=n(5641),s=n(8031),l=n(1371),d=n(9353),f=n(7294),p=n(9230),v=n(2770),h=n(2475),y=n(5944),b=function(e,t){var n=(0,h.Z)(new Date(e),"yyyy\ub144 M\uc6d4 d\uc77c H\uc2dc m\ubd84");switch(t){case"PENDING":return"".concat(n,"\uc73c\ub85c \uc608\uc57d\ud588\uc5b4\uc694");case"APPROVED":return"".concat(n,"\uc5d0 \uba74\uc811\uc774 \uc2dc\uc791\ub3fc\uc694");default:return}},g={PENDING:(0,y.tZ)(v.Z,{type:"secondary",children:"\ub300\uae30\uc911"}),APPROVED:(0,y.tZ)(v.Z,{type:"primary",children:"\uc608\uc57d\uc644\ub8cc"}),REJECTED:(0,y.tZ)(v.Z,{type:"danger",children:"\uac70\uc808\ub428"}),ABANDONED:(0,y.tZ)(v.Z,{type:"danger",children:"\ucde8\uc18c\ud568"})},w={PENDING:(0,y.tZ)(v.Z,{type:"secondary",children:"\ub300\uae30\uc911"}),APPROVED:(0,y.tZ)(v.Z,{type:"primary",children:"\uc218\ub77d\ud568"}),REJECTED:(0,y.tZ)(v.Z,{type:"danger",children:"\uac70\uc808\ud568"}),ABANDONED:(0,y.tZ)(v.Z,{type:"danger",children:"\ucde8\uc18c\ub428"})},Z=n(4332),m=n(2023);var O={name:"nsgk6m",styles:"padding:24px 24px 0"},k=function(e){var t=e.children;return(0,y.tZ)("div",{css:O,children:t})};var x={name:"vxuddk",styles:"padding:24px"},E=function(e){var t=e.children;return(0,y.tZ)(d.Kq,{gutter:8,css:x,justify:"flex-end",children:t})};var C={name:"hos97b",styles:"padding:24px 24px 0;width:100%;box-sizing:border-box"},P={name:"1d3w5wq",styles:"width:100%"};var j={name:"ds130u",styles:"position:fixed;top:0;left:0;width:100%;height:100vh"},z={name:"12iuzlr",styles:"border-radius:20px;overflow:hidden"},D=function(e){var t=e.show,n=e.children,i=e.onClose;return(0,y.tZ)(Z.M,{children:t&&(0,y.BX)(d.kC,{justify:"center",align:"center",css:j,children:[(0,y.tZ)(m.E.div,{css:(0,r.iv)({backgroundColor:l.O.white,margin:"0 24px",boxSizing:"border-box",borderRadius:20,overflow:"hidden"},"",""),initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:600,opacity:0},children:(0,y.tZ)(d.jX,{level:4,children:(0,y.tZ)("div",{role:"dialog",css:z,children:n})})}),(0,y.tZ)(m.E.div,{onClick:i,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},css:(0,r.iv)({position:"absolute",top:0,left:0,width:"100%",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.6)",zIndex:-1},"","")})]})})};D.Header=function(e){var t=e.title,n=e.description;return(0,y.tZ)(d.kC,{css:C,justify:"space-between",children:(0,y.BX)(d.kC,{direction:"column",css:P,children:["string"===typeof t?(0,y.tZ)(d.xv,{as:"h3",size:24,weight:"bold",children:t}):t,(0,y.tZ)(d.Ki,{size:8}),(0,y.tZ)(d.xv,{as:"p",size:14,color:l.O.gray[7],children:n})]})})},D.Content=k,D.Footer=E;var R=D;var B={name:"1d3w5wq",styles:"width:100%"},N=function(e){var t=e.show,n=e.title,r=e.description,i=e.badge,o=e.children,c=e.cta,u=e.onClose;return(0,y.BX)(R,{show:t,onClose:u,children:[(0,y.tZ)(R.Header,{title:(0,y.BX)(d.kC,{justify:"space-between",css:B,children:[(0,y.tZ)(d.xv,{weight:"bold",size:24,children:n}),null!=i?i:null]}),description:null!==r&&void 0!==r?r:""}),(0,y.tZ)(R.Content,{children:o}),(0,y.tZ)(d.Ki,{size:24}),(0,y.tZ)(R.Footer,{children:c})]})};var A={name:"4zleql",styles:"display:block"},S={name:"4zleql",styles:"display:block"};var X=n(3210);var q={name:"1fq09is",styles:"background-color:transparent;border:none;padding:0;align-self:flex-end;&:hover{opacity:0.7;}"},I=function(e){var t=e.title,n=e.description,i=e.content,o=e.badge,c=e.disabled,u=e.onClick;return(0,y.BX)(X.Z,{css:(0,r.iv)({width:"100%",padding:16,opacity:c?.5:1},"",""),onClick:!0===c?void 0:u,role:"button",children:[(0,y.BX)(d.kC,{justify:"space-between",children:[(0,y.BX)(d.Kq,{direction:"column",gutter:8,children:[(0,y.tZ)(d.xv,{as:"h4",weight:"bold",children:t}),null!=n&&(0,y.tZ)(d.xv,{size:14,color:l.O.gray[6],children:n})]}),null!=o?o:null]}),(0,y.tZ)(d.Ki,{size:8}),(0,y.BX)(d.Kq,{gutter:8,direction:"column",children:[(0,y.tZ)(d.xv,{size:14,children:i}),(0,y.tZ)(d.Ki,{size:8}),(0,y.tZ)(d.xv,{as:"button",size:12,css:q,children:"\uc790\uc138\ud788 \ubcf4\uae30"})]})]})};var T={name:"4zleql",styles:"display:block"},K={name:"4zleql",styles:"display:block"};var _={Interviewer:function(e){var t,n=e.interviewRequest,c=e.onClick,v=n.interviewer,h=n.status,w=function(e){var t=e.interviewer,n=e.status,c=e.interview_date,v=(0,d.Ir)(),h=v.open,w=v.close,Z=v.createOverlayElement,m=v.destroy,O=(0,a.zj)(),k=(0,o.Z)(O,3),x=k[0],E=k[1],C=k[2],P=(0,f.useCallback)((function(t){return(0,i.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return E(),n.prev=1,n.next=4,(0,p.uT)(e,{status:t});case 4:w(),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),alert("\uc694\uccad\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 10:return n.prev=10,C(),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[1,7,10,13]])})))}),[E,C,w,e]);return(0,f.useEffect)((function(){return Z((function(i){var o,u,a=i.isOpen,f=i.close;return(0,y.tZ)(N,{show:a,onClose:f,title:t.nickname,badge:g[n],description:null!==(o=null===e||void 0===e||null===(u=e.interviewer.interviewer)||void 0===u?void 0:u.company)&&void 0!==o?o:"",cta:"PENDING"===n?(0,y.tZ)(s.Z,{loading:x,styleType:"danger",onClick:P("ABANDONED"),children:"\uc2e0\uccad\ucde8\uc18c\ud558\uae30"}):(0,y.tZ)(s.Z,{loading:x,styleType:"secondary",onClick:f,children:"\ub2eb\uae30"}),children:(0,y.BX)(d.kC,{direction:"column",children:[(0,y.BX)(d.xv,{children:[b(c,n),"."]}),(0,y.tZ)(d.Ki,{css:A,size:24}),(0,y.tZ)("div",{css:(0,r.iv)({backgroundColor:l.O.gray[4],width:"100%",height:1},"")}),(0,y.tZ)(d.Ki,{css:S,size:24})]})})})),function(){m()}}),[Z,t,c,n,m,x,P]),(0,f.useMemo)((function(){return{open:h,close:w}}),[h,w])}(n).open,Z="REJECTED"===h||"ABANDONED"===h;return(0,y.tZ)(I,{title:v.nickname,description:null===v||void 0===v||null===(t=v.interviewer)||void 0===t?void 0:t.company,content:b(n.interview_date,n.status),badge:g[h],onClick:function(){null===c||void 0===c||c(),w()},disabled:Z})},Interviewee:function(e){var t=e.interviewRequest,n=e.onClick,c=t.interviewee,v=t.status,h=function(e){var t=e.interviewee,n=e.status,c=e.interview_date,v=(0,d.Ir)(),h=v.open,w=v.close,Z=v.createOverlayElement,m=v.destroy,O=(0,a.zj)(),k=(0,o.Z)(O,3),x=k[0],E=k[1],C=k[2],P=(0,f.useCallback)((function(t){return(0,i.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return E(),n.prev=1,n.next=4,(0,p.uT)(e,{status:t});case 4:w(),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),alert("\uc694\uccad\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 10:return n.prev=10,C(),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[1,7,10,13]])})))}),[E,C,w,e]);return(0,f.useEffect)((function(){return Z((function(e){var i=e.isOpen,o=e.close;return(0,y.tZ)(N,{show:i,onClose:o,title:t.nickname,badge:g[n],cta:"PENDING"===n?(0,y.BX)(y.HY,{children:[(0,y.tZ)(s.Z,{loading:x,styleType:"danger",onClick:P("REJECTED"),children:"\uac70\uc808\ud558\uae30"}),(0,y.tZ)(s.Z,{loading:x,styleType:"primary",onClick:P("APPROVED"),children:"\uc218\ub77d\ud558\uae30"})]}):(0,y.tZ)(s.Z,{styleType:"secondary",onClick:o,children:"\ub2eb\uae30"}),children:(0,y.BX)(d.kC,{direction:"column",children:[(0,y.BX)(d.xv,{children:[b(c,n),"."]}),(0,y.tZ)(d.Ki,{css:T,size:24}),(0,y.tZ)("div",{css:(0,r.iv)({backgroundColor:l.O.gray[4],width:"100%",height:1},"")}),(0,y.tZ)(d.Ki,{css:K,size:24})]})})})),function(){m()}}),[Z,t,c,n,m,x,P]),(0,f.useMemo)((function(){return{open:h,close:w}}),[h,w])}(t).open,Z="REJECTED"===v||"ABANDONED"===v;return(0,y.tZ)(I,{title:c.nickname,content:b(t.interview_date,t.status),badge:w[v],onClick:function(){null===n||void 0===n||n(),h()},disabled:Z})}}},9421:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(917),i=n(2209),o=n(1371),c=n(9711);var u,a=n(5944),s=(0,r.F4)(u||(u=(0,i.Z)(["\n  to {\n    transform: rotate(360deg);\n  }\n"]))),l=function(e){var t=e.size,n=void 0===t?20:t,i=e.borderWidth,u=void 0===i?3:i,l=e.color,d=void 0===l?o.O.gray[9]:l,f=function(e){var t,n,r=null!==(t=null===(n=e.trim().replace("#","").match(/[a-fA-F\d]{2}/g))||void 0===n?void 0:n.map((function(e){return parseInt(e,16)})))&&void 0!==t?t:[],i=(0,c.Z)(r,3);return{red:i[0],green:i[1],blue:i[2]}}(d),p=f.red,v=f.green,h=f.blue;return(0,a.tZ)("div",{css:(0,r.iv)({display:"inline-block",width:n,height:n,border:"".concat(u,"px solid rgba(").concat(p,", ").concat(v,", ").concat(h,", 0.3)"),borderTopColor:d,borderRadius:"50%",animation:"".concat(s," 1s ease-in-out infinite")},"","")})}},3330:function(e,t,n){var r=n(3824),i=n(1163),o=n(7294),c=n(2132),u=n(5944);t.Z=function(e){var t=e.children,n=(0,r.E)().isAuthenticated;return(0,o.useEffect)((function(){if(console.log(n),!n){var e=(0,c.f0)({redirectTo:location.href});i.default.replace("/login".concat(e))}}),[n]),(0,u.tZ)(u.HY,{children:n?t:null})}},7951:function(e,t,n){var r=n(2809),i=n(917),o=n(1164),c=n(1371),u=n(9353),a=n(5944),s=["children"],l=["children"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){var t=e.upper,n=e.lower;return(0,a.BX)(u.kC,{direction:"column",children:[(0,a.tZ)(u.Ki,{size:24}),t,null!=t&&null!=n?(0,a.tZ)(u.Ki,{size:8}):null,n,(0,a.tZ)(u.Ki,{size:16})]})};p.Text2=function(e){var t=e.children,n=(0,o.Z)(e,s);return(0,a.tZ)("h2",f(f({css:(0,i.iv)({fontWeight:"bold",fontSize:24,lineHeight:1.3,color:c.O.gray[9],whiteSpace:"pre-line"},"","")},n),{},{children:t}))},p.Text6=function(e){var t=e.children,n=(0,o.Z)(e,l);return(0,a.tZ)("p",f(f({},n),{},{children:t}))},t.Z=p},2770:function(e,t,n){var r=n(917),i=n(1875),o=n(5944);t.Z=function(e){var t=e.type,n=e.children;return(0,o.tZ)("div",{css:(0,r.iv)({display:"inline-block",background:(0,i.C)(t),color:(0,i._)(t),borderRadius:20,padding:"4px 8px",fontSize:12},"",""),children:n})}},9270:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(2809),i=n(9353),o=n(7294),c=n(5641),u=(0,o.createContext)({selectedValue:"",onSelect:function(){return null},indicatorPosition:null,setIndicatorPosition:function(){return null}}),a=n(5944);var s={name:"1kcrvn3",styles:"position:relative;padding:12px 24px;flex-wrap:wrap;cursor:pointer;white-space:nowrap"};function l(e,t){var n=e.children,r=e.disabled,l=void 0!==r&&r,d=e.value,f=void 0===d?String(n):d,p=e.onClick,v=(0,o.useContext)(u),h=v.selectedValue,y=v.onSelect,b=v.indicatorPosition,g=v.setIndicatorPosition,w=h===f,Z=(0,o.useRef)(null),m=(0,c.HB)(Z,t);return(0,o.useEffect)((function(){if(w){var e=Z.current.clientWidth,t=Z.current.offsetLeft;g({width:e,left:t})}}),[w,f,g]),(0,a.tZ)(i.kC,{justify:"center",css:s,ref:function(e){if(m(e),null==b&&null!=e&&w){var t=e.clientWidth,n=e.offsetLeft;g({width:t,left:n})}},role:"tab","aria-disabled":l,"aria-selected":w,onClick:function(e){l?e.preventDefault():(null===p||void 0===p||p(e),y(f))},children:(0,a.tZ)(i.xv,{className:"lubycon-tabs__item__text",size:16,children:n})})}var d=(0,o.forwardRef)(l),f=n(917),p=n(1371),v=n(2023),h=function(e){var t=e.width,n=e.left;return(0,a.tZ)(v.E.div,{css:(0,f.iv)({position:"absolute",bottom:0,content:'""',backgroundColor:p.O.blue[5],borderRadius:1,height:2},"",""),animate:{width:t,left:n}})},y=(0,o.memo)(h);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={name:"ey59zk",styles:"position:relative;max-width:100%;overflow-x:auto"},Z=function(e){var t=e.selectedValue,n=e.onChange,r=e.children,c=(0,o.useState)(null),s=c[0],l=c[1];return(0,a.tZ)(u.Provider,{value:{selectedValue:t,onSelect:function(e){null===n||void 0===n||n(e)},indicatorPosition:s,setIndicatorPosition:l},children:(0,a.BX)(i.kC,{css:w,children:[r,null!=s?(0,a.tZ)(y,g({},s)):null]})})};Z.Item=d;var m=Z},9230:function(e,t,n){n.d(t,{eg:function(){return l},x1:function(){return d},SR:function(){return f},zk:function(){return p},Up:function(){return v},uT:function(){return h}});var r=n(2809),i=n(266),o=n(809),c=n.n(o),u=n(90);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(){var e=(0,i.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.F.get("/interviews/requests/mine/interviewers");case 2:return t=e.sent,e.abrupt("return",t.body.interview_requests);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.F.get("/interviewees/requests/mine/interviewees");case 2:return t=e.sent,e.abrupt("return",t.body.interview_requests);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,i.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.F.get("/interviews".concat(t));case 2:return n=e.sent,e.abrupt("return",n.body);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e,t){return u.F.post("/interviews/".concat(e,"/feedbacks"),t)},v=function(e,t){return u.F.post("/interviews/".concat(e,"/nps"),t)},h=function(e,t){return u.F.put("/interview/requests",s(s({},e),{},{updatedFields:t}))}},4332:function(e,t,n){n.d(t,{M:function(){return h}});var r=n(655),i=n(7294),o=n(4735),c=n(5411);var u=n(240),a=n(6681),s=0;function l(){var e=s;return s++,e}var d=function(e){var t=e.children,n=e.initial,o=e.isPresent,c=e.onExitComplete,s=e.custom,d=e.presenceAffectsLayout,p=(0,a.h)(f),v=(0,a.h)(l),h=(0,i.useMemo)((function(){return{id:v,initial:n,isPresent:o,custom:s,onExitComplete:function(e){var t,n;p.set(e,!0);try{for(var i=(0,r.XA)(p.values()),o=i.next();!o.done;o=i.next()){if(!o.value)return}}catch(u){t={error:u}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}null===c||void 0===c||c()},register:function(e){return p.set(e,!1),function(){return p.delete(e)}}}}),d?void 0:[o]);return(0,i.useMemo)((function(){p.forEach((function(e,t){return p.set(t,!1)}))}),[o]),i.useEffect((function(){!o&&!p.size&&(null===c||void 0===c||c())}),[o]),i.createElement(u.O.Provider,{value:h},t)};function f(){return new Map}var p=n(5364);function v(e){return e.key||""}var h=function(e){var t=e.children,n=e.custom,u=e.initial,a=void 0===u||u,s=e.onExitComplete,l=e.exitBeforeEnter,f=e.presenceAffectsLayout,h=void 0===f||f,y=(0,r.CR)(function(){var e=(0,i.useRef)(!1),t=(0,r.CR)((0,i.useState)(0),2),n=t[0],u=t[1];(0,c.z)((function(){return e.current=!0}));var a=(0,i.useCallback)((function(){!e.current&&u(n+1)}),[n]);return[(0,i.useCallback)((function(){return o.ZP.postRender(a)}),[a]),n]}(),1)[0],b=(0,i.useContext)(p.p).forceRender;b&&(y=b);var g=(0,i.useRef)(!0),w=(0,i.useRef)(!0);(0,i.useEffect)((function(){return function(){w.current=!1}}),[]);var Z=function(e){var t=[];return i.Children.forEach(e,(function(e){(0,i.isValidElement)(e)&&t.push(e)})),t}(t),m=(0,i.useRef)(Z),O=(0,i.useRef)(new Map).current,k=(0,i.useRef)(new Set).current;if(function(e,t){e.forEach((function(e){var n=v(e);t.set(n,e)}))}(Z,O),g.current)return g.current=!1,i.createElement(i.Fragment,null,Z.map((function(e){return i.createElement(d,{key:v(e),isPresent:!0,initial:!!a&&void 0,presenceAffectsLayout:h},e)})));for(var x=(0,r.ev)([],(0,r.CR)(Z),!1),E=m.current.map(v),C=Z.map(v),P=E.length,j=0;j<P;j++){var z=E[j];-1===C.indexOf(z)?k.add(z):k.delete(z)}return l&&k.size&&(x=[]),k.forEach((function(e){if(-1===C.indexOf(e)){var t=O.get(e);if(t){var r=E.indexOf(e);x.splice(r,0,i.createElement(d,{key:v(t),isPresent:!1,onExitComplete:function(){O.delete(e),k.delete(e);var t=m.current.findIndex((function(t){return t.key===e}));if(m.current.splice(t,1),!k.size){if(m.current=Z,!1===w.current)return;y(),s&&s()}},custom:n,presenceAffectsLayout:h},t))}}})),x=x.map((function(e){var t=e.key;return k.has(t)?e:i.createElement(d,{key:v(e),isPresent:!0,presenceAffectsLayout:h},e)})),m.current=x,i.createElement(i.Fragment,null,k.size?x:x.map((function(e){return(0,i.cloneElement)(e)})))}}}]);