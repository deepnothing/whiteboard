(this.webpackJsonpwhiteboard=this.webpackJsonpwhiteboard||[]).push([[0],{22:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t(2),n=t.n(c),i=t(7),l=t.n(i),o=t(8),r=t(9),d=t(15),b=t(14),h=(t(22),t(16)),u=t(13),j=new(t.n(u).a)({publishKey:"pub-c-ca5e94e4-fcc4-458e-986d-ce73de6bf1f3",subscribeKey:"sub-c-b63ff6ae-3d85-11eb-8aa9-b69578166507"});j.subscribe({channels:["hello_world"]});var v=function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(e){var s;return Object(o.a)(this,t),(s=a.call(this,e)).componentDidMount=function(){j.addListener({message:function(e){s.setState({coordinates:e.message})}})},s.changeBlue=function(){s.setState({color:"blue"})},s.changeRed=function(){s.setState({color:"red"})},s.changeYellow=function(){s.setState({color:"yellow"})},s.changeGreen=function(){s.setState({color:"green"})},s.changeBlack=function(){s.setState({color:"black"})},s.logData=function(){console.log(s.saveableCanvas.getSaveData())},s.sendData=function(){j.publish({message:s.saveableCanvas.getSaveData(),channel:"hello_world"})},s.clearData=function(){s.saveableCanvas.clear(),j.publish({message:s.saveableCanvas.getSaveData(),channel:"hello_world"})},s.state={color:"black",width:400,height:400,brushRadius:10,lazyRadius:0,coordinates:""},s}return Object(r.a)(t,[{key:"onInput",value:function(){var e=document.getElementById("myRange").value;this.setState({brushRadius:e})}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"maincontainer",children:[Object(s.jsxs)("div",{className:"colorwrapper",children:[Object(s.jsx)("div",{id:"spacing"}),Object(s.jsx)("b",{children:"Choose a color"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{id:"spacing",children:Object(s.jsx)("div",{className:"black circle",style:{background:"black"},onClick:this.changeBlack})}),Object(s.jsx)("div",{id:"spacing",children:Object(s.jsx)("div",{className:"blue circle",style:{background:"blue"},onClick:this.changeBlue})}),Object(s.jsx)("div",{id:"spacing",children:Object(s.jsx)("div",{className:"red circle",style:{background:"red"},onClick:this.changeRed})}),Object(s.jsx)("div",{id:"spacing",children:Object(s.jsx)("div",{className:"yelow circle",style:{background:"yellow"},onClick:this.changeYellow})}),Object(s.jsx)("div",{id:"spacing",children:Object(s.jsx)("div",{className:"green circle",style:{background:"green"},onClick:this.changeGreen})}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"adjust brush size "}),Object(s.jsx)("div",{children:this.state.brushRadius}),Object(s.jsx)("input",{type:"range",min:1,max:20,defaultValue:10,className:"slider",id:"myRange",onInput:this.onInput.bind(this)}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"tools",children:[Object(s.jsx)("div",{id:"button",onClick:this.clearData,children:"Erase"}),Object(s.jsx)("div",{id:"button",onClick:function(){e.saveableCanvas.undo()},children:"Undo Last"}),Object(s.jsx)("div",{id:"button",onClick:this.logData,children:"Log Canvas Coordinates"})]})]}),Object(s.jsx)("div",{id:"spacing"}),Object(s.jsxs)("div",{className:"framecontainer",children:[Object(s.jsx)("h1",{style:{marginBottom:"0px"},children:"MULTI-USER WHITEBOARD"}),Object(s.jsx)("p",{style:{margin:"0px"},children:"Start by opening in another device or tab to collaborate"}),Object(s.jsx)("div",{id:"drawCanvas",className:"frame",onMouseUp:this.sendData,children:Object(s.jsx)(h.a,{hideGrid:!0,style:{width:"100%",height:"100%"},brushColor:this.state.color,brushRadius:this.state.brushRadius,lazyRadius:this.state.lazyRadius,ref:function(a){return e.saveableCanvas=a},saveData:this.state.coordinates,immediateLoading:!0})})]})]})})}}]),t}(c.Component);l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.0b34c0a8.chunk.js.map