(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fa1e"],{"7d36":function(s,t,e){"use strict";var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("app-section-loader",{attrs:{status:s.loader}}),s.testimonials?e("slick",{attrs:{options:s.slickOptions}},[s._l(s.testimonials,function(t){return[e("div",{key:t.id,staticClass:"session-slider"},[e("div",{staticClass:"slider-content"},[e("img",{staticClass:"rounded-circle img-responsive",attrs:{src:t.avatar,width:"170",height:"170"}}),e("div",{staticClass:"slider-meta mb-3"},[e("span",{staticClass:"d-block client-name fw-bold"},[e("i",[s._v(s._s(t.name))])]),e("span",{staticClass:"d-block client-digg"},[s._v(s._s(t.designation))])]),e("p",{staticClass:"px-4"},[s._v(s._s(t.body))])])])]})],2):s._e()],1)},i=[],o=e("5957"),n=e("365c"),l={components:{Slick:o["a"]},mounted:function(){this.getTestimonials()},computed:{slickOptions:function(){return{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!1,rtl:this.$store.getters.rtlLayout}}},data:function(){return{loader:!0,testimonials:null}},methods:{getTestimonials:function(){var s=this;n["a"].get("testimonials.js").then(function(t){s.loader=!1,s.testimonials=t.data}).catch(function(s){console.log(s)})}}},r=l,c=e("2877"),d=Object(c["a"])(r,a,i,!1,null,null,null);d.options.__file="SessionSlider.vue";t["a"]=d.exports},dab5:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"session-wrapper"},[e("div",{staticClass:"session-left"}),e("div",{staticClass:"session-right text-xs-center"},[e("div",{staticClass:"session-table-cell"},[e("div",{staticClass:"session-content"},[e("img",{staticClass:"img-responsive mb-3",attrs:{src:s.appLogo,width:"78",height:"78"}}),e("h2",{staticClass:"mb-3"},[s._v(s._s(s.$t("message.loginToAdmin")))]),e("p",{staticClass:"fs-14"},[s._v(s._s(s.$t("message.enterUsernameAndPasswordToAccessControlPanelOf"))+" "+s._s(s.brand)+".")]),e("v-form",{staticClass:"mb-4",model:{value:s.valid,callback:function(t){s.valid=t},expression:"valid"}},[e("v-text-field",{attrs:{label:"User ID",required:""},model:{value:s.userId,callback:function(t){s.userId=t},expression:"userId"}}),e("v-text-field",{attrs:{label:"Password",type:"password",rules:s.passwordRules,required:""},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),e("v-checkbox",{attrs:{color:"primary",label:"Remember me"},model:{value:s.checkbox,callback:function(t){s.checkbox=t},expression:"checkbox"}}),e("router-link",{staticClass:"mb-1",attrs:{to:"/session/forgot-password"}},[s._v(s._s(s.$t("message.forgotPassword"))+"?")]),e("div",[e("v-btn",{attrs:{large:"",block:"",color:"primary"},on:{click:s.submit}},[s._v(s._s(s.$t("message.loginNow")))])],1)],1)],1)])])])},i=[],o=(e("8aa5"),e("2f62"),e("7d36")),n=e("e065"),l=e("5ef3"),r=new l["a"],c=(r.login,r.logout,r.authenticated,r.authNotifier,{components:{SessionSliderWidget:o["a"]},data:function(){return{checkbox:!1,valid:!1,userId:"",password:"",passwordRules:[function(s){return!!s||"Password is required"}],appLogo:n["a"].appLogo2,brand:n["a"].brand}},methods:{submit:function(){var s={userId:this.userId,password:this.password};this.$store.dispatch("signinUserInAdmin",{user:s})}}}),d=c,u=e("2877"),p=Object(u["a"])(d,a,i,!1,null,null,null);p.options.__file="LoginOne.vue";t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-0fa1e.338b1fef.js.map