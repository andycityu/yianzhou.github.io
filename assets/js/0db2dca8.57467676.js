"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2613],{42528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=n(87462),l=(n(67294),n(3905));n(61839);const s={},r="Instruments",o={unversionedId:"instruments",id:"instruments",title:"Instruments",description:"Profile \u8981\u4f7f\u7528 Release \u7f16\u8bd1\u8bbe\u7f6e\uff0c\u539f\u56e0\u662f\uff1a",source:"@site/docs/apple/instruments.md",sourceDirName:".",slug:"/instruments",permalink:"/docs/apple/instruments",draft:!1,editUrl:"https://github.com/yianzhou/yianzhou.github.io/docs/apple/instruments.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP",permalink:"/docs/apple/http"},next:{title:"\u5361\u987f",permalink:"/docs/apple/lag"}},a={},u=[{value:"\u65b9\u6cd5\u4e00\uff1a\u4f7f\u7528 Comand + I\uff08\u4e0d\u63a8\u8350\uff09",id:"\u65b9\u6cd5\u4e00\u4f7f\u7528-comand--i\u4e0d\u63a8\u8350",level:2},{value:"\u65b9\u6cd5\u4e8c\uff1a\u5355\u72ec\u4f7f\u7528 Instruments \u8fdb\u884c Profile\uff08\u63a8\u8350\uff09",id:"\u65b9\u6cd5\u4e8c\u5355\u72ec\u4f7f\u7528-instruments-\u8fdb\u884c-profile\u63a8\u8350",level:2},{value:"\u65b9\u6cd5\u4e09\uff1a\u4f7f\u7528 xctrace",id:"\u65b9\u6cd5\u4e09\u4f7f\u7528-xctrace",level:2},{value:"\u7b26\u53f7\u89e3\u6790",id:"\u7b26\u53f7\u89e3\u6790",level:2}],d={toc:u};function c(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"instruments"},"Instruments"),(0,l.kt)("p",null,"Profile \u8981\u4f7f\u7528 Release \u7f16\u8bd1\u8bbe\u7f6e\uff0c\u539f\u56e0\u662f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"release \u5305\u7684\u6027\u80fd\u8ddf\u7ebf\u4e0a\u662f\u6700\u4e3a\u63a5\u8fd1\u7684\uff0c\u5177\u6709\u8f83\u9ad8\u51c6\u786e\u6027"),(0,l.kt)("li",{parentName:"ul"},"ci \u5305\u91cc\u5f00\u542f\u4e86\u5927\u91cf\u8c03\u8bd5\u5de5\u5177\u548c\u8c03\u8bd5\u4ee3\u7801\uff0c\u4e00\u65b9\u9762\u4f1a\u8ba9\u6027\u80fd\u5931\u771f\uff1b\u53e6\u4e00\u65b9\u9762\u7531\u4e8e\u8fd9\u4e9b\u5de5\u5177\u53ef\u80fd hook \u4e86\u4e00\u4e9b\u7cfb\u7edf\u5173\u952e\u8c03\u7528\uff0c\u53ef\u80fd\u5bfc\u81f4 Instrument \u6293\u53d6\u4e0d\u5230\u6570\u636e")),(0,l.kt)("h2",{id:"\u65b9\u6cd5\u4e00\u4f7f\u7528-comand--i\u4e0d\u63a8\u8350"},"\u65b9\u6cd5\u4e00\uff1a\u4f7f\u7528 Comand + I\uff08\u4e0d\u63a8\u8350\uff09"),(0,l.kt)("p",null,"\u5728 Xcode \u4e2d\u4f7f\u7528\u5feb\u6377\u952e Comand + I \u4f1a\u542f\u52a8 Instruments\uff0c\u4e4b\u540e\u9009\u62e9\u5bf9\u5e94\u7684\u6a21\u677f\u5373\u53ef\u8fdb\u884c Profile\u3002\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5\uff0cXcode \u548c Instrument \u4f1a\u81ea\u52a8\u5e2e\u4f60\u505a\u597d\u7b26\u53f7\u5316\uff0c\u5728 Instrument \u4e2d\u70b9\u51fb\u5806\u6808\uff0c\u751a\u81f3\u4f1a\u5e2e\u4f60\u5728 Xcode \u4e2d\u76f4\u63a5\u5b9a\u4f4d\u5230\u5bf9\u5e94\u4ee3\u7801\u6587\u4ef6\u548c\u5bf9\u5e94\u884c\u6570\u3002\u8fd9\u79cd\u65b9\u6cd5\u7b80\u5355\u76f4\u63a5\uff0c\u4e5f\u662f\u82f9\u679c\u63a8\u8350\u7684\u65b9\u5f0f\uff0c\u4f46\u8fd9\u79cd\u65b9\u5f0f\u5728\u8d85\u5927\u578b\u9879\u76ee\u51e0\u65e0\u53ef\u7528\u6027\uff0c\u5f88\u53ef\u80fd\u9047\u5230\u5361\u6b7b\u3001\u65e0\u54cd\u5e94\u7b49\u60c5\u51b5\uff0c\u6240\u4ee5\u4e0d\u63a8\u8350\uff0c\u5e73\u5e38\u6d4b\u8bd5 Demo \u4e4b\u7c7b\u7684\u53ef\u4ee5\u7528\u8fd9\u79cd\u65b9\u5f0f\u3002"),(0,l.kt)("h2",{id:"\u65b9\u6cd5\u4e8c\u5355\u72ec\u4f7f\u7528-instruments-\u8fdb\u884c-profile\u63a8\u8350"},"\u65b9\u6cd5\u4e8c\uff1a\u5355\u72ec\u4f7f\u7528 Instruments \u8fdb\u884c Profile\uff08\u63a8\u8350\uff09"),(0,l.kt)("p",null,"\u5355\u72ec\u4f7f\u7528 Instrument \u8fdb\u884c Profile \u76f8\u8f83\u4e8e\u65b9\u6cd5\u4e00\uff0c\u53ef\u7528\u6027\u9ad8\u4e86\u4e0d\u5c11\uff0c\u4f46\u9700\u8981\u89e3\u51b3 debug \u6743\u9650\u548c\u7b26\u53f7\u5316\u7684\u95ee\u9898\uff0c\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Xcode -> Open Developer Tool \u4e2d\u6253\u5f00 Instrument"),(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u8981 Profile \u7684\u8bbe\u5907\u548c\u5e94\u7528\uff0c\u4ee5\u53ca Instrument \u6a21\u677f"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u5f55\u5236\u754c\u9762\u6309\u4f4f Option + \u70b9\u51fb Record \u6309\u94ae\uff0c\u8fdb\u5165 Recording Options \u754c\u9762\u53ef\u4ee5\u5bf9\u5f55\u5236\u8fdb\u884c\u66f4\u7cbe\u7ec6\u7684\u63a7\u5236\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(43773).Z,width:"1148",height:"1404"})),(0,l.kt)("p",null,"\u5982\u679c\u8dd1 Instruments \u611f\u89c9\u5f88\u5361\uff0c\u6216\u8005\u4e22\u5931\u6570\u636e\uff1a\u5728 Recording Options \u4e2d\u5c06 Recording Mode \u8bbe\u7f6e\u4e3a Deferred \u8bd5\u8bd5\u3002"),(0,l.kt)("p",null,"\u5f55\u5236\u5b8c\u8bb0\u5f97\u4fdd\u5b58 trace \u6587\u4ef6\uff01"),(0,l.kt)("h2",{id:"\u65b9\u6cd5\u4e09\u4f7f\u7528-xctrace"},"\u65b9\u6cd5\u4e09\uff1a\u4f7f\u7528 xctrace"),(0,l.kt)("p",null,"xctrace \u662f Instrument \u7684 CLI\u3002\u6709\u4e00\u4e2a\u7b80\u5355\u6613\u7528\u7684\u65b9\u6cd5\u53ef\u4ee5\u7b26\u53f7\u5316 trace \u6587\u4ef6\uff0c\u5373\u7528 xctrace symbolicate \u547d\u4ee4\u76f4\u63a5\u7b26\u53f7\u5316\u6574\u4e2a trace \u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u63a8\u8350\u7684\u91cd\u7b7e\u540d\u5de5\u5177\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AloneMonkey/MonkeyDev"},"GitHub - AloneMonkey/MonkeyDev: CaptainHook Tweak\u3001Logos Tweak and Command-line Tool\u3001Patch iOS Apps, Without Jailbreak.")),(0,l.kt)("h2",{id:"\u7b26\u53f7\u89e3\u6790"},"\u7b26\u53f7\u89e3\u6790"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(30969).Z,width:"2388",height:"1190"})),(0,l.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u4ea7\u51fa\u7b26\u53f7\u8868\uff0c\u9700\u8981\u5c06 Build Settings \u4e2d\u5bf9\u5e94\u7684\u914d\u7f6e\u6539\u4e3a DWARF with DSYM File\uff0c\u518d\u6b21 build \u751f\u6210\u7b26\u53f7\u8868\u3002\u7136\u540e\u5728 Xcode - Product - Show Build Folder in Finder \u4e2d\u627e\u5230\u7b26\u53f7\u8868\u3002"))}c.isMDXComponent=!0},30969:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/202ECC56-05F5-4488-A89D-CE1F38BD25CF-685932df72e8ddb098d09320cccdfd18.png"},43773:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/5A0B6AEB-423D-40CD-9D6B-C9DACBB2D983-d3b8cf5f850f907b2161a0c5a49e6b92.png"}}]);