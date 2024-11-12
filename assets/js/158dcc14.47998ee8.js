"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4978],{39295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));n(61839);const r={slug:"/"},l="C",o={unversionedId:"c",id:"c",title:"C",description:"\u6307\u9488",source:"@site/docs/language/c.md",sourceDirName:".",slug:"/",permalink:"/docs/language/",draft:!1,tags:[],version:"current",frontMatter:{slug:"/"},sidebar:"tutorialSidebar",previous:{title:"Swift \u91cc\u600e\u4e48\u5199\u4e00\u4e2a\u94fe\u8868",permalink:"/docs/language/Swift/struct"},next:{title:"CMake",permalink:"/docs/language/cmake"}},p={},d=[{value:"\u6307\u9488",id:"\u6307\u9488",level:2},{value:"<code>__attribute__</code>",id:"__attribute__",level:2},{value:"include, import",id:"include-import",level:2}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"c"},"C"),(0,a.kt)("h2",{id:"\u6307\u9488"},"\u6307\u9488"),(0,a.kt)("p",null,"In C, function arguments are passed by values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n\nvoid test(int y) {\n    y = 20;\n    printf("y = %d\\n", y); // y = 20\n}\n\nint main(int argc, const char * argv[]) {\n    int x = 10;\n    test(x);\n    printf("x = %d\\n", x); // x = 10\n    return 0;\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"int a = 10;")," a \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," \u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u8fd9\u4e2a\u53d8\u91cf\u5b58\u50a8\u7684\u503c\u662f\u6574\u6570 10\uff0c\u6253\u5370 a \u7684\u503c ",(0,a.kt)("inlineCode",{parentName:"p"},'printf("%d", a);')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"int *b = &a;")," b \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"int*")," \u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u5373\u6307\u5411 int \u7c7b\u578b\u7684\u6307\u9488\uff0c\u8fd9\u4e2a\u53d8\u91cf\u5b58\u50a8\u7684\u503c\u662f a \u7684\u5730\u5740\uff0c\u6253\u5370 a \u7684\u5730\u5740 ",(0,a.kt)("inlineCode",{parentName:"p"},'printf("%p", b);')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n\nvoid test(int *y) {\n    printf("y points to, or, what y stores is = %p\\n", y); // 0x7ffeefbff4cc\n    printf("address of y itself is = %p\\n", &y); // 0x7ffeefbff4a8\n    *y = 20; // \u5c06\u6570\u636e\u5199\u5165 y \u6307\u9488\u6307\u5411\u7684\u5185\u5b58\u533a\u57df\uff01\n    printf("*y = %d\\n", *y); // *y = 20\n}\n\nint main(int argc, const char * argv[]) {\n    int x = 10;\n    printf("address of x = %p\\n", &x); // 0x7ffeefbff4cc\n    test(&x);\n    printf("x = %d\\n", x); // x = 20\n    return 0;\n}\n')),(0,a.kt)("p",null,"\u51fd\u6570\u53c2\u6570\u4f9d\u7136\u662f passed by value\uff0c\u4f46\u4e0d\u540c\u7684\u662f\uff0c\u8fd9\u6b21\u662f\u5c06 x \u7684\u5730\u5740\u4f20\u5165\u51fd\u6570\u8c03\u7528\uff0c\u51fd\u6570\u5185\u90e8\u521b\u5efa\u4e86\u5b83\u7684\u5c40\u90e8\u53d8\u91cf y\uff0c\u5e76\u4f7f\u7528 x \u7684\u5730\u5740\u521d\u59cb\u5316\u4e86 y\uff01"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u6307\u9488\u5e76\u6307\u5411\u4e00\u5757\u5806\u533a\u5185\u5b58\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'int main(int argc, const char * argv[]) {\n    int *px = malloc(sizeof(int));\n    printf("px points to %p\\n", px); // 0x100587c90\n    return 0;\n}\n')),(0,a.kt)("p",null,"\u90a3\u4e48\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"void test(int *y)")," \u51fd\u6570\u53ea\u80fd\u4fee\u6539 px \u6307\u5411\u7684\u5185\u5b58\u7a7a\u95f4\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"*px"),"\uff09\u7684\u6570\u636e\uff0c\u5982\u4f55\u6539\u53d8 px \u7684\u6307\u5411\u5462\uff1f\u628a\u6307\u9488\u7684\u5730\u5740\u4f20\u8fdb\u53bb\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <stdlib.h>\n\nvoid test(int **py) {\n    *py = malloc(sizeof(int));\n    printf("*py points to %p\\n", *py); //  0x1005b4770\n}\n\nint main(int argc, const char * argv[]) {\n    int *px = malloc(sizeof(int));\n    printf("px points to %p\\n", px); // 0x1005b61c0\n    test(&px);\n    printf("px points to %p\\n", px); // 0x1005b4770\n    return 0;\n}\n')),(0,a.kt)("h2",{id:"__attribute__"},(0,a.kt)("inlineCode",{parentName:"h2"},"__attribute__")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"__attribute__")," directive is used to decorate a code declaration in C, C++ and Objective-C. This gives the declared code additional attributes that would help the compiler incorporate optimizations or elicit useful warnings to the consumer of that code."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"__attribute__")," \u7684\u7528\u6cd5\u975e\u5e38\u7b80\u5355\uff0c\u5f53\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\u3001\u53d8\u91cf\u6216\u8005\u7c7b\u578b\u65f6\uff0c\u76f4\u63a5\u5728\u540d\u5b57\u65c1\u8fb9\u6dfb\u52a0\u5c5e\u6027\u5373\u53ef\u3002\u6ce8\u610f\u540e\u9762\u662f\u4e24\u5bf9\u5c0f\u62ec\u53f7\uff0c\u62ec\u53f7\u91cc\u8868\u793a\u8981\u58f0\u660e\u7684\u5c5e\u6027\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gcc.gnu.org/onlinedocs/gcc/Function-Attributes.html"},"Function Attributes (Using the GNU Compiler Collection (GCC))")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u51fd\u6570\u88ab\u8bbe\u5b9a\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"constructor")," \u5c5e\u6027\u65f6\uff0c\u51fd\u6570\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," \u51fd\u6570\u6267\u884c\u4e4b\u524d\u88ab\u6267\u884c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u51fd\u6570\u88ab\u8bbe\u5b9a\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"destructor")," \u5c5e\u6027\u65f6\uff0c\u51fd\u6570\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," \u51fd\u6570\u6267\u884c\u4e4b\u540e\u88ab\u6267\u884c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n\n__attribute__((constructor)) void before() {\n    printf("constructor\\n");\n}\n\n__attribute__((destructor)) void after() {\n    printf("destructor\\n");\n}\n\nint main(int argc, const char * argv[]) {\n    std::cout << "Hello, world!\\n";\n    return 0;\n}\n')),(0,a.kt)("h2",{id:"include-import"},"include, import"),(0,a.kt)("p",null,"In C++, ",(0,a.kt)("inlineCode",{parentName:"p"},"#include <filename>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},'#include "filename"')," includes source file, identified by filename into the current source file at the line immediately after the directive. In the case the file is not found, program is ill-formed."),(0,a.kt)("p",null,"(1) ",(0,a.kt)("inlineCode",{parentName:"p"},"#include <filename>")," Typical implementations search only ",(0,a.kt)("strong",{parentName:"p"},"standard include directories"),". The standard C++ library and the standard C library are implicitly included in these standard include directories. The standard include directories usually can be controlled by the user through compiler options."),(0,a.kt)("p",null,"(2) ",(0,a.kt)("inlineCode",{parentName:"p"},'#include "filename"')," Typical implementations first search the directory ",(0,a.kt)("strong",{parentName:"p"},"where the current file resides")," and, only if the file is not found, search the standard include directories as with (1)."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"#import")," directive was added to Objective-C as an improved version of ",(0,a.kt)("inlineCode",{parentName:"p"},"#include"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"#import")," ensures that a file is only ever ",(0,a.kt)("strong",{parentName:"p"},"included once"),"."),(0,a.kt)("p",null,"What the compiler does when it sees a ",(0,a.kt)("inlineCode",{parentName:"p"},"#include")," is that it replaces that line with the contents of the included files. The ",(0,a.kt)("inlineCode",{parentName:"p"},"#import")," line is only replaced by the contents of the named file for the first time it is encountered. Every time after that it is just ignored."),(0,a.kt)("p",null,"\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"#include")," \u7684\u8bdd\uff0c\u7f16\u8bd1\u5668\u4f1a\u65e0\u6761\u4ef6\u5730\u5728\u5b9e\u73b0\u6587\u4ef6\u4e2d\u62f7\u8d1d\u5934\u6587\u4ef6\u91cc\u7684\u6240\u6709\u5185\u5bb9\uff0c\u5982\u679c\u91cd\u590d include \u7684\u8bdd\u76f8\u540c\u7684\u5185\u5bb9\u4f1a\u91cd\u590d\u51fa\u73b0\uff0c\u6b64\u65f6\u8981\u9760 include guards \u6765\u907f\u514d\u91cd\u590d\u5b9a\u4e49\u5bfc\u81f4\u7684\u7f16\u8bd1\u9519\u8bef\u3002\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"#import")," \u5185\u90e8\u4fdd\u8bc1\u4e86\u540c\u4e00\u4e2a\u6587\u4ef6\u4e0d\u4f1a\u88ab\u5bfc\u5165\u4e24\u6b21\u3002"),(0,a.kt)("p",null,"Basically, it's up to you to decide which you want to use. I tend to ",(0,a.kt)("inlineCode",{parentName:"p"},"#import")," headers for Objective-C things and ",(0,a.kt)("inlineCode",{parentName:"p"},"#include")," standard C stuff. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#import <Foundation/Foundation.h>\n\n#include <asl.h>\n#include <mach/mach.h>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"#import")," is an Objective-C addition to the preprocessor. GCC just supports it in C and C++ source files as well, although they officially suggest not using it in C or C++ in favor of portable, traditional header guards."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import<header.h>")," vs ",(0,a.kt)("inlineCode",{parentName:"p"},'import "header.h"'),': Objective-C has this in common with C/C++; the quoted form is for "local" includes of files (you need to specify the ',(0,a.kt)("strong",{parentName:"p"},"relative path")," from the current file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "tnn/core/macro.h"\n#include "tnn/core/tnn.h"\n#include "tnn/utils/blob_converter.h"\n')),(0,a.kt)("p",null,'While the angle-bracket form is for "global" includes -- those found somewhere on the ',(0,a.kt)("strong",{parentName:"p"},"include path passed to the compiler")," (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"#include <math.h>"),")."))}c.isMDXComponent=!0}}]);