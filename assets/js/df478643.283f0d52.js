"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4896],{65151:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));a(61839);const o={sidebar_position:7},s="GCD",r={unversionedId:"Objective-C/gcd",id:"Objective-C/gcd",title:"GCD",description:"\u4e0b\u8f7d libdispatch \u6e90\u7801\uff1acurl -O https://opensource.apple.com/tarballs/libdispatch/libdispatch-1271.40.12.tar.gz",source:"@site/docs/language/Objective-C/gcd.md",sourceDirName:"Objective-C",slug:"/Objective-C/gcd",permalink:"/docs/language/Objective-C/gcd",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"RunLoop",permalink:"/docs/language/Objective-C/runloop"},next:{title:"Code Review",permalink:"/docs/language/Objective-C/code-review"}},l={},u=[{value:"Sync and Async",id:"sync-and-async",level:2},{value:"Avoiding Thread Explosion",id:"avoiding-thread-explosion",level:2},{value:"\u521b\u5efa\u961f\u5217",id:"\u521b\u5efa\u961f\u5217",level:2},{value:"Quality of Service",id:"quality-of-service",level:2},{value:"dispatch_async",id:"dispatch_async",level:2},{value:"dispatch_sync",id:"dispatch_sync",level:2},{value:"dispatch_barrier_async",id:"dispatch_barrier_async",level:2},{value:"dispatch_group_t",id:"dispatch_group_t",level:2},{value:"dispatch_source_t",id:"dispatch_source_t",level:2},{value:"RunLoop vs Dispatch Queues",id:"runloop-vs-dispatch-queues",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gcd"},"GCD"),(0,i.kt)("p",null,"\u4e0b\u8f7d libdispatch \u6e90\u7801\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"curl -O https://opensource.apple.com/tarballs/libdispatch/libdispatch-1271.40.12.tar.gz")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/videos/play/wwdc2015/718/"},"WWDC 2015 - Building Responsive and Efficient Apps with GCD"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DispatchQueue")," \u662f FIFO \u961f\u5217\u3002\u4e32\u884c\u961f\u5217\uff0c\u6309 FIFO \u539f\u5219\u51fa\u5217\uff0c\u4e00\u4e2a\u63a5\u4e00\u4e2a\u6267\u884c\uff1b\u5e76\u884c\u961f\u5217\uff0c\u6309 FIFO \u539f\u5219\u51fa\u5217\uff0c\u5e76\u53d1\u6267\u884c\uff0c\u8fd4\u56de\u987a\u5e8f\u65e0\u6cd5\u9884\u8ba1\u3002"),(0,i.kt)("p",null,"\u7cfb\u7edf\u4f1a\u81ea\u52a8\u521b\u5efa\u4e3b\u961f\u5217\uff0c\u5e76\u5c06\u5176\u4e0e\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u7ebf\u7a0b\u5173\u8054\u3002\u4e3b\u961f\u5217\u53ea\u6709\u4e00\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u5c31\u662f\u4e3b\u7ebf\u7a0b\u3002"),(0,i.kt)("h2",{id:"sync-and-async"},"Sync and Async"),(0,i.kt)("p",null,"\u540c\u6b65\u548c\u5f02\u6b65\u7684\u533a\u522b\uff1a\u662f\u5426\u5f00\u542f\u65b0\u7684\u7ebf\u7a0b\u3002\u540c\u6b65\u662f\u5728\u5f53\u524d\u7ebf\u7a0b\u6267\u884c\uff0c\u5f02\u6b65\uff08\u53ef\u80fd\u4f1a\uff09\u5f00\u542f\u65b0\u7684\u7ebf\u7a0b\u6267\u884c\u3002"),(0,i.kt)("p",null,"\u4e32\u884c\u548c\u5e76\u884c\u7684\u533a\u522b\uff1a\u4e32\u884c\u662f\u4e00\u4e2a\u63a5\u4e00\u4e2a\u5730\u6267\u884c\uff0c\u5e76\u884c\u662f\u540c\u65f6\u6267\u884c\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sync")," \u662f\u5728\u5f53\u524d\u7ebf\u7a0b\u6267\u884c\uff0c\u4e0d\u80fd\u5f00\u542f\u65b0\u7ebf\u7a0b\uff0c\u6240\u4ee5\u5c31\u7b97\u6d3e\u53d1\u5230\u5e76\u53d1\u961f\u5217\uff0c\u4e5f\u662f\u4e32\u884c\u6267\u884c\u7684\u3002\uff08\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u548b\u5e76\u53d1\u5440\uff1f\uff09"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/videos/play/wwdc2016/720/?time=257"},"WWDC 2016 - Concurrent Programming With GCD in Swift 3"))),(0,i.kt)("p",null,"Dispatch queues have two main ways that you can submit work for them, the first is asynchronous execution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// It's now on main thread\nlet queue = DispatchQueue(label: \"com.yianzhou.demo\")\nqueue.async {\n    // It's now on dispatch worker thread\n}\n")),(0,i.kt)("p",null,"This is where you can queue up multiple items of work to your dispatch queue, and then will ",(0,i.kt)("strong",{parentName:"p"},"bring up")," a thread to execute that work. Dispatch will one by one take items off that queue and execute them. And then when it's finished with all items on the queue, the system will ",(0,i.kt)("strong",{parentName:"p"},"reclaim")," the thread that it bought up for you."),(0,i.kt)("p",null,"The second mode of execution is synchronous execution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// It's now on your own background thread\nqueue.sync {\n    // It's now on your own background thread too.\n}\n")),(0,i.kt)("p",null,"This is, you have your own thread. You submit synchronous work to the dispatch queue, and then it will ",(0,i.kt)("strong",{parentName:"p"},"block")," until the work item has completed. When it comes time to run the synchronous item, the dispatch queue will pass control over to the thread that was waiting, executes that work item, and then returns the control back to the worker thread. Dispatch will continue to drain the rest of the items on dispatch queue, and then also reclaims the worker thread that it was using."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img-80",src:a(3745).Z})),(0,i.kt)("p",null,"Use GCD precondition to check whether your code is running on expected queue:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"dispatchPrecondition(.onQueue(expectedQueue))\ndispatchPrecondition(.notOnQueue(expectedQueue))\n")),(0,i.kt)("h2",{id:"avoiding-thread-explosion"},"Avoiding Thread Explosion"),(0,i.kt)("p",null,"When designing tasks for concurrent execution, ",(0,i.kt)("strong",{parentName:"p"},"do not call methods that block the current thread of execution"),". When a task scheduled by a concurrent dispatch queue blocks a thread, the system creates additional threads to run other queued concurrent tasks. If too many tasks block, the system may run out of threads for your app."),(0,i.kt)("p",null,"Another way that apps consume too many threads is by creating too many private concurrent dispatch queues. Because each dispatch queue consumes thread resources, creating additional concurrent dispatch queues exacerbates the thread consumption problem. Instead of creating private concurrent queues, submit tasks to one of the global concurrent dispatch queues."),(0,i.kt)("p",null,"For serial tasks, ",(0,i.kt)("strong",{parentName:"p"},"set the target")," of your serial queue to one of the global concurrent queues. That way, you can maintain the serialized behavior of the queue while minimizing the number of separate queues creating threads."),(0,i.kt)("p",null,"GCD \u7ba1\u7406\u4e86\u4e00\u4e2a\u7ebf\u7a0b\u6c60\uff0c\u5f80\u5168\u5c40\u5e76\u53d1\u961f\u5217\u3001\u81ea\u5df1\u521b\u5efa\u7684\u5e76\u53d1\u961f\u5217\u91cc\u63d0\u4ea4 block\uff0cGCD \u4f1a\u5c06 block \u6d3e\u53d1\u5230\u7ebf\u7a0b\u6c60\u91cc\u7684\u7ebf\u7a0b\u6765\u6267\u884c\u3002\u5982\u679c\u5f53\u524d\u5de5\u4f5c\u7ebf\u7a0b\u5168\u7e41\u5fd9\uff0c\u4f1a\u521b\u5efa\u65b0\u7684\u7ebf\u7a0b\uff0c\u6700\u591a\u540c\u65f6\u6709 64 \u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u3002"),(0,i.kt)("p",null,"To avoid thread explosion:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"prefer asynchronous APIs, especially for I/O"),(0,i.kt)("li",{parentName:"ul"},"use serial queues"),(0,i.kt)("li",{parentName:"ul"},"use ",(0,i.kt)("inlineCode",{parentName:"li"},"OperationQueue")," with concurrency limits"),(0,i.kt)("li",{parentName:"ul"},"don\u2019t generate unlimited work...")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},"// DANGEROUS \u2013 may cause thread explosion and deadlocks\nfor (int i = 0; i < 999; i++){\n    dispatch_async(q, ^{...});\n}\ndispatch_barrier_sync(q, ^{});\n\n// GOOD \u2013 GCD will manage parallelism\ndispatch_apply(999, q, ^(size_t i){...});\n\n// GOOD - Use semaphore to control the concurrency\n#define CONCURRENT_TASKS 4\nsema = dispatch_semaphore_create(CONCURRENT_TASKS);\nfor (int i = 0; i < 999; i++){\n    dispatch_async(q, ^{\n        // do work\n        dispatch_semaphore_signal(sema);\n    });\n    dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);\n}\n")),(0,i.kt)("h2",{id:"\u521b\u5efa\u961f\u5217"},"\u521b\u5efa\u961f\u5217"),(0,i.kt)("p",null,"\u521b\u5efa\u961f\u5217\u7684 API\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"dispatch_queue_t dispatch_queue_create(const char *_Nullable label, dispatch_queue_attr_t _Nullable attr);\n")),(0,i.kt)("p",null,"Dispatch queues created with the DISPATCH_QUEUE_CONCURRENT attribute may invoke blocks concurrently (similarly to the global concurrent queues, but potentially with more overhead), and support barrier blocks submitted with the dispatch barrier API, which e.g. enables the implementation of efficient reader-writer schemes."),(0,i.kt)("p",null,"When a dispatch queue is no longer needed, it should be released with ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch_release()"),". Note that any pending blocks submitted asynchronously to a queue will hold a reference to that queue. Therefore a queue will not be deallocated until all pending blocks have finished."),(0,i.kt)("p",null,"Passing the result of the ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch_queue_attr_make_with_qos_class()")," function to the attr parameter of this function allows a quality of service class and relative priority to be specified for the newly created queue. The quality of service class so specified takes precedence over the quality of service class of the newly created dispatch queue's target queue (if any) as long that does not result in a lower QOS class and relative priority."),(0,i.kt)("p",null,"When no quality of service class is specified, the target queue of a newly created dispatch queue is the default priority global concurrent queue."),(0,i.kt)("p",null,"\u521b\u5efa\u961f\u5217\u5c5e\u6027\u7684 API\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"dispatch_queue_attr_t dispatch_queue_attr_make_initially_inactive(dispatch_queue_attr_t _Nullable attr);\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u5f88\u5c11\u89c1\uff0c\u7701\u7565\u4e0d\u8bb2\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"dispatch_queue_attr_t dispatch_queue_attr_make_with_autorelease_frequency(dispatch_queue_attr_t _Nullable attr,\n                                                                            dispatch_autorelease_frequency_t frequency);\n")),(0,i.kt)("p",null,"The global concurrent queues have the ",(0,i.kt)("inlineCode",{parentName:"p"},"DISPATCH_AUTORELEASE_FREQUENCY_NEVER")," behavior. Manually created dispatch queues use ",(0,i.kt)("inlineCode",{parentName:"p"},"DISPATCH_AUTORELEASE_FREQUENCY_INHERIT")," by default."),(0,i.kt)("p",null,"When a queue uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"DISPATCH_AUTORELEASE_FREQUENCY_WORK_ITEM")," (either directly or inherithed from its target queue), any block submitted asynchronously to this queue is executed as if surrounded by a individual Objective-C ",(0,i.kt)("inlineCode",{parentName:"p"},"@autoreleasepool")," scope."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"dispatch_queue_attr_t dispatch_queue_attr_make_with_qos_class(dispatch_queue_attr_t _Nullable attr,\n                                                                dispatch_qos_class_t qos_class,\n                                                                int relative_priority);\n")),(0,i.kt)("p",null,"When specified in this manner, the QOS class and relative priority take precedence over those inherited from the dispatch queue's target queue (if any) as long that does not result in a lower QOS class and relative priority."),(0,i.kt)("p",null,"The global queue priorities map to the following QOS classes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DISPATCH_QUEUE_PRIORITY_HIGH: QOS_CLASS_USER_INITIATED"),(0,i.kt)("li",{parentName:"ul"},"DISPATCH_QUEUE_PRIORITY_DEFAULT: QOS_CLASS_DEFAULT"),(0,i.kt)("li",{parentName:"ul"},"DISPATCH_QUEUE_PRIORITY_LOW: QOS_CLASS_UTILITY"),(0,i.kt)("li",{parentName:"ul"},"DISPATCH_QUEUE_PRIORITY_BACKGROUND: QOS_CLASS_BACKGROUND")),(0,i.kt)("p",null,"The QOS class and relative priority set this way on a queue have no effect on blocks that are submitted synchronously to a queue (via ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch_sync()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch_barrier_sync()"),")."),(0,i.kt)("h2",{id:"quality-of-service"},"Quality of Service"),(0,i.kt)("p",null,"Quality of Service classes are ways you tell the system what kind of work you're doing, and in turn, it allows the system to provide a variety of ",(0,i.kt)("strong",{parentName:"p"},"resource controls")," to most effectively execute your code."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User Interactive: ",(0,i.kt)("strong",{parentName:"li"},"This is the main thread.")," The user interactive code is specifically the code needed in order to keep 60 frames per second ",(0,i.kt)("strong",{parentName:"li"},"animation")," running smoothly. It's the work actively involved in updating the UI. ",(0,i.kt)("strong",{parentName:"li"},"There's nothing you have to do to get this. The main thread of the application always comes up at this QoS class"),"."),(0,i.kt)("li",{parentName:"ul"},"User Initiated: Loading the results of an action done by the user. If the user can't continue to make meaningful progress with your application, user initiated is the correct class. (e.g. user tap an icon and wait to view a document)"),(0,i.kt)("li",{parentName:"ul"},"Utility: Long running tasks that don't prevent the user from continuing to use your app. (e.g. download a magazine with a progress bar showing to user)"),(0,i.kt)("li",{parentName:"ul"},"Background: The user is not actively watching. Any kind of maintenance task, cleanup work, database vacuuming would all be background.")),(0,i.kt)("p",null,"QoS can be specified on the individual block level (",(0,i.kt)("inlineCode",{parentName:"p"},"DispatchWorkItem"),") and on queue as a whole (",(0,i.kt)("inlineCode",{parentName:"p"},"DispatchQueue"),")."),(0,i.kt)("p",null,"For Objective-C, see ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/dispatch/1431050-dispatch_block_create?language=objc"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch_block_create"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/dispatch/1431068-dispatch_block_create_with_qos_c?language=objc"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch_block_create_with_qos_class")),"."),(0,i.kt)("p",null,"For Swift, see ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/dispatch/dispatchworkitem/2300102-init"},(0,i.kt)("inlineCode",{parentName:"a"},"init(qos:flags:block:)")),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Priority inversion")," happens when high QoS block submitted to serial queue which already contains blocks with lower QoS. In this case, GCD helps you by ",(0,i.kt)("strong",{parentName:"p"},"raising")," the items in front of your work on the dispatch queue to the higher QoS so that they execute quicker. The system makes a best effort to apply the necessary QoS ",(0,i.kt)("strong",{parentName:"p"},"overrides")," to ensure that blocks submitted earlier to the serial queue are executed at that same QoS class or higher."),(0,i.kt)("h2",{id:"dispatch_async"},"dispatch_async"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dispatch_async")," Calls to this function always return immediately after the block has been submitted and never wait for the block to be invoked. The target queue determines whether the block is invoked serially or concurrently with respect to other blocks submitted to that same queue. Independent serial queues are processed concurrently with respect to each other."),(0,i.kt)("h2",{id:"dispatch_sync"},"dispatch_sync"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dispatch_sync")," This function does not return until the block has finished. Calling this function and targeting the current queue results in ",(0,i.kt)("strong",{parentName:"p"},"deadlock"),". Unlike with ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch_async"),', no retain is performed on the target queue. Because calls to this function are synchronous, it "borrows" the reference of the caller. Moreover, no ',(0,i.kt)("inlineCode",{parentName:"p"},"Block_copy")," is performed on the block."),(0,i.kt)("p",null,"\u5728\u4e3b\u7ebf\u7a0b\u5f80\u4e3b\u961f\u5217\u91cc\u6d3e\u53d1\u4e00\u4e2a\u540c\u6b65\u4efb\u52a1\uff0c\u5c31\u4f1a\u6b7b\u9501\uff01"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},'dispatch_sync(dispatch_get_main_queue(), ^{\n    NSLog(@"never going to execute...");\n});\n')),(0,i.kt)("p",null,"\u5728\u4e32\u884c\u961f\u5217\u91cc\u6267\u884c\u7684\u4ee3\u7801\uff0c\u5982\u679c\u6709\u6d3e\u53d1\u5230\u5f53\u524d\u961f\u5217\u7684\u540c\u6b65\u5757\uff0c\u4e5f\u4f1a\u9020\u6210\u6b7b\u9501\uff01"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},"dispatch_async(self.serialQueue, ^{\n    dispatch_sync(self.serialQueue, ^{\n        // ...\n    });\n});\n")),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch_sync")," \u5f80\u5f53\u524d\u961f\u5217\u91cc\u6dfb\u52a0\u4efb\u52a1\uff0c\u5c31\u4f1a\u6b7b\u9501\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"As a performance optimization, this function executes blocks on the current thread whenever possible, with one obvious exception. Specifically, blocks submitted to the main dispatch queue always run on the main thread.")),(0,i.kt)("p",null,"\u5728\u4e3b\u7ebf\u7a0b\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch_sync"),"\uff0c\u4e0d\u7ba1\u6d3e\u53d1\u5230\u4e3b\u961f\u5217\u8fd8\u662f\u5b50\u961f\u5217\uff0c\u90fd\u5728\u4e3b\u7ebf\u7a0b\u6267\u884c\uff01\uff01"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},"// \u4e3b\u7ebf\u7a0b\ndispatch_sync(\u4efb\u610f\u961f\u5217, ^{\n    // \u5728\u4e3b\u7ebf\u7a0b\u6267\u884c\uff01\n});\n")),(0,i.kt)("p",null,"\u5728\u5b50\u7ebf\u7a0b\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch_sync"),"\uff0c\u5728\u5f53\u524d\u7ebf\u7a0b\u6267\u884c\uff01\u6709\u4e00\u4e2a\u4f8b\u5916\uff0c\u5982\u679c\u63d0\u4ea4\u5230\u4e3b\u961f\u5217\u7684\u8bdd\uff0c\u5728\u4e3b\u7ebf\u7a0b\u6267\u884c\uff01"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Using serial queues as locks")," is a very common use of GCD where you use ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch_sync")," to execute a critical section block on that serial queue where that block has exclusive access to the shared data."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img-80",src:a(48707).Z})),(0,i.kt)("p",null,"In this case, we have the main thread called ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch_sync")," and ",(0,i.kt)("strong",{parentName:"p"},"we will execute that block at the QoS of the calling thread"),", user interactive here. At the meantime you have a QoS utility thread also calling ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch_sync")," on this queue to get the exclusive access to the shared data. Again, the same thing will happen if he comes in later he will block waiting to get the exclusive access. Then ",(0,i.kt)("strong",{parentName:"p"},"execute that block on his own thread at QoS utility"),"."),(0,i.kt)("p",null,"Now, suppose the utility guy comes in first and takes the lock, you will have the main thread waiting on a utility thread. It's again a case of ",(0,i.kt)("strong",{parentName:"p"},"priority inversion"),". We'll resolve that by ",(0,i.kt)("strong",{parentName:"p"},"raising")," the Quality of Service of waited on work."),(0,i.kt)("p",null,"Generally, QoS of waited on work is raised for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dispatch_sync()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"dispatch_block_wait()")," of blocks on serial queues"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pthread_mutex_lock()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"NSLock"))),(0,i.kt)("h2",{id:"dispatch_barrier_async"},"dispatch_barrier_async"),(0,i.kt)("p",null,"\u5e76\u53d1\u8bfb\uff0c\u4e92\u65a5\u5199\uff01\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yianzhou/ios-demos/"},"DemoGCD"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dispatch_barrier_async")," The queue you specify should be a concurrent queue that you create yourself using the ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch_queue_create")," function. If the queue you pass to this function is a serial queue or one of the global concurrent queues, this function behaves like the ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch_async")," function. \u6805\u680f\u51fd\u6570\u8981\u914d\u5408\u81ea\u5df1\u521b\u5efa\u7684\u5e76\u53d1\u961f\u5217\u4f7f\u7528\uff01\uff01"),(0,i.kt)("h2",{id:"dispatch_group_t"},"dispatch_group_t"),(0,i.kt)("p",null,"You attach multiple work items to a group and schedule them for asynchronous execution ",(0,i.kt)("strong",{parentName:"p"},"on the same queue or different queues"),". When all work items finish executing, the group executes its completion handler. You can also wait synchronously for all tasks in the group to finish executing."),(0,i.kt)("h2",{id:"dispatch_source_t"},"dispatch_source_t"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"let source = DispatchSource.makeReadSource(fileDescriptor: fd, queue: queue)\nsource.setEventHandler { read(fd) }\nsource.setCancelHandler { close(fd) }\nsource.activate()\n")),(0,i.kt)("p",null,"This is our event monitoring primitive in GCD. Here we are setting one up to monitor a file descriptor for readability. You pass it in a queue which is the target queue of the source, which is where we execute the event handler of the source. This target queue is also where you might put other work that should be serialized with this operation, such as processing the data that was read. Then, we set the cancel handler for the source, which is how sources implement the invalidation pattern. And finally, when everything is set up, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"source.activate()")," to start monitoring."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DispatchSource")," is just an instance of a more general pattern throughout the OS, where you have objects that deliver events to a target queue that you specify. Another example was XPC connections."),(0,i.kt)("h2",{id:"runloop-vs-dispatch-queues"},"RunLoop vs Dispatch Queues"),(0,i.kt)("p",null,"The autorelease pool on a serial queue will only pop when a thread goes completely idle. This could never happen if your application is constantly busy. So it's important to not rely on the autorelease pool that comes for free when you use dispatch."))}p.isMDXComponent=!0},48707:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6OWFkYzBhNDU0MWY0M2YwOTI5Zjc5ZDJmN2VlZmEyNzAzM2NjY2Y4YThlYTA0MTJjNGRkYjYxODQ3YjU1MTVhMApzaXplIDg3NDU5Cg=="},3745:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6NWNmMzk3NWNlZGMzODIyN2FiNWY0MzgwMzA4MjE5MDE0Y2IwZWQ5NTdhNWQyMzliMjQ5ODg5NDgyMDUwMTFkOApzaXplIDc2Mjg5Cg=="}}]);