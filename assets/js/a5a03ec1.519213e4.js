"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6032],{15821:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));t(61839);const i={},l="Frameworks",o={unversionedId:"frameworks",id:"frameworks",title:"Frameworks",description:"\u9759\u6001\u5e93\u4e0e\u52a8\u6001\u5e93",source:"@site/docs/apple/frameworks.md",sourceDirName:".",slug:"/frameworks",permalink:"/docs/apple/frameworks",draft:!1,editUrl:"https://github.com/yianzhou/yianzhou.github.io/docs/apple/frameworks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Debug",permalink:"/docs/apple/"},next:{title:"\u56fe\u5f62\u6e32\u67d3",permalink:"/docs/apple/graphics"}},p={},s=[{value:"\u9759\u6001\u5e93\u4e0e\u52a8\u6001\u5e93",id:"\u9759\u6001\u5e93\u4e0e\u52a8\u6001\u5e93",level:2},{value:"Framework",id:"framework",level:2},{value:"tdb",id:"tdb",level:2},{value:"AFNetworking \u9759\u6001\u5e93",id:"afnetworking-\u9759\u6001\u5e93",level:2},{value:"AFNetworking \u52a8\u6001\u5e93",id:"afnetworking-\u52a8\u6001\u5e93",level:2},{value:"\u56db\u79cd\u94fe\u63a5\u60c5\u51b5",id:"\u56db\u79cd\u94fe\u63a5\u60c5\u51b5",level:2},{value:"1. \u52a8\u6001\u5e93\u94fe\u63a5\u52a8\u6001\u5e93",id:"1-\u52a8\u6001\u5e93\u94fe\u63a5\u52a8\u6001\u5e93",level:3},{value:"2. \u52a8\u6001\u5e93\u94fe\u63a5\u9759\u6001\u5e93",id:"2-\u52a8\u6001\u5e93\u94fe\u63a5\u9759\u6001\u5e93",level:3},{value:"3. \u9759\u6001\u5e93\u94fe\u63a5\u9759\u6001\u5e93",id:"3-\u9759\u6001\u5e93\u94fe\u63a5\u9759\u6001\u5e93",level:3},{value:"4. \u9759\u6001\u5e93\u94fe\u63a5\u52a8\u6001\u5e93",id:"4-\u9759\u6001\u5e93\u94fe\u63a5\u52a8\u6001\u5e93",level:3},{value:"Cocoapods \u96c6\u6210",id:"cocoapods-\u96c6\u6210",level:2},{value:"Modules",id:"modules",level:2},{value:"Swift Library",id:"swift-library",level:2},{value:"\u88c1\u526a",id:"\u88c1\u526a",level:2},{value:"\u67e5\u770b\u5e93\u91cc\u7684\u7b26\u53f7",id:"\u67e5\u770b\u5e93\u91cc\u7684\u7b26\u53f7",level:2}],m={toc:s};function d(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frameworks"},"Frameworks"),(0,r.kt)("h2",{id:"\u9759\u6001\u5e93\u4e0e\u52a8\u6001\u5e93"},"\u9759\u6001\u5e93\u4e0e\u52a8\u6001\u5e93"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/DynamicLibraries/100-Articles/OverviewOfDynamicLibraries.html#//apple_ref/doc/uid/TP40001873-SW1"},"Dynamic Library Programming Topics")),(0,r.kt)("p",null,"When an app is linked with a library using a static linker, the code that the app uses is copied to the generated executable file. A static linker collects compiled source code, known as object code, and library code into one executable file that is loaded into memory in its entirety at runtime. The kind of library that becomes part of an app\u2019s executable file is known as a static library. Static libraries are collections or archives of object files."),(0,r.kt)("p",null,"A better approach is for an app to load code into its address space when it\u2019s actually needed, either at launch time or at runtime. The type of library that provides this flexibility is called ",(0,r.kt)("strong",{parentName:"p"},"dynamic library"),". Dynamic libraries are not statically linked into client apps; they don't become part of the executable file."),(0,r.kt)("p",null,"When an app is launched, the OS X kernel loads the app\u2019s code and data into the address space of a new process. The kernel also loads the dynamic loader (",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/dyld"),") into the process and passes control to it. The dynamic loader then loads the app\u2019s dependent libraries. These are the dynamic libraries the app was linked with. The static linker records the filenames of each of the dependent libraries at the time the app is linked. This filename is known as the dynamic library\u2019s ",(0,r.kt)("strong",{parentName:"p"},"install name"),". The dynamic loader uses the app\u2019s dependent libraries\u2019 install names to locate them in the file system."),(0,r.kt)("p",null,"The dynamic loader\u2014in addition to automatically loading dynamic libraries at launch time\u2014loads dynamic libraries at runtime, at the app\u2019s request. That is, if an app doesn't require that a dynamic library be loaded when it launches, developers can choose to not link the app\u2019s object files with the dynamic library, and, instead, load the dynamic library only in the parts of the app that require it. Using dynamic libraries this way speeds up the launch process. Dynamic libraries loaded at runtime are known as dynamically loaded libraries. To load libraries at runtime, apps can use functions that interact with the dynamic loader for the platform under which they're running."),(0,r.kt)("p",null,"\u67e5\u770b\u4e00\u4e2a\u5e93\u662f\u52a8\u6001\u5e93\u8fd8\u662f\u9759\u6001\u5e93\u53ef\u4ee5\u7528\u5982\u4e0b\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"file opencv2\nopencv2: Mach-O universal binary with 2 architectures: [x86_64:current ar archive] [arm64]\nopencv2 (for architecture x86_64):  current ar archive\nopencv2 (for architecture arm64):   current ar archive\n\nfile Flutter\nFlutter: Mach-O universal binary with 2 architectures: [arm_v7:Mach-O dynamically linked shared library arm_v7] [arm64]\nFlutter (for architecture armv7):   Mach-O dynamically linked shared library arm_v7\nFlutter (for architecture arm64):   Mach-O 64-bit dynamically linked shared library arm64\n")),(0,r.kt)("p",null,'\u52a8\u6001\u5e93\u4f1a\u663e\u793a "dynamically linked shared library"'),(0,r.kt)("h2",{id:"framework"},"Framework"),(0,r.kt)("p",null,"In iOS, Apple is using ",(0,r.kt)("strong",{parentName:"p"},"Framework")," to package the header files, source files, binary files and resources. Similarly, Framework can be divides into ",(0,r.kt)("strong",{parentName:"p"},"Static Framework")," and ",(0,r.kt)("strong",{parentName:"p"},"Dynamic Framework"),"."),(0,r.kt)("p",null,"Framework \u662f\u4e00\u79cd\u6253\u5305\u65b9\u5f0f\u3002\u5c06\u5e93\u7684\u4e8c\u8fdb\u5236\u3001\u5934\u6587\u4ef6\u3001\u8d44\u6e90\u6587\u4ef6\u6253\u5305\u5230\u4e00\u8d77\uff0c\u65b9\u4fbf\u7ba1\u7406\u3002\u76f8\u5f53\u4e8e Android \u7684 AAR (Android ARchive)\u3002"),(0,r.kt)("p",null,"\u5f00\u53d1\u8005\u5236\u4f5c\u7684 Framework \u548c\u7cfb\u7edf\u7684 UIKit.framework \u6709\u4ec0\u4e48\u533a\u522b\uff1f\u7cfb\u7edf\u7684 Framework \u4e0d\u9700\u8981\u62f7\u8d1d\u5230\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u662f\u8fd0\u884c\u65f6\u52a0\u8f7d\u7684\uff0c\u5728\u4e0d\u540c\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u5171\u4eab\u3002\u5f00\u53d1\u8005\u5236\u4f5c\u7684 Framework\uff0c\u6700\u540e\u662f\u4f1a\u88ab\u62f7\u8d1d\u5230\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u82f9\u679c\u628a\u8fd9\u79cd Framework \u53c8\u79f0\u4e3a Embedded Framework\u3002"),(0,r.kt)("p",null,"\u5f00\u53d1\u8005\u5236\u4f5c\u7684 Framework \u4f1a\u88ab\u653e\u5230 ipa \u7684 Frameworks \u76ee\u5f55\u4e0b\uff0c\u88ab\u4e25\u683c\u9650\u5236\u5728\u6c99\u76d2\u4e2d\u8fd0\u884c\u3002App \u6253\u5305\u65f6\u4f1a\u5bf9\u52a8\u6001\u5e93\u8fdb\u884c\u7b7e\u540d\uff0c\u4e0d\u540c\u7684 App\uff0c\u5373\u4f7f\u4f7f\u7528\u7684\u662f\u5b8c\u5168\u76f8\u540c\u7684\u52a8\u6001\u5e93\uff0c\u5728\u7cfb\u7edf\u4e2d\u4e5f\u4f1a\u52a0\u8f7d\u591a\u4efd\u3002"),(0,r.kt)("h2",{id:"tdb"},"tdb"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://opensource.apple.com/source/tapi/tapi-1100.0.11/docs/TBD.rst.auto.html"},"https://opensource.apple.com/source/tapi/tapi-1100.0.11/docs/TBD.rst.auto.html")),(0,r.kt)("p",null,"Text-based Dynamic Library Stubs (.tbd) are a new representation for dynamic libraries and frameworks in Apple's SDKs."),(0,r.kt)("p",null,"The new dynamic library stub file format is a ",(0,r.kt)("strong",{parentName:"p"},"human readable and editable YAML text file"),". Those text-based stub files ",(0,r.kt)("strong",{parentName:"p"},"contain the same exported symbols")," as the original dynamic library."),(0,r.kt)("p",null,"\u6211\u4eec\u5728\u9879\u76ee\u4e2d\u5f15\u5165\u7684\u7cfb\u7edf\u5e93\uff0c\u90fd\u662f tbd \u7684\u683c\u5f0f\u3002\u56e0\u4e3a\u771f\u6b63\u7684\u52a8\u6001\u5e93\u653e\u5728\u624b\u673a\u8bbe\u5907\u4e0a\uff0cXcode \u5728\u94fe\u63a5\u65f6\u53ea\u9700\u8981\u63cf\u8ff0\u4fe1\u606f\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,r.kt)("p",null,"tbd \u91cc\u9762\u8bb0\u5f55\u4e86\u5305\u62ec\u52a8\u6001\u5e93\u5bfc\u51fa\u7684\u7b26\u53f7\u3001\u67b6\u6784\u3001\u4f9d\u8d56\u7b49\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"afnetworking-\u9759\u6001\u5e93"},"AFNetworking \u9759\u6001\u5e93"),(0,r.kt)("p",null,"\u9996\u5148\u627e\u5230 AFNetworking \u7684\u6e90\u7801\uff0c\u4e5f\u5c31\u662f ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AFNetworking/AFNetworking/tree/master/AFNetworking"},"https://github.com/AFNetworking/AFNetworking/tree/master/AFNetworking")," \u8fd9\u4e2a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2a Xcode Project\uff0c\u5e73\u53f0\u9009\u62e9\u4e3a macOS\uff08\u56e0\u4e3a\u540e\u9762\u6211\u4eec\u4f1a\u76f4\u63a5\u8fd0\u884c\u7a0b\u5e8f\uff09\uff0c\u6a21\u677f\u9009\u62e9\u9759\u6001\u5e93\uff0c\u7136\u540e\u628a\u6e90\u7801\u62d6\u8fdb\u53bb\u3002\u6784\u5efa\uff0c\u7136\u540e\u5728 DerivedData \u91cc\u627e\u5230\u4ea7\u7269\uff0c\u5f97\u5230 libAFNetworking.a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ar -t libAFNetworking.a")," \u5217\u51fa\u9759\u6001\u5e93\u91cc\u9762\u6240\u6709\u7684\u76ee\u6807\u6587\u4ef6\u3002\u9759\u6001\u5e93\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},".o")," \u6587\u4ef6\u7684\u96c6\u5408\uff0c\u65e2\u7136\u5b83\u662f\u76ee\u6807\u6587\u4ef6\u7684\u96c6\u5408\uff0c\u5b83\u53ef\u4ee5\u88ab\u8fdb\u4e00\u6b65\u5730\u94fe\u63a5\uff0c\u4ece\u800c\u751f\u6210\u52a8\u6001\u5e93\u3002"),(0,r.kt)("p",null,"\u624b\u52a8\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"main.m")," \u6587\u4ef6\uff0c\u5e76\u5728\u5176\u4e2d\u5f15\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"AFNetworking"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},'#import <Foundation/Foundation.h>\n#import <AFNetworking.h>\n\nint main() {\n    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];\n    NSLog(@"%@", manager);\n    return 0;\n}\n')),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u628a\u5b83\u7f16\u8bd1\u6210\u76ee\u6807\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7f16\u8bd1\n# -I: HEADER_SEARCH_PATHS\nclang \\\n-fobjc-arc \\\n-target arm64-apple-macos \\\n-mmacos-version-min=12.3 \\\n-isysroot /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk \\\n-IAFNetworking \\\n-c main.m -o main.o\n")),(0,r.kt)("p",null,"\u5728\u7f16\u8bd1\u76ee\u6807\u6587\u4ef6\u65f6\uff0c\u6211\u4eec\u4e0d\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"AFHTTPSessionManager")," \u7684\u6e90\u7801\uff0c\u4e5f\u4e0d\u9700\u8981 AFNetworking \u5e93\uff0c\u53ea\u9700\u8981\u5728 HEADER_SEARCH_PATHS \u91cc\u80fd\u627e\u5230 AFNetworking.h \u5934\u6587\u4ef6\u5c31\u53ef\u4ee5\u4e86\uff08\u5934\u6587\u4ef6\u91cc\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"AFHTTPSessionManager"),"\u7b26\u53f7\uff09\uff0c\u8fd9\u4e2a\u7b26\u53f7\u4f1a\u88ab\u653e\u5165\u76ee\u6807\u6587\u4ef6\u7684\u91cd\u5b9a\u4f4d\u7b26\u53f7\u8868\uff0c\u5728\u4e4b\u540e\u94fe\u63a5\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u786e\u5b9a\u7b26\u53f7\u7684\u5730\u5740\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5c06\u76ee\u6807\u6587\u4ef6\u4e0e\u9759\u6001\u5e93\u8fdb\u884c\u94fe\u63a5\n# -L: library_search_path\n# -l: \u8981\u94fe\u63a5\u7684\u5e93\u7684\u540d\u79f0\uff0c\u627e\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u52a0 lib \u524d\u7f00\nclang \\\n-fobjc-arc \\\n-target arm64-apple-macos \\\n-mmacos-version-min=12.3 \\\n-isysroot /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk \\\n-LProducts/Release \\\n-lAFNetworking \\\nmain.o -o main\n")),(0,r.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"./main")," \u76f4\u63a5\u8fd0\u884c\u8fd9\u4e2a\u4e8c\u8fdb\u5236\uff0c\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"NSLog")," \u7684\u8f93\u51fa\u4e86\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u6253\u5305 iOS\uff0c\u5219\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-target arm64-apple-ios \\\n-mios-version-min=15.0 \\\n-isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk \\\n")),(0,r.kt)("p",null,"\u9759\u6001\u5e93\u53ef\u4ee5\u624b\u52a8\u7ec4\u7ec7\u6210 Framework\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir AFNetworking.framework"),"\uff0c\u5c06\u9759\u6001\u5e93\u6587\u4ef6\u91cd\u547d\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"AFNetworking")," \u540e\u653e\u5165\uff0c\u518d\u5c06\u5934\u6587\u4ef6\u653e\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"Headers")," \u76ee\u5f55\u4e0b\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5c06\u76ee\u6807\u6587\u4ef6\u4e0e Framework \u8fdb\u884c\u94fe\u63a5\n# -F \u5373 framework_search_path\n# -framework \u5c5e\u4e8e other_linker_flags\nclang \\\n-fobjc-arc \\\n-target arm64-apple-macos \\\n-mmacos-version-min=12.3 \\\n-isysroot /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk \\\n-F./Frameworks \\\n-framework AFNetworking \\\nmain.o -o main\n")),(0,r.kt)("p",null,"\u603b\u7ed3\uff0c\u7f16\u8bd1\u94fe\u63a5\u4e00\u4e2a Framework \u7684\u4e09\u8981\u7d20\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Header Search Paths"),(0,r.kt)("li",{parentName:"ol"},"Framework Search Paths"),(0,r.kt)("li",{parentName:"ol"},"Other Linker Flags - ",(0,r.kt)("inlineCode",{parentName:"li"},"-framework"))),(0,r.kt)("p",null,"\u9759\u6001\u5e93\u4e2d\u6ca1\u6709\u7528\u5230\u7684\u4ee3\u7801\uff0c\u4f1a\u88ab Dead Code Stripping \u8131\u6389\u3002objc \u7684 class \u9ed8\u8ba4\u4f1a\u8f7d\u5165\uff0c\u4f46 category \u9ed8\u8ba4\u662f\u4f1a\u88ab\u8131\u6389\u7684\u3002\u6b64\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5411\u94fe\u63a5\u5668\u4f20\u9012\u53c2\u6570\uff0c\u6765\u63a7\u5236\u54ea\u4e9b\u7b26\u53f7\u4f1a\u88ab\u8f7d\u5165\u4e8c\u8fdb\u5236\u4ea7\u7269\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OTHER_LDFLAGS=-Xlinker -all_load # \u52a0\u8f7d\u6240\u6709\u7b26\u53f7\uff0cclang -Xlinker -all_load\nOTHER_LDFLAGS=-Xlinker -ObjC # \u52a0\u8f7d\u6240\u6709 objc \u7b26\u53f7\nOTHER_LDFLAGS=-Xlinker -force_load # \u52a0\u8f7d\u6307\u5b9a\u9759\u6001\u5e93\u91cc\u9762\u7684\u6240\u6709\u7b26\u53f7\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"clang")," \u547d\u4ee4\u4e2d\u4f7f\u7528 Dead Code Stripping\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# -why_load: Log why each object file in a static library is loaded\nclang \\\n-fobjc-arc \\\n-target arm64-apple-macos \\\n-mmacos-version-min=12.3 \\\n-isysroot /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk \\\n-LProducts/Release \\\n-lAFNetworking \\\n-Xlinker -dead_strip \\\n-Xlinker -why_load \\\nmain.o -o main\n")),(0,r.kt)("h2",{id:"afnetworking-\u52a8\u6001\u5e93"},"AFNetworking \u52a8\u6001\u5e93"),(0,r.kt)("p",null,"\u540c\u6837\u5730\uff0c\u65b0\u5efa\u4e00\u4e2a Xcode Project\uff0c\u5e73\u53f0\u9009\u62e9\u4e3a macOS\uff08\u56e0\u4e3a\u540e\u9762\u6211\u4eec\u4f1a\u76f4\u63a5\u8fd0\u884c\u4e8c\u8fdb\u5236\uff09\uff0c\u6a21\u677f\u9009\u62e9\u52a8\u6001\u5e93\uff0c\u7136\u540e\u628a\u6e90\u7801\u62d6\u8fdb\u53bb\u3002"),(0,r.kt)("p",null,"\u52a8\u6001\u5e93\u662f\u8fd0\u884c\u65f6\u52a0\u8f7d\u7684\uff0c\u52a0\u8f7d\u7684\u8bdd\u5c31\u4f1a\u9700\u8981\u4e00\u4e2a\u8def\u5f84\uff0c\u8fd9\u4e2a\u8def\u5f84\u5c31\u662f install_name\u3002\u65b0\u5efa\u7684 Xcode \u52a8\u6001\u5e93\u5de5\u7a0b\uff0c\u5982\u679c\u4e0d\u505a\u4fee\u6539\u7684\u8bdd\uff0c\u4f1a\u662f\u8fd9\u6837\u7684\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:t(37958).Z})),(0,r.kt)("p",null,"\u6211\u4eec\u6309\u7167\u82f9\u679c App \u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u4fee\u6539\u4e3a\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:t(92387).Z})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@rpath")," \u4ee3\u8868 Build Settings - Runpath Search Paths\uff0cxcconfig \u91cc\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"LD_RUNPATH_SEARCH_PATHS"),"\uff0c\u53ef\u4fdd\u5b58\u591a\u4e2a\u8def\u5f84\uff0cdyld \u641c\u7d22\u52a8\u6001\u5e93\u65f6\u4f1a\u5728\u8fd9\u4e9b\u8def\u5f84\u4e0b\u641c\u7d22\u3002\u7531\u4e8e\u6211\u4eec\u8fd9\u4e2a\u52a8\u6001\u5e93\u662f\u7ed9 main \u7528\u7684\uff0c\u5f53 main \u94fe\u63a5\u8fd9\u4e2a\u52a8\u6001\u5e93\u65f6\uff0cmain \u5c31\u8d1f\u8d23\u5c55\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"@rpath"),"\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6784\u5efa\uff0c\u7136\u540e\u5728 DerivedData \u91cc\u627e\u5230\u4ea7\u7269\u3002"),(0,r.kt)("p",null,"\u52a8\u6001\u5e93\u7684\u8def\u5f84\u662f\u8bb0\u5f55\u5728 libAFNetworking.dylib \u81ea\u5df1\u7684 load command \u91cc\u7684\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'otool -l libAFNetworking.dylib | grep "LC_ID_DYLIB" -A 5')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"          cmd LC_ID_DYLIB\n      cmdsize 72\n         name @rpath/AFNetworking.framework/AFNetworking (offset 24)\n   time stamp 1 Thu Jan  1 08:00:01 1970\n      current version 1.0.0\ncompatibility version 1.0.0\n")),(0,r.kt)("p",null,"\u7136\u540e\u624b\u52a8\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"main.m")," \u6587\u4ef6\uff0c\u5e76\u5728\u5176\u4e2d\u5f15\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"AFNetworking"),"\uff0c\u63a5\u4e0b\u6765\u628a\u5b83\u7f16\u8bd1\u6210\u76ee\u6807\u6587\u4ef6\uff0c\u7136\u540e\u94fe\u63a5\u3002"),(0,r.kt)("p",null,"\u5728 main \u53bb\u94fe\u63a5 libAFNetworking.dylib \u65f6\uff0cmain \u4f1a\u628a\u4e0a\u9762\u7684\u8def\u5f84\u53c8\u5199\u5230\u4e86\u81ea\u5df1\u7684 load command \u91cc\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"otool -l main | grep 'LC_LOAD_DYLIB' -A 5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"          cmd LC_LOAD_DYLIB\n      cmdsize 72\n         name @rpath/AFNetworking.framework/AFNetworking (offset 24)\n   time stamp 2 Thu Jan  1 08:00:02 1970\n      current version 1.0.0\ncompatibility version 1.0.0\n")),(0,r.kt)("p",null,"\u5f53 dyld \u53bb\u52a0\u8f7d main \u4f9d\u8d56\u7684\u52a8\u6001\u5e93\u65f6\uff0c\u5c31\u4f1a\u4f7f\u7528\u4e0a\u8ff0\u8def\u5f84\u6765\u52a0\u8f7d\u3002"),(0,r.kt)("p",null,"\u6b64\u65f6\u8fd0\u884c main\uff0c\u4f1a\u51fa\u73b0 Library not loaded \u9519\u8bef\uff0c\u8fd9\u662f\u7531\u4e8e\u5728\u94fe\u63a5\u65f6\u6211\u4eec\u6ca1\u6709\u6307\u5b9a main \u7684 rpath\uff0c\u52a0\u8f7d\u52a8\u6001\u5e93\u65f6\u65e0\u6cd5\u5c55\u5f00\uff0c\u4e8e\u662f\u7cfb\u7edf\u53ea\u597d\u5230\u515c\u5e95\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"/Library/Frameworks")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"/System/Library/Frameworks/")," \u76ee\u5f55\u53bb\u627e\uff0c\u4f46\u662f\u627e\u4e0d\u5230\uff0c\u4e8e\u662f\u5c31\u53d1\u751f\u5f02\u5e38\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dyld[55541]: Library not loaded: '@rpath/AFNetworking.framework/AFNetworking'\n  Referenced from: '/Users/yianzhou/Documents/megabox/examples/macOS/AFNetworking-dylib/main'\n  Reason: tried: '/Library/Frameworks/AFNetworking.framework/AFNetworking' (no such file), '/System/Library/Frameworks/AFNetworking.framework/AFNetworking' (no such file)\n")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u5728\u94fe\u63a5\u65f6\uff0c\u8fd8\u9700\u989d\u5916\u7ed9\u94fe\u63a5\u5668\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"rpath")," \u53c2\u6570\uff0c\u5c31\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\u4e86\u3002\uff08iOS App \u90fd\u4f1a\u628a\u52a8\u6001\u5e93\u653e\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"@executable_path/Frameworks")," \u76ee\u5f55\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@excutable_path")," \u4ee3\u8868\u53ef\u6267\u884c\u7a0b\u5e8f\u6240\u5728\u76ee\u5f55\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clang \\\n-fobjc-arc \\\n-target arm64-apple-macos \\\n-mmacos-version-min=12.3 \\\n-isysroot /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk \\\n-F./Frameworks \\\n-framework AFNetworking \\\n-Xlinker -rpath -Xlinker @executable_path/Frameworks \\\nmain.o -o main\n")),(0,r.kt)("p",null,"\u5f53\u52a8\u6001\u5e93\u94fe\u63a5\u52a8\u6001\u5e93\u65f6\uff0c\u60c5\u51b5\u4f1a\u53d8\u5f97\u66f4\u590d\u6742\u4e00\u4e9b\u3002\u5047\u8bbe AFNetworking \u8fd8\u4f9d\u8d56\u4e86\u5176\u5b83\u52a8\u6001\u5e93\uff0c\u901a\u5e38\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"AFNetworking.framework/Frameworks")," \u4e0b\u9762\u3002"),(0,r.kt)("p",null,"\u90a3\u4e48\uff0c\u5f53\u52a0\u8f7d AFNetworking \u7528\u5230\u7684\u52a8\u6001\u5e93\u65f6\uff0c\u5c31\u8981\u5728 AFNetworking \u7684 rpath \u91cc\u627e\u3002\u800c AFNetworking \u4e0d\u662f\u53ef\u6267\u884c\u7a0b\u5e8f\uff0c\u5b83\u662f\u52a8\u6001\u5e93\u3002\u56e0\u6b64\u5982\u679c\u628a AFNetworking \u7684 rpath \u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"@executable_path/Frameworks")," \u7684\u8bdd\uff0c\u80af\u5b9a\u662f\u627e\u4e0d\u5230\u7684\u3002\u6b64\u65f6\u82f9\u679c\u63d0\u4f9b\u4e86\u53e6\u4e00\u4e2a\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"@loader_path"),"\uff0c\u8868\u793a\u88ab\u52a0\u8f7d\u7684 mach-o \u6240\u5728\u76ee\u5f55\u3002\u5f53 AFNetworking \u88ab\u52a0\u8f7d\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@loader_path")," \u5c31\u88ab\u5c55\u5f00\u4e3a AFNetworking \u6240\u5728\u76ee\u5f55\uff0c\u56e0\u6b64\u6211\u4eec\u5c06 AFNetworking \u7684 rpath \u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"@loader_path/Frameworks"),"\uff0c\u5c31\u53ef\u4ee5\u786e\u4fdd\u52a8\u6001\u5e93\u4f9d\u8d56\u52a8\u6001\u5e93\u7684\u60c5\u51b5\u4e5f\u53ef\u4ee5\u627e\u5230\u6b63\u786e\u7684\u8def\u5f84\u4e86\u3002"),(0,r.kt)("p",null,"\u54b1\u4eec\u5e73\u65f6\u901a\u8fc7 Cocoapods \u7ba1\u7406\u5de5\u7a0b\u914d\u7f6e\u65f6\uff0c\u5b83\u4e5f\u662f\u8fd9\u4e48\u7ed9\u6211\u4eec\u914d\u7f6e\u7684\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:t(27114).Z})),(0,r.kt)("h2",{id:"\u56db\u79cd\u94fe\u63a5\u60c5\u51b5"},"\u56db\u79cd\u94fe\u63a5\u60c5\u51b5"),(0,r.kt)("h3",{id:"1-\u52a8\u6001\u5e93\u94fe\u63a5\u52a8\u6001\u5e93"},"1. \u52a8\u6001\u5e93\u94fe\u63a5\u52a8\u6001\u5e93"),(0,r.kt)("p",null,"App -> \u52a8\u6001\u5e93 A -> \u52a8\u6001\u5e93 B\uff0c\u8981\u5728 App \u5185\u4f7f\u7528\u52a8\u6001\u5e93 B \u7684\u4ee3\u7801\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Demo/Pods/Target Support Files/Pods-Demo/Pods-Demo-frameworks.sh")," \u8fd9\u4e2a\u8def\u5f84\u4e0b\u7684\u811a\u672c\uff0c\u5df2\u7ecf\u5e2e\u5fd9\u628a\u52a8\u6001\u5e93 B \u62f7\u8d1d\u5230 App \u6c99\u76d2\u7684 Frameworks \u76ee\u5f55\u4e0b\uff0c\u5e76\u4e14\u5199\u597d\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"Demo/Pods/Target Support Files/Pods-Demo/Pods-Demo-frameworks.sh"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"App \u901a\u8fc7 pod \u5b89\u88c5\u52a8\u6001\u5e93 B\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"pod 'B'"))),(0,r.kt)("p",null,"\u52a8\u6001\u5e93 A \u53ef\u4ee5\u53cd\u5411\u4f7f\u7528 App \u7684\u4ee3\u7801\u5417\uff1f\u2014\u2014\u53ef\u4ee5\u7684\uff0c\u7b2c\u4e00\uff0c\u5728\u8fd0\u884c\u65f6\uff0cApp \u7684\u7b26\u53f7\u80af\u5b9a\u662f\u8f7d\u5165\u5185\u5b58\u4e2d\u53ef\u4ee5\u88ab\u4f7f\u7528\u7684\uff1b\u7b2c\u4e8c\uff0c\u52a8\u6001\u5e93\u7f16\u8bd1\u7684\u65f6\u5019\u4e0d\u9700\u8981\u5b9e\u73b0\uff0c\u53ea\u9700\u8981\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"HEADER_SEARCH_PATHS")," \u80fd\u627e\u5230\u5934\u6587\u4ef6\u5373\u53ef\uff1b\u7b2c\u4e09\uff0c\u5728\u52a8\u6001\u5e93\u94fe\u63a5\u7684\u65f6\u5019\uff0cApp \u7684\u7b26\u53f7\u4f1a\u62a5\u9519\u627e\u4e0d\u5230\uff0c\u6b64\u65f6\u53ef\u4ee5\u4f20\u94fe\u63a5\u5668\u53c2\u6570\uff0c\u544a\u8bc9\u94fe\u63a5\u5668\u5141\u8bb8\u67d0\u4e9b\u7b26\u53f7\u672a\u5b9a\u4e49\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OTHER_LDFLAGS = $(inherited) -Xlinker -U -Xlinker _OBJC_CLASS_$_AppObject")),(0,r.kt)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u987a\u5229\u901a\u8fc7\u94fe\u63a5\uff0c\u5e76\u4e14\u5728\u8fd0\u884c\u65f6\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"AppObject"),"\u3002"),(0,r.kt)("h3",{id:"2-\u52a8\u6001\u5e93\u94fe\u63a5\u9759\u6001\u5e93"},"2. \u52a8\u6001\u5e93\u94fe\u63a5\u9759\u6001\u5e93"),(0,r.kt)("p",null,"App -> \u52a8\u6001\u5e93 A -> \u9759\u6001\u5e93 B\uff0c\u52a8\u6001\u5e93 A \u7684\u94fe\u63a5\u9636\u6bb5\u5c31\u4f1a\u628a\u9759\u6001\u5e93 B \u7684\u7b26\u53f7\u90fd\u8f7d\u5165\u8fdb\u6765\uff0c\u56e0\u6b64\uff0c\u9759\u6001\u5e93 B \u7684\u5bfc\u51fa\u7b26\u53f7\u4e5f\u5c31\u6210\u4e3a\u52a8\u6001\u5e93 A \u7684\u5bfc\u51fa\u7b26\u53f7\uff0c\u5bf9 App \u81ea\u7136\u4e5f\u662f\u53ef\u89c1\u7684\uff0cApp \u4f7f\u7528\u9759\u6001\u5e93 B \u6ca1\u6709\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u628a\u9759\u6001\u5e93 B \u7684\u7b26\u53f7\u66b4\u9732\u7ed9 App\uff0c\u53ef\u4ee5\u4f20\u94fe\u63a5\u5668\u53c2\u6570\uff0c\u544a\u8bc9\u94fe\u63a5\u5668\u9690\u85cf\u9759\u6001\u5e93 B \u7684\u7b26\u53f7\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'OTHER_LDFLAGS = $(inherited) -Xlinker -hidden-l"B"')),(0,r.kt)("h3",{id:"3-\u9759\u6001\u5e93\u94fe\u63a5\u9759\u6001\u5e93"},"3. \u9759\u6001\u5e93\u94fe\u63a5\u9759\u6001\u5e93"),(0,r.kt)("p",null,"App -> \u9759\u6001\u5e93 A -> \u9759\u6001\u5e93 B\uff0c\u9700\u8981\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"HEADER_SEARCH_PATHS")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"OTHER_LDFLAGS")," \u8ba9\u9759\u6001\u5e93 B \u5bf9 App \u53ef\u89c1\u3002"),(0,r.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u4f7f\u7528 pod \u628a\u9759\u6001\u5e93 B \u88c5\u7ed9 App\u3002"),(0,r.kt)("h3",{id:"4-\u9759\u6001\u5e93\u94fe\u63a5\u52a8\u6001\u5e93"},"4. \u9759\u6001\u5e93\u94fe\u63a5\u52a8\u6001\u5e93"),(0,r.kt)("p",null,"App -> \u9759\u6001\u5e93 A -> \u52a8\u6001\u5e93 B\uff0c\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"FRAMEWORK_SEARCH_PATHS")," \u8ba9\u52a8\u6001\u5e93 B \u5bf9 App \u53ef\u89c1\uff0c\u540c\u65f6\u53c2\u8003 1 \u4e2d\u7684\u505a\u6cd5\uff0c\u901a\u8fc7\u811a\u672c\u62f7\u8d1d Framework \u6216\u8005\u901a\u8fc7 pod \u5b89\u88c5\u3002"),(0,r.kt)("h2",{id:"cocoapods-\u96c6\u6210"},"Cocoapods \u96c6\u6210"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'target "Runner" do\n  # \u52a0\u4e0a\u8fd9\u53e5\u5c31\u662f\u628a\u4e0b\u9762\u7684pod\u90fd\u7528\u52a8\u6001\u5e93\uff0c\u53bb\u6389\u8fd9\u53e5\u5c31\u662f\u90fd\u7528\u9759\u6001\u5e93\n  use_frameworks!\nend\n\n# \u90e8\u5206\u4f7f\u7528\u52a8\u6001\u5e93\uff0c\u5176\u4f59\u9759\u6001\u5e93\ndylib_set = Set.new ["bugly", "sqflite", "pdf_engine", "FMDB"]\npost_install do |installer|\n  installer.pods_project.targets.each do |target|\n    unless dylib_set.include?(target.name)\n      target.build_configurations.each do |config|\n        config.build_settings["MACH_O_TYPE"] = "staticlib"\n      end\n    end\n  end\nend\n')),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("p",null,"\u5934\u6587\u4ef6\u4e5f\u8981\u7f16\u8bd1\uff0c\u5c24\u5176\u5bf9\u4e8e C++ \u6765\u8bf4\uff0c\u5934\u6587\u4ef6\u51e0\u4e4e\u5305\u542b\u4e86\u6240\u6709\u8bed\u6cd5\u7279\u6027\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clang.llvm.org/docs/Modules.html"},"https://clang.llvm.org/docs/Modules.html")),(0,r.kt)("p",null,"Most software is built using a number of software libraries. For each library, one needs to access both its interface (API) and its implementation."),(0,r.kt)("p",null,"In the C family of languages, the interface to a library is accessed by including the appropriate header files(s):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#include <SomeLib.h>\n")),(0,r.kt)("p",null,"\uff08\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," \u7684\u574f\u5904\uff09The ",(0,r.kt)("inlineCode",{parentName:"p"},"#include")," mechanism provided by the C preprocessor is a very poor way to access the API of a library, for a number of reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In a project with N translation units and M headers included in each translation unit, the compiler is performing M x N work even though most of the M headers are shared among multiple translation units.\uff08\u5934\u6587\u4ef6\u88ab\u91cd\u590d\u7f16\u8bd1\u591a\u6b21\uff09"),(0,r.kt)("li",{parentName:"ul"},"When the headers for two different libraries interact due to macro collisions, users are forced to reorder ",(0,r.kt)("inlineCode",{parentName:"li"},"#include")," directives or introduce ",(0,r.kt)("inlineCode",{parentName:"li"},"#undef")," directives to break the (unintended) dependency.\uff08\u5b8f\u5b9a\u4e49\u51b2\u7a81\uff09"),(0,r.kt)("li",{parentName:"ul"},"C programmers have adopted a number of conventions to work around the fragility of the C preprocessor model.\uff08\u7528\u5168\u5927\u5199\u3001\u52a0\u4e0b\u5212\u7ebf\u7b49\u60ef\u7528\u6cd5\u6765\u907f\u514d\u547d\u540d\u51b2\u7a81\uff0c\u4f7f\u4ee3\u7801\u53d8\u5f97\u53c8\u957f\u53c8\u81ed\uff09"),(0,r.kt)("li",{parentName:"ul"},"The boundaries of the libraries are not clear. Which headers belong to a particular library, and in what order should those headers be included to guarantee that they compile correctly?\uff08\u8bf4\u4e0d\u6e05\u695a\u8fb9\u754c\u5230\u5e95\u5728\u54ea\uff09")),(0,r.kt)("p",null,"\uff08\u7528 Modules \u7684\u597d\u5904\uff09When the compiler sees the module import ",(0,r.kt)("inlineCode",{parentName:"p"},"@import std.io;"),", it loads a ",(0,r.kt)("strong",{parentName:"p"},"binary")," representation of the std.io module. Preprocessor definitions that precede the import declaration have no impact on the API provided by std.io, because the module itself was compiled as a separate, standalone module.\uff08\u6bcf\u4e2a\u5934\u6587\u4ef6\u53ea\u4f1a\u7f16\u8bd1\u4e00\u6b21\uff09"),(0,r.kt)("p",null,"clang \u7f16\u8bd1\u5668\u4f1a\u81ea\u52a8\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"#include <stdio.h>")," \u6307\u4ee4\u7ffb\u8bd1\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"@import std.io;"),"\u3002"),(0,r.kt)("p",null,"The crucial link between modules and headers is described by a ",(0,r.kt)("strong",{parentName:"p"},"module map"),", which describes how a collection of existing headers maps on to the (logical) structure of a module. Having a list of the headers that are part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"std")," module allows the compiler to build the ",(0,r.kt)("inlineCode",{parentName:"p"},"std")," module as a standalone entity, and having the mapping from header names to (sub)modules allows the automatic translation of ",(0,r.kt)("inlineCode",{parentName:"p"},"#include")," directives to module imports."),(0,r.kt)("p",null,"The binary representation of modules is persisted in the module cache. Modules maintain references to each of the headers that were part of the module build. If any of those headers changes, or if any of the modules on which a module depends change, then the module will be (automatically) recompiled. The process should never require any user intervention."),(0,r.kt)("p",null,"To enable support for using a library as a module, one must write a ",(0,r.kt)("inlineCode",{parentName:"p"},"module.modulemap")," file for that library. The ",(0,r.kt)("inlineCode",{parentName:"p"},"module.modulemap")," file is placed alongside the header files themselves."),(0,r.kt)("p",null,"\u5148\u5199\u597d ",(0,r.kt)("inlineCode",{parentName:"p"},"module.modulemap")," \u518d\u7f16\u8bd1\uff0c\u624d\u80fd\u4ea7\u751f module cache\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"clang -fmodules -fmodules-cache-path=prebuilt use.c")),(0,r.kt)("p",null,"\u67e5\u770b\u53c2\u6570\u542b\u4e49\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},'clang --help | grep "\\-fmodules" -A 5')),(0,r.kt)("p",null,"\u53c2\u8003\u5f00\u6e90\u5e93\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"module.modulemap")," \u6587\u4ef6\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:t(89463).Z})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'framework module SDWebImage {\n  umbrella header "SDWebImage-umbrella.h"\n\n  export *\n  module * { export * }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"export *"),": anything included by that submodule will be automatically re-exported"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"module *"),": module \u91cc\u7684\u6240\u6709\u5934\u6587\u4ef6\u90fd\u5f53\u4f5c\u4e00\u4e2a\u5b50 module"),(0,r.kt)("h2",{id:"swift-library"},"Swift Library"),(0,r.kt)("p",null,"App \u91cc Swift \u8c03\u7528 OC \u4ee3\u7801\uff0c\u662f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"-Bridge-Header.h")," \u6865\u63a5\u6587\u4ef6\u3002\u4f46\u5728 Swift \u5e93\u4e2d\u65e0\u6cd5\u4f7f\u7528\u6865\u63a5\u6587\u4ef6\uff0c\u600e\u4e48\u529e\uff1f\u53ef\u4ee5\u628a OC \u7684\u5934\u6587\u4ef6\u653e\u5230 modulemap \u4e0b\uff0c\u5373\u53ef\u66b4\u9732\u7ed9 Swift \u8c03\u7528\u3002"),(0,r.kt)("p",null,"Swift \u9759\u6001\u5e93 A \u4e0e Swift \u9759\u6001\u5e93 B \u5408\u5e76\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"libtool \u5408\u5e76\u9759\u6001\u5e93 A\u3001B"),(0,r.kt)("li",{parentName:"ul"},"swift \u5934\u6587\u4ef6\u548c modulemap \u6587\u4ef6\u653e\u5230\u4e00\u8d77"),(0,r.kt)("li",{parentName:"ul"},"OC \u8981\u8c03\u7528\u5408\u5e76\u540e\u7684\u9759\u6001\u5e93\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},'OTHER_CFLAGS="-fmodule-map-file=${SRCROOT}/AGSwiftA.framework/module.modulemap" "-fmodule-map-file=${SRCROOT}/AGSwiftB.framework/module.modulemap"')),(0,r.kt)("li",{parentName:"ul"},"Swift \u8981\u8c03\u7528\u5408\u5e76\u540e\u7684\u9759\u6001\u5e93\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},'SWIFT_INCLUDE_PATHS="${SRCROOT}/AGSwiftC/AGSwiftA.framework" "${SRCROOT}/AGSwiftC/AGSwiftB.framework"'))),(0,r.kt)("h2",{id:"\u88c1\u526a"},"\u88c1\u526a"),(0,r.kt)("p",null,"\u67e5\u770b\u652f\u6301\u7684\u67b6\u6784\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"lipo -info opencv2.framework")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// \u5148\u7626\u8eab\uff0c\u8f93\u51fa\u5355\u4e00\u67b6\u6784\n$ lipo opencv2.framework/opencv2 -thin arm64 -output opencv2.framework/opencv2-arm64\n$ lipo opencv2.framework/opencv2 -thin x86_64 -output opencv2.framework/opencv2-x86_64\n// \u518d\u5408\u5e76\n$ lipo -create opencv2.framework/opencv2-arm64 opencv2.framework/opencv2-x86_64 -output opencv2.framework/opencv2\n")),(0,r.kt)("h2",{id:"\u67e5\u770b\u5e93\u91cc\u7684\u7b26\u53f7"},"\u67e5\u770b\u5e93\u91cc\u7684\u7b26\u53f7"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'otool -tv ./ZWAppApi.framework/ZWAppApi | grep "NSString"')))}d.isMDXComponent=!0},92387:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6OGM4ZTE4NWNmOWVhMDFlNDdiNjI3MWQ3ODM4YTQyZTYyNTNkMGJhMzVhMWU3MjAwMzYwMzVlODYzMjkwZjc4MwpzaXplIDEzMTI5MQo="},89463:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MjhmMzRlYWE1ZDA3ZTMwNjVhYWMzZmViYzg3NDcyYzM0NWJjZjZmMDg3NTE5Njc1NTQxMTcxN2U1NzQ1YzVlNQpzaXplIDE5NDYyOAo="},27114:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6ZWNmNmFjNGFhMWVlZDgxZDYwZmIyOWNkY2VkYWQ5ZTYyZjJiNGExODI0MThjNDdkNjAyOWQwOWJjMWExMGE0YwpzaXplIDIwNzU4MAo="},37958:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6NzIzYzliZDY4NTQxZmUyYjEzMWNmYTZlZWE1ODhiYjBmODAwNjE3NzVlZDI4NmUyZGJlMzdjNzQ1NWI0YzEwMwpzaXplIDEyNjA2MAo="}}]);