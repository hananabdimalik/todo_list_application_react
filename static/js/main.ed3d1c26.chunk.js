(this.webpackJsonptodo_list_application_frontend=this.webpackJsonptodo_list_application_frontend||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),o=a.n(l),s=(a(13),a(4)),r=a(1);a(14),a(15);var m=function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"p-3 mb-2 bg-info text-white"},c.a.createElement("header",null,c.a.createElement("h1",null,"Get Things DONE!"))))};a(16);var i=function(e){var t=Object(n.useState)(" "),a=Object(r.a)(t,2),l=a[0],o=a[1],s=Object(n.useState)("2020-04-10"),m=Object(r.a)(s,2),i=m[0],d=m[1];return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",null,c.a.createElement("h3",{className:"text-left"}," Add a Task   ",c.a.createElement("button",{className:"btn btn-info",onClick:function(){console.log("clicked"),e.addNewTaskFunc(l,i)}},"Add")," ")," "),c.a.createElement("div",{className:"row mb-3"},c.a.createElement("div",{className:"col-6 md-6"}," ",c.a.createElement("input",{type:"test",className:"form-control",value:l,onChange:function(e){o(e.target.value)}})),c.a.createElement("div",{className:"col-6 col-md-6"}," ",c.a.createElement("input",{type:"date",className:"form-control",value:i,onChange:function(e){d(e.target.value)}}))))))};var d=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("blockquote",{className:"blockquote mb-0"},c.a.createElement("p",{className:"footer"},'"It always seems impossible until it is DONE!'),c.a.createElement("footer",{className:"blockquote-footer"}," Nelson Mandel")))},u=(a(17),a(18),a(7)),E=a.n(u);var v=function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 col-md-4"}," ",c.a.createElement("input",{type:"checkbox",value:e.id,className:"form-check-input",onClick:function(t){console.log(t.target.value),e.toggleSelected(e.id)}}),e.text),c.a.createElement("div",{className:"col-3 col-md-2",onChange:function(e){console.log(e.target.value)}},e.Status),c.a.createElement("div",{className:"col-3 col-md-2"}," ",E()(e.Deadline).format("d MM YYYY")," "),c.a.createElement("div",{className:"col-3 col-md-2"},c.a.createElement("button",{className:"btn btn-info",onClick:function(){console.log("Complete button was clicked"),console.log(e.id),e.completeTaskFun(e.id)}},"Complete ")),c.a.createElement("div",{className:"col-3 col-md-2"},c.a.createElement("button",{className:"btn btn-info",onClick:function(){e.deleteTaskFunc(e.id)}}," Delete")))))};var N=function(e){var t=e.tasks.filter((function(e){return e.selected}));return c.a.createElement("header",null,c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",null," Current To DO "),c.a.createElement("div",null,c.a.createElement("h5",{className:"text-left"},e.count," outstanding tasks")),c.a.createElement("div",null,c.a.createElement("h5",{className:"text-left"},t.length," outstanding tasks")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"}," ",c.a.createElement("p",{className:"text-centre"},"Task ")," "),c.a.createElement("div",{className:"col-3"},c.a.createElement("p",{className:"text-centre"},"  Status  ",c.a.createElement("select",{onChange:function(t){console.log(t.target.value),e.tasks.map((function(e){e.selected&&(e.Status=t.target.value)}))}},c.a.createElement("option",{value:"Not started"}," 0 %"),c.a.createElement("option",{value:"20 percent"}," 20 %"),c.a.createElement("option",{value:"40 percent"}," 40 %"),c.a.createElement("option",{value:"60 percent"}," 60 %"),c.a.createElement("option",{value:"80 percent"}," 80 %"),c.a.createElement("option",{value:"completed"}," 100 %")))),c.a.createElement("div",{className:"col-3"}," ",c.a.createElement("p",{className:"text-left"}," Deadline")," ")))))};a(20);var f=function(e){var t=Object(n.useState)(" "),a=Object(r.a)(t,2),l=a[0],o=a[1];return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"col-12 col-md-8"},c.a.createElement("div",{className:"card Notes"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"text-left"}," Notes  ",c.a.createElement("button",{className:"btn btn-info",onClick:!0}," + "),"  "),c.a.createElement("div",null,c.a.createElement("div",{className:"card-body"},c.a.createElement("input",{type:"text",className:"form-control",value:l,onChange:function(e){o(e.target.value)}})),c.a.createElement("div",{className:"col-12 col-md-4"},e.text))))))};var p=function(){var e=Object(n.useState)([{text:"Organise Bookcase",Status:20,Deadline:"2020/04/01",id:1,selected:!1},{text:"Tidy room",Status:40,Deadline:"2020/04/11",id:2,selected:!1},{text:" Post mail",Status:60,Deadline:"2020/04/20",id:3,selected:!1},{text:"Hoover carpet",Status:100,Deadline:"2020/04/30",id:4,selected:!1}]),t=Object(r.a)(e,2),a=t[0],l=t[1];console.dir(l);var o=function(e){var t=a.filter((function(t){return t.id!==e}));l(t)},u=function(e){var t=a.map((function(t){return t.id===e&&(t.Status=100,console.log(t)),t}));console.log(t),l(t)},E=function(e){var t=a.map((function(t){return t.id===e&&(t.selected=!t.selected,console.log(t)),t}));console.log(t),l(t)},p=Object(n.useState)([{text:"Add notes here "}]),b=Object(r.a)(p,2),g=b[0],k=b[1];return c.a.createElement("div",{className:"container A"},c.a.createElement("div",{className:"App"},c.a.createElement("section",null,c.a.createElement(m,null),c.a.createElement(d,null)),c.a.createElement("main",null,c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"container"},c.a.createElement(i,{addNewTaskFunc:function(e,t){var n={text:e,Deadline:t,id:1e3*Math.random()},c=[].concat(Object(s.a)(a),[n]);l(c)}}),c.a.createElement("div",{className:"container"},c.a.createElement(N,{count:a.length,tasks:a}),a.map((function(e){return c.a.createElement(v,{key:e.id,deleteTaskFunc:o,completeTaskFun:u,text:e.text,Status:e.Status,toggleSelected:E,Deadline:e.Deadline,id:e.id})}))))),c.a.createElement("section",{className:"container"},c.a.createElement(f,{addNewNotesFun:function(e){var t={text:e},a=[].concat(Object(s.a)(g),[t]);k(a)},text:g.text})))))};o.a.render(c.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.ed3d1c26.chunk.js.map