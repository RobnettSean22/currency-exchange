(this["webpackJsonpcurrency-test"]=this["webpackJsonpcurrency-test"]||[]).push([[0],{160:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(55),i=a.n(o),c=(a(64),a(6)),l=a(7),d=a(9),s=a(10),u=a(8),m=(a(65),a(56)),p=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getstuff=function(){n.setState({visible:!0,chartData:{labels:n.props.name,datasets:[{label:"Ratest",fill:!0,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:n.props.exc}]}})},n.state={chartData:{},visible:!1},n.getstuff=n.getstuff.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){return console.log(this.props.name,this.props.exc),r.a.createElement("div",null,r.a.createElement("div",{id:"button-case"},r.a.createElement("button",{onClick:this.getstuff},"Chart")),r.a.createElement("div",{className:!0===this.state.visible?"see":"blind"},r.a.createElement(m.a,{data:this.state.chartData,options:{title:{display:!0,text:"".concat(this.props.date," ").concat(this.props.based," Exchange Rates"),fontSize:25},legend:{display:!1}}})))}}]),a}(n.Component),h=(a(160),a(58)),v=a.n(h),f=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).exchangeRates=function(){v.a.get("https://api.exchangeratesapi.io/latest").then((function(e){n.setState({data:e.data,CurrencyRates:e.data.rates})}))},n.fromChange=function(e){n.setState({fromSelect:e.target.value.split(",")})},n.toChange=function(e){n.setState({toSelect:e.target.value.split(",")})},n.calc=function(){var e=n.state,t=e.fromSelect,a=e.amountInput,r=e.toSelect;if(1===t[0]){var o=a*r[0];n.setState({exchanged:o.toFixed(3).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),display:!0,amountInput:n.state.amountInput.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")})}else if(1===r[0]){var i=1/t[0],c=r[0]/t[0],l=a*i;n.setState({exchanged:l.toFixed(3).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),oneFromRate:i.toFixed(3),oneToRate:c.toFixed(3),display:!0,amountInput:n.state.amountInput.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")})}else if(t[0]||1!==r[0]){var d=r[0]/t[0],s=t[0]/r[0],u=a*d;n.setState({exchanged:u.toFixed(3).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),oneFromRate:d.toFixed(3),oneToRate:s.toFixed(3),display:!0,amountInput:n.state.amountInput.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")})}},n.state={data:[],CurrencyRates:[],amountInput:"",fromSelect:["1"],toSelect:["1"],exchanged:null,oneToRate:null,oneFromRate:null,display:!1},n.fromChange=n.fromChange.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.exchangeRates()}},{key:"render",value:function(){var e=this,t=this.state,a=t.CurrencyRates,n=t.amountInput,o=t.fromSelect,i=t.toSelect,c=t.exchanged,l=t.oneFromRate,d=t.oneToRate,s=t.display,u=t.data,m=Object.entries(a),h=m.map((function(e){return e[0]})),v=m.map((function(e){return e[1]})),f=m.sort().map((function(e,t){return r.a.createElement("option",{key:t,value:[e[1],e[0]]},e[0])}));return r.a.createElement("div",null,r.a.createElement("div",{id:"header"},r.a.createElement("h1",null,"CurrencyXChange")),r.a.createElement("div",{id:"container"},r.a.createElement("div",{id:"calculator"},r.a.createElement("input",{value:n,onChange:function(t){return e.setState({amountInput:t.target.value})}}),r.a.createElement("select",{value:o,onChange:this.fromChange},r.a.createElement("option",{value:["1"]},u.base),f),r.a.createElement("select",{value:i,onChange:this.toChange},r.a.createElement("option",{value:["1"]},u.base),f)),r.a.createElement("div",{id:"conversion"},r.a.createElement("button",{onClick:this.calc},"Convert"))),r.a.createElement("div",{id:s?"results":"hidden"},r.a.createElement("div",{id:"fromto"},r.a.createElement("h2",null,o[1]," to ",i[1])),r.a.createElement("div",{id:"converted"},r.a.createElement("div",{id:"start"}," ",r.a.createElement("h2",null,n," ",o[1]," =")),r.a.createElement("div",{id:"mid"},r.a.createElement("h1",null,c," ",i[1])),r.a.createElement("div",{id:"fin"}," ",r.a.createElement("h2",null," ","1 ",o[1]," = ",l," ",i[1]),r.a.createElement("h2",null," ","1 ",i[1]," = ",d," ",o[1]))),r.a.createElement("div",{id:"date"},r.a.createElement("h2",null,"Updated on:",u.date))),r.a.createElement(p,{name:h,exc:v,date:u.date,based:u.base}))}}]),a}(n.Component),g=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e,t,a){e.exports=a(177)},64:function(e,t,a){},65:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.61ae1bfe.chunk.js.map