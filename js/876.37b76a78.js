"use strict";(self["webpackChunkvuexprj01"]=self["webpackChunkvuexprj01"]||[]).push([[876],{3876:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var o=s(3396);const r={id:"app"},a=(0,o._)("h2",null,"vuex store를 여러개의 모듈로 나누기",-1);function u(e,t,s,u,n,c){const d=(0,o.up)("Vue4501Comp");return(0,o.wg)(),(0,o.iD)("div",r,[a,(0,o.Wm)(d)])}var n=s(9242),c=s(7139);const d={id:"app"},m=(0,o.Uk)(" 유저 이름: ");function p(e,t,s,r,a,u){return(0,o.wg)(),(0,o.iD)("div",d,[m,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.userName=e),type:"text",onChange:t[1]||(t[1]=(...e)=>u.searchName&&u.searchName(...e))},null,544),[[n.nr,a.userName]]),(0,o._)("button",{onClick:t[2]||(t[2]=(...e)=>u.searchName&&u.searchName(...e))},"검색"),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.computedList,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t}," 제목: "+(0,c.zw)(e.title)+" 저자: "+(0,c.zw)(e.author),1)))),128))])}var i=s(65);const h="userStore",l="postStore";var N={props:[],data(){return{userName:""}},methods:{...(0,i.nv)(h,["AC_USER_NAME"]),searchName(){const e={userName:this.userName};this.AC_USER_NAME(e)}},components:{},computed:{...(0,i.Se)(h,{storeUserName:"GE_USER_NAME"}),...(0,i.Se)(l,["GE_POST_LIST"]),computedList(){let e=[];for(let t of this.GE_POST_LIST)this.storeUserName||this.storeUserName.trim()?t.author==this.storeUserName&&e.push(t):e.push(t);return e}},watch:{storeUserName(e){this.userName=e}},created(){this.userName=this.storeUserName},mounted(){console.log("mounted")},updated(){console.log("updated")}},_=s(89);const v=(0,_.Z)(N,[["render",p],["__scopeId","data-v-6ebf6d4c"]]);var w=v,S={props:[],data(){return{}},methods:{},components:{Vue4501Comp:w},computed:{},watch:{},mounted(){console.log("mounted")},updated(){console.log("updated")}};const U=(0,_.Z)(S,[["render",u]]);var f=U}}]);
//# sourceMappingURL=876.37b76a78.js.map