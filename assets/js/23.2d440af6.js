(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{309:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1、scss和sass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、scss和sass","aria-hidden":"true"}},[s._v("#")]),s._v(" 1、"),t("code",[s._v("SCSS")]),s._v("和"),t("code",[s._v("Sass")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("Sass")]),s._v(" 和 "),t("code",[s._v("SCSS")]),s._v(" 其实是同一种东西，我们平时都称之为 "),t("code",[s._v("Sass")]),s._v("。"),t("strong",[s._v("他们都是用"),t("code",[s._v("Ruby")]),s._v("开发 Css 预处理器，"),t("code",[s._v("boostrap4")]),s._v("已经将"),t("code",[s._v("less")]),s._v("换成了"),t("code",[s._v("sass")]),s._v("。")])])]),s._v(" "),t("p",[s._v("不同之处：")]),s._v(" "),t("ul",[t("li",[s._v("文件拓展名：分别是"),t("code",[s._v("sass")]),s._v("和"),t("code",[s._v("scss")])]),s._v(" "),t("li",[s._v("缩进："),t("code",[s._v("sass")]),s._v("严格缩进（类似 python 和 ruby），"),t("code",[s._v("scss")]),s._v("是 css 的缩进样式")]),s._v(" "),t("li",[s._v("是否兼容 css 语法：显然，由于缩进的不同，"),t("code",[s._v("scss")]),s._v("是兼容原生的 css 写法。")])]),s._v(" "),t("p",[s._v("总的来说，"),t("code",[s._v("scss")]),s._v("是"),t("code",[s._v("sass")]),s._v("升级版，兼容 css 语法，并且有着自己的独立语法。")]),s._v(" "),t("h2",{attrs:{id:"_2、环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、环境配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 2、环境配置")]),s._v(" "),t("ol",[t("li",[s._v("安装 ruby：windows 注意添加注册表路径")]),s._v(" "),t("li",[s._v("安装 sass：利用 ruby 的包管理器"),t("code",[s._v("gem")]),s._v("安装，命令行运行:"),t("code",[s._v("gem install sass")])]),s._v(" "),t("li",[s._v("升级和删除 sass："),t("code",[s._v("gem update/uninstall sass")])])]),s._v(" "),t("p",[t("strong",[s._v("如果国外源过慢？")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("gem sources --remove https://rubygems.org/\ngem sources -a https://ruby.taobao.org/\ngem sources -l "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看是不是淘宝源")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_3、编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、编译","aria-hidden":"true"}},[s._v("#")]),s._v(" 3、编译")]),s._v(" "),t("blockquote",[t("p",[s._v("编译指的是：将 scss 文件编译为 css 文件的过程。")])]),s._v(" "),t("h3",{attrs:{id:"_3-1-源文件编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-源文件编译","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1 源文件编译")]),s._v(" "),t("p",[t("strong",[s._v("单文件编译")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式：sass 待编译的Sass文件名:编译后CSS文件名")]),s._v("\nscss scss.scss:css.css\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("实时自动编译")])]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("--watch")]),s._v("参数即可，scss 会在源文件改动时候，自动重新编译。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("scss --watch scss.scss:css.css "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 方便")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-2-输出文件风格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-输出文件风格","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.2 输出文件风格")]),s._v(" "),t("blockquote",[t("p",[s._v("命令行编译时候，使用"),t("code",[s._v("--style")]),s._v("参数。")])]),s._v(" "),t("p",[s._v("一段 scss 代码：")]),s._v(" "),t("div",{staticClass:"language-scss line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("h1 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("strong",[s._v("默认：嵌套输出方式 nested")])]),s._v(" "),t("div",{staticClass:"language-scss line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body h1 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("展开输出方式 expanded")])]),s._v(" "),t("div",{staticClass:"language-scss line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body h1 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("紧凑输出方式 compact")])]),s._v(" "),t("div",{staticClass:"language-scss line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body h1 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("压缩输出方式 compressed")])]),s._v(" "),t("div",{staticClass:"language-scss line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body h1 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_4-注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-注意","aria-hidden":"true"}},[s._v("#")]),s._v(" 4. 注意")]),s._v(" "),t("blockquote",[t("p",[s._v("最新的 scss 开启了"),t("code",[s._v("sourcemap")]),s._v("功能，"),t("code",[s._v("--sourcemap")]),s._v("参数默认添加。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);