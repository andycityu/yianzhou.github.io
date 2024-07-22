"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5237],{41856:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));a(61839);const l={},o="Flutter Gist",i={unversionedId:"flutter-gist",id:"flutter-gist",title:"Flutter Gist",description:"\u6253\u5370",source:"@site/docs/flutter/flutter-gist.md",sourceDirName:".",slug:"/flutter-gist",permalink:"/docs/flutter/flutter-gist",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flutter Frameworks",permalink:"/docs/flutter/flutter-frameworks"},next:{title:"Flutter Layout",permalink:"/docs/flutter/flutter-layout"}},u={},s=[{value:"\u6253\u5370",id:"\u6253\u5370",level:2},{value:"\u65e5\u5fd7",id:"\u65e5\u5fd7",level:2},{value:"\u52a0\u8f7d\u8d44\u6e90\u6587\u4ef6",id:"\u52a0\u8f7d\u8d44\u6e90\u6587\u4ef6",level:2},{value:"\u9875\u9762\u5bfc\u822a",id:"\u9875\u9762\u5bfc\u822a",level:2}],p={toc:s};function d(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flutter-gist"},"Flutter Gist"),(0,r.kt)("h2",{id:"\u6253\u5370"},"\u6253\u5370"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"print('abc'); // \u4f1a\u6253\u5370\u5230console\ndebugPrint('$batteryLevel'); // \u5b57\u7b26\u4e32\u6a21\u677f\uff0crelease\u4e0d\u6253\u5370\u5230console\n")),(0,r.kt)("h2",{id:"\u65e5\u5fd7"},"\u65e5\u5fd7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'dart:developer';\n\nlog('$batteryLevel');\n")),(0,r.kt)("p",null,"log \u7684\u65e5\u5fd7\u4f1a\u53bb\u5230 flutter \u7684\u89c2\u6d4b\u53f0\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"flutter run")," \u4e4b\u540e\u547d\u4ee4\u884c\u4f1a\u7ed9\u51fa\u89c2\u6d4b\u53f0\u7684\u5730\u5740\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"An Observatory debugger and profiler on iPhone 11 is available at: ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:54363/q_NCh1fq0lc=/"},"http://127.0.0.1:54363/q_NCh1fq0lc=/"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(55501).Z,width:"1298",height:"914"})),(0,r.kt)("h2",{id:"\u52a0\u8f7d\u8d44\u6e90\u6587\u4ef6"},"\u52a0\u8f7d\u8d44\u6e90\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'dart:async' show Future;\nimport 'package:flutter/services.dart' show rootBundle;\n\nFuture<String> loadAsset() async {\n  return await rootBundle.loadString('my-assets/data.json');\n}\n")),(0,r.kt)("h2",{id:"\u9875\u9762\u5bfc\u822a"},"\u9875\u9762\u5bfc\u822a"),(0,r.kt)("p",null,"In Flutter, screens and pages are called routes. In Android, a route is equivalent to an Activity. In iOS, a route is equivalent to a ViewController. In Flutter, a route is just a widget."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://flutter.dev/docs/cookbook/navigation/returning-data"},"Return data from a screen")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'// Navigator.push returns a Future that completes after calling\n// Navigator.pop on the Selection Screen.\nfinal result = await Navigator.push(\n  context,\n  MaterialPageRoute(builder: (context) => page),\n);\n\nNavigator.of(context).pop({"lat":43.821757,"long":-79.226392});\n\n// \u4f7f\u7528 iOS \u7684\u4ece\u53f3\u5411\u5de6\u6253\u5f00\u9875\u9762\u6548\u679c\nNavigator.push(context,\n    CupertinoPageRoute(\n        fullscreenDialog: fullscreenDialog,\n        builder: (context) => page),\n    );\n\n// \u65e0\u52a8\u753b\u8fc7\u6e21\nNavigator.of(context).push(NoAnimRouteBuilder(TabPage()));\n\n// \u66ff\u6362\u8def\u7531\uff1aA->B->C\uff0cC\u76f4\u63a5\u56deA\n// \u5728B\u9875\u9762\uff1a\nNavigator.of(context).pushReplacementNamed(\'/C\');\n')),(0,r.kt)("p",null,"If you need to navigate to the same screen in many parts of your app, define a named route, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator.pushNamed()")," for navigation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"void main() {\n  runApp(MaterialApp(\n    home: MyAppHome(), // becomes the route named '/'\n    routes: <String, WidgetBuilder> {\n      '/a': (BuildContext context) => MyPage(title: 'page A'),\n      '/b': (BuildContext context) => MyPage(title: 'page B'),\n      '/c': (BuildContext context) => MyPage(title: 'page C'),\n    },\n  ));\n}\n\nNavigator.of(context).pushNamed('/b');\n")))}d.isMDXComponent=!0},55501:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/DDDD73CC-4999-4FE6-9503-229BDC2B8790-244c530770a8c2ca151aa10ff3ac2310.png"}}]);