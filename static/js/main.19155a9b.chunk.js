(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(4),s=a.n(c),r=(a(9),a(2)),o=(a(10),a(11),a.p+"static/media/default.f0b16e56.PNG"),l=a.p+"static/media/butterflyBlur.8b5c84b9.PNG",d=a.p+"static/media/butterflyMonochrome.950a9e14.PNG",b=a.p+"static/media/butterflyMosaic.66412e86.PNG",j=a.p+"static/media/butterflySepia.8e03f7fd.PNG",m=a.p+"static/media/butterflySharpen.9c3c9a10.PNG",u="duntugan.s@northeastern.edu",h={EMAIL:"mailto:"+u,GITHUB:"https://github.com/SofieDunt",ICONS:"https://icons8.com/",SFTT:"https://treeboston.org/",SFTT_SITE:"https://map.treeboston.org/",SAGA:"https://github.com/SofieDunt/saga",PLANT_CAM:"https://www.plantcam.live/",LBFE:"https://lbfeboston.org/",DE_RESEARCH_PHOTO:"https://lbfeboston.org/wp-content/uploads/2021/11/0001-1.jpg"},p="https://img.icons8.com/material-rounded/96/ffffff/mail.png",g="https://img.icons8.com/ios-glyphs/480/ffffff/github.png",f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAL0lEQVRIiWNgGAUjB/z////wf+qBwzBzmWjlXhqZOwooAaOpaBRQDkZT0SgYvAAAlsLwrAZxxMIAAAAASUVORK5CYII=",A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABaklEQVRYhe2WPU7DQBCFvzVsCpQaIg4AhkV01ChwACpDUnAXSo5BGSlXIPx0SIjSUsIBUA4QUeDESxEiQeTdeDYCUviV9nret2PN00ClSistk9R/u0bkelHbb11pG71s7La2g80P2lvaRk+1vfNrGYBJ6hZ7Aexka7aHSRpic5M0dJ4/AMYqdebqRDFA2h1l67VjIAVibaNHUSemN78FYhQDPVGnpN1R0VHlLXR4uanHH3eAAV71RDXfB523heZ53gMMioEeqxPfN34AKYTQvBxAWYgA8/IAiyACzWUALgitJqHmcgCYjpeN7oEY6H89jYF+pvImaXcoKScHgPlOEHLzmZxJ6FU+/gluAy/CCvwCWQcKEm6pxETSAd+ohSSmCKDMnAdCLAaQhEwAhB8gJOGEEG6AJeJVAlEMYJK6ttEzS4zX/LhmKj8q2gmcC4lV6ubbMiEzn9YYzkbUYjuuhcSvP1hKK1X6d30CfbEexVAMZmQAAAAASUVORK5CYII",O="current",x="completed",v="footnotes",S={current:"Current Projects",completed:"Completed Projects",orgs:"Organizations",footnotes:"Footnotes"},N=[O,x],y=["Sofie","a second-year student","slightly addicted to coffee"],E=[{name:"Load Default",img:o},{name:"Blur",img:l},{name:"Sharpen",img:m},{name:"Monochrome",img:d},{name:"Sepia",img:j},{name:"Mosaic",img:b}],C=function(e){return e<600},R=a(0);var w=function(){var e,t=Object(i.useState)((e=window.location.hash).length>0?e.substr(1):""),a=Object(r.a)(t,2),n=a[0],c=a[1],s=Object(i.useState)(C(window.innerWidth)),o=Object(r.a)(s,2),l=o[0],d=o[1],b=Object(i.useState)(!1),j=Object(r.a)(b,2),m=j[0],u=j[1];Object(i.useEffect)((function(){function e(){var e=C(window.innerWidth);!l&&e?d(!0):l&&!e&&d(!1)}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}));var h=function(e){var t=e.className,a=function(e){return"".concat(t," ").concat(n===e?"active":"")};return Object(R.jsx)(R.Fragment,{children:N.map((function(e){return Object(R.jsx)("a",{href:"#".concat(e),onClick:function(){return function(e){c(e),u(!1)}(e)},children:Object(R.jsx)("div",{className:a(e),children:S[e]})},e)}))})},p=function(){return Object(R.jsx)("div",{className:"links",children:Object(R.jsx)(h,{className:"item"})})},g=function(){return m?Object(R.jsxs)("div",{className:"mobile-menu",children:[Object(R.jsx)("div",{className:"links",onClick:function(){return u(!1)},children:Object(R.jsx)("img",{className:"item",src:A,alt:"menu"})}),Object(R.jsx)("div",{className:"mobile-links",children:Object(R.jsx)(h,{className:"mobile-item"})})]}):Object(R.jsx)("div",{className:"links",onClick:function(){return u(!0)},children:Object(R.jsx)("img",{className:"item",src:f,alt:"menu"})})};return Object(R.jsxs)("div",{className:"nav-container",children:[Object(R.jsx)("a",{href:"/",className:"main-link",children:"Sofie Duntugan"}),l?Object(R.jsx)(g,{}):Object(R.jsx)(p,{})]})};a(13);var T=function(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(0),s=Object(r.a)(c,2),o=s[0],l=s[1],d=Object(i.useState)(!1),b=Object(r.a)(d,2),j=b[0],m=b[1];return Object(i.useEffect)((function(){var e=y[a],t=setTimeout((function(){l(j?function(e){return e-1}:function(e){return e+1})}),o===e.length?(m(!0),2e3):j&&0===o?(m(!1),n((function(e){var t=e+1;return t<y.length?t:0})),500):75);return function(){return clearTimeout(t)}}),[a,o,j]),Object(R.jsxs)("div",{className:"banner",children:[Object(R.jsx)("div",{className:"greeting-container",children:Object(R.jsxs)("h1",{children:["Hi, I'm ",y[a].substr(0,o),"|"]})}),Object(R.jsx)("div",{className:"about-container",children:Object(R.jsx)("p",{children:"I study computer science, political science, and a bit of math at Northeastern University to develop technical solutions to the pressing issues we face today."})}),Object(R.jsxs)("div",{className:"contacts",children:[Object(R.jsx)("a",{href:h.EMAIL,children:Object(R.jsx)("img",{src:p,alt:"E-mail"})}),Object(R.jsx)("a",{href:h.GITHUB,children:Object(R.jsx)("img",{src:g,alt:"Github"})})]})]})};a(14);var k=function(){return Object(R.jsxs)("div",{className:"footer",children:[Object(R.jsxs)("p",{children:["Created by Sofie Duntugan | Updated ","January 11, 2022"]}),Object(R.jsxs)("p",{children:["Feel free to reach out at ",Object(R.jsx)("a",{href:h.EMAIL,children:u}),"!"]})]})},I=(a(15),"red"),P="green";var B=function(e){var t=e.title,a=e.color;return Object(R.jsx)("div",{className:"badge ".concat(a),children:Object(R.jsx)("p",{children:t})})},J={JAVA:{title:"Java",color:I},TS:{title:"TypeScript",color:"purple"},JS:{title:"JavaScript",color:P},REACT:{title:"React",color:"blue"},VERTX:{title:"Vert.x",color:P},SPRING:{title:"Spring",color:P},R:{title:"R",color:P},NODE:{title:"Node.js",color:P},RESEARCH:{title:"Research",color:I}};function M(e){var t=e.badge;return Object(R.jsx)(B,{title:t.title,color:t.color})}a(16);var V=function(e){var t=Object(i.useState)(!1),a=Object(r.a)(t,2),n=a[0],c=a[1],s=e.title,o=e.body,l=e.date,d=e.link,b=e.image,j=e.badges,m=e.children,u=function(e){e.target===e.currentTarget&&c((function(e){return!e}))};return n?Object(R.jsxs)("div",{className:"card active-card",onClick:function(){return c(!1)},children:[Object(R.jsxs)("div",{className:"title inline-flex",children:[Object(R.jsx)("a",{href:d,target:"_blank",rel:"noreferrer",className:"link-title",onClick:u,children:e.title}),Object(R.jsxs)("p",{children:["\u2002| ",l]})]}),Object(R.jsxs)("div",{className:"child-body",children:[o,Object(R.jsx)("div",{className:"badge-bar",children:j&&j.map((function(e){return Object(R.jsx)(M,{badge:e})}))})]})]}):Object(R.jsxs)("div",{className:"card",onClick:u,children:[Object(R.jsxs)("div",{className:"card-body",onClick:u,children:[Object(R.jsx)("h2",{className:"title",onClick:u,children:s}),Object(R.jsx)("div",{className:"child-body",children:m})]}),Object(R.jsx)("div",{className:"card-image",onClick:function(){return c(!0)},children:Object(R.jsx)("img",{src:b,alt:"Project"})})]})},G=a.p+"static/media/logo.2706d6a8.png",H=a.p+"static/media/SFTTSite.d9fa6537.png",D=a.p+"static/media/saga.f5db08b7.png",L=a.p+"static/media/plantcam.b5adc22e.png",U=a.p+"static/media/risk.2be0fab4.png",z=a.p+"static/media/maze.8f898138.png",F=a.p+"static/media/ihesjr.31d67002.png";var Y=function(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(R.jsxs)("div",{className:"app",children:[Object(R.jsx)(w,{}),Object(R.jsx)(T,{}),Object(R.jsxs)("div",{className:"body",children:[Object(R.jsxs)("div",{className:"section",id:O,children:[Object(R.jsx)("h1",{children:"Right now, I'm working on..."}),Object(R.jsx)("div",{className:"flex-section card-section",children:Object(R.jsx)(V,{title:"Health Equity Research",body:Object(R.jsx)("p",{children:"a qualitative analysis of focus group discussions to reveal and improve the current state and impact of government administrative practices on the well-being of the human services sector."}),date:"Jan 2022-Present",image:F,badges:[J.RESEARCH]})})]}),Object(R.jsxs)("div",{className:"section",id:x,children:[Object(R.jsx)("h1",{children:"Some of my completed projects include..."}),Object(R.jsxs)("div",{className:"flex-section card-section",children:[Object(R.jsx)(V,{title:"Adopt A Tree Web App",body:Object(R.jsxs)("p",{children:["a web application to connect residents to their local trees and help"," ",Object(R.jsx)("a",{href:h.SFTT,target:"_blank",rel:"noreferrer",children:"@SpeakForTheTrees"})," ","expand Boston's urban forest."]}),date:"Aug 2020-May 2022",link:h.SFTT_SITE,image:H,badges:[J.REACT,J.TS,J.JAVA,J.VERTX]}),Object(R.jsx)(V,{title:"Vector Risk Visualizer",body:Object(R.jsx)("p",{children:"the basis of a Shiny application to visualize the spatial and temporal variation in mosquito abundance to help managers combat the extinction of Hawaiian bird species caused by avian malaria transmission."}),date:"Mar-May 2022",image:U,badges:[J.R]}),Object(R.jsx)(V,{title:"plantCam",body:Object(R.jsx)("p",{children:"an informative website about the state of endangered plants in Hawaii, with optimized analysis and visualization of real-time data collected by multiple field sensors."}),date:"Aug 2021-Mar 2022",link:h.PLANT_CAM,image:L,badges:[J.R]}),Object(R.jsx)(V,{title:"Maze 2.0",body:Object(R.jsx)("p",{className:"med-text",children:"originally done in Java, a React + TypeScript front end and Nest backend that lets users generate biased or unbiased mazes of desired dimensions, play through them, and watch them be solved through breadth-first or depth-first search."}),date:"January 2022",image:z,badges:[J.REACT,J.NODE,J.TS]}),Object(R.jsx)(V,{title:"this portfolio",body:Object(R.jsx)("p",{children:"a site designed in Figma and created with React to keep track of my latest experiences."}),date:"November 2021",image:G,badges:[J.REACT,J.JS]}),Object(R.jsx)(V,{title:"Digital Equity Research",body:Object(R.jsx)("p",{children:"a literature review finding solutions to support older adults isolated by the COVID-19 pandemic and decrease the generational and socioeconomic gap in technology access and use"}),date:"Mar 2021-Nov 2021",image:h.DE_RESEARCH_PHOTO,link:h.LBFE,badges:[J.RESEARCH]}),Object(R.jsx)(V,{title:"Story Player & Writer",body:Object(R.jsx)("p",{children:"an application that allows users to play, create, and share interactive stories without any programming knowledge through the CL or a web interface"}),date:"July 2021",link:h.SAGA,image:D,badges:[J.JAVA,J.SPRING,J.REACT,J.TS]}),Object(R.jsxs)(V,{title:"Photo Editor",body:Object(R.jsx)("p",{children:"an application capable of importing images to, exporting images from, and modifying images in a user's photo library. written in Java and tested with JUnit."}),date:"June 2021",image:E[a].img,badges:[J.JAVA],children:[Object(R.jsx)("p",{className:"small-text",children:"Supported modifications include:"}),Object(R.jsx)("div",{className:"flex-section",children:E.map((function(e,t){return Object(R.jsx)("button",{className:"code-button",onClick:function(){return n(t)},children:e.name},e.name)}))}),Object(R.jsx)("p",{className:"small-text",children:"...and more!"})]})]})]})]}),Object(R.jsx)("div",{className:"padded footnotes",id:v,children:Object(R.jsxs)("p",{children:["Code that is not public ",Object(R.jsx)("a",{href:h.GITHUB,children:"on my GitHub"})," may be viewed upon ",Object(R.jsx)("a",{href:h.EMAIL,children:"request"}),"."," ",Object(R.jsx)("a",{href:"https://icons8.com/",children:"Github, Mail, Menu, and Close Icons by Icons8"}),"."]})}),Object(R.jsx)(k,{})]})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),c(e),s(e)}))};s.a.render(Object(R.jsx)(n.a.StrictMode,{children:Object(R.jsx)(Y,{})}),document.getElementById("root")),Q()}],[[17,1,2]]]);
//# sourceMappingURL=main.19155a9b.chunk.js.map