(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{164:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(213)),i={slug:"/recipes/",title:"Wechaty Recipes",sidebar_label:"Recipes Index"},o={unversionedId:"recipes/README",id:"recipes/README",isDocsHomePage:!1,title:"Wechaty Recipes",description:"These are some use cases and code snippets to get you started with Redux in a real app. They assume you understand the topics in basic and advanced tutorials.",source:"@site/docs/recipes/README.md",slug:"/recipes/",permalink:"/docs/recipes/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/recipes/README.md",version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1614358028,sidebar_label:"Recipes Index",sidebar:"docs",previous:{title:"wechaty \u57fa\u7840",permalink:"/docs/chatbot-1-to-2/advanced/6.story-of-open-source"},next:{title:"Configure Wechaty",permalink:"/docs/recipes/configure-wechaty"}},s=[{value:"To be added",id:"to-be-added",children:[]}],p={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"These are some use cases and code snippets to get you started with Redux in a real app. They assume you understand the topics in ",Object(c.b)("a",{parentName:"p",href:"#b"},"basic")," and ",Object(c.b)("a",{parentName:"p",href:"#a"},"advanced")," tutorials."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/recipes/configure-wechaty"},"Configuring Wechaty")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/recipes/usage-with-typescript"},"Usage with TypeScript")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/recipes/usage-with-docker"},"Usage with Docker")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/recipes/usage-with-heroku"},"Usage with Heroku")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/recipes/writing-tests"},"Writing Tests")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/recipes/using-plugin-with-wechaty"},"Using Plugin with Wechaty")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/recipes/using-vorpal-with-wechaty"},"Using Vorpal with Wechaty")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/recipes/using-redux-with-wechaty"},"Using Redux with Wechaty"))),Object(c.b)("h2",{id:"to-be-added"},"To be added"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Using Puppets with Wechaty (How to switch between puppets)")))}u.isMDXComponent=!0},213:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||c;return r?a.a.createElement(f,o(o({ref:t},p),{},{components:r})):a.a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<c;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);