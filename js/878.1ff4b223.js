"use strict";(self["webpackChunkvuexprj01"]=self["webpackChunkvuexprj01"]||[]).push([[878],{8878:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var o=n(3396);const r={id:"app"},c=(0,o._)("h2",null,"vuex 를 사용하는 프로그램을 만들어 본다.",-1);function u(e,t,n,u,a,l){const d=(0,o.up)("Vue4301Comp");return(0,o.wg)(),(0,o.iD)("div",r,[c,(0,o.Wm)(d)])}var a=n(7139),l=n(9242);const d={id:"app"},p=(0,o.Uk)("외부 api 호출");function s(e,t,n,r,c,u){return(0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("h1",null,(0,a.zw)(c.header),1),(0,o._)("h2",null,(0,a.zw)(e.welcome),1),(0,o._)("h3",null,(0,a.zw)(e.counter),1),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>c.callapi=e)},null,512),[[l.e8,c.callapi]]),p]),(0,o._)("button",{onClick:t[1]||(t[1]=(...e)=>u.handlerIncrement&&u.handlerIncrement(...e))},"더해줘"),(0,o._)("button",{onClick:t[2]||(t[2]=(...e)=>u.handlerDecrement&&u.handlerDecrement(...e))},"빼줘")])}var h=n(65),i={props:[],data(){return{header:"Vuex 사용 앱",callapi:!1}},methods:{...(0,h.nv)("counterStore",{dispatchSetCounter:"setCounter",dispatchGetCouner:"getCouner"}),handlerIncrement(e){console.log(e.target),this.dispatchSetCounter(1)},handlerDecrement(e){console.log(e.target),this.$data.counter=this.$data.counter-1,this.dispatchSetCounter(-1)}},components:{},computed:{...(0,h.Se)("counterStore",["welcome","counter"])},watch:{},created(){console.log("created")},mounted(){console.log("mounted"),this.dispatchGetCouner()},updated(){console.log("updated")}},m=n(89);const g=(0,m.Z)(i,[["render",s]]);var C=g,v={props:[],data(){return{}},methods:{},components:{Vue4301Comp:C},computed:{},watch:{},created(){console.log("created")},mounted(){console.log("mounted")},updated(){console.log("updated")}};const w=(0,m.Z)(v,[["render",u]]);var k=w}}]);
//# sourceMappingURL=878.1ff4b223.js.map