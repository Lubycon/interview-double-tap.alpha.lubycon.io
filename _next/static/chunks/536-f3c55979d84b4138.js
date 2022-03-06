"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{87536:function(e,t,r){r.d(t,{bc:function(){return W},cI:function(){return Se}});var s=r(67294),a=e=>"checkbox"===e.type,n=e=>e instanceof Date,i=e=>null==e;const o=e=>"object"===typeof e;var u=e=>!i(e)&&!Array.isArray(e)&&o(e)&&!n(e),l=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>[...e].some((e=>(e=>e.substring(0,e.search(/.\d/))||e)(t)===e)),d=e=>(e||[]).filter(Boolean),f=e=>void 0===e,g=(e,t,r)=>{if(u(e)&&t){const s=d(t.split(/[,[\].]+?/)).reduce(((e,t)=>i(e)?e:e[t]),e);return f(s)||s===e?f(e[t])?r:e[t]:s}};const m="blur",y="change",b="onBlur",h="onChange",v="onSubmit",_="onTouched",p="all",V="max",O="min",j="maxLength",w="minLength",F="pattern",A="required",S="validate";var x=(e,t)=>{const r=Object.assign({},e);return delete r[t],r};const k=s.createContext(null),D=()=>s.useContext(k);var C=(e,t,r,s=!0)=>{function a(a){return()=>{if(a in e)return t[a]!==p&&(t[a]=!s||p),r&&(r[a]=!0),e[a]}}const n={};for(const i in e)Object.defineProperty(n,i,{get:a(i)});return n},E=e=>u(e)&&!Object.keys(e).length,U=(e,t,r)=>{const s=x(e,"name");return E(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find((e=>t[e]===(!r||p)))},N=e=>Array.isArray(e)?e:[e],T=(e,t,r)=>r&&t?e===t:!e||!t||e===t||N(e).some((e=>e&&(e.startsWith(t)||t.startsWith(e))));function B(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>(e=>{e&&e.unsubscribe()})(r)}),[e.disabled])}var L=e=>"string"===typeof e,M=(e,t,r,s)=>{const a=Array.isArray(e);return L(e)?(s&&t.watch.add(e),g(r,e)):a?e.map((e=>(s&&t.watch.add(e),g(r,e)))):(s&&(t.watchAll=!0),r)},q=e=>"function"===typeof e,R=e=>{for(const t in e)if(q(e[t]))return!0;return!1};function W(e){const t=D(),{name:r,control:a=t.control,shouldUnregister:n}=e,i=c(a._names.array,r),o=function(e){const t=D(),{control:r=t.control,name:a,defaultValue:n,disabled:i,exact:o}=e||{},l=s.useRef(a);l.current=a,B({disabled:i,subject:r._subjects.watch,callback:e=>{if(T(l.current,e.name,o)){const t=M(l.current,r._names,e.values||r._formValues);d(f(l.current)||u(t)&&!R(t)?Object.assign({},t):Array.isArray(t)?[...t]:t)}}});const[c,d]=s.useState(f(n)?r._getWatch(a):n);return s.useEffect((()=>{r._removeUnmounted()})),c}({control:a,name:r,defaultValue:g(a._formValues,r,g(a._defaultValues,r,e.defaultValue)),exact:!i}),d=function(e){const t=D(),{control:r=t.control,disabled:a,name:n,exact:i}=e||{},[o,u]=s.useState(r._formState),l=s.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),c=s.useRef(n);return c.current=n,B({disabled:a,callback:e=>T(c.current,e.name,i)&&U(e,l.current)&&u(Object.assign(Object.assign({},r._formState),e)),subject:r._subjects.state}),C(o,r._proxyFormState,l.current,!1)}({control:a,name:r});s.useRef(r).current=r;const b=a.register(r,Object.assign(Object.assign({},e.rules),{value:o}));return s.useEffect((()=>{const e=(e,t)=>{const r=g(a._fields,e);r&&(r._f.mount=t)};return e(r,!0),()=>{const t=a._options.shouldUnregister||n;i?t&&a._stateFlags.action:t?a.unregister(r):e(r,!1)}}),[r,a,i,n]),{field:{onChange:e=>{b.onChange({target:{value:l(e),name:r},type:y})},onBlur:()=>{b.onBlur({target:{value:g(a._formValues,r),name:r},type:m})},name:r,value:o,ref:e=>{const t=g(a._fields,r);e&&t&&e.focus&&(t._f.ref={focus:()=>e.focus(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:d,fieldState:{invalid:!!g(d.errors,r),isDirty:!!g(d.dirtyFields,r),isTouched:!!g(d.touchedFields,r),error:g(d.errors,r)}}}var I=(e,t,r,s,a)=>t?Object.assign(Object.assign({},r[e]),{types:Object.assign(Object.assign({},r[e]&&r[e].types?r[e].types:{}),{[s]:a||!0})}):{},$=e=>/^\w*$/.test(e),H=e=>d(e.replace(/["|']|\]/g,"").split(/\.|\[/));function P(e,t,r){let s=-1;const a=$(t)?[t]:H(t),n=a.length,i=n-1;for(;++s<n;){const t=a[s];let n=r;if(s!==i){const r=e[t];n=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=n,e=e[t]}return e}const z=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=g(e,s);if(r){const e=r._f,s=x(r,"_f");if(e&&t(e.name)){if(e.ref.focus&&f(e.ref.focus()))break;if(e.refs){e.refs[0].focus();break}}else u(s)&&z(s,t)}}};var G=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));function J(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(!r&&!u(e))return e;t=r?[]:{};for(const r in e){if(q(e[r])){t=e;break}t[r]=J(e[r])}}return t}function K(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var Q=e=>i(e)||!o(e);function X(e,t){if(Q(e)||Q(t))return e===t;if(n(e)&&n(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(n(r)&&n(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!X(r,e):r!==e)return!1}}return!0}var Y=e=>({isOnSubmit:!e||e===v,isOnBlur:e===b,isOnChange:e===h,isOnAll:e===p,isOnTouch:e===_}),Z=e=>"boolean"===typeof e,ee=e=>"file"===e.type,te=e=>e instanceof HTMLElement,re=e=>"select-multiple"===e.type,se=e=>"radio"===e.type,ae="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document,ne=e=>te(e)&&document.contains(e);function ie(e,t){const r=$(t)?[t]:H(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=f(e)?s++:e[t[s++]];return e}(e,r),a=r[r.length-1];let n;s&&delete s[a];for(let i=0;i<r.slice(0,-1).length;i++){let t,s=-1;const a=r.slice(0,-(i+1)),o=a.length-1;for(i>0&&(n=e);++s<a.length;){const r=a[s];t=t?t[r]:e[r],o===s&&(u(t)&&E(t)||Array.isArray(t)&&!t.filter((e=>u(e)&&!E(e)||Z(e))).length)&&(n?delete n[r]:delete e[r]),n=t}}return e}function oe(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const s in e)Array.isArray(e[s])||u(e[s])&&!R(e[s])?(t[s]=Array.isArray(e[s])?[]:{},oe(e[s],t[s])):i(e[s])||(t[s]=!0);return t}function ue(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const a in e)Array.isArray(e[a])||u(e[a])&&!R(e[a])?f(t)||Q(r[a])?r[a]=Array.isArray(e[a])?oe(e[a],[]):Object.assign({},oe(e[a])):ue(e[a],i(t)?{}:t[a],r[a]):r[a]=!X(e[a],t[a]);return r}var le=(e,t)=>ue(e,t,oe(t));const ce={value:!1,isValid:!1},de={value:!0,isValid:!0};var fe=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!f(e[0].attributes.value)?f(e[0].value)||""===e[0].value?de:{value:e[0].value,isValid:!0}:de:ce}return ce},ge=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>f(e)?e:t?""===e?NaN:+e:r&&L(e)?new Date(e):s?s(e):e;const me={isValid:!1,value:null};var ye=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),me):me;function be(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return ee(t)?t.files:se(t)?ye(e.refs).value:re(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?fe(e.refs).value:ge(f(t.value)?e.ref.value:t.value,e)}var he=e=>e instanceof RegExp,ve=e=>f(e)?void 0:he(e)?e.source:u(e)?he(e.value)?e.value.source:e.value:e;function _e(e,t,r){const s=g(e,r);if(s||$(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),n=g(t,s),i=g(e,s);if(n&&!Array.isArray(n)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};a.pop()}return{name:r}}var pe=(e,t)=>!d(g(e,t)).length&&ie(e,t),Ve=e=>L(e)||s.isValidElement(e);function Oe(e,t,r="validate"){if(Ve(e)||Array.isArray(e)&&e.every(Ve)||Z(e)&&!e)return{type:r,message:Ve(e)?e:"",ref:t}}var je=e=>u(e)&&!he(e)?e:{value:e,message:""},we=async(e,t,r,s)=>{const{ref:n,refs:o,required:l,maxLength:c,minLength:d,min:f,max:g,pattern:m,validate:y,name:b,valueAsNumber:h,mount:v,disabled:_}=e._f;if(!v||_)return{};const p=o?o[0]:n,x=e=>{s&&p.reportValidity&&(p.setCustomValidity(Z(e)?"":e||" "),p.reportValidity())},k={},D=se(n),C=a(n),U=D||C,N=(h||ee(n))&&!n.value||""===t||Array.isArray(t)&&!t.length,T=I.bind(null,b,r,k),B=(e,t,r,s=j,a=w)=>{const i=e?t:r;k[b]=Object.assign({type:e?s:a,message:i,ref:n},T(e?s:a,i))};if(l&&(!U&&(N||i(t))||Z(t)&&!t||C&&!fe(o).isValid||D&&!ye(o).isValid)){const{value:e,message:t}=Ve(l)?{value:!!l,message:l}:je(l);if(e&&(k[b]=Object.assign({type:A,message:t,ref:p},T(A,t)),!r))return x(t),k}if(!N&&(!i(f)||!i(g))){let e,s;const a=je(g),o=je(f);if(isNaN(t)){const r=n.valueAsDate||new Date(t);L(a.value)&&(e=r>new Date(a.value)),L(o.value)&&(s=r<new Date(o.value))}else{const r=n.valueAsNumber||parseFloat(t);i(a.value)||(e=r>a.value),i(o.value)||(s=r<o.value)}if((e||s)&&(B(!!e,a.message,o.message,V,O),!r))return x(k[b].message),k}if((c||d)&&!N&&L(t)){const e=je(c),s=je(d),a=!i(e.value)&&t.length>e.value,n=!i(s.value)&&t.length<s.value;if((a||n)&&(B(a,e.message,s.message),!r))return x(k[b].message),k}if(m&&!N&&L(t)){const{value:e,message:s}=je(m);if(he(e)&&!t.match(e)&&(k[b]=Object.assign({type:F,message:s,ref:n},T(F,s)),!r))return x(s),k}if(y)if(q(y)){const e=Oe(await y(t),p);if(e&&(k[b]=Object.assign(Object.assign({},e),T(S,e.message)),!r))return x(e.message),k}else if(u(y)){let e={};for(const s in y){if(!E(e)&&!r)break;const a=Oe(await y[s](t),p,s);a&&(e=Object.assign(Object.assign({},a),T(s,a.message)),x(a.message),r&&(k[b]=e))}if(!E(e)&&(k[b]=Object.assign({ref:p},e),!r))return k}return x(!0),k};const Fe={mode:v,reValidateMode:h,shouldFocusError:!0};function Ae(e={}){let t,r=Object.assign(Object.assign({},Fe),e),s={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},o={},u=r.defaultValues||{},y=r.shouldUnregister?{}:J(u),b={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},v=0,_={};const V={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},O={watch:K(),array:K(),state:K()},j=Y(r.mode),w=Y(r.reValidateMode),F=r.criteriaMode===p,A=async e=>{let t=!1;return V.isValid&&(t=r.resolver?E((await U()).errors):await T(o,!0),e||t===s.isValid||(s.isValid=t,O.state.next({isValid:t}))),t},S=(e,t)=>(P(s.errors,e,t),O.state.next({errors:s.errors})),k=(e,t,r)=>{const s=g(o,e);if(s){const a=g(y,e,g(u,e));f(a)||r&&r.defaultChecked||t?P(y,e,t?a:be(s._f)):W(e,a)}b.mount&&A()},D=(e,t,r,a=!0)=>{let n=!1;const i={name:e},o=g(s.touchedFields,e);if(V.isDirty){const e=s.isDirty;s.isDirty=i.isDirty=B(),n=e!==i.isDirty}if(V.dirtyFields&&!r){const r=g(s.dirtyFields,e);X(g(u,e),t)?ie(s.dirtyFields,e):P(s.dirtyFields,e,!0),i.dirtyFields=s.dirtyFields,n=n||r!==g(s.dirtyFields,e)}return r&&!o&&(P(s.touchedFields,e,r),i.touchedFields=s.touchedFields,n=n||V.touchedFields&&o!==r),n&&a&&O.state.next(i),n?i:{}},C=async(r,a,n,i,o)=>{const u=g(s.errors,a),l=V.isValid&&s.isValid!==n;var c,d;if(e.delayError&&i?(t=t||(c=S,d=e.delayError,(...e)=>{clearTimeout(v),v=window.setTimeout((()=>c(...e)),d)}),t(a,i)):(clearTimeout(v),i?P(s.errors,a,i):ie(s.errors,a)),((i?!X(u,i):u)||!E(o)||l)&&!r){const e=Object.assign(Object.assign(Object.assign({},o),l?{isValid:n}:{}),{errors:s.errors,name:a});s=Object.assign(Object.assign({},s),e),O.state.next(e)}_[a]--,V.isValidating&&!_[a]&&(O.state.next({isValidating:!1}),_={})},U=async e=>r.resolver?await r.resolver(Object.assign({},y),r.context,((e,t,r,s)=>{const a={};for(const n of e){const e=g(t,n);e&&P(a,n,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||h.mount,o,r.criteriaMode,r.shouldUseNativeValidation)):{},T=async(e,t,a={valid:!0})=>{for(const n in e){const i=e[n];if(i){const e=i._f,n=x(i,"_f");if(e){const n=await we(i,g(y,e.name),F,r.shouldUseNativeValidation);if(n[e.name]&&(a.valid=!1,t))break;t||(n[e.name]?P(s.errors,e.name,n[e.name]):ie(s.errors,e.name))}n&&await T(n,t,a)}}return a.valid},B=(e,t)=>(e&&t&&P(y,e,t),!X(ue(),u)),R=(e,t,r)=>{const s=Object.assign({},b.mount?y:f(t)?u:L(e)?{[e]:t}:t);return M(e,h,s,r)},W=(e,t,r={})=>{const s=g(o,e);let n=t;if(s){const r=s._f;r&&(P(y,e,ge(t,r)),n=ae&&te(r.ref)&&i(t)?"":t,re(r.ref)?[...r.ref.options].forEach((e=>e.selected=n.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>e.checked=Array.isArray(n)?!!n.find((t=>t===e.value)):n===e.value)):r.refs[0].checked=!!n:r.refs.forEach((e=>e.checked=e.value===n)):ee(r.ref)||(r.ref.value=n,r.ref.type||O.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&D(e,n,r.shouldTouch),r.shouldValidate&&oe(e)},I=(e,t,r)=>{for(const s in t){const a=t[s],i=`${e}.${s}`,u=g(o,i);!h.array.has(e)&&Q(a)&&(!u||u._f)||n(a)?W(i,a,r):I(i,a,r)}},$=(e,t,r={})=>{const a=g(o,e),n=h.array.has(e);P(y,e,t),n?(O.array.next({name:e,values:y}),(V.isDirty||V.dirtyFields)&&r.shouldDirty&&(s.dirtyFields=le(u,y),O.state.next({name:e,dirtyFields:s.dirtyFields,isDirty:B(e,t)}))):!a||a._f||i(t)?W(e,t,r):I(e,t,r),G(e,h)&&O.state.next({}),O.watch.next({name:e})},H=async e=>{const t=e.target;let a=t.name;const n=g(o,a);if(n){let u,c;const d=t.type?be(n._f):l(e),f=e.type===m,b=!((i=n._f).mount&&(i.required||i.min||i.max||i.maxLength||i.minLength||i.pattern||i.validate))&&!r.resolver&&!g(s.errors,a)&&!n._f.deps||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(f,g(s.touchedFields,a),s.isSubmitted,w,j),v=G(a,h,f);f?n._f.onBlur&&n._f.onBlur(e):n._f.onChange&&n._f.onChange(e),P(y,a,d);const p=D(a,d,f,!1),S=!E(p)||v;if(!f&&O.watch.next({name:a,type:e.type}),b)return S&&O.state.next(Object.assign({name:a},v?{}:p));if(!f&&v&&O.state.next({}),_[a]=(_[a],1),V.isValidating&&O.state.next({isValidating:!0}),r.resolver){const{errors:e}=await U([a]),t=_e(s.errors,o,a),r=_e(e,o,t.name||a);u=r.error,a=r.name,c=E(e)}else u=(await we(n,g(y,a),F,r.shouldUseNativeValidation))[a],c=await A(!0);n._f.deps&&oe(n._f.deps),C(!1,a,c,u,p)}var i},oe=async(e,t={})=>{let a,n;const i=N(e);if(O.state.next({isValidating:!0}),r.resolver){const t=await(async e=>{const{errors:t}=await U();if(e)for(const r of e){const e=g(t,r);e?P(s.errors,r,e):ie(s.errors,r)}else s.errors=t;return t})(f(e)?e:i);a=E(t),n=e?!i.some((e=>g(t,e))):a}else e?(n=(await Promise.all(i.map((async e=>{const t=g(o,e);return await T(t&&t._f?{[e]:t}:t)})))).every(Boolean),(n||s.isValid)&&A()):n=a=await T(o);return O.state.next(Object.assign(Object.assign(Object.assign({},!L(e)||V.isValid&&a!==s.isValid?{}:{name:e}),r.resolver?{isValid:a}:{}),{errors:s.errors,isValidating:!1})),t.shouldFocus&&!n&&z(o,(e=>g(s.errors,e)),e?i:h.mount),n},ue=e=>{const t=Object.assign(Object.assign({},u),b.mount?y:{});return f(e)?t:L(e)?g(t,e):e.map((e=>g(t,e)))},ce=(e,t={})=>{for(const a of e?N(e):h.mount)h.mount.delete(a),h.array.delete(a),g(o,a)&&(t.keepValue||(ie(o,a),ie(y,a)),!t.keepError&&ie(s.errors,a),!t.keepDirty&&ie(s.dirtyFields,a),!t.keepTouched&&ie(s.touchedFields,a),!r.shouldUnregister&&!t.keepDefaultValue&&ie(u,a));O.watch.next({}),O.state.next(Object.assign(Object.assign({},s),t.keepDirty?{isDirty:B()}:{})),!t.keepIsValid&&A()},de=(e,t={})=>{let s=g(o,e);return P(o,e,{_f:Object.assign(Object.assign(Object.assign({},s&&s._f?s._f:{ref:{name:e}}),{name:e,mount:!0}),t)}),h.mount.add(e),!f(t.value)&&!t.disabled&&P(y,e,g(y,e,t.value)),s?Z(t.disabled)&&P(y,e,t.disabled?void 0:g(y,e,be(s._f))):k(e,!0),Object.assign(Object.assign(Object.assign({},Z(t.disabled)?{disabled:t.disabled}:{}),r.shouldUseNativeValidation?{required:!!t.required,min:ve(t.min),max:ve(t.max),minLength:ve(t.minLength),maxLength:ve(t.maxLength),pattern:ve(t.pattern)}:{}),{name:e,onChange:H,onBlur:H,ref:n=>{if(n){de(e,t),s=g(o,e);const r=f(n.value)&&n.querySelectorAll&&n.querySelectorAll("input,select,textarea")[0]||n,i=(e=>se(e)||a(e))(r);if(r===s._f.ref||i&&d(s._f.refs).find((e=>e===r)))return;P(o,e,{_f:i?Object.assign(Object.assign({},s._f),{refs:[...d(s._f.refs).filter(ne),r],ref:{type:r.type,name:e}}):Object.assign(Object.assign({},s._f),{ref:r})}),!t.disabled&&k(e,!1,r)}else s=g(o,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(h.array,e)||!b.action)&&h.unMount.add(e)}})};return{control:{register:de,unregister:ce,_executeSchema:U,_getWatch:R,_getDirty:B,_updateValid:A,_removeUnmounted:()=>{for(const e of h.unMount){const t=g(o,e);t&&(t._f.refs?t._f.refs.every((e=>!ne(e))):!ne(t._f.ref))&&ce(e)}h.unMount=new Set},_updateFieldArray:(e,t,r,a=[],n=!0,i=!0)=>{if(b.action=!0,i&&g(o,e)){const s=t(g(o,e),r.argA,r.argB);n&&P(o,e,s)}if(Array.isArray(g(s.errors,e))){const a=t(g(s.errors,e),r.argA,r.argB);n&&P(s.errors,e,a),pe(s.errors,e)}if(V.touchedFields&&g(s.touchedFields,e)){const a=t(g(s.touchedFields,e),r.argA,r.argB);n&&P(s.touchedFields,e,a),pe(s.touchedFields,e)}(V.dirtyFields||V.isDirty)&&(s.dirtyFields=le(u,y)),O.state.next({isDirty:B(e,a),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})},_getFieldArray:t=>d(g(b.mount?y:u,t,e.shouldUnregister?g(u,t,[]):[])),_subjects:O,_proxyFormState:V,get _fields(){return o},set _fields(e){o=e},get _formValues(){return y},set _formValues(e){y=e},get _stateFlags(){return b},set _stateFlags(e){b=e},get _defaultValues(){return u},set _defaultValues(e){u=e},get _names(){return h},set _names(e){h=e},get _formState(){return s},set _formState(e){s=e},get _options(){return r},set _options(e){r=Object.assign(Object.assign({},r),e)}},trigger:oe,register:de,handleSubmit:(e,t)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let n=!0,i=r.shouldUnregister?J(y):Object.assign({},y);O.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await U();s.errors=e,i=t}else await T(o);E(s.errors)&&Object.keys(s.errors).every((e=>g(i,e)))?(O.state.next({errors:{},isSubmitting:!0}),await e(i,a)):(t&&await t(s.errors,a),r.shouldFocusError&&z(o,(e=>g(s.errors,e)),h.mount))}catch(u){throw n=!1,u}finally{s.isSubmitted=!0,O.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:E(s.errors)&&n,submitCount:s.submitCount+1,errors:s.errors})}},watch:(e,t)=>q(e)?O.watch.subscribe({next:r=>e(R(void 0,t),r)}):R(e,t,!0),setValue:$,getValues:ue,reset:(t,r={})=>{const a=t||u,n=J(a),i=t&&!E(t)?n:u;if(r.keepDefaultValues||(u=a),!r.keepValues){if(ae&&f(t))for(const e of h.mount){const t=g(o,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;try{te(e)&&e.closest("form").reset();break}catch(l){}}}y=e.shouldUnregister?r.keepDefaultValues?J(u):{}:n,o={},O.array.next({values:i}),O.watch.next({values:i})}h={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},b.mount=!V.isValid||!!r.keepIsValid,b.watch=!!e.shouldUnregister,O.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:r.keepDirty?s.isDirty:!!r.keepDefaultValues&&!X(t,u),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:r.keepDirty?s.dirtyFields:r.keepDefaultValues&&t?Object.entries(t).reduce(((e,[t,r])=>Object.assign(Object.assign({},e),{[t]:r!==g(u,t)})),{}):{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(e,t={})=>{f(t.defaultValue)?$(e,g(u,e)):($(e,t.defaultValue),P(u,e,t.defaultValue)),t.keepTouched||ie(s.touchedFields,e),t.keepDirty||(ie(s.dirtyFields,e),s.isDirty=t.defaultValue?B(e,g(u,e)):B()),t.keepError||(ie(s.errors,e),V.isValid&&A()),O.state.next(Object.assign({},s))},clearErrors:e=>{e?N(e).forEach((e=>ie(s.errors,e))):s.errors={},O.state.next({errors:s.errors,isValid:!0})},unregister:ce,setError:(e,t,r)=>{const a=(g(o,e,{_f:{}})._f||{}).ref;P(s.errors,e,Object.assign(Object.assign({},t),{ref:a})),O.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},setFocus:e=>{const t=g(o,e)._f;(t.ref.focus?t.ref:t.refs[0]).focus()}}}function Se(e={}){const t=s.useRef(),[r,a]=s.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._options=e:t.current=Object.assign(Object.assign({},Ae(e)),{formState:r});const n=t.current.control;return B({subject:n._subjects.state,callback:e=>{U(e,n._proxyFormState,!0)&&(n._formState=Object.assign(Object.assign({},n._formState),e),a(Object.assign({},n._formState)))}}),s.useEffect((()=>{n._stateFlags.mount||(n._proxyFormState.isValid&&n._updateValid(),n._stateFlags.mount=!0),n._stateFlags.watch&&(n._stateFlags.watch=!1,n._subjects.state.next({})),n._removeUnmounted()})),t.current.formState=C(r,n._proxyFormState),t.current}}}]);