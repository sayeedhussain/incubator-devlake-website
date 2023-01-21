"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2078],{55814:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=i(87462),o=(i(67294),i(3905));i(61839);const l={title:"GitExtractor",description:"GitExtractor Plugin\n"},a=void 0,r={unversionedId:"Plugins/gitextractor",id:"version-v0.15/Plugins/gitextractor",title:"GitExtractor",description:"GitExtractor Plugin\n",source:"@site/versioned_docs/version-v0.15/Plugins/gitextractor.md",sourceDirName:"Plugins",slug:"/Plugins/gitextractor",permalink:"/docs/Plugins/gitextractor",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.15/Plugins/gitextractor.md",tags:[],version:"v0.15",frontMatter:{title:"GitExtractor",description:"GitExtractor Plugin\n"},sidebar:"docsSidebar",previous:{title:"Gitee(WIP)",permalink:"/docs/Plugins/gitee"},next:{title:"GitHub",permalink:"/docs/Plugins/github"}},p={},s=[{value:"Summary",id:"summary",level:2},{value:"Steps to make this plugin work",id:"steps-to-make-this-plugin-work",level:2},{value:"Sample Request",id:"sample-request",level:2},{value:"Standalone Mode",id:"standalone-mode",level:2},{value:"Development",id:"development",level:2},{value:"Linux",id:"linux",level:3},{value:"Troubleshooting (Linux)",id:"troubleshooting-linux",level:4},{value:"MacOS",id:"macos",level:3},{value:"Troubleshooting (MacOS)",id:"troubleshooting-macos",level:4}],u={toc:s};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This plugin extracts commits and references from a remote or local git repository. It then saves the data into the database or csv files."),(0,o.kt)("h2",{id:"steps-to-make-this-plugin-work"},"Steps to make this plugin work"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use the Git repo extractor to retrieve data about commits and branches from your repository."),(0,o.kt)("li",{parentName:"ol"},"Use the GitHub plugin to retrieve data about Github issues and PRs from your repository.\nNOTE: you can run only one issue collection stage as described in the Github Plugin README."),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("a",{parentName:"li",href:"/docs/Plugins/refdiff"},"RefDiff")," plugin to calculate version diff, which will be stored in ",(0,o.kt)("inlineCode",{parentName:"li"},"refs_commits_diffs")," table.")),(0,o.kt)("h2",{id:"sample-request"},"Sample Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location --request POST \'localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "git repo extractor",\n    "tasks": [\n        [\n            {\n                "Plugin": "gitextractor",\n                "Options": {\n                    "url": "https://github.com/merico-dev/lake.git",\n                    "repoId": "github:GithubRepo:384111310"\n                }\n            }\n        ]\n    ]\n}\n\'\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url"),": the location of the git repository. It should start with ",(0,o.kt)("inlineCode",{parentName:"li"},"http"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"https")," for a remote git repository and with ",(0,o.kt)("inlineCode",{parentName:"li"},"/")," for a local one."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"repoId"),": column ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," of  ",(0,o.kt)("inlineCode",{parentName:"li"},"repos"),".\nNote : For GitHub, to find the repo id run ",(0,o.kt)("inlineCode",{parentName:"li"},"$(\"meta[name=octolytics-dimension-repository_id]\").getAttribute('content')")," in browser console. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"proxy"),": optional, http proxy, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"http://your-proxy-server.com:1080"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user"),": optional, for cloning private repository using HTTP/HTTPS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"password"),": optional, for cloning private repository using HTTP/HTTPS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"privateKey"),": optional, for SSH cloning, base64 encoded ",(0,o.kt)("inlineCode",{parentName:"li"},"PEM")," file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"passphrase"),": optional, passphrase for the private key")),(0,o.kt)("h2",{id:"standalone-mode"},"Standalone Mode"),(0,o.kt)("p",null,"You call also run this plugin in a standalone mode without any DevLake service running using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'go run plugins/gitextractor/main.go -url https://github.com/merico-dev/lake.git -id github:GithubRepo:384111310 -db "merico:merico@tcp(127.0.0.1:3306)/lake?charset=utf8mb4&parseTime=True"\n')),(0,o.kt)("p",null,"For more options (e.g., saving to a csv file instead of a db), please read ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/gitextractor/main.go"),"."),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"This plugin depends on ",(0,o.kt)("inlineCode",{parentName:"p"},"libgit2"),", you need to install version 1.3.0 to run and debug this plugin on your local\nmachine."),(0,o.kt)("h3",{id:"linux"},"Linux"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. require cmake\n[ubuntu]\napt install cmake -y\n[centos]\nyum install cmake -y\n\n2. compiling\ngit clone -b v1.3.0 https://github.com/libgit2/libgit2.git && cd libgit2\nmkdir build && cd build && cmake ..\nmake && make install\n\n3.PKG_CONFIG and LD_LIBRARY_PATH\n[centos]\nexport PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib64:/usr/local/lib64/pkgconfig\nexport LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib64\n[ubuntu]\nexport PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib:/usr/local/lib/pkgconfig\nexport LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib\n")),(0,o.kt)("h4",{id:"troubleshooting-linux"},"Troubleshooting (Linux)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Q: # pkg-config --cflags -- libgit2 Package libgit2 was not found in the pkg-config search path.\nPerhaps you should add the directory containing ",(0,o.kt)("inlineCode",{parentName:"p"},"libgit2.pc")," to the PKG_CONFIG_PATH environment variable\nNo package 'libgit2' found pkg-config: exit status 1")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A:\nMake sure your pkg config path covers the installation:\nif your libgit2.pc in ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/lib64/pkgconfig"),"(like centos)"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"export PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib64:/usr/local/lib64/pkgconfig")),(0,o.kt)("p",{parentName:"blockquote"},"else if your libgit2.pc in ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/pkgconfig"),"(like ubuntu)"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"export PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib:/usr/local/lib/pkgconfig")),(0,o.kt)("p",{parentName:"blockquote"},"else consider install pkgconfig or rebuild the libgit2")),(0,o.kt)("h3",{id:"macos"},"MacOS"),(0,o.kt)("p",null,"NOTE: ",(0,o.kt)("strong",{parentName:"p"},"Do NOT")," install libgit2 via ",(0,o.kt)("inlineCode",{parentName:"p"},"MacPorts")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"homebrew"),", install from source instead."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew install cmake\ngit clone https://github.com/libgit2/libgit2.git\ncd libgit2\ngit checkout v1.3.0\nmkdir build\ncd build\ncmake ..\nmake\nmake install\n")),(0,o.kt)("h4",{id:"troubleshooting-macos"},"Troubleshooting (MacOS)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Q: I got an error saying: ",(0,o.kt)("inlineCode",{parentName:"p"},'pkg-config: exec: "pkg-config": executable file not found in $PATH'))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A:"),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"Make sure you have pkg-config installed:")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"brew install pkg-config")),(0,o.kt)("ol",{parentName:"blockquote",start:2},(0,o.kt)("li",{parentName:"ol"},"Make sure your pkg config path covers the installation:\n",(0,o.kt)("inlineCode",{parentName:"li"},"export PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib:/usr/local/lib/pkgconfig")))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null))}c.isMDXComponent=!0}}]);