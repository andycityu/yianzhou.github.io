"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4603],{30005:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=n(87462),i=(n(67294),n(3905));n(61839);const o={},r="Apple Bugs",l={unversionedId:"apple-bugs",id:"apple-bugs",title:"Apple Bugs",description:"\u53cd\u9988",source:"@site/docs/apple/apple-bugs.md",sourceDirName:".",slug:"/apple-bugs",permalink:"/docs/apple/apple-bugs",draft:!1,editUrl:"https://github.com/yianzhou/yianzhou.github.io/docs/apple/apple-bugs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5305\u4f53\u5927\u5c0f\u4f18\u5316",permalink:"/docs/apple/app-size"},next:{title:"Aspects",permalink:"/docs/apple/aspects"}},p={},s=[{value:"\u53cd\u9988",id:"\u53cd\u9988",level:2},{value:"Unable to install",id:"unable-to-install",level:2},{value:"Instruments \u770b\u4e0d\u5230\u7b26\u53f7",id:"instruments-\u770b\u4e0d\u5230\u7b26\u53f7",level:2},{value:"WKPasswordView \u5d29\u6e83\u95ee\u9898",id:"wkpasswordview-\u5d29\u6e83\u95ee\u9898",level:2},{value:"Xcode \u7f16\u8bd1\u9047\u5230\u9519\u8bef\u76f4\u63a5\u505c\u4f4f",id:"xcode-\u7f16\u8bd1\u9047\u5230\u9519\u8bef\u76f4\u63a5\u505c\u4f4f",level:2},{value:"\u6a21\u62df\u5668\u8bfb\u4e0d\u4e86\u526a\u8d34\u677f",id:"\u6a21\u62df\u5668\u8bfb\u4e0d\u4e86\u526a\u8d34\u677f",level:2},{value:"\u5728 LLDB \u4f7f\u7528\u4e2d\u6587\u4f1a\u5361\u6b7b",id:"\u5728-lldb-\u4f7f\u7528\u4e2d\u6587\u4f1a\u5361\u6b7b",level:2},{value:"Wi-Fi \u6162",id:"wi-fi-\u6162",level:2},{value:"\u79c1\u6709\u65e0\u7ebf\u5c40\u57df\u7f51\u5730\u5740\uff08MAC \u5730\u5740\uff09",id:"\u79c1\u6709\u65e0\u7ebf\u5c40\u57df\u7f51\u5730\u5740mac-\u5730\u5740",level:2},{value:"Xcode \u9ad8\u4eae\u548c\u81ea\u52a8\u8865\u5168\u5931\u6548",id:"xcode-\u9ad8\u4eae\u548c\u81ea\u52a8\u8865\u5168\u5931\u6548",level:2}],d={toc:s};function c(e){let{components:a,...o}=e;return(0,i.kt)("wrapper",(0,t.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"apple-bugs"},"Apple Bugs"),(0,i.kt)("h2",{id:"\u53cd\u9988"},"\u53cd\u9988"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://feedbackassistant.apple.com/"},"Feedback Assistant")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/bug-reporting/profiles-and-logs/"},"Bug Reporting")),(0,i.kt)("h2",{id:"unable-to-install"},"Unable to install"),(0,i.kt)("p",null,"Xcode \u8c03\u8bd5\u65e0\u6cd5\u5b89\u88c5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u91cd\u542f Xcode\uff1a\u274c"),(0,i.kt)("li",{parentName:"ul"},"\u91cd\u542f Mac\uff1a\u274c"),(0,i.kt)("li",{parentName:"ul"},"\u62d4\u6389\u7ebf\u91cd\u63d2\uff1a\u2705"),(0,i.kt)("li",{parentName:"ul"},"\u91cd\u542f iPhone\uff1a\u2705\uff0823/4/10 \u8bd5\u4e86\u4e5f\u4e0d\u884c\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u5220\u6389\u6240\u6709 appextension target\uff1a\u2705\uff0823/4/10 \u8bd5\u4e86\u4e5f\u4e0d\u884c\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u5220\u6389 APP \u91cd\u88c5\uff1a\u2705")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Details\n\nUnable to install "???"\nDomain: com.apple.dt.MobileDeviceErrorDomain\nCode: -402653170\nUser Info: {\n    DVTErrorCreationDateKey = "2023-03-28 07:33:56 +0000";\n    IDERunOperationFailingWorker = IDEInstalliPhoneLauncher;\n}\n--\nEnd of file.\nDomain: com.apple.dt.MobileDeviceErrorDomain\nCode: -402653170\nUser Info: {\n    DVTRadarComponentKey = 261622;\n    MobileDeviceErrorCode = "(0xE800000E)";\n    "com.apple.dtdevicekit.stacktrace" = (\n    0   DTDeviceKitBase                     0x000000011131c2bc DTDKCreateNSErrorFromAMDErrorCode + 300\n    1   DTDeviceKitBase                     0x00000001113503c0 __90-[DTDKMobileDeviceToken installApplicationBundleAtPath:withOptions:andError:withCallback:]_block_invoke + 136\n    2   DVTFoundation                       0x00000001053f20e0 DVTInvokeWithStrongOwnership + 76\n    3   DTDeviceKitBase                     0x0000000111350144 -[DTDKMobileDeviceToken installApplicationBundleAtPath:withOptions:andError:withCallback:] + 1196\n    4   IDEiOSSupportCore                   0x0000000116d73c34 __118-[DVTiOSDevice(DVTiPhoneApplicationInstallation) processAppInstallSet:appUninstallSet:installOptions:completionBlock:]_block_invoke.147 + 2328\n    5   DVTFoundation                       0x00000001054fc99c __DVT_CALLING_CLIENT_BLOCK__ + 16\n    6   DVTFoundation                       0x00000001054fd408 __DVTDispatchAsync_block_invoke + 152\n    7   libdispatch.dylib                   0x000000019e62e5f0 _dispatch_call_block_and_release + 32\n    8   libdispatch.dylib                   0x000000019e6301b4 _dispatch_client_callout + 20\n    9   libdispatch.dylib                   0x000000019e6378a8 _dispatch_lane_serial_drain + 668\n    10  libdispatch.dylib                   0x000000019e638404 _dispatch_lane_invoke + 392\n    11  libdispatch.dylib                   0x000000019e642c98 _dispatch_workloop_worker_thread + 648\n    12  libsystem_pthread.dylib             0x000000019e7f0360 _pthread_wqthread + 288\n    13  libsystem_pthread.dylib             0x000000019e7ef080 start_wqthread + 8\n);\n}\n--\n\nAnalytics Event: com.apple.dt.IDERunOperationWorkerFinished : {\n    "device_model" = "iPhone13,2";\n    "device_osBuild" = "16.3.1 (20D67)";\n    "device_platform" = "com.apple.platform.iphoneos";\n    "launchSession_schemeCommand" = Run;\n    "launchSession_state" = 1;\n    "launchSession_targetArch" = arm64;\n    "operation_duration_ms" = 151672;\n    "operation_errorCode" = "-402653170";\n    "operation_errorDomain" = "com.apple.dt.MobileDeviceErrorDomain";\n    "operation_errorWorker" = IDEInstalliPhoneLauncher;\n    "operation_name" = IDEiPhoneRunOperationWorkerGroup;\n    "param_consoleMode" = 0;\n    "param_debugger_attachToExtensions" = 0;\n    "param_debugger_attachToXPC" = 1;\n    "param_debugger_type" = 5;\n    "param_destination_isProxy" = 0;\n    "param_destination_platform" = "com.apple.platform.iphoneos";\n    "param_diag_MainThreadChecker_stopOnIssue" = 0;\n    "param_diag_MallocStackLogging_enableDuringAttach" = 0;\n    "param_diag_MallocStackLogging_enableForXPC" = 1;\n    "param_diag_allowLocationSimulation" = 1;\n    "param_diag_checker_tpc_enable" = 1;\n    "param_diag_gpu_frameCapture_enable" = 0;\n    "param_diag_gpu_shaderValidation_enable" = 0;\n    "param_diag_gpu_validation_enable" = 0;\n    "param_diag_memoryGraphOnResourceException" = 0;\n    "param_diag_queueDebugging_enable" = 1;\n    "param_diag_runtimeProfile_generate" = 0;\n    "param_diag_sanitizer_asan_enable" = 0;\n    "param_diag_sanitizer_tsan_enable" = 0;\n    "param_diag_sanitizer_tsan_stopOnIssue" = 0;\n    "param_diag_sanitizer_ubsan_stopOnIssue" = 0;\n    "param_diag_showNonLocalizedStrings" = 0;\n    "param_diag_viewDebugging_enabled" = 1;\n    "param_diag_viewDebugging_insertDylibOnLaunch" = 1;\n    "param_install_style" = 0;\n    "param_launcher_UID" = 2;\n    "param_launcher_allowDeviceSensorReplayData" = 0;\n    "param_launcher_kind" = 0;\n    "param_launcher_style" = 0;\n    "param_launcher_substyle" = 0;\n    "param_runnable_appExtensionHostRunMode" = 0;\n    "param_runnable_productType" = "com.apple.product-type.application";\n    "param_runnable_type" = 2;\n    "param_testing_launchedForTesting" = 0;\n    "param_testing_suppressSimulatorApp" = 0;\n    "param_testing_usingCLI" = 0;\n    "sdk_canonicalName" = "iphoneos16.2";\n    "sdk_osVersion" = "16.2";\n    "sdk_variant" = iphoneos;\n}\n--\n\n\nSystem Information\n\nmacOS Version 12.6.2 (Build 21G320)\nXcode 14.2 (21534) (Build 14C18)\nTimestamp: 2023-03-28T15:33:56+08:00\n')),(0,i.kt)("h2",{id:"instruments-\u770b\u4e0d\u5230\u7b26\u53f7"},"Instruments \u770b\u4e0d\u5230\u7b26\u53f7"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u91cd\u542f Xcode \u548c Mac"),(0,i.kt)("li",{parentName:"ol"},"\u786e\u4fdd xcode \u5de5\u7a0b\u91cc\u5f00\u542f DWARF with dSYM"),(0,i.kt)("li",{parentName:"ol"},"\u91cd\u65b0 profile \u4e00\u6b21")),(0,i.kt)("p",null,"\u5982\u679c 1~3 \u8fd8\u4e0d\u884c\uff0c\u91cd\u88c5 Xcode \u5373\u53ef\u89e3\u51b3\u95ee\u9898\u3002"),(0,i.kt)("h2",{id:"wkpasswordview-\u5d29\u6e83\u95ee\u9898"},"WKPasswordView \u5d29\u6e83\u95ee\u9898"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(93735).Z,width:"1725",height:"710"})),(0,i.kt)("h2",{id:"xcode-\u7f16\u8bd1\u9047\u5230\u9519\u8bef\u76f4\u63a5\u505c\u4f4f"},"Xcode \u7f16\u8bd1\u9047\u5230\u9519\u8bef\u76f4\u63a5\u505c\u4f4f"),(0,i.kt)("p",null,"\u7f16\u8bd1\u9047\u5230\u9519\u8bef\u76f4\u63a5\u505c\u4f4f\uff0c\u4e0d\u7ee7\u7eed\u8fdb\u884c\u4e5f\u4e0d\u62a5\u9519\u8bef"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(9967).Z,width:"2704",height:"196"})),(0,i.kt)("h2",{id:"\u6a21\u62df\u5668\u8bfb\u4e0d\u4e86\u526a\u8d34\u677f"},"\u6a21\u62df\u5668\u8bfb\u4e0d\u4e86\u526a\u8d34\u677f"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/forums/thread/682395"},"https://developer.apple.com/forums/thread/682395")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'2022-06-10 14:20:49.799939+0800 mttlite[95986:1163105] [claims] Upload preparation for claim 86E693B5-3C42-4D3C-961F-D765CBD0DCAC completed with error: Error Domain=NSCocoaErrorDomain Code=256 "\u672a\u80fd\u6253\u5f00\u6587\u4ef6\u201c62a2509f882bf7cad1f2c3e8d11735b88a810281\u201d\u3002" UserInfo={NSURL=file:///Users/yianzhou/Library/Developer/CoreSimulator/Devices/2B208B55-99BE-4A23-901D-D8A88D07452B/data/Library/Caches/com.apple.Pasteboard/eb77e5f8f043896faf63b5041f0fbd121db984dd/62a2509f882bf7cad1f2c3e8d11735b88a810281, NSFilePath=/Users/yianzhou/Library/Developer/CoreSimulator/Devices/2B208B55-99BE-4A23-901D-D8A88D07452B/data/Library/Caches/com.apple.Pasteboard/eb77e5f8f043896faf63b5041f0fbd121db984dd/62a2509f882bf7cad1f2c3e8d11735b88a810281, NSUnderlyingError=0x600000a59770 {Error Domain=NSOSStatusErrorDomain Code=-10817 "(null)"}}\n')),(0,i.kt)("h2",{id:"\u5728-lldb-\u4f7f\u7528\u4e2d\u6587\u4f1a\u5361\u6b7b"},"\u5728 LLDB \u4f7f\u7528\u4e2d\u6587\u4f1a\u5361\u6b7b"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/unixzii/XcodePatch"},"unixzii/XcodePatch: A patch collection to save your Xcode.")," Xcode 13.3 introduced a very annoying bug. When you type anything with Chinese IME in the LLDB console, the whole app freezes! I did some investigation and fixed this issue before Apple publishes the next release."),(0,i.kt)("h2",{id:"wi-fi-\u6162"},"Wi-Fi \u6162"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@mariociabarra/wifriedx-in-depth-look-at-yosemite-wifi-and-awdl-airdrop-41a93eb22e48"},"WiFriedX | by Mario Ciabarra | Medium")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/stadia/answer/9595943?hl=en#zippy=%2Cmac-and-ios-troubleshooting"},"Troubleshooting your Stadia experience - Stadia Help")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/441284532"},"Mac WiFi \u95f4\u6b47\u6027\u65ad\u6d41\u65ad\u7f51\u95ee\u9898\u89e3\u51b3 - \u77e5\u4e4e")),(0,i.kt)("p",null,"AWDL \u662f\u82f9\u679c\u516c\u53f8\u63a8\u51fa\u7684\u72ec\u5bb6\u65e0\u7ebf\u76f4\u63a5\u94fe\u63a5\u534f\u8bae\uff0c\u53ef\u5b9e\u73b0\u70b9\u5230\u70b9\u7684\u6570\u636e\u9ad8\u901f\u4f20\u9001\uff0c\u5b83\u7684\u6570\u636e\u4f20\u8f93\u539f\u7406\u662f\u5148\u7528\u84dd\u7259\u5bf9\u63a5\u4e0a\uff0c\u518d\u5360\u7528 WiFi \u6a21\u5757\u8fdb\u884c\u4f20\u8f93\u3002Apple \u4fa7\u5e76\u4e0d\u8ba4\u4e3a\u8fd9\u662f\u4e2a\u95ee\u9898\u6216 BUG\uff0c\u4f46\u5728\u65e0\u7ebf\u9ad8\u5bc6\u3001\u9ad8\u5e76\u53d1\u7684\u529e\u516c\u573a\u666f\u5185\u4f7f\u7528\u5bf9\u672c\u673a\u53ca\u540c\u9897\u65e0\u7ebf AP \u4e0b\u7684\u5176\u4ed6\u7528\u6237\u7684\u65e0\u7ebf\u4f53\u9a8c\u5e26\u6765\u5f71\u54cd\u3002"),(0,i.kt)("h2",{id:"\u79c1\u6709\u65e0\u7ebf\u5c40\u57df\u7f51\u5730\u5740mac-\u5730\u5740"},"\u79c1\u6709\u65e0\u7ebf\u5c40\u57df\u7f51\u5730\u5740\uff08MAC \u5730\u5740\uff09"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://support.apple.com/zh-cn/HT211227"},"\u5728 iPhone\u3001iPad\u3001iPod touch \u548c Apple Watch \u4e0a\u4f7f\u7528\u79c1\u6709\u65e0\u7ebf\u5c40\u57df\u7f51\u5730\u5740 - \u5b98\u65b9 Apple \u652f\u6301 (\u4e2d\u56fd)")),(0,i.kt)("h2",{id:"xcode-\u9ad8\u4eae\u548c\u81ea\u52a8\u8865\u5168\u5931\u6548"},"Xcode \u9ad8\u4eae\u548c\u81ea\u52a8\u8865\u5168\u5931\u6548"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rm -rf ~/Library/Developer/Xcode/DerivedData/ModuleCache.noindex")),(0,i.kt)("p",null,"\u8fd8\u4e0d\u884c\u7684\u8bdd\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"rm -rf ~/Library/Developer/Xcode/DerivedData/")))}c.isMDXComponent=!0},93735:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/672DED12-1B0D-4512-B732-F1EA9AD0747D-f3a6e166f3a887f1a6f5df58313e7348.png"},9967:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/F14F25E6-64EC-4BAF-9B14-9C621572B555-811f5a8f67bbc1f467760520fa7c56bb.png"}}]);