(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{198:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),c=(a(0),a(213)),o={slug:"/puppet-services/",title:"Puppet Services",sidebar_label:"Puppet Services Index"},p={unversionedId:"puppet-services/README",id:"puppet-services/README",isDocsHomePage:!1,title:"Puppet Services",description:"For different instant messaging (IM) systems (such as WeChat, Whatsapp, and TikTok), the Wechaty community builds separate RPA modules for each, and we call those modules Wechaty Puppet.",source:"@site/docs/puppet-services/README.md",slug:"/puppet-services/",permalink:"/docs/puppet-services/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-services/README.md",version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1614358028,sidebar_label:"Puppet Services Index",sidebar:"docs",previous:{title:"Projects using Wechaty",permalink:"/docs/case-study/projects-using-wechaty"},next:{title:"Puppet Service: WXWork",permalink:"/docs/puppet-services/wxwork"}},i=[{value:"What is Wechaty Puppet Service",id:"what-is-wechaty-puppet-service",children:[]},{value:"Get A Token",id:"get-a-token",children:[{value:"1. Free TOKEN (Short-term)",id:"1-free-token-short-term",children:[]},{value:"2. Free TOKEN (Long-term)",id:"2-free-token-long-term",children:[]},{value:"3. Paid TOKEN",id:"3-paid-token",children:[]}]},{value:"Wechaty Puppet Servcies",id:"wechaty-puppet-servcies",children:[]},{value:"FAQ",id:"faq",children:[{value:"What is <em>&quot;Wechaty Puppet&quot;</em>, <em>&quot;Wechaty Puppet Provider&quot;</em>, <em>&quot;Wechaty Puppet Service&quot;</em>?",id:"what-is-wechaty-puppet-wechaty-puppet-provider-wechaty-puppet-service",children:[]}]},{value:"What is <em>&quot;Wechaty Puppet Service Token&quot;</em> or <em>TOKEN</em> you are talking about?",id:"what-is-wechaty-puppet-service-token-or-token-you-are-talking-about",children:[{value:"How To Become a Wechaty Puppet Service Provider",id:"how-to-become-a-wechaty-puppet-service-provider",children:[]}]},{value:"Useful Links",id:"useful-links",children:[]}],b={toc:i};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"For different instant messaging (IM) systems (such as WeChat, Whatsapp, and TikTok), the Wechaty community builds separate RPA modules for each, and we call those modules ",Object(c.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet"},"Wechaty Puppet"),"."),Object(c.b)("p",null,"Wechaty Puppet Service is gRPC for Wechaty Puppet. To use a Wechaty Puppet Service, you need a TOKEN for that service, and pass it to Wechaty, then you will be able to use that Puppet Service."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET=wechaty-puppet-service\nexport WECHATY_PUPPET_SERVICE_TOKEN="__TOKEN__"\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"You can switch between different Wechaty Puppet Services by changing your TOKEN. All your source code should work between different tokens without any changes.")),Object(c.b)("h2",{id:"what-is-wechaty-puppet-service"},"What is Wechaty Puppet Service"),Object(c.b)("p",null,"If you want to learn more about the concepts behind TOKEN, please read our blog post: ",Object(c.b)("a",{parentName:"p",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service")),Object(c.b)("h2",{id:"get-a-token"},"Get A Token"),Object(c.b)("p",null,"You can get a short-term free TOKEN for testing, get a long-term free TOKEN by joining our ",Object(c.b)("a",{parentName:"p",href:"/docs/contributor-program/"},"Wechaty Contributor Program"),", or buy a TOKEN from our Wechaty Puppet Service Providers."),Object(c.b)("p",null,"If you have any questions about the Wechaty Puppet Service, please feel free to talk to us by ",Object(c.b)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"joining our Gitter")," network if you aren\u2019t already a member."),Object(c.b)("h3",{id:"1-free-token-short-term"},"1. Free TOKEN (Short-term)"),Object(c.b)("p",null,"Short-term TOKEN\uff087 days\uff09 is for those developers who want to test Wechaty Puppet Service to make sure the service can meet their needs."),Object(c.b)("p",null,"TODO: list a easy to follow steps how to apply free token"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Paimon: Register ",Object(c.b)("a",{parentName:"li",href:"http://150.158.176.142/"},"here")),Object(c.b)("li",{parentName:"ul"},"wxwork/donut: Using ",Object(c.b)("strong",{parentName:"li"},"WeCom Account"),"(Not WeChat) with administrator rights ",Object(c.b)("a",{parentName:"li",href:"https://qiwei.juzibot.com/user/login?isWechaty=true"},"here")),Object(c.b)("li",{parentName:"ul"},"Padlocal: send email to ",Object(c.b)("a",{parentName:"li",href:"mailto:oxddoxdd@gmail.com"},"oxddoxdd@gmail.com"))),Object(c.b)("h3",{id:"2-free-token-long-term"},"2. Free TOKEN (Long-term)"),Object(c.b)("p",null,"Long-term TOKEN is for those developers who has joined our ",Object(c.b)("a",{parentName:"p",href:"/docs/contributor-program/"},"Wechaty Contributor Program"),"."),Object(c.b)("p",null,"Anyone who has a merged PR to our GitHub repos will be welcome to join."),Object(c.b)("p",null,"TODO: give a short intro for steps to join the WCP."),Object(c.b)("h3",{id:"3-paid-token"},"3. Paid TOKEN"),Object(c.b)("p",null,"Paid TOKEN is the easiest one to getting started with the Wechaty Puppet Service."),Object(c.b)("p",null,"Select a Wechaty Puppet Service from the list below and follow the steps in its page, then contact the Puppet Service Provider to buy one."),Object(c.b)("p",null,"If you want to buy more than 10 at a time, or you need consulting servcies, please contact us in Gitter room at ",Object(c.b)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"https://gitter.im/wechaty/wechaty"),"."),Object(c.b)("h2",{id:"wechaty-puppet-servcies"},"Wechaty Puppet Servcies"),Object(c.b)("p",null,"Now, we have the following Wechaty Puppet Services:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"Name"),Object(c.b)("th",{parentName:"tr",align:"center"},"Platform"),Object(c.b)("th",{parentName:"tr",align:"center"},"Protocol"),Object(c.b)("th",{parentName:"tr",align:"center"},"Life Cycle"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("a",{parentName:"td",href:"wxwork/"},"WXWork")),Object(c.b)("td",{parentName:"tr",align:"center"},"WeCom"),Object(c.b)("td",{parentName:"tr",align:"center"},"Windows"),Object(c.b)("td",{parentName:"tr",align:"center"},"Beta")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("a",{parentName:"td",href:"paimon/"},"Paimon")),Object(c.b)("td",{parentName:"tr",align:"center"},"WeChat"),Object(c.b)("td",{parentName:"tr",align:"center"},"Pad"),Object(c.b)("td",{parentName:"tr",align:"center"},"Beta")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("a",{parentName:"td",href:"padlocal/"},"PadLocal")),Object(c.b)("td",{parentName:"tr",align:"center"},"WeChat"),Object(c.b)("td",{parentName:"tr",align:"center"},"Pad"),Object(c.b)("td",{parentName:"tr",align:"center"},"Beta")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("a",{parentName:"td",href:"donut/"},"Donut")),Object(c.b)("td",{parentName:"tr",align:"center"},"WeChat"),Object(c.b)("td",{parentName:"tr",align:"center"},"Windows"),Object(c.b)("td",{parentName:"tr",align:"center"},"Deprecated")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"If you are interested in using a Wechaty Puppet Provider directly in your program instead of a Puppet Service, please visit our ",Object(c.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/wiki/Directory"},"Wechaty Puppet Directory"))),Object(c.b)("h2",{id:"faq"},"FAQ"),Object(c.b)("h3",{id:"what-is-wechaty-puppet-wechaty-puppet-provider-wechaty-puppet-service"},"What is ",Object(c.b)("em",{parentName:"h3"},'"Wechaty Puppet"'),", ",Object(c.b)("em",{parentName:"h3"},'"Wechaty Puppet Provider"'),", ",Object(c.b)("em",{parentName:"h3"},'"Wechaty Puppet Service"'),"?"),Object(c.b)("p",null,"We have a great blog post to explain those term in detail. Please read: ",Object(c.b)("a",{parentName:"p",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service")),Object(c.b)("h2",{id:"what-is-wechaty-puppet-service-token-or-token-you-are-talking-about"},"What is ",Object(c.b)("em",{parentName:"h2"},'"Wechaty Puppet Service Token"')," or ",Object(c.b)("em",{parentName:"h2"},"TOKEN")," you are talking about?"),Object(c.b)("p",null,"TOKEN is a unique string for authorizing Wechaty Puppet Service."),Object(c.b)("p",null,"Here's some TOKEN examples:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"puppet_wxwork_7ce4cf8a1ab789166c39c6"),": WXWork TOKEN"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"puppet_padlocal_7ce48a1ab789166c39c6"),": PadLocal TOKEN"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"puppet_paimon_7ce4cf8a1ab789166c39c6"),": Paimon TOKEN"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"puppet_donut_e7ce4cf8a1ab789166c39c6"),": Donut TOKEN"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"56945fa4-7ce8-4cf8-a1a9-b789166c39c6"),": UUIDv4 TOKEN")),Object(c.b)("p",null,"When you are using a Wechaty Puppet Service, you need to provide TOKEN to it so that it can serve you correctly."),Object(c.b)("p",null,"The following shell commands demonstrated how to use it under Linux/macOS:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"export WECHATY_PUPPET_SERVICE_TOKEN=__TOKEN__\n\nts-node bot.ts\n// or: node bot.js\n// or: make bot\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"__TOKEN__")," is your TOKEN")),Object(c.b)("h3",{id:"how-to-become-a-wechaty-puppet-service-provider"},"How To Become a Wechaty Puppet Service Provider"),Object(c.b)("p",null,"To be written."),Object(c.b)("p",null,"Please feel free to list yourself to our list at ",Object(c.b)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/"},"Wechaty Puppet Provider Repo"),", and add your introduction in this README by submitting a Pull Request!"),Object(c.b)("p",null,"If you want to become a Wechaty Puppet Service Provider, please do not hesitate to file an issue to introduce yourself in this repository, then contact ",Object(c.b)("a",{parentName:"p",href:"mailto:rui@chatie.io"},"rui@chatie.io"),"!"),Object(c.b)("p",null,"Learn more about the Wechaty Puppet Service Providers from:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"https://github.com/wechaty/PMC/issues/11"},"The relationship between Wechaty OSS Project and the Commercial Puppet Service Provider (CPSP) #11")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"https://github.com/wechaty/puppet-services/issues/39"},"Wechaty Puppet Service Registration & Discovery (w.r.t. token) #39"))),Object(c.b)("h2",{id:"useful-links"},"Useful Links"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"https://github.com/wechaty/PMC/issues/11"},"Wechaty OSS Project and the Commercial Puppet Service Provider (CPSP)")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Starter Project Template that works out-of-the-box")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/1986"},"How to create your own Wechaty Puppet Service Token with the Web Protocol"))))}l.isMDXComponent=!0},213:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),l=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=l(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=l(a),h=r,m=u["".concat(o,".").concat(h)]||u[h]||s[h]||c;return a?n.a.createElement(m,p(p({ref:t},b),{},{components:a})):n.a.createElement(m,p({ref:t},b))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var b=2;b<c;b++)o[b]=a[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);