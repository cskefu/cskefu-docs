"use strict";(self.webpackChunkcskefu_docs=self.webpackChunkcskefu_docs||[]).push([[5973],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),k=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=k(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=k(a),c=l,N=u["".concat(o,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(N,p(p({ref:e},d),{},{components:a})):n.createElement(N,p({ref:e},d))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=u;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:l,p[1]=i;for(var k=2;k<r;k++)p[k]=a[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},23062:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>k});var n=a(87462),l=(a(67294),a(3905));const r={sidebar_position:2},p="\u5e94\u7528\u90e8\u7f72",i={unversionedId:"deploy",id:"version-v7.0/deploy",title:"\u5e94\u7528\u90e8\u7f72",description:"\u6625\u677e\u5ba2\u670d\u9002\u5e94\u5404\u79cd\u90e8\u7f72\u65b9\u5f0f\uff0c\u672c\u6587\u4f7f\u7528 Docker \u548c Docker compose \u7684\u65b9\u5f0f\uff0c\u9002\u5408\u4f53\u9a8c\u3001\u5f00\u53d1\u3001\u6d4b\u8bd5\u548c\u4e0a\u7ebf\u6625\u677e\u5ba2\u670d\uff0c\u6b64\u79cd\u65b9\u5f0f\u7b80\u5355\u5feb\u6377\u3002",source:"@site/versioned_docs/version-v7.0/deploy.md",sourceDirName:".",slug:"/deploy",permalink:"/docs/v7.0/deploy",draft:!1,editUrl:"https://github.com/cskefu/cskefu-docs/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v7.0/deploy.md",tags:[],version:"v7.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u4ea7\u54c1\u6982\u8ff0",permalink:"/docs/v7.0/"},next:{title:"\u7cfb\u7edf\u521d\u59cb\u5316",permalink:"/docs/v7.0/initialization"}},o={},k=[{value:"\u51c6\u5907\u6761\u4ef6",id:"\u51c6\u5907\u6761\u4ef6",level:2},{value:"\u524d\u63d0",id:"\u524d\u63d0",level:3},{value:"\u5b89\u5168\u7ec4",id:"\u5b89\u5168\u7ec4",level:3},{value:"\u514b\u9686\u4ee3\u7801",id:"\u514b\u9686\u4ee3\u7801",level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"\u7ba1\u7406\u547d\u4ee4",id:"\u7ba1\u7406\u547d\u4ee4",level:2},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",level:3},{value:"\u67e5\u770b\u670d\u52a1\u72b6\u6001",id:"\u67e5\u770b\u670d\u52a1\u72b6\u6001",level:3},{value:"\u67e5\u770b\u670d\u52a1\u65e5\u5fd7",id:"\u67e5\u770b\u670d\u52a1\u65e5\u5fd7",level:3},{value:"\u767b\u9646\u7cfb\u7edf",id:"\u767b\u9646\u7cfb\u7edf",level:3},{value:"\u5173\u95ed\u670d\u52a1",id:"\u5173\u95ed\u670d\u52a1",level:3},{value:"\u91cd\u542f\u670d\u52a1",id:"\u91cd\u542f\u670d\u52a1",level:3},{value:"\u65e0\u7f51\u7edc\u8bbf\u95ee\u6761\u4ef6\u4e0b\u90e8\u7f72",id:"\u65e0\u7f51\u7edc\u8bbf\u95ee\u6761\u4ef6\u4e0b\u90e8\u7f72",level:2},{value:"\u5229\u7528\u5176\u4ed6\u673a\u5668",id:"\u5229\u7528\u5176\u4ed6\u673a\u5668",level:3},{value:"\u4e0b\u8f7d\u955c\u50cf",id:"\u4e0b\u8f7d\u955c\u50cf",level:3},{value:"\u5bfc\u51fa\u955c\u50cf",id:"\u5bfc\u51fa\u955c\u50cf",level:3},{value:"\u4e0a\u4f20\u955c\u50cf",id:"\u4e0a\u4f20\u955c\u50cf",level:3},{value:"\u5b89\u88c5\u955c\u50cf",id:"\u5b89\u88c5\u955c\u50cf",level:3},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1-1",level:3},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],d={toc:k};function m(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5e94\u7528\u90e8\u7f72"},"\u5e94\u7528\u90e8\u7f72"),(0,l.kt)("p",null,"\u6625\u677e\u5ba2\u670d\u9002\u5e94\u5404\u79cd\u90e8\u7f72\u65b9\u5f0f\uff0c\u672c\u6587\u4f7f\u7528 Docker \u548c Docker compose \u7684\u65b9\u5f0f\uff0c\u9002\u5408\u4f53\u9a8c\u3001\u5f00\u53d1\u3001\u6d4b\u8bd5\u548c\u4e0a\u7ebf\u6625\u677e\u5ba2\u670d\uff0c\u6b64\u79cd\u65b9\u5f0f\u7b80\u5355\u5feb\u6377\u3002"),(0,l.kt)("p",null,"\u91cd\u8981\u63d0\u793a\uff1a\u90e8\u7f72\u5e94\u7528\u540e\uff0c\u5fc5\u987b\u6309\u7167\u300a\u7cfb\u7edf\u521d\u59cb\u5316\u300b",(0,l.kt)("sup",{parentName:"p",id:"fnref-initdoc"},(0,l.kt)("a",{parentName:"sup",href:"#fn-initdoc",className:"footnote-ref"},"initdoc")),"\u6587\u6863\u8fdb\u884c\u7cfb\u7edf\u521d\u59cb\u5316\uff0c\u518d\u4f7f\u7528\uff0c\u4e0d\u505a\u521d\u59cb\u5316\uff0c\u4f1a\u9020\u6210\u5750\u5e2d\u65e0\u6cd5\u5206\u914d\u7b49\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"\u51c6\u5907\u6761\u4ef6"},"\u51c6\u5907\u6761\u4ef6"),(0,l.kt)("h3",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9879\u76ee"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u7cfb\u7edf"),(0,l.kt)("td",{parentName:"tr",align:null},"Linux (CentOS 7.x, Ubuntu 16.04+ \u7b49)\uff0c",(0,l.kt)("strong",{parentName:"td"},"\u63a8\u8350\u4f7f\u7528 Ubuntu LTS"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Docker \u7248\u672c"),(0,l.kt)("td",{parentName:"tr",align:null},"Docker version 1.13.x \u53ca\u4ee5\u4e0a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Docker Compose \u7248\u672c"),(0,l.kt)("td",{parentName:"tr",align:null},"version 1.23.x \u53ca\u4ee5\u4e0a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u9632\u706b\u5899\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"8035, 8036")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5176\u4ed6\u8f6f\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"git")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u6d4b\u8bd5 >= 8GB ","|"," \u751f\u4ea7\u73af\u5883 >= 16GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU \u9897\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u6d4b\u8bd5 >= 2 ","|"," \u751f\u4ea7\u73af\u5883 >= 4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u786c\u76d8"),(0,l.kt)("td",{parentName:"tr",align:null},">= 20GB")))),(0,l.kt)("h3",{id:"\u5b89\u5168\u7ec4"},"\u5b89\u5168\u7ec4"),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4e91\u4e3b\u673a\uff0c\u8981\u8003\u8651\u5230\u4e0d\u540c\u4e91\u670d\u52a1\u63d0\u4f9b\u5546\u7684\u5b89\u5168\u7ec4\u8bbe\u7f6e\uff0c\u5141\u8bb8 8035 \u548c 8036 \u7aef\u53e3\u4e0b\u884c\u3002"),(0,l.kt)("h2",{id:"\u514b\u9686\u4ee3\u7801"},"\u514b\u9686\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Bash"},"git clone -b master https://github.com/cskefu/cskefu.git cskefu\ncd cskefu\ncp sample.env .env # \u4f7f\u7528\u6587\u672c\u7f16\u8f91\u5668\u6253\u5f00 .env \u6587\u4ef6\uff0c\u5e76\u6309\u7167\u9700\u6c42\u9700\u6539\u914d\u7f6e\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u547d\u4ee4\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"master")," \u4ee3\u8868\u5f53\u524d\u7a33\u5b9a\u7248\uff0c\u662f ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cskefu/cskefu"},"cskefu/cskefu")," \u7684 master \u5206\u652f\uff0c\u5206\u652f\u8bf4\u660e\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5206\u652f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"master"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u7a33\u5b9a\u7248\u672c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"develop"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5f00\u53d1\u7248\u672c")))),(0,l.kt)("p",null,"\u514b\u9686\u4ee3\u7801\u65f6\uff0c\u6309\u7167\u9700\u8981\u6307\u5b9a\u5206\u652f\u4fe1\u606f\uff1b\u672c\u90e8\u7f72\u6587\u6863\u9488\u5bf9 master \u5206\u652f\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u90e8\u7f72\u76f8\u5173\u7684\u73af\u5883\u53d8\u91cf\uff0c\u53ef\u4ee5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," \u4e2d\u8986\u76d6\u9ed8\u8ba4\u503c\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMPOSE_FILE"),(0,l.kt)("td",{parentName:"tr",align:null},"docker-compose.yml"),(0,l.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u7f16\u6392\u63cf\u8ff0\u6587\u4ef6\uff0c\u4fdd\u6301\u9ed8\u8ba4\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMPOSE_PROJECT_NAME"),(0,l.kt)("td",{parentName:"tr",align:null},"cskefu"),(0,l.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5b9e\u4f8b\u7684\u5bb9\u5668\u524d\u7f00\uff0c\u53ef\u4ee5\u7528\u5176\u5b83\u5b57\u7b26\u4e32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MYSQL_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"8037"),(0,l.kt)("td",{parentName:"tr",align:null},"MySQL \u6570\u636e\u5e93\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u5668\u4f7f\u7528\u7684\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REDIS_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"8041"),(0,l.kt)("td",{parentName:"tr",align:null},"Redis \u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u5668\u7684\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ES_PORT1"),(0,l.kt)("td",{parentName:"tr",align:null},"8039"),(0,l.kt)("td",{parentName:"tr",align:null},"ElasticSearch RestAPI \u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u5668\u7684\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ES_PORT2"),(0,l.kt)("td",{parentName:"tr",align:null},"8040"),(0,l.kt)("td",{parentName:"tr",align:null},"ElasticSearch \u670d\u52a1\u53d1\u73b0\u7aef\u53e3\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u5668\u7684\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CC_WEB_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"8035"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6625\u677e\u5ba2\u670d Web \u670d\u52a1\u5730\u5740\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u5668\u7684\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CC_SOCKET_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"8036"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6625\u677e\u5ba2\u670d SocketIO \u670d\u52a1\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u5668\u7684\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACTIVEMQ_PORT1"),(0,l.kt)("td",{parentName:"tr",align:null},"8051"),(0,l.kt)("td",{parentName:"tr",align:null},"ActiveMQ \u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACTIVEMQ_PORT2"),(0,l.kt)("td",{parentName:"tr",align:null},"8052"),(0,l.kt)("td",{parentName:"tr",align:null},"ActiveMQ \u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACTIVEMQ_PORT2"),(0,l.kt)("td",{parentName:"tr",align:null},"8053"),(0,l.kt)("td",{parentName:"tr",align:null},"ActiveMQ \u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_PASSWD"),(0,l.kt)("td",{parentName:"tr",align:null},"123456"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5bc6\u7801\uff0c\u8bbe\u7f6e\u5230 MySQL, Redis, ActiveMQ")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOG_LEVEL"),(0,l.kt)("td",{parentName:"tr",align:null},"INFO"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u7ea7\u522b\uff0c\u53ef\u4f7f\u7528 WARN, ERROR, INFO, DEBUG")))),(0,l.kt)("p",null,"\u4ee5\u4e0a\u914d\u7f6e\u4e2d\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u7aef\u53e3\u7684\u5404\u9ed8\u8ba4\u503c\u9700\u8981\u4fdd\u8bc1\u5728\u5bbf\u4e3b\u673a\u5668\u4e0a\u8fd8\u6ca1\u6709\u88ab\u5360\u7528\uff1b\u6570\u636e\u5e93\u7684\u5bc6\u7801\u5c3d\u91cf\u590d\u6742\uff1bCC_WEB_PORT \u548c CC_SOCKET_PORT \u8fd9\u4e24\u4e2a\u503c\u5c3d\u91cf\u4e0d\u8981\u53d8\u66f4\uff1b\u751f\u4ea7\u73af\u5883\u4e0b LOG_LEVEL \u4f7f\u7528\u81f3\u5c11 WARN \u7684\u7ea7\u522b"),"\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u4e00\u4e9b\u4e1a\u52a1\u529f\u80fd\u76f8\u5173\u914d\u7f6e\u7684\u73af\u5883\u53d8\u91cf\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TONGJI_BAIDU_SITEKEY"),(0,l.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528",(0,l.kt)("a",{parentName:"td",href:"https://tongji.baidu.com/web/welcome/login"},"\u767e\u5ea6\u7edf\u8ba1")," \u8bb0\u5f55\u548c\u67e5\u770b\u9875\u9762\u8bbf\u95ee\u60c5\u51b5\uff0c\u9ed8\u8ba4\u4e0d\u8bb0\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EXTRAS_LOGIN_BANNER"),(0,l.kt)("td",{parentName:"tr",align:null},"off"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u9875\u4e0a\u65b9\u5c55\u793a\u901a\u77e5\u7684\u5185\u5bb9\uff0c\u9ed8\u8ba4(off)\u4e0d\u5c55\u793a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EXTRAS_LOGIN_CHATBOX"),(0,l.kt)("td",{parentName:"tr",align:null},"off"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u9875\u652f\u6301\u52a0\u5165\u4e00\u4e2a\u6625\u677e\u5ba2\u670d\u7f51\u9875\u6e20\u9053\u804a\u5929\u6309\u94ae\uff0c\u6bd4\u5982 ",(0,l.kt)("a",{parentName:"td",href:"https://oh-my.cskefu.com/im/xxx.html%EF%BC%8C%E9%BB%98%E8%AE%A4(off"},"https://oh-my.cskefu.com/im/xxx.html\uff0c\u9ed8\u8ba4(off"),")\u4e0d\u5c55\u793a")))),(0,l.kt)("h2",{id:"\u7ba1\u7406\u547d\u4ee4"},"\u7ba1\u7406\u547d\u4ee4"),(0,l.kt)("h3",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Bash"},"cd cskefu                        # \u8fdb\u5165\u4e0b\u8f7d\u540e\u7684\u6587\u4ef6\u5939\ndocker-compose pull                  # \u62c9\u53d6\u955c\u50cf\ndocker-compose up -d contact-center  # \u542f\u52a8\u670d\u52a1\n")),(0,l.kt)("h3",{id:"\u67e5\u770b\u670d\u52a1\u72b6\u6001"},"\u67e5\u770b\u670d\u52a1\u72b6\u6001"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Bash"},"docker-compose ps\n")),(0,l.kt)("h3",{id:"\u67e5\u770b\u670d\u52a1\u65e5\u5fd7"},"\u67e5\u770b\u670d\u52a1\u65e5\u5fd7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Bash"},"docker-compose logs -f contact-center\n")),(0,l.kt)("h3",{id:"\u767b\u9646\u7cfb\u7edf"},"\u767b\u9646\u7cfb\u7edf"),(0,l.kt)("p",null,"\u5728\u65e5\u5fd7\u4e2d\uff0c\u67e5\u770b\u5230\u5982\u4e0b\u7c7b\u4f3c\u4fe1\u606f\uff0c\u4ee3\u8868\u670d\u52a1\u5df2\u7ecf\u542f\u52a8\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-\u65e5\u5fd7"},"INFO  c.c.socketio.SocketIOServer - SocketIO server started at port: 8036 [nioEventLoopGroup-2-1]\nINFO  com.chatopera.cc.Application - Started Application in 35.319 seconds (JVM running for 42.876) [main]\n")),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u4ece\u6d4f\u89c8\u5668\u6253\u5f00 ",(0,l.kt)("a",{parentName:"p",href:"http://YOUR_IP:CC_WEB_PORT/"},"http://YOUR_IP:CC_WEB_PORT/")," \u8bbf\u95ee\u670d\u52a1\u3002\n\u9ed8\u8ba4\u7ba1\u7406\u5458\u8d26\u53f7\uff1a admin \u5bc6\u7801\uff1a admin1234"),(0,l.kt)("h3",{id:"\u5173\u95ed\u670d\u52a1"},"\u5173\u95ed\u670d\u52a1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Bash"},"docker-compose down\n")),(0,l.kt)("h3",{id:"\u91cd\u542f\u670d\u52a1"},"\u91cd\u542f\u670d\u52a1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Bash"},"docker-compose restart\n")),(0,l.kt)("h2",{id:"\u65e0\u7f51\u7edc\u8bbf\u95ee\u6761\u4ef6\u4e0b\u90e8\u7f72"},"\u65e0\u7f51\u7edc\u8bbf\u95ee\u6761\u4ef6\u4e0b\u90e8\u7f72"),(0,l.kt)("h3",{id:"\u5229\u7528\u5176\u4ed6\u673a\u5668"},"\u5229\u7528\u5176\u4ed6\u673a\u5668"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u627e\u4e00\u4e2a\u7f51\u7edc\u6761\u4ef6\u597d\u7684\u7535\u8111\u6216\u670d\u52a1\u5668\uff0c\u5b89\u88c5 docker\u3002"),(0,l.kt)("h3",{id:"\u4e0b\u8f7d\u955c\u50cf"},"\u4e0b\u8f7d\u955c\u50cf"),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u5728\u65b0\u7684\u7535\u8111\u4e0b\u8f7d\u955c\u50cf\u3002"),(0,l.kt)("p",null,"\u65b9\u6cd5\uff0c\u6267\u884c\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker pull IMAGE_NAME\n")),(0,l.kt)("p",null,"IMAGE_NAME \u53c2\u8003 docker-compose.yml \u4e2d\u5404\u670d\u52a1\u7684 image\uff0c\n\u6bd4\u5982\uff1a\n",(0,l.kt)("inlineCode",{parentName:"p"},"docker pull cskefu/contact-center:develop")),(0,l.kt)("p",null,"\u6625\u677e\u5ba2\u670d\u5305\u542b\u591a\u4e2a image\u3002"),(0,l.kt)("h3",{id:"\u5bfc\u51fa\u955c\u50cf"},"\u5bfc\u51fa\u955c\u50cf"),(0,l.kt)("p",null,"\u4e0b\u8f7d\u597d image \u540e\uff0c\u5bfc\u51fa image\uff0c\u5c06\u6240\u6709 image \u4f7f\u7528\u4e0b\u9762\u547d\u4ee4\u5bfc\u51fa\u4e3a tgz \u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker save cskefu/contact-center:develop > cc.docker.tgz\n")),(0,l.kt)("h3",{id:"\u4e0a\u4f20\u955c\u50cf"},"\u4e0a\u4f20\u955c\u50cf"),(0,l.kt)("p",null,"\u5c06\u6240\u6709\u5bfc\u51fa\u7684 image tgz \u6587\u4ef6\u4e0a\u4f20\u5230\u76ee\u6807\u90e8\u7f72\u7684\u670d\u52a1\u5668\n\u5373\u7f51\u7edc\u6761\u4ef6\u4e0d\u597d\u7684\u673a\u5668\uff0c\u6bd4\u5982\u7528 FTP \u5de5\u5177\u6216 SCP \u547d\u4ee4\u3002"),(0,l.kt)("h3",{id:"\u5b89\u88c5\u955c\u50cf"},"\u5b89\u88c5\u955c\u50cf"),(0,l.kt)("p",null,"\u4e0a\u4f20\u5230\u76ee\u6807\u673a\u5668\u540e\uff0c\u5b89\u88c5\u955c\u50cf\n",(0,l.kt)("inlineCode",{parentName:"p"},"docker load < cc.docker.tgz")),(0,l.kt)("p",null,"\u5b89\u88c5\u6210\u529f\u540e\uff0c\u4f1a\u63d0\u793a\u3002"),(0,l.kt)("h3",{id:"\u542f\u52a8\u670d\u52a1-1"},"\u542f\u52a8\u670d\u52a1"),(0,l.kt)("p",null,"\u542f\u52a8\u6625\u677e\u5ba2\u670d\uff0c\u53c2\u8003\u672c\u7ae0\u4ee5\u4e0a\u5185\u5bb9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd cskefu # \u6e90\u6587\u4ef6\u4e0b\u8f7d\u5730\u5740\ndocker-compose up -d contact-center\n")),(0,l.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/docs/initialization"},"\u7cfb\u7edf\u521d\u59cb\u5316\uff1a\u5efa\u7acb\u7ec4\u7ec7\u673a\u6784\u3001\u8d26\u53f7\u3001\u5750\u5e2d\u548c\u89d2\u8272\u7b49"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/docs/osc/maintainence"},"\u7cfb\u7edf\u7ef4\u62a4\uff1a\u5907\u4efd\u3001\u5347\u7ea7\u548c\u6062\u590d\u56de\u9000\u7b49"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://chatopera.blog.csdn.net/article/details/105820829"},"\u6625\u677e\u5ba2\u670d\u914d\u7f6e CDN \u548c HTTPS | \u6625\u677e\u5ba2\u670d")))),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-initdoc"},"\u7cfb\u7edf\u521d\u59cb\u5316\u6587\u6863\uff0c",(0,l.kt)("a",{parentName:"li",href:"https://docs.cskefu.com/docs/initialization/"},"https://docs.cskefu.com/docs/initialization/"),(0,l.kt)("a",{parentName:"li",href:"#fnref-initdoc",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);