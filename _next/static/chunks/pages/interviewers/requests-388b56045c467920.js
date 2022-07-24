(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9465],{5976:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Q}});var r=t(3330),i=t(266),o=t(2809),u=t(9711),l=t(809),c=t.n(l),s=t(5641),a=t(917),d=t(3967),p=t(7566),f=t(7951),v=t(8031),h=t(1371),y=t(4332),q=t(9353),m=t(7294),b=t(7536),g=t(6826),Z=t(9977),w=t(5944);var O={name:"1bfm292",styles:"padding:0px 8px 16px 8px"},x={name:"1oaeivz",styles:"margin-right:8px"},k=function(e){var n=e.intro,t=e.outro,r=e.data,i=e.loading,o=e.onSubmit,u=e.onNextStep,l=e.onPrevStep,c=null==n?0:-1,s=null==t?r.questions.length-1:r.questions.length,k=(0,b.cI)({defaultValues:null!==r&&void 0!==r?r:{}}),S=k.handleSubmit,_=k.setError,j=k.clearErrors,N=k.getValues,P=k.formState,E=k.control,C=(0,m.useState)(c),T=C[0],D=C[1],z=function(){if(T!==s){var e=N().questions[T],n=(0,Z.Q)(e);null==n?(D((function(e){return e+1})),null===u||void 0===u||u(T,T+1,N())):_("questions.".concat(T),n)}},M=function(e){var n=P.errors.questions;return null===n||void 0===n?void 0:n[e]},Q=function(e){var n;null===(n=e.currentTarget)||void 0===n||n.blur(),z()},X=function(e,n){switch(e.type){case"select":return(0,w.tZ)(g.Q.Select,{name:"questions.".concat(n,".value"),rules:{required:e.required},control:E,error:null!=M(n),onChange:function(e){j("questions.".concat(n)),Q(e)},children:e.options.map((function(e){return(0,w.tZ)("option",{value:e.value,children:e.name},e.value)}))});case"file":return(0,w.tZ)(g.Q.File,{name:"questions.".concat(n,".file"),rules:{required:e.required},control:E,error:null!=M(n),onChange:function(e){j("questions.".concat(n)),Q(e)},accept:"application/pdf"});case"datetime":return null;default:return(0,w.tZ)(g.Q.ShortText,{name:"questions.".concat(n,".value"),rules:{required:e.required},control:E,autoComplete:"off",placeholder:e.placeholder,type:e.type,error:null!=M(n),autoFocus:!0,onChange:function(){return j("questions.".concat(n))},onKeyUp:function(e){"Enter"===e.key&&Q(e)}})}};return(0,w.BX)(w.HY,{children:[-1===T&&null!=n?n:null,(0,w.tZ)(y.M,{children:r.questions.map((function(e,n){var t;return(0,w.BX)(d.Z,{show:T===n,children:[(0,w.tZ)(f.Z,{lower:(0,w.tZ)(f.Z.Text2,{children:e.question})}),(0,w.tZ)(q.Ki,{size:20}),X(e,n),(0,w.tZ)(q.Ki,{size:8}),(0,w.tZ)("p",{css:(0,a.iv)({fontSize:14,whiteSpace:"pre-line",lineHeight:1.3,color:M(n)?h.O.red[5]:h.O.gray[6]},"",""),children:M(n)?null===(t=M(n))||void 0===t?void 0:t.message:e.description})]},n)}))}),T===s&&null!=t?t:null,(0,w.tZ)(p.Z,{show:!0,css:O,children:(0,w.BX)(q.kC,{direction:"row",children:[T!==c?(0,w.tZ)(v.Z,{styleType:"secondary",onClick:function(){T!==c&&(D((function(e){return e-1})),null===l||void 0===l||l(T,T-1,N()))},disabled:i,css:x,children:"\uc774\uc804"}):null,T!==s?(0,w.tZ)(v.Z,{styleType:"primary",onClick:z,children:"\ub2e4\uc74c"}):null,T===s?(0,w.tZ)(v.Z,{styleType:"primary",type:"submit",onClick:S((function(e){var n=N().questions[T],t=(0,Z.Q)(n);null==t?null===o||void 0===o||o(e):_("questions.".concat(T),t)})),disabled:i,loading:i,children:"\uc81c\ucd9c\ud558\uae30"}):null]})})]})},S=t(3066),_=t(8571),j=t(1163),N=t(8584),P=t(2132),E=t(5329),C=t(3675);function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var z=function(e){return e.reduce((function(e,n){return D(D({},e),{},(0,o.Z)({},n.question,"file"===n.type?"":String(n.value)))}),{})},M=function(){var e=(0,S.p)().openToast,n=function(){var e,n,t=(0,C.$)(),r=t.data,i=t.isLoading,o=(0,E.s)(),u=o.data,l=o.isLoading;if(!i&&!l)return{questions:[{fieldName:"position",question:"\uc9c0\uc6d0\ud558\uace0\uc790 \ud558\ub294\n\ud3ec\uc9c0\uc158\uc744 \uc54c\ub824\uc8fc\uc138\uc694",type:"select",value:"",options:null!==(e=null===r||void 0===r?void 0:r.body)&&void 0!==e?e:[],required:!0},{fieldName:"grade",question:"\uc5b4\ub290 \uc815\ub3c4\uc758\n\uacbd\ub825\uc744 \ubcf4\uc720\ud558\uace0 \uacc4\uc2e0\uac00\uc694?",type:"select",value:"",options:null!==(n=null===u||void 0===u?void 0:u.body)&&void 0!==n?n:[],required:!0},{fieldName:"techStack",question:"\uc8fc\ub85c \uc0ac\uc6a9\ud558\uc2dc\ub294\n\uae30\uc220\ub4e4\uc758 \ud0a4\uc6cc\ub4dc\ub97c \uc801\uc5b4\uc8fc\uc138\uc694",description:"ex) \ub9ac\uc561\ud2b8, Next.js \ub4f1",type:"text",value:"",required:!0},{fieldName:"company",question:"\ud604\uc7ac \uc7ac\uc9c1 \uc911\uc778 \uc9c1\uc7a5\uc744 \uc54c\ub824\uc8fc\uc138\uc694",description:"\uba74\uc811\uad00\ub2d8\uc774 \uc7ac\uc9c1 \uc911\uc778 \uc9c1\uc7a5\uc5d0 \uc9c0\uc6d0\ud558\uace0 \uc2f6\uc5b4\ud558\ub294 \uc9c0\uc6d0\uc790\ub294 \ub9e4\uce6d\uc744 \ud558\uc9c0 \uc54a\uc544\uc694",placeholder:"ex) \ub124\uc774\ubc84, \ud1a0\uc2a4 \ub4f1",type:"text",value:"",required:!0},{fieldName:"resume",question:"\uc774\ub825\uc11c \ud30c\uc77c\uc744 \ucca8\ubd80\ud574\uc8fc\uc138\uc694",description:"PDF \ud30c\uc77c\ub9cc \uc5c5\ub85c\ub4dc \ud558\uc2e4 \uc218 \uc788\uc5b4\uc694",type:"file",value:"",required:!0,file:void 0},{fieldName:"bankInfo",question:"\ub9ac\uc6cc\ub4dc\ub97c \uc785\uae08\ubc1b\uc744 \uacc4\uc88c \uc815\ubcf4\ub97c \ub4f1\ub85d\ud574\uc8fc\uc138\uc694",description:"\uacc4\uc88c\ubc88\ud638\uac00 \ud2c0\ub9ac\uba74 \uc785\uae08\uc774 \ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc73c\ub2c8 \uaf3c\uaf3c\ud788 \ud655\uc778\ud574\uc8fc\uc138\uc694",placeholder:"ex) \uc608\uae08\uc8fc/\uc740\ud589/\uacc4\uc88c\ubc88\ud638",type:"bankAccount",value:"",required:!0}]}}(),t=(0,s.zj)(),r=(0,u.Z)(t,3),o=r[0],l=r[1],a=r[2],d=(0,j.useRouter)();return(0,m.useEffect)((function(){var e=(0,P.dD)(location.search);_.M$.view(D({},e))}),[]),null==n?null:(0,w.tZ)(k,{data:n,loading:o,onSubmit:function(){var n=(0,i.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(),_.M$.click("interviewee_apply",D({},z(t.questions))),n.prev=2,n.next=5,(0,N.Rh)(t);case 5:d.push("/interviewers/requests/finish"),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(2),e({message:"\uc9c0\uc6d0\uc11c \uc81c\ucd9c\uc5d0 \uc2e4\ud328\ud588\uc5b4\uc694. \ubb38\uc81c\uac00 \uacc4\uc18d \ubc1c\uc0dd\ud55c\ub2e4\uba74 help@double-tap.io\ub85c \ubb38\uc758\ud574\uc8fc\uc138\uc694."}),console.error(n.t0);case 12:return n.prev=12,a(),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[2,8,12,15]])})));return function(e){return n.apply(this,arguments)}}(),onNextStep:function(e,n,t){_.M$.click("next_step",D({from:e,to:n},z(t.questions)))},onPrevStep:function(e,n,t){_.M$.click("prev_step",D({from:e,to:n},z(t.questions)))}})};function Q(){return(0,w.tZ)(r.Z,{children:(0,w.tZ)(M,{})})}},5329:function(e,n,t){"use strict";t.d(n,{s:function(){return i}});var r=t(2531);function i(){return(0,r.L)("interviewers/grades.json")}},4384:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interviewers/requests",function(){return t(5976)}])}},function(e){e.O(0,[6430,3469,9198,8031,6104,6688,9963,9774,2888,179],(function(){return n=4384,e(e.s=n);var n}));var n=e.O();_N_E=n}]);