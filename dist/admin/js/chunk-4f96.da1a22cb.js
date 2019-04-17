(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f96"],{4743:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-container",{attrs:{fluid:"","pt-0":"","grid-list-xl":""}},[i("section-tooltip",{attrs:{title:"Potential Support",tooltip:"support"}}),i("v-layout",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-spacer"),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-btn",{staticClass:"mb-2",attrs:{slot:"activator",color:"primary",dark:""},on:{click:t.onClickAddDialog},slot:"activator"},[t._v("New Item")]),i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),i("v-card-text",[i("v-container",{attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("span",{staticClass:"caption"},[t._v("Select machine type")]),i("v-radio-group",{attrs:{row:""},model:{value:t.editedItem.machineType,callback:function(e){t.$set(t.editedItem,"machineType",e)},expression:"editedItem.machineType"}},[i("v-radio",{attrs:{label:"CPU",color:"primary",value:"1"}}),i("v-radio",{attrs:{label:"Memory",color:"success",value:"2"}})],1)],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("span",{staticClass:"caption"},[t._v("Select compare type")]),i("v-radio-group",{model:{value:t.editedItem.compareType,callback:function(e){t.$set(t.editedItem,"compareType",e)},expression:"editedItem.compareType"}},[i("v-radio",{attrs:{label:">",value:"1"}}),i("v-radio",{attrs:{label:"<",value:"2"}})],1)],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{attrs:{label:"Amount (%)"},model:{value:t.editedItem.amount,callback:function(e){t.$set(t.editedItem,"amount",e)},expression:"editedItem.amount"}}),i("v-text-field",{attrs:{label:"Hours"},model:{value:t.editedItem.time,callback:function(e){t.$set(t.editedItem,"time",e)},expression:"editedItem.time"}})],1),i("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[i("v-text-field",{attrs:{label:"Recommendation"},model:{value:t.editedItem.recommendation,callback:function(e){t.$set(t.editedItem,"recommendation",e)},expression:"editedItem.recommendation"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.close}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1),i("v-data-table",{staticClass:"table elevation-1",class:{mobile:t.isMobile},attrs:{headers:t.headers,items:t.data,"hide-headers":t.isMobile},scopedSlots:t._u([{key:"items",fn:function(e){return[t.isMobile?i("tr",[i("td",[i("ul",{staticClass:"flex-content"},[i("li",{staticClass:"flex-item",attrs:{"data-label":"Description"}},[t._v(t._s(e.item.description))]),i("li",{staticClass:"flex-item",attrs:{"data-label":"Recommendation"}},[t._v(t._s(e.item.recommendation))]),i("li",[i("v-icon",{staticClass:"mr-2",attrs:{color:"primary",small:""},on:{click:function(i){t.editItem(e.item)}}},[t._v("edit")]),i("v-icon",{attrs:{color:"error",small:""},on:{click:function(i){t.deleteItem(e.item)}}},[t._v("delete")])],1)])])]):i("tr",[i("td",[t._v(t._s(e.item.description))]),i("td",[t._v(t._s(e.item.recommendation))]),i("td",[i("v-icon",{staticClass:"mr-2",attrs:{color:"primary",small:""},on:{click:function(i){t.editItem(e.item)}}},[t._v("edit")]),i("v-icon",{attrs:{color:"error",small:""},on:{click:function(i){t.deleteItem(e.item)}}},[t._v("delete")])],1)])]}}])})],1)],1)],1)],1)},o=[],s=(i("6b54"),i("cadf"),i("551c"),i("097d"),i("0f66")),n={data:function(){return{headers:[{text:"Description",value:"description",align:"left",sortable:!1},{text:"Recommendation",value:"Recommendation",align:"left",sortable:!1},{text:"Action",value:"Action",align:"left",sortable:!1}],data:[],dialog:!1,editedIndex:-1,editedItem:{machineType:"1",compareType:"1",amount:0,time:0,recommendation:""},isMobile:!1}},computed:{formTitle:function(){return-1===this.editedIndex?"New PotentialSupport":"Edit PotentialSupport"}},mounted:function(){var t=this;t.data.push({description:"CPU > 90% for 6 hours",recommendataion:"Hardware should be optimized or increased."}),t.getSupportList()},methods:{close:function(){this.dialog=!1},save:function(){var t=this,e=this;-1===e.editedIndex?s["a"].post("/portential_support",e.editedItem).then(function(i){t.$toast.success({title:"Congratulations",message:"Success in add new portential support"}),e.getSupportList()}):s["a"].put("/portential_support/".concat(e.editedIndex),e.editedItem).then(function(i){t.$toast.success({title:"Congratulations",message:"Success in update portential support"}),e.getSupportList(),e.editedIndex=-1}),e.dialog=!1},getSupportList:function(){var t=this;s["a"].get("/portential_support").then(function(e){t.data=e.data})},editItem:function(t){this.editedIndex=t.id,this.editedItem={machineType:t.machineType.toString(),compareType:t.compareType.toString(),amount:t.amount,time:t.time,recommendation:t.recommendation},this.dialog=!0},onClickAddDialog:function(){this.editedIndex=-1,this.editedItem={machineType:"1",compareType:"1",amount:0,time:0,recommendation:""}},deleteItem:function(t){var e=this,i=this;confirm("Are you sure you want to delete this item?")&&s["a"].delete("/portential_support/".concat(t.id)).then(function(t){e.$toast.success({title:"Congratulations",message:"Success in delete item"}),i.getSupportList()})},onResize:function(){this.isMobile=window.innerWidth<769}}},l=n,r=(i("c72b"),i("2877")),d=Object(r["a"])(l,a,o,!1,null,"4a93fc57",null);d.options.__file="PotentialSupport.vue";e["default"]=d.exports},a83b:function(t,e,i){},c72b:function(t,e,i){"use strict";var a=i("a83b"),o=i.n(a);o.a}}]);
//# sourceMappingURL=chunk-4f96.da1a22cb.js.map