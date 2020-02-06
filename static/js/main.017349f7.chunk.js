(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),o=t.n(l),c=(t(14),t(3)),s=t(4),i=t(6),m=t(5),u=t(7),d=(t(15),function(){return r.a.createElement("div",{id:"profile"},r.a.createElement("div",{id:"minimize"},r.a.createElement("header",null,r.a.createElement("h1",null,"Adesoji Awobajo"),r.a.createElement("p",{style:{marginTop:"5px"}},"Software Engineer")),r.a.createElement("main",null,r.a.createElement("div",{id:"profilePic"},r.a.createElement("img",{src:"images/profile.jpg",alt:""})),r.a.createElement("div",{id:"about"},r.a.createElement("p",null,"A software engineer with experience building web apps. I love to find bugs and fix them."),r.a.createElement("p",null,"I build web applications using different stacks.")),r.a.createElement("div",{id:"skills"},r.a.createElement("h3",null,"Programming Languages:"),r.a.createElement("div",{id:"skill"},r.a.createElement("span",{style:{background:"#4F5B93"}},"PHP"),r.a.createElement("span",{style:{background:"#cea11a"}},"JavaScript"),r.a.createElement("span",{style:{background:"#5f3f88"}},"Python"),r.a.createElement("span",{style:{background:"#218e94"}},"Java"))),r.a.createElement("div",{class:"button_cont",align:"center"},r.a.createElement("a",{class:"example_d",href:"/portfolio/resume.pdf",target:"_blank",rel:"noopener noreferrer"},"Resume"))),r.a.createElement("footer",null,r.a.createElement("h3",null,"Get in touch with me!"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:adesojiawobajo@gmail.com",className:"icons"},r.a.createElement("i",{className:"fa fa-envelope"}),r.a.createElement("span",null,"Email")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/sodiadrhain",className:"icons"},r.a.createElement("i",{className:"fa fa-github"}),r.a.createElement("span",null,"Github")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/sodiadrhain",className:"icons"},r.a.createElement("i",{className:"fa fa-twitter"}),r.a.createElement("span",null,"Twitter")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/adesoji-awobajo/",className:"icons"},r.a.createElement("i",{className:"fa fa-linkedin"}),r.a.createElement("span",null,"Linkedin")))))}),p=function(e){var a={react:{name:"React",background:"#218e94"},angular:{name:"Angular",background:"#ff0000"},html5:{name:"HTML5",background:"#ca2b03"},javascript:{name:"JavaScript",background:"#cea11a"},laravel:{name:"Laravel",background:"#f5824c"},express:{name:"Express.js",background:"#888585"},mysql:{name:"MySQL",background:"#4aad3a"},css3:{name:"CSS3",background:"#379ad6"},php:{name:"PHP",background:"#4F5B93"},wordpress:{name:"Wordpress",background:"gray"}}[e];return a||{name:e,background:"#284748"}},h=function(e){var a,t,n=e.project.description;return n&&(a=n.split(".").map(function(e){return r.a.createElement("p",null,e,".")}),t=e.project.skills.map(function(e,a){return r.a.createElement("span",{style:{background:p(e).background,top:30*a}},p(e).name)})),r.a.createElement("div",{className:"contents",style:{backgroundColor:e.backgr}},r.a.createElement("div",{className:"each-project"},t,r.a.createElement("img",{src:e.project.img_url,alt:""}),r.a.createElement("div",{className:"project-info"},r.a.createElement("h1",null,r.a.createElement("span",null,e.project.name),r.a.createElement("span",{className:"dates"},void 0)),r.a.createElement("div",{className:"text-btn"},r.a.createElement("div",{className:"text"},a),r.a.createElement("div",{className:"btn-container"},r.a.createElement("div",{className:"buttons"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.project.code_url},"Code"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.project.demo_url},"Live Demo")))))))},g=function(e){return r.a.createElement("div",{id:"projects",ref:e.scroll},r.a.createElement("header",null,r.a.createElement("div",{className:"contacts"},r.a.createElement("button",{id:"all",className:"active example_d",onClick:e.control},"My Projects"))),r.a.createElement("main",null,r.a.createElement("div",{id:"list-header"},r.a.createElement("nav",null,r.a.createElement("ul",null))),r.a.createElement("div",{id:"all-project",className:"first"},e.project.map(function(e,a){return a%2===0?r.a.createElement(h,{project:e,backgr:"rgb(43, 43, 43)",key:a}):r.a.createElement(h,{project:e,index:a,key:a})}))))},b=[{skills:["html5","css3","React"],name:"Simple Calculator",description:"A simple calculator app that does basic calculating fuctions such as Add, Divide, Multiply and Subtract. Built with React and completely works like the normal calculator on your phone or desktop devices",code_url:"https://github.com/sodiadrhain/calculator-app",demo_url:"https://sodiadrhain.github.io/calculator-app/",type:"frontend",create_on:"December 2019",img_url:"images/calculator-app.png"},{skills:["html5","css3","React"],name:"Count Button",description:"This app is built to tell you how many times you clicked a button. It has a reset feature that automatically restarts the process; notwithstanding the number of times you clicked, it takes you back to zero",code_url:"https://github.com/sodiadrhain/Button-App",demo_url:"https://sodiadrhain.github.io/Button-App/",type:"frontend",create_on:"November 2019",img_url:"images/button-app.png"},{skills:["html5","css3","angular","express"],name:"Scrum Board",description:"A board that displays the latest projects entered by a user. This web app requires you to sign in or sign up. You must first sign u, then login to create a project. It captures and stores the data entered from a CRUD Restful Api Django backend",code_url:"https://thawing-badlands-68599.herokuapp.com/",demo_url:"https://thawing-badlands-68599.herokuapp.com/",type:"frontend",create_on:"November 2019",img_url:"images/scrum-board.png"},{skills:["html5","css3","mysql","wordpress","php"],name:"Life Style Blog",description:"A blog built using wordpress, this is a life style blog that feeds you with lifestyle posts, poems and wonderful quotes. I used Elementor for this blog development",code_url:"https://www.tundeyusuf.com/",demo_url:"https://www.tundeyusuf.com/",type:"fullstack",create_on:"December 2019",img_url:"images/ty-blog.png"}],f=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={store:b,project:b,activeTag:"All Projects"},t.childDiv=r.a.createRef(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(g,{project:this.state.project,tag:this.state.activeTag,scroll:this.childDiv}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.017349f7.chunk.js.map