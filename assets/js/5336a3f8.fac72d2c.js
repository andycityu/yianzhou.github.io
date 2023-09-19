"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[918],{63468:(e,t,p)=>{p.r(t),p.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=p(87462),n=(p(67294),p(3905));p(61839);const a={},l="\u5305\u4f53\u5927\u5c0f\u4f18\u5316",o={unversionedId:"app-size",id:"app-size",title:"\u5305\u4f53\u5927\u5c0f\u4f18\u5316",description:"Apple - Reducing Your App\u2019s Size",source:"@site/docs/apple/app-size.md",sourceDirName:".",slug:"/app-size",permalink:"/docs/apple/app-size",draft:!1,editUrl:"https://github.com/yianzhou/yianzhou.github.io/docs/apple/app-size.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u542f\u52a8\u65f6\u957f\u4f18\u5316",permalink:"/docs/apple/app-launch"},next:{title:"Apple Bugs",permalink:"/docs/apple/apple-bugs"}},r={},s=[{value:"App Thinning",id:"app-thinning",level:2},{value:"\u6e05\u7406\u65e0\u7528\u7684\u8d44\u6e90\u6587\u4ef6",id:"\u6e05\u7406\u65e0\u7528\u7684\u8d44\u6e90\u6587\u4ef6",level:2},{value:"\u8d44\u6e90\u538b\u7f29",id:"\u8d44\u6e90\u538b\u7f29",level:2},{value:"\u4ee3\u7801\u7626\u8eab",id:"\u4ee3\u7801\u7626\u8eab",level:2},{value:"\u5de5\u4f5c\u6d41\u7a0b\u5efa\u8bbe",id:"\u5de5\u4f5c\u6d41\u7a0b\u5efa\u8bbe",level:2}],u={toc:s};function d(e){let{components:t,...p}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5305\u4f53\u5927\u5c0f\u4f18\u5316"},"\u5305\u4f53\u5927\u5c0f\u4f18\u5316"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xcode/reducing_your_app_s_size"},"Apple - Reducing Your App\u2019s Size")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/peripheryapp/periphery"},"periphery")," - A tool to identify unused code in Swift projects."),(0,n.kt)("h2",{id:"app-thinning"},"App Thinning"),(0,n.kt)("p",null,"\u4e0d\u540c\u7684\u8bbe\u5907\u5206\u53d1\u4e0d\u540c\u5206\u8fa8\u7387\u7684\u8d44\u6e90\u6587\u4ef6\uff08\u901a\u8fc7 xcassets \u7ba1\u7406\u8d44\u6e90\u6587\u4ef6\uff09\u3001\u6839\u636e\u4e0d\u540c\u82af\u7247\u7684\u6307\u4ee4\u96c6\u4f18\u5316\u4e8c\u8fdb\u5236\u6587\u4ef6\uff08Xcode \u9ed8\u8ba4\uff09\u3001\u5f00\u542f Bitcode \uff08\u9700\u8bbe\u7f6e\uff0c\u4f18\u5316\u4e0d\u660e\u663e\uff0c\u6709\u65f6\u8981\u4f9d\u8d56\u7b2c\u4e09\u65b9\uff09\u7b49\u3002"),(0,n.kt)("h2",{id:"\u6e05\u7406\u65e0\u7528\u7684\u8d44\u6e90\u6587\u4ef6"},"\u6e05\u7406\u65e0\u7528\u7684\u8d44\u6e90\u6587\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"find")," \u547d\u4ee4\u627e\u5230\u5de5\u7a0b\u76ee\u5f55\u4e0b\u6240\u6709\u7684\u8d44\u6e90\u6587\u4ef6\uff0c\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u51fa\u6e90\u7801\u4e2d\u7528\u5230\u7684\u8d44\u6e90\uff0c\u786e\u8ba4\u5e76\u5220\u9664\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5f00\u6e90\u5de5\u5177 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tinymind/LSUnusedResources"},"LSUnusedResources"),"\u3002")),(0,n.kt)("h2",{id:"\u8d44\u6e90\u538b\u7f29"},"\u8d44\u6e90\u538b\u7f29"),(0,n.kt)("p",null,"GIF \u8f6c\u4e3a WebP\uff0c\u53ef\u51cf\u5c11\u5927\u91cf\u4f53\u79ef\uff01Google \u63d0\u4f9b\u7684 WebP \u538b\u7f29\u5de5\u5177\u53ef\u4ee5\u5c06\u5176\u4ed6\u56fe\u7247\u683c\u5f0f\u8f6c\u4e3a WebP\u3002\u663e\u793a\u56fe\u7247\u65f6\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/carsonmcdonald/WebP-iOS-example"},"libwebp")," \u8fdb\u884c\u89e3\u6790\u3002"),(0,n.kt)("p",null,"\u4e0d\u8fc7\uff0cWebP \u5728 CPU \u6d88\u8017\u548c\u89e3\u7801\u65f6\u95f4\u4e0a\u4f1a\u6bd4 PNG \u9ad8\u4e24\u500d\u3002\u5c0f\u4e8e 100KB \u7684\u56fe\u7247\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://tinypng.com/"},"TinyPNG")," \u7b49\u5de5\u5177\u538b\u7f29\u3002"),(0,n.kt)("h2",{id:"\u4ee3\u7801\u7626\u8eab"},"\u4ee3\u7801\u7626\u8eab"),(0,n.kt)("p",null,"\u53ef\u6267\u884c\u6587\u4ef6\u5c31\u662f Mach-O \u6587\u4ef6\uff0c\u5176\u5927\u5c0f\u662f\u7531\u4ee3\u7801\u91cf\u51b3\u5b9a\u7684\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5bf9\u53ef\u6267\u884c\u6587\u4ef6\u8fdb\u884c\u7626\u8eab\uff0c\u5c31\u662f\u627e\u5230\u5e76\u5220\u9664\u65e0\u7528\u4ee3\u7801\u7684\u8fc7\u7a0b\u3002"),(0,n.kt)("p",null,"\u65b9\u6cd5\u4e00\u3001LinkMap"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u627e\u51fa\u65b9\u6cd5\u548c\u7c7b\u7684\u5168\u96c6\uff1b\u7136\u540e\uff0c\u627e\u5230",(0,n.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u5230"),"\u7684\u65b9\u6cd5\u548c\u7c7b\uff1b\u6700\u540e\uff0c\u7531\u4eba\u5de5\u786e\u8ba4\u5220\u9664\u65e0\u7528\u4ee3\u7801\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u5206\u6790 LinkMap \u6765\u83b7\u5f97\u6240\u6709\u7684\u4ee3\u7801\u7c7b\u548c\u65b9\u6cd5\u7684\u4fe1\u606f\u3002\u83b7\u53d6 LinkMap \u53ef\u4ee5\u901a\u8fc7\u5c06 Build Setting \u91cc\u7684 Write Link Map File \u8bbe\u7f6e\u4e3a Yes\uff0c\u7136\u540e\u6307\u5b9a Path to Link Map File \u7684\u8def\u5f84\u5c31\u53ef\u4ee5\u5f97\u5230\u6bcf\u6b21\u7f16\u8bd1\u540e\u7684 LinkMap \u6587\u4ef6\u4e86\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gdbinit/MachOView"},"MachOView")," \u5de5\u5177\u53ef\u4ee5\u67e5\u770b Mach-O \u6587\u4ef6\u91cc\u7684\u4fe1\u606f\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u67e5\u770b ",(0,n.kt)("inlineCode",{parentName:"li"},"__objc_selrefs"),"\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"__objc_classrefs"),"\u548c",(0,n.kt)("inlineCode",{parentName:"li"},"__objc_superrefs")," \u8fd9\u4e09\u4e2a section\u3002\u53ef\u4ee5\u627e\u5230 Mach-O \u6587\u4ef6\u91cc\u7528\u5230\u7684\u65b9\u6cd5\u548c\u7c7b\u3002")),(0,n.kt)("p",null,"\u65b9\u6cd5\u4e8c\u3001\u901a\u8fc7 ",(0,n.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/objc/"},"AppCode")," \u627e\u51fa\u65e0\u7528\u4ee3\u7801"),(0,n.kt)("p",null,"\u5982\u679c\u5de5\u7a0b\u91cf\u4e0d\u662f\u5f88\u5927\u7684\u8bdd\uff0c\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528 AppCode \u6765\u505a\u5206\u6790\u3002\u90a3\u4e9b\u4ee3\u7801\u91cf\u8fbe\u5230\u767e\u4e07\u884c\u7684\u56e2\u961f\uff0c\u5219\u4f1a\u81ea\u5df1\u901a\u8fc7 Clang \u9759\u6001\u5206\u6790\u6765\u5f00\u53d1\u5de5\u5177\uff0c\u53bb\u68c0\u67e5\u65e0\u7528\u7684\u65b9\u6cd5\u548c\u7c7b\u3002"),(0,n.kt)("p",null,"\u65b9\u6cd5\u4e09\u3001\u627e\u5230\u65e0\u7528\u7684\u529f\u80fd"),(0,n.kt)("p",null,"\u5728 App \u7684\u4e0d\u65ad\u8fed\u4ee3\u8fc7\u7a0b\u4e2d\uff0c\u4e1a\u52a1\u529f\u80fd\u9700\u6c42\u4e0d\u65ad\u66ff\u6362\uff0c\u4f1a\u7559\u4e0b\u5f88\u591a\u65e0\u7528\u4ee3\u7801\u3002\u8fd9\u4e9b\u4ee3\u7801\u5728\u6267\u884c\u9759\u6001\u68c0\u67e5\u65f6\u4f1a\u88ab\u7528\u5230\uff0c\u4f46\u662f\u7ebf\u4e0a\u53ef\u80fd\u8fde\u8fd9\u4e9b\u8001\u529f\u80fd\u7684\u5165\u53e3\u90fd\u6ca1\u6709\u4e86\uff0c\u6ca1\u6709\u673a\u4f1a\u88ab\u7528\u6237\u7528\u5230\u3002\u8fd9\u4e9b\u65e0\u7528\u529f\u80fd\u76f8\u5173\u7684\u4ee3\u7801\u4e5f\u662f\u53ef\u4ee5\u5220\u9664\u7684\u3002\u901a\u8fc7 Runtime \u68c0\u67e5\u7c7b\u662f\u5426\u771f\u6b63\u88ab\u4f7f\u7528\u8fc7\u3002"),(0,n.kt)("h2",{id:"\u5de5\u4f5c\u6d41\u7a0b\u5efa\u8bbe"},"\u5de5\u4f5c\u6d41\u7a0b\u5efa\u8bbe"),(0,n.kt)("p",null,"\u5305\u4f53\u589e\u91cf\u5927\u5c0f\u68c0\u67e5\uff0c\u5229\u7528\u6301\u7eed\u96c6\u6210\uff0c\u53ca\u4ee3\u7801\u5408\u5165\u628a\u63a7\u3002"),(0,n.kt)("p",null,"\u8d44\u6e90\u538b\u7f29\u7528\u6d41\u7a0b\u6765\u89c4\u8303\u3002"),(0,n.kt)("p",null,"\u5b9a\u671f\u505a\u65e0\u7528\u4ee3\u7801\u68c0\u67e5\u3002"))}d.isMDXComponent=!0}}]);