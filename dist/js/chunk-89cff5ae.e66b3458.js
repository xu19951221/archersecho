(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89cff5ae"],{"0eeb":function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("b39f"),u=function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(a["a"])({method:"POST",url:"/api/team/add",data:t});case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"GET",url:"/api/team/getMyTeam/".concat(t)});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"POST",url:"/api/team/update",data:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"DELETE",url:"/api/team/".concat(t)});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"GET",url:"/api/team/getJoinTeam/".concat(t)});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"POST",url:"/api/team/updateMemberStatus",data:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"POST",url:"/api/team/removeMember",data:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"GET",url:"/api/team/getMembers/".concat(t)});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"POST",url:"/api/team/updateAllow",data:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"GET",url:"/api/team/helpDeskMembers/".concat(t)});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();t["a"]={addTeam:u,getTeamList:s,updateTeam:c,remove:i,getJoinTeam:o,updateMemberStatus:m,removeMember:p,getMemberList:d,updateAllow:v,getHelpDeskMembers:l}},"28f2":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("my-team"),r("join-team")],1)},a=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("vx-card",{attrs:{title:"My Team"}},[r("vs-button",{attrs:{icon:"add"},on:{click:function(t){e.$router.push({name:"add-team"})}}},[e._v("Add team")]),r("vs-table",{staticClass:"mt-4",attrs:{data:e.myTeamList},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.data;return e._l(n,function(t,n){return r("vs-tr",{key:n},[r("vs-td",[e._v(e._s(t.name))]),r("vs-td",e._l(t.members,function(t,n){return r("vs-chip",{key:n},[r("vs-avatar"),e._v("\n              "+e._s(t.id.userId)+"\n            ")],1)}),1),r("vs-td",[e._v(e._s(t.createdAt.replace("T"," ").split(".")[0]))])],1)})}}])},[r("template",{slot:"thead"},[r("vs-th",[e._v("Name")]),r("vs-th",[e._v("Members")]),r("vs-th",[e._v("Created At")])],1)],2)],1)],1)},s=[],c=(r("96cf"),r("3b8d")),i=r("0eeb"),o=r("ed08"),m={data:function(){return{myTeamList:[],userId:Object(o["b"])("user").id}},mounted:function(){this.getMyTeamList()},methods:{remove:function(e){this.members.splice(this.members.indexOf(e),1)},getMyTeamList:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].getTeamList(this.userId);case 2:this.myTeamList=e.sent,console.log(this.myTeamList);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},p=m,d=r("2877"),v=Object(d["a"])(p,u,s,!1,null,"225facab",null),l=v.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-4"},[r("vx-card",{attrs:{title:"Join Team"}},[r("vs-table",{staticClass:"mt-4",attrs:{data:e.joinTeamList},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.data;return e._l(n,function(t,n){return r("vs-tr",{key:n},[r("vs-td",[e._v(e._s(t.name))]),r("vs-td",[r("vs-chip",[r("vs-avatar"),e._v("\n              "+e._s(t.owner.userId)+"\n            ")],1)],1),r("vs-td",[r("vs-chip",[e._v(e._s(0===t.status?"Pending":1===t.status?"Accepted":"Rejected"))])],1),r("vs-td",[0===t.status?r("div",[r("vs-button",{staticClass:"mr-2",attrs:{color:"success"},on:{click:function(r){e.acceptTeam(t)}}},[e._v("Accept")]),r("vs-button",{attrs:{color:"warning"},on:{click:function(r){e.rejectTeam(t)}}},[e._v("Reject")])],1):e._e(),1===t.status?r("div",[r("vs-button",{staticClass:"mr-2",on:{click:function(r){e.leaveTeam(t)}}},[e._v("Leave this team")])],1):e._e(),2===t.status?r("div",[r("vs-button",{attrs:{color:"success"},on:{click:function(r){e.acceptTeam(t)}}},[e._v("Accept")])],1):e._e()])],1)})}}])},[r("template",{slot:"thead"},[r("vs-th",[e._v("Team Name")]),r("vs-th",[e._v("Owner")]),r("vs-th",[e._v("Status")]),r("vs-th")],1)],2)],1)],1)},h=[],b={data:function(){return{joinTeamList:[],userId:Object(o["b"])("user").id}},mounted:function(){this.getJoinTeamList()},methods:{getJoinTeamList:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].getJoinTeam(this.userId);case 2:this.joinTeamList=e.sent,console.log(this.joinTeamList);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),acceptTeam:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r={status:1,memberId:t.myId,teamId:t.id},e.next=3,i["a"].updateMemberStatus(r);case 3:this.getJoinTeamList();case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),rejectTeam:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r={status:2,memberId:t.myId,teamId:t.id},e.next=3,i["a"].updateMemberStatus(r);case 3:this.getJoinTeamList();case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),leaveTeam:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!confirm("Are you sure leave this team?")){e.next=5;break}return r={teamId:t.id,memberId:t.myId},e.next=4,i["a"].removeMember(r);case 4:this.getJoinTeamList();case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},w=b,g=Object(d["a"])(w,f,h,!1,null,"5a6f6474",null),T=g.exports,j={components:{MyTeam:l,JoinTeam:T}},x=j,O=Object(d["a"])(x,n,a,!1,null,"fac4d108",null);t["default"]=O.exports}}]);
//# sourceMappingURL=chunk-89cff5ae.e66b3458.js.map