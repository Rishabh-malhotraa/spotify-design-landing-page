(this.webpackJsonpmui=this.webpackJsonpmui||[]).push([[0],{101:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){var a={"./1.png":119,"./2.png":120,"./3.png":121,"./4.png":122,"./5.png":123,"./6.png":124,"./7.png":125,"./menu.svg":58};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=118},119:function(e,t,n){e.exports=n.p+"static/media/1.f331566e.png"},120:function(e,t,n){e.exports=n.p+"static/media/2.72004132.png"},121:function(e,t,n){e.exports=n.p+"static/media/3.778c2c3f.png"},122:function(e,t,n){e.exports=n.p+"static/media/4.f8c662e0.png"},123:function(e,t,n){e.exports=n.p+"static/media/5.56a2aaea.png"},124:function(e,t,n){e.exports=n.p+"static/media/6.0a870f6b.png"},125:function(e,t,n){e.exports=n.p+"static/media/7.f286450f.png"},126:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),o=n.n(i),c=n(80),l=n(8),s=n(5),p=n(29),m=n(157),u=n(166),d=n(158),b=n(67),g=n.n(b),f=n(159),h=n(60),x=n.n(h),E=(n(81),n(61));function v(){var e=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: black;\n  transform: ",";\n  height: 100vh;\n  width: 100vw;\n  text-align: left;\n  padding: 2rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.3s cubic-bezier(0.86, 0.04, 0.45, 0.96);\n  z-index: 3;\n\n  a {\n    font-size: 2rem;\n    text-transform: uppercase;\n    padding: 2rem 0;\n    font-weight: bold;\n    letter-spacing: 0.5rem;\n    color: white;\n    text-decoration: none;\n    transition: color 0.3s linear;\n  }\n"]);return v=function(){return e},e}n(39).a.nav(v(),(function(e){return e.open?"translateX(0) ":"translateX(-100%)"}));var j=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],i=t[1];return r.a.createElement(u.a,{mb:4},r.a.createElement(m.a,{position:"static",style:{background:"transparent",boxShadow:"none",color:"#544C4C"}},r.a.createElement(d.a,null,r.a.createElement(u.a,{m:3},r.a.createElement(g.a,{fontSize:"large"})),r.a.createElement(f.a,{variant:"h4",style:{flexGrow:"1",fontWeight:"700"}},"Vexio"),r.a.createElement(u.a,{m:2,onClick:function(){return i(!n)}},r.a.createElement(x.a,{isOpen:n,width:30,height:20,strokeWidth:2,color:"black",borderRadius:0,animationDuration:.5})))))},O=(n(101),n(68),n(160),n(71),n(72),n(74),n(75),n(73),n(69),n(70),n(49)),w=n(34),k=n(76),y=(n(117),n(169)),C=n(162),z=n(163),N=n(161),I=["1.png","2.png","3.png","4.png","5.png","6.png"],S=Object(N.a)((function(e){var t;return{card:(t={WebkitUserDrag:"none",boxShadow:"rgba(0, 0, 0, 0.1) 2px 5px 27px !important"},Object(s.a)(t,e.breakpoints.down("sm"),{height:"255px",width:"255px"}),Object(s.a)(t,e.breakpoints.up("sm"),{height:"360px",width:"360px"}),Object(s.a)(t,e.breakpoints.up("md"),{height:"400px",width:"400px"}),Object(s.a)(t,e.breakpoints.up("lg"),{height:"550px",width:"550px"}),Object(s.a)(t,e.breakpoints.up("xl"),{height:"800px",width:"800px"}),t)}})),D=function(e){return{x:0,y:-4*e,scale:1,rot:9.5*Math.random()-5,delay:100*e}},R=function(e,t){return" rotateX(30deg) rotateY(".concat(e/10,"deg) rotateZ(").concat(e,"deg) scale(").concat(t,")")};function T(){var e=S(),t=Object(a.useState)((function(){return new Set})),i=Object(p.a)(t,1)[0],o=Object(w.c)(I.length,(function(e){return Object(O.a)(Object(O.a)({},D(e)),{},{from:{x:1e3,rot:0,scale:1.5,y:0}})})),c=Object(p.a)(o,2),l=c[0],s=c[1],m=Object(k.a)((function(e){var t=Object(p.a)(e.args,1)[0],n=e.down,a=Object(p.a)(e.delta,1)[0],r=(e.distance,Object(p.a)(e.direction,1)[0]),o=e.velocity,c=r<0?-1:1;!n&&o>.2&&i.add(t),s((function(e){if(t===e){console.log(0,0);var r=i.has(t);return{x:r?(200+window.innerWidth-0)*c:n?a+0:0,rot:a/100+(r?10*c*o:0),scale:n?1.1:1,delay:void 0,config:{friction:50,tension:n?800:r?200:500}}}})),n||i.size!==I.length||setTimeout((function(){return i.clear()||s((function(e){return D(e)}))}),600)}));return l.map((function(t,a){var i=t.x,o=t.y,c=t.rot,l=t.scale;return r.a.createElement(w.a.div,{style:{position:"absolute",cursor:"grab",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",transform:Object(w.b)([i,o],(function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")}))}},r.a.createElement(w.a.div,Object.assign({},m(a),{style:{transform:Object(w.b)([c,l],R)}}),r.a.createElement(C.a,{className:"card"},r.a.createElement(z.a,{key:Object(y.a)(),className:e.card,id:"card-image",component:"img",alt:"Contemplative Reptile",image:n(118)("./"+I[5-a]),title:"Contemplative Reptile"}))))}))}n(126);var X=Object(N.a)((function(e){var t;return{root:(t={},Object(s.a)(t,e.breakpoints.up("sm"),{display:"none"}),Object(s.a)(t,e.breakpoints.down("md"),{display:"none"}),Object(s.a)(t,e.breakpoints.up("lg"),{display:"block",position:"absolute",right:"60px",bottom:"30px",width:"24px",height:"45px",zIndex:"1"}),Object(s.a)(t,e.breakpoints.up("xl"),{position:"absolute",right:"60px",bottom:"80px",width:"24px",height:"45px",zIndex:"1"}),t)}})),P=function(){var e=X();return r.a.createElement("div",{class:e.root},r.a.createElement("div",{class:"mousey"},r.a.createElement("div",{class:"scroller"})))},W=n(171),B=n(6),G=n(164),L=n(85),U=n(168),A=n(78),F=n.n(A),J=n(79),M=n.n(J),_=n(167),H=n(165),V=Object(N.a)((function(e){var t,n;return Object(W.a)({landingRoot:{position:"relative",height:"100vh",width:"100vw",overflowX:"hidden"},item:{width:""},paper:{padding:e.spacing(3),textAlign:"center",color:e.palette.text.secondary,background:"transparent"},deckBox:(t={position:"relative",zIndex:"2"},Object(s.a)(t,e.breakpoints.down("sm"),{height:"35vh"}),Object(s.a)(t,e.breakpoints.up("sm"),{height:"50vh"}),Object(s.a)(t,e.breakpoints.up("md"),{height:"70vh"}),Object(s.a)(t,e.breakpoints.up("lg"),{height:"70vh"}),Object(s.a)(t,e.breakpoints.up("xl"),{height:"70vh"}),t),iconGridContainer:(n={},Object(s.a)(n,e.breakpoints.down("md"),{flexDirection:"row",justify:"flex-start"}),Object(s.a)(n,e.breakpoints.up("md"),{flexDirection:"column",justify:"center",alignItems:"center"}),n)})})),Y=Object(B.a)((function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 1)",boxShadow:e.shadows[2],fontSize:"14px",borderRadius:"25px"}}}))(_.a),Z=function(){var e=V();return r.a.createElement("div",{className:e.landingRoot},r.a.createElement(P,null),r.a.createElement(j,null),r.a.createElement("br",null),r.a.createElement(u.a,{p:2},r.a.createElement(G.a,{container:!0,direction:"row-reverse",spacing:3,alignItems:"center",justify:"center"},r.a.createElement(G.a,{item:!0,xs:12,md:7},r.a.createElement(u.a,{className:e.deckBox},r.a.createElement(T,null))),r.a.createElement(G.a,{item:!0,xs:12,md:4},r.a.createElement(L.a,{className:e.paper},r.a.createElement(f.a,{variant:"h3"},"PLACEHOLDER TEXT"))),r.a.createElement(G.a,{container:!0,item:!0,className:e.iconGridContainer,xs:12,md:1,alignItems:"center",spacing:2},r.a.createElement(G.a,{item:!0},r.a.createElement(Y,{TransitionComponent:H.a,title:"Next Post",placement:"right"},r.a.createElement(U.a,{"aria-label":"next"},r.a.createElement(F.a,{style:{color:"black"}})))),r.a.createElement(G.a,{item:!0},r.a.createElement(Y,{TransitionComponent:H.a,title:"Previous Post",placement:"right"},r.a.createElement(U.a,{"aria-label":"delete"},r.a.createElement(M.a,{style:{color:"black"}}))))))))},q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/home",exact:!0,component:Z}),r.a.createElement(l.a,{to:"/home"}))))};n(128);o.a.render(r.a.createElement(q,null),document.getElementById("root"))},58:function(e,t,n){e.exports=n.p+"static/media/menu.4aaf92d0.svg"},70:function(e,t,n){e.exports=n.p+"static/media/dp-2.1ba33cc8.jpg"},91:function(e,t,n){e.exports=n(129)}},[[91,1,2]]]);
//# sourceMappingURL=main.2c6cc3e0.chunk.js.map