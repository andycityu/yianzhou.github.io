"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3825],{85229:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));a(61839);const i={},o="\u5185\u5b58",l={unversionedId:"memory",id:"memory",title:"\u5185\u5b58",description:"\u57fa\u7840\u77e5\u8bc6",source:"@site/docs/apple/memory.md",sourceDirName:".",slug:"/memory",permalink:"/docs/apple/memory",draft:!1,editUrl:"https://github.com/yianzhou/yianzhou.github.io/docs/apple/memory.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Matrix",permalink:"/docs/apple/matrix"},next:{title:"Metal",permalink:"/docs/apple/metal"}},s={},m=[{value:"\u57fa\u7840\u77e5\u8bc6",id:"\u57fa\u7840\u77e5\u8bc6",level:2},{value:"Jetsam event",id:"jetsam-event",level:2},{value:"iOS Memory Deep Dive",id:"ios-memory-deep-dive",level:2},{value:"\u5185\u5b58\u8b66\u544a",id:"\u5185\u5b58\u8b66\u544a",level:2},{value:"Mapping Files Into Memory",id:"mapping-files-into-memory",level:2},{value:"Xcode\u2019s Debug navigator",id:"xcodes-debug-navigator",level:2},{value:"Memory Graph",id:"memory-graph",level:2},{value:"Timer \u5f15\u8d77\u7684\u5faa\u73af\u5f15\u7528",id:"timer-\u5f15\u8d77\u7684\u5faa\u73af\u5f15\u7528",level:2}],p={toc:m};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5185\u5b58"},"\u5185\u5b58"),(0,r.kt)("h2",{id:"\u57fa\u7840\u77e5\u8bc6"},"\u57fa\u7840\u77e5\u8bc6"),(0,r.kt)("p",null,"\u5185\u5b58\u662f\u4e00\u4e2a\u5de8\u5927\u7684\u5b57\u8282\u6570\u7ec4\uff0c\u6bcf\u4e2a\u5b57\u8282\u90fd\u6709\u5b83\u7684\u5730\u5740\u3002\u64cd\u4f5c\u7cfb\u7edf\u901a\u5e38\u5728\u9ad8\u5730\u5740\u533a\u3002"),(0,r.kt)("p",null,"\u865a\u62df\u5185\u5b58\u4f1a\u7ed9\u6bcf\u4e2a\u8fdb\u7a0b\u521b\u5efa\u4e00\u4e2a\u5355\u72ec\u7684\u6267\u884c\u73af\u5883\uff0c\u8fdb\u7a0b\u7684\u5185\u5b58\u5e03\u5c40\u4e3b\u8981\u7531\u4ee3\u7801\u6bb5\u3001\u6570\u636e\u6bb5\u3001\u5806\u3001\u6808\u7ec4\u6210\u3002"),(0,r.kt)("p",null,"\u8fdb\u7a0b\u53ea\u80fd\u8bbf\u95ee\u81ea\u5df1\u7684\u5730\u5740\u7a7a\u95f4\uff0c\u5206\u9875\u5c31\u662f\u628a\u5730\u5740\u7a7a\u95f4\u5207\u5206\u6210\u56fa\u5b9a\u5927\u5c0f\u7684\u5355\u5143\u3002\u6700\u65b0\u7684 iOS \u8bbe\u5907\uff0c\u7269\u7406\u5185\u5b58\u5206\u9875\u548c\u865a\u62df\u5185\u5b58\u5206\u9875\u90fd\u662f 16KB \u5927\u5c0f\u3002"),(0,r.kt)("p",null,"\u8fdb\u7a0b\u4f7f\u7528\u7684\u5730\u5740\u79f0\u4e3a\u903b\u8f91\u5730\u5740\u6216\u865a\u62df\u5730\u5740\uff0cRAM \u4e2d\u7684\u5730\u5740\u79f0\u4e3a\u7269\u7406\u5730\u5740\u3002\u865a\u62df\u5730\u5740\u9875\u5230\u7269\u7406\u5730\u5740\u9875\u7684\u8f6c\u6362\uff0c\u662f\u901a\u8fc7 CPU \u91cc\u7684\u4e00\u4e2a\u786c\u4ef6\u5355\u5143 MMU \u5b9e\u73b0\u7684\u3002\u6bcf\u4e2a\u8fdb\u7a0b\u4f1a\u6709\u4e00\u4e2a\u5206\u9875\u8868\u8bb0\u5f55\u8fd9\u4e2a\u5bf9\u5e94\u5173\u7cfb\uff0c\u5728\u8fdb\u7a0b\u8c03\u5ea6\u7684\u4e0a\u4e0b\u6587\u5207\u6362\u9636\u6bb5\u4f1a\u505a\u9875\u8868\u7684\u5207\u6362\u3002"),(0,r.kt)("p",null,"32 \u4f4d\u8fdb\u7a0b\u53ef\u5bfb\u5740\u7684\u5730\u5740\u8303\u56f4\u662f 2^32 \u7b49\u4e8e 4GB\uff1b64 \u4f4d\u8fdb\u7a0b\u53ef\u5bfb\u5740\u7684\u8303\u56f4\u662f 2^64 \u7ea6\u7b49\u4e8e 18EB\u3002\u4ece\u5f00\u53d1\u8005\u7684\u89d2\u5ea6\u770b\uff0c\u6240\u6709 18EB \u7684\u865a\u62df\u5185\u5b58\u7a7a\u95f4\u90fd\u662f\u53ef\u7528\u7684\uff01\u4f46\u5982\u679c\u8fdb\u7a0b\u8bbf\u95ee\u4e86\u4e00\u4e2a\u4e0d\u5728\u7269\u7406\u5185\u5b58\u4e2d\u7684\u5206\u9875\uff0c\u90a3\u4e48\u5c31\u4f1a\u53d1\u751f page fault\uff0c\u64cd\u4f5c\u7cfb\u7edf\u4f1a\u5c06\u78c1\u76d8\u4e2d\u7684\u5206\u9875\u8bfb\u5165\u5230\u4e3b\u5b58\u3002"),(0,r.kt)("p",null,"\u5206\u9875\u4ea4\u6362\uff1a\u5185\u5b58\u5206\u9875\u5728\u7269\u7406\u78c1\u76d8\u548c\u4e3b\u5b58\u95f4\u4ea4\u6362\u3002"),(0,r.kt)("p",null,"Addresses in the source program are generally symbolic. A compiler typically binds these symbolic addresses to ",(0,r.kt)("strong",{parentName:"p"},"relocatable addresses"),' (such as "14 bytes from the beginning of this module"). The linker or loader in turn binds the relocatable addresses to absolute addresses (such as 74014).'),(0,r.kt)("h2",{id:"jetsam-event"},"Jetsam event"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xcode/identifying-high-memory-use-with-jetsam-event-reports"},"Identifying high-memory use with jetsam event reports | Apple Developer Documentation"))),(0,r.kt)("p",null,"iOS, iPadOS, watchOS, and tvOS have a virtual memory system that relies on all apps releasing memory when the operating system encounters memory pressure, where available memory is low and the system can\u2019t meet the demands of all running apps. Under memory pressure, apps free memory after receiving a low-memory notification. If all running apps release enough total memory to alleviate memory pressure, your app will continue to run. But, if memory pressure continues because apps haven\u2019t relinquished enough memory, the system frees memory by terminating applications to reclaim their memory. This is a ",(0,r.kt)("strong",{parentName:"p"},"jetsam event"),", and the system creates a jetsam event report with information about why it chose to jettison an app."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pageSize")," field in the report header records the number of bytes in each memory page. Pages are typically ",(0,r.kt)("strong",{parentName:"p"},"16KB")," in size."),(0,r.kt)("p",null,"To determine the amount of memory your app is using, multiply the number of memory pages reported in the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpages")," field by the page size value from the ",(0,r.kt)("inlineCode",{parentName:"p"},"pageSize")," field in the report\u2019s header."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"largestProcess")," field: names the process using the highest number of memory pages on the system."),(0,r.kt)("p",null,"Search for the ",(0,r.kt)("inlineCode",{parentName:"p"},"reason")," key to identify the jettisoned process and why the system jettisoned it. Only the jettisoned process has the reason key."),(0,r.kt)("p",null,"\u901a\u8fc7 Jetsam \u6587\u4ef6\u6765\u67e5\u770b\u5185\u5b58\u5206\u9875\u5927\u5c0f\u3001\u5360\u7528\u5185\u5b58\u6700\u5927\u7684\u8fdb\u7a0b\u3001\u6bcf\u4e2a\u8fdb\u7a0b\u5360\u7528\u7684\u5185\u5b58\u3001\u88ab\u6740\u6b7b\u7684\u8fdb\u7a0b\u4ee5\u53ca\u5b83\u88ab\u6740\u6b7b\u7684\u539f\u56e0\u3002\u8fd8\u53ef\u4ee5\u77e5\u9053\u5728\u5177\u4f53\u673a\u578b\u4e0a\uff0c\u64cd\u4f5c\u7cfb\u7edf\u7ed9\u6bcf\u4e2a\u8fdb\u7a0b\u7684\u5185\u5b58\u4e0a\u9650\u662f\u591a\u5c11\u3002"),(0,r.kt)("h2",{id:"ios-memory-deep-dive"},"iOS Memory Deep Dive"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/videos/play/wwdc2018/416/"},"WWDC 2018 - iOS Memory Deep Dive"))),(0,r.kt)("p",null,"A typical app, their memory footprint and profile has a ",(0,r.kt)("strong",{parentName:"p"},"dirty"),", a ",(0,r.kt)("strong",{parentName:"p"},"compressed"),", and a ",(0,r.kt)("strong",{parentName:"p"},"clean")," segment of memory."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img-20",src:a(61098).Z})),(0,r.kt)("p",null,"When we talk about the app's memory footprint, we're really talking about the dirty and compressed segments. Clean memory doesn't really count."),(0,r.kt)("p",null,"When you exceed the footprint, you will get a ",(0,r.kt)("strong",{parentName:"p"},"EXC_RESOURCE_EXCEPTION"),"."),(0,r.kt)("p",null,"Clean memory is data that can be paged out. ",(0,r.kt)("strong",{parentName:"p"},"Memory-mapped files")," are files on disk and loaded in the memory. If you use read-only files, these are always going to be clean pages. These could be images, data blobs, training models, and frameworks."),(0,r.kt)("p",null,"Dirty memory is any memory that has been written to by your app. It can be decoded image buffers, objects, or anything that has been malloced."),(0,r.kt)("p",null,"Compressd memory: iOS doesn't have a traditional disk swap system. Instead, it uses a memory compressor introduced in iOS 7. The memory compressor will take unaccessed pages and squeeze them down, which can actually create more space. But on access, the compressor will then decompress them so the memory can be read. ",(0,r.kt)("strong",{parentName:"p"},"Prefer ",(0,r.kt)("inlineCode",{parentName:"strong"},"NSCache")," to ",(0,r.kt)("inlineCode",{parentName:"strong"},"NSDictionary")," to cache objects!")),(0,r.kt)("p",null,"So as an example of clean and dirty pages, let's say I allocate an array of 20,000 integers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// The system may give me six pages. Now, these pages are clean when I allocate them.\nint *array = malloc(20000 * sizeof(int));\n// If I write to the first place in this array, that page has become dirty.\narray[0] = 32;\n// Similarly, if I write to the last page, that, or the last place in the buffer, the last page becomes dirty as well.\narray[19999] = 64;\n")),(0,r.kt)("p",null,"Dirty memory is much more expensive than clean memory. Clean memory can be evicted to make room for other things because you if you need it later, the system can always just reload it from disk. macOS has the option to swap out dirty memory, but dirty memory is especially costly in iOS because it doesn\u2019t use swap."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(82519).Z})),(0,r.kt)("h2",{id:"\u5185\u5b58\u8b66\u544a"},"\u5185\u5b58\u8b66\u544a"),(0,r.kt)("p",null,"\u5728\u6536\u5230\u5185\u5b58\u8b66\u544a\u65f6\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"task_info")," \u83b7\u53d6\u5f53\u524d\u5360\u7528\u5185\u5b58\u5927\u5c0f\uff0c\u6765\u5224\u65ad\u7cfb\u7edf\u7ed9\u4e88 App \u7684\u5185\u5b58\u9608\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},'#import <mach/mach.h>\n- (void)viewDidLoad {\n    [super viewDidLoad];\n\n    task_vm_info_data_t info;\n    mach_msg_type_number_t size = TASK_VM_INFO_COUNT;\n    kern_return_t kerr = task_info(mach_task_self(), TASK_VM_INFO, (task_info_t)&info, &size);\n    if (kerr == KERN_SUCCESS) {\n        // info.phys_footprint \u8868\u793a\u5b9e\u9645\u4f7f\u7528\u7684\u7269\u7406\u5185\u5b58\n        mach_vm_size_t totalSize = info.internal + info.compressed; // \u4e0e Xcode \u663e\u793a\u7684\u5185\u5b58\u5360\u7528\u4e00\u6837\n        NSLog(@"Memory in use (in bytes): %llu", totalSize);\n    }\n}\n\n- (void)didReceiveMemoryWarning {\n    [super didReceiveMemoryWarning];\n\n    struct mach_task_basic_info info;\n    mach_msg_type_number_t size = MACH_TASK_BASIC_INFO_COUNT;\n    kern_return_t kr = task_info(mach_task_self(), MACH_TASK_BASIC_INFO, (task_info_t)&info, &size);\n    if (kr == KERN_SUCCESS) {\n        NSLog(@"Memory in use (in bytes): %llu", info.resident_size); // resident memory size (bytes)\n    }\n}\n')),(0,r.kt)("h2",{id:"mapping-files-into-memory"},"Mapping Files Into Memory"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/Performance/Conceptual/FileSystem/Articles/MappingFiles.html#//apple_ref/doc/uid/20001990-CJBJFIDD"},"Mapping Files Into Memory"))),(0,r.kt)("p",null,"File mapping is the process of mapping the disk sectors of a file into the virtual memory space of a process. Once mapped, your application accesses the file as if it were entirely resident in memory. As you read data from the mapped file pointer, the kernel pages in the appropriate data and returns it to your application."),(0,r.kt)("p",null,"File mapping is effective in the following situations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have a large file whose contents you want to access randomly one or more times."),(0,r.kt)("li",{parentName:"ul"},"You have a small file whose contents you want to read into memory all at once and access frequently. This technique is best for files that are no more than a few virtual memory pages in size."),(0,r.kt)("li",{parentName:"ul"},"You want to cache specific portions of a file in memory. File mapping eliminates the need to cache the data at all, which leaves more room in the system disk caches for other data.")),(0,r.kt)("p",null,"You should not use file mapping in the following situations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to read a file sequentially from start to finish only once."),(0,r.kt)("li",{parentName:"ul"},"The file is several hundred megabytes or more in size. (Mapping large files fills virtual memory space quickly. In addition, your program may not have the available space if it has been running for a while or its memory space is fragmented.)"),(0,r.kt)("li",{parentName:"ul"},"The file is located on a removable drive."),(0,r.kt)("li",{parentName:"ul"},"The file is located on a network drive.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'void ProcessFile(char *inPathName) {\n    size_t dataLength;\n    void *dataPtr;\n    char *appendStr = " Happy new year!!";\n    int appendSize = (int)strlen(appendStr);\n    if(MapFile(inPathName, &dataPtr, &dataLength, appendSize) == 0) {\n        // process the data\n        dataPtr += dataLength; // \u6307\u9488\u79fb\u52a8\u5230\u6587\u4ef6\u7684\u672b\u5c3e\n        memcpy(dataPtr, appendStr, appendSize);\n        // unmap the file\n        munmap(dataPtr, dataLength + appendSize);\n    }\n}\n\nint MapFile(char *inPathName, void **outDataPtr, size_t *outDataLength, size_t appendSize) {\n    int outError;\n    int fileDescriptor;\n    struct stat statInfo;\n\n    // Return safe values on error.\n    outError = 0;\n    *outDataPtr = NULL;\n    *outDataLength = 0;\n\n    // Open the file.\n    fileDescriptor = open(inPathName, O_RDWR, 0);\n    if(fileDescriptor < 0) {\n        outError = errno;\n    } else {\n        // We now know the file exists. Retrieve the file size.\n        if(fstat(fileDescriptor, &statInfo) != 0) {\n            outError = errno;\n        } else {\n            ftruncate(fileDescriptor, statInfo.st_size + appendSize);\n            fsync(fileDescriptor);\n            *outDataPtr = mmap(NULL,\n                               statInfo.st_size + appendSize,\n                               PROT_READ|PROT_WRITE,\n                               MAP_FILE|MAP_SHARED,\n                               fileDescriptor,\n                               0);\n            if(*outDataPtr == MAP_FAILED) {\n                outError = errno;\n            } else {\n                // On success, return the size of the mapped file.\n                *outDataLength = statInfo.st_size;\n            }\n        }\n\n        // Now close the file. The kernel doesn\u2019t use our file descriptor.\n        close(fileDescriptor);\n    }\n    return outError;\n}\n')),(0,r.kt)("h2",{id:"xcodes-debug-navigator"},"Xcode\u2019s Debug navigator"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(61837).Z})),(0,r.kt)("p",null,"\u9ec4\u8272\u533a\u57df\u4ee3\u8868\u53ef\u80fd\u89e6\u53d1\u5185\u5b58\u8b66\u544a\uff1b\u7ea2\u8272\u533a\u57df\u4ee3\u8868\u53ef\u80fd\u88ab\u7ec8\u6b62\u8fdb\u7a0b\u3002"),(0,r.kt)("h2",{id:"memory-graph"},"Memory Graph"),(0,r.kt)("p",null,"\u5728 Xcode \u4e2d\u5bfc\u51fa memgraph\uff1a\u5148 Debug Memory Graph\uff0c\u7136\u540e File - Export Memory Graph\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"vmmap")," \u547d\u4ee4\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u67e5\u770b\u4e00\u4e2a App \u7684\u5185\u5b58\u6574\u4f53\u4f7f\u7528\u60c5\u51b5\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"vmmap App.memgraph")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"vmmap --summary App.memgraph")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"heap --sortBySize App.memgraph")," \u53ef\u4ee5\u6253\u5370\u51fa\u5404\u4e2a\u7c7b\u5360\u7528\u5185\u5b58\u7684\u60c5\u51b5\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"heap App.memgraph -addresses all | <classes-pattern>")," \u53ef\u4ee5\u5c06\u67d0\u4e2a\u7c7b\u540d\u7684\u5185\u5b58\u5730\u5740\u90fd\u663e\u793a\u51fa\u6765\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5728\u8c03\u8bd5\u7684\u65f6\u5019\u6211\u4eec Malloc Stack\uff0c\u5c31\u53ef\u4ee5\u67e5\u5230\u6bcf\u4e2a\u5bf9\u8c61\u521b\u5efa\u65f6\u7684\u8c03\u7528\u5806\u6808\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(56270).Z})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"malloc_history App.memgraph [address]")," \u53ef\u4ee5\u770b\u5230\u6307\u5b9a\u5730\u5740\u5185\u5b58\u5206\u914d\u65f6\u7684\u5806\u6808\u3002"),(0,r.kt)("p",null,"\u5728 Memory Graph \u6240\u6709\u7684\u5f3a\u5f15\u7528\u90fd\u662f\u9ed1\u8272\u5b9e\u7ebf\uff0c\u800c\u7070\u8272\u5b9e\u7ebf\u5e76\u4e0d\u662f\u5f31\u5f15\u7528\uff0c\u53ea\u662f\u4e00\u4e9b\u7cfb\u7edf\u7ea7\u522b\u7684\u5f15\u7528\u6216\u8005\u82f9\u679c\u4e3a\u4e86\u4f18\u5316\u663e\u793a\u6548\u679c\u800c\u6dfb\u52a0\u7684\uff0c\u6240\u4ee5\u5728\u770b\u5230\u7070\u8272\u7684\u5f15\u7528\u65f6\uff0c\u5c31\u81ea\u52a8\u5ffd\u7565\u5b83\u5427\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(85043).Z})),(0,r.kt)("p",null,"\u6709\u4e9b ",(0,r.kt)("inlineCode",{parentName:"p"},"UIView")," \u5b9e\u4f8b\u6ca1\u6709\u5b9e\u73b0\u5f15\u7528\u7684\uff0c\u53ef\u80fd\u662f\u7cfb\u7edf\u6301\u6709\u4e86\uff0c\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"-[UIView removeFromSuperview]")," \u79fb\u9664\u6389\u3002"),(0,r.kt)("h2",{id:"timer-\u5f15\u8d77\u7684\u5faa\u73af\u5f15\u7528"},"Timer \u5f15\u8d77\u7684\u5faa\u73af\u5f15\u7528"),(0,r.kt)("p",null,"\u4e0b\u9762\u8fd9\u6bb5 ",(0,r.kt)("inlineCode",{parentName:"p"},"NSTimer")," \u5b58\u5728\u5faa\u73af\u5f15\u7528 (self -> timer -> self)\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u5373\u4f7f\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"__weak typeof(self) weakSelf = self;")," \u4e5f\u6ca1\u6709\u7528\uff0c\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"NSTimer")," \u7684\u5185\u90e8\u5b9e\u73b0\u4f1a\u5f3a\u5f15\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"self"),"\uff0c\u9020\u6210\u5faa\u73af\u5f15\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},'@interface TimerViewController ()\n@property(nonatomic, strong) NSTimer *timer;\n@end\n\n@implementation TimerViewController\n- (void)viewDidLoad {\n    [super viewDidLoad];\n    __weak typeof(self) weakSelf = self;\n    self.timer = [NSTimer scheduledTimerWithTimeInterval:1.0 target:weakSelf selector:@selector(testPrint) userInfo:nil repeats:YES];\n    [[NSRunLoop mainRunLoop] addTimer:self.timer forMode:NSRunLoopCommonModes];\n}\n\n- (void)testPrint {\n    NSLog(@"hello");\n}\n\n- (void)dealloc {\n    NSLog(@"dealloc");\n    [self.timer invalidate]; // dealloc \u65b9\u6cd5\u4e0d\u4f1a\u88ab\u8c03\u7528\u5230\n}\n@end\n')),(0,r.kt)("p",null,"\u89e3\u51b3\u65b9\u5f0f\u4e00\uff0c\u91c7\u7528\u4e2d\u95f4\u7c7b\uff0cVC -> timer -> timerTarget -> weakSelf \u89e3\u9664\u5faa\u73af\u5f15\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},"@interface TimerTarget : NSObject\n+ (NSTimer*)scheduledTimerWithTimeInterval:(NSTimeInterval)interval target:(nonnull id)aTarget selector:(nonnull SEL)aSelector userInfo:(nullable id)userInfo repeats:(BOOL)yesOrNo;\n\n@property (assign, nonatomic) SEL outSelector;\n@property (weak, nonatomic) id outTarget;\n\n@end\n\n@implementation TimerTarget\n\n+ (NSTimer*)scheduledTimerWithTimeInterval:(NSTimeInterval)interval target:(id)aTarget selector:(SEL)aSelector userInfo:(id)userInfo repeats:(BOOL)yesOrNo {\n    TimerTarget *target = [[TimerTarget alloc]init];\n    target.outSelector = aSelector;\n    target.outTarget = aTarget;\n    NSTimer *timer = [NSTimer scheduledTimerWithTimeInterval:interval target:target selector:@selector(timerSelector:) userInfo:userInfo repeats:yesOrNo];\n    return timer;\n}\n\n- (void)timerSelector:(NSTimer*)timer {\n    if (self.outTarget && [self.outTarget respondsToSelector:self.outSelector]) {\n        [self.outTarget performSelector:self.outSelector withObject:timer.userInfo];\n    } else {\n        [timer invalidate];\n    }\n}\n\n@end\n")),(0,r.kt)("p",null,"\u89e3\u51b3\u65b9\u5f0f\u4e8c\uff0c\u4f7f\u7528 block\uff0cVC -> timer -> block -> weakSelf \u89e3\u9664\u5faa\u73af\u5f15\u7528\uff0c\u5728 iOS 10+ \u4e0a\u5df2\u7ecf\u6709\u8fd9\u4e2a API \u4e86\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},"__weak typeof(self) weakSelf = self;\nself.timer = [NSTimer scheduledTimerWithTimeInterval:1.0 repeats:YES block:^(NSTimer * _Nonnull timer) {\n    [weakSelf testPrint];\n}];\n")),(0,r.kt)("p",null,"\u89e3\u51b3\u65b9\u5f0f\u4e09\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"NSProxy"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},"@interface MyProxy : NSProxy\n- (instancetype)initWithTarget:(id)target;\n@property (weak, readonly, nonatomic) id weakTarget;\n@end\n\n@implementation MyProxy\n- (instancetype)initWithTarget:(id)target {\n    _weakTarget = target;\n    return self;\n}\n\n- (void)forwardInvocation:(NSInvocation *)invocation {\n    SEL sel = [invocation selector];\n    if (_weakTarget && [self.weakTarget respondsToSelector:sel]) {\n        [invocation invokeWithTarget:self.weakTarget];\n    }\n}\n\n- (NSMethodSignature *)methodSignatureForSelector:(SEL)sel {\n    return [self.weakTarget methodSignatureForSelector:sel];\n}\n\n- (BOOL)respondsToSelector:(SEL)aSelector {\n    return [self.weakTarget respondsToSelector:aSelector];\n}\n@end\n")),(0,r.kt)("p",null,"\u8c03\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},"self.timer = [NSTimer scheduledTimerWithTimeInterval:1.0 target:[[MyProxy alloc]initWithTarget:self] selector:@selector(testPrint) userInfo:nil repeats:YES];\n")))}d.isMDXComponent=!0},61098:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6OTExZjA0Y2IzMTNmMDllOWE0YTc2NmE1Y2ExMzkxZmMwY2I2ZDY3ZjIwODk4Y2MwNzVmYjUyY2RkNjc3ZTczMgpzaXplIDE3OTkxNAo="},56270:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6NzQyYWU3M2FiNzE0MmNmNTRmOWZmNTcyODcyNWRkODEwYmFjNDIyNDZmMmFlNWM4MzQ2ZmZiNzExNmRmN2RiYwpzaXplIDM3MTY1Cg=="},82519:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MTgyNzM5ZTVmN2FiMjMyNmVhNGQ4MWQ1NzliMDMxMzY5YWQ3N2I1YjI3ZDAyYmIxYzFmMGMzNzI3YjAyZWYxZQpzaXplIDQxNTM2Cg=="},61837:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6ODZkNDg0M2E2MzczNWRiZWMxMTE0MzFiZTdiMjQ4NzhkYjM5NTQ4NzJmYmI5MzU5Y2MyMmNiZDkxNzUzZDVjNApzaXplIDIwODAyNAo="},85043:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6NGMwNmQwMGZmZmU4MDU4NDQ4MWZmMDJkNGFjNWVmNjBjNmRiM2NmZDhkOTc2ZTg1M2E2ZTczZjFjYjZlYTI2ZQpzaXplIDI3MjI0MDMK"}}]);