"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9510],{7349:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(3946),o=t(9013),i=t(3882);function u(e,n){(0,i.Z)(2,arguments);var t=(0,o.Z)(e),u=(0,r.Z)(n);return isNaN(u)?new Date(NaN):u?(t.setDate(t.getDate()+u),t):t}},8545:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(3946),o=t(1820),i=t(3882);function u(e,n){(0,i.Z)(2,arguments);var t=(0,r.Z)(n);return(0,o.Z)(e,6e4*t)}},7566:function(e,n,t){var r=t(2809),o=t(917),i=t(1164),u=t(6914),c=t(6557),a=t(5944),l=["show","children"];function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.show,t=e.children,r=(0,i.Z)(e,l);return(0,a.tZ)("div",d(d({css:(0,o.iv)({position:"fixed",bottom:"0",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:u.t,zIndex:c.k.FIXED_BOTTOM,boxSizing:"border-box"},"","")},r),{},{children:(0,a.tZ)("div",{css:(0,o.iv)({transform:"translateY(".concat(n?"0":"100%",")"),transition:"transform 0.3s ease-in-out"},"",""),children:t})}))}},4143:function(e,n,t){t.d(n,{P:function(){return r},Y:function(){return o}});var r=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"],o={SUNDAY:"\uc77c\uc694\uc77c",MONDAY:"\uc6d4\uc694\uc77c",TUESDAY:"\ud654\uc694\uc77c",WEDNESDAY:"\uc218\uc694\uc77c",THURSDAY:"\ubaa9\uc694\uc77c",FRIDAY:"\uae08\uc694\uc77c",SATURDAY:"\ud1a0\uc694\uc77c"}},9510:function(e,n,t){t.r(n),t.d(n,{default:function(){return W}});var r=t(2809),o=t(7566),i=t(8031),u=t(266),c=t(9711),a=t(809),l=t.n(a),s=t(8253),d=t(7294),f=t(8424),v=t.n(f);var m=t(767),h=t(9929),p=t(9230),b=t(5458),y=function(e){var n;return function(){return n||(n=v().createClient(e)),n}}({mode:"rtc",codec:"vp8"}),g=function(e){var n=null;return function(){var t=(0,d.useState)(!1),r=t[0],o=t[1],i=(0,d.useState)(null),u=i[0],c=i[1],a=(0,d.useRef)(n);return(0,d.useEffect)((function(){return null===a.current?function(){try{return Promise.resolve(v().createMicrophoneAudioTrack(e)).then((function(e){return n=e}))}catch(t){return Promise.reject(t)}}().then((function(e){a.current=e,o(!0)}),(function(e){c(e)})):o(!0),function(){n=null}}),[]),{ready:r,track:a.current,error:u}}}({encoderConfig:"high_quality"});var O=t(8947),w=t(917),k=t(9445),Z=t(1371),D=t(5944),T=function(e){var n=e.defaultValue,t=e.onChange,r=(0,d.useState)(null!==n&&void 0!==n&&n),o=r[0],i=r[1],u=o?"mic-off":"mic";return(0,d.useEffect)((function(){null===t||void 0===t||t(o)}),[o]),(0,D.tZ)("button",{css:(0,w.iv)({backgroundColor:o?Z.O.gray[4]:Z.O.gray[2],borderRadius:"50%",border:"none",width:50,height:50,cursor:"pointer",transition:"background-color 0.2s ease-in-out"},"",""),onClick:function(){return i((function(e){return!e}))},children:(0,D.tZ)(k.J,{name:u,type:"outline",size:30,color:Z.O.white},u)})},E=t(1164);var j=["userName","color","size","fontSize","children","audioTrack"];function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var A=function(e){var n=e.userName,t=e.color,r=e.size,o=(e.fontSize,e.children),i=e.audioTrack,u=(0,E.Z)(e,j),c=(0,d.useState)(0),a=c[0],l=c[1],s=.3*a+1;return(0,d.useEffect)((function(){if(null!=i)return i.setAudioFrameCallback((function(e){var n=e.getChannelData(0);l(2*function(e){var n=e.reduce((function(e,n){return e+Math.abs(n)}),0);return Math.sqrt(n/e.length)}(n))})),function(){try{null===i||void 0===i||i.setAudioFrameCallback(null)}catch(e){e instanceof Error&&console.warn(e.message)}}}),[i]),(0,D.BX)(O.Kq,{gutter:16,direction:"column",align:"center",children:[(0,D.tZ)(O.kC,S(S({direction:"column",justify:"center",align:"center",css:(0,w.iv)({backgroundColor:t,color:Z.O.white,width:r,height:r,borderRadius:"50%",opacity:.6,transition:"background-color 0.5s ease-in"},"","")},u),{},{children:(0,D.tZ)("div",{style:{transform:"scale(".concat(s,")")},css:(0,w.iv)({width:r,height:r,transition:"transform 0.1s ease-in-out",filter:"blur(2px)",position:"absolute",zIndex:0,backgroundColor:t,opacity:.3,borderRadius:"50%"},"","")})})),(0,D.tZ)(O.H_,{size:14,weight:"bold",align:"center",css:(0,w.iv)({width:r+24,wordBreak:"break-all"},"",""),children:n}),o]})};var N={name:"1d3w5wq",styles:"width:100%"},P=function(e){var n=e.playing,t=e.me,r=e.myAudioTrack,o=e.remoteUser,i=e.remoteUserAudioTrack,u="JOINED"===e.remoteStatus,c=u&&null==i;return(0,D.BX)(O.Kq,{justify:"center",gutter:32,css:N,children:[(0,D.tZ)(A,{userName:t.nickname,color:n?Z.O.primary:Z.O.gray[3],size:100,audioTrack:r}),(0,D.tZ)(A,{userName:o.nickname,color:u?Z.O.cyan[5]:Z.O.gray[3],size:100,audioTrack:i,children:c&&(0,D.BX)(D.HY,{children:[(0,D.tZ)(O.Ki,{size:8}),(0,D.tZ)(k.J,{name:"mic-off",size:20,color:Z.O.red[5]})]})})]})},_=t(8996),z=t(2591),I=t(9013),R=t(3882);var U=t(3946),Y=t(8545);var x=function(e){return function(e,n){(0,R.Z)(2,arguments);var t=(0,U.Z)(n);return(0,Y.Z)(e,-t)}(e,10)};function M(e){var n=(0,d.useState)(!1),t=n[0],r=n[1],o=(0,d.useCallback)((function(){if(null!=e){var n=function(e,n){(0,R.Z)(2,arguments);var t=(0,I.Z)(e),r=(0,I.Z)(n);return t.getTime()>r.getTime()}(new Date,x(new Date(e.start_datetime)));r(n&&"DONE"!==e.status)}}),[e]);return(0,s.Yz)(o,1e3),t}var B=t(90);var H=t(3066);function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?X(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var F={name:"a3z6ut",styles:"padding:0 20px"},J={name:"1d3w5wq",styles:"width:100%"},K={name:"1d3w5wq",styles:"width:100%"},V=function(e,n){var t;switch(n){case"WAITING":return"\uc778\ud130\ubdf0\uac00 \uc544\uc9c1 \uc2dc\uc791\ub418\uc9c0 \uc54a\uc558\uc5b4\uc694";case"DONE":return"\uc778\ud130\ubdf0\uac00 \uc885\ub8cc\ub418\uc5c8\uc5b4\uc694";default:return"".concat(null!==(t=null===e||void 0===e?void 0:e.nickname)&&void 0!==t?t:"OOO","\ub2d8\uacfc\uc758 \uc778\ud130\ubdf0")}},W=function(e){var n,t=e.interviewId,r=e.token,a=e.onReady,v=e.onEnd,w=e.onRemoteUserJoined,k=e.onRemoteUserLeaved,E=(0,H.p)().openToast,j=(0,h.E)().me,C=(0,b.z)(t).data,S=M(C),A=function(e){var n=(0,d.useState)(0),t=n[0],r=n[1],o=(0,d.useCallback)((function(){if(null!=e){var n=new Date,t=new Date(e.end_datetime);r((t.getTime()-n.getTime())/1e3)}}),[e]);return(0,s.Yz)(o,500),Math.floor(t)}(C),N=(null===C||void 0===C?void 0:C.interviewer.id)===(null===j||void 0===j?void 0:j.id)?null===C||void 0===C?void 0:C.interviewee:null===C||void 0===C?void 0:C.interviewer,I=function(e){var n=e.interviewId,t=e.channelName,r=e.token,o=e.onRemoteUserJoined,i=e.onRemoteUserLeaved,a=e.onError,f=y(),v=g(),O=v.track,w=v.ready,k=v.error,Z=(0,s.zj)(),D=(0,c.Z)(Z,3),T=D[0],E=D[1],j=D[2],C=(0,d.useState)("WAITING"),S=C[0],A=C[1],N=(0,d.useState)(),P=N[0],_=N[1],z=(0,h.E)().me,I=(0,b.z)(n).data,R=(0,d.useMemo)((function(){return(null===I||void 0===I?void 0:I.interviewer.id)===(null===z||void 0===z?void 0:z.id)?null===I||void 0===I?void 0:I.interviewee:null===I||void 0===I?void 0:I.interviewer}),[I,z]),U=(0,d.useCallback)((0,u.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,p.hT)(n),e.next=3,f.join(m.xD,t,r,z.id);case 3:E(),null!=O&&f.publish(O);case 5:case"end":return e.stop()}}),e)}))),[O,E]),Y=(0,d.useCallback)((0,u.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A("LEFT"),_(void 0),f.leave(),null===O||void 0===O||O.setMuted(!1),j();case 5:case"end":return e.stop()}}),e)}))),[f,j,O]);return(0,d.useEffect)((function(){if(!1!==w&&null!=O){var e=function(){var e=(0,u.Z)(l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("\uc720\uc800\uac00 \ucc44\ub110\uc5d0 \uc785\uc7a5\ud558\uc600\uc2b5\ub2c8\ub2e4",n),A("JOINED"),null===o||void 0===o||o();case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n=function(){var e=(0,u.Z)(l().mark((function e(n,t){var r,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799\uc744 Publish \ud558\uc600\uc2b5\ub2c8\ub2e4",n),e.next=3,f.subscribe(n,t);case 3:null===(r=n.audioTrack)||void 0===r||r.setVolume(250),null===(o=n.audioTrack)||void 0===o||o.play(),_(n.audioTrack);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),t=function(){var e=(0,u.Z)(l().mark((function e(n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799 Publish\ub97c \uc911\ub2e8\ud558\uc600\uc2b5\ub2c8\ub2e4",n),null===(t=n.audioTrack)||void 0===t||t.stop(),e.next=4,f.unsubscribe(n);case 4:_(n.audioTrack);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),r=function(e){console.log("\uc0c1\ub300\ubc29\uc774 \ud1b5\ud654\ub97c \uc885\ub8cc\ud558\uc600\uc2b5\ub2c8\ub2e4",e),null===i||void 0===i||i()};return f.on("user-joined",e),f.on("user-published",n),f.on("user-unpublished",t),f.on("user-left",r),function(){"CONNECTED"!==f.connectionState&&"CONNECTING"!==f.connectionState||(f.off("user-joined",e),f.off("user-published",n),f.off("user-unpublished",t),f.off("user-left",r))}}}),[w,O,o,i]),(0,d.useEffect)((function(){null!=k&&(null===a||void 0===a||a(k))}),[k,a]),{client:f,ready:w,localAudioTrack:O,isCalling:T,joinToChannel:U,leaveToChannel:Y,remoteUser:R,remoteStatus:S,remoteAudioTrack:P}}({interviewId:t,channelName:null!==(n=null===C||void 0===C?void 0:C.agora_channel_id)&&void 0!==n?n:"",token:r,onRemoteUserJoined:w,onRemoteUserLeaved:k,onError:(0,d.useCallback)((function(e){switch(e.code){case f.AgoraRTCErrorCode.DEVICE_NOT_FOUND:E({message:"\uc624\ub514\uc624 \uc785\ub825 \ub610\ub294 \ucd9c\ub825 \uc7a5\uce58\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub9c8\uc774\ud06c\ub098 \uc2a4\ud53c\ucee4\uac00 \uc81c\ub300\ub85c \uc5f0\uacb0\ub418\uc5b4\uc788\ub294\uc9c0 \ud655\uc778\ud574\uc8fc\uc138\uc694."});break;case f.AgoraRTCErrorCode.PERMISSION_DENIED:E({message:"\ub9c8\uc774\ud06c \uc811\uadfc \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800 \uc124\uc815\uc5d0\uc11c \ub9c8\uc774\ud06c \uc811\uadfc \uad8c\ud55c\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694"});break;default:E({message:"\ud1b5\ud654 \uc5f0\uacb0\uc5d0 \uc2e4\ud328\ud588\uc5b4\uc694. \uc0c8\ub85c\uace0\uce68 \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."})}}),[E])}),R=I.client,U=I.ready,Y=I.localAudioTrack,x=I.isCalling,X=I.joinToChannel,W=I.leaveToChannel,G=I.remoteUser,L=I.remoteAudioTrack,Q=I.remoteStatus;(0,s.Yz)((function(){null!=j&&null!=C&&function(e){var n=e.userId,t=e.interviewId,r=e.Duration,o=e.OutgoingAvailableBandwidth,i=e.RTT,u=e.RecvBitrate,c=e.RecvBytes,a=e.SendBitrate,l=e.SendBytes,s=e.UserCount;B.G.post("/agora/metrics",{user_id:n,interview_id:t,duration:r,outgoing_available_bandwidth:o,rtt:i,recv_bitrate:u,recv_bytes:c,send_bitrate:a,send_bytes:l,user_count:s})}(q(q({},R.getRTCStats()),{},{userId:j.id,interviewId:C.id}))}),1e3);var $=!0===x;return(0,d.useEffect)((function(){!0===U&&(null===a||void 0===a||a())}),[U,a]),(0,d.useEffect)((function(){A<0&&!0===x&&(W(),null===v||void 0===v||v())}),[A,x,v]),(0,d.useEffect)((function(){return function(){W()}}),[]),null==j||null==G||null==C?null:(0,D.BX)(O.kC,{direction:"column",css:F,children:[(0,D.BX)(O.Kq,{gutter:16,direction:"column",align:"center",css:J,children:[(0,D.tZ)(O.Ki,{size:18}),(0,D.tZ)(O.H_,{size:20,weight:"bold",align:"center",children:V(N,C.status)}),$?(0,D.BX)(O.H_,{children:["\ub0a8\uc740 \uc2dc\uac04: ",(0,z.mr)(Math.floor(A/60)),":",(0,z.mr)(Math.floor(A%60))]}):(0,D.BX)(O.H_,{color:Z.O.gray[5],size:14,children:["\uc778\ud130\ubdf0 \uc2dc\uac04 : ",(0,_.Z)(new Date(C.start_datetime),"M\uc6d4 d\uc77c HH\uc2dc mm\ubd84")," ~"," ",(0,_.Z)(new Date(C.end_datetime),"M\uc6d4 d\uc77c HH\uc2dc mm\ubd84")]})]}),(0,D.tZ)(O.Ki,{size:40}),(0,D.tZ)(P,{playing:x,me:j,myAudioTrack:null!==Y&&void 0!==Y?Y:void 0,remoteUser:G,remoteUserAudioTrack:L,remoteStatus:Q}),x?(0,D.BX)(O.kC,{direction:"column",align:"center",justify:"center",css:K,children:[(0,D.tZ)(O.Ki,{size:50}),(0,D.tZ)(T,{defaultValue:null===Y||void 0===Y?void 0:Y.muted,onChange:function(e){null===Y||void 0===Y||Y.setMuted(e)}})]}):null,S&&(0,D.tZ)(o.Z,{show:!0,children:x?(0,D.tZ)(i.Z.BottomCTA,{onClick:W,children:"\ub098\uac00\uae30"}):(0,D.tZ)(i.Z.BottomCTA,{styleType:"primary",onClick:X,disabled:!1===U||null==Y,children:"\uc785\uc7a5\ud558\uae30"})})]})}},2591:function(e,n,t){t.d(n,{x5:function(){return l},mr:function(){return m},HT:function(){return f},FO:function(){return s},pV:function(){return v}});var r=t(7349),o=t(9013),i=t(3882);function u(e){(0,i.Z)(1,arguments);var n=(0,o.Z)(e),t=n.getDay();return t}var c=t(8996),a=t(4143),l=function(e){return(0,c.Z)(e,"yyyy-MM-dd'T'HH:mm")},s=function(e){return a.P[e.getDay()]},d=function(e){return a.P.findIndex((function(n){return n===e}))},f=function(e,n){var t,o=s(e),c=n.map(d),a=c.filter((function(n){return e.getDay()<n}));return!0===(null!=n.find((function(e){return o===e})))?e:function(e,n){(0,i.Z)(2,arguments);var t=n-u(e);return t<=0&&(t+=7),(0,r.Z)(e,t)}(e,null!==(t=null===a||void 0===a?void 0:a[0])&&void 0!==t?t:c[0])},v=function(e,n){if(null==n)return e;var t=(0,c.Z)(e,"yyyy-MM-dd");return new Date("".concat(t,"T").concat(n))},m=function(e){return e<0?"00":e>9?"".concat(e):"0".concat(e)}}}]);