(this.webpackJsonpvclass=this.webpackJsonpvclass||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),r=s.n(a),i=s(9),c=s.n(i),o=(s(15),s(3)),l=s(4),h=s(6),u=s(5),d=(s(16),s(7)),b=s.n(d),j=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onUserChange=function(e){n.setState({signInUser:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitPress=function(){""!==n.state.signInUser&&""!==n.state.signInPassword&&(fetch("https://mighty-river-01892.herokuapp.com/login",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({userName:n.state.signInUser,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){console.log(e),"fail"!==e?(n.props.setUser(n.state.signInUser),n.props.onRouteChange("loading"),n.props.keyChange(e)):(n.setState({load:!1}),n.setState({failed:!0}))})).catch((function(e){return console.log(e)})),n.setState({load:!0}))},n.state={signInUser:"",signInPassword:"",load:!1,failed:!1},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.onRouteChange;return Object(n.jsx)("div",{children:this.state.load?Object(n.jsx)("div",{className:"dead-center",children:Object(n.jsx)(b.a,{type:"TailSpin",color:"#5e5d63",height:400,width:400,className:"dead-center"})}):Object(n.jsx)("main",{className:"pa4 black-80",children:Object(n.jsxs)("form",{className:"measure center",children:[Object(n.jsx)("legend",{className:"tc f4 fw6 ph0 mh0",children:"Sign In"}),Object(n.jsxs)("div",{className:"mt3",children:[Object(n.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"user-name",children:"User Name"}),Object(n.jsx)("input",{onChange:this.onUserChange,className:"pa2 input-reset ba bg-transparent w-100",name:"user-name",id:"user-name"})]}),Object(n.jsxs)("div",{className:"mv3",children:[Object(n.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(n.jsx)("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent w-100",type:"password",name:"password",id:"password"})]}),Object(n.jsx)("div",{className:"center",children:Object(n.jsx)("input",{className:"center b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:function(){return e.onSubmitPress()}})}),Object(n.jsx)("div",{className:"lh-copy mt3 pointer",children:Object(n.jsx)("p",{className:"f6 link dim black db",onClick:function(){return t("register")},children:"Register"})}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),this.state.failed?Object(n.jsx)("p",{className:"red",children:"username/password is incorrect"}):Object(n.jsx)("p",{})]})})})}}]),s}(r.a.Component),p=(s(37),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onUserChange=function(e){n.setState({registerUser:e.target.value})},n.onPasswordChange=function(e){n.setState({registerPassword:e.target.value})},n.onSubmitPress=function(){""!==n.state.registerUser&&""!==n.state.registerPassword&&(fetch("https://mighty-river-01892.herokuapp.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n.state.registerUser,password:n.state.registerPassword})}).then((function(e){return e.json()})).then((function(e){"fail"!==e?(n.props.setUser(n.state.registerUser),n.props.keyChange(e),n.props.onRouteChange("loading")):(n.setState({load:!1}),n.setState({failed:!0}))})).catch((function(e){return console.log(e)})),n.setState({load:!0}))},n.state={registerUser:"",registerPassword:"",load:!1,failed:!1},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{children:this.state.load?Object(n.jsx)("div",{children:Object(n.jsx)(b.a,{type:"TailSpin",color:"#5e5d63",height:200,width:200,className:"deadCenter"})}):Object(n.jsxs)("form",{className:"measure center",action:"sign-up_submit",method:"get",acceptCharset:"utf-8",children:[Object(n.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(n.jsx)("legend",{className:"tc f4 fw6 ph0 mh0 tc",children:"Register"}),Object(n.jsxs)("div",{className:"mt3",children:[Object(n.jsx)("label",{className:"db fw4 lh-copy f6",htmlFor:"email-address",children:"User Name"}),Object(n.jsx)("input",{onChange:this.onUserChange,className:"pa2 input-reset ba bg-transparent w-100 measure",name:"user-name",id:"user-name"})]}),Object(n.jsxs)("div",{className:"mt3",children:[Object(n.jsx)("label",{className:"db fw4 lh-copy f6",htmlFor:"password",children:"Password"}),Object(n.jsx)("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent",type:"password",name:"password",id:"password"})]})]}),Object(n.jsx)("div",{className:"mt3",children:Object(n.jsx)("input",{onClick:function(){return e.onSubmitPress()},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6",type:"submit",value:"Register"})}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{children:this.state.failed?Object(n.jsx)("p",{children:"Try a different username!"}):Object(n.jsx)("p",{})})]})})}}]),s}(r.a.Component)),m=(s(38),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).reset=function(){n.props.setUser(""),n.props.onRouteChange("signin")},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(n.jsx)("p",{onClick:this.reset,className:" big grow f2 link pr4 underline shadow-1 dim black underline pa5 pointer",children:"Sign Out"})})}}]),s}(r.a.Component)),g=function(e){var t=e.searchChange;return Object(n.jsx)("main",{className:"pa4 black-80 measure center",children:Object(n.jsx)("div",{className:" pa2",children:Object(n.jsx)("input",{type:"search",className:"pa2 input-reset ba bg-transparent w-100",onChange:t})})})},f=(s(39),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onDeleteClicked=function(){fetch("https://mighty-river-01892.herokuapp.com/deleteEvent",{method:"DELETE",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({id:n.props.id,key:n.props.apikey})}).then((function(e){return e.json()})).then((function(e){"success"===e&&(n.setState({load:!1}),n.props.onRouteChange("loading"))})),n.setState({load:!0})},n.onJoinPress=function(){window.open(n.props.url)},n.state={load:!1},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{children:this.state.load?Object(n.jsx)("p",{}):Object(n.jsx)("article",{className:" grow br2 ba dark-gray b--black-10 mv4  w-25-l mw5 center grow",children:Object(n.jsxs)("div",{id:"parent",className:"bg-light-blue dib br3 pa3 ma2 bw2 shadow-5 tc",children:[Object(n.jsxs)("div",{id:"wide",children:[Object(n.jsxs)("h2",{children:[" ",this.props.title," "]}),Object(n.jsxs)("p",{children:[" ",this.props.actionTime," "]}),""!==this.props.password?Object(n.jsxs)("p",{children:["password: ",this.props.password]}):Object(n.jsx)("p",{})]}),Object(n.jsxs)("div",{id:"narrow",children:[Object(n.jsx)("img",{alt:"deleteButton",className:"pointer grow",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAC7klEQVR4nO2b63XiQAxGbwmUkBLoYClhS1AJKSElpAOmk6WD0EFKIB2wP7DOzoJfGklDDuE7x3+Mfcb3hockO/DMM3X2wAk4P+h2GhhHsx0O2j34dh5Yb6IvPnr0j3yTHW0CNsN2r7wYjw8VsAE+hu0eEvQ7a/QtPZEwAQp/BAr9JeyrtS0SQgTU8Ap9oJ8Ehde1CusluAWMwev+I/kS9sAXt5/9wjoJLgFT8PXrmRIUfgqysCyhWcASfH1choQleE1hXkKTgLXw9fGREtbCawrTEswCrPD1eRESrPCawrgEk4BW+Pp8j4RWeE3hVoJJwO9h32vjBUC7BC88/Otv3qt95o+ADPvFcSFWCVHwJy7vgjpNX4JCPwmZ8OD4GRTyJWTDg7MQEvIk9ICHgFJYiJfQCx6CmiEhTsIn/eAhsB0WYiQc6AcPwQMRwS/BEys8JIzEBPtUJiIv2OEhQQD0l6Alemk4N0UA9JPggYdEAZAvwQsPyQIA3siREAEPHQSAfVK7lLot96aLAIiT4J1JXKebACGmRthyqRQnb2oa00WAEFsgRUpIFyDkVIdREtJ/BjNL4wgJqYVQj77AKyGtFO7ZFHkkpDRD9+gIWyWECtCxuRjPi4pKsKwfJkB7ccvi19kAf/APRCwSQgREwX9wuXhvxWiR4BYQAQ//l7cF/z3EtRJcAqLgr5/wgBgJO5a/k5oFKPz7zDFrMgavKfglCPMSmgS0DB/HMgevKeRKMAvoCa85kCfBJCAS/ov1DzV6nyvQCLcSzA9IHPE1H623vSIkvI2s3fSITKsE7z0/jwSZWLv5ISmrhIgbnvXaFgkys3bzz6BFQhT89dprJMjC2u5CaKkDi4bXrJEgzPw/wJCQUnhKQha8Zk6CsK4zDWuGriVkw2vGJAjr2/LQdlgl9ILX1BJesc0kQgciKqEnvEYlWAcy4SOxLf3hNRsuUylLut0Z+q55CuApYF7ArwffJgXApe09P/hWpuCf+Yn5C81jLphW7HOZAAAAAElFTkSuQmCC",onClick:function(){return e.onDeleteClicked()}}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{className:" b ph3 pv2 input-reset ba b--black bg-transparent pointer grow f6 dib",type:"submit",value:"Join",onClick:function(){return e.onJoinPress()}})]})]})})})}}]),s}(r.a.Component)),O=function(e){var t=e.events,s=e.onRouteChange,a=e.apikey,r=t.map((function(e){return Object(n.jsx)(f,{id:e.id,title:e.title,actionTime:e.actiontime,password:e.password,onRouteChange:s,url:e.url,apikey:a},e.id)}));return Object(n.jsx)("div",{children:r})},C=function(e){return Object(n.jsx)("div",{className:"center scroll",style:{overflowY:"scroll",border:"1px solid black",height:"550px",width:"500px"},children:e.children})},v=(s(40),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onDeleteClicked=function(){fetch("https://mighty-river-01892.herokuapp.com/deleteTask",{method:"DELETE",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({id:n.props.id,key:n.props.apikey})}).then((function(e){return e.json()})).then((function(e){"success"===e&&(n.setState({load:!1}),n.props.onRouteChange("loading"))})),n.setState({load:!0})},n.state={load:!1},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[this.state.load?Object(n.jsx)("p",{}):Object(n.jsx)("li",{className:"pointer",children:Object(n.jsx)("span",{onClick:function(){return e.onDeleteClicked()},className:" measure center white hover-white dib br3 pa3 ma2 bw2 shadow-5",children:Object(n.jsx)("p",{children:this.props.name})})}),Object(n.jsx)("br",{})]})}}]),s}(r.a.Component)),w=function(e){var t=e.tasks,s=e.onRouteChange,a=e.apikey,r=t.map((function(e){return Object(n.jsx)(v,{id:e.id,name:e.name,onRouteChange:s,apikey:a},e.id)}));return Object(n.jsx)("div",{children:r})},y=(s(41),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).enterPress=function(e){13!==e.keyCode||/^\s*$/.test(n.state.taskField)||(fetch("https://mighty-river-01892.herokuapp.com/addTask",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({username:n.state.userName,task:n.state.taskField,key:n.state.apikey})}).then((function(e){return e.json()})).then((function(e){"success"===e&&n.props.onRouteChange("loading")})).catch((function(e){return console.log(e)})),n.setState({taskField:""}))},n.onAddClicked=function(){n.props.onRouteChange("eventForm")},n.onSearchChange=function(e){n.setState({searchField:e.target.value})},n.onTaskChange=function(e){n.setState({taskField:e.target.value})},n.onTick=function(){n.setState({time:new Date});for(var e=n.state.time.getDay(),t=n.state.events,s=0;s<t.length;s++)(0===e&&t[s].sun||1===e&&t[s].mon||2===e&&t[s].tue||3===e&&t[s].wed||4===e&&t[s].thu||5===e&&t[s].fri||6===e&&t[s].sat)&&t[s].actiontime.slice(0,5)===n.state.time.toTimeString().slice(0,5)&&window.open(t[s].url)},n.state={userName:n.props.userName,day:"",events:[],time:new Date,searchField:"",taskField:"",tasks:[],apikey:n.props.apikey},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://mighty-river-01892.herokuapp.com/getprofile/"+this.state.userName+"/"+this.state.apikey).then((function(e){return e.json()})).then((function(t){e.setState({events:t}),console.log(t)})),fetch("https://mighty-river-01892.herokuapp.com/getTasks/"+this.state.userName+"/"+this.state.apikey).then((function(e){return e.json()})).then((function(t){e.setState({tasks:t})})),this.timerID=setInterval((function(){return e.onTick()}),6e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this,t=this.state.events.filter((function(t){return t.title.toLowerCase().includes(e.state.searchField.toLowerCase())}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("nav",{className:"navbar",children:Object(n.jsx)("ul",{className:"navbar-nav",children:Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{className:"nav-item text-item pa2 input-reset ba bg-transparent white w-100","aria-hidden":"true",onKeyDown:function(t){return e.enterPress(t)},onChange:this.onTaskChange}),Object(n.jsx)(w,{apikey:this.state.apikey,tasks:this.state.tasks,onRouteChange:this.props.onRouteChange})]})})}),Object(n.jsx)(m,{onRouteChange:this.props.onRouteChange,setUser:this.props.setUser}),Object(n.jsxs)("div",{className:"tc pa4 black-80 App",children:[Object(n.jsx)("div",{className:"image-container",children:Object(n.jsx)("img",{alt:"addButton",src:"data:image/png;base64,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",onClick:function(){return e.onAddClicked()},className:"pointer grow"})}),Object(n.jsx)(g,{searchChange:this.onSearchChange}),Object(n.jsx)(C,{children:Object(n.jsx)(O,{apikey:this.state.apikey,events:t,onRouteChange:this.props.onRouteChange})})]})]})}}]),s}(r.a.Component)),x=(s(42),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onSubmitPress=function(){console.log("done")},n.onTitleChange=function(e){n.setState({title:e.target.value})},n.onUrlChange=function(e){n.setState({url:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onTimeChange=function(e){n.setState({launchTime:e.target.value})},n.onMonChange=function(){n.setState({mon:!n.state.mon})},n.onTueChange=function(){n.setState({tue:!n.state.tue})},n.onWedChange=function(){n.setState({wed:!n.state.wed})},n.onThuChange=function(){n.setState({thu:!n.state.thu})},n.onFriChange=function(){n.setState({fri:!n.state.fri})},n.onSatChange=function(){n.setState({sat:!n.state.sat})},n.onSunChange=function(){n.setState({sun:!n.state.sun})},n.onSubmitPress=function(){""!==n.state.launchTime?(fetch("https://mighty-river-01892.herokuapp.com/addEvent",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({userName:n.props.userName,title:n.state.title,url:n.state.url,actionTime:n.state.launchTime,password:n.state.password,mon:n.state.mon,tue:n.state.tue,wed:n.state.wed,thu:n.state.thu,fri:n.state.fri,sat:n.state.sat,sun:n.state.sun,key:n.props.apikey})}).then((function(e){return e.json()})).then((function(e){"success"===e&&(n.setState({load:!1}),n.props.onRouteChange("loading"))})).catch((function(e){return console.log(e)})),n.setState({load:!0})):n.props.onRouteChange("home")},n.onBackClicked=function(){n.props.onRouteChange("home")},n.state={title:"",url:"",launchTime:"",password:"",mon:!1,tue:!1,wed:!1,thu:!1,fri:!1,sat:!1,sun:!1,load:!1},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{children:this.state.load?Object(n.jsx)("p",{}):Object(n.jsxs)("main",{className:"pa4 black-80",children:[Object(n.jsx)("img",{alt:"backButton",src:"data:image/png;base64,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",onClick:function(){return e.onBackClicked()}}),Object(n.jsxs)("form",{className:"measure center",children:[Object(n.jsxs)("div",{className:"mv3",children:[Object(n.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"title",children:"Class Name"}),Object(n.jsx)("input",{onChange:this.onTitleChange,className:"b pa2 input-reset ba bg-transparent w-100",type:"text",name:"title",id:"title"})]}),Object(n.jsxs)("div",{className:"mv3",children:[Object(n.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"url",children:"Meeting URL"}),Object(n.jsx)("input",{onChange:this.onUrlChange,className:"b pa2 input-reset ba bg-transparent w-100",type:"url",name:"url",id:"url"})]}),Object(n.jsxs)("div",{className:"mv3",children:[Object(n.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Meeting Password"}),Object(n.jsx)("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent w-100",type:"text",name:"password",id:"password"})]}),Object(n.jsxs)("div",{className:"mv3",children:[Object(n.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"launch time",children:"meeting launch time"}),Object(n.jsx)("input",{onChange:this.onTimeChange,className:"b pa2 input-reset ba bg-transparent w-100",type:"time",name:"launch time",id:"launch time"})]}),Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"pa4",children:Object(n.jsxs)("fieldset",{id:"favorite_movies",className:"bn",children:[Object(n.jsx)("legend",{className:"fw7 mb2",children:"Days"}),Object(n.jsxs)("div",{className:"flex items-center mb2",children:[Object(n.jsx)("input",{className:"mr2",type:"checkbox",id:"monday",value:"monday",onClick:function(){return e.onMonChange()}}),Object(n.jsx)("label",{htmlFor:"monday",className:"lh-copy",children:"Monday"})]}),Object(n.jsxs)("div",{className:"flex items-center mb2",children:[Object(n.jsx)("input",{className:"mr2",type:"checkbox",id:"tuesday",value:"tuesday",onClick:function(){return e.onTueChange()}}),Object(n.jsx)("label",{htmlFor:"tuesday",className:"lh-copy",children:"Tuesday"})]}),Object(n.jsxs)("div",{className:"flex items-center mb2",children:[Object(n.jsx)("input",{className:"mr2",type:"checkbox",id:"wednesday",value:"wednesday",onClick:function(){return e.onWedChange()}}),Object(n.jsx)("label",{htmlFor:"wednesday",className:"lh-copy",children:"Wednesday"})]}),Object(n.jsxs)("div",{className:"flex items-center mb2",children:[Object(n.jsx)("input",{className:"mr2",type:"checkbox",id:"thursday",value:"thursday",onClick:function(){return e.onThuChange()}}),Object(n.jsx)("label",{htmlFor:"thursday",className:"lh-copy",children:"Thursday"})]}),Object(n.jsxs)("div",{className:"flex items-center mb2",children:[Object(n.jsx)("input",{className:"mr2",type:"checkbox",id:"friday",value:"friday",onClick:function(){return e.onFriChange()}}),Object(n.jsx)("label",{htmlFor:"friday",className:"lh-copy",children:"Friday"})]}),Object(n.jsxs)("div",{className:"flex items-center mb2",children:[Object(n.jsx)("input",{className:"mr2",type:"checkbox",id:"saturday",value:"saturday",onClick:function(){return e.onSatChange()}}),Object(n.jsx)("label",{htmlFor:"saturday",className:"lh-copy",children:"Saturday"})]}),Object(n.jsxs)("div",{className:"flex items-center mb2",children:[Object(n.jsx)("input",{className:"mr2",type:"checkbox",id:"sunday",value:"sunday",onClick:function(){return e.onSunChange()}}),Object(n.jsx)("label",{htmlFor:"sunday",className:"lh-copy",children:"Sunday"})]})]})})}),Object(n.jsx)("div",{className:"center",children:Object(n.jsx)("input",{className:"center b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Submit",onClick:function(){return e.onSubmitPress()}})}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"Make sure to add a time to start the meeting!"})]})]})})}}]),s}(r.a.Component)),A=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.props.onRouteChange("home")}},{key:"render",value:function(){return Object(n.jsx)("h2",{children:"Loading..."})}}]),s}(r.a.Component),k=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).keyChange=function(t){e.setState({apikey:t})},e.onRouteChange=function(t){e.setState({route:t})},e.setUser=function(t){e.setState({userName:t})},e.state={route:"signin",userName:"",day:"",events:[],time:new Date,apikey:""},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{children:"home"===this.state.route?Object(n.jsx)(y,{userName:this.state.userName,onRouteChange:this.onRouteChange,setUser:this.setUser,apikey:this.state.apikey}):"signin"===this.state.route?Object(n.jsx)(j,{onRouteChange:this.onRouteChange,setUser:this.setUser,apikey:this.state.apikey,keyChange:this.state.keyChange}):"register"===this.state.route?Object(n.jsx)(p,{onRouteChange:this.onRouteChange,setUser:this.setUser,keyChange:this.state.keyChange}):"loading"===this.state.route?Object(n.jsx)(A,{onRouteChange:this.onRouteChange}):Object(n.jsx)(x,{onRouteChange:this.onRouteChange,userName:this.state.userName,apikey:this.state.apikey})})}}]),s}(r.a.Component),N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,44)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),r(e),i(e)}))};c.a.render(Object(n.jsx)(k,{}),document.getElementById("root")),N()}},[[43,1,2]]]);
//# sourceMappingURL=main.a7e5c4e9.chunk.js.map