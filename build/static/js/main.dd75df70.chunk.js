(this.webpackJsonpvclass=this.webpackJsonpvclass||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),r=n.n(a),i=n(7),c=n.n(i),o=(n(14),n(2)),l=n(3),h=n(5),u=n(4),d=(n(15),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).onUserChange=function(e){s.setState({signInUser:e.target.value})},s.onPasswordChange=function(e){s.setState({signInPassword:e.target.value})},s.onSubmitPress=function(){""!==s.state.signInUser&&""!==s.state.signInPassword&&(fetch("http://localhost:3001/login",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({userName:s.state.signInUser,password:s.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){console.log(e),"fail"===e&&(s.props.onRouteChange("signin"),s.props.setUser(""))})).catch((function(e){return console.log(e)})),s.props.setUser(s.state.signInUser),s.props.onRouteChange("loading"))},s.state={signInUser:"",signInPassword:"",signInFinish:!1},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.onRouteChange;return this.state.signInFinish&&this.props.onRouteChange("home"),Object(s.jsx)("main",{className:"pa4 black-80",children:Object(s.jsxs)("form",{className:"measure center",children:[Object(s.jsx)("legend",{className:"tc f4 fw6 ph0 mh0",children:"Sign In"}),Object(s.jsxs)("div",{className:"mt3",children:[Object(s.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"User Name"}),Object(s.jsx)("input",{onChange:this.onUserChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",name:"user-name",id:"user-name"})]}),Object(s.jsxs)("div",{className:"mv3",children:[Object(s.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(s.jsx)("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]}),Object(s.jsx)("div",{className:"center",children:Object(s.jsx)("input",{className:"center b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:function(){return e.onSubmitPress()}})}),Object(s.jsx)("div",{className:"lh-copy mt3 pointer",children:Object(s.jsx)("p",{className:"f6 link dim black db",onClick:function(){return t("register")},children:"Register"})})]})})}}]),n}(r.a.Component)),b=(n(16),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).onUserChange=function(e){s.setState({registerUser:e.target.value})},s.onPasswordChange=function(e){s.setState({registerPassword:e.target.value})},s.onSubmitPress=function(){""!==s.state.registerUser&&""!==s.state.registerPassword&&(fetch("http://localhost:3001/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:s.state.registerUser,password:s.state.registerPassword})}).then((function(e){return e.json()})).then((function(e){"fail"===e&&s.props.onRouteChange("register")})).catch((function(e){return console.log(e)})),s.props.onRouteChange("signIn"))},s.state={registerUser:"",registerPassword:""},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("form",{className:"measure center",action:"sign-up_submit",method:"get",acceptCharset:"utf-8",children:[Object(s.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(s.jsx)("legend",{className:"tc f4 fw6 ph0 mh0 tc",children:"Register"}),Object(s.jsxs)("div",{className:"mt3",children:[Object(s.jsx)("label",{className:"db fw4 lh-copy f6",htmlFor:"email-address",children:"User Name"}),Object(s.jsx)("input",{onChange:this.onUserChange,className:"pa2 input-reset ba bg-transparent w-100 measure",name:"user-name",id:"user-name"})]}),Object(s.jsxs)("div",{className:"mt3",children:[Object(s.jsx)("label",{className:"db fw4 lh-copy f6",htmlFor:"password",children:"Password"}),Object(s.jsx)("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent",type:"password",name:"password",id:"password"})]})]}),Object(s.jsx)("div",{className:"mt3",children:Object(s.jsx)("input",{onClick:function(){return e.onSubmitPress()},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6",type:"submit",value:"Register"})})]})}}]),n}(r.a.Component)),m=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).reset=function(){s.props.setUser(""),s.props.onRouteChange("signin")},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(s.jsx)("p",{onClick:this.reset,className:" grow f1 link dim black underline pa3 pointer",children:"Sign Out"})})}}]),n}(r.a.Component),g=function(e){var t=e.searchChange;return Object(s.jsx)("main",{className:"pa4 black-80 measure center",children:Object(s.jsx)("div",{className:" pa2",children:Object(s.jsx)("input",{type:"search",className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",onChange:t})})})},j=(n(17),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).onDeleteClicked=function(){fetch("http://localhost:3001/deleteEvent",{method:"DELETE",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({id:s.props.id})}).then((function(e){return e.json()})),s.props.onRouteChange("loading")},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsx)("article",{className:" grow br2 ba dark-gray b--black-10 mv4  w-25-l mw5 center grow",children:Object(s.jsxs)("div",{id:"parent",className:"bg-light-blue dib br3 pa3 ma2 bw2 shadow-5 tc",children:[Object(s.jsxs)("div",{id:"wide",children:[Object(s.jsxs)("h2",{children:[" ",this.props.title," "]}),Object(s.jsxs)("p",{children:[" ",this.props.actionTime," "]}),Object(s.jsxs)("p",{children:["password: ",this.props.password]})]}),Object(s.jsx)("div",{id:"narrow",children:Object(s.jsx)("img",{alt:"deleteButton",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAC7klEQVR4nO2b63XiQAxGbwmUkBLoYClhS1AJKSElpAOmk6WD0EFKIB2wP7DOzoJfGklDDuE7x3+Mfcb3hockO/DMM3X2wAk4P+h2GhhHsx0O2j34dh5Yb6IvPnr0j3yTHW0CNsN2r7wYjw8VsAE+hu0eEvQ7a/QtPZEwAQp/BAr9JeyrtS0SQgTU8Ap9oJ8Ehde1CusluAWMwev+I/kS9sAXt5/9wjoJLgFT8PXrmRIUfgqysCyhWcASfH1choQleE1hXkKTgLXw9fGREtbCawrTEswCrPD1eRESrPCawrgEk4BW+Pp8j4RWeE3hVoJJwO9h32vjBUC7BC88/Otv3qt95o+ADPvFcSFWCVHwJy7vgjpNX4JCPwmZ8OD4GRTyJWTDg7MQEvIk9ICHgFJYiJfQCx6CmiEhTsIn/eAhsB0WYiQc6AcPwQMRwS/BEys8JIzEBPtUJiIv2OEhQQD0l6Alemk4N0UA9JPggYdEAZAvwQsPyQIA3siREAEPHQSAfVK7lLot96aLAIiT4J1JXKebACGmRthyqRQnb2oa00WAEFsgRUpIFyDkVIdREtJ/BjNL4wgJqYVQj77AKyGtFO7ZFHkkpDRD9+gIWyWECtCxuRjPi4pKsKwfJkB7ccvi19kAf/APRCwSQgREwX9wuXhvxWiR4BYQAQ//l7cF/z3EtRJcAqLgr5/wgBgJO5a/k5oFKPz7zDFrMgavKfglCPMSmgS0DB/HMgevKeRKMAvoCa85kCfBJCAS/ov1DzV6nyvQCLcSzA9IHPE1H623vSIkvI2s3fSITKsE7z0/jwSZWLv5ISmrhIgbnvXaFgkys3bzz6BFQhT89dprJMjC2u5CaKkDi4bXrJEgzPw/wJCQUnhKQha8Zk6CsK4zDWuGriVkw2vGJAjr2/LQdlgl9ILX1BJesc0kQgciKqEnvEYlWAcy4SOxLf3hNRsuUylLut0Z+q55CuApYF7ArwffJgXApe09P/hWpuCf+Yn5C81jLphW7HOZAAAAAElFTkSuQmCC",onClick:function(){return e.onDeleteClicked()}})})]})})}}]),n}(r.a.Component)),p=function(e){var t=e.events,n=e.onRouteChange,a=t.map((function(e){return Object(s.jsx)(j,{id:e.id,title:e.title,actionTime:e.actionTime,password:e.password,onRouteChange:n},e.id)}));return Object(s.jsx)("div",{children:a})},f=function(e){return Object(s.jsx)("div",{className:"center scroll",style:{overflowY:"scroll",border:"1px solid black",height:"600px",width:"500px"},children:e.children})},C=n(8),A=n.n(C),w=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).onAddClicked=function(){s.props.onRouteChange("eventForm")},s.onSearchChange=function(e){s.setState({searchField:e.target.value})},s.copyToClipboard=function(e){var t=document.createElement("textarea");t.innerText=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()},s.onTick=function(){s.setState({time:new Date});for(var e=s.state.time.getDay(),t=s.state.events,n=0;n<t.length;n++)(0===e&&t[n].sun||1===e&&t[n].mon||2===e&&t[n].tue||3===e&&t[n].wed||4===e&&t[n].thu||5===e&&t[n].fri||6===e&&t[n].sat)&&t[n].actionTime.slice(0,5)===s.state.time.toTimeString().slice(0,5)&&(window.open(t[n].url),console.log(t[n].password),A()(t[n].password))},s.state={userName:s.props.userName,day:"",events:[],time:new Date,searchField:""},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3001/getprofile/"+this.state.userName).then((function(e){return e.json()})).then((function(t){e.setState({events:t}),console.log(t)})),this.timerID=setInterval((function(){return e.onTick()}),6e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this,t=this.state.events.filter((function(t){return t.title.toLowerCase().includes(e.state.searchField.toLowerCase())}));return Object(s.jsxs)("div",{children:[Object(s.jsx)(m,{onRouteChange:this.props.onRouteChange,setUser:this.props.setUser}),Object(s.jsxs)("div",{className:"tc pa4 black-80 center App",children:[Object(s.jsx)("img",{alt:"addButton",src:"data:image/png;base64,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",onClick:function(){return e.onAddClicked()}}),Object(s.jsx)(g,{searchChange:this.onSearchChange}),Object(s.jsx)(f,{children:Object(s.jsx)(p,{events:t,onRouteChange:this.props.onRouteChange})})]})]})}}]),n}(r.a.Component),v=(n(19),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).onSubmitPress=function(){console.log("done")},s.onTitleChange=function(e){s.setState({title:e.target.value})},s.onUrlChange=function(e){s.setState({url:e.target.value})},s.onPasswordChange=function(e){s.setState({password:e.target.value})},s.onTimeChange=function(e){s.setState({launchTime:e.target.value})},s.onMonChange=function(){s.setState({mon:!s.state.mon})},s.onTueChange=function(){s.setState({tue:!s.state.tue})},s.onWedChange=function(){s.setState({wed:!s.state.wed})},s.onThuChange=function(){s.setState({thu:!s.state.thu})},s.onFriChange=function(){s.setState({fri:!s.state.fri})},s.onSatChange=function(){s.setState({sat:!s.state.sat})},s.onSunChange=function(){s.setState({sun:!s.state.sun})},s.onSubmitPress=function(){fetch("http://localhost:3001/addEvent",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({userName:s.props.userName,title:s.state.title,url:s.state.url,actionTime:s.state.launchTime,password:s.state.password,mon:s.state.mon,tue:s.state.tue,wed:s.state.wed,thu:s.state.thu,fri:s.state.fri,sat:s.state.sat,sun:s.state.sun})}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})),s.props.onRouteChange("loading")},s.onBackClicked=function(){s.props.onRouteChange("home")},s.state={title:"",url:"",launchTime:"",password:"",mon:!1,tue:!1,wed:!1,thu:!1,fri:!1,sat:!1,sun:!1},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("main",{className:"pa4 black-80",children:[Object(s.jsx)("img",{alt:"backButton",src:"data:image/png;base64,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",onClick:function(){return e.onBackClicked()}}),Object(s.jsxs)("form",{className:"measure center",children:[Object(s.jsxs)("div",{className:"mv3",children:[Object(s.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"title",children:"Class Name"}),Object(s.jsx)("input",{onChange:this.onTitleChange,className:"b pa2 input-reset ba bg-transparent w-100",type:"text",name:"title",id:"title"})]}),Object(s.jsxs)("div",{className:"mv3",children:[Object(s.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"url",children:"Meeting URL"}),Object(s.jsx)("input",{onChange:this.onUrlChange,className:"b pa2 input-reset ba bg-transparent w-100",type:"url",name:"url",id:"url"})]}),Object(s.jsxs)("div",{className:"mv3",children:[Object(s.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Meeting Password"}),Object(s.jsx)("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent w-100",type:"text",name:"password",id:"password"})]}),Object(s.jsxs)("div",{className:"mv3",children:[Object(s.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"launch time",children:"meeting launch time"}),Object(s.jsx)("input",{onChange:this.onTimeChange,className:"b pa2 input-reset ba bg-transparent w-100",type:"time",name:"launch time",id:"launch time"})]}),Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"pa4",children:Object(s.jsxs)("fieldset",{id:"favorite_movies",className:"bn",children:[Object(s.jsx)("legend",{className:"fw7 mb2",children:"Days"}),Object(s.jsxs)("div",{className:"flex items-center mb2",children:[Object(s.jsx)("input",{className:"mr2",type:"checkbox",id:"monday",value:"monday",onClick:function(){return e.onMonChange()}}),Object(s.jsx)("label",{htmlFor:"monday",className:"lh-copy",children:"Monday"})]}),Object(s.jsxs)("div",{className:"flex items-center mb2",children:[Object(s.jsx)("input",{className:"mr2",type:"checkbox",id:"tuesday",value:"tuesday",onClick:function(){return e.onTueChange()}}),Object(s.jsx)("label",{htmlFor:"tuesday",className:"lh-copy",children:"Tuesday"})]}),Object(s.jsxs)("div",{className:"flex items-center mb2",children:[Object(s.jsx)("input",{className:"mr2",type:"checkbox",id:"wednesday",value:"wednesday",onClick:function(){return e.onWedChange()}}),Object(s.jsx)("label",{htmlFor:"wednesday",className:"lh-copy",children:"Wednesday"})]}),Object(s.jsxs)("div",{className:"flex items-center mb2",children:[Object(s.jsx)("input",{className:"mr2",type:"checkbox",id:"thursday",value:"thursday",onClick:function(){return e.onThuChange()}}),Object(s.jsx)("label",{htmlFor:"thursday",className:"lh-copy",children:"Thursday"})]}),Object(s.jsxs)("div",{className:"flex items-center mb2",children:[Object(s.jsx)("input",{className:"mr2",type:"checkbox",id:"friday",value:"friday",onClick:function(){return e.onFriChange()}}),Object(s.jsx)("label",{htmlFor:"friday",className:"lh-copy",children:"Friday"})]}),Object(s.jsxs)("div",{className:"flex items-center mb2",children:[Object(s.jsx)("input",{className:"mr2",type:"checkbox",id:"saturday",value:"saturday",onClick:function(){return e.onSatChange()}}),Object(s.jsx)("label",{htmlFor:"saturday",className:"lh-copy",children:"Saturday"})]}),Object(s.jsxs)("div",{className:"flex items-center mb2",children:[Object(s.jsx)("input",{className:"mr2",type:"checkbox",id:"sunday",value:"sunday",onClick:function(){return e.onSunChange()}}),Object(s.jsx)("label",{htmlFor:"sunday",className:"lh-copy",children:"Sunday"})]})]})})}),Object(s.jsx)("div",{className:"center",children:Object(s.jsx)("input",{className:"center b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Submit",onClick:function(){return e.onSubmitPress()}})})]})]})}}]),n}(r.a.Component)),O=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onRouteChange("home")}},{key:"render",value:function(){return Object(s.jsx)("h2",{children:"Loading..."})}}]),n}(r.a.Component),x=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onRouteChange=function(t){e.setState({route:t})},e.setUser=function(t){e.setState({userName:t})},e.state={route:"signin",userName:"",day:"",events:[],time:new Date,addEvent:"false"},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:"home"===this.state.route?Object(s.jsx)(w,{userName:this.state.userName,onRouteChange:this.onRouteChange,setUser:this.setUser}):"signin"===this.state.route?Object(s.jsx)(d,{onRouteChange:this.onRouteChange,setUser:this.setUser}):"register"===this.state.route?Object(s.jsx)(b,{onRouteChange:this.onRouteChange,setUser:this.setUser}):"loading"===this.state.route?Object(s.jsx)(O,{onRouteChange:this.onRouteChange}):Object(s.jsx)(v,{onRouteChange:this.onRouteChange,userName:this.state.userName})})}}]),n}(r.a.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))};c.a.render(Object(s.jsx)(x,{}),document.getElementById("root")),N()}],[[20,1,2]]]);
//# sourceMappingURL=main.dd75df70.chunk.js.map