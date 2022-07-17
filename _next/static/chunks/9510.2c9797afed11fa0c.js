"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9510],{8545:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(3946),i=n(1820),o=n(3882);function u(e,t){(0,o.Z)(2,arguments);var n=(0,r.Z)(t);return(0,i.Z)(e,6e4*n)}},7566:function(e,t,n){var r=n(2809),i=n(917),o=n(1164),u=n(6914),c=n(6557),a=n(5944),l=["show","children"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.show,n=e.children,r=(0,o.Z)(e,l);return(0,a.tZ)("div",d(d({css:(0,i.iv)({position:"fixed",bottom:"0",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:u.t,zIndex:c.k.FIXED_BOTTOM,boxSizing:"border-box"},"","")},r),{},{children:(0,a.tZ)("div",{css:(0,i.iv)({transform:"translateY(".concat(t?"0":"100%",")"),transition:"transform 0.3s ease-in-out"},"",""),children:n})}))}},4143:function(e,t,n){n.d(t,{P:function(){return r},Y:function(){return i}});var r=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"],i={SUNDAY:"\uc77c\uc694\uc77c",MONDAY:"\uc6d4\uc694\uc77c",TUESDAY:"\ud654\uc694\uc77c",WEDNESDAY:"\uc218\uc694\uc77c",THURSDAY:"\ubaa9\uc694\uc77c",FRIDAY:"\uae08\uc694\uc77c",SATURDAY:"\ud1a0\uc694\uc77c"}},9510:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(2809),i=n(7566),o=n(8031),u=n(266),c=n(9711),a=n(809),l=n.n(a),s=n(5641),d=n(7294),f=n(8424),v=n.n(f);var h=n(767),m=n(9929),p=n(9230),b=n(5458),y=function(e){var t;return function(){return t||(t=v().createClient(e)),t}}({mode:"rtc",codec:"vp8"}),O=function(e){var t=null;return function(){var n=(0,d.useState)(!1),r=n[0],i=n[1],o=(0,d.useState)(null),u=o[0],c=o[1],a=(0,d.useRef)(t);return(0,d.useEffect)((function(){return null===a.current?function(){try{return Promise.resolve(v().createMicrophoneAudioTrack(e)).then((function(e){return t=e}))}catch(n){return Promise.reject(n)}}().then((function(e){a.current=e,i(!0)}),(function(e){c(e)})):i(!0),function(){t=null}}),[]),{ready:r,track:a.current,error:u}}}({encoderConfig:"high_quality"});var g=n(9353),w=n(917),k=n(9445),Z=n(1371),T=n(5944),D=function(e){var t=e.defaultValue,n=e.onChange,r=(0,d.useState)(null!==t&&void 0!==t&&t),i=r[0],o=r[1],u=i?"mic-off":"mic";return(0,d.useEffect)((function(){null===n||void 0===n||n(i)}),[i]),(0,T.tZ)("button",{css:(0,w.iv)({backgroundColor:i?Z.O.gray[4]:Z.O.gray[2],borderRadius:"50%",border:"none",width:50,height:50,cursor:"pointer",transition:"background-color 0.2s ease-in-out"},"",""),onClick:function(){return o((function(e){return!e}))},children:(0,T.tZ)(k.J,{name:u,type:"outline",size:30,color:Z.O.white},u)})},j=n(1164);var S=["userName","color","size","fontSize","children","audioTrack"];function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){var t=e.userName,n=e.color,r=e.size,i=(e.fontSize,e.children),o=e.audioTrack,u=(0,j.Z)(e,S),c=(0,d.useState)(0),a=c[0],l=c[1],s=.3*a+1;return(0,d.useEffect)((function(){if(null!=o)return o.setAudioFrameCallback((function(e){var t=e.getChannelData(0);l(2*function(e){var t=e.reduce((function(e,t){return e+Math.abs(t)}),0);return Math.sqrt(t/e.length)}(t))})),function(){try{null===o||void 0===o||o.setAudioFrameCallback(null)}catch(e){e instanceof Error&&console.warn(e.message)}}}),[o]),(0,T.BX)(g.Kq,{gutter:16,direction:"column",align:"center",children:[(0,T.tZ)(g.kC,A(A({direction:"column",justify:"center",align:"center",css:(0,w.iv)({backgroundColor:n,color:Z.O.white,width:r,height:r,borderRadius:"50%",opacity:.6,transition:"background-color 0.5s ease-in"},"","")},u),{},{children:(0,T.tZ)("div",{style:{transform:"scale(".concat(s,")")},css:(0,w.iv)({width:r,height:r,transition:"transform 0.1s ease-in-out",filter:"blur(2px)",position:"absolute",zIndex:0,backgroundColor:n,opacity:.3,borderRadius:"50%"},"","")})})),(0,T.tZ)(g.xv,{size:14,weight:"bold",align:"center",css:(0,w.iv)({width:r+24,wordBreak:"break-all"},"",""),children:t}),i]})};var P={name:"1d3w5wq",styles:"width:100%"},z=function(e){var t=e.playing,n=e.me,r=e.myAudioTrack,i=e.remoteUser,o=e.remoteUserAudioTrack,u="JOINED"===e.remoteStatus,c=u&&null==o;return(0,T.BX)(g.Kq,{justify:"center",gutter:32,css:P,children:[(0,T.tZ)(E,{userName:n.nickname,color:t?Z.O.primary:Z.O.gray[3],size:100,audioTrack:r}),(0,T.tZ)(E,{userName:i.nickname,color:u?Z.O.cyan[5]:Z.O.gray[3],size:100,audioTrack:o,children:c&&(0,T.BX)(T.HY,{children:[(0,T.tZ)(g.Ki,{size:8}),(0,T.tZ)(k.J,{name:"mic-off",size:20,color:Z.O.red[5]})]})})]})},N=n(8996),x=n(9184),_=n(9013),Y=n(3882);var I=n(3946),B=n(8545);var M=function(e){return function(e,t){(0,Y.Z)(2,arguments);var n=(0,I.Z)(t);return(0,B.Z)(e,-n)}(e,10)};function R(e){var t=(0,b.z)(e).data,n=(0,d.useState)(!1),r=n[0],i=n[1];return(0,s.Yz)((function(){if(null!=t){var e=function(e,t){(0,Y.Z)(2,arguments);var n=(0,_.Z)(e),r=(0,_.Z)(t);return n.getTime()>r.getTime()}(new Date,M(new Date(t.start_datetime)));i(e&&"DONE"!==t.status)}}),1e3),r}var U=n(90);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q={name:"a3z6ut",styles:"padding:0 20px"},F={name:"1d3w5wq",styles:"width:100%"},K={name:"1d3w5wq",styles:"width:100%"},W=function(e,t){var n;switch(t){case"WAITING":return"\uc778\ud130\ubdf0\uac00 \uc544\uc9c1 \uc2dc\uc791\ub418\uc9c0 \uc54a\uc558\uc5b4\uc694";case"DONE":return"\uc778\ud130\ubdf0\uac00 \uc885\ub8cc\ub418\uc5c8\uc5b4\uc694";default:return"".concat(null!==(n=null===e||void 0===e?void 0:e.nickname)&&void 0!==n?n:"OOO","\ub2d8\uacfc\uc758 \uc778\ud130\ubdf0")}},G=function(e){var t,n=e.interviewId,r=e.token,a=e.onReady,f=(0,m.E)().me,v=(0,b.z)(n).data,w=R(n),k=function(e){var t=(0,b.z)(e).data,n=(0,d.useState)(0),r=n[0],i=n[1];return(0,s.Yz)((function(){if(null!=t){var e=new Date,n=new Date(t.end_datetime);i((n.getTime()-e.getTime())/1e3)}}),500),Math.floor(r)}(n),j=(null===v||void 0===v?void 0:v.interviewer.id)===(null===f||void 0===f?void 0:f.id)?null===v||void 0===v?void 0:v.interviewee:null===v||void 0===v?void 0:v.interviewer,S=function(e){var t=e.interviewId,n=e.channelName,r=e.token,i=y(),o=O(),a=o.track,f=o.ready,v=(0,s.zj)(),g=(0,c.Z)(v,3),w=g[0],k=g[1],Z=g[2],T=(0,d.useState)("WAITING"),D=T[0],j=T[1],S=(0,d.useState)(),C=S[0],A=S[1],E=(0,m.E)().me,P=(0,b.z)(t).data,z=(0,d.useMemo)((function(){return(null===P||void 0===P?void 0:P.interviewer.id)===(null===E||void 0===E?void 0:E.id)?null===P||void 0===P?void 0:P.interviewee:null===P||void 0===P?void 0:P.interviewer}),[P,E]),N=(0,d.useCallback)((0,u.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,p.hT)(t),e.next=3,i.join(h.xD,n,r,E.id);case 3:k(),null!=a&&i.publish(a);case 5:case"end":return e.stop()}}),e)}))),[a,k]),x=(0,d.useCallback)((0,u.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j("LEFT"),A(void 0),i.leave(),null===a||void 0===a||a.setMuted(!1),Z();case 5:case"end":return e.stop()}}),e)}))),[i,Z,a]);return(0,d.useEffect)((function(){if(!1!==f&&null!=a){var e=function(){var e=(0,u.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("\uc720\uc800\uac00 \ucc44\ub110\uc5d0 \uc785\uc7a5\ud558\uc600\uc2b5\ub2c8\ub2e4",t),j("JOINED");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var e=(0,u.Z)(l().mark((function e(t,n){var r,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799\uc744 Publish \ud558\uc600\uc2b5\ub2c8\ub2e4",t),e.next=3,i.subscribe(t,n);case 3:null===(r=t.audioTrack)||void 0===r||r.setVolume(250),null===(o=t.audioTrack)||void 0===o||o.play(),A(t.audioTrack);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),n=function(){var e=(0,u.Z)(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799 Publish\ub97c \uc911\ub2e8\ud558\uc600\uc2b5\ub2c8\ub2e4",t),null===(n=t.audioTrack)||void 0===n||n.stop(),e.next=4,i.unsubscribe(t);case 4:A(t.audioTrack);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(e){console.log("\uc0c1\ub300\ubc29\uc774 \ud1b5\ud654\ub97c \uc885\ub8cc\ud558\uc600\uc2b5\ub2c8\ub2e4",e)};return i.on("user-joined",e),i.on("user-published",t),i.on("user-unpublished",n),i.on("user-left",r),function(){"CONNECTED"!==i.connectionState&&"CONNECTING"!==i.connectionState||(i.off("user-joined",e),i.off("user-published",t),i.off("user-unpublished",n),i.off("user-left",r))}}}),[f,a]),{client:i,ready:f,localAudioTrack:a,isCalling:w,joinToChannel:N,leaveToChannel:x,remoteUser:z,remoteStatus:D,remoteAudioTrack:C}}({interviewId:n,channelName:null!==(t=null===v||void 0===v?void 0:v.agora_channel_id)&&void 0!==t?t:"",token:r}),C=S.client,A=S.ready,E=S.localAudioTrack,P=S.isCalling,_=S.joinToChannel,Y=S.leaveToChannel,I=S.remoteUser,B=S.remoteAudioTrack,M=S.remoteStatus;(0,s.Yz)((function(){null!=f&&null!=v&&function(e){var t=e.userId,n=e.interviewId,r=e.Duration,i=e.OutgoingAvailableBandwidth,o=e.RTT,u=e.RecvBitrate,c=e.RecvBytes,a=e.SendBitrate,l=e.SendBytes,s=e.UserCount;U.G.post("/agora/metrics",{user_id:t,interview_id:n,duration:r,outgoing_available_bandwidth:i,rtt:o,recv_bitrate:u,recv_bytes:c,send_bitrate:a,send_bytes:l,user_count:s})}(H(H({},C.getRTCStats()),{},{userId:f.id,interviewId:v.id}))}),1e3);var X=!0===P;return(0,d.useEffect)((function(){!0===A&&(null===a||void 0===a||a())}),[A,a]),(0,d.useEffect)((function(){k<0&&!0===P&&Y()}),[k,P]),null==f||null==I||null==v?null:(0,T.BX)(g.kC,{direction:"column",css:q,children:[(0,T.BX)(g.Kq,{gutter:16,direction:"column",align:"center",css:F,children:[(0,T.tZ)(g.Ki,{size:18}),(0,T.tZ)(g.xv,{size:20,weight:"bold",align:"center",children:W(j,v.status)}),X?(0,T.BX)(g.xv,{children:["\ub0a8\uc740 \uc2dc\uac04: ",(0,x.mr)(Math.floor(k/60)),":",(0,x.mr)(Math.floor(k%60))]}):(0,T.BX)(g.xv,{color:Z.O.gray[5],size:14,children:["\uc778\ud130\ubdf0 \uc2dc\uac04 : ",(0,N.Z)(new Date(v.start_datetime),"M\uc6d4 d\uc77c HH\uc2dc mm\ubd84")," ~"," ",(0,N.Z)(new Date(v.end_datetime),"M\uc6d4 d\uc77c HH\uc2dc mm\ubd84")]})]}),(0,T.tZ)(g.Ki,{size:40}),(0,T.tZ)(z,{playing:P,me:f,myAudioTrack:null!==E&&void 0!==E?E:void 0,remoteUser:I,remoteUserAudioTrack:B,remoteStatus:M}),P?(0,T.BX)(g.kC,{direction:"column",align:"center",justify:"center",css:K,children:[(0,T.tZ)(g.Ki,{size:50}),(0,T.tZ)(D,{defaultValue:null===E||void 0===E?void 0:E.muted,onChange:function(e){null===E||void 0===E||E.setMuted(e)}})]}):null,w&&(0,T.tZ)(i.Z,{show:!0,children:P?(0,T.tZ)(o.Z.BottomCTA,{onClick:Y,children:"\ub098\uac00\uae30"}):(0,T.tZ)(o.Z.BottomCTA,{styleType:"primary",onClick:_,disabled:!1===A||null==E,children:"\uc785\uc7a5\ud558\uae30"})})]})}},9184:function(e,t,n){n.d(t,{x5:function(){return o},FO:function(){return u},mr:function(){return c}});var r=n(8996),i=n(4143),o=function(e){return(0,r.Z)(e,"yyyy-MM-dd'T'HH:mm")},u=function(e){return i.P[e.getDay()]},c=function(e){return e<0?"00":e>9?"".concat(e):"0".concat(e)}}}]);