(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[805],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(n),p=a,d=h["".concat(c,".").concat(p)]||h[p]||m[p]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8707:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>l,toc:()=>u,default:()=>h});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=["components"],i={id:"nested-arguments",title:"Nested Resolvers and Shared Arguments",original_id:"nested-arguments"},c=void 0,l={unversionedId:"schema-generator/writing-schemas/nested-arguments",id:"version-3.x.x/schema-generator/writing-schemas/nested-arguments",isDocsHomePage:!1,title:"Nested Resolvers and Shared Arguments",description:"There are a few ways in which shared arguments can be accessed from different resolver levels. Say we have the following schema:",source:"@site/versioned_docs/version-3.x.x/schema-generator/writing-schemas/nested-arguments.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/nested-arguments",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/nested-arguments",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/writing-schemas/nested-arguments.md",version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1633724179,formattedLastUpdatedAt:"10/8/2021",frontMatter:{id:"nested-arguments",title:"Nested Resolvers and Shared Arguments",original_id:"nested-arguments"},sidebar:"version-3.x.x/docs",previous:{title:"Annotations",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/annotations"},next:{title:"Generator Configuration",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config"}},u=[{value:"DataFetchingEnvironment",id:"datafetchingenvironment",children:[]},{value:"GraphQL Context",id:"graphql-context",children:[]},{value:"Excluding Arguments from the Schema",id:"excluding-arguments-from-the-schema",children:[]},{value:"Spring Integration",id:"spring-integration",children:[]}],m={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are a few ways in which shared arguments can be accessed from different resolver levels. Say we have the following schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  findUser(id: String!): User\n}\n\ntype User {\n  photos(numberOfPhotos: Int!): [Photo!]!\n}\n\ntype Photo {\n  url: String!\n}\n\n")),(0,o.kt)("p",null,"In Kotlin code, when we are resolving  ",(0,o.kt)("inlineCode",{parentName:"p"},"photos"),", if we want access to the parent field ",(0,o.kt)("inlineCode",{parentName:"p"},"findUser")," and its arguments there\nare a couple ways we can access it:"),(0,o.kt)("h2",{id:"datafetchingenvironment"},"DataFetchingEnvironment"),(0,o.kt)("p",null,"You can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," as an argument. This class will be ignored by the schema generator and will allow\nyou to view the entire query sent to the server. See more in the ",(0,o.kt)("a",{parentName:"p",href:"../execution/data-fetching-environment"},"DataFetchingEnvironment documentation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nclass User {\n    fun photos(environment: DataFetchingEnvironment, numberOfPhotos: Int): List<Photo> {\n      val username = environment.executionStepInfo.parent.arguments["id"]\n      return getPhotosFromDataSource(username, numberOfPhotos)\n    }\n}\n\n')),(0,o.kt)("h2",{id:"graphql-context"},"GraphQL Context"),(0,o.kt)("p",null,"You can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," as an argument. This class will be ignored by the schema generator and will allow you to\nview the context object you set up in the data fetchers. See more in the ",(0,o.kt)("a",{parentName:"p",href:"../execution/contextual-data"},"GraphQLContext documentation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass User {\n    fun photos(context: MyContextObject, numberOfPhotos: Int): List<Photo> {\n      val userId = context.getDataFromMyCustomFunction()\n      return getPhotosFromDataSource(userId, numberOfPhotos)\n    }\n}\n\n")),(0,o.kt)("h2",{id:"excluding-arguments-from-the-schema"},"Excluding Arguments from the Schema"),(0,o.kt)("p",null,"You can construct the child objects by passing down arguments as non-public fields or annotate the argument with ",(0,o.kt)("a",{parentName:"p",href:"../customizing-schemas/excluding-fields"},"@GraphQLIgnore")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass User(private val userId: String) {\n\n    fun photosProperty(numberOfPhotos: Int): List<Photo> {\n      return getPhotosFromDataSource(userId, numberOfPhotos)\n    }\n\n    fun photosIgnore(@GraphQLIgnore userId: String, numberOfPhotos: Int): List<Photo> {\n      return getPhotosFromDataSource(userId, numberOfPhotos)\n    }\n}\n\n")),(0,o.kt)("h2",{id:"spring-integration"},"Spring Integration"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/spring-server/spring-schema"},"Writing Schemas with Spring")," for integration details."))}h.isMDXComponent=!0}}]);