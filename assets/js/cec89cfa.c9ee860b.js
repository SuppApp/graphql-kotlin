(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9280],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>d,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(r),c=a,m=u["".concat(p,".").concat(c)]||u[c]||g[c]||i;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4170:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>u});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),l=["components"],o={id:"spring-properties",title:"Configuration Properties"},p=void 0,s={unversionedId:"server/spring-server/spring-properties",id:"version-4.x.x/server/spring-server/spring-properties",isDocsHomePage:!1,title:"Configuration Properties",description:"graphql-kotlin-spring-server relies on GraphQLConfigurationProperties",source:"@site/versioned_docs/version-4.x.x/server/spring-server/spring-properties.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-properties",permalink:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-properties",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/server/spring-server/spring-properties.md",version:"4.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1627406397,formattedLastUpdatedAt:"7/27/2021",frontMatter:{id:"spring-properties",title:"Configuration Properties"},sidebar:"version-4.x.x/docs",previous:{title:"Automatically Created Beans",permalink:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-beans"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-subscriptions"}},d=[],g={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," relies on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/servers/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/server/spring/GraphQLConfigurationProperties.kt"},"GraphQLConfigurationProperties"),"\nto provide various customizations of the auto-configuration library. All applicable configuration properties expose ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/configuration-metadata.html"},"configuration\nmetadata")," that provide\ndetails on the supported configuration properties."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"graphql.endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"GraphQL server endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"graphql")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"graphql.packages"),(0,i.kt)("td",{parentName:"tr",align:null},"List of supported packages that can contain GraphQL schema type definitions"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"graphql.federation.enabled"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether to generate federated GraphQL model"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"graphql.federation.tracing.enabled"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether add federated tracing data to the extensions"),(0,i.kt)("td",{parentName:"tr",align:null},"true (if federation enabled)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"graphql.federation.tracing.debug"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean flag to log debug info in the federated tracing"),(0,i.kt)("td",{parentName:"tr",align:null},"false (if federation enabled)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"graphql.introspection.enabled"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether introspection queries are enabled"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"graphql.playground.enabled"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether to enabled Prisma Labs Playground GraphQL IDE"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"graphql.playground.endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"Prisma Labs Playground GraphQL IDE endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"playground")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"graphql.sdl.enabled"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether to expose SDL endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"graphql.sdl.endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"GraphQL SDL endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"sdl")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"graphql.subscriptions.endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"GraphQL subscriptions endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"subscriptions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"graphql.subscriptions.keepAliveInterval"),(0,i.kt)("td",{parentName:"tr",align:null},"Keep the websocket alive and send a message to the client every interval in ms. Defaults to not sending messages"),(0,i.kt)("td",{parentName:"tr",align:null},"null")))))}u.isMDXComponent=!0}}]);