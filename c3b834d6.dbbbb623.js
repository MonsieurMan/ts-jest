(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),a=(n(0),n(97)),i={title:"TypeScript Config option"},c={unversionedId:"options/tsconfig",id:"options/tsconfig",isDocsHomePage:!1,title:"TypeScript Config option",description:"The tsconfig option allows you to define which tsconfig JSON file to use. An inline compiler options object can also be specified instead of a file path.",source:"@site/docs/options/tsconfig.md",slug:"/options/tsconfig",permalink:"/ts-jest/docs/options/tsconfig",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/docs/docs/options/tsconfig.md",version:"current"},s=[{value:"Examples",id:"examples",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig")," option allows you to define which ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig")," JSON file to use. An inline ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"}),"compiler options")," object can also be specified instead of a file path."),Object(a.b)("p",null,"By default ",Object(a.b)("inlineCode",{parentName:"p"},"ts-jest")," will try to find a ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," in your project. If it cannot find one, it will use the default TypeScript ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"}),"compiler options"),"; except, ",Object(a.b)("inlineCode",{parentName:"p"},"ES2015")," is used as ",Object(a.b)("inlineCode",{parentName:"p"},"target")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},"ES5"),"."),Object(a.b)("p",null,"If you need to use defaults and force ",Object(a.b)("inlineCode",{parentName:"p"},"ts-jest")," to use the defaults even if there is a ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," in your project, you can set this option to ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("h4",{id:"path-to-a-tsconfig-file"},"Path to a ",Object(a.b)("inlineCode",{parentName:"h4"},"tsconfig")," file"),Object(a.b)("p",null,"The path should be relative to the current working directory where you start Jest from. You can also use ",Object(a.b)("inlineCode",{parentName:"p"},"<rootDir>")," in the path to start from the project root dir."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      tsconfig: 'tsconfig.test.json'\n    }\n  }\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json5"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "tsconfig": "tsconfig.test.json"\n      }\n    }\n  }\n}\n')),Object(a.b)("h4",{id:"inline-compiler-options"},"Inline compiler options"),Object(a.b)("p",null,"Refer to the TypeScript ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"}),"compiler options")," for reference.\nIt's basically the same object you'd put in your ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json"),"'s ",Object(a.b)("inlineCode",{parentName:"p"},"compilerOptions"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      tsconfig: {\n        importHelpers: true\n      }\n    }\n  }\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json5"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "tsconfig": {\n          "importHelpers": true\n        }\n      }\n    }\n  }\n}\n')),Object(a.b)("h4",{id:"disable-auto-lookup"},"Disable auto-lookup"),Object(a.b)("p",null,"By default ",Object(a.b)("inlineCode",{parentName:"p"},"ts-jest")," will try to find a ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," in your project. But you may not want to use it at all and keep TypeScript default options. You can achieve this by setting ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig")," to ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      tsconfig: false\n    }\n  }\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json5"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "tsconfig": false\n      }\n    }\n  }\n}\n')))}l.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),f=o,j=b["".concat(i,".").concat(f)]||b[f]||u[f]||a;return n?r.a.createElement(j,c(c({ref:t},p),{},{components:n})):r.a.createElement(j,c({ref:t},p))}));function j(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);