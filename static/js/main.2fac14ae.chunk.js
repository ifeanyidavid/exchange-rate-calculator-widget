(this["webpackJsonpexchange-rate-calculator"]=this["webpackJsonpexchange-rate-calculator"]||[]).push([[0],{49:function(e,n,t){e.exports=t(79)},59:function(e,n,t){},60:function(e,n,t){},79:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(13),o=t.n(c),i=t(24),u=(t(58),t(59),t(43)),s=t(5),l=t(6),d=(t(60),t(20)),p=t.n(d),f=(t(35),t(36),{EUR:{id:0,value:"EUR"},GBP:{id:1,value:"GBP"},USD:{id:2,value:"USD"}});function m(){var e=Object(s.a)(["\n  font-size: ",";\n  display: block;\n  weight: ",";\n"]);return m=function(){return e},e}function b(){var e=Object(s.a)(["\n  color: #fff;\n  min-height: 300px;\n  max-height: 100%;\n  cursor: move;\n  display: flex !important;\n  text-align: center !important;\n  flex-direction: column !important;\n  justify-content: center !important;\n"]);return b=function(){return e},e}var h=l.a.div(b()),g=l.a.span(m(),(function(e){return e.fontSize}),(function(e){return e.weight}));var y=function(e){var n=e.updateSourceCurrency,t=e.pockets,r=e.currency,c={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:f[r].id,swipeToSlide:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,Object.assign({afterChange:function(e){n(e)}},c),t.map((function(e){return a.a.createElement(h,{key:e.id},a.a.createElement("div",null,a.a.createElement(g,{weight:"bold",fontSize:"32px"},"".concat(e.symbol," ").concat(parseInt(e.balance).toFixed(2).toString())),a.a.createElement(g,{weight:"normal",fontSize:"16px"},"".concat(e.currency," - ").concat(e.description))))}))))};function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function x(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var O=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.1823 51.7755C31.9208 56.2262 43.6619 52.5689 49.1615 43.0433C52.7523 36.824 52.9279 29.3476 49.839 23.081C49.732 22.864 49.806 23.0149 49.806 23.0149C49.6405 22.6943 49.2438 22.5773 48.9193 22.7539L45.4589 24.6379C45.1347 24.8144 45.0062 25.2163 45.1633 25.5279C45.1633 25.5279 45.0702 25.3362 45.1633 25.5279C47.4393 30.2147 47.293 35.7796 44.6149 40.4183C40.5701 47.4241 32.0239 50.1976 24.8067 47.1546C24.6063 47.0701 24.8067 47.1546 24.8067 47.1546C24.4765 47.0072 24.353 46.638 24.5399 46.3143L25.5572 44.5522C25.9197 43.9243 25.6241 43.4743 24.8999 43.5469L16.2667 44.4127C15.5411 44.4855 15.1965 45.0846 15.4957 45.7481L19.0625 53.6575C19.3623 54.3223 19.902 54.3473 20.2666 53.7158L21.2273 52.0519C21.4103 51.7349 21.8168 51.6028 22.1621 51.7662C22.1621 51.7662 21.9735 51.68 22.1823 51.7755ZM39.8167 13.224C30.0787 8.77352 18.3381 12.4311 12.8385 21.9567C9.24773 28.176 9.07192 35.6523 12.1606 41.9187C12.2675 42.1357 12.1935 41.9848 12.1935 41.9848C12.359 42.3054 12.7556 42.4224 13.0801 42.2458L16.5405 40.3617C16.8646 40.1853 16.9932 39.7834 16.8361 39.4718C16.8361 39.4718 16.9291 39.6634 16.8361 39.4718C14.5603 34.785 14.7067 29.2202 17.3848 24.5816C21.4296 17.5758 29.9756 14.8021 37.1924 17.8448C37.3927 17.9293 37.1924 17.8448 37.1924 17.8448C37.5225 17.9922 37.646 18.3614 37.4591 18.6851L36.4418 20.4472C36.0792 21.0752 36.3749 21.5251 37.0991 21.4524L45.7319 20.5865C46.4575 20.5137 46.8021 19.9146 46.5029 19.2511L42.9364 11.3419C42.6367 10.6771 42.097 10.6521 41.7324 11.2837L40.7717 12.9476C40.5887 13.2645 40.1822 13.3967 39.8369 13.2332C39.8369 13.2332 40.0256 13.3194 39.8167 13.224Z",fill:"white"}),E=function(e){var n=e.svgRef,t=e.title,r=x(e,["svgRef","title"]);return a.a.createElement("svg",v({width:62,height:65,viewBox:"0 0 62 65",fill:"none",ref:n},r),t?a.a.createElement("title",null,t):null,O)},C=a.a.forwardRef((function(e,n){return a.a.createElement(E,v({svgRef:n},e))}));t.p;function j(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .exchange-icon {\n    display: block;\n    cursor: pointer;\n    flex-shrink: 0;\n    border-radius: 50%;\n    width: 32px;\n    height: 32px;\n    display: flex;\n    appearance: none;\n    box-shadow: none;\n    outline: none !important;\n  }\n\n  .exchange-icon svg {\n    max-width: 100%;\n    max-height: 100%;\n    width: 100%;\n    height: 100%;\n  }\n  .exchange-icon-white {\n    background: transparent;\n    border: 0.5px solid rgba(255, 255, 255, 0.3);\n  }\n  .text {\n    font-size: 12px;\n    color: rgba(255, 255, 255, 0.7);\n  }\n"]);return j=function(){return e},e}function S(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n"]);return S=function(){return e},e}function w(){var e=Object(s.a)(["\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding-bottom: 0.5rem !important;\n  height: 100%;\n"]);return w=function(){return e},e}var k=l.a.div(w()),R=l.a.div(S()),A=l.a.div(j());var T=function(e){var n=e.setExchangeOpenState;return a.a.createElement(k,null,a.a.createElement(R,null,a.a.createElement(A,null,a.a.createElement("button",{className:"exchange-icon exchange-icon-white",onClick:function(){return n(!0)}},a.a.createElement(C,null)),a.a.createElement("span",{className:"text"},"Exchange"))))};function N(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n\n  .text-muted {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"]);return N=function(){return e},e}var F=l.a.div(N());var U=function(){return a.a.createElement(F,null,a.a.createElement("span",{className:"text-muted"},(new Date).toDateString()))};function D(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: ",";\n\n  .exchange-icon {\n    display: block;\n\n    flex-shrink: 0;\n    border-radius: 50%;\n    width: 32px;\n    height: 32px;\n    display: flex;\n  }\n\n  .exchange-icon svg {\n    max-width: 100%;\n    max-height: 100%;\n    width: 100%;\n    height: 100%;\n  }\n\n  .exchange-icon-dark {\n    background: rgba(0, 0, 0, 0.57);\n  }\n"]);return D=function(){return e},e}var _=l.a.div(D(),(function(e){return e.justifyContent?e.justifyContent:"flex-start"}));var B=function(e){var n=e.history,t=e.hasMarginBottom;return a.a.createElement("div",{className:"".concat(t)},a.a.createElement(_,{justifyContent:"space-between"},a.a.createElement(_,null,a.a.createElement("i",{className:"exchange-icon exchange-icon-dark"},a.a.createElement(C,null)),a.a.createElement("div",{className:"text-left ml-3"},a.a.createElement("span",{className:"d-block"},n.description),a.a.createElement("span",{className:"d-block text-muted"},n.time))),a.a.createElement("div",{className:"text-right"},a.a.createElement("span",{className:"d-block"},"-",n.sourceCurrency," ",n.sourceAmount),a.a.createElement("span",{className:"d-block text-primary"},"+",n.destinationCurrency," ",n.destinationAmount))))};var I=function(e){var n=e.transactionHistory,t=n.length>1?"mb-2":"mb-0";return a.a.createElement(a.a.Fragment,null,a.a.createElement(U,null),n.map((function(e){return a.a.createElement(B,{key:e.id,history:e,hasMarginBottom:t})})))};function H(){var e=Object(s.a)(['\n  background: rgb(48, 116, 234);\n  background: -moz-linear-gradient(\n    32deg,\n    rgba(48, 116, 234, 1) 0%,\n    rgba(48, 116, 234, 1) 70%,\n    rgba(204, 0, 255, 1) 100%\n  );\n  background: -webkit-linear-gradient(\n    32deg,\n    rgba(48, 116, 234, 1) 0%,\n    rgba(48, 116, 234, 1) 70%,\n    rgba(204, 0, 255, 1) 100%\n  );\n  background: linear-gradient(\n    32deg,\n    rgba(48, 116, 234, 1) 0%,\n    rgba(48, 116, 234, 1) 70%,\n    rgba(204, 0, 255, 1) 100%\n  );\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3074ea",endColorstr="#cc00ff",GradientType=1);\n  height: 450px;\n  display: flex;\n  flex-direction: column;\n']);return H=function(){return e},e}var P=l.a.div(H());var L=function(e){var n=e.setExchangeOpenState,t=e.updateSourceCurrency,r=e.pockets,c=e.sourceCurrency,o=e.transactionHistory;return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,null,a.a.createElement(y,{updateSourceCurrency:t,pockets:r,currency:c}),a.a.createElement(T,{setExchangeOpenState:n})),o.length>0&&a.a.createElement("div",{className:"p-3"},a.a.createElement(I,{transactionHistory:o})))},G=t(2),z=t(21),M=t(22),Y=t(25),$=t(23),W=t(26);function Z(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem;\n\n  .text-btn {\n    appearance: none;\n    background: none;\n    border: none;\n    outline: none !important;\n    font-size: 13px;\n    text-transform: uppercase;\n  }\n\n  .exchange-rate {\n    font-size: 11px;\n  }\n"]);return Z=function(){return e},e}var X=l.a.nav(Z());var J=function(e){var n=e.setExchangeOpenState,t=e.sourceRate,r=e.disableExchangeButton,c=e.exhchangeCurrency,o=r(),i=o?"text-muted":"text-primary";return a.a.createElement(X,null,a.a.createElement("button",{className:"text-btn text-muted",onClick:function(){return n(!1)}},"Cancel"),a.a.createElement("div",{className:"border rounded px-1"},a.a.createElement("span",{className:"font-weight-bold exchange-rate"},t)),a.a.createElement("button",{className:"text-btn ".concat(i),disabled:o,onClick:c},"Exchange"))},V={sourceCurrency:"sourceCurrency",destinationCurrency:"destinationCurrency",sourceAmount:"sourceAmount",destinationAmount:"destinationAmount",balance:"balance",symbol:"symbol",description:"description",currency:"currency",id:"id",error:"error",loading:"loading",rates:"rates"};function q(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  min-height: 200px;\n  max-height: 100%;\n  padding: 16px;\n  cursor: move;\n\n  .balance {\n    min-width: 100px;\n    max-width: 100%;\n  }\n\n  .currency {\n    font-size: 24px;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n\n  .currency-input {\n    text-align: right;\n    box-shadow: none;\n    font-size: 18px;\n    padding: 20px;\n    width: 230px;\n    outline: none !important;\n    border: none;\n  }\n\n  .currency-input:focus {\n    box-shadow: none;\n  }\n"]);return q=function(){return e},e}var K=l.a.div(q());var Q=function(e){var n=e.name,t=e.onChange,r=e.value,c=e.balance,o=e.currency,i=e.symbol,u=e.showExchangeRate,s=e.destinationRate,l=e.ratesFetched,d=n===V.sourceAmount?"-":"+",p=l();return a.a.createElement(K,null,a.a.createElement("div",{className:"d-flex flex-column balance"},a.a.createElement("h2",{className:"currency"},o),a.a.createElement("small",{className:"text-muted"},"You have ",i," ",parseInt(c).toString())),a.a.createElement("div",{className:"d-flex flex-column justify-content-end"},a.a.createElement("input",{type:"text",pattern:"[0-9]*",placeholder:"0",autoComplete:"off",className:"currency-input",name:n,value:r?d+r:r,onChange:function(e){return t(e)},disabled:p}),u&&a.a.createElement("small",{className:"font-weight-bold text-right"},s)))};var ee=function(e){var n=e.currency,t=e.pockets,r=e.name,c=e.value,o=e.onChange,i=e.onSlide,u=e.showExchangeRate,s=e.destinationRate,l=e.recalculateOnSlide,d=e.ratesFetched,m={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:f[n].id,swipeToSlide:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return a.a.createElement(p.a,Object.assign({afterChange:function(e){l(),i(e)}},m,{style:{marginBottom:"30px"}}),t.map((function(e){return a.a.createElement(Q,{key:e.id,id:e.id,currency:e.currency,balance:e.balance,symbol:e.symbol,name:r,value:c,onChange:o,showExchangeRate:u,destinationRate:s,ratesFetched:d})})))},ne=function(e,n){return Object.assign({},e,n)},te=function(e){return Object.values(f).find((function(n){return n.id===e}))},re=function(e){var n=e.toString();return""===n||/^[0-9]+$/.test(n)||/^[0-9]*[.]$/.test(n)||/^[0-9]*[.][0-9]{1,2}$/.test(n)},ae=function(e){var n=e.toString();return function(e){var n=e.toString();return-1!==n.indexOf("+")||-1!==n.indexOf("-")}(e)?n.length>1?n.substring(1):"":n},ce=function(e,n,t,r){return t!==n?e*r:r},oe=function(e){function n(e){var t,r;return Object(z.a)(this,n),(r=Object(Y.a)(this,Object($.a)(n).call(this,e))).calculateLiveRates=function(e,n){var t,a=r.props,c=a.rates,o=a.sourceCurrency,i=a.destinationCurrency;""===n?r.setState((t={},Object(G.a)(t,V.sourceAmount,""),Object(G.a)(t,V.destinationAmount,""),t)):(e===V.sourceAmount&&(o===i?r.setState(Object(G.a)({},V.destinationAmount,n)):c.forEach((function(e){if(e.base===o){var t=Object.keys(e.rates).find((function(e){return e===i})),a=ce(e.rates[t],t,o,n);r.setState(Object(G.a)({},V.destinationAmount,a.toFixed(2).toString()))}}))),e===V.destinationAmount&&(o===i?r.setState(Object(G.a)({},V.destinationAmount,n)):c.forEach((function(e){if(e.base===i){var t=Object.keys(e.rates).find((function(e){return e===o})),a=ce(e.rates[t],i,t,n);r.setState(Object(G.a)({},V.sourceAmount,a.toFixed(2).toString()))}}))))},r.firstCharZero=function(e){return 0===r.state.sourceAmount.length&&"0"===e},r.handleChange=function(e){var n=e.target.name,t=ae(e.target.value);r.firstCharZero(t)||re(t)&&(console.log(t),console.log(parseInt(t).toFixed(2)),r.setState(Object(G.a)({},n,""!==t?parseInt(t).toFixed(2):"")),r.calculateLiveRates(n,t))},r.recalculateOnSlide=function(e){var n=e===V.sourceAmount?r.state[V.sourceAmount]:r.state[V.destinationAmount];r.calculateLiveRates(e,n)},r.recalculateOnSourceSlide=function(){return r.recalculateOnSlide(V.sourceAmount)},r.recalculateOnTargetSlide=function(){return r.recalculateOnSlide(V.destinationAmount)},r.hasMoneyInWallet=function(){var e=r.state.sourceAmount,n=r.props,t=n.mainPockets,a=n.sourceCurrency;return parseFloat(t[a].balance.toFixed(2))>=e},r.isInputEmpty=function(){var e=r.state.sourceAmount;return""!==e&&"0"!==e&&"0.00"!==e&&"0.01"!==e},r.notSameCurrency=function(){var e=r.props;return e.sourceCurrency!==e.destinationCurrency},r.disableExchangeButton=function(){return!(r.isInputEmpty()&&r.hasMoneyInWallet()&&r.notSameCurrency())},r.handleExchangeCurrency=function(){var e,n=r.props,t=n.doExchangeCurrency,a=n.sourceCurrency,c=n.destinationCurrency,o=n.setExchangeOpenState,i=r.state;t(i.sourceAmount,i.destinationAmount,a,c),r.setState((e={},Object(G.a)(e,V.sourceAmount,""),Object(G.a)(e,V.destinationAmount,""),e)),o(!1)},r.ratesFetched=function(){return!(r.props.rates.length>0)},r.state=(t={},Object(G.a)(t,V.sourceAmount,""),Object(G.a)(t,V.destinationAmount,""),t),r}return Object(W.a)(n,e),Object(M.a)(n,[{key:"render",value:function(){var e=this.props,n=e.setExchangeOpenState,t=e.sourceCurrency,r=e.destinationCurrency,c=e.pockets,o=e.updateSourceCurrencySlide,i=e.updateDestinationCurrencySlide,u=e.sourceConversionRates,s=e.destinationConversionRates,l=this.state,d=l.sourceAmount,p=l.destinationAmount,f="",m="";return u&&(f="1 ".concat(t," = ").concat(parseFloat(u).toFixed(2).toString()," ").concat(r)),s&&(m="1 ".concat(r," = ").concat(parseFloat(s).toFixed(2).toString()," ").concat(t)),t===r&&(f="1 ".concat(t," = 1 ").concat(r),m="1 ".concat(t," = 1 ").concat(r)),a.a.createElement(a.a.Fragment,null,a.a.createElement(J,{setExchangeOpenState:n,sourceRate:f,disableExchangeButton:this.disableExchangeButton,exhchangeCurrency:this.handleExchangeCurrency}),a.a.createElement(ee,{name:V.sourceAmount,value:d,onChange:this.handleChange,currency:t,pockets:c,onSlide:o,recalculateOnSlide:this.recalculateOnSourceSlide,showExchangeRate:!1,ratesFetched:this.ratesFetched}),a.a.createElement("hr",null),a.a.createElement(ee,{name:V.destinationAmount,value:p,onChange:this.handleChange,currency:r,pockets:c,onSlide:i,showExchangeRate:!0,destinationRate:m,recalculateOnSlide:this.recalculateOnTargetSlide,ratesFetched:this.ratesFetched}))}}]),n}(a.a.Component),ie=function(){return{type:"FETCH_RATES_START"}},ue=function(e){return{type:"FETCH_RATES_ERROR",payload:e}},se=function(e){return{type:"FETCH_RATES_DONE",payload:e}},le=t(10),de=function(e){return e.ratesReducer.sourceCurrency},pe=function(e){return e.ratesReducer.destinationCurrency},fe=Object(le.a)([function(e){return e.pocketsReducer.pockets}],(function(e){return Object.values(e)})),me=Object(le.a)([de],(function(e){return e})),be=Object(le.a)([pe],(function(e){return e})),he=Object(le.a)([function(e){return e.ratesReducer}],(function(e){return e.rates})),ge=Object(le.a)([he,de,pe],(function(e,n,t){if(e.filter((function(e){return e.base===n})).length>0)return e.filter((function(e){return e.base===n}))[0].rates[t]})),ye=Object(le.a)([he,de,pe],(function(e,n,t){if(e.filter((function(e){return e.base===t})).length>0)return e.filter((function(e){return e.base===t}))[0].rates[n]})),ve=Object(le.a)([function(e){return e.pocketsReducer.transactionHistory}],(function(e){return e})),xe=function(e){function n(e){var t;return Object(z.a)(this,n),(t=Object(Y.a)(this,Object($.a)(n).call(this,e))).state={hasError:!1},t}return Object(W.a)(n,e),Object(M.a)(n,[{key:"componentDidCatch",value:function(e,n){console.log("Error")}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(a.a.Component);function Oe(){var e=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: ","\n  margin-right: -15px;\n  margin-left: -15px;\n  justify-content: ",";\n"]);return Oe=function(){return e},e}function Ee(){var e=Object(s.a)(["\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n"]);return Ee=function(){return e},e}var Ce=l.a.div(Ee()),je=l.a.div(Oe(),(function(e){return"column"===e.direction?"column":"row"}),(function(e){return e.justifyContent}));var Se=Object(i.b)((function(e){return{sourceCurrency:me(e),destinationCurrency:be(e),rates:he(e),pocketValues:fe(e),pockets:e.pocketsReducer.pockets,sourceConversionRates:ge(e),destinationConversionRates:ye(e),transactionHistory:ve(e)}}),(function(e){return{updateSourceCurrencySlide:function(n){return e(function(e){return{type:"UPDATE_SOURCE_CURRENCY",payload:e}}(n))},updateDestinationCurrencySlide:function(n){return e(function(e){return{type:"UPDATE_DESTINATION_CURRENCY",payload:e}}(n))},doExchangeCurrency:function(n,t,r,a){return e(function(e,n,t,r){return{type:"EXCHANGE_CURRENCY",payload:{sourceAmount:e,destinationAmount:n,sourceCurrency:t,destinationCurrency:r}}}(n,t,r,a))}}}))((function(e){var n=e.updateSourceCurrencySlide,t=e.updateDestinationCurrencySlide,c=e.pocketValues,o=e.sourceCurrency,i=e.destinationCurrency,s=e.rates,l=e.sourceConversionRates,d=e.destinationConversionRates,p=e.doExchangeCurrency,f=e.pockets,m=e.transactionHistory,b=Object(r.useState)(!1),h=Object(u.a)(b,2),g=h[0],y=h[1];return a.a.createElement(xe,null,a.a.createElement(Ce,null,a.a.createElement(je,{justifyContent:"center"},a.a.createElement("div",{className:"col-12 col-md-5"},a.a.createElement("div",{className:"w-100 border rounded"},g?a.a.createElement(oe,{setExchangeOpenState:y,sourceCurrency:o,destinationCurrency:i,pockets:c,mainPockets:f,rates:s,updateSourceCurrencySlide:n,updateDestinationCurrencySlide:t,sourceConversionRates:l,destinationConversionRates:d,doExchangeCurrency:p}):a.a.createElement(L,{setExchangeOpenState:y,updateSourceCurrency:n,pockets:c,sourceCurrency:o,transactionHistory:m}))))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we,ke,Re,Ae,Te,Ne=t(46),Fe=t(44),Ue=t(8),De=(we={},Object(G.a)(we,V.rates,[]),Object(G.a)(we,V.loading,!1),Object(G.a)(we,V.error,null),Object(G.a)(we,V.sourceCurrency,"EUR"),Object(G.a)(we,V.destinationCurrency,"USD"),we),_e=function(e){return ne(e,Object(G.a)({},V.loading,!0))},Be=function(e){var n;return ne(e,(n={},Object(G.a)(n,V.loading,!1),Object(G.a)(n,V.error,"Error fetching rates"),n))},Ie=function(e,n){var t;return ne(e,(t={},Object(G.a)(t,V.loading,!1),Object(G.a)(t,V.rates,n.payload),t))},He=function(e,n){var t=n.payload;return ne(e,Object(G.a)({},V.sourceCurrency,te(t).value))},Pe=function(e,n){var t=n.payload;return ne(e,Object(G.a)({},V.destinationCurrency,te(t).value))},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_RATES_START":return _e(e);case"FETCH_RATES_ERROR":return Be(e);case"FETCH_RATES_DONE":return Ie(e,n);case"UPDATE_SOURCE_CURRENCY":return He(e,n);case"UPDATE_DESTINATION_CURRENCY":return Pe(e,n);default:return e}},Ge=t(45),ze=t(41),Me=t.n(ze),Ye={pockets:(Te={},Object(G.a)(Te,f.EUR.value,(ke={},Object(G.a)(ke,V.id,f.EUR.id),Object(G.a)(ke,V.currency,f.EUR.value),Object(G.a)(ke,V.balance,300),Object(G.a)(ke,V.symbol,"\u20ac"),Object(G.a)(ke,V.description,"Euro"),ke)),Object(G.a)(Te,f.GBP.value,(Re={},Object(G.a)(Re,V.id,f.GBP.id),Object(G.a)(Re,V.currency,f.GBP.value),Object(G.a)(Re,V.balance,300),Object(G.a)(Re,V.symbol,"\xa3"),Object(G.a)(Re,V.description,"British Pound"),Re)),Object(G.a)(Te,f.USD.value,(Ae={},Object(G.a)(Ae,V.id,f.USD.id),Object(G.a)(Ae,V.currency,f.USD.value),Object(G.a)(Ae,V.balance,300),Object(G.a)(Ae,V.symbol,"$"),Object(G.a)(Ae,V.description,"American Dollar"),Ae)),Te),transactionHistory:[]},$e=function(e,n){var t,r,a=n.payload.sourceAmount,c=n.payload.destinationAmount,o=n.payload.sourceCurrency,i=n.payload.destinationCurrency,u=e.pockets,s=u[o],l=u[i],d=Object(G.a)({},o,(t={},Object(G.a)(t,V.id,s.id),Object(G.a)(t,V.currency,o),Object(G.a)(t,V.balance,parseInt(s.balance)-parseInt(a)),Object(G.a)(t,V.symbol,s.symbol),Object(G.a)(t,V.description,s.description),t)),p=Object(G.a)({},i,(r={},Object(G.a)(r,V.id,l.id),Object(G.a)(r,V.currency,i),Object(G.a)(r,V.balance,parseInt(l.balance)+parseInt(c)),Object(G.a)(r,V.symbol,l.symbol),Object(G.a)(r,V.description,l.description),r)),f=e.transactionHistory,m={id:Me()(),description:"Exchanged to ".concat(i),time:(new Date).toLocaleTimeString("en-GB"),sourceAmount:a,destinationAmount:c,sourceCurrency:o,destinationCurrency:i};return{pockets:Object.assign({},u,d,p),transactionHistory:[].concat(Object(Ge.a)(f),[m])}},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"EXCHANGE_CURRENCY":return $e(e,n);default:return e}},Ze=Object(Ue.combineReducers)({ratesReducer:Le,pocketsReducer:We}),Xe=t(7),Je=t.n(Xe),Ve=t(9),qe=t(27),Ke=function(){var e=Object(qe.a)(Je.a.mark((function e(){var n,t;return Je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.exchangeratesapi.io/latest?base=EUR&symbols=USD,GBP");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Qe=function(){var e=Object(qe.a)(Je.a.mark((function e(){var n,t;return Je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.exchangeratesapi.io/latest?base=GBP&symbols=EUR,USD");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),en=function(){var e=Object(qe.a)(Je.a.mark((function e(){var n,t;return Je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,GBP");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),nn=Je.a.mark(an),tn=Je.a.mark(cn),rn=Je.a.mark(on);function an(){var e;return Je.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Ve.e)(ie());case 2:return n.prev=2,n.next=5,Object(Ve.a)([Object(Ve.b)(Ke),Object(Ve.b)(Qe),Object(Ve.b)(en)]);case 5:return e=n.sent,n.next=8,Object(Ve.e)(se(e));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(2),n.next=14,Object(Ve.e)(ue(n.t0));case 14:case"end":return n.stop()}}),nn,null,[[2,10]])}function cn(){return Je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,an();case 3:return e.next=5,Object(Ve.c)(1e4);case 5:e.next=0;break;case 7:case"end":return e.stop()}}),tn)}function on(){return Je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ve.a)([Object(Ve.d)(cn)]);case 2:case"end":return e.stop()}}),rn)}var un=Je.a.mark(sn);function sn(){return Je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ve.a)([Object(Ve.d)(on)]);case 2:case"end":return e.stop()}}),un)}var ln=Object(Fe.a)(),dn=Object(Ne.a)({reducer:Ze,middleware:[ln]});ln.run(sn);var pn=dn;o.a.render(a.a.createElement(i.a,{store:pn},a.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.2fac14ae.chunk.js.map