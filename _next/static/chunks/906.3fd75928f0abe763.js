"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{7951:function(e,r,t){var n=t(2809),o=t(917),i=t(1164),u=t(1371),c=t(9353),a=t(5944),s=["children"],l=["children"];function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var p=function(e){var r=e.upper,t=e.lower;return(0,a.BX)(c.kC,{direction:"column",children:[(0,a.tZ)(c.Ki,{size:24}),r,null!=r&&null!=t?(0,a.tZ)(c.Ki,{size:8}):null,t,(0,a.tZ)(c.Ki,{size:16})]})};p.Text2=function(e){var r=e.children,t=(0,i.Z)(e,s);return(0,a.tZ)("h2",d(d({css:(0,o.iv)({fontWeight:"bold",fontSize:24,lineHeight:1.3,color:u.O.gray[9],whiteSpace:"pre-line"},"","")},t),{},{children:r}))},p.Text6=function(e){var r=e.children,t=(0,i.Z)(e,l);return(0,a.tZ)("p",d(d({},t),{},{children:r}))},r.Z=p},7004:function(e,r,t){t.d(r,{Z:function(){return f}});var n=t(2809),o=t(917),i=t(1164),u=t(6914),c=t(5944),a=["show","children"];function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var f=function(e){var r=e.show,t=e.children,n=(0,i.Z)(e,a);return(0,c.tZ)("div",l(l({css:(0,o.iv)({position:"fixed",bottom:"0",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:u.t,zIndex:100,boxSizing:"border-box"},"","")},n),{},{children:(0,c.tZ)("div",{css:(0,o.iv)({transform:"translateY(".concat(r?"0":"100%",")"),transition:"transform 0.3s ease-in-out"},"",""),children:t})}))}},906:function(e,r,t){t.r(r),t.d(r,{default:function(){return I}});var n=t(7004),o=t(7951),i=t(8031),u=t(266),c=t(9711),a=t(809),s=t.n(a),l=t(5641),f=t(7294),d=t(8424),p=t.n(d);var v=t(767),h=t(3824),b=t(8767),y=t(9230);function O(e){return(0,b.useQuery)(["interview",e],(function(){return(0,y.SR)(e)}))}var m=function(e){var r;return function(){return r||(r=p().createClient(e)),r}}({mode:"rtc",codec:"vp8"}),w=function(e){var r=null;return function(){var t=(0,f.useState)(!1),n=t[0],o=t[1],i=(0,f.useState)(null),u=i[0],c=i[1],a=(0,f.useRef)(r);return(0,f.useEffect)((function(){return null===a.current?function(){try{return Promise.resolve(p().createMicrophoneAudioTrack(e)).then((function(e){return r=e}))}catch(t){return Promise.reject(t)}}().then((function(e){a.current=e,o(!0)}),(function(e){c(e)})):o(!0),function(){r=null}}),[]),{ready:n,track:a.current,error:u}}}({encoderConfig:{sampleRate:48e3,stereo:!0,bitrate:128}});var g=t(9353),k=t(917),j=t(9445),Z=t(1371),P=t(5944),C=function(e){var r=e.defaultValue,t=e.onChange,n=(0,f.useState)(null!==r&&void 0!==r&&r),o=n[0],i=n[1],u=o?"mic-off":"mic";return(0,f.useEffect)((function(){null===t||void 0===t||t(o)}),[o]),(0,P.tZ)("button",{css:(0,k.iv)({backgroundColor:o?Z.O.gray[4]:Z.O.gray[2],borderRadius:"50%",border:"none",width:80,height:80,cursor:"pointer",transition:"background-color 0.2s ease-in-out"},"",""),onClick:function(){return i((function(e){return!e}))},children:(0,P.tZ)(j.J,{name:u,type:"outline",size:40,color:Z.O.white},u)})},T=t(2809),x=t(1164);var S=["color","size","fontSize","children","audioTrack"];function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function z(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?E(Object(t),!0).forEach((function(r){(0,T.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var D=function(e){var r=e.color,t=e.size,n=(e.fontSize,e.children),o=e.audioTrack,i=(0,x.Z)(e,S),u=(0,f.useState)(0),c=u[0],a=u[1],s=.3*c+1;return(0,f.useEffect)((function(){if(null!=o)return o.setAudioFrameCallback((function(e){var r=e.getChannelData(0);a(function(e){var r=e.reduce((function(e,r){return e+Math.abs(r)}),0);return Math.sqrt(r/e.length)}(r))})),function(){null===o||void 0===o||o.setAudioFrameCallback(null)}}),[o]),(0,P.BX)(g.kC,z(z({direction:"column",justify:"center",align:"center",css:(0,k.iv)({backgroundColor:r,color:Z.O.white,width:t,height:t,borderRadius:"50%",opacity:.6,transition:"background-color 0.5s ease-in"},"","")},i),{},{children:[n,(0,P.tZ)("div",{style:{transform:"scale(".concat(s,")")},css:(0,k.iv)({width:t,height:t,transition:"transform 0.1s ease-in-out",filter:"blur(2px)",position:"absolute",zIndex:0,backgroundColor:r,opacity:.3,borderRadius:"50%"},"","")})]}))};var A={name:"1d3w5wq",styles:"width:100%"},N=function(e){var r=e.playing,t=e.me,n=e.myAudioTrack,o=e.remoteUser,i=e.remoteUserAudioTrack,u="JOINED"===e.remoteStatus,c=u&&null==i;return(0,P.BX)(g.Kq,{justify:"center",align:"center",gutter:16,css:A,children:[(0,P.tZ)(D,{color:r?Z.O.primary:Z.O.gray[6],size:150,audioTrack:n,children:(0,P.tZ)(g.xv,{children:t.nickname})}),(0,P.BX)(D,{color:u?Z.O.cyan[5]:Z.O.gray[6],size:150,audioTrack:i,children:[(0,P.tZ)(g.xv,{children:u?o.nickname:""}),c&&(0,P.BX)(P.HY,{children:[(0,P.tZ)(g.Ki,{size:8}),(0,P.tZ)(j.J,{name:"mic-off",size:20,color:Z.O.red[5]})]})]})]})};var B={name:"a3z6ut",styles:"padding:0 20px"},F={name:"1d3w5wq",styles:"width:100%"},I=function(e){var r,t=e.interviewId,a=e.token,d=e.channelName,p=e.onReady,b=(0,h.E)().user,y=function(e){var r=e.interviewId,t=e.channelName,n=e.token,o=m(),i=w(),a=i.track,d=i.ready,p=(0,l.zj)(),b=(0,c.Z)(p,3),y=b[0],g=b[1],k=b[2],j=(0,f.useState)("WAITING"),Z=j[0],P=j[1],C=(0,f.useState)(),T=C[0],x=C[1],S=(0,h.E)().user,E=O(r).data,z=(0,f.useMemo)((function(){return(null===E||void 0===E?void 0:E.interviewer.id)===(null===S||void 0===S?void 0:S.id)?null===E||void 0===E?void 0:E.interviewee:null===E||void 0===E?void 0:E.interviewer}),[E,S]),D=(0,f.useCallback)((0,u.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.join(v.xD,t,n,null);case 2:g(),null!=a&&o.publish(a);case 4:case"end":return e.stop()}}),e)}))),[a,g]),A=(0,f.useCallback)((function(){P("LEFT"),x(void 0),o.leave(),null===a||void 0===a||a.setMuted(!1),k()}),[o,k,a]);return(0,f.useEffect)((function(){if(!1!==d&&null!=a){var e=function(){var e=(0,u.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("\uc720\uc800\uac00 \ucc44\ub110\uc5d0 \uc785\uc7a5\ud558\uc600\uc2b5\ub2c8\ub2e4",r),P("JOINED");case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),r=function(){var e=(0,u.Z)(s().mark((function e(r,t){var n,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799\uc744 Publish \ud558\uc600\uc2b5\ub2c8\ub2e4",r),e.next=3,o.subscribe(r,t);case 3:null===(n=r.audioTrack)||void 0===n||n.setVolume(250),null===(i=r.audioTrack)||void 0===i||i.play(),x(r.audioTrack);case 6:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),t=function(){var e=(0,u.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799 Publish\ub97c \uc911\ub2e8\ud558\uc600\uc2b5\ub2c8\ub2e4",r),null===(t=r.audioTrack)||void 0===t||t.stop(),e.next=4,o.unsubscribe(r);case 4:x(r.audioTrack);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),n=function(e){console.log("\uc0c1\ub300\ubc29\uc774 \ud1b5\ud654\ub97c \uc885\ub8cc\ud558\uc600\uc2b5\ub2c8\ub2e4",e),A()};return o.on("user-joined",e),o.on("user-published",r),o.on("user-unpublished",t),o.on("user-left",n),a.setVolume(250),function(){"CONNECTED"!==o.connectionState&&"CONNECTING"!==o.connectionState||(o.off("user-joined",e),o.off("user-published",r),o.off("user-unpublished",t),o.off("user-left",n))}}}),[d,a]),{client:o,ready:d,localAudioTrack:a,isCalling:y,joinToChannel:D,leaveToChannel:A,remoteUser:z,remoteStatus:Z,remoteAudioTrack:T}}({interviewId:t,channelName:d,token:a}),k=y.ready,j=y.localAudioTrack,Z=y.isCalling,T=y.joinToChannel,x=y.leaveToChannel,S=y.remoteUser,E=y.remoteAudioTrack,z=y.remoteStatus;return(0,f.useEffect)((function(){!0===k&&(null===p||void 0===p||p())}),[k,p]),null==b||null==S?null:(0,P.BX)(g.kC,{direction:"column",css:B,children:[(0,P.tZ)(o.Z,{upper:(0,P.BX)(o.Z.Text2,{children:["\ucc44\ub110\uba85 [",d,"]"]})}),(0,P.tZ)(g.Ki,{size:40}),(0,P.tZ)(N,{playing:Z,me:b,myAudioTrack:null!==j&&void 0!==j?j:void 0,remoteUser:S,remoteUserAudioTrack:E,remoteStatus:z}),Z?(0,P.BX)(g.kC,{direction:"column",align:"center",justify:"center",css:F,children:[(0,P.tZ)(g.Ki,{size:50}),(0,P.tZ)(C,{defaultValue:null===j||void 0===j?void 0:j.muted,onChange:function(e){null===j||void 0===j||j.setMuted(e)}}),(0,P.tZ)(g.Ki,{size:12}),(0,P.tZ)("input",{type:"range",min:"0",max:"1000",defaultValue:1e3*(null!==(r=null===j||void 0===j?void 0:j.getVolumeLevel())&&void 0!==r?r:0),onChange:function(e){null===j||void 0===j||j.setVolume(Number(e.target.value))}})]}):null,(0,P.tZ)(n.Z,{show:!0,children:Z?(0,P.tZ)(i.Z.BottomCTA,{styleType:"danger",onClick:x,children:"\ub098\uac00\uae30"}):(0,P.tZ)(i.Z.BottomCTA,{styleType:"primary",onClick:T,disabled:!1===k||null==j,children:"\uc785\uc7a5\ud558\uae30"})})]})}},9230:function(e,r,t){t.d(r,{eg:function(){return l},x1:function(){return f},SR:function(){return d},zk:function(){return p},Up:function(){return v},uT:function(){return h}});var n=t(2809),o=t(266),i=t(809),u=t.n(i),c=t(90);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l=function(){var e=(0,o.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.F.get("/interviews/requests/mine/interviewers");case 2:return r=e.sent,e.abrupt("return",r.body.interview_requests);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,o.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.F.get("/interviewees/requests/mine/interviewees");case 2:return r=e.sent,e.abrupt("return",r.body.interview_requests);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,o.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.F.get("/interviews".concat(r));case 2:return t=e.sent,e.abrupt("return",t.body);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(e,r){return c.F.post("/interviews/".concat(e,"/feedbacks"),r)},v=function(e,r){return c.F.post("/interviews/".concat(e,"/nps"),r)},h=function(e,r){return c.F.put("/interview/requests",s(s({},e),{},{updatedFields:r}))}}}]);