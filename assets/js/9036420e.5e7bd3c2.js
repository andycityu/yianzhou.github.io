"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8424],{6385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));n(61839);const o={},r="Foundation",l={unversionedId:"foundation",id:"foundation",title:"Foundation",description:"NSURL",source:"@site/docs/codes/foundation.md",sourceDirName:".",slug:"/foundation",permalink:"/docs/codes/foundation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6587\u4ef6\u76f8\u5173",permalink:"/docs/codes/file"},next:{title:"UIImage",permalink:"/docs/codes/uiimage"}},s={},c=[{value:"NSURL",id:"nsurl",level:2},{value:"NSDictionary",id:"nsdictionary",level:2},{value:"KVO",id:"kvo",level:2},{value:"\u65f6\u95f4\u6233",id:"\u65f6\u95f4\u6233",level:2},{value:"\u65e5\u671f\u683c\u5f0f\u5316\u5b57\u7b26\u4e32",id:"\u65e5\u671f\u683c\u5f0f\u5316\u5b57\u7b26\u4e32",level:2},{value:"NSError",id:"nserror",level:2},{value:"base64 \u5b57\u7b26\u4e32\u7f16\u7801",id:"base64-\u5b57\u7b26\u4e32\u7f16\u7801",level:2},{value:"\u8ba1\u7b97\u6587\u672c\u884c\u6570",id:"\u8ba1\u7b97\u6587\u672c\u884c\u6570",level:2},{value:"NS_ERROR_ENUM",id:"ns_error_enum",level:2},{value:"\u5411\u524d\u58f0\u660e",id:"\u5411\u524d\u58f0\u660e",level:2},{value:"\u7981\u7528\u7f16\u8bd1\u8b66\u544a",id:"\u7981\u7528\u7f16\u8bd1\u8b66\u544a",level:2},{value:"NS_UNAVAILABLE",id:"ns_unavailable",level:2},{value:"Notification",id:"notification",level:2},{value:"NSString",id:"nsstring",level:2},{value:"\u53ef\u53d8\u53c2\u6570",id:"\u53ef\u53d8\u53c2\u6570",level:2},{value:"\u6253\u5370\u6307\u9488\u5730\u5740",id:"\u6253\u5370\u6307\u9488\u5730\u5740",level:2},{value:"\u5185\u5b58\u7f13\u5b58",id:"\u5185\u5b58\u7f13\u5b58",level:2},{value:"\u8bbf\u95ee Bundle \u8d44\u6e90",id:"\u8bbf\u95ee-bundle-\u8d44\u6e90",level:2},{value:"\u8bfb\u53d6 Cookie",id:"\u8bfb\u53d6-cookie",level:2},{value:"NSAttributedString",id:"nsattributedstring",level:2},{value:"\u5b57\u7b26\u4e32\u679a\u4e3e",id:"\u5b57\u7b26\u4e32\u679a\u4e3e",level:2}],d={toc:c};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"foundation"},"Foundation"),(0,i.kt)("h2",{id:"nsurl"},"NSURL"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(58575).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},"[NSCharacterSet URLQueryAllowedCharacterSet]\n\n!$&'()*+,-./0123456789:;=?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~\n")),(0,i.kt)("h2",{id:"nsdictionary"},"NSDictionary"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(7340).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(82811).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(15124).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(36141).Z})),(0,i.kt)("h2",{id:"kvo"},"KVO"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'[self.tableView addObserver:self forKeyPath:@"contentInset" options:NSKeyValueObservingOptionNew | NSKeyValueObservingOptionOld context:nil];\n\n#pragma mark - KVO\n\n- (void)observeValueForKeyPath:(NSString *)keyPath\n                      ofObject:(id)object\n                        change:(NSDictionary<NSKeyValueChangeKey, id> *)change\n                       context:(void *)context {\n    if (object == self.tableView && [keyPath isEqualToString:@"contentInset"]) {\n    }\n}\n\n- (void)dealloc {\n    [self.tableView removeObserver:self forKeyPath:@"contentInset"];\n}\n\n#import <KVOController/KVOController.h>\n\n[self.KVOController observe:self keyPath:@"startPageTopBarStatus" options:NSKeyValueObservingOptionNew block:^(id observer, id object, NSDictionary<NSString *,id> *change) {\n}];\n')),(0,i.kt)("h2",{id:"\u65f6\u95f4\u6233"},"\u65f6\u95f4\u6233"),(0,i.kt)("p",null,"\u65f6\u95f4\u6233\u5b57\u7b26\u4e32\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},"NSTimeInterval timestamp = [[NSDate date] timeIntervalSince1970];\nNSString *timestampString = [@(ceil(timestamp)) stringValue];\n")),(0,i.kt)("h2",{id:"\u65e5\u671f\u683c\u5f0f\u5316\u5b57\u7b26\u4e32"},"\u65e5\u671f\u683c\u5f0f\u5316\u5b57\u7b26\u4e32"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// \u8fd9\u4e2a\u521d\u59cb\u5316\u6bd4\u8f83\u8017\u65f6\uff0c\u7528\u5355\u4f8b\u6301\u6709\n+ (NSDateFormatter *)dateFormatter {\n    static NSDateFormatter *dateFormatter = nil;\n    static dispatch_once_t onceToken;\n    dispatch_once(&onceToken, ^{\n        dateFormatter = [[NSDateFormatter alloc] init];\n    });\n    return dateFormatter;\n}\n\n+ (NSString *)displayStringWithTime:(NSTimeInterval)browseTime {\n    /**\n     \u6700\u8fd1\u4e00\u6b21\u4fdd\u5b58\uff08\u5173\u95ed\uff09\u65f6\u95f4\uff0c\u65f6\u95f4\u5c55\u793a\uff1a\u5177\u4f53\u5230\u5206\u949f\n     - 60\u5206\u949f\u5185\u5219\u5c55\u793a\u201cxxx\u5206\u949f\u524d\u201d\n     - \u201c\u4eca\u5929\u201d/\u201c\u6628\u5929\u201d/\u201c\u524d\u5929\u201d\u6253\u5f00\u7684\u6587\u4ef6\u76f4\u63a5\u7528\u6587\u6848\u201c\u4eca\u5929\u201d/\u201c\u6628\u5929\u201d/\u201c\u524d\u5929\u201d\n     - \u5f80\u524d\u65f6\u95f4\u5c55\u793a\u683c\u5f0f\u201cxx\u6708xx\u65e5\u201d\n     - \u975e\u5f53\u524d\u5e74\u4efd\u65f6\u9700\u8981\u5728\u524d\u9762\u52a0\u4e0a\u5e74\u4efd\u201cxx\u5e74xx\u6708xx\u65e5\u201d\n     */\n    NSDate *date = [NSDate date]; // \u5f53\u524d\u65f6\u95f4\n    NSDate *browseDate = [NSDate dateWithTimeIntervalSince1970:browseTime];\n    NSTimeInterval diff = [date timeIntervalSinceDate:browseDate];\n    if (diff < 60 * 60) {\n        NSUInteger minute = diff / 60;\n        return [NSString stringWithFormat:@"%@\u5206\u949f\u524d", @(minute > 0 ? minute : 1)];\n    } else if ([[NSCalendar currentCalendar] isDateInToday:browseDate]) {\n        return @"\u4eca\u5929";\n    } else if ([[NSCalendar currentCalendar] isDateInYesterday:browseDate]) {\n        return @"\u6628\u5929";\n    } else {\n        NSCalendarUnit units = NSCalendarUnitDay | NSCalendarUnitMonth | NSCalendarUnitYear;\n        NSDateComponents *today = [[NSCalendar currentCalendar] components:units fromDate:date];\n        NSDateComponents *ref = [[NSCalendar currentCalendar] components:units fromDate:browseDate];\n        NSDateComponents *components = [[NSCalendar currentCalendar] components:units fromDate:browseDate toDate:[NSDate date] options:0];\n        if (components.year < 0 && components.month < 0 && components.day >= 2 && components.day < 3) {\n            return @"\u524d\u5929";\n        } else if (today.year == ref.year) {\n            [[self dateFormatter] setDateFormat:@"MM-dd"];\n            return [self.dateFormatter stringFromDate:browseDate];\n        } else {\n            [[self dateFormatter] setDateFormat:@"yyyy-MM-dd"];\n            return [self.dateFormatter stringFromDate:browseDate];\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"nserror"},"NSError"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"-[NSError init]")," called; this results in an invalid ",(0,i.kt)("inlineCode",{parentName:"p"},"NSError")," instance. It will raise an exception in a future release. Please call ",(0,i.kt)("inlineCode",{parentName:"p"},"errorWithDomain:code:userInfo:")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"initWithDomain:code:userInfo:"),". This message shown only once.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"[NSError errorWithDomain:NSCocoaErrorDomain code:NSUserCancelledError userInfo:nil]\n[NSError errorWithDomain:AVFoundationErrorDomain code:AVErrorUnknown userInfo:nil]\n")),(0,i.kt)("h2",{id:"base64-\u5b57\u7b26\u4e32\u7f16\u7801"},"base64 \u5b57\u7b26\u4e32\u7f16\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"- (NSString *)base64Decoded:(NSString *)originString {\n    NSData *decodedData = [[NSData alloc] initWithBase64EncodedString:originString options:0];\n    NSString *decodedString = [[NSString alloc] initWithData:decodedData encoding:NSUTF8StringEncoding];\n    return decodedString;\n}\n")),(0,i.kt)("h2",{id:"\u8ba1\u7b97\u6587\u672c\u884c\u6570"},"\u8ba1\u7b97\u6587\u672c\u884c\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"NSInteger lineCount = 0;\nCGSize textSize = CGSizeMake(self.titleView.frame.size.width, MAXFLOAT);\nlong rHeight = lroundf([self.titleView sizeThatFits:textSize].height);\nlong charSize = lroundf(self.titleView.font.lineHeight);\nlineCount = rHeight/charSize;\n")),(0,i.kt)("h2",{id:"ns_error_enum"},"NS_ERROR_ENUM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"// \u6ce8\u610f\u547d\u540d\u662f xxxError\ntypedef NS_ERROR_ENUM(GCDAsyncSocketErrorDomain, GCDAsyncSocketError) {\n    GCDAsyncSocketNoError = 0,           // Never used\n    GCDAsyncSocketBadConfigError,        // Invalid configuration\n    GCDAsyncSocketBadParamError,         // Invalid parameter was passed\n    GCDAsyncSocketConnectTimeoutError,   // A connect operation timed out\n    GCDAsyncSocketReadTimeoutError,      // A read operation timed out\n    GCDAsyncSocketWriteTimeoutError,     // A write operation timed out\n    GCDAsyncSocketReadMaxedOutError,     // Reached set maxLength without completing\n    GCDAsyncSocketClosedError,           // The remote peer closed the connection\n    GCDAsyncSocketOtherError,            // Description provided in userInfo\n};\n")),(0,i.kt)("h2",{id:"\u5411\u524d\u58f0\u660e"},"\u5411\u524d\u58f0\u660e"),(0,i.kt)("p",null,"\u4e0d\u5efa\u8bae\u4f7f\u7528\u524d\u7f6e\u58f0\u660e\uff0c\u7406\u7531\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5934\u6587\u4ef6\u6ca1\u6709 self-contain"),(0,i.kt)("li",{parentName:"ol"},"\u5f15\u7528\u6765\u6e90\u518d\u4e5f\u65e0\u6cd5\u786e\u5b9a\u4e86"),(0,i.kt)("li",{parentName:"ol"},"\u5f71\u54cd\u6587\u4ef6\u4f9d\u8d56\u5206\u6790\u7ed3\u679c")),(0,i.kt)("p",null,"\u7f16\u8bd1\u52a0\u901f\u53ef\u4ee5\u901a\u8fc7\u5176\u4ed6\u65b9\u5f0f\u89e3\u51b3\uff0c\u6bd4\u5982 bazel\uff0c\u4f46\u4e0a\u8ff0 3 \u4e2a\u7f3a\u70b9\u6ca1\u6709\u89e3\u51b3\u65b9\u6848\u3002"),(0,i.kt)("h2",{id:"\u7981\u7528\u7f16\u8bd1\u8b66\u544a"},"\u7981\u7528\u7f16\u8bd1\u8b66\u544a"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clang.llvm.org/docs/DiagnosticsReference.html"},"Diagnostic flags in Clang \u2014 Clang 13 documentation")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#pragma clang diagnostic push\n#pragma clang diagnostic ignored "-Wdeprecated-declarations"\n#pragma clang diagnostic ignored "-Wdeprecated-implementations"\n#pragma clang diagnostic ignored "-Wunused-variable"\n#pragma clang diagnostic ignored "-Wunreachable-code"\n#pragma clang diagnostic ignored "-Warc-performSelector-leaks"\n...\n#pragma clang diagnostic pop\n')),(0,i.kt)("h2",{id:"ns_unavailable"},"NS_UNAVAILABLE"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"+ (instancetype)new NS_UNAVAILABLE;\n- (instancetype)init NS_UNAVAILABLE;\n")),(0,i.kt)("h2",{id:"notification"},"Notification"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// .h\nFOUNDATION_EXPORT NSNotificationName const ABCNotification;\n// .m\nNSNotificationName const ABCNotification = @"ABCNotification";\n\n- (void)testThirdInvokeNotifications {\n    XCTNSNotificationExpectation *notificationExpectation = [[XCTNSNotificationExpectation alloc] initWithName:ABCNotification];\n    // post notification\n    [self waitForExpectations:@[ notificationExpectation ] timeout:1];\n}\n')),(0,i.kt)("h2",{id:"nsstring"},"NSString"),(0,i.kt)("p",null,"URL \u7f16\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NSString *encoded = [str stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet URLQueryAllowedCharacterSet]];\n")),(0,i.kt)("h2",{id:"\u53ef\u53d8\u53c2\u6570"},"\u53ef\u53d8\u53c2\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'/// \u8bb0\u5f55\u8fd0\u8425\u65e5\u5fd7\n/// @param format \u683c\u5f0f\uff0c\u53ef\u53d8\u53c2\u6570\n- (void)log:(NSString *)format, ...;\n\n- (void)log:(NSString *)format, ... {\n    va_list args;\n    va_start(args, format);\n    NSString *message = [[NSString alloc] initWithFormat:format arguments:args];\n    va_end(args);\n    NSLog(@"%@", message);\n}\n')),(0,i.kt)("h2",{id:"\u6253\u5370\u6307\u9488\u5730\u5740"},"\u6253\u5370\u6307\u9488\u5730\u5740"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},'NSString *str = @"Susan";\nNSLog(@"\u6307\u9488\u6240\u6307\u5bf9\u8c61\u7684\u5185\u5b58\u5730\u5740\uff1a%p", str); // \u5806\u533a\uff0c\u4f4e\u5730\u5740\u533a\nNSLog(@"\u6307\u9488\u672c\u8eab\u7684\u5185\u5b58\u5730\u5740\uff1a%p", &str); // \u6808\u533a\uff0c\u9ad8\u5730\u5740\u533a\n')),(0,i.kt)("p",null,"\u6253\u5370 ",(0,i.kt)("inlineCode",{parentName:"p"},"CGRect"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},'NSLog(@"%@", NSStringFromCGRect(frame));')),(0,i.kt)("h2",{id:"\u5185\u5b58\u7f13\u5b58"},"\u5185\u5b58\u7f13\u5b58"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"SDImageCacheConfig *config = [[SDImageCacheConfig alloc] init];\n// \u6700\u5927\u5185\u5b58\u6d88\u8017\uff0c\u5224\u65ad\u4e00\u4e0b\u662f\u4e0d\u662f\u5c0f\u5185\u5b58\u624b\u673a\nconfig.maxMemoryCost = SystemInfo_isGTE2GBDevice() ? 314572800 : 157286400;\nSDMemoryCache *cache = [[SDMemoryCache alloc] initWithConfig:config];\n")),(0,i.kt)("h2",{id:"\u8bbf\u95ee-bundle-\u8d44\u6e90"},"\u8bbf\u95ee Bundle \u8d44\u6e90"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'NSBundle *bundle = [NSBundle bundleWithPath:[[NSBundle mainBundle] pathForResource:@"ToolkitLibResource" ofType:@"bundle"]];\nNSURL *URL = [bundle URLForResource:@"PageTranslation" withExtension:@".js"];\n\nNSBundle *bundle = [NSBundle bundleWithPath:[[NSBundle bundleForClass:[self class]] pathForResource:@"ARScanLibTestResource" ofType:@"bundle"]];\nNSString *flowerDataPath = [bundle pathForResource:@"flowerData" ofType:@"json"];\n')),(0,i.kt)("h2",{id:"\u8bfb\u53d6-cookie"},"\u8bfb\u53d6 Cookie"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'- (void)logOpenThemeID {\n    NSHTTPCookieStorage *cookieStorage = [NSHTTPCookieStorage sharedHTTPCookieStorage];\n    NSArray<NSHTTPCookie *> *cookies = [cookieStorage cookiesForURL:self.URL];\n    NSString *openThemeID = @"";\n    for (NSHTTPCookie *cookie in cookies) {\n        if ([cookie.name isEqualToString:@"open_theme_id"]) {\n            openThemeID = cookie.value;\n        }\n    }\n    NSLog(@"Cookie - [open_theme_id : %@]", openThemeID);\n}\n')),(0,i.kt)("h2",{id:"nsattributedstring"},"NSAttributedString"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},'NSString *string = @"Hello, world!";\n\nUIFont *font = [UIFont systemFontOfSize:14];\nNSMutableParagraphStyle *style = [[NSParagraphStyle defaultParagraphStyle] mutableCopy];\n[style setLineBreakMode:NSLineBreakByWordWrapping];\n\nNSMutableAttributedString *attributedString = [[NSMutableAttributedString alloc] initWithString:string];\nNSDictionary *attributes = @{NSFontAttributeName: font, NSParagraphStyleAttributeName: style};\n[attributedString addAttributes:attributes range:NSRangeFromString(string)];\n\nUITextView *textView = [[UITextView alloc] init];\ntextView.attributedText = attributedString;\ntextView.font = font;\ntextView.textColor = UIColor.blueColor;\ntextView.backgroundColor = UIColor.clearColor;\ntextView.editable = NO;\nself.textView = textView;\n[self.containerView addSubview:textView];\n\nCGSize constrainedSize = CGSizeMake(UIScreen.mainScreen.bounds.size.width - 30 * 2, MAXFLOAT);\nCGRect rect = [string boundingRectWithSize:constrainedSize options:NSStringDrawingUsesLineFragmentOrigin attributes:attributes context:nil];\n')),(0,i.kt)("h2",{id:"\u5b57\u7b26\u4e32\u679a\u4e3e"},"\u5b57\u7b26\u4e32\u679a\u4e3e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc",metastring:"title='Demo.h'",title:"'Demo.h'"},"typedef NSString *FileTypeStringEnum NS_STRING_ENUM;\nFOUNDATION_EXPORT FileTypeStringEnum const FileTypeStringEnumDoc;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc",metastring:"title='Demo.m'",title:"'Demo.m'"},'FileTypeStringEnum const FileTypeStringEnumDoc = @"doc";\n')))}m.isMDXComponent=!0},58575:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MmE5Njk1ZmM5NGI4YWUzZDFjNjA3MGRkNTQ1ODU3OTU0MTBhMTc0YmI1NzU0M2ZjMzFjN2QyZDVhYmEyZDg5YQpzaXplIDQ1MTcK"},15124:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MGE1OTVjNWYyMWU0NzA1OTY2MmMxY2Q5NjlkOTgyZTBkZjc0ZWNiYzE0ZTg0Zjk5MjY5OGE1NzM1YTc1YWNjMApzaXplIDcwODU5Cg=="},82811:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6NGRkN2RlNGU0YTkzYzlhODRiMjk4MmUyMGFkZWMxNWZlZGRlNDk0M2E2ZGZhY2Y2MTQzY2NiZTAzMTBhYjI0YQpzaXplIDY3MzU0Cg=="},7340:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6NDNmMDM4OGI4NTVhZTRjMjJhMGNlZDVlNWYzNzVmMjRkNDAwZTdhNWUwYzgwNjY2NGZmNjgyYTYzZmEzZGNkMQpzaXplIDY4ODEzCg=="},36141:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6Mjg1OTYzNmY2YjA4ZDAwMTY0Yjg3Mzg5ZGVkZmM5OWJkZTAyNTQ0Nzc0ZmMzYjVlMDM3ZWI1NjgyMzJhZTkxNQpzaXplIDU2Njg1Cg=="}}]);