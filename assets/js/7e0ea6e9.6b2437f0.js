"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8882],{72516:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));a(61839);const r={},i="\u7b26\u53f7\u5316",s={unversionedId:"symbolic",id:"symbolic",title:"\u7b26\u53f7\u5316",description:"RVA",source:"@site/docs/apple/symbolic.md",sourceDirName:".",slug:"/symbolic",permalink:"/docs/apple/symbolic",draft:!1,editUrl:"https://github.com/yianzhou/yianzhou.github.io/docs/apple/symbolic.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4fe1\u53f7\u91cf",permalink:"/docs/apple/semaphore"},next:{title:"UIScene",permalink:"/docs/apple/uiscene"}},o={},d=[{value:"RVA",id:"rva",level:2},{value:"\u83b7\u53d6\u51fd\u6570\u8c03\u7528\u6808",id:"\u83b7\u53d6\u51fd\u6570\u8c03\u7528\u6808",level:2},{value:"\u7b26\u53f7\u5316\u539f\u7406",id:"\u7b26\u53f7\u5316\u539f\u7406",level:2},{value:"\u5d29\u6e83\u7b26\u53f7\u5316\u5b9e\u6218",id:"\u5d29\u6e83\u7b26\u53f7\u5316\u5b9e\u6218",level:2}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7b26\u53f7\u5316"},"\u7b26\u53f7\u5316"),(0,l.kt)("h2",{id:"rva"},"RVA"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://tech-zealots.com/malware-analysis/understanding-concepts-of-va-rva-and-offset/"},"Understanding Concepts Of VA, RVA and Offset")),(0,l.kt)("p",null,"Applications do not directly access physical memory, they only access virtual memory. In other words, the Virtual Addresses (VAs) are the memory addresses that are referenced by an application."),(0,l.kt)("p",null,"Relative Virtual Address (RVA) is the relative address with respect to the ImageBase. ImageBase here means the base address where the executable file is first loaded into the memory."),(0,l.kt)("p",null,"We can calculate RVA with the help of the following formula: VA = RVA + ImageBase."),(0,l.kt)("h2",{id:"\u83b7\u53d6\u51fd\u6570\u8c03\u7528\u6808"},"\u83b7\u53d6\u51fd\u6570\u8c03\u7528\u6808"),(0,l.kt)("p",null,"\u51fd\u6570\u8c03\u7528\u65f6\uff0c\u51fd\u6570\u5165\u53c2\u3001\u8fd4\u56de\u5730\u5740\u3001\u672c\u5730\u53d8\u91cf\u4f1a\u8bb0\u5f55\u5728\u6808\u5e27\u91cc\u3002\u6808\u6307\u9488\u6307\u5411\u6808\u7684\u9876\u90e8\uff1b\u5e27\u6307\u9488\u6307\u5411\u4e0a\u4e00\u6808\u5e27\u3002\u8fd9\u6837\u5c31\u53ef\u4ee5\u9012\u5f52\u56de\u6eaf\u83b7\u53d6\u6574\u4e2a\u8c03\u7528\u6808\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:a(19334).Z})),(0,l.kt)("p",null,"\u4ee5\u4e0b\u65b9\u6cd5\u53ef\u4ee5\u83b7\u53d6\u5f53\u524d\u7ebf\u7a0b\u7684\u8c03\u7528\u6808\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objc"},'// The return value describes the call stack backtrace of the current thread at the moment this method was called.\nNSArray<NSString *> *array = [NSThread callStackSymbols];\nNSLog(@"%@", array);\n')),(0,l.kt)("p",null,"\u8981\u83b7\u53d6\u6240\u6709\u7ebf\u7a0b\u7684\u8c03\u7528\u6808\uff0c\u8981\u4f9d\u9760\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u63a5\u53e3\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"// \u83b7\u53d6\u4efb\u52a1\uff08\u5373\u8fdb\u7a0b\uff09\u7684\u6240\u6709\u7ebf\u7a0b\nmach_msg_type_number_t count;\nthread_act_array_t list;\ntask_threads(mach_task_self(), &list, &count);\n\n// \u83b7\u53d6\u7ebf\u7a0b\u72b6\u6001\nmach_msg_type_number_t stateCountBuff = ARM_THREAD_STATE64_COUNT;\nkern_return_t kr = thread_get_state(thread, ARM_THREAD_STATE64, (thread_state_t)&machineContext->__ss, &stateCountBuff);\n\n// machineContext.__ss.__pc \u5373 CPU \u6307\u4ee4\u5730\u5740\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c",metastring:"title='usr/include/mach/task.h'",title:"'usr/include/mach/task.h'"},"// typedef int kern_return_t; e.g. KERN_SUCCESS\nkern_return_t task_threads // \u83b7\u53d6\u6240\u6709\u7ebf\u7a0b\uff0cMach Task \u5373 BSD \u8fdb\u7a0b\uff0c\u4e24\u8005\u662f\u4e00\u4e00\u5bf9\u5e94\u5173\u7cfb\u3002\n(\n    task_inspect_t target_task, // \u5f53\u524d\u4efb\u52a1\uff08\u8fdb\u7a0b\uff09\n    thread_act_array_t *act_list, // \u4efb\u52a1\u4e2d\u6240\u6709\u7ebf\u7a0b\u7684\u5217\u8868\n    mach_msg_type_number_t *act_listCnt // \u4efb\u52a1\u4e2d\u6240\u6709\u7ebf\u7a0b\u7684\u6570\u91cf\n);\n\n// \u5b9a\u4e49\u5728 mach/thread_act.h\nkern_return_t thread_get_state // \u83b7\u53d6\u7ebf\u7a0b\u72b6\u6001\n(\n    thread_read_t target_act, // \u76ee\u6807\u7ebf\u7a0b\n    thread_state_flavor_t flavor, // \u7ebf\u7a0b\u72b6\u6001\u7c7b\u578b\uff0c\u548c CPU \u67b6\u6784\u6709\u5173\n    thread_state_t old_state, // \u83b7\u53d6\u7ebf\u7a0b\u6808\u5bc4\u5b58\u5668\n    mach_msg_type_number_t *old_stateCnt // \u7ebf\u7a0b\u72b6\u6001\u6210\u5458\u6570\u7ec4\n);\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\uff0c\u6211\u4eec\u83b7\u5f97\u4e86\u6240\u6709\u7ebf\u7a0b\u7684\u8c03\u7528\u6808\uff0c\u4ee5\u53ca\u8be6\u7ec6\u7684\u51fd\u6570\u5730\u5740\u4fe1\u606f\uff0c\u90a3\u4e48\uff0c\u5982\u4f55\u5c06\u5b83\u7b26\u53f7\u5316\u5462\uff1f"),(0,l.kt)("h2",{id:"\u7b26\u53f7\u5316\u539f\u7406"},"\u7b26\u53f7\u5316\u539f\u7406"),(0,l.kt)("p",null,"DWARF \u662f\u4e00\u79cd\u88ab\u4f17\u591a\u7f16\u8bd1\u5668\u548c\u8c03\u8bd5\u5668\u4f7f\u7528\u7684\u3001\u7528\u4e8e\u652f\u6301\u6e90\u4ee3\u7801\u8c03\u8bd5\u7684\u6587\u4ef6\u683c\u5f0f\u3002"),(0,l.kt)("p",null,"\u5728\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\uff0c\u76ee\u6807\u6587\u4ef6\uff08mach-o\uff09\u5c06\u8c03\u8bd5\u4fe1\u606f\u4fdd\u5b58\u5728\u4e13\u95e8\u7684 Sections \u91cc\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"clang -c main.c")," \u540e ",(0,l.kt)("inlineCode",{parentName:"p"},"objdump --macho --private-headers main.o"),"\uff0c\u6b64\u65f6\u6ca1\u6709 Dwarf Section\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"clang -c -g main.c")," \u540e\u518d\u67e5\u770b\uff0c\u591a\u4e86\u5f88\u591a segname \u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"__DWARF"),"\u7684 section\u3002"),(0,l.kt)("p",null,"dSYM \u6587\u4ef6\u662f\u4fdd\u5b58\u4e86 DWARF \u683c\u5f0f\u7684\u8c03\u8bd5\u4fe1\u606f\u7684\u6587\u4ef6\u3002\u5b83\u662f\u600e\u4e48\u751f\u6210\u7684\uff1f\u4ece\u76ee\u6807\u6587\u4ef6\u4e2d\u52a0\u8f7d DWARF \u6bb5\u3001\u91cd\u5b9a\u4f4d\u6240\u6709\u5730\u5740\u3001\u7136\u540e\u6253\u5305\u6210 dSYM\u3002dSYM \u4fdd\u5b58\u7684\u662f\u4e0d\u542b\u504f\u79fb\u7684\u865a\u62df\u5185\u5b58\u5730\u5740\u3002"),(0,l.kt)("p",null,"\u8c03\u8bd5\u5730\u5740\uff08\u5d29\u6e83/\u5361\u987f\u6355\u83b7\u5230\u7684\u5185\u5b58\u5730\u5740\uff09= ImageBase + RVA\u3002"),(0,l.kt)("p",null,"ASLR\uff08Address space layout randomization\uff09\u901a\u8fc7\u968f\u673a\u653e\u7f6e\u8fdb\u7a0b\u5173\u952e\u6570\u636e\u533a\u57df\u7684\u5730\u5740\u7a7a\u95f4\uff0c\u6765\u9632\u6b62\u653b\u51fb\u8005\u80fd\u53ef\u9760\u5730\u8df3\u8f6c\u5230\u5185\u5b58\u7684\u7279\u5b9a\u4f4d\u7f6e\u6765\u5229\u7528\u51fd\u6570\u3002"),(0,l.kt)("p",null,"\u4e0d\u8003\u8651 ASLR\uff0c\u865a\u62df\u5185\u5b58\u5730\u5740\u662f\u4ece 0x100000000 \u5f00\u59cb\uff0c\u524d\u9762\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"__PAGEZERO"),"\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img-80",src:a(73949).Z})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objc"},'#import "ViewController.h"\n#import "mach-o/dyld.h"\n#import "objc/runtime.h"\n@implementation ViewController\n- (void)viewDidLoad {\n    [super viewDidLoad];\n\n    uintptr_t aslr = get_slide_address();\n    // image "demo" at address 0x104d3c000 and ASLR slide 0x4d3c000\n    // demo.app \u8fd9\u4e2a image \u7684 ImageBase = 0x100000000 + 0x4d3c000 (ASLR) = 0x104d3c000\n\n    IMP imp = (IMP)class_getMethodImplementation(self.class, @selector(viewDidLoad));\n    unsigned long imp_addr = (unsigned long)imp;\n    NSLog(@"viewDidLoad \u65b9\u6cd5\u7684\u865a\u62df\u5185\u5b58\u5730\u5740\uff1a0x%lx", imp_addr); // 0x104d3dc10\n\n    unsigned long imp_addr_without_offset = imp_addr - aslr;\n    NSLog(@"viewDidLoad \u4e0d\u5e26\u504f\u79fb\u7684\u5730\u5740\uff1a0x%lx", imp_addr_without_offset); // 0x100001c10, dSYM \u6587\u4ef6\u91cc\u8bb0\u5f55\u7684\u5c31\u662f\u8fd9\u4e2a\u5730\u5740\uff01\n}\n\n/// \u83b7\u53d6\u672c\u5de5\u7a0b\u53ef\u6267\u884c\u6587\u4ef6\u5728\u5185\u5b58\u4e2d\u955c\u50cf\u7684 ASLR\nuintptr_t get_slide_address(void) {\n    uintptr_t vmaddr_slide = 0;\n    // _dyld_image_count \u7a0b\u5e8f\u542f\u52a8\u540e\u52a0\u8f7d\u7684\u53ef\u6267\u884c\u6587\u4ef6\u548c\u52a8\u6001\u5e93\u7684\u6570\u91cf\n    for (uint32_t i = 0; i < _dyld_image_count(); i++) {\n        const char *image_name = (char*)_dyld_get_image_name(i);\n        // returns a pointer to the mach header of the image indexed by image_index\n        const struct mach_header *header = _dyld_get_image_header(i);\n        if (header->filetype == MH_EXECUTE) {\n            vmaddr_slide = _dyld_get_image_vmaddr_slide(i);\n        }\n        NSString *str = [NSString stringWithUTF8String:image_name];\n        if ([str containsString:@"demo.app"]) { // \u955c\u50cf\u540d\u5b57\u662f\u672c\u5de5\u7a0b\u7684\u53ef\u6267\u884c\u6587\u4ef6\n            NSLog(@"image %s at address 0x%llx and ASLR slide 0x%lx", image_name, (mach_vm_address_t)header, vmaddr_slide);\n            break;\n        }\n//        NSLog(@"%@", str); // \u6253\u5370\u955c\u50cf\u7684\u540d\u79f0\n    }\n    return vmaddr_slide;\n}\n@end\n')),(0,l.kt)("h2",{id:"\u5d29\u6e83\u7b26\u53f7\u5316\u5b9e\u6218"},"\u5d29\u6e83\u7b26\u53f7\u5316\u5b9e\u6218"),(0,l.kt)("p",null,"Xcode archive \u4e4b\u540e\u5f97\u5230\u7684\u662f .xcarchive \u76ee\u5f55\uff0c\u5176\u5185\u5bb9\u662f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-log"},"\u251c\u2500\u2500 Info.plist\n\u251c\u2500\u2500 Products\n\u2502\xa0\xa0 \u2514\u2500\u2500 Applications\n\u2502       \u2514\u2500\u2500 Demo.app\n\u251c\u2500\u2500 SCMBlueprint\n\u2502\xa0\xa0 \u2514\u2500\u2500 Demo.xcscmblueprint\n\u251c\u2500\u2500 SwiftSupport\n\u2502\xa0\xa0 \u2514\u2500\u2500 iphoneos\n\u2514\u2500\u2500 dSYMs\n    \u251c\u2500\u2500 Demo.app.dSYM\n    \u251c\u2500\u2500 DemoNotificationService.appex.dSYM\n")),(0,l.kt)("p",null,"\u9009\u62e9 Distripbute App\uff0c\u9009\u62e9\u53d1\u5e03\u65b9\u5f0f\uff08App Store Connect\u3001Ad Hoc\u3001Enterprise\u3001Development\uff09\uff0c\u9009\u62e9\u8bc1\u4e66\u548c Provisioning Profile \u4e4b\u540e\u5373\u53ef\u751f\u6210 ipa \u6587\u4ef6\u3002"),(0,l.kt)("p",null,"ipa \u6587\u4ef6\u89e3\u538b\u7f29\u540e\u53ef\u5f97\u5230 Payload \u6587\u4ef6\u5939\u91cc\u9762\u6709 .app \u76ee\u5f55\u3002"),(0,l.kt)("p",null,".app \u4e2d\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6 \u548c .dSYM \u6709\u76f8\u540c\u7684 UUID\uff0c\u4ee5\u6807\u8bc6\u662f\u540c\u4e00\u6b21\u7f16\u8bd1\u7684\u4ea7\u7269\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"dwarfdump --uuid Demo.app.dSYM\ndwarfdump --uuid Demo.app/Demo\n")),(0,l.kt)("p",null,"\u5d29\u6e83\u65e5\u5fd7\u6587\u4ef6\u4e2d\u8bb0\u5f55\u4e86\u51fd\u6570\u5185\u5b58\u5730\u5740\uff0c\u8fd9\u4e9b\u5730\u5740\u53ef\u4ee5\u5728 .dSYM \u6587\u4ef6\u4e2d\u5bf9\u5e94\u5230\u5177\u4f53\u7684\u6587\u4ef6\u540d\u3001\u51fd\u6570\u540d\u548c\u884c\u53f7\u3002"),(0,l.kt)("p",null,"\u65e0\u6cd5\u8fde\u63a5\u7535\u8111\u7684\u60c5\u51b5\uff1aSettings - Privacy - Analytics & Improvements - Analytics Data\uff0c\u627e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"TargetName-2021-03-20-102603.ips")," \u6587\u4ef6\uff0c\u901a\u8fc7 AirDrop \u5206\u4eab\u51fa\u6765\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u8fde\u63a5\u7535\u8111\u7684\u60c5\u51b5\uff1aXcode - Devices and Simulators - View Device Logs\uff0c\u9996\u6b21\u8fdb\u5165\u4f1a\u5c06\u8bbe\u5907\u4e0a\u7684\u5206\u6790\u6570\u636e\u62f7\u8d1d\u5230\u7535\u8111\u4e2d\uff0c\u7136\u540e Xcode \u4f1a\u5e2e\u52a9\u6211\u4eec\u81ea\u52a8\u7b26\u53f7\u5316\u3002"),(0,l.kt)("p",null,"Xcode \u4e2d\u5fc5\u987b\u8981\u6709\u5bf9\u5e94\u7248\u672c\u7cfb\u7edf\u7684 iOS DeviceSupport \u6587\u4ef6\uff0c\u5426\u5219\u7b26\u53f7\u5316\u4f1a\u5931\u8d25\u3002\u6253\u5f00 DeviceSupport \u6587\u4ef6\u5939\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"open /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/DeviceSupport\n")),(0,l.kt)("p",null,"\u4e0b\u8f7d DeviceSupport\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iGhibli/iOS-DeviceSupport"},"https://github.com/iGhibli/iOS-DeviceSupport")),(0,l.kt)("p",null,"\u4f7f\u7528 symbolicatecrash \u5de5\u5177\u8fdb\u884c\u7b26\u53f7\u5316\u3002symbolicatecrash \u662f Xcode \u81ea\u5e26\u7684\u7b26\u53f7\u5316\u5de5\u5177\uff0c\u4f46\u662f\u4e0d\u5728\u7cfb\u7edf\u7684 PATH \u5185\uff0c\u56e0\u6b64\u8fd0\u884c\u8be5\u547d\u4ee4\u9700\u8981\u4fee\u6539 PATH \u53d8\u91cf\uff0c\u5728\u7ec8\u7aef\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export DEVELOPER_DIR="/Applications/Xcode.app/Contents/Developer"\nexport PATH=$PATH:/Applications/Xcode.app/Contents/SharedFrameworks/DVTFoundation.framework/Versions/A/Resources/\n')),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"symbolicatecrash xxx.ips -o crash.log")),(0,l.kt)("p",null,"\u67e5\u770b\u7b26\u53f7\u5316\u7684\u8be6\u7ec6\u8fc7\u7a0b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"symbolicatecrash xxx.ips -o crash.log --verbose &> sh.log"),"\uff0c\u67e5\u770b\u5f97\u77e5\uff0c\u5e76\u4e0d\u9700\u8981\u663e\u5f0f\u5730\u6307\u5b9a dSYM\uff0c\u56e0\u4e3a\u5de5\u5177\u4f1a\u81ea\u52a8\u5728\u7535\u8111\u4e2d\u641c\u7d22\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-log"},'Running mdfind "com_apple_xcode_dsym_uuids == 8E662F82-B1E4-3E7E-A376-18E9755A8F51"\n')),(0,l.kt)("p",null,".ips \u6587\u4ef6\u7b26\u53f7\u5316\u4e4b\u524d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-log"},"5   Demo                    0x00000001026188f0 0x102408000 + 2164976\n6   Demo                    0x0000000102619b10 0x102408000 + 2169616\n")),(0,l.kt)("p",null,"\u7b2c\u4e09\u5217 0x00000001026188f0 \u662f\u5b9e\u9645\u8fd0\u884c\u65f6\u7684\u865a\u62df\u5185\u5b58\u5730\u5740\uff0c\u5b83\u7b49\u4e8e\u7b2c\u56db\u5217 + \u7b2c\u4e94\u5217\uff08\u5341\u516d\u8fdb\u5236\uff09\u3002\u5373\u516c\u5f0f VA = ImageBase + RVA\uff01"),(0,l.kt)("p",null,"\u7b2c\u56db\u5217 0x102408000 \u662f Demo \u955c\u50cf\u5728\u5185\u5b58\u4e2d\u7684\u9996\u5730\u5740\uff0c\u6211\u4eec\u77e5\u9053 arm64 \u67b6\u6784\u5982\u679c\u6ca1\u6709 ASLR \u7684\u8bdd\u9996\u5730\u5740\u662f 0x100000000\uff0c\u56e0\u6b64 ASLR \u504f\u79fb\u91cf\u5c31\u662f 0x102408000 - 0x100000000 = 0x2408000\u3002"),(0,l.kt)("p",null,"\u90a3\u4e48\u51fd\u6570\u5728 dSYM \u6587\u4ef6\u4e2d\u7684\u5730\u5740 = 0x00000001026188f0 - 0x2408000 = 0x1002108F0\uff08\u5373\u5341\u516d\u8fdb\u5236\u7684 2164976\uff01\uff09"),(0,l.kt)("p",null,"\u672c\u5730\u624b\u52a8\u7ffb\u8bd1\u5806\u6808\uff0c\u63a8\u8350\u4f7f\u7528 atos\uff0c\u4f20\u5165\u955c\u50cf\u9996\u5730\u5740\u548c\u51fd\u6570\u771f\u5b9e\u5185\u5b58\u5730\u5740\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u5728 Bugly \u9875\u9762\u9009\u62e9\u201c\u8fd8\u539f\u524d\u201d\uff0c\u4e09\u4e2a\u7ea2\u6846\u5206\u522b\u662f\u57fa\u5740\u3001\u771f\u5b9e\u865a\u62df\u5185\u5b58\u5730\u5740\u3001UUID\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:a(30530).Z})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"atos -o editorFramework.framework.dSYM/Contents/Resources/DWARF/editorFramework -arch arm64 -l 0x1111fc000 0x0000000111fa8c5c 0x0000000111fa8c58 0x0000000111fa9870 0x0000000111fa9648 0x0000000111d9dc24 0x0000000111d9db98\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"0x1111fc000"),"\u662f\u57fa\u5730\u5740\uff0c\u540e\u9762\u7684\u662f\u5806\u6808\u5730\u5740\u3002"))}m.isMDXComponent=!0},19334:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MGU2ODIwMzdiMjVlYjE5MWUyNTRjYmVkMzY5MjJkNmM1OTVmNzVjNzZlMWRiMDQ0MjkwODllMmU5MDVmNmE1NwpzaXplIDQ1MjIwCg=="},73949:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6YTIyNzhhMWIyZmY4MWRiNTQzOGQ0Zjg4ZTE3OThlOTZjODI3ZmEzZjZkYjYyN2YyNjk5NThlNDQ5MDdmYmY1ZQpzaXplIDY3NjU0Cg=="},30530:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6NmJjMGRiZDg1NGZmNmZjOWIxYjYzZmVmYmIwMzMyMTViZjEyYzcyMmEyZjdkMTgxNTAwZDFmZjc4ZmYyMGU1NwpzaXplIDE1NTIxNQo="}}]);