"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7831],{80456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));n(61839);const a={},l="Flutter Source",i={unversionedId:"flutter-source",id:"flutter-source",title:"Flutter Source",description:"\u73af\u5883\u914d\u7f6e",source:"@site/docs/flutter/flutter-source.md",sourceDirName:".",slug:"/flutter-source",permalink:"/docs/flutter/flutter-source",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flutter Principle",permalink:"/docs/flutter/flutter-principle"},next:{title:"Flutter Widget",permalink:"/docs/flutter/flutter-widget"}},u={},s=[{value:"\u73af\u5883\u914d\u7f6e",id:"\u73af\u5883\u914d\u7f6e",level:2},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:2},{value:"\u6e90\u7801\u8c03\u8bd5",id:"\u6e90\u7801\u8c03\u8bd5",level:2},{value:"\u9519\u8bef\u89e3\u51b3",id:"\u9519\u8bef\u89e3\u51b3",level:2},{value:"Release \u4ea7\u7269",id:"release-\u4ea7\u7269",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flutter-source"},"Flutter Source"),(0,o.kt)("h2",{id:"\u73af\u5883\u914d\u7f6e"},"\u73af\u5883\u914d\u7f6e"),(0,o.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u7f16\u8bd1 Flutter \u6e90\u7801\u6240\u9700\u8981\u7684\u73af\u5883\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/wiki/Setting-up-the-Engine-development-environment"},"Setting up the Engine development environment \xb7 flutter/flutter Wiki")),(0,o.kt)("p",null,"\u5176\u4e2d\u4e00\u4e2a\u4f9d\u8d56\u9879\u662f ",(0,o.kt)("a",{parentName:"p",href:"https://commondatastorage.googleapis.com/chrome-infra-docs/flat/depot_tools/docs/html/depot_tools_tutorial.html"},"Chromium's depot_tools"),"\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chromium is an open-source web browser project initiated by Google and maintained by the developer community. The Chromium project primarily provides a browser engine responsible for processing web requests, rendering web pages, and incorporating a range of security features and performance optimizations. Many modern browsers, such as Google Chrome, Microsoft Edge, Opera, Brave, and Vivaldi, are built on top of the Chromium project."),(0,o.kt)("li",{parentName:"ul"},"The Chromium depot_tools(7) suite contains many git workflow-enhancing tools which are designed to work together to enable anyone to wrangle the Chromium codebase expertly.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u53ef\u4ee5\u628a depot_tools \u5355\u72ec\u653e\uff0c\u6216\u8005\u653e\u5230 flutter_source \u76ee\u5f55\u91cc\nmkdir flutter_source\ncd flutter_source\ngit clone https://chromium.googlesource.com/chromium/tools/depot_tools.git\n\n# Add depot_tools to the front of your PATH\n# \u4e5f\u53ef\u4ee5\u52a0\u5230 ~/.zshrc \u91cc\nexport PATH=`pwd`/depot_tools:$PATH\n\n# A configuration file for you source checkout\ntouch .gclient\n")),(0,o.kt)("p",null,"\u5b98\u65b9\u8ba9\u81ea\u5df1 fork \u4e00\u4e2a\u4ed3\u5e93\uff0c\u4f46\u5982\u679c\u4e0d\u5f80\u5b98\u65b9\u63d0\u4ea4\u4ee3\u7801\u7684\u8bdd\uff0c\u53ef\u4ee5\u5148\u7528\u7740\u5b98\u65b9\u4ed3\u5e93\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='flutter_source/.gclient'",title:"'flutter_source/.gclient'"},'solutions = [\n  {\n    "managed": False,\n    "name": "src/flutter",\n    "url": "git@github.com:flutter/engine.git", // \u8fd9\u91cc\u53ef\u4ee5\u6362\u6210\u81ea\u5df1\u7ef4\u62a4\u7684\u5f15\u64ce\u4ed3\u5e93\u5730\u5740\n    "custom_deps": {},\n    "deps_file": "DEPS",\n    "safesync_url": "",\n  },\n]\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DEPS"),": A file in the chromium checkout which gclient sync uses to determine what dependencies to pull in. This file also contains hooks.\uff08\u4f4d\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"src/flutter/DEPS"),"\uff09"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gclient sync"),": This will pull all dependencies of the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/flutter")," checkout. You will need to run this any time you update the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/flutter")," checkout, including when you switch branches. ",(0,o.kt)("strong",{parentName:"p"},"Avoid interrupting this script, as doing so can leave your repository in an inconsistent state that is tedious to clean up.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7b2c\u4e00\u6b21\u8fd0\u884c\u8fd9\u4e2a\uff0c\u4f1a\u975e\u5e38\u975e\u5e38\u4e45\uff0c\u522b\u7740\u6025\n# \u8fd9\u4e00\u6b65\u4f1a\u514b\u9686 flutter/engine \u4ed3\u5e93\n# \u5728 flutter_source \u6839\u76ee\u5f55\u6216\u8005\u5b50\u76ee\u5f55\u8fd0\u884c\u6b64\u547d\u4ee4\uff0c\u5e94\u8be5\u6ca1\u6709\u4ec0\u4e48\u533a\u522b\uff0c\u90fd\u662f\u7528 flutter_source/.gclient \u8fd9\u4e2a\u6587\u4ef6\ngclient sync\n")),(0,o.kt)("p",null,"Editor autocomplete support: On Mac, you can simply use Xcode (e.g., open ",(0,o.kt)("inlineCode",{parentName:"p"},"out/host_debug_unopt/products.xcodeproj"),")."),(0,o.kt)("p",null,"\u5207\u6362\u5f15\u64ce\u5206\u652f\uff1a\u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/flutter/.git"),"\uff0c\u8fd9\u662f\u4e00\u4e2a git \u4ed3\u5e93\uff0c\u5728\u8fd9\u91cc\u5207\u6362"),(0,o.kt)("h2",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,o.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/wiki/Compiling-the-engine"},"Compiling the engine \xb7 flutter/flutter Wiki")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd src\n\n# \u751f\u4ea7 out/host_debug_unopt\n./flutter/tools/gn --unoptimized --mac-cpu=arm64\n\n# \u751f\u4ea7 out/ios_debug_unopt\n./flutter/tools/gn --unoptimized --ios --mac-cpu=arm64\n\n# \u7f16\u8bd1\u6e90\u7801\uff08Intel\uff09\nninja -C out/ios_debug_unopt && ninja -C out/host_debug_unopt\n\n# \u7f16\u8bd1\u6e90\u7801\uff08M1\uff09\nninja -C out/ios_debug_unopt_arm64 && ninja -C out/host_debug_unopt_arm64\n")),(0,o.kt)("p",null,"iOS expect both a ",(0,o.kt)("inlineCode",{parentName:"p"},"host")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ios")," build. It is critical to recompile the ",(0,o.kt)("inlineCode",{parentName:"p"},"host")," build after upgrading the Dart SDK (e.g. via a ",(0,o.kt)("inlineCode",{parentName:"p"},"gclient sync")," after merging up to head), since artifacts from the ",(0,o.kt)("inlineCode",{parentName:"p"},"host")," build need to be version matched to artifacts in the ",(0,o.kt)("inlineCode",{parentName:"p"},"iOS")," build."),(0,o.kt)("h2",{id:"\u6e90\u7801\u8c03\u8bd5"},"\u6e90\u7801\u8c03\u8bd5"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/wiki/The-flutter-tool"},"The flutter tool \xb7 flutter/flutter Wiki")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/wiki/Debugging-the-engine"},"Debugging the engine \xb7 flutter/flutter Wiki \xb7 GitHub")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u65b0\u5efa\u9879\u76ee\n./flutter/bin/flutter create my_app --local-engine-src-path src --local-engine=ios_debug_unopt_arm64\n\n# \u8fd0\u884c\u9879\u76ee\ncd my_app\n../flutter/bin/flutter run --local-engine-src-path ../src --local-engine=ios_debug_unopt_arm64\n")),(0,o.kt)("p",null,"\u5728 Android Studio \u4e2d\u8fd0\u884c my_app\uff0c\u5373\u53ef\u8c03\u8bd5 framework \u6e90\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my_app # \u5728my_app\u8c03\u8bd5\nexport FLUTTER_ENGINE=$HOME/Documents/flutter_source/src/\nflutter build ios --debug --local-engine ios_debug_unopt_arm64\n")),(0,o.kt)("p",null,"\u5b98\u65b9\u8bf4\u4e86\uff0c\u53ea\u80fd\u7b26\u53f7\u65ad\u70b9\u8c03\u8bd5\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Add an engine symbol breakpoint via Debug > Breakpoints > Create Symbolic Breakpoint.... The Symbol field should be the engine symbol you're interested in, like -","[FlutterEngine runWithEntrypoint:]"," (note the -[ prefix has no space).")),(0,o.kt)("p",null,"\u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"flutter_source/src/out/ios_debug_unopt/flutter_engine.xcodeproj"),"\uff0c\u9605\u8bfb\u6e90\u7801\u6bd4\u8f83\u65b9\u4fbf\u3002"),(0,o.kt)("p",null,"You can also set the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"$FLUTTER_ENGINE")," instead of specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"--local-engine-src-path"),"."),(0,o.kt)("h2",{id:"\u9519\u8bef\u89e3\u51b3"},"\u9519\u8bef\u89e3\u51b3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u279c  flutter_source gclient sync -D\nSyncing projects: 100% (123/123), done.\n\nWARNING: 'src/third_party/vulkan-deps' is no longer part of this client.\nDespite running 'gclient sync -D' no action was taken as there are modifications.\nIt is recommended you revert all changes or run 'gclient sync -D --force' next time.\nError: Command 'git -c core.quotePath=false diff --name-status 210a80013067672b52847ec7aa70ff78b2f4d77e' returned non-zero exit status 128 in /Users/yianzhou/Documents/flutter_source/src/third_party/vulkan-deps/spirv-cross/src\nfatal: bad object 210a80013067672b52847ec7aa70ff78b2f4d77e\n")),(0,o.kt)("p",null,"\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/third_party/vulkan-deps")," \u6587\u4ef6\u5939\u5220\u6389\u5c31\u597d\u4e86\u3002"),(0,o.kt)("p",null,"\u7f16\u8bd1\u547d\u4ee4\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"./flutter/tools/gn --ios --runtime-mode=release --mac-cpu=arm64 && ninja -C out/ios_release_arm64")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u279c  src git:(886fd09) ninja -C out/ios_release_arm64\nninja: Entering directory `out/ios_release_arm64'\n[3726/4848] ACTION //flutter/lib/snapshot:create_arm_gen_snapshot(//build/toolchain/mac:ios_clang_arm)\nFAILED: clang_x64/gen_snapshot_arm64\npython3 ../../flutter/sky/tools/create_macos_gen_snapshots.py --dst /Users/yianzhou/Documents/flutter_source/src/out/ios_release_arm64/clang_x64 --arm64-out-dir /Users/yianzhou/Documents/flutter_source/src/out/ios_release_arm64\nCannot find gen_snapshot at /Users/yianzhou/Documents/flutter_source/src/out/ios_release_arm64/clang_x64/gen_snapshot\n[3737/4848] ACTION //flutter/lib/snapshot:strong_platform(//build/toolchain/mac:ios_clang_arm)\nninja: build stopped: subcommand failed.\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/issues/105651"},"Cannot build iOS engine on arm64 Mac, create_macos_gen_snapshots.py fails with Cannot find gen_snapshot at src/out/ios_debug_unopt/clang_x64/gen_snapshot \xb7 Issue #105651 \xb7 flutter/flutter")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/issues/108238"},"Engine builds for Android on Mac always look for gen_snapshot in the default clang_x64 directory \xb7 Issue #108238 \xb7 flutter/flutter")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/flutter/engine/pull/34870"},"use host_cpu in BUILD.gn to determine where to find gen_snapshot by flar \xb7 Pull Request #34870 \xb7 flutter/engine")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/Users/yianzhou/Documents/flutter_source/depot_tools/vpython3: line 45: /Users/yianzhou/Documents/flutter_source/depot_tools/.cipd_bin/vpython3: No such file or directory\n/Users/yianzhou/Documents/flutter_source/depot_tools/vpython3: line 45: exec: /Users/yianzhou/Documents/flutter_source/depot_tools/.cipd_bin/vpython3: cannot execute: No such file or directory\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"flutter_source/depot_tools")," \u76ee\u5f55\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"git pull"),"\uff0c\u591a\u8bd5\u4e86\u51e0\u6b21\uff0c\u5c31\u597d\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Undefined symbols for architecture arm64:\n  "GrGLMakeNativeInterface()", referenced from:\n      flutter::CreateGLInterface(std::__1::function<void* (char const*)>) in gpu_surface_gl.gpu_surface_gl_delegate.o\n  "GrGLMakeAssembledGLInterface(void*, void (* (*)(void*, char const*))())", referenced from:\n      flutter::CreateGLInterface(std::__1::function<void* (char const*)>) in gpu_surface_gl.gpu_surface_gl_delegate.o\n  "GrGLMakeAssembledGLESInterface(void*, void (* (*)(void*, char const*))())", referenced from:\n      flutter::CreateGLInterface(std::__1::function<void* (char const*)>) in gpu_surface_gl.gpu_surface_gl_delegate.o\n  "GrGLTextureParameters::invalidate()", referenced from:\n      GrBackendTexture::glTextureParametersModified() in gpu.GrBackendSurface.o\n  "GrGLTextureParameters::NonsamplerState::NonsamplerState()", referenced from:\n      GrGLTextureParameters::GrGLTextureParameters() in gpu.GrBackendSurface.o\n  "GrGLTextureParameters::SamplerOverriddenState::SamplerOverriddenState()", referenced from:\n      GrGLTextureParameters::GrGLTextureParameters() in gpu.GrBackendSurface.o\n  "GrGLBackendTextureInfo::assign(GrGLBackendTextureInfo const&, bool)", referenced from:\n      GrBackendTexture::operator=(GrBackendTexture const&) in gpu.GrBackendSurface.o\n  "GrGLBackendTextureInfo::cleanup()", referenced from:\n      GrBackendTexture::cleanup() in gpu.GrBackendSurface.o\n  "GrGLGpu::Make(sk_sp<GrGLInterface const>, GrContextOptions const&, GrDirectContext*)", referenced from:\n      GrDirectContext::MakeGL(sk_sp<GrGLInterface const>, GrContextOptions const&) in gpu.GrDirectContext.o\nld: symbol(s) not found for architecture arm64\nclang-14: error: linker command failed with exit code 1 (use -v to see invocation)\n')),(0,o.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u5176\u5b9e\u662f\u56e0\u4e3a\u6211\u7684\u7f16\u8bd1\u6307\u4ee4\u6ca1\u6709\u6307\u5b9a\u5230 arm64 \u67b6\u6784\u3002\u6ce8\u610f Intel \u548c M1 \u82af\u7247\u8981\u7528\u4e0d\u540c\u7684\u547d\u4ee4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"../../third_party/dart/runtime/vm/simulator.h:12:2: error: Simulator not implemented.\n#error Simulator not implemented.\n ^\n1 error generated.\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/issues/96716"},"The flutter engine build host_debug failed on AppleSilicon with or without ",(0,o.kt)("inlineCode",{parentName:"a"},"--no-prebuilt-dart-sdk")," \xb7 Issue #96716 \xb7 flutter/flutter \xb7 GitHub")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/issues/96745"},"Setup Flutter engine environment and build engine on M1 (Apple Silicon ARM64) \xb7 Issue #96745 \xb7 flutter/flutter \xb7 GitHub")),(0,o.kt)("p",null,"M1 \u7535\u8111\u6ca1\u6cd5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--local-engine"),"\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/issues/112679"},"arm64 engine builds not compatible with --local-engine tool option \xb7 Issue #112679 \xb7 flutter/flutter \xb7 GitHub")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u6700\u540e\u6211\u901a\u8fc7\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"flutter_source/src/out/host_debug_unopt_arm64")," \u76ee\u5f55\u76f4\u63a5\u91cd\u547d\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"host_debug_unopt")," \u89e3\u51b3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Generating GN files in: out/ios_debug_unopt_arm64\nERROR at //flutter/shell/gpu/BUILD.gn:62:37: Can\'t load input file.\n  public_deps = gpu_common_deps + [ "//flutter/impeller" ]\n                                    ^-------------------\nUnable to load:\n  /Users/yianzhou/Documents/flutter_source/src/flutter/impeller/BUILD.gn\nI also checked in the secondary tree for:\n  /Users/yianzhou/Documents/flutter_source/src/build/secondary/flutter/impeller/BUILD.gn\n')),(0,o.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"flutter_source/src/flutter/impeller")," \u5b50\u4ed3\u5e93\u5b58\u5728\u53d8\u66f4\uff0c\u628a\u53d8\u66f4\u4e22\u5f03\uff0c\u7136\u540e\u518d ",(0,o.kt)("inlineCode",{parentName:"p"},"gclient sync")," \u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"depot_tools/ninja.py: Could not find Ninja in the third_party of the current project, nor in your PATH.\nPlease take one of the following actions to install Ninja:\n- If your project has DEPS, add a CIPD Ninja dependency to DEPS.\n- Otherwise, add Ninja to your PATH *after* depot_tools.\n\ndepot_tools/ninja.py: Fallback to a deprecated legacy ninja binary. Note that this ninja binary will be removed soon.\nPlease install ninja to your project using DEPS. If your project does not have DEPS, Please install ninja in your PATH.\nSee also https://crbug.com/1340825\n")),(0,o.kt)("p",null,"\u89e3\u51b3\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"brew install ninja")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"../../flutter/fml/backtrace.cc:7:10: fatal error: 'cxxabi.h' file not found\n#include <cxxabi.h>\n         ^~~~~~~~~~\n1 error generated.\n\nIn file included from ../../third_party/abseil-cpp/absl/debugging/symbolize.cc:33:\n../../third_party/abseil-cpp/absl/debugging/symbolize_darwin.inc:15:10: fatal error: 'cxxabi.h' file not found\n#include <cxxabi.h>\n         ^~~~~~~~~~\n1 error generated.\n")),(0,o.kt)("h2",{id:"release-\u4ea7\u7269"},"Release \u4ea7\u7269"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd src\n\n# \u751f\u4ea7 out/ios_release_arm64\n./flutter/tools/gn --ios --runtime-mode=release --mac-cpu=arm64 --ios-cpu=arm64\n\n# \u7f16\u8bd1\u6e90\u7801\uff08M1\uff09\nninja -C out/ios_release_arm64\n\n# \u8131\u53bb\u6240\u6709\u672c\u5730\u7b26\u53f7\nstrip -x out/ios_release_arm64/Flutter.framework/Flutter\n\n# \u63d0\u53d6\u7b26\u53f7\u8868\ndsymutil out/ios_release_arm64/libFlutter.dylib\n")))}p.isMDXComponent=!0}}]);