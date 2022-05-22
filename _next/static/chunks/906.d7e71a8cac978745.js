"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{7951:function(e,n,t){var r=t(2809),o=t(917),i=t(1164),u=t(1371),c=t(9353),a=t(5944),s=["children"],l=["children"];function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=function(e){var n=e.upper,t=e.lower;return(0,a.BX)(c.kC,{direction:"column",children:[(0,a.tZ)(c.Ki,{size:24}),n,null!=n&&null!=t?(0,a.tZ)(c.Ki,{size:8}):null,t,(0,a.tZ)(c.Ki,{size:16})]})};p.Text2=function(e){var n=e.children,t=(0,i.Z)(e,s);return(0,a.tZ)("h2",d(d({css:(0,o.iv)({fontWeight:"bold",fontSize:24,lineHeight:1.3,color:u.O.gray[9],whiteSpace:"pre-line"},"","")},t),{},{children:n}))},p.Text6=function(e){var n=e.children,t=(0,i.Z)(e,l);return(0,a.tZ)("p",d(d({},t),{},{children:n}))},n.Z=p},7566:function(e,n,t){var r=t(2809),o=t(917),i=t(1164),u=t(6914),c=t(6557),a=t(5944),s=["show","children"];function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.show,t=e.children,r=(0,i.Z)(e,s);return(0,a.tZ)("div",f(f({css:(0,o.iv)({position:"fixed",bottom:"0",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:u.t,zIndex:c.k.FIXED_BOTTOM,boxSizing:"border-box"},"","")},r),{},{children:(0,a.tZ)("div",{css:(0,o.iv)({transform:"translateY(".concat(n?"0":"100%",")"),transition:"transform 0.3s ease-in-out"},"",""),children:t})}))}},906:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(266),o=t(809),i=t.n(o),u=t(7566),c=t(7951),a=t(8031),s=t(9711),l=t(5641),f=t(7294),d=t(8424),p=t.n(d);var v=t(767),h=t(9929),b=t(9230),y=t(8767);function m(e){return(0,y.useQuery)(["interview",e],(function(){return(0,b.SR)(e)}))}var w=function(e){var n;return function(){return n||(n=p().createClient(e)),n}}({mode:"rtc",codec:"vp8"}),O=function(e){var n=null;return function(){var t=(0,f.useState)(!1),r=t[0],o=t[1],i=(0,f.useState)(null),u=i[0],c=i[1],a=(0,f.useRef)(n);return(0,f.useEffect)((function(){return null===a.current?function(){try{return Promise.resolve(p().createMicrophoneAudioTrack(e)).then((function(e){return n=e}))}catch(t){return Promise.reject(t)}}().then((function(e){a.current=e,o(!0)}),(function(e){c(e)})):o(!0),function(){n=null}}),[]),{ready:r,track:a.current,error:u}}}({encoderConfig:{sampleRate:48e3,stereo:!0,bitrate:128}});var g=t(9353),k=t(917),Z=t(9445),j=t(1371),T=t(5944),C=function(e){var n=e.defaultValue,t=e.onChange,r=(0,f.useState)(null!==n&&void 0!==n&&n),o=r[0],i=r[1],u=o?"mic-off":"mic";return(0,f.useEffect)((function(){null===t||void 0===t||t(o)}),[o]),(0,T.tZ)("button",{css:(0,k.iv)({backgroundColor:o?j.O.gray[4]:j.O.gray[2],borderRadius:"50%",border:"none",width:80,height:80,cursor:"pointer",transition:"background-color 0.2s ease-in-out"},"",""),onClick:function(){return i((function(e){return!e}))},children:(0,T.tZ)(Z.J,{name:u,type:"outline",size:40,color:j.O.white},u)})},x=t(2809),P=t(1164);var S=["color","size","fontSize","children","audioTrack"];function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){(0,x.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var D=function(e){var n=e.color,t=e.size,r=(e.fontSize,e.children),o=e.audioTrack,i=(0,P.Z)(e,S),u=(0,f.useState)(0),c=u[0],a=u[1],s=.3*c+1;return(0,f.useEffect)((function(){if(null!=o)return o.setAudioFrameCallback((function(e){var n=e.getChannelData(0);a(function(e){var n=e.reduce((function(e,n){return e+Math.abs(n)}),0);return Math.sqrt(n/e.length)}(n))})),function(){null===o||void 0===o||o.setAudioFrameCallback(null)}}),[o]),(0,T.BX)(g.kC,z(z({direction:"column",justify:"center",align:"center",css:(0,k.iv)({backgroundColor:n,color:j.O.white,width:t,height:t,borderRadius:"50%",opacity:.6,transition:"background-color 0.5s ease-in"},"","")},i),{},{children:[r,(0,T.tZ)("div",{style:{transform:"scale(".concat(s,")")},css:(0,k.iv)({width:t,height:t,transition:"transform 0.1s ease-in-out",filter:"blur(2px)",position:"absolute",zIndex:0,backgroundColor:n,opacity:.3,borderRadius:"50%"},"","")})]}))};var A={name:"1d3w5wq",styles:"width:100%"},F=function(e){var n=e.playing,t=e.me,r=e.myAudioTrack,o=e.remoteUser,i=e.remoteUserAudioTrack,u="JOINED"===e.remoteStatus,c=u&&null==i;return(0,T.BX)(g.Kq,{justify:"center",align:"center",gutter:16,css:A,children:[(0,T.tZ)(D,{color:n?j.O.primary:j.O.gray[6],size:150,audioTrack:r,children:(0,T.tZ)(g.xv,{children:t.nickname})}),(0,T.BX)(D,{color:u?j.O.cyan[5]:j.O.gray[6],size:150,audioTrack:i,children:[(0,T.tZ)(g.xv,{children:u?o.nickname:""}),c&&(0,T.BX)(T.HY,{children:[(0,T.tZ)(g.Ki,{size:8}),(0,T.tZ)(Z.J,{name:"mic-off",size:20,color:j.O.red[5]})]})]})]})},I=t(1163),N=t(2132);var B={name:"a3z6ut",styles:"padding:0 20px"},X={name:"1d3w5wq",styles:"width:100%"},_=function(e){var n,t,o=e.interviewId,d=e.token,p=e.onReady,y=(0,h.E)().me,k=m(o).data,Z=(null===k||void 0===k?void 0:k.interviewer.id)===(null===y||void 0===y?void 0:y.id),j=null!==(n=null===k||void 0===k?void 0:k.agora_channel_id)&&void 0!==n?n:"",x=function(e){var n=e.interviewId,t=e.channelName,o=e.token,u=w(),c=O(),a=c.track,d=c.ready,p=(0,l.zj)(),y=(0,s.Z)(p,3),g=y[0],k=y[1],Z=y[2],j=(0,f.useState)("WAITING"),T=j[0],C=j[1],x=(0,f.useState)(),P=x[0],S=x[1],E=(0,h.E)().me,z=m(n).data,D=(0,f.useMemo)((function(){return(null===z||void 0===z?void 0:z.interviewer.id)===(null===E||void 0===E?void 0:E.id)?null===z||void 0===z?void 0:z.interviewee:null===z||void 0===z?void 0:z.interviewer}),[z,E]),A=(0,f.useCallback)((0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,b.hT)(n),e.next=3,u.join(v.xD,t,o,n);case 3:k(),null!=a&&u.publish(a);case 5:case"end":return e.stop()}}),e)}))),[a,k]),F=(0,f.useCallback)((0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C("LEFT"),S(void 0),u.leave(),null===a||void 0===a||a.setMuted(!1),Z(),(0,b.uC)(n);case 6:case"end":return e.stop()}}),e)}))),[u,Z,a,n]);return(0,f.useEffect)((function(){if(!1!==d&&null!=a){var e=function(){var e=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("\uc720\uc800\uac00 \ucc44\ub110\uc5d0 \uc785\uc7a5\ud558\uc600\uc2b5\ub2c8\ub2e4",n),C("JOINED");case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n=function(){var e=(0,r.Z)(i().mark((function e(n,t){var r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799\uc744 Publish \ud558\uc600\uc2b5\ub2c8\ub2e4",n),e.next=3,u.subscribe(n,t);case 3:null===(r=n.audioTrack)||void 0===r||r.setVolume(250),null===(o=n.audioTrack)||void 0===o||o.play(),S(n.audioTrack);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),t=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799 Publish\ub97c \uc911\ub2e8\ud558\uc600\uc2b5\ub2c8\ub2e4",n),null===(t=n.audioTrack)||void 0===t||t.stop(),e.next=4,u.unsubscribe(n);case 4:S(n.audioTrack);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(e){console.log("\uc0c1\ub300\ubc29\uc774 \ud1b5\ud654\ub97c \uc885\ub8cc\ud558\uc600\uc2b5\ub2c8\ub2e4",e),F()};return u.on("user-joined",e),u.on("user-published",n),u.on("user-unpublished",t),u.on("user-left",o),a.setVolume(250),function(){"CONNECTED"!==u.connectionState&&"CONNECTING"!==u.connectionState||(u.off("user-joined",e),u.off("user-published",n),u.off("user-unpublished",t),u.off("user-left",o))}}}),[d,a]),{client:u,ready:d,localAudioTrack:a,isCalling:g,joinToChannel:A,leaveToChannel:F,remoteUser:D,remoteStatus:T,remoteAudioTrack:P}}({interviewId:o,channelName:j,token:d}),P=x.ready,S=x.localAudioTrack,E=x.isCalling,z=x.joinToChannel,D=x.leaveToChannel,A=x.remoteUser,_=x.remoteAudioTrack,K=x.remoteStatus;return(0,f.useEffect)((function(){!0===P&&(null===p||void 0===p||p())}),[P,p]),null==y||null==A?null:(0,T.BX)(g.kC,{direction:"column",css:B,children:[(0,T.tZ)(c.Z,{upper:(0,T.BX)(c.Z.Text2,{children:["\ucc44\ub110\uba85 [",j,"]"]})}),(0,T.tZ)(g.Ki,{size:40}),(0,T.tZ)(F,{playing:E,me:y,myAudioTrack:null!==S&&void 0!==S?S:void 0,remoteUser:A,remoteUserAudioTrack:_,remoteStatus:K}),E?(0,T.BX)(g.kC,{direction:"column",align:"center",justify:"center",css:X,children:[(0,T.tZ)(g.Ki,{size:50}),(0,T.tZ)(C,{defaultValue:null===S||void 0===S?void 0:S.muted,onChange:function(e){null===S||void 0===S||S.setMuted(e)}}),(0,T.tZ)(g.Ki,{size:12}),(0,T.tZ)("input",{type:"range",min:"0",max:"1000",defaultValue:1e3*(null!==(t=null===S||void 0===S?void 0:S.getVolumeLevel())&&void 0!==t?t:0),onChange:function(e){null===S||void 0===S||S.setVolume(Number(e.target.value))}})]}):null,(0,T.tZ)(u.Z,{show:!0,children:E?(0,T.tZ)(a.Z.BottomCTA,{styleType:"danger",onClick:(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:n=(0,N.f0)({interviewId:o}),I.default.push("/interviews/".concat(Z?"feedback":"nps").concat(n));case 4:case"end":return e.stop()}}),e)}))),children:"\ub098\uac00\uae30"}):(0,T.tZ)(a.Z.BottomCTA,{styleType:"primary",onClick:z,disabled:!1===P||null==S,children:"\uc785\uc7a5\ud558\uae30"})})]})}},9230:function(e,n,t){t.d(n,{SR:function(){return c},zk:function(){return a},Up:function(){return s},WB:function(){return l},hT:function(){return f},uC:function(){return d},jo:function(){return p},L7:function(){return v},b8:function(){return h}});var r=t(266),o=t(809),i=t.n(o),u=t(90),c=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.F.get("/interviews/".concat(n));case 2:return t=e.sent,e.abrupt("return",t.body);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),a=function(e,n){return u.F.post("/interviews/".concat(e,"/feedbacks"),n)},s=function(e,n){return u.F.post("/interviews/".concat(e,"/nps"),n)},l=function(e){return u.F.get("/users/".concat(e,"/interview_schedules"))},f=function(e){return u.F.put("/interviews/".concat(e,"/in_progress"),{})},d=function(e){return u.F.put("/interviews/".concat(e,"/done"),{})},p=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.F.get("/interviews/mine/interviewers");case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.F.get("/interviews/mine/interviewees");case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.F.get("/auth/agora/token/".concat(n));case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},1164:function(e,n,t){function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,{Z:function(){return r}})}}]);