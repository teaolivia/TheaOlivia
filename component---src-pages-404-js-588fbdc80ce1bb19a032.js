(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{221:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(231),l=a(229);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(l.a,{title:"404: Not found"}),i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},228:function(e){e.exports={data:{site:{siteMetadata:{title:"Thea Olivia",menuLinks:[{name:"home",link:"/"},{name:"portfolio",link:"/portfolio"},{name:"contact",link:"/contacts"}]}}}}},229:function(e,t,a){"use strict";var n=a(230),i=a(0),r=a.n(i),l=a(1),o=a.n(l),s=a(235),c=a.n(s);function m(e){var t=e.description,a=e.lang,i=e.meta,l=e.title,o=n.data.site,s=t||o.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(i)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=m},230:function(e){e.exports={data:{site:{siteMetadata:{title:"Thea Olivia",description:"My Portfolio Website",author:"@theaolivia"}}}}},231:function(e,t,a){"use strict";var n=a(228),i=a(0),r=a.n(i),l=a(1),o=a.n(l),s=a(95),c=(a(232),a(233),function(e){var t=e.menuLinks;return r.a.createElement("div",{id:"page-wrap",style:{justifyContent:"center"}},r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",flex:2,listStyle:"none"}},t.map(function(e){return r.a.createElement("li",{div:"navbar",key:e.link},r.a.createElement(s.Link,{activeClassName:"nav-style",activeStyle:{color:"#ffc98b"},style:{color:"#1A090D",padding:"2rem",fontFamily:"Montserrat",fontWeight:"Medium",textDecoration:0},to:e.link},e.name))}))))});c.propTypes={siteTitle:o.a.string},c.defaultProps={siteTitle:""};var m=c,d=(a(219),a(234)),u=function(e){return r.a.createElement("li",{style:{listStyle:"none",alignContent:"center",fontFamily:"Source Sans Pro,sans-serif",padding:"1em",color:"#FB9985"}},r.a.createElement(s.Link,{style:{color:"#FB9985"},activeStyle:{fontFamily:"Montserrat,sans-serif",color:"#ffc98b"},to:e.to},e.children))},p=function(e){e.siteTitle;return r.a.createElement(d.slide,null,r.a.createElement(u,{activeStyle:{color:"#ffc98b",fontFamily:"Montserrat,sans-serif"},to:"/"},"about"),r.a.createElement(u,{activeStyle:{color:"#ffc98b",fontFamily:"Montserrat,sans-serif"},to:"/portfolio/"},"portfolio"),r.a.createElement(u,{activeStyle:{color:"#ffc98b",fontFamily:"Montserrat,sans-serif"},to:"/contacts/"},"contacts"),r.a.createElement("a",{style:{padding:"1em",color:"#ffc98b",fontFamily:"Source Sans Pro,sans-serif",fontWeight:"600"},href:"https://bit.ly/2Q8smIb"},r.a.createElement("b",null,"résumé.")))};p.propTypes={siteTitle:o.a.string},p.defaultProps={siteTitle:""},p.propTypes={children:o.a.node.isRequired};var f=p,y=function(e){var t=e.children;return r.a.createElement(s.StaticQuery,{query:"3436215879",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sidebar"},r.a.createElement(f,null)),r.a.createElement("div",{class:"main-container",style:{display:"table-cell",verticalAlign:"middle",margin:"3em auto",marginLeft:"auto",marginRight:"auto",maxWidth:"100%",maxHeight:"100%",padding:"2rem 1.0875rem 0px",paddingTop:0}},r.a.createElement("main",{style:{maxHeight:"100%",maxWidth:"100%"}},t)),r.a.createElement("footer",{class:"footer-class"},r.a.createElement("div",{id:"page-wrap",style:{height:"100%",marginBottom:"-50px"}},r.a.createElement("div",null,r.a.createElement(m,{menuLinks:e.site.siteMetadata.menuLinks})),r.a.createElement("div",{style:{height:"50px"}}))))},data:n})};y.propTypes={children:o.a.node.isRequired};t.a=y}}]);
//# sourceMappingURL=component---src-pages-404-js-588fbdc80ce1bb19a032.js.map