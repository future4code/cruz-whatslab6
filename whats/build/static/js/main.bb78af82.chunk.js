(this.webpackJsonpwhats=this.webpackJsonpwhats||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var a,i,s,o,r,c,u,l,d=t(0),g=t.n(d),p=t(8),x=t.n(p),b=(t(21),t(14)),h=t(9),j=t(10),f=t(16),m=t(15),O=t(2),v=t(3),M=t.p+"static/media/envia-icone.1bae9973.svg",k=t(1),y=v.a.div(a||(a=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  -webkit-box-pack: end;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  border: 1px solid black;\n  height: 100vh;\n  width: 100%;\n  max-width: 600px;\n  margin: auto;\n  background-color: #ECE5DD;\n\n"]))),C=v.a.div(i||(i=Object(O.a)(["\n  display: flex;\n  flex-direction: column-reverse;\n  flex-grow: 1;\n  padding: 20px;\n  justify-content: flex-start;\n  overflow-y: auto;\n"]))),w=v.a.div(s||(s=Object(O.a)(["\n  padding: 20px;\n  display: flex;\n"]))),D=v.a.input(o||(o=Object(O.a)(["\nmargin:5px;\n  font-size: 18px;\n  padding: 5px;\n  width: 100px;\n"]))),F=v.a.input(r||(r=Object(O.a)(["\n  flex-grow: 1;\nmargin:5px;\n  font-size: 18px;\n  padding: 5px;\n  width: 100px;\n"]))),E=v.a.div(c||(c=Object(O.a)(["\nbackground-color: #25D366AA;\nfont-size: 18px;\n  cursor: pointer;\n  display: flex;\n  width:40px;\n  height: 40px;\n  justify-content:center;\n  align-items:center;\n  border-radius:50%;\n  background-image:url(iconeEnviar);\n:hover{\nbackground-color: #25D366;\n"]))),I=v.a.div(u||(u=Object(O.a)(["\n  border-radius: 3px;\n  background-color: #DCF8C6;\n  margin: 5px;\n  width: 80%;\n  display:flex;\n  flex-direction: column;\n  font-size:18px;\n  p{\n    padding: 2px;\n    margin: 2px;\n  }\n  p strong{\n    color: #25D366;\n  }\n"]))),U=Object(v.a)(I)(l||(l=Object(O.a)(["\n  background-color: #FFFFFF;\n  align-self: flex-end;\n"]))),z=g.a.createRef(),S=function(n){Object(f.a)(t,n);var e=Object(m.a)(t);function t(){var n;Object(h.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=e.call.apply(e,[this].concat(i))).state={arrayMensagens:[{usuario:"Adimin",textoMensagem:"Este \xe9 o seu whats use com responsabilidade"}],inputUsuario:"",inputMensagem:""},n.onChangeInputUsuario=function(e){"Enter"==e.key?z.current.focus():n.setState({inputUsuario:e.target.value})},n.onChangeInputMensagem=function(e){"Enter"==e.key?n.adicionaMensagem():n.setState({inputMensagem:e.target.value})},n.onDoubleClickMensagem=function(n){alert("Dois clicks")},n.adicionaMensagem=function(){var e=[{usuario:n.state.inputUsuario,textoMensagem:n.state.inputMensagem}].concat(Object(b.a)(n.state.arrayMensagens));n.setState({arrayMensagens:e,inputMensagem:""})},n}return Object(j.a)(t,[{key:"render",value:function(){var n=this;return Object(k.jsxs)(y,{children:[Object(k.jsx)(C,{children:this.state.arrayMensagens.map((function(e,t){return"eu"==e.usuario||"Eu"==e.usuario=="EU"?Object(k.jsx)(U,{useDoubleClick:n.onDoubleClickMensagem,children:Object(k.jsx)("p",{children:e.textoMensagem})},t):Object(k.jsxs)(I,{useDoubleClick:n.onDoubleClickMensagem,children:[Object(k.jsxs)("p",{children:[Object(k.jsx)("strong",{children:e.usuario})," "]}),Object(k.jsx)("p",{children:e.textoMensagem})]},t)}))}),Object(k.jsxs)(w,{children:[Object(k.jsx)(D,{onKeyPress:this.onChangeInputUsuario,placeholder:"Nome",onChange:this.onChangeInputUsuario,value:this.state.inputUsuario}),Object(k.jsx)(F,{ref:z,onKeyPress:this.onChangeInputMensagem,placeholder:"Mensagem",onChange:this.onChangeInputMensagem,value:this.state.inputMensagem}),Object(k.jsx)(E,{onClick:this.adicionaMensagem,children:Object(k.jsx)("img",{src:M})})]})]})}}]),t}(g.a.Component),A=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;t(n),a(n),i(n),s(n),o(n)}))};x.a.render(Object(k.jsx)(g.a.StrictMode,{children:Object(k.jsx)(S,{})}),document.getElementById("root")),A()}},[[25,1,2]]]);
//# sourceMappingURL=main.bb78af82.chunk.js.map