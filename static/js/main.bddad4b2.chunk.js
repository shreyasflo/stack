(window["webpackJsonp2-step"]=window["webpackJsonp2-step"]||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},24:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(11),s=a.n(o),c=(a(22),a(7)),l=a.n(c),i=a(9),u=a(12),d=a(13),h=a(15),m=a(14),p=a(3),v=a(16),b=a(30),f=a(31),E=a(32),S=a(33),w=a(34),g=a(35),O=(a(24),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){},a.handleSMS=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({status:"sending text message"}),n={number:a.state.phone,message:"Your code is "+a.state.RegistrationCode,subject:"test"},t.preventDefault(),e.next=5,fetch("https://ajpu0i9be8.execute-api.us-east-1.amazonaws.com/dev",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:a.setState({status:"text sent."});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleCode=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({status:""}),t.target.value.toString()===a.state.RegistrationCode.toString()&&a.setState({handshake:"OK"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handlePhone=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,a.setState({phone:"+1"+n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={RegistrationCode:"",handshake:"",phone:"",status:""},a.handleCode=a.handleCode.bind(Object(p.a)(a)),a.handleSMS=a.handleSMS.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a.handlePhone=a.handlePhone.bind(Object(p.a)(a)),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Math.floor(9877587600+9e3*Math.random());this.setState({RegistrationCode:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{className:"col-12 border phonerow"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(f.a,{onSubmit:this.handleSubmit},r.a.createElement(E.a,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(S.a,{htmlFor:"phone"},r.a.createElement("h3",null,"CellPhone"))),r.a.createElement("div",{className:"col-12"},r.a.createElement(w.a,{type:"phone",name:"phone",id:"phone",placeholder:"Enter phone number",required:!0,onChange:this.handlePhone})))),r.a.createElement(E.a,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(g.a,{className:"btn btn-block btn-success",onClick:this.handleSMS},"Send text message")),r.a.createElement("div",{className:"col-6"},r.a.createElement(w.a,{type:"text",name:"code",id:"code",placeholder:"Enter code",onChange:this.handleCode,required:!0})))),r.a.createElement(E.a,null,r.a.createElement("div",{className:"text-danger"},"OK"===this.state.handshake?"Your code is valid":"")),r.a.createElement("h4",{className:"status-update"},this.state.status))))))}}]),t}(n.Component));a(27);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.bddad4b2.chunk.js.map