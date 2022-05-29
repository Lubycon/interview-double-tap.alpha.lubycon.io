(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{1640:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(3946),i=n(9013),u=n(3882);function o(e,t){(0,u.Z)(2,arguments);var n=(0,i.Z)(e),o=(0,r.Z)(t);if(isNaN(o))return new Date(NaN);if(!o)return n;var c=n.getDate(),a=new Date(n.getTime());a.setMonth(n.getMonth()+o+1,0);var s=a.getDate();return c>=s?a:(n.setFullYear(a.getFullYear(),a.getMonth(),c),n)}},3776:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(3330),i=n(2809),u=n(266),o=n(9711),c=n(809),a=n.n(c),s=n(5641),l=n(917),f=n(3967),p=n(7566),v=n(7951),d=n(8031),w=n(1371),h=n(4332),y=n(9353),m=n(7294),b=n(7536),g=n(7745),Z=n(9977),q=n(7880),O=n(3946),x=n(9013),j=n(3882);var k=n(1640);function D(e){(0,j.Z)(1,arguments);var t=(0,x.Z)(e);return t.setHours(0,0,0,0),t}var _=n(8996),S=n(8767),N=n(9230),P=n(5944);var F=new Date,C=function(e,t){(0,j.Z)(2,arguments);var n=(0,x.Z)(e),r=(0,O.Z)(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}(F,1),T=(0,k.Z)(F,1),E={name:"1bfm292",styles:"padding:0px 8px 16px 8px"},H={name:"1oaeivz",styles:"margin-right:8px"},z=function(e){var t=e.intro,n=e.outro,r=e.data,i=e.loading,o=e.interviewer,c=e.onSubmit,s=e.onNextStep,O=e.onPrevStep,x=(0,S.useQuery)(["reservedInterviews",o.id],(0,u.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,N.WB)(o.id);case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})))).data,k=function(e){return(null!==x&&void 0!==x?x:[]).some((function(t){var n=t.datetime;return function(e,t){(0,j.Z)(2,arguments);var n=D(e),r=D(t);return n.getTime()===r.getTime()}(new Date(n),e)}))},F=null==t?0:-1,z=null==n?r.questions.length-1:r.questions.length,B=(0,b.cI)({defaultValues:null!==r&&void 0!==r?r:{}}),X=B.handleSubmit,Q=B.setError,K=B.clearErrors,R=B.getValues,M=B.formState,I=B.control,L=(0,m.useState)(F),W=L[0],Y=L[1],U=function(){if(W!==z){var e=R().questions[W],t=(0,Z.Q)(e);null==t?(Y((function(e){return e+1})),null===s||void 0===s||s(W,W+1,R())):Q("questions.".concat(W),t)}},V=function(e){var t=M.errors.questions;return null===t||void 0===t?void 0:t[e]},$=function(e){var t;null===(t=e.currentTarget)||void 0===t||t.blur(),U()},A=function(e,t){var n,r,i=null===o||void 0===o||null===(n=o.interviewer)||void 0===n?void 0:n.available_week,u=null===o||void 0===o||null===(r=o.interviewer)||void 0===r?void 0:r.available_time;switch(e.type){case"select":return(0,P.tZ)(g.Q.Select,{name:"questions.".concat(t,".value"),rules:{required:e.required},control:I,error:null!=V(t),onChange:function(e){K("questions.".concat(t)),$(e)},children:e.options.map((function(e){return(0,P.tZ)("option",{value:e.value,children:e.name},e.value)}))});case"file":return(0,P.tZ)(g.Q.File,{name:"questions.".concat(t,".file"),rules:{required:e.required},control:I,error:null!=V(t),onChange:function(e){K("questions.".concat(t)),$(e)},accept:"application/pdf"});case"datetime":return(0,P.tZ)(g.Q.Datetime,{name:"questions.".concat(t,".value"),rules:{required:e.required},control:I,error:null!=V(t),onChange:function(e){K("questions.".concat(t)),$(e)},availableDate:function(e){return(0,q.L0)(null!==i&&void 0!==i?i:[],e)&&!k(e)},availableTime:function(e){return(0,q.H)(null!==u&&void 0!==u?u:[],e)&&(t=e,!(null!==x&&void 0!==x?x:[]).some((function(e){var n=e.datetime;return(0,_.Z)(new Date(n),"HH:mm")===(0,_.Z)(new Date(t),"HH:mm")})));var t},minDate:C,maxDate:T});default:return(0,P.tZ)(g.Q.ShortText,{name:"questions.".concat(t,".value"),rules:{required:e.required},control:I,autoComplete:"off",placeholder:e.placeholder,type:e.type,error:null!=V(t),autoFocus:!0,onChange:function(){return K("questions.".concat(t))},onKeyUp:function(e){"Enter"===e.key&&$(e)}})}};return(0,P.BX)(P.HY,{children:[-1===W&&null!=t?t:null,(0,P.tZ)(h.M,{children:r.questions.map((function(e,t){var n;return(0,P.BX)(f.Z,{show:W===t,children:[(0,P.tZ)(v.Z,{lower:(0,P.tZ)(v.Z.Text2,{children:e.question})}),(0,P.tZ)(y.Ki,{size:20}),A(e,t),(0,P.tZ)(y.Ki,{size:8}),(0,P.tZ)("p",{css:(0,l.iv)({fontSize:14,whiteSpace:"pre-line",lineHeight:1.3,color:V(t)?w.O.red[5]:w.O.gray[6]},"",""),children:V(t)?null===(n=V(t))||void 0===n?void 0:n.message:e.description})]},t)}))}),W===z&&null!=n?n:null,(0,P.tZ)(p.Z,{show:!0,css:E,children:(0,P.BX)(y.kC,{direction:"row",children:[W!==F?(0,P.tZ)(d.Z,{styleType:"secondary",onClick:function(){W!==F&&(Y((function(e){return e-1})),null===O||void 0===O||O(W,W-1,R()))},disabled:i,css:H,children:"\uc774\uc804"}):null,W!==z?(0,P.tZ)(d.Z,{styleType:"primary",onClick:U,children:"\ub2e4\uc74c"}):null,W===z?(0,P.tZ)(d.Z,{styleType:"primary",type:"submit",onClick:X((function(e){null===c||void 0===c||c(e)})),disabled:i,loading:i,children:"\uc81c\ucd9c\ud558\uae30"}):null]})})]})},B=n(8571),X=n(1163),Q=n(8255),K=n(2132),R=n(3675);var M={name:"1efi8gv",styles:"font-weight:bold"},I={name:"1efi8gv",styles:"font-weight:bold"},L=function(e){var t=e.show;return(0,P.BX)(f.Z,{show:t,children:[(0,P.tZ)(v.Z,{lower:(0,P.tZ)(v.Z.Text2,{children:"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ud655\uc778\ud574\uc8fc\uc138\uc694!"})}),(0,P.tZ)(y.Ki,{size:20}),(0,P.BX)("p",{css:(0,l.iv)({color:w.O.gray[9],lineHeight:1.3},"",""),children:["\ub354\ube14\ud0ed \uc11c\ube44\uc2a4 \uc774\uc6a9\ub8cc\ub294 ",(0,P.tZ)("strong",{css:M,children:"\uba74\uc811 1\ud68c \ub2f9 5\ub9cc\uc6d0"}),"\uc774\uba70, \uba74\uc811\uc774 \ubaa8\ub450 \uc885\ub8cc\ub41c \uc774\ud6c4\uc5d0 \ub354\ube14\ud0ed\uc774 \uc548\ub0b4\ub4dc\ub9ac\ub294 \uacc4\uc88c\ub85c \uc785\uae08\ud574\uc8fc\uc2dc\uba74 \ub3fc\uc694."]}),(0,P.tZ)(y.Ki,{size:6}),(0,P.BX)("p",{css:(0,l.iv)({color:w.O.gray[9],lineHeight:1.3},"",""),children:["\uac00\uaca9 \uc815\ucc45\uc744 \ud655\uc778\ud558\uc168\ub2e4\uba74, ",(0,P.tZ)("strong",{css:I,children:"\uc81c\ucd9c\ud558\uae30"})," \ubc84\ud2bc\uc744 \ub20c\ub7ec \uc9c0\uc6d0\uc744 \uc644\ub8cc\ud574\uc8fc\uc138\uc694!"]})]})},W=n(8584);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V=function(e){return e.reduce((function(e,t){return U(U({},e),{},(0,i.Z)({},t.question,String(t.value)))}),{})},$=function(){var e=(0,s.Wd)("interviewerId"),t=(0,S.useQuery)(["interviewer",e],(function(){return null==e?Promise.resolve(null):(0,W.S1)(Number(e))})).data,n=function(){var e,t=(0,R.$)(),n=t.data;if(!t.isLoading)return{questions:[{fieldName:"position",question:"\uc9c0\uc6d0\ud558\uace0\uc790 \ud558\ub294\n\ud3ec\uc9c0\uc158\uc744 \uc54c\ub824\uc8fc\uc138\uc694",type:"select",value:"",options:null!==(e=null===n||void 0===n?void 0:n.body)&&void 0!==e?e:[],required:!0},{fieldName:"techStack",question:"\uc8fc\ub85c \uc0ac\uc6a9\ud558\uc2dc\ub294\n\uc5b8\uc5b4\ub098 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc54c\ub824\uc8fc\uc138\uc694",placeholder:"ex) React, TypeScript",type:"text",value:"",required:!0},{fieldName:"currentCompany",question:"\ud604\uc7ac \uc5b4\ub5a4 \ud68c\uc0ac\uc5d0 \ub2e4\ub2c8\uace0 \uc788\ub098\uc694?",description:"\uc9c0\uc6d0\uc790\ub2d8\uacfc \uac19\uc740 \ud68c\uc0ac\uc5d0 \ub2e4\ub2c8\uace0 \uc788\ub294 \uba74\uc811\uad00\uc740 \ub9e4\uce6d\uc5d0\uc11c \uc81c\uc678\ud574\ub4dc\ub824\uc694.\n\ud68c\uc0ac\ub97c \ub2e4\ub2c8\uace0 \uc788\uc9c0 \uc54a\ub2e4\uba74 \ub2e4\uc74c\uc73c\ub85c \ub118\uc5b4\uac00\uc8fc\uc138\uc694",type:"text",value:"",required:!0},{fieldName:"targetCompany",question:"\uad00\uc2ec\uc788\ub294 \ud68c\uc0ac\uac00 \uc788\ub2e4\uba74\n\uc54c\ub824\uc8fc\uc138\uc694",description:"\uc790\uc720\ub86d\uac8c \uc801\uc5b4\uc8fc\uc2dc\ub418, \uc5c6\ub2e4\uba74 \ubb34\uc2dc\ud558\uace0 \ub2e4\uc74c\uc73c\ub85c \ub118\uc5b4\uac00\uc8fc\uc138\uc694",placeholder:"ex) \ub124\uc774\ubc84, \ub2f9\uadfc\ub9c8\ucf13, \ud1a0\uc2a4",type:"text",value:""},{fieldName:"interviewDate",question:"\uba74\uc811\uc744 \ud76c\ub9dd\ud558\ub294 \ub0a0\uc9dc\uc640 \uc2dc\uac04\uc744 \uc815\ud574\uc8fc\uc138\uc694",type:"datetime",value:new Date,required:!0}]}}(),r=(0,s.zj)(),i=(0,o.Z)(r,3),c=i[0],l=i[1],f=i[2],p=(0,X.useRouter)(),v=function(){var e=(0,u.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t){e.next=2;break}return e.abrupt("return");case 2:return l(),B.tj.click("interviewee_apply",U({},V(n.questions))),e.prev=4,e.next=7,(0,Q.pR)(t.id,n);case 7:p.push("/interviewers/interviews/requests/finish"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),alert("\uc9c0\uc6d0\uc11c \uc81c\ucd9c\uc5d0 \uc2e4\ud328\ud588\uc5b4\uc694. \ubb38\uc81c\uac00 \uacc4\uc18d \ubc1c\uc0dd\ud55c\ub2e4\uba74 help@double-tap.io\ub85c \ubb38\uc758\ud574\uc8fc\uc138\uc694.");case 13:return e.prev=13,f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[4,10,13,16]])})));return function(t){return e.apply(this,arguments)}}();return(0,m.useEffect)((function(){var e=(0,K.dD)(location.search);B.tj.view(U({},e))}),[]),null==n||null==t?null:(0,P.tZ)(z,{data:n,outro:(0,P.tZ)(L,{show:!0}),loading:c,onSubmit:v,interviewer:t,onNextStep:function(e,t,n){B.tj.click("next_step",U({from:e,to:t},V(n.questions)))},onPrevStep:function(e,t,n){B.tj.click("prev_step",U({from:e,to:t},V(n.questions)))}})};function A(){return(0,P.tZ)(r.Z,{children:(0,P.tZ)($,{})})}},9230:function(e,t,n){"use strict";n.d(t,{SR:function(){return c},zk:function(){return a},Up:function(){return s},WB:function(){return l},hT:function(){return f},uC:function(){return p},jo:function(){return v},L7:function(){return d},b8:function(){return w}});var r=n(266),i=n(809),u=n.n(i),o=n(90),c=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.get("/interviews/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.body);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=function(e,t){return o.F.post("/interviews/".concat(e,"/feedbacks"),t)},s=function(e,t){return o.F.post("/interviews/".concat(e,"/nps"),t)},l=function(e){return o.F.get("/users/".concat(e,"/interview_schedules"))},f=function(e){return o.F.put("/interviews/".concat(e,"/in_progress"),{})},p=function(e){return o.F.put("/interviews/".concat(e,"/done"),{})},v=function(){var e=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.get("/interviews/mine/interviewers");case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.get("/interviews/mine/interviewees");case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.get("/auth/agora/token/".concat(t));case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},8255:function(e,t,n){"use strict";n.d(t,{pR:function(){return f},eg:function(){return p},x1:function(){return v},h0:function(){return d},E5:function(){return w},Zo:function(){return h}});var r=n(266),i=n(2809),u=n(809),o=n.n(u),c=n(90),a=n(9184),s=n(5731);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t){var n=function(e){var t,n,r,i,u,o=e.questions,c=null===(t=(0,s.j)(o,"position"))||void 0===t?void 0:t.value,l=null===(n=(0,s.j)(o,"techStack"))||void 0===n?void 0:n.value,f=null===(r=(0,s.j)(o,"currentCompany"))||void 0===r?void 0:r.value,p=null===(i=(0,s.j)(o,"targetCompany"))||void 0===i?void 0:i.value,v=null===(u=(0,s.j)(o,"interviewDate"))||void 0===u?void 0:u.value;return{position:c,tech_stack:l,current_company:f,target_company:p,interview_date:(0,a.x5)(v)}}(t);return c.F.post("/interviews/requests",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({interviewer_id:e},n))}var p=function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.F.get("/interviews/requests/mine/interviewers");case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.F.get("/interviews/requests/mine/interviewees");case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function d(e){return c.F.put("/interviews/requests/".concat(e,"/approve"),{})}function w(e){return c.F.put("/interviews/requests/".concat(e,"/reject"),{})}function h(e){return c.F.put("/interviews/requests/".concat(e,"/cancel"),{})}},3128:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interviewers/interviews/requests",function(){return n(3776)}])}},function(e){e.O(0,[430,469,198,31,104,799,774,888,179],(function(){return t=3128,e(e.s=t);var t}));var t=e.O();_N_E=t}]);