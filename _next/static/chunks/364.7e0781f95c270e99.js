"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{45922:function(e,n,r){var t=r(92809),o=r(70917),i=r(91164),c=r(16914),u=r(35944),a=["show","children"];function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}n.Z=function(e){var n=e.show,r=e.children,t=(0,i.Z)(e,a);return(0,u.tZ)("div",s(s({css:(0,o.iv)({position:"fixed",bottom:"0",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:c.t,zIndex:100,boxSizing:"border-box"},"","")},t),{},{children:(0,u.tZ)("div",{css:(0,o.iv)({transform:"translateY(".concat(n?"0":"100%",")"),transition:"transform 0.3s ease-in-out"},"",""),children:r})}))}},17951:function(e,n,r){var t=r(92809),o=r(70917),i=r(91164),c=r(11371),u=r(89353),a=r(35944),l=["children"],s=["children"];function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var p=function(e){var n=e.upper,r=e.lower;return(0,a.BX)(u.kC,{direction:"column",children:[(0,a.tZ)(u.Ki,{size:24}),n,null!=n&&null!=r?(0,a.tZ)(u.Ki,{size:8}):null,r,(0,a.tZ)(u.Ki,{size:16})]})};p.Text2=function(e){var n=e.children,r=(0,i.Z)(e,l);return(0,a.tZ)("h2",f(f({css:(0,o.iv)({fontWeight:"bold",fontSize:24,lineHeight:1.3,color:c.O.gray[9],whiteSpace:"pre-line"},"","")},r),{},{children:n}))},p.Text6=function(e){var n=e.children,r=(0,i.Z)(e,s);return(0,a.tZ)("p",f(f({},r),{},{children:n}))},n.Z=p},21364:function(e,n,r){r.r(n),r.d(n,{default:function(){return N}});var t=r(45922),o=r(17951),i=r(8031),c=r(30266),u=r(21582),a=r(809),l=r.n(a),s=r(55641),d=r(27032),f=r(10767),p=r(67294),h={nickname:"\uba74\uc811\ud5c8\uc811",email:"bboydart92@gmail.com",user_id:3,roles:["USER"],interviewer:null},b=(0,d.eI)({mode:"rtc",codec:"vp8"}),v=(0,d.Eu)({encoderConfig:{sampleRate:48e3,stereo:!0,bitrate:128}});var m=r(89353),y=r(70917),O=r(69445),g=r(11371),k=r(35944),w=function(e){var n=e.defaultValue,r=e.onChange,t=(0,p.useState)(null!==n&&void 0!==n&&n),o=t[0],i=t[1],c=o?"mic-off":"mic";return(0,p.useEffect)((function(){null===r||void 0===r||r(o)}),[o]),(0,k.tZ)("button",{css:(0,y.iv)({backgroundColor:o?g.O.gray[4]:g.O.gray[2],borderRadius:"50%",border:"none",width:80,height:80,cursor:"pointer",transition:"background-color 0.2s ease-in-out"},"",""),onClick:function(){return i((function(e){return!e}))},children:(0,k.tZ)(O.J,{name:c,type:"outline",size:40,color:g.O.white},c)})},Z=r(92809),j=r(91164);var C=["color","size","fontSize","children","audioTrack"];function T(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function P(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?T(Object(r),!0).forEach((function(n){(0,Z.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var x=function(e){var n=e.color,r=e.size,t=(e.fontSize,e.children),o=e.audioTrack,i=(0,j.Z)(e,C),c=(0,p.useState)(0),u=c[0],a=c[1],l=.3*u+1;return(0,p.useEffect)((function(){if(null!=o)return o.setAudioFrameCallback((function(e){var n=e.getChannelData(0);a(function(e){var n=e.reduce((function(e,n){return e+Math.abs(n)}),0);return Math.sqrt(n/e.length)}(n))})),function(){try{null===o||void 0===o||o.setAudioFrameCallback(null)}catch(e){}}}),[o]),(0,k.BX)(m.kC,P(P({direction:"column",justify:"center",align:"center",css:(0,y.iv)({backgroundColor:n,color:g.O.white,width:r,height:r,borderRadius:"50%",opacity:.6,transition:"background-color 0.5s ease-in"},"","")},i),{},{children:[t,(0,k.tZ)("div",{style:{transform:"scale(".concat(l,")")},css:(0,y.iv)({width:r,height:r,transition:"transform 0.1s ease-in-out",filter:"blur(2px)",position:"absolute",zIndex:0,backgroundColor:n,opacity:.3,borderRadius:"50%"},"","")})]}))};var z={name:"1d3w5wq",styles:"width:100%"},E=function(e){var n=e.playing,r=e.me,t=e.myAudioTrack,o=e.remoteUser,i=e.remoteUserAudioTrack,c=null!=o,u=c&&null==i;return(0,k.BX)(m.Kq,{justify:"center",align:"center",gutter:16,css:z,children:[(0,k.tZ)(x,{color:n?g.O.primary:g.O.gray[6],size:150,audioTrack:t,children:(0,k.tZ)(m.xv,{children:r.nickname})}),(0,k.BX)(x,{color:c?g.O.cyan[5]:g.O.gray[6],size:150,audioTrack:i,children:[(0,k.tZ)(m.xv,{children:c?o.nickname:""}),u&&(0,k.BX)(k.HY,{children:[(0,k.tZ)(m.Ki,{size:8}),(0,k.tZ)(O.J,{name:"mic-off",size:20,color:g.O.red[5]})]})]})]})};var S={nickname:"\uba74\uc811\uc309\uace0\uc218",email:"bboydart91@gmail.com",user_id:2,roles:["USER","INTERVIEWER"],interviewer:{id:1,company:"\ube44\ubc14\ub9ac\ud37c\ube14\ub9ac\uce74",description:"\ud558\uc774\ud558\uc774",interview_count:10,rate:5}},D={name:"a3z6ut",styles:"padding:0 20px"},A={name:"1d3w5wq",styles:"width:100%"},N=function(e){var n,r=e.token,a=e.channelName,d=e.onReady,y=function(e){var n=e.channelName,r=e.token,t=b(),o=v(),i=o.track,a=o.ready,d=(0,s.zj)(),m=(0,u.Z)(d,3),y=m[0],O=m[1],g=m[2],k=(0,p.useState)(),w=k[0],Z=k[1],j=(0,p.useState)(),C=j[0],T=j[1],P=(0,p.useCallback)((0,c.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.join(f.xD,n,r,null);case 2:O(),null!=i&&t.publish(i);case 4:case"end":return e.stop()}}),e)}))),[i,O]),x=(0,p.useCallback)((function(){Z(void 0),T(void 0),t.leave(),null===i||void 0===i||i.setMuted(!1),g()}),[t,g,i]);return(0,p.useEffect)((function(){if(!1!==a&&null!=i){var e=function(){var e=(0,c.Z)(l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("\uc720\uc800\uac00 \ucc44\ub110\uc5d0 \uc785\uc7a5\ud558\uc600\uc2b5\ub2c8\ub2e4",n),Z(h);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n=function(){var e=(0,c.Z)(l().mark((function e(n,r){var o,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799\uc744 Publish \ud558\uc600\uc2b5\ub2c8\ub2e4",n),e.next=3,t.subscribe(n,r);case 3:null===(o=n.audioTrack)||void 0===o||o.setVolume(250),null===(i=n.audioTrack)||void 0===i||i.play(),T(n.audioTrack);case 6:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),r=function(){var e=(0,c.Z)(l().mark((function e(n){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799 Publish\ub97c \uc911\ub2e8\ud558\uc600\uc2b5\ub2c8\ub2e4",n),null===(r=n.audioTrack)||void 0===r||r.stop(),e.next=4,t.unsubscribe(n);case 4:T(n.audioTrack);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(e){console.log("\uc0c1\ub300\ubc29\uc774 \ud1b5\ud654\ub97c \uc885\ub8cc\ud558\uc600\uc2b5\ub2c8\ub2e4",e),x()};return t.on("user-joined",e),t.on("user-published",n),t.on("user-unpublished",r),t.on("user-left",o),i.setVolume(250),function(){"CONNECTED"!==t.connectionState&&"CONNECTING"!==t.connectionState||(t.off("user-joined",e),t.off("user-published",n),t.off("user-unpublished",r),t.off("user-left",o))}}}),[a,i]),{client:t,ready:a,localAudioTrack:i,isCalling:y,joinToChannel:P,leaveToChannel:x,remoteUser:w,remoteAudioTrack:C}}({channelName:a,token:r}),O=y.ready,g=y.localAudioTrack,Z=y.isCalling,j=y.joinToChannel,C=y.leaveToChannel,T=y.remoteUser,P=y.remoteAudioTrack;return(0,p.useEffect)((function(){!0===O&&(null===d||void 0===d||d())}),[O]),(0,k.BX)(m.kC,{direction:"column",css:D,children:[(0,k.tZ)(o.Z,{upper:(0,k.BX)(o.Z.Text2,{children:["\ucc44\ub110\uba85 [",a,"]"]})}),(0,k.tZ)(m.Ki,{size:40}),(0,k.tZ)(E,{playing:Z,me:S,myAudioTrack:null!==g&&void 0!==g?g:void 0,remoteUser:T,remoteUserAudioTrack:P}),Z?(0,k.BX)(m.kC,{direction:"column",align:"center",justify:"center",css:A,children:[(0,k.tZ)(m.Ki,{size:50}),(0,k.tZ)(w,{defaultValue:null===g||void 0===g?void 0:g.muted,onChange:function(e){null===g||void 0===g||g.setMuted(e)}}),(0,k.tZ)(m.Ki,{size:12}),(0,k.tZ)("input",{type:"range",min:"0",max:"1000",defaultValue:1e3*(null!==(n=null===g||void 0===g?void 0:g.getVolumeLevel())&&void 0!==n?n:0),onChange:function(e){null===g||void 0===g||g.setVolume(Number(e.target.value))}})]}):null,(0,k.tZ)(t.Z,{show:!0,children:Z?(0,k.tZ)(i.Z.BottomCTA,{styleType:"danger",onClick:C,children:"\ub098\uac00\uae30"}):(0,k.tZ)(i.Z.BottomCTA,{styleType:"primary",onClick:j,disabled:!1===O||null==g,children:"\uc785\uc7a5\ud558\uae30"})})]})}}}]);