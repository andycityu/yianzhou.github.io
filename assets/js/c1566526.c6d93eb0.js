"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6142],{13592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var a=n(87462),o=(n(67294),n(3905));n(61839);const i={},s="Block and GCD",c={unversionedId:"Effective Objective-C/effective-oc-6",id:"Effective Objective-C/effective-oc-6",title:"Block and GCD",description:"37: Blocks",source:"@site/docs/language/Effective Objective-C/effective-oc-6.md",sourceDirName:"Effective Objective-C",slug:"/Effective Objective-C/effective-oc-6",permalink:"/docs/language/Effective Objective-C/effective-oc-6",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Memory Management",permalink:"/docs/language/Effective Objective-C/effective-oc-5"},next:{title:"System Frameworks",permalink:"/docs/language/Effective Objective-C/effective-oc-7"}},l={},r=[{value:"37: Blocks",id:"37-blocks",level:2},{value:"Memory Layout",id:"memory-layout",level:3},{value:"Global, Stack, and Heap Blocks",id:"global-stack-and-heap-blocks",level:3},{value:"38: Create typedefs for Common Block Types",id:"38-create-typedefs-for-common-block-types",level:2},{value:"39: Use Handler Blocks to Reduce Code Separation",id:"39-use-handler-blocks-to-reduce-code-separation",level:2},{value:"40: Avoid Retain Cycles Introduced by Blocks",id:"40-avoid-retain-cycles-introduced-by-blocks",level:2},{value:"41: Prefer Dispatch Queues to Locks for Synchronization",id:"41-prefer-dispatch-queues-to-locks-for-synchronization",level:2},{value:"42: Prefer GCD to performSelector and Friends",id:"42-prefer-gcd-to-performselector-and-friends",level:2},{value:"43: GCD and Operation Queues",id:"43-gcd-and-operation-queues",level:2},{value:"44: Use Dispatch Groups to Take Advantage of Platform Scaling",id:"44-use-dispatch-groups-to-take-advantage-of-platform-scaling",level:2},{value:"45: Use dispatch_once for Thread-Safe Single-Time Code Execution",id:"45-use-dispatch_once-for-thread-safe-single-time-code-execution",level:2},{value:"46: Avoid dispatch_get_current_queue",id:"46-avoid-dispatch_get_current_queue",level:2}],d={toc:r};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"block-and-gcd"},"Block and GCD"),(0,o.kt)("h2",{id:"37-blocks"},"37: Blocks"),(0,o.kt)("p",null,"A block is similar to a function but is defined inline to another function and shares the scope of that within which it is defined."),(0,o.kt)("p",null,"A block can be assigned to a variable and then used like any other variable."),(0,o.kt)("p",null,"By default, any variable captured by a block cannot be modified by the block. However, variables can be declared as modifiable by giving them the ",(0,o.kt)("inlineCode",{parentName:"p"},"__block")," qualifier."),(0,o.kt)("p",null,"When it captures a variable of object type, a block implicitly retains it. It will be released when the block itself is released. A block itself can be considered an object. In fact, blocks respond to many of the selectors that other Objective-C objects do. Most important to understand is that a block is reference counted just like other objects. When the last reference to a block is removed, it is deallocated. In doing so, any objects that the block captures are released to balance out the block\u2019s retain of them."),(0,o.kt)("p",null,"If the block is defined in an instance method of an Objective-C class, the self variable is available along with any instance variables of the class. Instance variables are always writable and do not need to be explicitly declared with ",(0,o.kt)("inlineCode",{parentName:"p"},"__block"),". But if an instance variable is captured by either reading or writing to it, the self variable is implicitly captured also, because the instance variable relates to that instance. This situation can often lead to retain cycles being introduced if the block is itself retained by the same object to which self refers."),(0,o.kt)("h3",{id:"memory-layout"},"Memory Layout"),(0,o.kt)("p",null,"A block is an object itself, since the first variable within the region of memory that a block is defined in is a pointer to a Class object, called the isa pointer."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(22472).Z})),(0,o.kt)("p",null,"The most important thing to note in the layout is the variable called invoke, a function pointer to where the implementation of the block resides. The prototype of the function takes at least a void","*",", which is the block itself. Recall that blocks are a simple replacement for function pointers where state is passed using an opaque void pointer."),(0,o.kt)("p",null,"The descriptor variable is a pointer to a structure that each block has, declaring the overall size of the block object and function pointers for copy and dispose helpers. These helpers are run when a block is copied and disposed of, for example, to perform any retaining or releasing, respectively, of captured objects."),(0,o.kt)("p",null,"Finally, a block contains copies of all the variables it captures. These copies are stored after the descriptor variable and take up as much space as required to store all the captured variables. When the block is run, the captured variables are read from this region of memory, which is why the block needs to be passed as a parameter into the invoke function."),(0,o.kt)("h3",{id:"global-stack-and-heap-blocks"},"Global, Stack, and Heap Blocks"),(0,o.kt)("p",null,"When blocks are defined, the region of memory they occupy is allocated on the ",(0,o.kt)("strong",{parentName:"p"},"stack"),". Blocks can be copied from the stack to the heap by sending the block the ",(0,o.kt)("inlineCode",{parentName:"p"},"copy")," message."),(0,o.kt)("p",null,"Global blocks are another category, along with stack and heap blocks. Blocks that don\u2019t capture any state, such as variables from the enclosing scope, do not need any state to run. The entire region of memory these blocks use is known in full at compile time. These blocks can be declared as global."),(0,o.kt)("h2",{id:"38-create-typedefs-for-common-block-types"},"38: Create typedefs for Common Block Types"),(0,o.kt)("p",null,"To hide the complicated block type, you use a language feature from C called type definitions. The keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"typedef")," allows you to define an easy-to-read name that becomes an alias for another type."),(0,o.kt)("h2",{id:"39-use-handler-blocks-to-reduce-code-separation"},"39: Use Handler Blocks to Reduce Code Separation"),(0,o.kt)("p",null,"Use a handler block when it will be useful to have the business logic of the handler be declared inline with the creation of the object."),(0,o.kt)("p",null,"Handler blocks have the benefit of being associated with an object directly rather than delegation, which often requires switching based on the object if multiple instances are being observed."),(0,o.kt)("p",null,"When designing an API that uses handler blocks, consider passing a queue as a parameter, to designate the queue on which the block should be enqueued."),(0,o.kt)("p",null,"Another consideration when writing handler-based APIs stems from the fact that some code is required to run on a certain thread. For instance, any UI work in both Cocoa and Cocoa Touch must happen on the main thread. Therefore, it is sometimes prudent to allow the consumer of a handler-based API to decide on which queue the handler is run. One such API is NSNotificationCenter. If no queue is given, the default behavior is invoked, and the block is run on the thread that posted the notification."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"- (id<NSObject>)addObserverForName:(NSNotificationName)name\n                            object:(id)obj\n                             queue:(NSOperationQueue *)queue\n                        usingBlock:(void (^)(NSNotification *note))block;\n")),(0,o.kt)("h2",{id:"40-avoid-retain-cycles-introduced-by-blocks"},"40: Avoid Retain Cycles Introduced by Blocks"),(0,o.kt)("p",null,"The key is to think about what objects a block may capture and therefore retain. If any of these can be an object that retains the block, either directly or indirectly, you will need to think about how to break the retain cycle at the correct moment."),(0,o.kt)("h2",{id:"41-prefer-dispatch-queues-to-locks-for-synchronization"},"41: Prefer Dispatch Queues to Locks for Synchronization"),(0,o.kt)("p",null,"Sometimes in Objective-C, you will come across code that you\u2019re having trouble with because it\u2019s being accessed from multiple threads. This situation usually calls for the application of some sort of synchronization through the use of locks. Before GCD, there were two ways to achieve this:"),(0,o.kt)("p",null,"1","."," built-in synchronization block"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"- (void)synchronizedMethod {\n    @synchronized(self) {\n        // \u4fee\u6539 self \u7684\u5b9e\u4f8b\u53d8\u91cf/\u5c5e\u6027\n        // \u8c03\u7528 self \u7684\u5b9e\u4f8b\u65b9\u6cd5\n    }\n}\n")),(0,o.kt)("p",null,"This construct automatically creates a lock based on the given object and waits on that lock until it executes the code contained in the block. At the end of the code block, the lock is released. In the example, the object being synchronized against is self. This construct is often a good choice, as it ensures that each instance of the object can run its own ",(0,o.kt)("inlineCode",{parentName:"p"},"synchronizedMethod")," independently. However, overuse of ",(0,o.kt)("inlineCode",{parentName:"p"},"@synchronized(self)")," can lead to inefficient code, as each synchronized block will execute serially across all such blocks. If you overuse synchronization against self, you can end up with code waiting unnecessarily on a lock held by unrelated code."),(0,o.kt)("p",null,"2","."," use the ",(0,o.kt)("inlineCode",{parentName:"p"},"NSLock")," object directly"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"_lock = [[NSLock alloc] init];\n\n- (void)synchronizedMethod {\n    [_lock lock];\n    // safe\n    [_lock unlock];\n}\n")),(0,o.kt)("p",null,"Recursive locks are also available through ",(0,o.kt)("inlineCode",{parentName:"p"},"NSRecursiveLock"),", allowing for one thread to take out the same lock multiple times without causing a deadlock."),(0,o.kt)("p",null,"Both of these approaches are fine but come with their own drawbacks. For example, synchronization blocks can suffer from deadlock under extreme circumstances and are not necessarily efficient. Direct use of locks can be troublesome when it comes to deadlocks."),(0,o.kt)("p",null,"\u90a3\u4e48\uff0c\u66f4\u597d\u7684\u65b9\u6848\u662f\u4f7f\u7528 GCD\uff0c\u5b83\u80fd\u66f4\u7b80\u5355\u3001\u9ad8\u6548\u5730\u4e3a\u4ee3\u7801\u52a0\u9501\u3002\u4f7f\u7528\u4e32\u884c\u961f\u5217\uff0c\u5c06\u8bfb\u53d6\u548c\u5199\u5165\u64cd\u4f5c\u90fd\u653e\u5728\u540c\u4e00\u4e2a\u961f\u5217\u91cc\uff0c\u5373\u53ef\u4fdd\u8bc1\u6570\u636e\u540c\u6b65\u3002\u5982\u6b64\uff0c\u5168\u90e8\u52a0\u9501\u4efb\u52a1\u90fd\u4ea4\u7531 GCD \u5904\u7406\uff0c\u800c GCD \u662f\u5728\u76f8\u5f53\u6df1\u7684\u5e95\u5c42\u5b9e\u73b0\u7684\uff0c\u5b89\u5168\u4e14\u6548\u7387\u5f88\u9ad8\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"get")," \u65b9\u6cd5\u5fc5\u987b\u540c\u6b65\u6267\u884c\uff1b",(0,o.kt)("inlineCode",{parentName:"p"},"set"),"\u65b9\u6cd5\u4e0d\u9700\u8981\u8fd4\u56de\u503c\uff0c\u6240\u4ee5\u4e0d\u662f\u5fc5\u987b\u540c\u6b65\u6267\u884c\uff0c\u4e5f\u53ef\u4ee5\u5f02\u6b65\u6267\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"- (void)setStr:(NSString *)str {\n    dispatch_async(self.serialQueue, ^{\n        self.str = str;\n    });\n}\n")),(0,o.kt)("p",null,"\u5373\u4f7f\u4f7f\u7528\u5f02\u6b65\u6267\u884c\uff0c\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u4ecd\u7136\u662f\u4e32\u884c\u7684\uff0c\u8bfb\u53d6\u548c\u5199\u5165\u4f9d\u7136\u4f1a\u6309\u987a\u5e8f\u6267\u884c\u3002\u4f46\u6267\u884c\u5f02\u6b65\u6d3e\u53d1\u65f6\uff0c\u7531\u4e8e\u9700\u8981\u62f7\u8d1d block\uff0c\u5982\u679c\u62f7\u8d1d block \u7684\u65f6\u95f4\u660e\u663e\u8d85\u8fc7\u6267\u884c block \u7684\u65f6\u95f4\uff0c\u90a3\u4e48\u8fd9\u79cd\u5199\u6cd5\u4f1a\u6bd4\u539f\u6765\u66f4\u6162\u3002\u5982\u679c\u6d3e\u53d1\u7684 block \u8981\u6267\u884c\u7e41\u91cd\u7684\u4efb\u52a1\uff0c\u90a3\u4e48\u53ef\u4ee5\u8003\u8651\u8fd9\u79cd\u65b9\u6848\u3002"),(0,o.kt)("p",null,"\u591a\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"get"),"\u65b9\u6cd5\u53ef\u4ee5\u5e76\u53d1\u6267\u884c\uff0c\u4f46",(0,o.kt)("inlineCode",{parentName:"p"},"get"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"set"),"\u65b9\u6cd5\u4e0d\u80fd\u5e76\u53d1\u6267\u884c\uff0c\u5229\u7528\u8fd9\u4e2a\u7279\u70b9\uff0c\u8fd8\u53ef\u4ee5\u5199\u51fa\u66f4\u5feb\u7684\u4ee3\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"#import <Foundation/Foundation.h>\nNS_ASSUME_NONNULL_BEGIN\n@interface DemoObject : NSObject\n@property(nonatomic, copy) NSString *someString;\n@end\nNS_ASSUME_NONNULL_END\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'#import "DemoObject.h"\n\n@interface DemoObject()\n@property(nonatomic, strong, nonnull) dispatch_queue_t concurrentQueue;\n@end\n\n@implementation DemoObject\n\n@synthesize someString = _someString; // \u91cd\u8981\n\n- (instancetype)init\n{\n    self = [super init];\n    if (self) {\n        // \u81ea\u5df1\u521b\u5efa\u5e76\u53d1\u961f\u5217\uff0c\u6805\u680f\u51fd\u6570\u4e0d\u80fd\u914d\u5408\u5168\u5c40\u961f\u5217\u4f7f\u7528\uff01\uff01\n        _concurrentQueue = dispatch_queue_create(NSStringFromClass([self class]).UTF8String, DISPATCH_QUEUE_CONCURRENT);\n    }\n    return self;\n}\n\n-(NSString *)someString {\n    __block NSString *localSomeString;\n    dispatch_sync(_concurrentQueue, ^{\n        NSLog(@"%@", [[NSThread currentThread]description]); // \u4e3b\u7ebf\u7a0b\uff01\uff01\n        // \u6b64\u5904\u9700\u4f7f\u7528 _someString \u76f4\u63a5\u8bbf\u95ee\u5b9e\u4f8b\u53d8\u91cf\uff01\n        // \u5982\u679c\u4f7f\u7528 self.someString \u5c31\u662f\u518d\u6b21\u8c03\u7528\u4e86 getter\uff01\u4f1a\u6b7b\u5faa\u73af\uff01\n        localSomeString = _someString;\n    });\n    return localSomeString;\n}\n\n-(void)setSomeString:(NSString *)someString{\n    dispatch_barrier_async(_concurrentQueue, ^{\n        self->_someString = someString;\n    });\n}\n@end\n')),(0,o.kt)("p",null,"\u5728\u961f\u5217\u4e2d\uff0cbarrier block \u5fc5\u987b\u5355\u72ec\u6267\u884c\uff0c\u4e0d\u80fd\u5e76\u53d1\u6267\u884c\uff0c\u8fd9\u53ea\u5bf9\u5e76\u884c\u961f\u5217\u6709\u610f\u4e49\uff0c\u56e0\u4e3a\u4e32\u884c\u961f\u5217\u4e2d\u7684\u5757\u603b\u662f\u9010\u4e2a\u6267\u884c\u3002\u5e76\u53d1\u961f\u5217\u4e2d\u5982\u679c\u8981\u6267\u884c\u4e00\u4e2a barrier block\uff0c\u5fc5\u987b\u7b49\u5f85\u5f53\u524d\u6240\u6709\u7684\u5e76\u53d1\u5757\u90fd\u6267\u884c\u5b8c\uff0c\u518d\u5355\u72ec\u6267\u884c barrier block\uff0c\u7136\u540e\u7ee7\u7eed\u6b63\u5e38\u6267\u884c\u3002"),(0,o.kt)("h2",{id:"42-prefer-gcd-to-performselector-and-friends"},"42: Prefer GCD to performSelector and Friends"),(0,o.kt)("h2",{id:"43-gcd-and-operation-queues"},"43: GCD and Operation Queues"),(0,o.kt)("p",null,"The first difference to note is that GCD is a pure C API, whereas operation queues are Objective-C objects."),(0,o.kt)("p",null,"In GCD, the task that is queued is a block, which is a fairly lightweight data structure. Operations, on the other hand, are Objective-C objects and are therefore more heavyweight."),(0,o.kt)("p",null,"That said, GCD is not always the approach of choice. Sometimes, this overhead is minimal, and the benefits of using full objects far outweigh the downsides. These queues can also do much more complex things that would require additional code on top of GCD."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cancelling operations"),(0,o.kt)("li",{parentName:"ul"},"Operation dependencies"),(0,o.kt)("li",{parentName:"ul"},"Key-Value Observing of operation properties: such as ",(0,o.kt)("inlineCode",{parentName:"li"},"isCancelled")," to determine whether it has been cancelled and ",(0,o.kt)("inlineCode",{parentName:"li"},"isFinished")," to determine whether it has finished."),(0,o.kt)("li",{parentName:"ul"},"Operation priorities"),(0,o.kt)("li",{parentName:"ul"},"Reuse of operations. ",(0,o.kt)("inlineCode",{parentName:"li"},"BlockOperation"),"\u7684\u5b50\u7c7b\u5728\u6267\u884c\u65f6\u53ef\u4ee5\u5145\u5206\u5229\u7528\u81ea\u5df1\u7684\u6210\u5458\u53d8\u91cf\u548c\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u5c01\u88c5\u597d\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"Operation"),"\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u591a\u6b21\u4f7f\u7528\u3002")),(0,o.kt)("p",null,"\u603b\u7684\u6765\u8bf4\uff0cOperation \u63d0\u4f9b\u4e86\u66f4\u591a\u5728\u7f16\u5199\u591a\u7ebf\u7a0b\u7a0b\u5e8f\u65f6\u9700\u8981\u7684\u529f\u80fd\uff0c\u6bd4\u5982\u7ebf\u7a0b\u8c03\u5ea6\u3001\u4efb\u52a1\u53d6\u6d88\u3001\u7ebf\u7a0b\u4f18\u5148\u7ea7\u7b49\uff0c\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u7b80\u5355\u7684 API\u3002\u4ece\u7f16\u7a0b\u539f\u5219\u6765\u8bf4\uff0c\u4e00\u822c\u6211\u4eec\u9700\u8981\u5c3d\u53ef\u80fd\u4f7f\u7528\u9ad8\u7b49\u7ea7\u3001\u5c01\u88c5\u5b8c\u7f8e\u7684 API\uff0c\u5728\u5fc5\u987b\u65f6\u624d\u4f7f\u7528\u5e95\u5c42 API\u3002\u4f46\u5f53\u6211\u4eec\u8ba4\u4e3a\u9700\u6c42\u80fd\u591f\u4ee5\u66f4\u7b80\u5355\u7684\u4ee3\u7801\u5757\u5b9e\u73b0\u7684\u65f6\u5019\uff0c\u7b80\u6d01\u7684 GCD \u6216\u8bb8\u662f\u4e2a\u66f4\u597d\u7684\u9009\u62e9\u3002"),(0,o.kt)("h2",{id:"44-use-dispatch-groups-to-take-advantage-of-platform-scaling"},"44: Use Dispatch Groups to Take Advantage of Platform Scaling"),(0,o.kt)("p",null,"Dispatch groups are a GCD feature that allows you to easily group tasks. You can then wait on that set of tasks to finish or be notified through a callback when the set of tasks has finished."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"dispatch_queue_t queue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);\ndispatch_group_t dispatchGroup = dispatch_group_create();\nfor (id object in collection) {\n    dispatch_group_async(dispatchGroup, queue, ^{\n        [object performTask];\n    });\n}\ndispatch_group_wait(dispatchGroup, DISPATCH_TIME_FOREVER);\n")),(0,o.kt)("p",null,"If the current thread should not be blocked, you can use the notify function instead of waiting:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"dispatch_queue_t notifyQueue = dispatch_get_main_queue();\ndispatch_group_notify(dispatchGroup, notifyQueue, ^{\n    /* Continue processing after completing tasks */\n});\n")),(0,o.kt)("p",null,"GCD automatically creates new threads or reuses old ones as it sees fit to service blocks on a queue. In the case of concurrent queues, this can be multiple threads, meaning that multiple blocks are executed concurrently. This leaves you to code your business logic and not have to write any kind of complex scheduler to handle concurrent tasks."),(0,o.kt)("h2",{id:"45-use-dispatch_once-for-thread-safe-single-time-code-execution"},"45: Use dispatch_once for Thread-Safe Single-Time Code Execution"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dispatch_once")," ensures that for a given token, the block is executed once and only once. The block is always executed the first time and, most important, is entirely thread safe. The token has been declared static because it needs to be exactly the same token each time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"+ (id)sharedInstance {\n    static EOCClass *sharedInstance = nil;\n    static dispatch_once_t onceToken;\n    dispatch_once(&onceToken, ^{\n        sharedInstance = [[self alloc] init];\n    });\n    return sharedInstance;\n}\n")),(0,o.kt)("h2",{id:"46-avoid-dispatch_get_current_queue"},"46: Avoid dispatch_get_current_queue"))}u.isMDXComponent=!0},22472:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6ZDgzNWZlOGE1YjhiMmZmMGUwYmJiYmY4ZjE0YTRmZTg4MGRmMmNhNTk5MzVhMTI0ZDM3NWFlOTRkMzA1NGI1OApzaXplIDIzODQ2Cg=="}}]);