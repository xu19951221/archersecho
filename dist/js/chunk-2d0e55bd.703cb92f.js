(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e55bd"],{"93c0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vs-card",{staticClass:"vs-con-loading__container",attrs:{id:"div-instance"}},[a("instance-add",{attrs:{archerId:t.archerId},on:{updateList:t.getInstanceList}}),a("vs-table",{attrs:{data:t.instances},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,function(e,s){return a("vs-tr",{key:s,attrs:{data:e}},[a("vs-td",[t._v(t._s(e.name))]),a("vs-td",[t._v(t._s(e.database))]),a("vs-td",[t._v(t._s(e.description))]),a("vs-td",[a("div",{staticClass:"vx-row"},[a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"EyeIcon",svgClasses:"w-5 h-5 mr-4"},on:{click:function(a){t.openDetailPage(e)}}}),a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"EditIcon",svgClasses:"w-5 h-5 mr-4"},on:{click:function(a){t.openEditDialog(e)}}}),a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"TrashIcon",svgClasses:"w-5 h-5 mr-4"},on:{click:function(a){t.confirmDialog(e)}}})],1)])],1)})}}])},[a("template",{slot:"thead"},[a("vs-th",[t._v("Name")]),a("vs-th",[t._v("Database")]),a("vs-th",[t._v("Description")]),a("vs-th")],1)],2),t.editDialogPrompt?a("instance-edit",{attrs:{displayPrompt:t.editDialogPrompt,instance:t.instanceToEdit},on:{hidePrompt:t.hideEditDialog}}):t._e()],1)},n=[],i=(a("96cf"),a("3b8d")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-6 pb-2 pt-6"},[a("vs-button",{attrs:{icon:"add"},on:{click:function(e){t.activePrompt=!0}}},[t._v("Add Instance")]),a("vs-prompt",{attrs:{"vs-title":"Add Instance","vs-accept-text":"Add Instance","vs-button-cancel":"border","vs-is-valid":t.validateForm,"vs-active":t.activePrompt},on:{"vs-cancel":t.clearFields,"vs-accept":t.submit,"vs-close":t.clearFields,"update:vsActive":function(e){t.activePrompt=e}}},[a("div",[a("form",[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mb-4 mt-5",attrs:{placeholder:"Name",color:""!=t.name?"success":"danger"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mb-4 mt-5",attrs:{placeholder:"Database",color:""!=t.database?"success":"danger"},model:{value:t.database,callback:function(e){t.database=e},expression:"database"}}),a("vs-textarea",{attrs:{rows:"5",label:"Add description"},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1)])])])])],1)},r=[],o=(a("7f7f"),a("98ca")),d={props:["archerId"],data:function(){return{activePrompt:!1,name:"",database:"",desc:""}},computed:{validateForm:function(){return!this.errors.any()&&""!=this.name&&""!=this.database&&""!=this.desc}},methods:{clearFields:function(){this.name="",this.database="",this.desc=""},submit:function(){var t=this;this.$validator.validateAll().then(function(e){e&&t.addInstance()})},addInstance:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].addInstance({archerId:this.archerId,name:this.name,database:this.database,description:this.desc});case 2:this.$vs.notify({color:"success",title:"Success",text:"Success in add instance"}),this.$emit("updateList"),this.clearFields();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},l=d,u=a("2877"),v=Object(u["a"])(l,c,r,!1,null,"d2397f5e",null),p=v.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vs-prompt",{attrs:{"vs-title":"Edit Instance","vs-accept-text":"Update Instance","vs-button-cancel":"border","vs-is-valid":t.validateForm,"vs-active":t.activePrompt},on:{"vs-cancel":t.clearFields,"vs-accept":t.submit,"vs-close":t.clearFields,"update:vsActive":function(e){t.activePrompt=e}}},[a("div",[a("form",[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mb-4 mt-5",attrs:{placeholder:"Name",color:""!=t.name?"success":"danger"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mb-4 mt-5",attrs:{placeholder:"Database",color:""!=t.database?"success":"danger"},model:{value:t.database,callback:function(e){t.database=e},expression:"database"}}),a("vs-textarea",{attrs:{rows:"5",label:"Add description"},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1)])])])])},m=[],f={props:["displayPrompt","instance"],data:function(){return{name:this.instance.name,database:this.instance.database,desc:this.instance.description}},computed:{activePrompt:{get:function(){return this.displayPrompt},set:function(t){this.$emit("hidePrompt",t)}},validateForm:function(){return!this.errors.any()&&""!=this.name&&""!=this.database&&""!=this.desc}},methods:{clearFields:function(){this.name="",this.database="",this.desc=""},submit:function(){var t=this;this.$validator.validateAll().then(function(e){e&&t.updateInstance()})},updateInstance:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].updateInstance({id:this.instance._id,name:this.name,database:this.database,description:this.desc});case 2:this.$vs.notify({color:"success",title:"Success",text:"Success in update instance"}),this.clearFields();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},b=f,g=Object(u["a"])(b,h,m,!1,null,"2c793032",null),w=g.exports,x=a("ed08"),I={components:{InstanceAdd:p,InstanceEdit:w},data:function(){return{archerId:this.$route.params.id,instances:[],editDialogPrompt:!1,instanceToEdit:{},instanceToDelete:{}}},mounted:function(){this.getInstanceList()},methods:{getInstanceList:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Get instance list"),this.$vs.loading({container:"#div-instance",scale:.6}),t.next=4,o["a"].getInstances(this.archerId);case 4:this.instances=t.sent,this.$vs.loading.close("#div-instance > .con-vs-loading");case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),openEditDialog:function(t){this.instanceToEdit=t,this.editDialogPrompt=!0},hideEditDialog:function(){var t=this;this.editDialogPrompt=!1,setTimeout(function(){t.getInstanceList()},500)},confirmDialog:function(t){this.instanceToDelete=t,this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure delete this instance?",accept:this.deleteInstance})},deleteInstance:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].removeInstance({instanceId:this.instanceToDelete._id});case 2:this.$vs.notify({color:"success",title:"Success",text:"Success in remove instance"}),this.getInstanceList();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),openDetailPage:function(t){Object(x["c"])("archerId",this.archerId),this.$router.push({path:"/instance-detail/".concat(t.database)})}}},_=I,D=Object(u["a"])(_,s,n,!1,null,"660bad40",null);e["default"]=D.exports}}]);
//# sourceMappingURL=chunk-2d0e55bd.703cb92f.js.map