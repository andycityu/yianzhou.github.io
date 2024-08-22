"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5118],{23565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var a=n(87462),i=(n(67294),n(3905));n(61839);const s={sidebar_position:3},o="Category",l={unversionedId:"Objective-C/category",id:"Objective-C/category",title:"Category",description:"\u600e\u4e48\u6269\u5c55\u5df2\u6709\u7684\u7c7b\u5462\uff1f\u4e00\u822c\u800c\u8a00\uff0c\u7ee7\u627f\u548c\u7ec4\u5408\u662f\u4e0d\u9519\u7684\u9009\u62e9\u3002\u4f46\u662f\u5728 Objective-C 2.0 \u4e2d\uff0c\u53c8\u63d0\u4f9b\u4e86 category \u8fd9\u4e2a\u8bed\u8a00\u7279\u6027\uff0c\u53ef\u4ee5\u52a8\u6001\u5730\u4e3a\u5df2\u6709\u7c7b\u6dfb\u52a0\u65b0\u884c\u4e3a\u3002",source:"@site/docs/language/Objective-C/category.md",sourceDirName:"Objective-C",slug:"/Objective-C/category",permalink:"/docs/language/Objective-C/category",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"KVO",permalink:"/docs/language/Objective-C/kvo"},next:{title:"Block",permalink:"/docs/language/Objective-C/block"}},c={},r=[{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u7c7b\u6269\u5c55",id:"\u7c7b\u6269\u5c55",level:2},{value:"load",id:"load",level:2},{value:"initialize",id:"initialize",level:2},{value:"\u5173\u8054\u5bf9\u8c61",id:"\u5173\u8054\u5bf9\u8c61",level:2},{value:"DenseMap \u4e0e DisguisedPtr",id:"densemap-\u4e0e-disguisedptr",level:2},{value:"\u5173\u8054\u5bf9\u8c61\u7684\u5b58\u50a8",id:"\u5173\u8054\u5bf9\u8c61\u7684\u5b58\u50a8",level:2},{value:"\u5982\u4f55\u8c03\u7528\u88ab\u5206\u7c7b\u8986\u76d6\u7684\u65b9\u6cd5",id:"\u5982\u4f55\u8c03\u7528\u88ab\u5206\u7c7b\u8986\u76d6\u7684\u65b9\u6cd5",level:2}],d={toc:r};function m(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"category"},"Category"),(0,i.kt)("p",null,"\u600e\u4e48\u6269\u5c55\u5df2\u6709\u7684\u7c7b\u5462\uff1f\u4e00\u822c\u800c\u8a00\uff0c\u7ee7\u627f\u548c\u7ec4\u5408\u662f\u4e0d\u9519\u7684\u9009\u62e9\u3002\u4f46\u662f\u5728 Objective-C 2.0 \u4e2d\uff0c\u53c8\u63d0\u4f9b\u4e86 category \u8fd9\u4e2a\u8bed\u8a00\u7279\u6027\uff0c\u53ef\u4ee5\u52a8\u6001\u5730\u4e3a\u5df2\u6709\u7c7b\u6dfb\u52a0\u65b0\u884c\u4e3a\u3002"),(0,i.kt)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,i.kt)("p",null,"\u65b0\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," \u7c7b\uff0c\u518d\u65b0\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"Person+Eat")," \u5206\u7c7b\uff0c\u5c06\u5206\u7c7b\u5b9e\u73b0\u6587\u4ef6\u91cd\u5199\u4e3a cpp \u6587\u4ef6\uff0c\u53ef\u4ee5\u627e\u5230\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"_category_t")," \u7684\u7ed3\u6784\u4f53\u3002\u8fd9\u4e2a\u7ed3\u6784\u4f53\u5b9a\u4e49\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"objc-runtime-new.h")," \u6587\u4ef6\u4e2d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"struct _category_t {\n    const char *name; // \u7c7b\u7684\u540d\u5b57\n    struct _class_t *cls;\n    const struct _method_list_t *instance_methods; // \u5b9e\u4f8b\u65b9\u6cd5\u5217\u8868\n    const struct _method_list_t *class_methods; // \u7c7b\u65b9\u6cd5\u5217\u8868\n    const struct _protocol_list_t *protocols; // \u5206\u7c7b\u9075\u5faa\u7684\u534f\u8bae\u5217\u8868\n    const struct _prop_list_t *properties; // \u5206\u7c7b\u7684\u5c5e\u6027\u5217\u8868\n};\n")),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\uff0ccategory \u53ef\u4ee5\u6dfb\u52a0\u5b9e\u4f8b\u65b9\u6cd5\uff0c\u7c7b\u65b9\u6cd5\uff0c\u751a\u81f3\u53ef\u4ee5\u5b9e\u73b0\u534f\u8bae\uff0c\u6dfb\u52a0\u5c5e\u6027\uff1b\u4f46\u65e0\u6cd5\u6dfb\u52a0\u6210\u5458\u53d8\u91cf\u3002"),(0,i.kt)("p",null,"\u7f16\u8bd1\u540e\u7684\u7c7b\uff0c\u5176\u5185\u5b58\u5e03\u5c40\u5df2\u7ecf\u786e\u5b9a\uff0c\u4e0d\u80fd\u5411\u7f16\u8bd1\u597d\u7684\u7c7b\u6dfb\u52a0\u5b9e\u4f8b\u53d8\u91cf\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8fd0\u884c\u65f6\u521b\u5efa\u7684\u7c7b\uff0c\u53ef\u4ee5\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"class_addIvar")," \u6dfb\u52a0\u6210\u5458\u53d8\u91cf\u3002")),(0,i.kt)("p",null,"\u5e76\u4e14\uff0c\u5728 cpp \u6587\u4ef6\u91cc\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7c7b\u578b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"struct _category_t"),"\u3001\u540d\u79f0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"_OBJC_$_CATEGORY_Person_$_Eat")," \u7684\u53d8\u91cf\uff0c\u5e76\u8fdb\u884c\u4e86\u521d\u59cb\u5316\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'static struct _category_t _OBJC_$_CATEGORY_Person_$_Eat __attribute__ ((used, section ("__DATA,__objc_const"))) =\n{\n    "Person",\n    0, // &OBJC_CLASS_$_Person,\n    (const struct _method_list_t *)&_OBJC_$_CATEGORY_INSTANCE_METHODS_Person_$_Eat,\n    0,\n    0,\n    0,\n};\n')),(0,i.kt)("p",null,"\u5728\u7f16\u8bd1\u9636\u6bb5\uff0c\u6bcf\u4e2a\u5206\u7c7b\u5b9e\u73b0\u6587\u4ef6\uff0c\u4f1a\u5148\u4ee5\u8fd9\u4e2a\u7ed3\u6784\u4f53\u7684\u5f62\u5f0f\u53c2\u4e0e\u7f16\u8bd1\u3002\u5728\u8fd0\u884c\u65f6\uff0c\u518d\u5c06\u8fd9\u4e2a\u7ed3\u6784\u4f53\u7684\u6570\u636e\uff0c\u52a0\u5230\u7c7b\u5bf9\u8c61\u3001\u5143\u7c7b\u5bf9\u8c61\u91cc\u3002\u600e\u4e48\u6dfb\u52a0\u7684\u5462\uff1f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='objc-os.mm'",title:"'objc-os.mm'"},"void _objc_init(void) // \u8fd9\u4e2a\u51fd\u6570\u53ef\u4ee5\u770b\u4f5c\u662f\u52a0\u8f7d\u7a0b\u5e8f\u548c\u8fd0\u884c\u65f6\u7684\u5165\u53e3\n{\n    _dyld_objc_notify_register(&map_images, load_images, unmap_image); // `load_images` \u662f\u4e00\u4e2a\u51fd\u6570\u7684\u5730\u5740\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='objc-runtime-new.mm'",title:"'objc-runtime-new.mm'"},"void load_images(const char *path __unused, const struct mach_header *mh)\n{\n    if (!didInitialAttachCategories && didCallDyldNotifyRegister) {\n        didInitialAttachCategories = true;\n        loadAllCategories();\n    }\n\n    // \u9644\u52a0 category \u5230\u7c7b\u7684\u5de5\u4f5c\u4f1a\u5148\u4e8e `+load` \u65b9\u6cd5\u7684\u6267\u884c\u3002\n    // \u56e0\u6b64\u5728\u7c7b\u7684 `+load` \u65b9\u6cd5\u8c03\u7528\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u8c03\u7528 category \u4e2d\u58f0\u660e\u7684\u65b9\u6cd5\u3002\n    call_load_methods();\n}\n\nstatic void loadAllCategories() {\n    load_categories_nolock(hi);\n}\n\nstatic void load_categories_nolock(header_info *hi) {\n    attachCategories(cls, &lc, 1, ATTACH_EXISTING);\n}\n\n// \u5047\u8bbe Person \u7c7b\u6709\u4e24\u4e2a\u5206\u7c7b Play \u548c Eat\uff0c\u90a3\u4e48\u8fd9\u91cc\u4f20\u53c2\u5c31\u662f\n// cls: Person\n// cats_list: [Play, Eat]\nstatic void attachCategories(Class cls, const locstamped_category_t *cats_list, uint32_t cats_count, int flags)\n{\n    // \u8fd9\u91cc\u770b\u6e90\u7801\u6ce8\u91ca\uff0c\u89e3\u91ca\u4e86\u4e3a\u4ec0\u4e48\u7528\u957f\u5ea6\u4e3a 64 \u7684\u6570\u7ec4\n    constexpr uint32_t ATTACH_BUFSIZ = 64;\n    method_list_t *mlists[ATTACH_BUFSIZ]; // \u4e8c\u7ef4\u6570\u7ec4\n    /** \u6570\u7ec4\u7684\u5185\u5bb9\uff1a\n    [\n        [-play1, -play2], // Play \u5206\u7c7b\u7684\u65b9\u6cd5\u5217\u8868\n        [-eat1, -eat2], // Eat \u5206\u7c7b\u7684\u65b9\u6cd5\u5217\u8868\n    ]\n    */\n    uint32_t mcount = 0; // \u4e00\u5171\u52a0\u4e86\u591a\u5c11\u65b9\u6cd5\n    auto rwe = cls->data()->extAllocIfNeeded(); // cls->data()\u53d6\u5230\u7c7b\u7684\u6570\u636e\uff0c\u5373class_rw_t\n    for (uint32_t i = 0; i < cats_count; i++) {\n        auto& entry = cats_list[i]; // \u53d6\u51fa category_t\n        method_list_t *mlist = entry.cat->methodsForMeta(isMeta); // \u53d6\u51fa\u5206\u7c7b\u4e2d\u7684\u65b9\u6cd5\n        if (mlist) {\n            if (mcount == ATTACH_BUFSIZ) { // \u8fd9\u91cc\u5904\u7406\u7684\u662f\u4e00\u4e2a\u7c7b\u8d85\u8fc764\u4e2a\u5206\u7c7b\u7684\u60c5\u51b5\n                prepareMethodLists(cls, mlists, mcount, NO, fromBundle, __func__);\n                rwe->methods.attachLists(mlists, mcount);\n                mcount = 0;\n            }\n            // \u5c06\u65b9\u6cd5\u52a0\u5230\u4e8c\u7ef4\u6570\u7ec4\u91cc\uff1a\n            // \u5148\u8fdb\u5faa\u73af\u7684\u5206\u7c7b\uff0c\u5176\u65b9\u6cd5\u653e\u5728\u6570\u7ec4\u7684\u540e\u9762\u4f4d\u7f6e\uff1b\n            // \u540e\u8fdb\u5faa\u73af\u7684\u5206\u7c7b\uff0c\u5176\u65b9\u6cd5\u653e\u5728\u6570\u7ec4\u7684\u524d\u9762\u4f4d\u7f6e\uff1b\n            // \u6240\u4ee5\uff0c\u6700\u540e\u94fe\u63a5\u7684\u5206\u7c7b\uff0c\u5176 image \u4e2d\u7684\u65b9\u6cd5\uff0c\u4f1a\u5728\u6700\u524d\u9762\u3002\n            mlists[ATTACH_BUFSIZ - ++mcount] = mlist;\n        }\n    }\n    if (mcount > 0) {\n        prepareMethodLists(cls, mlists + ATTACH_BUFSIZ - mcount, mcount,\n                           NO, fromBundle, __func__);\n        // \u5c06\u4e8c\u7ef4\u6570\u7ec4\u91cc\u7684\u6240\u6709\u65b9\u6cd5\uff0c\u52a0\u5230\u7c7b\u7684\u65b9\u6cd5\u5217\u8868\u91cc\uff0c\u5373 class_rw_t \u91cc\u7684 methods\n        rwe->methods.attachLists(mlists + ATTACH_BUFSIZ - mcount, mcount);\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='objc-runtime-new.h'",title:"'objc-runtime-new.h'"},"// addedLists: \u4e0a\u9762\u90a3\u4e2a\u4e8c\u7ef4\u6570\u7ec4\n// addedCount: \u4e0a\u9762\u90a3\u4e2a\u4e8c\u7ef4\u6570\u7ec4\u91cc\u7684\u65b9\u6cd5\u6570\nclass list_array_tt {\n    void attachLists(List* const * addedLists, uint32_t addedCount) {\n        if (addedCount == 0) return;\n\n        if (hasArray()) {\n            // many lists -> many lists\n            uint32_t oldCount = array()->count;\n            uint32_t newCount = oldCount + addedCount;\n            array_t *newArray = (array_t *)malloc(array_t::byteSize(newCount));\n            newArray->count = newCount;\n            array()->count = newCount;\n\n            // array()->lists \u662f\u539f\u6765\u7684\u65b9\u6cd5\u5217\u8868\uff0c\u653e\u5230\u65b0\u6570\u7ec4\u7684\u540e\u9762\u4f4d\u7f6e\n            for (int i = oldCount - 1; i >= 0; i--)\n                newArray->lists[i + addedCount] = array()->lists[i];\n            // addedLists \u662f\u65b0\u52a0\u7684\u65b9\u6cd5\u5217\u8868\uff0c\u653e\u5728\u65b0\u6570\u7ec4\u7684\u524d\u9762\u4f4d\u7f6e\n            for (unsigned i = 0; i < addedCount; i++)\n                newArray->lists[i] = addedLists[i];\n            // \u5047\u8bbe\u539f\u6765 Person \u7c7b\u6709\u65b9\u6cd5 A, B\n            // \u5148\u94fe\u63a5 Play \u5206\u7c7b\u7684\u65b9\u6cd5 C, D\n            // \u540e\u94fe\u63a5 Eat \u5206\u7c7b\u7684\u65b9\u6cd5 E, F\n            // \u5219\u65b0\u6570\u7ec4\u4e3a E, F, C, D, A, B\n            free(array());\n            setArray(newArray);\n            validate();\n        }\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(81757).Z,width:"2840",height:"2110"})),(0,i.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Person+Eat.o")," \u6700\u540e\u88ab\u94fe\u63a5\uff0c\u56e0\u6b64\u540c\u540d\u65b9\u6cd5\u91cc\uff0c\u8c03\u7528\u7684\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Eat")," \u5206\u7c7b\u7684\u65b9\u6cd5\u3002"),(0,i.kt)("h2",{id:"\u7c7b\u6269\u5c55"},"\u7c7b\u6269\u5c55"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@interface Person ()")),(0,i.kt)("p",null,"Class Extension\uff08\u7c7b\u6269\u5c55\uff0c\u4e5f\u53eb\u533f\u540d\u5206\u7c7b\uff09\uff0c\u662f\u5728\u7f16\u8bd1\u9636\u6bb5\u5c31\u76f4\u63a5\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," \u7c7b\u5408\u5e76\u5728\u4e00\u8d77\uff0c\u7f16\u8bd1\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Person.o")," \u6587\u4ef6\u91cc\u7684\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/CustomizingExistingClasses/CustomizingExistingClasses.html#//apple_ref/doc/uid/TP40011210-CH6-SW3"},"class extensions are often referred to as anonymous categories")),(0,i.kt)("p",null,"extension \u53ef\u4ee5\u6dfb\u52a0\u6210\u5458\u53d8\u91cf\uff0ccategory \u4e0d\u80fd\u3002"),(0,i.kt)("h2",{id:"load"},"load"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"+load")," \u548c\u5176\u5b83\u7c7b\u65b9\u6cd5\u4e00\u6837\uff0c\u90fd\u662f\u653e\u5728\u5143\u7c7b\u5bf9\u8c61\u7684\u65b9\u6cd5\u5217\u8868\u91cc\u3002"),(0,i.kt)("p",null,"Category \u4e5f\u53ef\u4ee5\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"+load"),"\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u4e00\u822c\u4e0d\u4f1a\u4e3b\u52a8\u53bb\u8c03\u7528\uff0c\u800c\u662f\u5728 Runtime \u52a0\u8f7d\u7c7b\u3001\u5206\u7c7b\u65f6\u7531\u7cfb\u7edf\u6765\u8c03\u7528\uff0c\u4e14\u7a0b\u5e8f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u53ea\u8c03\u7528\u4e00\u6b21\u3002"),(0,i.kt)("p",null,"\u8c03\u7528\u8fc7\u7a0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='objc-runtime-new.mm'",title:"'objc-runtime-new.mm'"},"void prepare_load_methods(const headerType *mhdr)\n{\n    classref_t const *classlist = _getObjc2NonlazyClassList(mhdr, &count); // \u8fd9\u91cc\u7684\u987a\u5e8f\u5c31\u548c\u7f16\u8bd1\u987a\u5e8f\u6709\u5173\u4e86\n    for (i = 0; i < count; i++) {\n        schedule_class_load(remapClass(classlist[i]));\n    }\n\n    category_t * const *categorylist = _getObjc2NonlazyCategoryList(mhdr, &count); // \u8fd9\u91cc\u7684\u987a\u5e8f\u5c31\u548c\u7f16\u8bd1\u987a\u5e8f\u6709\u5173\u4e86\n    for (i = 0; i < count; i++) {\n        add_category_to_loadable_list(cat);\n    }\n    // \u7ed3\u8bba\uff1a\u5148\u7f16\u8bd1\u7684\u5206\u7c7b\u5148\u8c03\u7528\uff0c\u8ddf\u5206\u7c7b\u6240\u5c5e\u7684\u7c7b\u6ca1\u5173\u7cfb\n}\n\nstatic void schedule_class_load(Class cls)\n{\n    // Ensure superclass-first ordering\n    // \u9012\u5f52\u8c03\u7528\u81ea\u8eab\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5148\u5c06\u7236\u7c7b\u7684\u65b9\u6cd5\u653e\u5230\u6570\u7ec4\u91cc\n    // \u7ed3\u8bba\uff1a\u5148\u8c03\u7528\u7236\u7c7b\u7684 +load \u65b9\u6cd5\uff0c\u518d\u8c03\u7528\u5b50\u7c7b\u7684 +load \u65b9\u6cd5\n    schedule_class_load(cls->getSuperclass());\n\n    add_class_to_loadable_list(cls);\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='objc-loadmethod.mm'",title:"'objc-loadmethod.mm'"},"void call_load_methods(void)\n{\n    // \u7ed3\u8bba\uff1a\u5148\u8c03\u7528\u7c7b\u7684 +load \u65b9\u6cd5\uff0c\u518d\u8c03\u7528\u5206\u7c7b\u7684 +load \u65b9\u6cd5\n    do {\n        // 1. Repeatedly call class +loads until there aren't any more\n        while (loadable_classes_used > 0) {\n            call_class_loads();\n        }\n        // 2. Call category +loads ONCE\n        more_categories = call_category_loads();\n        // 3. Run more +loads if there are classes OR more untried categories\n    } while (loadable_classes_used > 0  ||  more_categories);\n}\n\nstatic void call_class_loads(void)\n{\n    // \u76f4\u63a5\u62ff\u5230 +load \u65b9\u6cd5\u7684\u6307\u9488\u6765\u8c03\u7528\uff0c\u4e0d\u662f\u901a\u8fc7 objc_msgSend\n    // \u7ed3\u8bba\uff1a\u7c7b\u7684 +load \u5e76\u4e0d\u4f1a\u88ab\u5206\u7c7b\u7684 +load \u65b9\u6cd5\u6240\u8986\u76d6\n    load_method_t load_method = (load_method_t)classes[i].method;\n    (*load_method)(cls, @selector(load));\n}\n")),(0,i.kt)("h2",{id:"initialize"},"initialize"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"+initialize")," \u4f1a\u5728\u7c7b\u7b2c\u4e00\u6b21\u63a5\u6536\u5230\u6d88\u606f\u53d1\u9001\u65f6\u8c03\u7528\uff0c\u6700\u5e38\u89c1\u7684\u5c31\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"+alloc")," \u65b9\u6cd5\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"[NSObject alloc]"),"\u3002"),(0,i.kt)("p",null,"\u8981\u60f3\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"alloc")," \u65b9\u6cd5\uff0c\u7c7b\u5bf9\u8c61\u4f1a\u5148\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"isa")," \u6307\u9488\u627e\u5230\u5143\u7c7b\u5bf9\u8c61\uff0c\u8fdb\u800c\u67e5\u627e\u65b9\u6cd5\u5217\u8868\uff0c\u6211\u4eec\u53ef\u4ee5\u770b ",(0,i.kt)("inlineCode",{parentName:"p"},"class_getClassMethod")," \u7684\u6e90\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc",metastring:"title='objc-class.mm'",title:"'objc-class.mm'"},"Method class_getClassMethod(Class cls, SEL sel)\n{\n    // \u4e4b\u524d\u5df2\u7ecf\u5b66\u4e60\u8fc7\uff0c\u5143\u7c7b\u5bf9\u8c61\u548c\u7c7b\u5bf9\u8c61\u7684\u6570\u636e\u7ed3\u6784\u4e00\u6a21\u4e00\u6837\uff0c\u5143\u7c7b\u5bf9\u8c61\u5c31\u662f\u7279\u6b8a\u7684\u7c7b\u5bf9\u8c61\n    // \u56e0\u6b64\u627e\u5143\u7c7b\u5bf9\u8c61\u7684\u65b9\u6cd5\u5217\u8868\uff0c\u5c31\u662f\u5c06\u5143\u7c7b\u5bf9\u8c61\u4f20\u53c2\u7ed9 class_getInstanceMethod \u65b9\u6cd5\n    return class_getInstanceMethod(cls->getMeta(), sel);\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc",metastring:"title='objc-runtime-new.mm'",title:"'objc-runtime-new.mm'"},"Method class_getInstanceMethod(Class cls, SEL sel)\n{\n    // Search method lists, try method resolver, etc.\n    lookUpImpOrForward(nil, sel, cls, LOOKUP_RESOLVER);\n\n    return _class_getMethod(cls, sel);\n}\n\nNEVER_INLINE\nIMP lookUpImpOrForward(id inst, SEL sel, Class cls, int behavior)\n{\n    cls = realizeAndInitializeIfNeeded_locked(inst, cls, behavior & LOOKUP_INITIALIZE);\n}\n\nstatic Class realizeAndInitializeIfNeeded_locked(id inst, Class cls, bool initialize)\n{\n    if (slowpath(initialize && !cls->isInitialized())) {\n        cls = initializeAndLeaveLocked(cls, inst, runtimeLock);\n    }\n    return cls;\n}\n\nstatic Class initializeAndLeaveLocked(Class cls, id obj, mutex_t& lock)\n{\n    return initializeAndMaybeRelock(cls, obj, lock, true);\n}\n\nstatic Class initializeAndMaybeRelock(Class cls, id inst, mutex_t& lock, bool leaveLocked)\n{\n    initializeNonMetaClass(nonmeta);\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc",metastring:"title=objc-initialize.mm",title:"objc-initialize.mm"},"/***********************************************************************\n* class_initialize.  Send the '+initialize' message on demand to any\n* uninitialized class. Force initialization of superclasses first.\n**********************************************************************/\nvoid initializeNonMetaClass(Class cls)\n{\n    Class supercls;\n    // Make sure super is done initializing BEFORE beginning to initialize cls.\n    // See note about deadlock above.\n    supercls = cls->getSuperclass();\n    if (supercls  &&  !supercls->isInitialized()) {\n        // \u7ed3\u8bba\uff1a\u5982\u679c\u7236\u7c7b\u6ca1\u6709\u521d\u59cb\u5316\uff0c\u5f3a\u5236\u5148\u8c03\u7528\u7236\u7c7b\u7684\u521d\u59cb\u5316\n        initializeNonMetaClass(supercls); // \u9012\u5f52\n    }\n\n    callInitialize(cls);\n}\n\nvoid callInitialize(Class cls)\n{\n    // \u7ed3\u8bba\uff1a\u8d70\u7684 objc_msgSend\n    // \u56e0\u6b64\uff1a\n    // 1. \u5982\u679c\u5206\u7c7b\u5b9e\u73b0\u4e86 +initialize\uff0c\u4f1a\u8986\u76d6\u7c7b\u7684 +initialize \u7684\u5b9e\u73b0\n    // 2. \u5982\u679c\u5b50\u7c7b\u6ca1\u6709\u5b9e\u73b0 +initialize\uff0c\u5728\u5411\u5b50\u7c7b\u53d1\u9001\u6b64\u6d88\u606f\u65f6\uff0c\u4f1a\u627e\u5230\u7236\u7c7b\u7684 +initialize \u65b9\u6cd5\u5e76\u8c03\u7528\uff0c\u6240\u4ee5 +initialize \u662f\u53ef\u80fd\u88ab\u8c03\u7528\u591a\u6b21\u7684\uff01\n    ((void(*)(Class, SEL))objc_msgSend)(cls, @selector(initialize));\n}\n")),(0,i.kt)("p",null,"\u9a8c\u8bc1\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},'// @interface Person : NSObject\n// @interface Student : Person\n\n#import "Student.h"\n\nint main(int argc, const char * argv[]) {\n    [Student alloc];\n    return 0;\n}\n\n/**\n2012-07-02 16:31:45.442989+0800 ocdemo[21209:5122958] Person(Eat) +initialize\n// \u7531\u4e8e\u7236\u7c7b\u6ca1\u6709\u521d\u59cb\u5316\u8fc7\uff0c\u5148\u8c03\u7528\u7236\u7c7b\u7684\u521d\u59cb\u5316\u65b9\u6cd5\uff1aobjc_msgSend(objc_getClass("Person"), @selector(initialize))\n\n2012-07-02 16:31:45.443267+0800 ocdemo[21481:5125042] Person(Eat) +initialize\n// \u7236\u7c7b\u5df2\u7ecf\u521d\u59cb\u5316\u8fc7\u4e86\uff0c\u8c03\u7528\u5b50\u7c7b\u7684\u521d\u59cb\u5316\u65b9\u6cd5\uff1aobjc_msgSend(objc_getClass("Student"), @selector(initialize))\n// \u4f46\u7531\u4e8e\u5b50\u7c7b\u6ca1\u6709\u5b9e\u73b0 +initialize\uff0c\u56e0\u6b64\u6d88\u606f\u53d1\u9001\u673a\u5236\u53c8\u627e\u5230\u4e86\u7236\u7c7b\u7684 +initialize \u6765\u8c03\u7528\n*/\n')),(0,i.kt)("h2",{id:"\u5173\u8054\u5bf9\u8c61"},"\u5173\u8054\u5bf9\u8c61"),(0,i.kt)("p",null,"\u5728\u5206\u7c7b\u91cc\u9762\u5199\u4e00\u4e2a\u5c5e\u6027\uff0c\u7f16\u8bd1\u5668\u53ea\u4f1a\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," \u65b9\u6cd5\u7684",(0,i.kt)("strong",{parentName:"p"},"\u58f0\u660e"),"\uff0c\u4e0d\u4f1a\u4e3a\u6211\u4eec\u751f\u6210\u6210\u5458\u53d8\u91cf\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"get")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," \u65b9\u6cd5\u7684\u5b9e\u73b0\uff01"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},"@interface Student (Name)\n@property(nonatomic, copy) NSString* name;\n/**\n - (NSString *)name;\n - (void)setName:(NSString *)name;\n */\n@end\n")),(0,i.kt)("p",null,"Xcode \u4f1a\u6709\u8b66\u544a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"Property 'name' requires method 'name' to be defined - use @dynamic or provide a method implementation in this category\n")),(0,i.kt)("p",null,"\u539f\u56e0\u662f\u7f16\u8bd1\u540e\u5bf9\u8c61\u7684\u5185\u5b58\u5e03\u5c40\u5df2\u7ecf\u786e\u5b9a\uff0c\u5982\u679c\u5728\u8fd0\u884c\u65f6\u6dfb\u52a0\u5b9e\u4f8b\u53d8\u91cf\u5c31\u4f1a\u7834\u574f\u7c7b\u7684\u5185\u5b58\u5e03\u5c40\uff0c\u8fd9\u5bf9\u7f16\u8bd1\u578b\u8bed\u8a00\u662f\u707e\u96be\u6027\u7684\u3002\u6240\u4ee5\u9700\u4f7f\u7528\u5173\u8054\u5bf9\u8c61\u4e3a\u5df2\u5b58\u5728\u7684\u7c7b\u6dfb\u52a0\u5c5e\u6027\u3002"),(0,i.kt)("p",null,"\u5173\u8054\u5bf9\u8c61\u7684 Key \u6700\u597d\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@selector")," \u6765\u5b9e\u73b0\uff0c1. \u4ee3\u7801\u7b80\u6d01\uff0c\u4e0d\u7528\u53e6\u5916\u58f0\u660e\u53d8\u91cf\uff1b2. \u7f16\u8bd1\u5668\u6709\u68c0\u67e5\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"@selector")," \u7684\u65b9\u6cd5\u5fc5\u987b\u5b58\u5728\uff0c\u56e0\u6b64\u4e0d\u4f1a\u5199\u9519\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},'#import "objc/runtime.h"\n\n@implementation Student (Name)\n- (NSString *)name {\n    // \u5bf9\u4e8e get \u65b9\u6cd5\uff0c\u8fd8\u53ef\u4ee5\u5199\u6210 `objc_getAssociatedObject(self, _cmd)`\uff0c`_cmd` \u8868\u793a\u5f53\u524d\u65b9\u6cd5\u7684 selector\n    return objc_getAssociatedObject(self, @selector(name));\n}\n\n- (void)setName:(NSString *)name {\n    objc_setAssociatedObject(self, @selector(name), name, OBJC_ASSOCIATION_COPY_NONATOMIC);\n}\n@end\n')),(0,i.kt)("h2",{id:"densemap-\u4e0e-disguisedptr"},"DenseMap \u4e0e DisguisedPtr"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DenseMap")," \u662f\u5728 llvm \u4e2d\u7528\u7684\u975e\u5e38\u5e7f\u6cdb\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u7684\u5b9e\u73b0\u662f\u4e00\u4e2a\u57fa\u4e8e\u4e8c\u6b21\u63a2\u6d4b\u7684\u54c8\u5e0c\u8868\u3002\u5176\u4e2d\u54c8\u5e0c\u903b\u8f91\u62bd\u8c61\u5230\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"DenseMapBase")," \u4e2d\uff0c\u800c\u5185\u5b58\u7ba1\u7406\u7684\u903b\u8f91\u7559\u5728\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"DenseMap")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"SmallDenseMap")," \u5b9e\u73b0\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4e8c\u6b21\u63a2\u6d4b\uff08Quadratic Probing\uff09\u662f\u4e00\u79cd\u89e3\u51b3\u54c8\u5e0c\u51b2\u7a81\u7684\u65b9\u6cd5\uff0c\u5f53\u53d1\u751f\u51b2\u7a81\u65f6\uff0c\u7b97\u6cd5\u4f1a\u6839\u636e\u4e00\u4e2a\u4e8c\u6b21\u51fd\u6570\u6765\u8ba1\u7b97\u4e0b\u4e00\u4e2a\u63a2\u6d4b\u4f4d\u7f6e\u3002")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DisguisedPtr")," \u5728\u5e95\u5c42\u5f88\u5e38\u7528\uff0c\u5b83\u76f4\u8bd1\u4e3a\u4f2a\u88c5\u6307\u9488\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c",metastring:"title='objc-private.h'",title:"'objc-private.h'"},"class DisguisedPtr {\n    // typedef unsigned long uintptr_t;\n    uintptr_t value;\n\n    static uintptr_t disguise(T* ptr) {\n        return -(uintptr_t)ptr; // \u5c06\u6307\u9488\u5730\u5740\u503c\u76f4\u63a5\u53d6\u53cd\n    }\n\n    static T* undisguise(uintptr_t val) {\n        return (T*)-val;\n    }\n}\n")),(0,i.kt)("h2",{id:"\u5173\u8054\u5bf9\u8c61\u7684\u5b58\u50a8"},"\u5173\u8054\u5bf9\u8c61\u7684\u5b58\u50a8"),(0,i.kt)("p",null,"\u6240\u6709\u5b9e\u4f8b\u7684\u5173\u8054\u5bf9\u8c61\uff0c\u90fd\u5b58\u5728 Runtime \u7ef4\u62a4\u7684\u5168\u5c40\u54c8\u5e0c\u8868\u4e2d\u3002key \u662f\u5b9e\u4f8b\u5bf9\u8c61\u7684\u5185\u5b58\u5730\u5740\uff08\u7ecf\u8fc7\u4f2a\u88c5\uff09\uff0cvalue \u662f\u5173\u8054\u5bf9\u8c61\u7684 KV \u5b57\u5178\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(25986).Z,width:"2422",height:"1204"})),(0,i.kt)("p",null,"\u8c03\u7528\u8fc7\u7a0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc",metastring:"title='objc-runtime.mm'",title:"'objc-runtime.mm'"},"void objc_setAssociatedObject(id object, const void *key, id value, objc_AssociationPolicy policy)\n{\n    _object_set_associative_reference(object, key, value, policy); // \u8fd9\u56db\u4e2a\u53c2\u6570\u4e0d\u7528\u89e3\u91ca\u4e86\uff0c\u4e00\u770b\u5c31\u77e5\u9053\u662f\u4ec0\u4e48\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc",metastring:"title='objc-references.mm'",title:"'objc-references.mm'"},"typedef DenseMap<const void *, ObjcAssociation> ObjectAssociationMap;\ntypedef DenseMap<DisguisedPtr<objc_object>, ObjectAssociationMap> AssociationsHashMap;\nclass AssociationsManager {\n    using Storage = ExplicitInitDenseMap<DisguisedPtr<objc_object>, ObjectAssociationMap>;\n    static Storage _mapStorage;\n\n    AssociationsHashMap &get() {\n        return _mapStorage.get();\n    }\n};\n\nvoid _object_set_associative_reference(id object, const void *key, id value, uintptr_t policy)\n{\n    DisguisedPtr<objc_object> disguised{(objc_object *)object}; // \u4f2a\u88c5\u6307\u9488\uff0c\u5e76\u4e0d\u4f1a\u589e\u52a0 object \u7684\u5f15\u7528\u8ba1\u6570\n    ObjcAssociation association{policy, value};\n\n    association.acquireValue(); // \u6267\u884c retain \u6216 copy \u64cd\u4f5c\n\n    {\n        AssociationsManager manager;\n        AssociationsHashMap &associations(manager.get());\n        // \u6839\u636e value \u662f\u5426\u4e3a\u7a7a\u8fdb\u884c\u4e0d\u540c\u7684\u64cd\u4f5c\n        if (value) { // \u8bbe\u7f6e\u5173\u8054\u5bf9\u8c61\n            // try_emplace \u662f std::map \u7684\u65b9\u6cd5\uff0c\u5c1d\u8bd5\u653e\u7f6e\u952e\u503c\u5bf9\uff0c\u8fd4\u56de\u503c\u662f pair<iterator, bool>\n            // try_emplace \u65b9\u6cd5\u4f1a\u5c1d\u8bd5\u63d2\u5165\uff0c\u5982\u679c\u952e\u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u4e0d\u4f1a\u63d2\u5165\n            // `ObjectAssociationMap{}` \u6784\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684 `ObjectAssociationMap`\n            auto refs_result = associations.try_emplace(disguised, ObjectAssociationMap{});\n\n            /* establish or replace the association */\n            auto &refs = refs_result.first->second; // \u83b7\u53d6\u5230 `ObjectAssociationMap`\n            auto result = refs.try_emplace(key, std::move(association));\n            if (!result.second) { // \u8bf4\u660ekey\u5df2\u7ecf\u5b58\u5728\n                association.swap(result.first->second); // \u7528`association`\u66ff\u6362\u5df2\u6709\u7684\u503c\n            }\n        } else { // \u5173\u8054\u5bf9\u8c61\u7f6e\u7a7a\n            auto refs_it = associations.find(disguised);\n            if (refs_it != associations.end()) {\n                auto &refs = refs_it->second;\n                auto it = refs.find(key);\n                if (it != refs.end()) {\n                    association.swap(it->second);\n                    refs.erase(it);\n                    if (refs.size() == 0) {\n                        associations.erase(refs_it);\n                    }\n                }\n            }\n        }\n    }\n}\n")),(0,i.kt)("h2",{id:"\u5982\u4f55\u8c03\u7528\u88ab\u5206\u7c7b\u8986\u76d6\u7684\u65b9\u6cd5"},"\u5982\u4f55\u8c03\u7528\u88ab\u5206\u7c7b\u8986\u76d6\u7684\u65b9\u6cd5"),(0,i.kt)("p",null,"\u62ff\u5230\u7c7b\u5bf9\u8c61 -> \u62f7\u8d1d\u65b9\u6cd5\u5217\u8868 -> \u65b9\u6cd5\u540d\u79f0\u5339\u914d\uff08\u5148\u5339\u914d\u5230 category \u7684\u65b9\u6cd5\uff0c\u540e\u5339\u914d\u5230\u7c7b\u7684\u65b9\u6cd5\uff09\u62ff\u5230\u6392\u5728\u540e\u9762\u7684 SEL \u548c IMP\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},'Student* student = [[Student alloc] init];\nstudent.gender = @"M";\n// Student \u7684 printGender \u65b9\u6cd5\u5df2\u88ab category Student (Name) \u8986\u76d6\n\nClass studentClass = [Student class];\nif (studentClass) {\n    unsigned int methodCount;\n    Method *methodList = class_copyMethodList(studentClass, &methodCount);\n    IMP lastIMP = NULL;\n    SEL lastSel = NULL;\n    for (int i = 0; i < methodCount; i++) {\n        Method method = methodList[i];\n        NSString *methodName = [NSString stringWithCString:sel_getName(method_getName(method)) encoding:NSUTF8StringEncoding];\n        if ([@"printGender" isEqualToString:methodName]) {\n            lastIMP = method_getImplementation(method);\n            lastSel = method_getName(method);\n        }\n    }\n    // \u89c1 objc \u6e90\u4ee3\u7801 message.h\n    // * These functions must be cast to an appropriate function pointer type\n    // * before being called.\n    // \u8fd9\u4e9b\u65b9\u6cd5\u9700\u8981\u5f3a\u5236\u8f6c\u6362\u6210\u9002\u5f53\u7684\u51fd\u6570\u6307\u9488\u7c7b\u578b\u624d\u80fd\u8c03\u7528\n    typedef void (*fn)(id, SEL);\n    if (lastIMP != NULL) {\n        fn f = (fn)lastIMP;\n        f(student, lastSel);\n    }\n    free(methodList);\n}\n')))}m.isMDXComponent=!0},81757:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/6CC85DEF-52E4-48D6-859D-48903740711F-1683d8c7ae5988ab9140e8fca5c3a152.png"},25986:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/FD871C0E-17E5-4674-A963-D9B7FC1DB460-50e997496dd795aa228438125ef36308.png"}}]);