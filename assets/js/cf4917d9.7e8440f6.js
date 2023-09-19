"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2276],{90610:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var i=o(87462),n=(o(67294),o(3905));o(61839);const r={},a="\u4fe1\u53f7\u91cf",p={unversionedId:"semaphore",id:"semaphore",title:"\u4fe1\u53f7\u91cf",description:"\u5de5\u4f5c\u539f\u7406",source:"@site/docs/apple/semaphore.md",sourceDirName:".",slug:"/semaphore",permalink:"/docs/apple/semaphore",draft:!1,editUrl:"https://github.com/yianzhou/yianzhou.github.io/docs/apple/semaphore.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/docs/apple/performance"},next:{title:"\u7b26\u53f7\u5316",permalink:"/docs/apple/symbolic"}},l={},s=[{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u4f18\u5148\u7ea7\u53cd\u8f6c",id:"\u4f18\u5148\u7ea7\u53cd\u8f6c",level:2},{value:"\u9965\u997f",id:"\u9965\u997f",level:2},{value:"\u6b7b\u9501",id:"\u6b7b\u9501",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u4fe1\u53f7\u91cf"},"\u4fe1\u53f7\u91cf"),(0,n.kt)("h2",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://medium.com/swiftly-swift/a-quick-look-at-semaphores-6b7b85233ddb#.61uw6lq2d"},"A Quick Look at Semaphores in Swift \ud83d\udea6")),(0,n.kt)("p",null,"\u4fe1\u53f7\u91cf\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8ba1\u6570\u5668\uff0c\u8ba9\u4fe1\u53f7\u91cf\u77e5\u9053\u6709\u591a\u5c11\u4e2a\u7ebf\u7a0b\u80fd\u4f7f\u7528\u5b83\u7684\u8d44\u6e90\u3002"),(0,n.kt)("li",{parentName:"ul"},"FIFO \u961f\u5217\uff0c\u7528\u6765\u8ffd\u8e2a\u8fd9\u4e9b\u7b49\u5f85\u8d44\u6e90\u7684\u7ebf\u7a0b\u3002")),(0,n.kt)("p",null,"\u5f53\u4fe1\u53f7\u91cf\u6536\u5230\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"wait()")," \u65f6\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u8ba1\u6570\u5668\u5927\u4e8e\u96f6\uff0c\u4ee3\u8868\u672c\u6b21\u8bf7\u6c42\u53ef\u4ee5\u653e\u884c\uff0c\u4fe1\u53f7\u91cf\u4f1a\u51cf\u4e00\uff0c\u7136\u540e\u7ed9\u7ebf\u7a0b\u653e\u884c\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u8ba1\u6570\u5668\u7b49\u4e8e\u96f6\uff0c\u4ee3\u8868\u672c\u6b21\u8bf7\u6c42\u4e0d\u80fd\u653e\u884c\uff0c\u4f1a\u628a\u7ebf\u7a0b\u6dfb\u52a0\u5230\u5b83\u961f\u5217\u7684\u672b\u5c3e\u3002")),(0,n.kt)("p",null,"\u5f53\u4fe1\u53f7\u91cf\u6536\u5230\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"signal()")," \u65f6\uff0c\u4f1a\u68c0\u67e5\u5b83\u7684 FIFO \u961f\u5217\u662f\u5426\u6709\u7ebf\u7a0b\u5b58\u5728\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\uff0c\u90a3\u4e48\u4fe1\u53f7\u91cf\u4f1a\u628a\u7b2c\u4e00\u4e2a\u7ebf\u7a0b\u53d6\u51fa\u6765\uff0c\u7ed9\u5b83\u653e\u884c\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\uff0c\u4f1a\u589e\u52a0\u5b83\u7684\u8ba1\u6570\u5668\u3002")),(0,n.kt)("p",null,"\u5f53\u4e00\u4e2a\u7ebf\u7a0b\u53d1\u9001\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"wait()")," \u8d44\u6e90\u8bf7\u6c42\u7ed9\u4fe1\u53f7\u91cf\u65f6\uff0c\u7ebf\u7a0b\u4f1a\u51bb\u7ed3\u76f4\u5230\u4fe1\u53f7\u91cf\u7ed9\u7ebf\u7a0b\u653e\u884c\u3002\uff08\u5982\u679c\u4f60\u5728\u4e3b\u7ebf\u7a0b\u8fd9\u4e48\u505a\uff0c\u6574\u4e2a app \u4f1a\u51bb\u7ed3\uff01\uff09"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},'import Foundation\n\nlet higherPriority = DispatchQueue.global(qos: .default)\nlet lowerPriority = DispatchQueue.global(qos: .background)\n\n// \u540c\u65f6\u53ea\u5141\u8bb8\u4e00\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\u8d44\u6e90\nlet semaphore = DispatchSemaphore(value: 1)\n\nfunc asyncPrint(queue: DispatchQueue, symbol: String) {\n  queue.async {\n    print(queue.label + " wait")\n    semaphore.wait()\n\n    for i in 0...100 {\n      print(symbol, i)\n    }\n\n    print(queue.label + " signal")\n    semaphore.signal()\n  }\n}\n\nasyncPrint(queue: higherPriority, symbol: "\ud83d\ude97")\nasyncPrint(queue: lowerPriority, symbol: "\ud83d\udeb4\u200d\u2640\ufe0f")\n')),(0,n.kt)("h2",{id:"\u4f18\u5148\u7ea7\u53cd\u8f6c"},"\u4f18\u5148\u7ea7\u53cd\u8f6c"),(0,n.kt)("p",null,"\u5728\u6781\u5c11\u6570\u60c5\u51b5\u4e0b\uff0c\u5904\u7406\u5668\u51b3\u5b9a\u5148\u6267\u884c\u4f4e\u4f18\u5148\u7ea7\u7684\u7ebf\u7a0b\uff08\u8fd9\u662f\u771f\u7684\uff0c\u5b83\u7684\u786e\u4f1a\u53d1\u751f\uff09\u3002\u4f4e\u4f18\u5148\u7ea7\u7684\u7ebf\u7a0b\u88ab\u653e\u884c\uff0c\u9ad8\u4f18\u5148\u7ea7\u7684\u7ebf\u7a0b\u5fc5\u987b\u7b49\u5f85\u4f4e\u4f18\u5148\u7ea7\u7684\u7ebf\u7a0b\u5b8c\u6210\u3002"),(0,n.kt)("h2",{id:"\u9965\u997f"},"\u9965\u997f"),(0,n.kt)("p",null,"\u5982\u679c\u6211\u4eec\u6709\u4e00\u79cd\u50cf\u4e0a\u9762\u90a3\u6837\u4f18\u5148\u7ea7\u53cd\u8f6c\u7684\u60c5\u51b5\uff0c\u9ad8\u4f18\u5148\u7ea7\u7684\u7ebf\u7a0b\u5fc5\u987b\u7b49\u5f85\u4f4e\u4f18\u5148\u7ea7\u7684\u7ebf\u7a0b\uff0c\u5047\u8bbe\u5728\u6211\u4eec\u7684\u9ad8\u4f18\u5148\u7ea7\u548c\u4f4e\u4f18\u5148\u7ea7\u7ebf\u7a0b\u4e4b\u95f4\u8fd8\u6709 1000 \u591a\u4e2a\u4e2d\u4f18\u5148\u7ea7\u7684\u7ebf\u7a0b\uff0c\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u5904\u7406\u5668\u4f1a\u6267\u884c\u4e2d\u4f18\u5148\u7ea7\u7684\u7ebf\u7a0b\uff0c\u56e0\u4e3a\u4ed6\u4eec\u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e\u6211\u4eec\u7684\u4f4e\u4f18\u5148\u7ea7\u7ebf\u7a0b\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u7684\u9ad8\u4f18\u5148\u7ea7\u7ebf\u7a0b\uff0c\u5728 CPU \u65f6\u95f4\u5206\u914d\u4e2d\uff0c\u4e00\u76f4\u5904\u4e8e\u9965\u997f\u72b6\u6001\uff08Starvation\uff09\u3002"),(0,n.kt)("h2",{id:"\u6b7b\u9501"},"\u6b7b\u9501"),(0,n.kt)("p",null,"\u8003\u8651\u4ee5\u4e0b\u8fd9\u79cd\u60c5\u51b5\uff0c\u6709\u4e24\u4e2a\u8d44\u6e90 A \u548c B\uff0c\u5b83\u4eec\u53ef\u4ee5\u88ab\u72ec\u7acb\u4f7f\u7528\uff0c\u6240\u4ee5\u5b83\u4eec\u5e94\u8be5\u4f7f\u7528\u4e24\u4e2a\u72ec\u7acb\u7684\u4fe1\u53f7\u91cf\uff1b\u5982\u679c\u5b83\u4eec\u4f1a\u88ab\u4e00\u8d77\u4f7f\u7528\uff0c\u90a3\u4e48\u7528\u540c\u4e00\u4e2a\u4fe1\u53f7\u91cf\u5c31\u53ef\u4ee5\u4e86\u3002\u8fd9\u65f6\u6709\u4e24\u4e2a\u7ebf\u7a0b\uff0c\u4e00\u4e2a\u9ad8\u4f18\u5148\u7ea7\u7684\u7ebf\u7a0b\u9700\u8981\u5148\u4f7f\u7528 A \u7136\u540e\u4f7f\u7528 B\u3001\u4e00\u4e2a\u4f4e\u4f18\u5148\u7ea7\u7684\u7ebf\u7a0b\u9700\u8981\u5148\u4f7f\u7528 B \u518d\u4f7f\u7528 A\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},'import UIKit\n\nlet higherPriority = DispatchQueue.global(qos: .userInitiated)\nlet lowerPriority = DispatchQueue.global(qos: .utility)\nlet semaphoreA = DispatchSemaphore(value: 1)\nlet semaphoreB = DispatchSemaphore(value: 1)\n\nfunc asyncPrint(queue: DispatchQueue, firstResource: String, firstSemaphore: DispatchSemaphore, secondResource: String, secondSemaphore: DispatchSemaphore) {\n    func requestResource(_ resource: String, with semaphore: DispatchSemaphore) {\n        print("\\(queue.label) waiting \\(resource)")\n        semaphore.wait()\n    }\n    queue.async {\n        requestResource(firstResource, with: firstSemaphore)\n        for i in 0...10 {\n            print(queue.label, i, firstResource)\n            if i == 5 {\n                requestResource(secondResource, with: secondSemaphore)\n                print(queue.label, i, secondResource)\n                print("\\(queue.label) releasing \\(secondResource)")\n                secondSemaphore.signal()\n            }\n        }\n        print("\\(queue.label) releasing \\(firstResource)")\n        firstSemaphore.signal()\n    }\n}\n\nasyncPrint(queue: higherPriority, firstResource: "A", firstSemaphore: semaphoreA, secondResource: "B", secondSemaphore: semaphoreB)\nasyncPrint(queue: lowerPriority, firstResource: "B", firstSemaphore: semaphoreB, secondResource: "A", secondSemaphore: semaphoreA)\n')),(0,n.kt)("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"com.apple.root.user-initiated-qos waiting A // \u9ad8\u4f18\u7ebf\u7a0b\u7b49\u5f85 A\ncom.apple.root.utility-qos waiting B // \u4f4e\u4f18\u7ebf\u7a0b\u7b49\u5f85 B\ncom.apple.root.user-initiated-qos 0 A // \u9ad8\u4f18\u7ebf\u7a0b A \u8d44\u6e90\u88ab\u653e\u884c\ncom.apple.root.user-initiated-qos 1 A\ncom.apple.root.user-initiated-qos 2 A\ncom.apple.root.user-initiated-qos 3 A\ncom.apple.root.user-initiated-qos 4 A\ncom.apple.root.user-initiated-qos 5 A\ncom.apple.root.user-initiated-qos waiting B // \u9ad8\u4f18\u7ebf\u7a0b\u7b49\u5f85 B\ncom.apple.root.user-initiated-qos 5 B // \u9ad8\u4f18\u7ebf\u7a0b B \u8d44\u6e90\u88ab\u653e\u884c\ncom.apple.root.user-initiated-qos releasing B // \u9ad8\u4f18\u7ebf\u7a0b\u91ca\u653e B\ncom.apple.root.user-initiated-qos 6 A\ncom.apple.root.user-initiated-qos 7 A\ncom.apple.root.user-initiated-qos 8 A\ncom.apple.root.user-initiated-qos 9 A\ncom.apple.root.user-initiated-qos 10 A\ncom.apple.root.user-initiated-qos releasing A // \u9ad8\u4f18\u7ebf\u7a0b\u91ca\u653e A\ncom.apple.root.utility-qos 0 B // \u4f4e\u4f18\u7ebf\u7a0b B \u8d44\u6e90\u88ab\u653e\u884c\ncom.apple.root.utility-qos 1 B\ncom.apple.root.utility-qos 2 B\ncom.apple.root.utility-qos 3 B\ncom.apple.root.utility-qos 4 B\ncom.apple.root.utility-qos 5 B\ncom.apple.root.utility-qos waiting A // \u4f4e\u4f18\u7ebf\u7a0b\u7b49\u5f85 A\ncom.apple.root.utility-qos 5 A // \u4f4e\u4f18\u7ebf\u7a0b A \u8d44\u6e90\u88ab\u653e\u884c\ncom.apple.root.utility-qos releasing A // \u4f4e\u4f18\u7ebf\u7a0b\u91ca\u653e A\ncom.apple.root.utility-qos 6 B\ncom.apple.root.utility-qos 7 B\ncom.apple.root.utility-qos 8 B\ncom.apple.root.utility-qos 9 B\ncom.apple.root.utility-qos 10 B\ncom.apple.root.utility-qos releasing B // \u4f4e\u4f18\u7ebf\u7a0b\u91ca\u653e B\n")),(0,n.kt)("p",null,"\u6b7b\u9501\u60c5\u51b5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"com.apple.root.user-initiated-qos waiting A // \u9ad8\u4f18\u7ebf\u7a0b\u7b49\u5f85 A\ncom.apple.root.utility-qos waiting B // \u4f4e\u4f18\u7ebf\u7a0b\u7b49\u5f85 B\ncom.apple.root.user-initiated-qos 0 A // \u9ad8\u4f18\u7ebf\u7a0b A \u8d44\u6e90\u88ab\u653e\u884c\ncom.apple.root.user-initiated-qos 1 A\ncom.apple.root.utility-qos 0 B // \u4f4e\u4f18\u7ebf\u7a0b B \u8d44\u6e90\u88ab\u653e\u884c\ncom.apple.root.user-initiated-qos 2 A\ncom.apple.root.user-initiated-qos 3 A\ncom.apple.root.utility-qos 1 B\ncom.apple.root.user-initiated-qos 4 A\ncom.apple.root.user-initiated-qos 5 A\ncom.apple.root.utility-qos 2 B\ncom.apple.root.user-initiated-qos waiting B // \u9ad8\u4f18\u7ebf\u7a0b\u7b49\u5f85 B \u8d44\u6e90\uff0c\u4f46\u7531\u4e8e B \u6b63\u5728\u88ab\u4f4e\u4f18\u7ebf\u7a0b\u4f7f\u7528\uff0c\u65e0\u6cd5\u83b7\u5f97\u653e\u884c\ncom.apple.root.utility-qos 3 B\ncom.apple.root.utility-qos 4 B\ncom.apple.root.utility-qos 5 B\ncom.apple.root.utility-qos waiting A // \u4f4e\u4f18\u7ebf\u7a0b\u7b49\u5f85 A \u8d44\u6e90\uff0c\u4f46\u7531\u4e8e A \u6b63\u5728\u88ab\u9ad8\u4f18\u7ebf\u7a0b\u4f7f\u7528\uff0c\u65e0\u6cd5\u83b7\u5f97\u653e\u884c\n")))}c.isMDXComponent=!0}}]);