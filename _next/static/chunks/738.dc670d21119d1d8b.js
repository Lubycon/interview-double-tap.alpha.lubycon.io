"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[738],{7566:function(e,n,t){var r=t(2809),i=t(917),o=t(1164),c=t(6914),a=t(6557),u=t(5944),s=["show","children"];function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.show,t=e.children,r=(0,o.Z)(e,s);return(0,u.tZ)("div",d(d({css:(0,i.iv)({position:"fixed",bottom:"0",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:c.t,zIndex:a.k.FIXED_BOTTOM,boxSizing:"border-box"},"","")},r),{},{children:(0,u.tZ)("div",{css:(0,i.iv)({transform:"translateY(".concat(n?"0":"100%",")"),transition:"transform 0.3s ease-in-out"},"",""),children:t})}))}},4143:function(e,n,t){t.d(n,{P:function(){return r},Y:function(){return i}});var r=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"],i={SUNDAY:"\uc77c\uc694\uc77c",MONDAY:"\uc6d4\uc694\uc77c",TUESDAY:"\ud654\uc694\uc77c",WEDNESDAY:"\uc218\uc694\uc77c",THURSDAY:"\ubaa9\uc694\uc77c",FRIDAY:"\uae08\uc694\uc77c",SATURDAY:"\ud1a0\uc694\uc77c"}},8738:function(e,n,t){t.r(n),t.d(n,{default:function(){return K}});var r=t(266),i=t(809),o=t.n(i),c=t(7566),a=t(8031),u=t(9711),s=t(5641),l=t(7032),d=t(767),f=t(9929),v=t(7294),h=t(9230),m=t(5458),p=(0,l.eI)({mode:"rtc",codec:"vp8"}),w=(0,l.Eu)({encoderConfig:"high_quality"});var b=t(9353),y=t(917),O=t(9445),g=t(1371),k=t(5944),Z=function(e){var n=e.defaultValue,t=e.onChange,r=(0,v.useState)(null!==n&&void 0!==n&&n),i=r[0],o=r[1],c=i?"mic-off":"mic";return(0,v.useEffect)((function(){null===t||void 0===t||t(i)}),[i]),(0,k.tZ)("button",{css:(0,y.iv)({backgroundColor:i?g.O.gray[4]:g.O.gray[2],borderRadius:"50%",border:"none",width:50,height:50,cursor:"pointer",transition:"background-color 0.2s ease-in-out"},"",""),onClick:function(){return o((function(e){return!e}))},children:(0,k.tZ)(O.J,{name:c,type:"outline",size:30,color:g.O.white},c)})},D=t(2809),T=t(1164);var C=["userName","color","size","fontSize","children","audioTrack"];function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){(0,D.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var E=function(e){var n=e.userName,t=e.color,r=e.size,i=(e.fontSize,e.children),o=e.audioTrack,c=(0,T.Z)(e,C),a=(0,v.useState)(0),u=a[0],s=a[1],l=.3*u+1;return(0,v.useEffect)((function(){if(null!=o)return o.setAudioFrameCallback((function(e){var n=e.getChannelData(0);s(2*function(e){var n=e.reduce((function(e,n){return e+Math.abs(n)}),0);return Math.sqrt(n/e.length)}(n))})),function(){try{null===o||void 0===o||o.setAudioFrameCallback(null)}catch(e){e instanceof Error&&console.warn(e.message)}}}),[o]),(0,k.BX)(b.Kq,{gutter:16,direction:"column",align:"center",children:[(0,k.tZ)(b.kC,A(A({direction:"column",justify:"center",align:"center",css:(0,y.iv)({backgroundColor:t,color:g.O.white,width:r,height:r,borderRadius:"50%",opacity:.6,transition:"background-color 0.5s ease-in"},"","")},c),{},{children:(0,k.tZ)("div",{style:{transform:"scale(".concat(l,")")},css:(0,y.iv)({width:r,height:r,transition:"transform 0.1s ease-in-out",filter:"blur(2px)",position:"absolute",zIndex:0,backgroundColor:t,opacity:.3,borderRadius:"50%"},"","")})})),(0,k.tZ)(b.xv,{size:14,weight:"bold",align:"center",css:(0,y.iv)({width:r+24,wordBreak:"break-all"},"",""),children:n}),i]})};var S={name:"1d3w5wq",styles:"width:100%"},z=function(e){var n=e.playing,t=e.me,r=e.myAudioTrack,i=e.remoteUser,o=e.remoteUserAudioTrack,c="JOINED"===e.remoteStatus,a=c&&null==o;return(0,k.BX)(b.Kq,{justify:"center",gutter:32,css:S,children:[(0,k.tZ)(E,{userName:t.nickname,color:n?g.O.primary:g.O.gray[3],size:100,audioTrack:r}),(0,k.tZ)(E,{userName:i.nickname,color:c?g.O.cyan[5]:g.O.gray[3],size:100,audioTrack:o,children:a&&(0,k.BX)(k.HY,{children:[(0,k.tZ)(b.Ki,{size:8}),(0,k.tZ)(O.J,{name:"mic-off",size:20,color:g.O.red[5]})]})})]})},N=t(1163),x=t(2132),P=t(8996),Y=t(8343),I=t(9184),U=t(6592),_=t(8619);function B(e){var n=(0,m.z)(e).data,t=(0,v.useState)(!1),r=t[0],i=t[1];return(0,s.Yz)((function(){if(null!=n){var e,t=new Date,r=(e=new Date(n.start_datetime),(0,_.Z)(e,10)),o=(0,U.Z)(t,r);i(o&&"DONE"!==n.status)}}),1e3),r}var M=t(6057),R=t(313);var X={name:"a3z6ut",styles:"padding:0 20px"},H={name:"1d3w5wq",styles:"width:100%"},q={name:"1d3w5wq",styles:"width:100%"},F=function(e,n){var t;switch(n){case"WAITING":return"\uc778\ud130\ubdf0\uac00 \uc544\uc9c1 \uc2dc\uc791\ub418\uc9c0 \uc54a\uc558\uc5b4\uc694";case"DONE":return"\uc778\ud130\ubdf0\uac00 \uc885\ub8cc\ub418\uc5c8\uc5b4\uc694";default:return"".concat(null!==(t=null===e||void 0===e?void 0:e.nickname)&&void 0!==t?t:"OOO","\ub2d8\uacfc\uc758 \uc778\ud130\ubdf0")}},K=function(e){var n,t=e.interviewId,i=e.token,l=e.onReady,y=(0,f.E)().me,O=(0,m.z)(t).data,D=B(t),T=function(e){var n=(0,m.z)(e).data,t=(0,v.useState)({minutes:-1,seconds:-1}),r=t[0],i=t[1];return(0,s.Yz)((function(){var e,t;if(null!=n){var r=new Date,o=new Date(n.start_datetime);if(!(0,R.Z)(r,o)){var c=new Date(n.end_datetime),a=(0,M.Z)({start:r,end:c});i({minutes:null!==(e=a.minutes)&&void 0!==e?e:-1,seconds:null!==(t=a.seconds)&&void 0!==t?t:-1})}}}),500),r}(t),C=(null===O||void 0===O?void 0:O.interviewer.id)===(null===y||void 0===y?void 0:y.id),j=C?null===O||void 0===O?void 0:O.interviewee:null===O||void 0===O?void 0:O.interviewer,A=null!==(n=null===O||void 0===O?void 0:O.agora_channel_id)&&void 0!==n?n:"",E=function(e){var n=e.interviewId,t=e.channelName,i=e.token,c=p(),a=w(),l=a.track,b=a.ready,y=(0,s.zj)(),O=(0,u.Z)(y,3),g=O[0],k=O[1],Z=O[2],D=(0,v.useState)("WAITING"),T=D[0],C=D[1],j=(0,v.useState)(),A=j[0],E=j[1],S=(0,f.E)().me,z=(0,m.z)(n).data,N=(0,v.useMemo)((function(){return(null===z||void 0===z?void 0:z.interviewer.id)===(null===S||void 0===S?void 0:S.id)?null===z||void 0===z?void 0:z.interviewee:null===z||void 0===z?void 0:z.interviewer}),[z,S]),x=(0,v.useCallback)((0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,h.hT)(n),e.next=3,c.join(d.xD,t,i,S.id);case 3:k(),null!=l&&c.publish(l);case 5:case"end":return e.stop()}}),e)}))),[l,k]),P=(0,v.useCallback)((0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C("LEFT"),E(void 0),c.leave(),null===l||void 0===l||l.setMuted(!1),Z(),(0,h.uC)(n);case 6:case"end":return e.stop()}}),e)}))),[c,Z,l,n]);return(0,v.useEffect)((function(){if(!1!==b&&null!=l){var e=function(){var e=(0,r.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("\uc720\uc800\uac00 \ucc44\ub110\uc5d0 \uc785\uc7a5\ud558\uc600\uc2b5\ub2c8\ub2e4",n),C("JOINED");case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n=function(){var e=(0,r.Z)(o().mark((function e(n,t){var r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799\uc744 Publish \ud558\uc600\uc2b5\ub2c8\ub2e4",n),e.next=3,c.subscribe(n,t);case 3:null===(r=n.audioTrack)||void 0===r||r.setVolume(250),null===(i=n.audioTrack)||void 0===i||i.play(),E(n.audioTrack);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),t=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799 Publish\ub97c \uc911\ub2e8\ud558\uc600\uc2b5\ub2c8\ub2e4",n),null===(t=n.audioTrack)||void 0===t||t.stop(),e.next=4,c.unsubscribe(n);case 4:E(n.audioTrack);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),i=function(e){console.log("\uc0c1\ub300\ubc29\uc774 \ud1b5\ud654\ub97c \uc885\ub8cc\ud558\uc600\uc2b5\ub2c8\ub2e4",e),P()};return c.on("user-joined",e),c.on("user-published",n),c.on("user-unpublished",t),c.on("user-left",i),function(){"CONNECTED"!==c.connectionState&&"CONNECTING"!==c.connectionState||(c.off("user-joined",e),c.off("user-published",n),c.off("user-unpublished",t),c.off("user-left",i))}}}),[b,l]),{client:c,ready:b,localAudioTrack:l,isCalling:g,joinToChannel:x,leaveToChannel:P,remoteUser:N,remoteStatus:T,remoteAudioTrack:A}}({interviewId:t,channelName:A,token:i}),S=E.ready,U=E.localAudioTrack,_=E.isCalling,K=E.joinToChannel,W=E.leaveToChannel,J=E.remoteUser,G=E.remoteAudioTrack,V=E.remoteStatus,L=!0===_;return(0,v.useEffect)((function(){!0===S&&(null===l||void 0===l||l())}),[S,l]),null==y||null==J||null==O?null:(0,k.BX)(b.kC,{direction:"column",css:X,children:[(0,k.BX)(b.Kq,{gutter:16,direction:"column",align:"center",css:H,children:[(0,k.tZ)(b.Ki,{size:18}),(0,k.tZ)(b.xv,{size:20,weight:"bold",align:"center",children:F(j,O.status)}),L?(0,k.BX)(b.xv,{children:["\ub0a8\uc740 \uc2dc\uac04: ",(0,I.mr)(T.minutes),":",(0,I.mr)(T.seconds)]}):(0,k.BX)(b.xv,{color:g.O.gray[5],size:14,children:["\uc778\ud130\ubdf0 \uc2dc\uac04 : ",(0,P.Z)(new Date(O.start_datetime),"M\uc6d4 d\uc77c HH\uc2dc mm\ubd84")," ~"," ",(0,P.Z)((0,Y.Z)(new Date(O.start_datetime),1),"M\uc6d4 d\uc77c HH\uc2dc mm\ubd84")]})]}),(0,k.tZ)(b.Ki,{size:40}),(0,k.tZ)(z,{playing:_,me:y,myAudioTrack:null!==U&&void 0!==U?U:void 0,remoteUser:J,remoteUserAudioTrack:G,remoteStatus:V}),_?(0,k.BX)(b.kC,{direction:"column",align:"center",justify:"center",css:q,children:[(0,k.tZ)(b.Ki,{size:50}),(0,k.tZ)(Z,{defaultValue:null===U||void 0===U?void 0:U.muted,onChange:function(e){null===U||void 0===U||U.setMuted(e)}})]}):null,D&&(0,k.tZ)(c.Z,{show:!0,children:_?(0,k.tZ)(a.Z.BottomCTA,{onClick:(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:n=(0,x.f0)({interviewId:t}),N.default.replace("/interviews/".concat(C?"feedback":"nps").concat(n));case 4:case"end":return e.stop()}}),e)}))),children:"\ub098\uac00\uae30"}):(0,k.tZ)(a.Z.BottomCTA,{styleType:"primary",onClick:K,disabled:!1===S||null==U,children:"\uc785\uc7a5\ud558\uae30"})})]})}},9184:function(e,n,t){t.d(n,{x5:function(){return o},FO:function(){return c},mr:function(){return a}});var r=t(8996),i=t(4143),o=function(e){return(0,r.Z)(e,"yyyy-MM-dd'T'HH:mm")},c=function(e){return i.P[e.getDay()]},a=function(e){return e>9?"".concat(e):"0".concat(e)}}}]);