(this.webpackJsonptodo_list_application_react=this.webpackJsonptodo_list_application_react||[]).push([[0],{18:function(e,t,a){e.exports=a(47)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),o=a.n(l),s=(a(23),a(17)),r=a(4),m=a(2),i=a.n(m);a(41),a(42);var u=function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"p-3 mb-2 bg-info text-white"},c.a.createElement("header",null,c.a.createElement("h1",null,"Get Things DONE!"))))};a(43);var d=function(e){var t=Object(n.useState)(" "),a=Object(r.a)(t,2),l=a[0],o=a[1],s=Object(n.useState)("2020-04-10"),m=Object(r.a)(s,2),i=m[0],u=m[1];return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",null,c.a.createElement("h3",{className:"text-left"}," Add a Task   ",c.a.createElement("button",{className:"btn btn-info",onClick:function(){console.log("clicked"),e.addNewTaskFunc(l,i)}},"Add")," ")," "),c.a.createElement("div",{className:"row mb-3"},c.a.createElement("div",{className:"col-6 md-6"}," ",c.a.createElement("input",{type:"test",className:"form-control",value:l,onChange:function(e){o(e.target.value)}})),c.a.createElement("div",{className:"col-6 col-md-6"}," ",c.a.createElement("input",{type:"date",className:"form-control",value:i,onChange:function(e){u(e.target.value)}}))))))};var v=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("blockquote",{className:"blockquote mb-0"},c.a.createElement("p",{className:"footer"},'"It always seems impossible until it is DONE!'),c.a.createElement("footer",{className:"blockquote-footer"}," Nelson Mandel")))};a(44);var E=function(e){return e.tasks.filter((function(e){return e.selected})),c.a.createElement("header",null,c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",null," Current To DO "),c.a.createElement("div",null,c.a.createElement("h5",{className:"text-left"},e.count," outstanding tasks")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"}," ",c.a.createElement("p",{className:"text-centre"},"Task ")," "),c.a.createElement("div",{className:"col-3"},c.a.createElement("p",{className:"text-centre"},"  Status  ",c.a.createElement("select",{onChange:e.statusUpdate},c.a.createElement("option",{value:"Not started"}," 0 "),c.a.createElement("option",{value:"25"}," 25 %"),c.a.createElement("option",{value:"50"}," 50 %"),c.a.createElement("option",{value:"75"}," 75 %"),c.a.createElement("option",{value:"completed"}," 100 %")))),c.a.createElement("div",{className:"col-3"}," ",c.a.createElement("p",{className:"text-left"}," Deadline")," ")))))},f=(a(45),a(16)),p=a.n(f);var N=function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 col-md-4"}," ",c.a.createElement("input",{type:"checkbox",value:e.id,className:"form-check-input",onClick:function(t){console.log(t.target.value),e.toggleSelected(e.id)}}),e.text),c.a.createElement("div",{className:"col-3 col-md-2",onChange:function(e){console.log(e.target.value)}},e.Status),c.a.createElement("div",{className:"col-3 col-md-2"}," ",p()(e.Deadline).format("d MM YYYY")," "),c.a.createElement("div",{className:"col-3 col-md-2"},c.a.createElement("button",{className:"btn btn-info",onClick:function(){console.log("Complete button was clicked"),console.log(e.id),e.completeTaskFun(e.id)}},"Complete ")),c.a.createElement("div",{className:"col-3 col-md-2"},c.a.createElement("button",{className:"btn btn-info",onClick:function(){e.deleteTaskFunc(e.id)}}," Delete")))))};var k=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){i.a.get("https://giovvfsmk9.execute-api.eu-west-1.amazonaws.com/dev/tasks").then((function(e){console.log("Success",e.data),l(e.data)})).catch((function(e){console.log("Error",e)}))}),[]);var o=function(e){i.a.delete("https://giovvfsmk9.execute-api.eu-west-1.amazonaws.com/dev/tasks/".concat(e)).then((function(t){var n=a.filter((function(t){return t.TaskId!==e}));l(n)})).catch((function(e){console.log("API Error",e)}))},m=function(e){var t=a.find((function(t){return t.TaskId===e}));i.a.put("https://giovvfsmk9.execute-api.eu-west-1.amazonaws.com/dev/tasks/".concat(e),{Completed:!0,Status:t.Status}).then((function(t){console.log("Updated status",t);var n=a.map((function(t){return t.TaskId===e&&(t.Status=100,t.Completed=!0),t}));l(n)})).catch((function(e){console.log("Error updating Task",e)}))},f=function(e){var t=a.map((function(t){return t.TaskId===e&&(t.selected=!t.selected,console.log(t)),t}));l(t)};return c.a.createElement("div",{className:"container A"},c.a.createElement("div",{className:"App"},c.a.createElement("section",null,c.a.createElement(u,null),c.a.createElement(v,null)),c.a.createElement("main",null,c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"container"},c.a.createElement(d,{addNewTaskFunc:function(e,t){i.a.post("https://giovvfsmk9.execute-api.eu-west-1.amazonaws.com/dev/tasks",{Description:e,Deadline:t,Status:0}).then((function(e){var t=e.data,n=[].concat(Object(s.a)(a),[t]);console.log(n),l(n)})).catch((function(e){console.log("Error creating task",e)}))}}),c.a.createElement("div",{className:"container"},c.a.createElement(E,{count:a.length,tasks:a,statusUpdate:function(e){var t=a.map((function(t){return console.log(t),t.selected&&(t.Status=e.target.value),t}));l(t)}}),a.map((function(e){return c.a.createElement(N,{key:e.TaskId,deleteTaskFunc:o,completeTaskFun:m,text:e.Description,Status:e.Status,toggleSelected:f,Deadline:e.Deadline,id:e.TaskId})}))))))))};o.a.render(c.a.createElement(k,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.59bd7a54.chunk.js.map