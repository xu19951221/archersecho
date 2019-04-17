(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06e9"],{"365c":function(t,s,e){"use strict";var a=e("bc3a"),i=e.n(a);s["a"]=i.a.create({baseURL:"http://reactify.theironnetwork.org/data/"})},"68db":function(t,s,e){"use strict";var a=e("c9d2"),i=e.n(a);i.a},c9d2:function(t,s,e){},e8de:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=this,e=s.$createElement,a=s._self._c||e;return a("div",[a("page-title-bar"),a("app-section-loader",{attrs:{status:s.loader}}),a("v-container",{attrs:{fluid:"","grid-list-xl":"","pt-0":""}},[a("v-btn",{attrs:{color:"primary"},on:{click:s.openAddUserDialog}},[a("v-icon",[s._v("add")]),s._v("add new user\n    ")],1),a("v-dialog",{attrs:{persistent:"",width:"700"},model:{value:s.dialog,callback:function(t){s.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[s._v("Add new user")]),a("v-card-text",[a("v-form",[s.errors.length?a("v-layout",{attrs:{column:""}},[a("b",{staticClass:"red--text"},[s._v("Please correct the following error(s):")]),a("ul",s._l(s.errors,function(t){return a("li",[s._v(s._s(t))])}))]):s._e(),a("v-container",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"User Name"},model:{value:s.user.userId,callback:function(t){s.$set(s.user,"userId",t)},expression:"user.userId"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Company Name"},model:{value:s.user.companyName,callback:function(t){s.$set(s.user,"companyName",t)},expression:"user.companyName"}})],1),a("v-flex",{attrs:{xs12:""}},[a("h2",[s._v("Password Strength")]),a("ul",[a("li",{class:{is_valid:s.contains_eight_characters}},[s._v("8 Characters")]),a("li",{class:{is_valid:s.contains_number}},[s._v("Contains Number")]),a("li",{class:{is_valid:s.contains_uppercase}},[s._v("Contains Uppercase")]),a("li",{class:{is_valid:s.contains_special_character}},[s._v("Contains Special Character")])]),a("div",{staticClass:"checkmark_container",class:{show_checkmark:s.valid_password}},[a("svg",{attrs:{width:"50%",height:"50%",viewBox:"0 0 140 100"}},[a("path",{staticClass:"checkmark",class:{checked:s.valid_password},attrs:{d:"M10,50 l25,40 l95,-70"}})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],attrs:{type:"password",autocomplete:"off",placeholder:"Password"},domProps:{value:s.user.password},on:{input:[function(t){t.target.composing||s.$set(s.user,"password",t.target.value)},s.checkPassword]}})])],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{flat:""},on:{click:function(){t.dialog=!1}}},[s._v("Close")]),a("v-btn",{attrs:{flat:"",color:"primary",loading:s.saveLoading},on:{click:s.addUser}},[s._v("Save")])],1)],1)],1),null!==s.usersList?a("v-layout",{attrs:{row:"",wrap:""}},s._l(s.usersList,function(t,e){return a("app-card",{key:e,attrs:{colClasses:"xs12 sm6 md4"}},[a("div",{staticClass:"user-image text-xs-center mb-3"},[a("img",{staticClass:"img-responsive rounded-circle",attrs:{src:t.profileUrl,alt:"user images",width:"95",height:"95"}})]),a("div",{staticClass:"user-list-content"},[a("div",{staticClass:"text-xs-center"},[a("h3",{staticClass:"fw-bold",staticStyle:{cursor:"pointer"},on:{click:function(e){s.gotoProfilePage(t._id)}}},[s._v(s._s(t.userId))]),a("p",[s._v(s._s(t.companyName?t.companyName:"--"))])]),a("div",{staticClass:"layout column border-tb-1 mb-3"},[a("div",{staticClass:"layout row justify-space-between pa-2 mt-1 ml-1 mr-1"},[a("div",{staticClass:"align-item-start"},[a("span",[s._v("Create date:")])]),a("div",{staticClass:"align-item-end"},[a("span",[s._v(s._s(t.createdAt?t.createdAt.split("T")[0]:"--"))])])]),a("div",{staticClass:"layout row justify-space-between pa-2 mb-1 ml-1 mr-1"},[a("div",{staticClass:"align-item-start"},[a("span",[s._v("Active date:")])]),a("div",{staticClass:"align-item-end"},[a("span",[s._v(s._s(t.activatedAt?t.activatedAt.split("T")[0]:"--"))])])])]),t.isActive?a("v-btn",{staticClass:"btn-success white--text ma-0 text-capitalize",attrs:{href:"javascript:void(0);"},on:{click:function(e){s.updateStatus(t)}}},[s._v("Deactive")]):a("v-btn",{staticClass:"btn-danger white--text ma-0 text-capitalize",attrs:{href:"javascript:void(0);"},on:{click:function(e){s.updateStatus(t)}}},[s._v("active")])],1)])})):s._e()],1)],1)},i=[],r=e("0f66"),n=(e("4eb2"),e("365c")),c={data:function(){return{headers:[{text:"",value:"avatar",align:"left",sortable:!1},{text:"User Name",value:"UserName",align:"left",sortable:!1},{text:"Company Name",vlaue:"companyName",align:"left",sortable:!1},{text:"Signup Date",value:"signupDate",align:"left",sortable:!1},{text:"Device Activate Date",value:"deviceActivateDate",align:"left",sortable:!1},{text:"Action",value:"Action",align:"left",sortable:!1}],dialog:!1,user:{},errors:[],deleteDialog:!1,loader:!0,usersList:null,connectUsersList:null,password:null,password_length:0,contains_eight_characters:!1,contains_number:!1,contains_uppercase:!1,contains_special_character:!1,valid_password:!1,saveLoading:!1}},mounted:function(){this.getUserList()},methods:{getUserList:function(){var t=this;this.loader=!0,r["a"].get("/users").then(function(s){t.usersList=s.data,t.loader=!1}).catch(function(t){console.log(t)})},updateStatus:function(t){var s={status:!t.isActive,id:t._id},e=this;e.updateStatusLoading=!0,r["a"].post("/users/updateStatus",s).then(function(t){e.$toast.success({title:"Success",message:"Success in update status"}),e.getUserList()}).catch(function(t){console.log(t)})},onClickDeleteUser:function(t){this.user=t,this.deleteDialog=!0},deleteUser:function(){var t=this;r["a"].delete("/users/".concat(this.user._id)).then(function(s){t.getUserList(),t.$toast.success({title:"Success",message:"Success in delete user"}),t.deleteDialog=!1})},addUser:function(){if(this.checkForm()){var t=this;t.saveLoading=!0,r["a"].post("/users",t.user).then(function(s){t.$toast.success({title:"Congratulations",message:"Success in add user"}),t.saveLoading=!1,t.dialog=!1,t.user={},t.getUserList()})}},checkForm:function(){return!!(this.user.userId&&this.user.companyName&&this.user.password&&this.valid_password)||(this.errors=[],this.user.userId||this.errors.push("User name required"),this.user.companyName||this.errors.push("Company name required"),this.user.password||this.errors.push("Password required"),this.valid_password||this.errors.push("Password is weak."),!1)},getImgSrc:function(t){if(this.connectUsersList)for(var s=0;s<this.connectUsersList.length;s++){var e=this.connectUsersList[s];if(t===e.id)return e.img}},getUsers:function(){var t=this;n["a"].get("vuely/users.js").then(function(s){t.loader=!1,t.usersList=s.data}).catch(function(t){console.log(t)})},getConnections:function(){var t=this;n["a"].get("vuely/connections.js").then(function(s){t.connectUsersList=s.data}).catch(function(t){console.log(t)})},gotoProfilePage:function(t){this.$router.push({path:"/userProfile/".concat(t)})},checkPassword:function(){this.password_length=this.user.password.length;var t=/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;this.password_length>8?this.contains_eight_characters=!0:this.contains_eight_characters=!1,this.contains_number=/\d/.test(this.user.password),this.contains_uppercase=/[A-Z]/.test(this.user.password),this.contains_special_character=t.test(this.user.password),!0===this.contains_eight_characters&&!0===this.contains_special_character&&!0===this.contains_uppercase&&!0===this.contains_number?this.valid_password=!0:this.valid_password=!1},openAddUserDialog:function(){this.dialog=!0,this.contains_eight_characters=!1,this.contains_number=!1,this.contains_uppercase=!1,this.contains_special_character=!1}}},o=c,l=(e("68db"),e("2877")),u=Object(l["a"])(o,a,i,!1,null,"044df814",null);u.options.__file="UserManagement.vue";s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-06e9.79418d14.js.map