(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{232:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(9),r=(a(0),a(271)),o={id:"migration-from-tools-v5",title:"Migration from v4 & v5",sidebar_label:"From v4 & v5",description:"Migration from GraphQL Tools v4 & v5"},l={id:"migration-from-tools-v5",isDocsHomePage:!1,title:"Migration from v4 & v5",description:"Migration from GraphQL Tools v4 & v5",source:"@site/docs/migration-from-tools-v5.md",permalink:"/docs/migration-from-tools-v5",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/migration-from-tools-v5.md",sidebar_label:"From v4 & v5",sidebar:"someSidebar",previous:{title:"Optimizing operations using Relay Compiler",permalink:"/docs/relay-operation-optimizer"},next:{title:"Migration from GraphQL Toolkit",permalink:"/docs/migration-from-toolkit"}},c=[],s={rightToc:c};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If you're using old versions of GraphQL Tools, it is easy to migrate from those versions to v6 and later. But you need to install specific packages according to your needs instead of single large ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-tools")," package because we switched to monorepo."),Object(r.b)("h4",{id:"schema-generation-and-decoration-api-graphql-toolsschema"},"Schema Generation and Decoration API (",Object(r.b)("inlineCode",{parentName:"h4"},"@graphql-tools/schema"),")"),Object(r.b)("p",null,"Majority of schema modification functions has been renamed and they now return new schemas without editing the original schema, rather than modifying the original schema in place. The return value of the function has the new schema:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"makeExecutableSchema")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"addResolveFunctionsToSchema")," => ",Object(r.b)("inlineCode",{parentName:"li"},"addResolversToSchema")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"attachDirectiveResolvers")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"addSchemaLevelResolveFunctions")," => ",Object(r.b)("inlineCode",{parentName:"li"},"addSchemaLevelResolver")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"addCatchUndefinedToSchema")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"addErrorLoggingToSchema")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"addMockFunctionsToSchema")," => ",Object(r.b)("inlineCode",{parentName:"li"},"addMocksToSchema")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"addConnectorsToContext")," has been deprecated, attaching context manually is clearer"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"See ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ardatan/graphql-tools/issues/140"}),"#140"))))),Object(r.b)("p",null,"Schema modification functions operating on fields now similarly take a schema as a parameter and return a new schema, rather than modifying the passed in typeMap (and requiring manual schema healing)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"appendObjectFields")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"removeObjectFields"))))),Object(r.b)("p",null,"Abstract types that use resolveType properties to return an actual type rather than a type name may be unstable when using graphql-tools, as these types are hidden from the type map and cannot be recreated. These resolveType resolvers should be relatively easy to rewrite to use the name of a known ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLObject")," type included within the schema\u2019s type map. This may limit the use of ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-tools")," for advanced schemas that rely on dynamic abstract types, but greatly simplifies the code base."),Object(r.b)("h4",{id:"remote-schema--wrapping-makeremoteexecutableschema-and-graphql-toolswrap"},"Remote Schema & Wrapping (",Object(r.b)("inlineCode",{parentName:"h4"},"makeRemoteExecutableSchema")," and ",Object(r.b)("inlineCode",{parentName:"h4"},"@graphql-tools/wrap"),")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Remote schema wrapping is now accomplished by using executors and subscribers rather than fetchers and links. Functions that convert links to executors/subscribers are included with @graphql-tools/links. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/remote-schemas"}),"See the docs"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Transform"),"<*>",Object(r.b)("inlineCode",{parentName:"p"},"Field Transforms")," now all take a ",Object(r.b)("inlineCode",{parentName:"p"},"fieldTransformer")," with altered ",Object(r.b)("inlineCode",{parentName:"p"},"FieldTransformer")," type.\nA FieldTransformer receives a field config as an argument rather than a field, so that library users are spared having to call fieldToFieldConfig. A ",Object(r.b)("inlineCode",{parentName:"p"},"FieldTransformer")," can return an array of type ",Object(r.b)("inlineCode",{parentName:"p"},"[string, GraphQLFieldConfig<any, any>]")," instead of an object ",Object(r.b)("inlineCode",{parentName:"p"},"{ name: string, field: GraphQLFieldConfig<any, any> }")," if it wishes to rename the field, the tuple is less verbose and the object is misnamed, it should be { newName, newFieldConfig } anyway."))),Object(r.b)("h4",{id:"schema-stitching-stitchschemas--graphql-toolsstitch"},"Schema Stitching (",Object(r.b)("inlineCode",{parentName:"h4"},"stitchSchemas")," & ",Object(r.b)("inlineCode",{parentName:"h4"},"@graphql-tools/stitch"),")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"stitching has been renamed (",Object(r.b)("inlineCode",{parentName:"li"},"mergeSchemas")," => ",Object(r.b)("inlineCode",{parentName:"li"},"stitchSchemas"),")"),Object(r.b)("li",{parentName:"ul"},"use selectionSet hints instead of fragment hints within the resolver map"),Object(r.b)("li",{parentName:"ul"},"Allows inheritance from interfaces\nresolvers passed to stitchSchemas match type of resolvers passed to makeExecutableSchema (and can no longer be functions). Stitching metadata stored within \u201cmergeInfo\u201d may still be accessed within each resolver as info.mergeInfo"),Object(r.b)("li",{parentName:"ul"},"Custom proxying resolvers now take an options object instead of individual parameters, a breaking change from v5, when the custom proxying resolvers were introduced")),Object(r.b)("h4",{id:"schema-delegation-delegatetoschema--graphql-toolsdelegate"},"Schema Delegation (",Object(r.b)("inlineCode",{parentName:"h4"},"delegateToSchema")," & ",Object(r.b)("inlineCode",{parentName:"h4"},"@graphql-tools/delegate"),")"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"delegateToSchema")," is not available in ",Object(r.b)("inlineCode",{parentName:"p"},"mergeInfo")," anymore. You need to import that ",Object(r.b)("inlineCode",{parentName:"p"},"delegateToSchema")," function from this package instead."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"info.mergeInfo.delegate")," & ",Object(r.b)("inlineCode",{parentName:"li"},"info.mergeInfo.delegateToSchema")," => ",Object(r.b)("inlineCode",{parentName:"li"},"delegateToSchema"))),Object(r.b)("p",null,"Instead of ",Object(r.b)("inlineCode",{parentName:"p"},"mergeInfo")," in ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLResolveInfo"),", we have ",Object(r.b)("inlineCode",{parentName:"p"},"stitchingInfo")," in ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLSchema"),"s extensions."),Object(r.b)("h4",{id:"some-other-utils-graphql-toolsutils"},"Some other utils (",Object(r.b)("inlineCode",{parentName:"h4"},"@graphql-tools/utils"),")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Polyfills for graphql versions earlier than 14.2 have been removed, including ",Object(r.b)("inlineCode",{parentName:"li"},"toConfig")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fieldToFieldConfig")," and ",Object(r.b)("inlineCode",{parentName:"li"},"inputFieldToInputFieldConfig")," functionality is now exported separately, although library users should ideally not have to use them.")))}b.isMDXComponent=!0},271:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},m=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=b(a),d=n,h=m["".concat(o,".").concat(d)]||m[d]||p[d]||r;return a?i.a.createElement(h,l({ref:t},s,{components:a})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);