"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2756],{32577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905)),r=n(61839);const l={},d="Flutter Frameworks",o={unversionedId:"flutter-frameworks",id:"flutter-frameworks",title:"Flutter Frameworks",description:"fish-redux",source:"@site/docs/flutter/flutter-frameworks.md",sourceDirName:".",slug:"/flutter-frameworks",permalink:"/docs/flutter/flutter-frameworks",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flutter FFI",permalink:"/docs/flutter/flutter-ffi"},next:{title:"Flutter Gist",permalink:"/docs/flutter/flutter-gist"}},s={},p=[{value:"fish-redux",id:"fish-redux",level:2},{value:"Nested",id:"nested",level:2},{value:"Provider",id:"provider",level:2}],m={toc:p};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flutter-frameworks"},"Flutter Frameworks"),(0,a.kt)("h2",{id:"fish-redux"},"fish-redux"),(0,a.kt)("p",null,"\u5b98\u65b9\u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alibaba/fish-redux/tree/master/doc"},"fish-redux/doc at master \xb7 alibaba/fish-redux")),(0,a.kt)("p",null,"\u5148\u4e86\u89e3\u4e00\u4e0b Redux \u7684\u7406\u5ff5\uff1a\u4e2d\u5fc3\u5316\u7684\u72b6\u6001\u7ba1\u7406\u3002Centralizing your application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more."),(0,a.kt)("p",null,"fish-redux \u5728 Redux \u7684\u57fa\u7840\u4e0a\u53d1\u5c55\uff1aThe framework not only solves the problem of state management, but also solves the problems of divide and conquer, communication, data drive, decoupling and so on."),(0,a.kt)("p",null,"Component \u662f\u57fa\u672c\u5355\u5143\uff0c\u662f\u89c6\u56fe\u5448\u73b0\u548c\u903b\u8f91\u529f\u80fd\u7684\u5c01\u88c5\u3002Page \u7ee7\u627f Component\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(45567).Z})),(0,a.kt)("p",null,"\u5206\u6cbb\uff1a\u5355\u4e2a Component \u5185\u90e8\uff0c\u7528\u6237\u5728 View \u89e6\u53d1\u4e86 Action\uff08\u4f8b\u5982\u70b9\u51fb\u6309\u94ae\uff09\uff0c\u9020\u6210 Side Effect\uff0c\u901a\u8fc7 Reducer \u6539\u53d8\u4e86\u72b6\u6001\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(91201).Z})),(0,a.kt)("p",null,"\u96c6\u4e2d\uff1a\u5168\u5c40\u72b6\u6001\u6539\u53d8\u5982\u4f55\u5f71\u54cd\u6bcf\u4e2a\u5177\u4f53\u7684 Component"),(0,a.kt)("p",null,"\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"sample_page\n    -- action.dart /// define action types and action creator\n    -- page.dart /// config a page or component\n    -- view.dart /// define a function which expresses the presentation of user interface\n    -- effect.dart /// define a function which handles the side-effect\n    -- reducer.dart /// define a function which handles state-change\n    -- state.dart /// define a state and some connector of substate\n    components\n        sample_component\n        -- action.dart // \u5b9a\u4e49\u9875\u9762\u6709\u54ea\u4e9b\u52a8\u4f5c\n        -- component.dart\n        -- view.dart  // \u9875\u9762 Widget\n        -- effect.dart // \u4e8b\u4ef6\u5904\u7406\uff0c\u5305\u62ec action \u91cc\u5b9a\u4e49\u7684\u4e8b\u4ef6\u3001\u548c\u751f\u547d\u5468\u671f\u4e8b\u4ef6\n        -- reducer.dart // \u6539\u53d8\u72b6\u6001\n        -- state.dart // \u9875\u9762\u6709\u54ea\u4e9b\u72b6\u6001\n")),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alibaba/fish-redux/tree/master/example"},"fish-redux/example at master \xb7 alibaba/fish-redux")),(0,a.kt)("p",null,"Middleware \u662f\u5904\u7406\u4e00\u4e9b\u9762\u5411\u5207\u9762\u7684\u4e1c\u897f\uff0c\u4f8b\u5982\u5bf9\u6bcf\u4e2a\u9875\u9762\u7684\u751f\u547d\u5468\u671f\u843d\u65e5\u5fd7\u8fd9\u79cd\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Dependencies")," is a structure that expresses dependencies between components."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"adapter"),": used to build a high-performance ListView."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"slots"),": subcomponents that the component depends on."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Dependent"),": connector + subcomponent"),(0,a.kt)("p",null,"connector: It expresses a data connection relationship of how to read small data from a big data, and how to synchronize to big data when the small data is modified."),(0,a.kt)("p",null,"\u6709\u4e86\u8fd9\u4e2a connector\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"view.dart")," \u91cc\u9762\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"viewService.buildComponent('report')")," \u5c31\u53ef\u4ee5\u521b\u5efa\u5b50 component\uff0c\u800c\u4e0d\u7528\u4f20\u53c2\u6570\uff0c\u72b6\u6001\u7684\u4f20\u9012\u4e5f\u662f\u901a\u8fc7\u8fd9\u4e2a connector\u3002"),(0,a.kt)("p",null,"\u751f\u547d\u5468\u671f\u901a\u8fc7 Action \u7684\u5f62\u5f0f\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"effect.dart")," \u91cc\u5904\u7406\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"effect.dart")," \u4e0d\u80fd\u4fee\u6539\u9875\u9762\u72b6\u6001\uff0c\u8981\u4fee\u6539\u9875\u9762\u72b6\u6001\u7684\u8bdd\uff0c\u8981\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch")," \u6d3e\u53d1 Action \u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"reducer.dart")," \u91cc\u5904\u7406\u3002"),(0,a.kt)("h2",{id:"nested"},"Nested"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/packages/nested"},"nested | Flutter Package")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Nested"),": A widget that simplify the writing of deeply nested widget trees."),(0,a.kt)(r.G,{chart:"classDiagram\n    Widget <|-- StatelessWidget : extends\n    Widget <|-- StatefulWidget : extends\n    StatelessWidget <|-- Nested : extends\n    Widget <|.. SingleChildWidget : implements\n    SingleChildWidget <|.. Nested : implements\n    StatelessWidget <|-- SingleChildStatelessWidget : extends\n    SingleChildWidget <|.. SingleChildStatelessWidget : implements\n    StatefulWidget <|-- SingleChildStatefulWidget : extends\n    SingleChildWidget <|.. SingleChildStatefulWidget : implements",mdxType:"Mermaid"}),(0,a.kt)("h2",{id:"provider"},"Provider"),(0,a.kt)("p",null,"Provider \u662f\u5b98\u65b9\u63a8\u8350\u7684\u72b6\u6001\u7ba1\u7406\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/development/data-and-backend/state-mgmt/simple"},"Simple app state management | Flutter"))),(0,a.kt)("p",null,"\u4e0d\u7528\u5173\u5fc3\u8fd9\u4e9b\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"InheritedWidget"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"InheritedNotifier"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"InheritedModel"),"\uff0cProvider \u5df2\u7ecf\u5c01\u88c5\u597d\u4e86\u3002"),(0,a.kt)("p",null,"\u8981\u7528 Provider\uff0c\u5148\u4e86\u89e3 3 \u4e2a\u6982\u5ff5\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"ChangeNotifier"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ChangeNotifierProvider"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer"),"\u3002"),(0,a.kt)("p",null,"If something is a ",(0,a.kt)("inlineCode",{parentName:"p"},"ChangeNotifier"),", you can subscribe to its changes. (It is a form of ",(0,a.kt)("inlineCode",{parentName:"p"},"Observable"),", for those familiar with the term.) ",(0,a.kt)("inlineCode",{parentName:"p"},"ChangeNotifier")," is part of ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter:foundation"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ChangeNotifierProvider")," is the widget that provides an instance of a ",(0,a.kt)("inlineCode",{parentName:"p"},"ChangeNotifier")," to its descendants. It comes from the provider package."),(0,a.kt)("p",null,"When you call ",(0,a.kt)("inlineCode",{parentName:"p"},"notifyListeners()")," in your model, all ",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer")," widgets's ",(0,a.kt)("inlineCode",{parentName:"p"},"builder")," method get called."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'class EditNotifier with ChangeNotifier {\n  bool isEditing = false;\n\n  void setEditing(bool isEditing) {\n    this.isEditing = isEditing;\n    notifyListeners();\n  }\n}\n\n@override\nWidget build(BuildContext context) {\n  return Scaffold(\n    body: ChangeNotifierProvider(\n      create: (ctx) => EditNotifier(),\n      child: Consumer<EditNotifier>(\n        builder: (BuildContext context, notifier, Widget? child) {\n          return Text("isEditing: ${notifier.isEditing}");\n        },\n      ),\n    ),\n  );\n}\n')),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u5305\u4e00\u5c42 ",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer"),"\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728\u6211\u4eec\u7684 Widget \u91cc\u76d1\u542c\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"Provider.of<CartModel>(context, listen: true).totalPrice;\n// \u8bed\u6cd5\u7cd6\ncontext.watch<CartModel>().totalPrice,\n")),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u4e0d\u9700\u8981\u66f4\u65b0 UI\uff0c\u53ea\u9700\u8981\u8bbf\u95ee\u5171\u4eab\u72b6\u6001\u65f6\uff0c\u5219\u53ef\u4ee5\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"Provider.of<CartModel>(context, listen: false).removeAll();\n// \u8bed\u6cd5\u7cd6\ncontext.read<CartModel>().removeAll();\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"listen: false")," \u4f7f\u5f97\u5f53\u524d Widget \u4e0d\u4f1a\u56e0\u4e3a\u5171\u4eab\u72b6\u6001\u7684\u6539\u53d8\u800c rebuild\u3002"))}u.isMDXComponent=!0},45567:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6ODEzOTE4OTRkZDRhNmFhYmRjNzc0ZTk5ZWFhMTQwZDY4YzY3OTA4NGVlM2IyMTcyYmE4ZmE0NDNlOTEyNTQ1MQpzaXplIDk4OTIK"},91201:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6NDljYzQyZTg5ODY4Nzg0ZWI4MDRjYWU5N2E4NTI0ZTZiZWE3YTIzZjdjNTA3NTc2OTFjOTMyYmRmZWJjOWYwNwpzaXplIDEyNDMwCg=="}}]);