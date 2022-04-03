"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[954],{17951:function(e,n,r){var t=r(92809),o=r(70917),i=r(91164),c=r(11371),u=r(89353),a=r(35944),l=["children"],s=["children"];function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var p=function(e){var n=e.upper,r=e.lower;return(0,a.BX)(u.kC,{direction:"column",children:[(0,a.tZ)(u.Ki,{size:24}),n,null!=n&&null!=r?(0,a.tZ)(u.Ki,{size:8}):null,r,(0,a.tZ)(u.Ki,{size:16})]})};p.Text2=function(e){var n=e.children,r=(0,i.Z)(e,l);return(0,a.tZ)("h2",f(f({css:(0,o.iv)({fontWeight:"bold",fontSize:24,lineHeight:1.3,color:c.O.gray[9],whiteSpace:"pre-line"},"","")},r),{},{children:n}))},p.Text6=function(e){var n=e.children,r=(0,i.Z)(e,s);return(0,a.tZ)("p",f(f({},r),{},{children:n}))},n.Z=p},87004:function(e,n,r){r.d(n,{Z:function(){return d}});var t=r(92809),o=r(70917),i=r(91164),c=r(16914),u=r(35944),a=["show","children"];function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var d=function(e){var n=e.show,r=e.children,t=(0,i.Z)(e,a);return(0,u.tZ)("div",s(s({css:(0,o.iv)({position:"fixed",bottom:"0",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:c.t,zIndex:100,boxSizing:"border-box"},"","")},t),{},{children:(0,u.tZ)("div",{css:(0,o.iv)({transform:"translateY(".concat(n?"0":"100%",")"),transition:"transform 0.3s ease-in-out"},"",""),children:r})}))}},75954:function(e,n,r){r.r(n),r.d(n,{default:function(){return B}});var t=r(87004),o=r(17951),i=r(8031),c=r(30266),u=r(21582),a=r(809),l=r.n(a),s=r(55641),d=r(67294),f=r(8424),p=r.n(f);var h=r(10767),v={nickname:"\uba74\uc811\ud5c8\uc811",email:"bboydart92@gmail.com",user_id:3,roles:["USER"],interviewer:null},b=function(e){var n;return function(){return n||(n=p().createClient(e)),n}}({mode:"rtc",codec:"vp8"}),m=function(e){var n=null;return function(){var r=(0,d.useState)(!1),t=r[0],o=r[1],i=(0,d.useState)(null),c=i[0],u=i[1],a=(0,d.useRef)(n);return(0,d.useEffect)((function(){return null===a.current?function(){try{return Promise.resolve(p().createMicrophoneAudioTrack(e)).then((function(e){return n=e}))}catch(r){return Promise.reject(r)}}().then((function(e){a.current=e,o(!0)}),(function(e){u(e)})):o(!0),function(){n=null}}),[]),{ready:t,track:a.current,error:c}}}({encoderConfig:{sampleRate:48e3,stereo:!0,bitrate:128}});var y=r(89353),g=r(70917),O=r(69445),k=r(11371),w=r(35944),Z=function(e){var n=e.defaultValue,r=e.onChange,t=(0,d.useState)(null!==n&&void 0!==n&&n),o=t[0],i=t[1],c=o?"mic-off":"mic";return(0,d.useEffect)((function(){null===r||void 0===r||r(o)}),[o]),(0,w.tZ)("button",{css:(0,g.iv)({backgroundColor:o?k.O.gray[4]:k.O.gray[2],borderRadius:"50%",border:"none",width:80,height:80,cursor:"pointer",transition:"background-color 0.2s ease-in-out"},"",""),onClick:function(){return i((function(e){return!e}))},children:(0,w.tZ)(O.J,{name:c,type:"outline",size:40,color:k.O.white},c)})},j=r(92809),C=r(91164);var T=["color","size","fontSize","children","audioTrack"];function P(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function x(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?P(Object(r),!0).forEach((function(n){(0,j.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var z=function(e){var n=e.color,r=e.size,t=(e.fontSize,e.children),o=e.audioTrack,i=(0,C.Z)(e,T),c=(0,d.useState)(0),u=c[0],a=c[1],l=.3*u+1;return(0,d.useEffect)((function(){if(null!=o)return o.setAudioFrameCallback((function(e){var n=e.getChannelData(0);a(function(e){var n=e.reduce((function(e,n){return e+Math.abs(n)}),0);return Math.sqrt(n/e.length)}(n))})),function(){try{null===o||void 0===o||o.setAudioFrameCallback(null)}catch(e){}}}),[o]),(0,w.BX)(y.kC,x(x({direction:"column",justify:"center",align:"center",css:(0,g.iv)({backgroundColor:n,color:k.O.white,width:r,height:r,borderRadius:"50%",opacity:.6,transition:"background-color 0.5s ease-in"},"","")},i),{},{children:[t,(0,w.tZ)("div",{style:{transform:"scale(".concat(l,")")},css:(0,g.iv)({width:r,height:r,transition:"transform 0.1s ease-in-out",filter:"blur(2px)",position:"absolute",zIndex:0,backgroundColor:n,opacity:.3,borderRadius:"50%"},"","")})]}))};var E={name:"1d3w5wq",styles:"width:100%"},S=function(e){var n=e.playing,r=e.me,t=e.myAudioTrack,o=e.remoteUser,i=e.remoteUserAudioTrack,c=null!=o,u=c&&null==i;return(0,w.BX)(y.Kq,{justify:"center",align:"center",gutter:16,css:E,children:[(0,w.tZ)(z,{color:n?k.O.primary:k.O.gray[6],size:150,audioTrack:t,children:(0,w.tZ)(y.xv,{children:r.nickname})}),(0,w.BX)(z,{color:c?k.O.cyan[5]:k.O.gray[6],size:150,audioTrack:i,children:[(0,w.tZ)(y.xv,{children:c?o.nickname:""}),u&&(0,w.BX)(w.HY,{children:[(0,w.tZ)(y.Ki,{size:8}),(0,w.tZ)(O.J,{name:"mic-off",size:20,color:k.O.red[5]})]})]})]})};var D={nickname:"\uba74\uc811\uc309\uace0\uc218",email:"bboydart91@gmail.com",user_id:2,roles:["USER","INTERVIEWER"],interviewer:{id:1,company:"\ube44\ubc14\ub9ac\ud37c\ube14\ub9ac\uce74",description:"\ud558\uc774\ud558\uc774",interview_count:10,rating:5,available_time:null,available_week:null}},A={name:"a3z6ut",styles:"padding:0 20px"},N={name:"1d3w5wq",styles:"width:100%"},B=function(e){var n,r=e.token,a=e.channelName,f=e.onReady,p=function(e){var n=e.channelName,r=e.token,t=b(),o=m(),i=o.track,a=o.ready,f=(0,s.zj)(),p=(0,u.Z)(f,3),y=p[0],g=p[1],O=p[2],k=(0,d.useState)(),w=k[0],Z=k[1],j=(0,d.useState)(),C=j[0],T=j[1],P=(0,d.useCallback)((0,c.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.join(h.xD,n,r,null);case 2:g(),null!=i&&t.publish(i);case 4:case"end":return e.stop()}}),e)}))),[i,g]),x=(0,d.useCallback)((function(){Z(void 0),T(void 0),t.leave(),null===i||void 0===i||i.setMuted(!1),O()}),[t,O,i]);return(0,d.useEffect)((function(){if(!1!==a&&null!=i){var e=function(){var e=(0,c.Z)(l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("\uc720\uc800\uac00 \ucc44\ub110\uc5d0 \uc785\uc7a5\ud558\uc600\uc2b5\ub2c8\ub2e4",n),Z(v);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n=function(){var e=(0,c.Z)(l().mark((function e(n,r){var o,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799\uc744 Publish \ud558\uc600\uc2b5\ub2c8\ub2e4",n),e.next=3,t.subscribe(n,r);case 3:null===(o=n.audioTrack)||void 0===o||o.setVolume(250),null===(i=n.audioTrack)||void 0===i||i.play(),T(n.audioTrack);case 6:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),r=function(){var e=(0,c.Z)(l().mark((function e(n){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799 Publish\ub97c \uc911\ub2e8\ud558\uc600\uc2b5\ub2c8\ub2e4",n),null===(r=n.audioTrack)||void 0===r||r.stop(),e.next=4,t.unsubscribe(n);case 4:T(n.audioTrack);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(e){console.log("\uc0c1\ub300\ubc29\uc774 \ud1b5\ud654\ub97c \uc885\ub8cc\ud558\uc600\uc2b5\ub2c8\ub2e4",e),x()};return t.on("user-joined",e),t.on("user-published",n),t.on("user-unpublished",r),t.on("user-left",o),i.setVolume(250),function(){"CONNECTED"!==t.connectionState&&"CONNECTING"!==t.connectionState||(t.off("user-joined",e),t.off("user-published",n),t.off("user-unpublished",r),t.off("user-left",o))}}}),[a,i]),{client:t,ready:a,localAudioTrack:i,isCalling:y,joinToChannel:P,leaveToChannel:x,remoteUser:w,remoteAudioTrack:C}}({channelName:a,token:r}),g=p.ready,O=p.localAudioTrack,k=p.isCalling,j=p.joinToChannel,C=p.leaveToChannel,T=p.remoteUser,P=p.remoteAudioTrack;return(0,d.useEffect)((function(){!0===g&&(null===f||void 0===f||f())}),[g]),(0,w.BX)(y.kC,{direction:"column",css:A,children:[(0,w.tZ)(o.Z,{upper:(0,w.BX)(o.Z.Text2,{children:["\ucc44\ub110\uba85 [",a,"]"]})}),(0,w.tZ)(y.Ki,{size:40}),(0,w.tZ)(S,{playing:k,me:D,myAudioTrack:null!==O&&void 0!==O?O:void 0,remoteUser:T,remoteUserAudioTrack:P}),k?(0,w.BX)(y.kC,{direction:"column",align:"center",justify:"center",css:N,children:[(0,w.tZ)(y.Ki,{size:50}),(0,w.tZ)(Z,{defaultValue:null===O||void 0===O?void 0:O.muted,onChange:function(e){null===O||void 0===O||O.setMuted(e)}}),(0,w.tZ)(y.Ki,{size:12}),(0,w.tZ)("input",{type:"range",min:"0",max:"1000",defaultValue:1e3*(null!==(n=null===O||void 0===O?void 0:O.getVolumeLevel())&&void 0!==n?n:0),onChange:function(e){null===O||void 0===O||O.setVolume(Number(e.target.value))}})]}):null,(0,w.tZ)(t.Z,{show:!0,children:k?(0,w.tZ)(i.Z.BottomCTA,{styleType:"danger",onClick:C,children:"\ub098\uac00\uae30"}):(0,w.tZ)(i.Z.BottomCTA,{styleType:"primary",onClick:j,disabled:!1===g||null==O,children:"\uc785\uc7a5\ud558\uae30"})})]})}}}]);