(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-384e15cc"],{"0c5e":function(t,a,n){"use strict";var s=n("a4ea"),e=n.n(s);e.a},"0c68":function(t,a,n){t.exports=n.p+"img/20.2ba58cfe.png"},4376:function(t,a,n){t.exports=n.p+"img/1.5d4f7e9c.png"},"4a4e":function(t,a,n){t.exports=n.p+"img/10.cb9e7e38.png"},5096:function(t,a,n){t.exports=n.p+"img/50.a6d19bb3.png"},"7f91":function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"ssc"},[s("div",{staticClass:"van-nav-bar van-hairline--bottom",staticStyle:{position:"fixed",width:"100%",top:"0"}},[s("div",{staticClass:"van-nav-bar__left",on:{click:t.onClickLeft}},[s("i",{staticClass:"van-icon van-icon-arrow-left van-nav-bar__arrow"}),s("span",{staticClass:"van-nav-bar__text"})]),s("div",{staticClass:"van-nav-bar__title van-ellipsis",on:{click:function(a){t.titleTopShow=!0}}},[t._v(t._s(t.title)+" "),s("van-icon",{attrs:{name:"exchange",color:"#666"}})],1),s("div",{staticClass:"van-nav-bar__right",on:{click:function(a){t.titleShow=!0}}},[t._m(0)])]),s("van-popup",{style:{height:"70%"},attrs:{position:"top"},model:{value:t.titleTopShow,callback:function(a){t.titleTopShow=a},expression:"titleTopShow"}},[s("div",{staticClass:"gameL"},[s("p",[t._v(" "+t._s(t.title)+" ")]),t._l(10,(function(a){return[s("div",{key:a},[s("van-divider",{attrs:{"content-position":"left"}},[t._v("时时彩")]),s("van-row",{attrs:{type:"flex",justify:"space-around"}},[s("van-col",{attrs:{span:"7"}},[t._v("重庆时时彩")]),s("van-col",{attrs:{span:"7"}},[t._v("一分时时彩")]),s("van-col",{attrs:{span:"7"}},[t._v("急速时时彩")])],1)],1)]}))],2)]),s("van-popup",{style:{width:"60%",height:"100%"},attrs:{position:"right"},model:{value:t.titleShow,callback:function(a){t.titleShow=a},expression:"titleShow"}},[s("p",[s("van-row",[s("van-col",{attrs:{span:"6"}},[s("van-image",{attrs:{round:"",width:"30px",height:"30px",src:"https://img.yzcdn.cn/vant/cat.jpeg"}})],1),s("van-col",{attrs:{span:"18"}},[s("p",{staticStyle:{margin:"5px",float:"left","font-weight":"600"}},[t._v("joe888")])])],1)],1),s("p",{staticStyle:{"text-align":"center"}},[s("van-button",{attrs:{type:"primary",size:"mini",to:"/logIn"}},[t._v("登录")]),s("van-button",{attrs:{type:"primary",size:"mini",to:"/logOut"}},[t._v("注册")])],1),s("p",{staticStyle:{"text-align":"center"}},[s("van-button",{attrs:{type:"primary",size:"mini"}},[t._v("充值")]),s("van-button",{attrs:{type:"primary",size:"mini"}},[t._v("提现")])],1),s("van-cell",{attrs:{title:"余额",label:"200356.51",clickable:"",icon:"location-o"}}),s("van-cell",{attrs:{title:"走势图",clickable:"",icon:"location-o"}}),s("van-cell",{attrs:{title:"投注记录",clickable:"",icon:"location-o"}}),s("van-cell",{attrs:{title:"玩法说明",clickable:"",icon:"location-o"}}),s("van-cell",{attrs:{title:"消息中心",clickable:"",icon:"location-o"}}),s("van-cell",{attrs:{title:"在线客服",clickable:"",icon:"location-o"}})],1),s("van-row",{staticStyle:{"padding-top":"5px","box-sizing":"border-box"}},[s("van-col",{attrs:{span:"6"}},[t._v("第 1066 期")]),s("van-col",{attrs:{span:"18"}},t._l(5,(function(a,n){return s("span",{key:n},[t._v(t._s(a))])})),0)],1),s("van-row",[s("van-col",{attrs:{span:"6"}},[t._v("距 1067 期")]),s("van-col",{attrs:{span:"18"}},[s("van-count-down",{staticStyle:{display:"inline-block","font-size":"15px","margin-top":"1px"},attrs:{time:13e4},on:{finish:t.out}})],1)],1),s("div",{staticClass:"gameBottom"}),s("div",{staticClass:"history",class:{isHistoryShow:t.isHistoryShow,isHistoryShow_:!t.isHistoryShow}},t._l(10,(function(a){return s("p",{key:a},[s("b",[t._v("第 1008 期")]),t._l(5,(function(a,n){return s("span",{key:n},[t._v(t._s(a))])}))],2)})),0),s("p",{staticClass:"button_",on:{click:function(a){t.isHistoryShow=!t.isHistoryShow}}},[t._v(" 点击 "),t.isHistoryShow?s("van-icon",{staticStyle:{top:"2px"},attrs:{name:"arrow-up"}}):s("van-icon",{staticStyle:{top:"2px"},attrs:{name:"arrow-down"}}),t._v(" 展开 ")],1),s("div",{staticClass:"gamgTitle"},[s("div"),s("van-dropdown-menu",{staticStyle:{height:"40px"},attrs:{"active-color":"#ee0a24"}},[s("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.value1,callback:function(a){t.value1=a},expression:"value1"}})],1)],1),s("van-sidebar",{model:{value:t.activeKey,callback:function(a){t.activeKey=a},expression:"activeKey"}},t._l(13,(function(t){return s("van-sidebar-item",{key:t,attrs:{title:"标签名称"}})})),1),s("div",{staticClass:"gameBox"},[s("div",{staticClass:"gameBox-1"},[s("van-tag",{attrs:{type:"warning",size:"large"},on:{click:t.gameText}},[s("van-icon",{attrs:{name:"info-o"}}),t._v(" \n      ")],1)],1),t._l(t.gamelist,(function(a,n){return[s("p",{key:n},[s("b",[t._v(t._s(a.title))]),t._l(a.status,(function(a,n){return s("span",{key:n},[t._v(t._s(a.t))])}))],2),s("div",{key:n+100,staticClass:"gameBox-2"},t._l(a.number,(function(a,n){return s("div",{key:n},[s("button",{staticClass:"btn_game"},[s("span",[t._v(t._s(a.num))]),s("b",[s("i",[t._v(t._s(a.num))]),s("i",[t._v("@"+t._s(a.bar))])])])])})),0)]}))],2),s("div",{staticClass:"van-submit-bar"},[s("div",{staticClass:"van-submit-bar__bar"},[s("div",[s("van-checkbox",{model:{value:t.zhuiHao,callback:function(a){t.zhuiHao=a},expression:"zhuiHao"}},[t._v("追号")])],1),t._m(1),s("button",{staticClass:"van-button--disabled van-button van-button--danger van-button--normal van-button--round van-submit-bar__button van-submit-bar__button--danger",on:{click:t.goToBet}},[s("span",{staticClass:"van-button__text"},[t._v("去投注")])])])]),s("van-action-sheet",{attrs:{"safe-area-inset-bottom":!0,title:"普通投注"},model:{value:t.showTou,callback:function(a){t.showTou=a},expression:"showTou"}},[s("div",{staticClass:"content"},[s("p",{staticClass:"content-1"},[s("span",[t._v(" 玩法： ")]),t._v(" 数字盘-定位胆 ")]),s("p",{staticClass:"content-2"},[s("span",[t._v(" 赔率： ")]),t._v(" 9.8 ")]),s("p",{staticClass:"content-3"},[s("span",[t._v(" 注数： ")]),t._v(" 共 10 注，19.8 元 ")]),s("p",{staticClass:"content-4"},[s("span",[t._v(" 单注： ")]),s("van-stepper",{staticStyle:{display:"inline-block"},attrs:{"input-width":"50px"},model:{value:t.oneMoney,callback:function(a){t.oneMoney=a},expression:"oneMoney"}}),s("van-tag",{attrs:{plain:"",type:"danger",size:"large"}},[t._v("元")]),s("van-tag",{attrs:{plain:"",type:"danger",size:"large"}},[t._v("分")]),s("van-tag",{attrs:{plain:"",type:"danger",size:"large"}},[t._v("角")]),s("van-tag",{staticStyle:{float:"right"},attrs:{round:"",type:"danger",size:"large"}},[t._v(" 重置 ")])],1),s("p",{staticClass:"content-5"},[s("span",[s("img",{attrs:{src:n("4376"),alt:"",srcset:""}})]),s("span",[s("img",{attrs:{src:n("4a4e"),alt:"",srcset:""}})]),s("span",[s("img",{attrs:{src:n("0c68"),alt:"",srcset:""}})]),s("span",[s("img",{attrs:{src:n("5096"),alt:"",srcset:""}})]),s("span",[s("img",{attrs:{src:n("e785"),alt:"",srcset:""}})]),s("span",[s("img",{attrs:{src:n("c388"),alt:"",srcset:""}})]),s("span",[s("img",{attrs:{src:n("82f9"),alt:"",srcset:""}})])]),s("p",{staticClass:"content-6"},[t._v(" 若中奖单住最高可中 19.8 元 ")]),s("p",{staticClass:"content-7"},[s("van-button",{attrs:{round:"",type:"info"},on:{click:t.sum}},[t._v(" 立即下注 "),s("van-icon",{staticStyle:{position:"relative",top:"5px"},attrs:{name:"cash-back-record",size:"20px"}})],1)],1)])]),s("van-action-sheet",{attrs:{"safe-area-inset-bottom":!0,title:"追号投注"},model:{value:t.showZhui,callback:function(a){t.showZhui=a},expression:"showZhui"}},[s("div",{staticClass:"content"},[s("p",{staticClass:"content-1"},[s("span",[t._v(" 玩法： ")]),t._v(" 数字盘-定位胆 ")]),s("p",{staticClass:"content-2"},[s("span",[t._v(" 赔率： ")]),t._v(" 9.8 ")]),s("p",{staticClass:"content-3"},[s("span",[t._v(" 投注详情： ")]),t._v(" 共 10 期，19.8 元 ")]),s("p",{staticClass:"content-4"},[s("span",[t._v(" 追号期数： ")]),s("van-stepper",{staticStyle:{display:"inline-block"},attrs:{"input-width":"50px"},model:{value:t.oneMoney,callback:function(a){t.oneMoney=a},expression:"oneMoney"}})],1),s("p",{staticClass:"content-4"},[s("span",[t._v(" 单注金额： ")]),s("van-stepper",{staticStyle:{display:"inline-block"},attrs:{"input-width":"50px"},model:{value:t.oneMoney,callback:function(a){t.oneMoney=a},expression:"oneMoney"}}),s("van-tag",{attrs:{plain:"",type:"danger",size:"large"}},[t._v("元")]),s("van-tag",{attrs:{plain:"",type:"danger",size:"large"}},[t._v("分")]),s("van-tag",{attrs:{plain:"",type:"danger",size:"large"}},[t._v("角")]),s("van-tag",{staticStyle:{float:"right"},attrs:{round:"",type:"danger",size:"large"}},[t._v(" 重置 ")])],1),s("p",{staticClass:"content-3"},[s("span",[t._v(" 追号类型： ")]),s("van-radio-group",{model:{value:t.radio,callback:function(a){t.radio=a},expression:"radio"}},[s("van-radio",{attrs:{name:"1"}},[t._v("普通追号")]),s("van-radio",{attrs:{name:"2"}},[t._v("翻倍追号")])],1)],1),s("p",{staticClass:"content-4"},[s("span",[t._v(" 追号番数： ")]),s("van-stepper",{staticStyle:{display:"inline-block"},attrs:{"input-width":"50px"},model:{value:t.oneMoney,callback:function(a){t.oneMoney=a},expression:"oneMoney"}})],1),s("div",{staticClass:"content-8"},[s("table",{staticClass:"content-table",attrs:{border:"0",cellspacing:"0"}},[s("tr",[s("th",[t._v("期数")]),s("th",[t._v("倍数")]),s("th",[t._v("成本")]),s("th",[t._v("盈利")]),s("th",[t._v("利率")])]),t._l(10,(function(a){return s("tr",{key:a},[s("td",[t._v("00"+t._s(16+a))]),s("td",[t._v("1")]),s("td",[t._v("2")]),s("td",[t._v("17.8")]),s("td",[t._v("560%")])])}))],2)]),s("p",[s("van-checkbox",{attrs:{"checked-color":"#07c160"},model:{value:t.stop,callback:function(a){t.stop=a},expression:"stop"}},[t._v("中奖即停")])],1),s("p",{staticClass:"content-7"},[s("van-button",{attrs:{round:"",type:"info"},on:{click:t.sum}},[t._v(" 立即下注 "),s("van-icon",{staticStyle:{position:"relative",top:"5px"},attrs:{name:"cash-back-record",size:"20px"}})],1)],1)])])],1)},e=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("span",{staticClass:"van-nav-bar__text"},[n("i",{staticClass:"van-icon van-icon-wap-nav",staticStyle:{"font-size":"22px"}})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"van-submit-bar__text"},[n("span",[t._v("注数:")]),n("span",{staticClass:"van-submit-bar__price"},[n("span",{staticClass:"van-submit-bar__price van-submit-bar__price--integer"},[t._v("  30")]),t._v("\n                  注\n              ")])])}],i={name:"ssc",components:{},data:function(){return{title:"game",activeKey:0,value1:0,isHistoryShow:!1,zhuiHao:!0,showTou:!1,showZhui:!1,oneMoney:1,stop:!0,titleShow:!1,titleTopShow:!1,radio:"1",option1:[{text:"直选复式",value:0},{text:"直选和值",value:1},{text:"直选跨度",value:2},{text:"前三组合",value:3},{text:"组三复式",value:4},{text:"组六复式",value:5},{text:"组选和值",value:6},{text:"组选包胆",value:7},{text:"和值尾数",value:8}],gamelist:[{title:"万位",status:[{t:"大",s:!1},{t:"小",s:!1},{t:"单",s:!1},{t:"双",s:!1},{t:"奇",s:!1},{t:"偶",s:!1},{t:"清",s:!1}],number:[{num:0,bar:9.8},{num:1,bar:9.8},{num:2,bar:9.8},{num:3,bar:9.8},{num:4,bar:9.8},{num:5,bar:9.8},{num:6,bar:9.8},{num:7,bar:9.8},{num:8,bar:9.8},{num:9,bar:9.8}]},{title:"千位",status:[{t:"大",s:!1},{t:"小",s:!1},{t:"单",s:!1},{t:"双",s:!1},{t:"奇",s:!1},{t:"偶",s:!1},{t:"清",s:!1}],number:[{num:0,bar:9.8},{num:1,bar:9.8},{num:2,bar:9.8},{num:3,bar:9.8},{num:4,bar:9.8},{num:5,bar:9.8},{num:6,bar:9.8},{num:7,bar:9.8},{num:8,bar:9.8},{num:9,bar:9.8}]},{title:"百位",status:[{t:"大",s:!1},{t:"小",s:!1},{t:"单",s:!1},{t:"双",s:!1},{t:"奇",s:!1},{t:"偶",s:!1},{t:"清",s:!1}],number:[{num:0,bar:9.8},{num:1,bar:9.8},{num:2,bar:9.8},{num:3,bar:9.8},{num:4,bar:9.8},{num:5,bar:9.8},{num:6,bar:9.8},{num:7,bar:9.8},{num:8,bar:9.8},{num:9,bar:9.8}]},{title:"十位",status:[{t:"大",s:!1},{t:"小",s:!1},{t:"单",s:!1},{t:"双",s:!1},{t:"奇",s:!1},{t:"偶",s:!1},{t:"清",s:!1}],number:[{num:0,bar:9.8},{num:1,bar:9.8},{num:2,bar:9.8},{num:3,bar:9.8},{num:4,bar:9.8},{num:5,bar:9.8},{num:6,bar:9.8},{num:7,bar:9.8},{num:8,bar:9.8},{num:9,bar:9.8}]},{title:"个位",status:[{t:"大",s:!1},{t:"小",s:!1},{t:"单",s:!1},{t:"双",s:!1},{t:"奇",s:!1},{t:"偶",s:!1},{t:"清",s:!1}],number:[{num:0,bar:9.8},{num:1,bar:9.8},{num:2,bar:9.8},{num:3,bar:9.8},{num:4,bar:9.8},{num:5,bar:9.8},{num:6,bar:9.8},{num:7,bar:9.8},{num:8,bar:9.8},{num:9,bar:9.8}]}]}},mounted:function(){this.title=this.$route.query.data},methods:{out:function(){this.$toast(":倒计时结束!")},onClickLeft:function(){this.$toast("按钮 > 返回"),this.$router.go(-1)},gameText:function(){this.$dialog.alert({title:"玩法说明",message:"定位胆：在任意位置选择1个或多个号码进行投注。",closeOnClickOverlay:!0}).then((function(){}))},goToBet:function(){this.showZhui=!1,this.showTou=!1,this.zhuiHao?this.showZhui=!0:this.showTou=!0},sum:function(){this.$toast.success("投注成功！"),this.showZhui=!1,this.showTou=!1}}},o=i,r=(n("0c5e"),n("5511")),c=Object(r["a"])(o,s,e,!1,null,null,null);a["default"]=c.exports},"82f9":function(t,a,n){t.exports=n.p+"img/10000.5e5b7445.png"},a4ea:function(t,a,n){},c388:function(t,a,n){t.exports=n.p+"img/1000.c53fbec8.png"},e785:function(t,a,n){t.exports=n.p+"img/100.f8e5de1e.png"}}]);
//# sourceMappingURL=chunk-384e15cc.8a99d35f.js.map