(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"0160":function(t,e,a){},"0eb5":function(t,e,a){"use strict";var i=a("9e31"),s=a.n(i);s.a},1206:function(t,e,a){"use strict";var i=a("becd"),s=a.n(i);s.a},"6bc6":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-grow-1 flex-column"},[a("v-row",{staticClass:"flex-grow-0",attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",xl:"4"}},[a("sales-card",{staticClass:"h-full",staticStyle:{"min-height":"380px"},attrs:{value:1837.32,percentage:3.2,loading:t.isLoading1,"percentage-label":t.$t("dashboard.lastweek"),"action-label":t.$t("dashboard.viewReport")}})],1),a("v-col",{attrs:{cols:"12",md:"6",xl:"4"}},[a("activity-card",{staticClass:"h-full"})],1),a("v-col",{attrs:{cols:"12",md:"6",xl:"4"}},[a("sources-card",{staticClass:"h-full",staticStyle:{"min-height":"380px"},attrs:{label:t.$t("dashboard.sources"),color:"#8c9eff",value:432,percentage:4.3,loading:t.isLoading2,"percentage-label":t.$t("dashboard.lastweek"),series:[44,55,41,17]}})],1)],1),a("v-row",{staticClass:"flex-grow-0",attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",lg:"6"}},[a("table-card",{staticClass:"h-full",attrs:{label:t.$t("dashboard.recentOrders")}})],1),a("v-col",{attrs:{cols:"12",lg:"6"}},[a("div",{staticClass:"d-flex flex-column flex-grow-1 h-full"},[a("track-card",{staticClass:"h-full",attrs:{label:t.$t("dashboard.orders"),color:"#8c9eff",value:432,percentage:4.3,"percentage-label":t.$t("dashboard.lastweek"),loading:t.isLoading3,series:t.ordersSeries}}),a("track-card",{staticClass:"h-full mt-2",attrs:{label:t.$t("dashboard.customers"),color:t.theme.success,value:178,percentage:2.12,"percentage-label":t.$t("dashboard.lastweek"),loading:t.isLoading3,series:t.customersSeries}})],1)])],1),a("v-row",{staticClass:"flex-grow-0",attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",xl:"6"}},[a("todo-card",{staticStyle:{"min-height":"380px"}})],1),a("v-col",{attrs:{cols:"12",xl:"6"}},[a("tickets-card",{staticClass:"h-full",attrs:{label:t.$t("dashboard.tickets"),color:"#8c9eff",value:32,percentage:-8.3,"percentage-label":t.$t("dashboard.lastweek"),loading:t.isLoading4,series:t.ordersSeries}})],1)],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[a("div",[t._v(t._s(t.$t("dashboard.activity")))]),a("v-spacer"),a("v-menu",{attrs:{"offset-y":"",left:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{icon:""}},i),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",{attrs:{dense:""}},t._l(t.menu,(function(e,i){return a("v-list-item",{key:i,attrs:{to:e.link,exact:e.exact,disabled:e.disabled,link:""}},[a("v-list-item-icon",[a("v-icon",{class:{"grey--text":e.disabled},attrs:{small:""}},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})),1)],1)],1),a("v-card-text",[a("v-timeline",{staticClass:"pa-0",attrs:{dense:"","align-top":""}},t._l(t.activity,(function(e,i){return a("v-timeline-item",{key:i,attrs:{color:e.color,small:""}},[a("strong",[t._v(t._s(e.what))]),a("div",{staticClass:"caption"},[a("div",[t._v(t._s(e.where))]),a("div",{staticClass:"grey--text"},[t._v(t._s(e.when))])])])})),1)],1)],1)},r=[],o={data:function(){return{menu:[{icon:"mdi-refresh",text:"Refresh"},{icon:"mdi-delete-outline",text:"Clear"}],activity:[{what:"New Emoji",where:"Chat App",when:"4pm",color:"primary"},{what:"Design Stand Up",where:"Chat App",when:"2pm",color:"purple"},{what:"Lunch Break",where:"",when:"11am",color:"primary"},{what:"Answer Emails",where:"Work work",when:"9pm",color:"teal lighten-3"}]}}},l=o,c=a("2877"),d=a("6544"),u=a.n(d),v=a("8336"),h=a("b0afa"),m=a("99d9"),p=a("132d"),f=a("8860"),g=a("da13"),b=a("5d23"),y=a("34c3"),x=a("e449"),C=a("2fa4"),_=a("5530"),k=(a("0160"),a("58df")),w=a("7560"),O=Object(k["a"])(w["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(_["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),I=(a("c96a"),a("9d26")),S=a("a9ad"),$=Object(k["a"])(S["a"],w["a"]),T=$.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(I["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=this.setBackgroundColor(this.color);return this.$createElement("div",Object(_["a"])({staticClass:"v-timeline-item__inner-dot"},t),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(t){var e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:Object(_["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},e)}}),V=Object(c["a"])(l,n,r,!1,null,null,null),j=V.exports;u()(V,{VBtn:v["a"],VCard:h["a"],VCardText:m["c"],VCardTitle:m["d"],VIcon:p["a"],VList:f["a"],VListItem:g["a"],VListItemContent:b["b"],VListItemIcon:y["a"],VListItemTitle:b["d"],VMenu:x["a"],VSpacer:C["a"],VTimeline:O,VTimelineItem:T});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"d-flex flex-grow-1 primary darken-4",attrs:{dark:""}},[t.loading?a("div",{staticClass:"d-flex flex-grow-1 align-center justify-center"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):a("div",{staticClass:"d-flex flex-column flex-grow-1"},[a("v-card-title",[a("div",[t._v(t._s(t.$t(t.label)))]),a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$emit("action-clicked")}}},[t._v(t._s(t.actionLabel))])],1),a("div",{staticClass:"d-flex flex-column flex-grow-1"},[a("div",{staticClass:"pa-2"},[a("div",{staticClass:"text-h4"},[t._v(" "+t._s(t._f("formatCurrency")(26358.49))+" ")]),a("div",{staticClass:"primary--text text--lighten-1 mt-1"},[t._v(" "+t._s(t._f("formatCurrency")(7123.21))+" "+t._s(t.$t("dashboard.lastweek"))+" ")])]),a("v-spacer"),a("div",{staticClass:"px-2 pb-2"},[a("div",{staticClass:"title mb-1"},[t._v(t._s(t.$t("dashboard.weeklySales")))]),a("div",{staticClass:"d-flex align-center"},[a("div",{staticClass:"text-h4"},[t._v(" "+t._s(t._f("formatCurrency")(t.value))+" ")]),a("v-spacer"),a("div",{staticClass:"d-flex flex-column text-right"},[a("div",{staticClass:"font-weight-bold"},[a("trend-percent",{attrs:{value:t.percentage}})],1),a("div",{staticClass:"caption"},[t._v(t._s(t.percentageLabel))])])],1)])],1),a("apexchart",{attrs:{type:"area",height:"120",options:t.chartOptions,series:t.series}})],1)])},D=[],B=(a("99af"),a("b0c0"),a("a9e3"),a("c1df")),E=a.n(B),A=(a("1321"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[0===t.value?a("span",[t._v(" "+t._s(t.value)+"% ")]):t.value>0?a("span",{staticClass:"success--text"},[a("v-icon",{attrs:{small:"",color:"success"}},[t._v("mdi-arrow-top-right")]),t._v(" "+t._s(t.value)+"% ")],1):a("span",{staticClass:"error--text"},[a("v-icon",{attrs:{small:"",color:"error"}},[t._v("mdi-arrow-bottom-right")]),t._v(" "+t._s(Math.abs(t.value))+"% ")],1)])}),P=[],N={props:{value:{type:Number,default:0}}},M=N,J=Object(c["a"])(M,A,P,!1,null,null,null),R=J.exports;function Z(t){return t?E()(t).format("D MMM"):""}u()(J,{VIcon:p["a"]});var H={components:{TrendPercent:R},props:{value:{type:Number,default:0},percentage:{type:Number,default:0},percentageLabel:{type:String,default:"vs. last week"},series:{type:Array,default:function(){return[{name:"Sales",data:[11,32,45,32,34,52,41]}]}},xaxis:{type:Object,default:function(){return{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-20T00:00:00.000Z","2018-09-21T00:00:00.000Z","2018-09-22T00:00:00.000Z","2018-09-23T00:00:00.000Z","2018-09-24T00:00:00.000Z","2018-09-25T00:00:00.000Z"]}}},label:{type:String,default:"dashboard.sales"},actionLabel:{type:String,default:"View Report"},options:{type:Object,default:function(){return{}}},loading:{type:Boolean,default:!1}},computed:{chartOptions:function(){var t=this.$vuetify.theme.isDark?this.$vuetify.theme.themes.dark.primary:this.$vuetify.theme.themes.light.primary;return Object(_["a"])({chart:{height:120,type:"area",sparkline:{enabled:!0},animations:{speed:400}},colors:[t],fill:{type:"solid",colors:[t],opacity:.15},stroke:{curve:"smooth",width:2},xaxis:this.xaxis,tooltip:{followCursor:!0,theme:"dark",custom:function(t){t.ctx;var e=t.series,a=t.seriesIndex,i=t.dataPointIndex,s=t.w,n=s.config.series[a].name;return'<div class="rounded-lg pa-1 caption">\n              <div class="font-weight-bold">'.concat(Z(s.globals.labels[i]),"</div>\n              <div>").concat(e[a][i]," ").concat(n,"</div>\n            </div>")}}},this.options)}}},W=H,z=a("490a"),G=Object(c["a"])(W,L,D,!1,null,null,null),Y=G.exports;u()(G,{VBtn:v["a"],VCard:h["a"],VCardTitle:m["d"],VProgressCircular:z["a"],VSpacer:C["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"d-flex flex-column flex-grow-1"},[t.loading?a("div",{staticClass:"d-flex flex-grow-1 align-center justify-center"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):a("div",{staticClass:"d-flex flex-column flex-grow-1"},[a("v-card-title",[t._v(" "+t._s(t.label)+" ")]),a("div",{staticClass:"d-flex flex-column flex-grow-1"},[a("div",{staticClass:"px-2 pb-2"},[a("div",{staticClass:"d-flex align-center"},[a("div",{staticClass:"text-h4"},[t._v(t._s(t.value))]),a("v-spacer"),a("div",{staticClass:"d-flex flex-column text-right"},[a("div",{staticClass:"font-weight-bold"},[a("trend-percent",{attrs:{value:t.percentage}})],1),a("div",{staticClass:"caption"},[t._v(t._s(t.percentageLabel))])])],1)]),a("v-spacer"),a("apexchart",{attrs:{type:"area",height:"60",options:t.chartOptions,series:t.series}})],1)],1)])},U=[];function X(t){return t?E()(t).format("D MMM"):""}var q={components:{TrendPercent:R},props:{series:{type:Array,default:function(){return[]}},label:{type:String,default:""},color:{type:String,default:"#333333"},value:{type:Number,default:0},percentage:{type:Number,default:0},percentageLabel:{type:String,default:"vs. last week"},options:{type:Object,default:function(){return{}}},loading:{type:Boolean,default:!1}},computed:{chartOptions:function(){return Object(_["a"])({chart:{animations:{speed:400,animateGradually:{enabled:!1}},width:"100%",height:60,type:"area",sparkline:{enabled:!0}},colors:[this.color],fill:{type:"solid",colors:[this.color],opacity:.15},stroke:{curve:"smooth",width:2},xaxis:{type:"datetime"},tooltip:{followCursor:!0,theme:"dark",custom:function(t){t.ctx,t.series;var e=t.seriesIndex,a=t.dataPointIndex,i=t.w,s=i.config.series[e].name,n=i.config.series[e].data[a];return'<div class="rounded-lg pa-1 caption">\n              <div class="font-weight-bold">'.concat(X(n[0]),"</div>\n              <div>").concat(n[1]," ").concat(s,"</div>\n            </div>")}}},this.options)}}},Q=q,K=Object(c["a"])(Q,F,U,!1,null,null,null),tt=K.exports;u()(K,{VCard:h["a"],VCardTitle:m["d"],VProgressCircular:z["a"],VSpacer:C["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[t._v(t._s(t.label))]),a("v-data-table",{attrs:{headers:t.headers,items:t.items,"hide-default-footer":""},scopedSlots:t._u([{key:"item.id",fn:function(e){var i=e.item;return[a("div",{staticClass:"font-weight-bold"},[t._v("# "),a("copy-label",{attrs:{text:i.id}})],1)]}},{key:"item.user",fn:function(e){var i=e.item;return[a("div",{staticClass:"d-flex align-center py-1"},[a("v-avatar",{staticClass:"elevation-1 grey lighten-3",attrs:{size:"40"}},[a("v-img",{attrs:{src:i.user.avatar}})],1),a("div",{staticClass:"ml-1"},[a("div",{staticClass:"font-weight-bold"},[t._v(t._s(i.user.name))]),a("div",{staticClass:"caption"},[a("copy-label",{attrs:{text:i.user.email}})],1)])],1)]}},{key:"item.date",fn:function(e){var i=e.item;return[a("div",[t._v(t._s(t._f("formatDate")(i.date)))])]}},{key:"item.company",fn:function(t){var e=t.item;return[a("copy-label",{attrs:{text:e.company}})]}},{key:"item.amount",fn:function(e){var a=e.item;return[t._v(" "+t._s(t._f("formatCurrency")(a.amount))+" ")]}},{key:"item.status",fn:function(e){var i=e.item;return[a("div",{staticClass:"font-weight-bold d-flex align-center text-no-wrap"},["PENDING"===i.status?a("div",{staticClass:"warning--text"},[a("v-icon",{attrs:{small:"",color:"warning"}},[t._v("mdi-circle-medium")]),a("span",[t._v("Pending")])],1):t._e(),"PAID"===i.status?a("div",{staticClass:"success--text"},[a("v-icon",{attrs:{small:"",color:"success"}},[t._v("mdi-circle-medium")]),a("span",[t._v("Paid")])],1):t._e()])]}},{key:"item.action",fn:function(e){var i=e.item;return[a("div",{staticClass:"actions"},[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.open(i)}}},[a("v-icon",[t._v("mdi-open-in-new")])],1)],1)]}}])})],1)},at=[],it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("div",t._g({ref:"copylabel",staticClass:"copylabel animate__faster",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.copy(e)}}},i),[t._v(t._s(t.text))])]}}])},[a("span",[t._v(t._s(t.tooltip))])])},st=[],nt={props:{text:{type:String,default:""},toastText:{type:String,default:"Copied to clipboard!"},animation:{type:String,default:"heartBeat"}},data:function(){return{tooltip:"Copy",timeout:null}},beforeDestroy:function(){this.timeout&&clearTimeout(this.timeout)},methods:{copy:function(){var t=this;this.$animate(this.$refs.copylabel,this.animation),this.$clipboard(this.text,this.toastText),this.tooltip="Copied!",this.timeout=setTimeout((function(){t.tooltip="Copy"}),2e3)}}},rt=nt,ot=(a("1206"),a("ade3")),lt=(a("9734"),a("4ad4")),ct=a("16b7"),dt=a("b848"),ut=a("75eb"),vt=a("f573"),ht=a("f2e7"),mt=a("80d2"),pt=a("d9bd"),ft=Object(k["a"])(S["a"],ct["a"],dt["a"],ut["a"],vt["a"],ht["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,a=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?e.offsetLeft:e.left,n=0;return this.top||this.bottom||i?n=s+e.width/2-a.width/2:(this.left||this.right)&&(n=s+(this.right?e.width:-a.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(n,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,a=t.content,i=!1!==this.attach?e.offsetTop:e.top,s=0;return this.top||this.bottom?s=i+(this.bottom?e.height:-a.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+e.height/2-a.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(s+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(mt["g"])(this.maxWidth),minWidth:Object(mt["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(mt["t"])(this,"activator",!0)&&Object(pt["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=lt["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===mt["x"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(ot["a"])(t,this.contentClass,!0),Object(ot["a"])(t,"menuable__content__active",this.isActive),Object(ot["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),gt=Object(c["a"])(rt,it,st,!1,null,"95422c1a",null),bt=gt.exports;u()(gt,{VTooltip:ft});var yt={components:{CopyLabel:bt},props:{label:{type:String,default:""}},data:function(){return{headers:[{text:"Order Id",align:"start",value:"id"},{text:"User",sortable:!1,value:"user"},{text:"Date",value:"date"},{text:"Company",value:"company"},{text:"Amount",value:"amount"},{text:"Status",value:"status"},{text:"",sortable:!1,align:"right",value:"action"}],items:[{id:"2837",user:{name:"John Simon",email:"johnsimon@blobhill.com",avatar:"/images/avatars/avatar1.svg"},date:"2020-05-10",company:"BlobHill",amount:52877,status:"PAID"},{id:"2838",user:{name:"Greg Cool J",email:"cool@caprimooner.com",avatar:"/images/avatars/avatar2.svg"},date:"2020-05-11",company:"Caprimooner",amount:2123,status:"PENDING"},{id:"2839",user:{name:"Samantha Bush",email:"bush@catloveisstilllove.com",avatar:"/images/avatars/avatar3.svg"},date:"2020-05-11",company:"CatLovers",amount:12313,status:"PENDING"},{id:"2840",user:{name:"Ben Howard",email:"ben@indiecoolers.com",avatar:"/images/avatars/avatar4.svg"},date:"2020-05-12",company:"IndieCoolers",amount:9873,status:"PAID"},{id:"2841",user:{name:"Jack Candy",email:"jack@candylooove.com",avatar:"/images/avatars/avatar5.svg"},date:"2020-05-13",company:"CandyLooove",amount:29573,status:"PAID"}]}},methods:{open:function(t){}}},xt=yt,Ct=a("8212"),_t=a("8fea"),kt=a("adda"),wt=Object(c["a"])(xt,et,at,!1,null,null,null),Ot=wt.exports;u()(wt,{VAvatar:Ct["a"],VBtn:v["a"],VCard:h["a"],VCardTitle:m["d"],VDataTable:_t["a"],VIcon:p["a"],VImg:kt["a"]});var It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"d-flex flex-column flex-grow-1"},[t.loading?a("div",{staticClass:"d-flex flex-grow-1 align-center justify-center"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):a("div",{staticClass:"d-flex flex-column flex-grow-1"},[a("v-card-title",[a("div",[t._v(t._s(t.label))]),a("v-spacer"),a("div",[a("v-select",{attrs:{solo:"",dense:"","hide-details":"","hide-selected":"",items:t.intervals},model:{value:t.selectedInterval,callback:function(e){t.selectedInterval=e},expression:"selectedInterval"}})],1)],1),a("div",{staticClass:"chart-wrap"},[a("apexchart",{attrs:{type:"donut",width:"85%",options:t.chartOptions,series:t.series}})],1)],1)])},St=[],$t={props:{series:{type:Array,default:function(){return[]}},label:{type:String,default:""},color:{type:String,default:"#333333"},value:{type:Number,default:0},percentage:{type:Number,default:0},percentageLabel:{type:String,default:"vs. last week"},options:{type:Object,default:function(){return{}}},loading:{type:Boolean,default:!1}},data:function(){return{selectedInterval:"Last 7 days",intervals:["Last 7 days","Last 28 days","Last month","Last year"]}},computed:{chartOptions:function(){return Object(_["a"])({chart:{type:"donut",animations:{speed:400},background:"transparent"},stroke:{show:!0,colors:[this.$vuetify.theme.isDark?"#333":"#fff"],width:1,dashArray:0},plotOptions:{pie:{expandOnClick:!1,donut:{size:"74%"}}},theme:{mode:this.$vuetify.theme.isDark?"dark":"light"},labels:["Referrals","Organic Search","Social Media","Others"],dataLabels:{enabled:!1},colors:["#2364aa","#3da5d9","#73bfb8","#fec601","#ea7317"],fill:{colors:["#2364aa","#3da5d9","#73bfb8","#fec601","#ea7317"]},legend:{offsetY:40,fontSize:"13px",fontFamily:"Quicksand",fontWeight:700},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{offsetY:0,position:"bottom"}}}]},this.options)}}},Tt=$t,Vt=(a("0eb5"),a("b974")),jt=Object(c["a"])(Tt,It,St,!1,null,"72402d9b",null),Lt=jt.exports;u()(jt,{VCard:h["a"],VCardTitle:m["d"],VProgressCircular:z["a"],VSelect:Vt["a"],VSpacer:C["a"]});var Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[t._v(t._s(t.label))]),a("v-data-table",{attrs:{headers:t.headers,items:t.items,"hide-default-footer":""},scopedSlots:t._u([{key:"item.id",fn:function(e){var i=e.item;return[a("div",{staticClass:"font-weight-bold"},[t._v("# "),a("copy-label",{attrs:{text:i.id}})],1)]}},{key:"item.user",fn:function(t){var e=t.item;return[a("div",{staticClass:"font-weight-bold"},[a("copy-label",{attrs:{text:e.user.email}})],1)]}},{key:"item.date",fn:function(e){var i=e.item;return[a("div",[t._v(t._s(t._f("formatDate")(i.date)))])]}},{key:"item.priority",fn:function(e){var i=e.item;return[a("v-chip",{staticClass:"font-weight-bold",class:{error:"High"===i.priority},attrs:{label:"",small:""}},[t._v(t._s(i.priority))])]}},{key:"item.status",fn:function(e){var i=e.item;return[a("div",{staticClass:"font-weight-bold d-flex align-center"},["CLOSED"===i.status?a("div",{staticClass:"secondary--text"},[a("v-icon",{attrs:{small:"",color:"secondary"}},[t._v("mdi-circle-medium")]),a("span",[t._v("Closed")])],1):t._e(),"OPEN"===i.status?a("div",{staticClass:"success--text"},[a("v-icon",{attrs:{small:"",color:"success"}},[t._v("mdi-circle-medium")]),a("span",[t._v("Open")])],1):t._e()])]}},{key:"item.action",fn:function(e){var i=e.item;return[a("div",{staticClass:"actions"},[a("v-btn",{attrs:{small:""},on:{click:function(e){return t.open(i)}}},[t._v(" Open Ticket ")])],1)]}}])})],1)},Bt=[],Et={components:{CopyLabel:bt},props:{label:{type:String,default:""}},data:function(){return{headers:[{text:"Ticket Id",align:"start",value:"id"},{text:"User",sortable:!1,value:"user"},{text:"Priority",value:"priority"},{text:"Status",value:"status"},{text:"Create Date",value:"date"},{text:"",sortable:!1,align:"right",value:"action"}],items:[{id:"423",user:{name:"John Simon",email:"johnsimon@blobhill.com",avatar:"/images/avatars/avatar1.svg"},date:"2020-05-10",priority:"Low",status:"OPEN"},{id:"424",user:{name:"Greg Cool J",email:"cool@caprimooner.com",avatar:"/images/avatars/avatar2.svg"},date:"2020-05-11",priority:"High",status:"CLOSED"},{id:"425",user:{name:"Samantha Bush",email:"bush@catloveisstilllove.com",avatar:"/images/avatars/avatar3.svg"},date:"2020-05-11",priority:"Low",status:"CLOSED"},{id:"426",user:{name:"Ben Howard",email:"ben@indiecoolers.com",avatar:"/images/avatars/avatar4.svg"},date:"2020-05-12",priority:"Low",status:"OPEN"},{id:"427",user:{name:"Jack Candy",email:"jack@candylooove.com",avatar:"/images/avatars/avatar5.svg"},date:"2020-05-13",priority:"High",status:"OPEN"}]}},methods:{open:function(t){}}},At=Et,Pt=a("cc20"),Nt=Object(c["a"])(At,Dt,Bt,!1,null,null,null),Mt=Nt.exports;u()(Nt,{VBtn:v["a"],VCard:h["a"],VCardTitle:m["d"],VChip:Pt["a"],VDataTable:_t["a"],VIcon:p["a"]});var Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tasks-page",{staticClass:"todo-card"})},Rt=[],Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("todo-list",{attrs:{tasks:t.incompleteTasks},on:{"edit-task":function(e){return t.$emit("edit-task",e)}}})},Ht=[],Wt=a("2f62"),zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"min-w-0"},[a("v-text-field",{staticClass:"pa-1 py-2 todo-filter elevation-1",attrs:{placeholder:"Filter tasks","prepend-inner-icon":"mdi-magnify","hide-details":"",block:"",clearable:"",solo:"",flat:""},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),a("v-divider"),0===t.tasks.length?a("div",[a("div",{staticClass:"px-1 py-6 text-center"},[t._v("All done! No more tasks!")])]):a("v-slide-y-transition",{attrs:{group:"",tag:"div"}},t._l(t.visibleTasks,(function(e){return a("div",{key:e.id,staticClass:"d-flex pa-2 task-item align-center",on:{click:function(a){return t.$emit("edit-task",e)}}},[a("v-checkbox",{staticClass:"mt-0 pt-0",attrs:{"input-value":e.completed,"hide-details":"","off-icon":"mdi-checkbox-blank-circle-outline","on-icon":"mdi-checkbox-marked-circle"},on:{click:function(a){a.stopPropagation(),e.completed?t.setIncomplete(e):t.setComplete(e)}}}),a("div",{staticClass:"task-item-content flex-grow-1",class:{complete:e.completed}},[a("div",{staticClass:"font-weight-bold",domProps:{textContent:t._s(e.title)}}),a("div",{domProps:{textContent:t._s(e.description)}}),a("div",t._l(e.labels,(function(e){return a("v-chip",{key:e,staticClass:"font-weight-bold mt-1 mr-1",attrs:{color:t.getLabelColor(e),outlined:"","x-small":""}},[t._v(" "+t._s(t.getLabelTitle(e))+" ")])})),1)]),a("div",{staticClass:"d-flex align-center"},[a("v-btn",{attrs:{icon:""},on:{click:function(a){return a.stopPropagation(),t.deleteTask(e)}}},[a("v-icon",[t._v("mdi-delete-outline")])],1)],1)],1)})),0)],1)},Gt=[],Yt=(a("4de4"),a("7db0"),a("caad"),a("07ac"),a("2532"),{props:{tasks:{type:Array,default:function(){return[]}}},data:function(){return{filter:""}},computed:Object(_["a"])(Object(_["a"])({},Object(Wt["e"])("todo-app",["labels"])),{},{visibleTasks:function(){var t=this;return this.filter?this.tasks.filter((function(e){return Boolean(Object.values(e).filter((function(t){return"string"===typeof t})).find((function(e){return e.includes(t.filter)})))})):this.tasks}}),methods:Object(_["a"])(Object(_["a"])({},Object(Wt["d"])("todo-app",{setComplete:"taskCompleted",setIncomplete:"taskIncomplete",deleteTask:"deleteTask"})),{},{getLabelColor:function(t){var e=this.labels.find((function(e){return e.id===t}));return e?e.color:""},getLabelTitle:function(t){var e=this.labels.find((function(e){return e.id===t}));return e?e.title:""}})}),Ft=Yt,Ut=(a("a137"),a("d3b7"),a("25f0"),a("6ca7"),a("ec29"),a("c37a")),Xt=a("fe09"),qt=Xt["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(_["a"])(Object(_["a"])({},Ut["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(I["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(_["a"])(Object(_["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),Qt=a("ce7e"),Kt=a("0789"),te=a("8654"),ee=Object(c["a"])(Ft,zt,Gt,!1,null,"145ee50e",null),ae=ee.exports;u()(ee,{VBtn:v["a"],VCard:h["a"],VCheckbox:qt,VChip:Pt["a"],VDivider:Qt["a"],VIcon:p["a"],VSlideYTransition:Kt["g"],VTextField:te["a"]});var ie={components:{TodoList:ae},computed:Object(_["a"])({},Object(Wt["c"])("todo-app",["incompleteTasks"]))},se=ie,ne=Object(c["a"])(se,Zt,Ht,!1,null,null,null),re=ne.exports,oe={components:{TasksPage:re}},le=oe,ce=(a("c8d5"),Object(c["a"])(le,Jt,Rt,!1,null,"ca0dcd98",null)),de=ce.exports,ue={components:{SalesCard:Y,ActivityCard:j,TrackCard:tt,TableCard:Ot,SourcesCard:Lt,TicketsCard:Mt,TodoCard:de},data:function(){return{loadingInterval:null,isLoading1:!0,isLoading2:!0,isLoading3:!0,isLoading4:!0,ordersSeries:[{name:"Orders",data:[["2020-02-02",34],["2020-02-03",43],["2020-02-04",40],["2020-02-05",43]]}],customersSeries:[{name:"Customers",data:[["2020-02-02",13],["2020-02-03",11],["2020-02-04",13],["2020-02-05",12]]}]}},computed:{theme:function(){return this.$vuetify.theme.isDark?this.$vuetify.theme.defaults.dark:this.$vuetify.theme.defaults.light}},mounted:function(){var t=this,e=0;this.loadingInterval=setInterval((function(){t["isLoading".concat(e++)]=!1,4===e&&t.clear()}),400)},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this.loadingInterval)}}},ve=ue,he=a("62ad"),me=a("0fd9"),pe=Object(c["a"])(ve,i,s,!1,null,null,null);e["default"]=pe.exports;u()(pe,{VCol:he["a"],VRow:me["a"]})},"6ca7":function(t,e,a){},9734:function(t,e,a){},"9e31":function(t,e,a){},a137:function(t,e,a){"use strict";var i=a("d3f3"),s=a.n(i);s.a},becd:function(t,e,a){},c8d5:function(t,e,a){"use strict";var i=a("cae3"),s=a.n(i);s.a},cae3:function(t,e,a){},d3f3:function(t,e,a){}}]);