(function(t){function i(i){for(var e,n,r=i[0],c=i[1],l=i[2],m=0,u=[];m<r.length;m++)n=r[m],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);h&&h(i);while(u.length)u.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,i=0;i<a.length;i++){for(var s=a[i],e=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(e=!1)}e&&(a.splice(i--,1),t=n(n.s=s[0]))}return t}var e={},o={app:0},a=[];function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,i,s){n.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,i){if(1&i&&(t=n(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)n.d(s,e,function(i){return t[i]}.bind(null,e));return s},n.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=i,r=r.slice();for(var l=0;l<r.length;l++)i(r[l]);var h=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,i,s){t.exports=s("56d7")},"034f":function(t,i,s){"use strict";var e=s("85ec"),o=s.n(e);o.a},"1c85":function(t,i,s){},"56d7":function(t,i,s){"use strict";s.r(i);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),o=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),s("router-link",{attrs:{to:"/free-mode"}},[t._v("フリーモード")])],1),s(t.mainComponent,{tag:"component"})],1)},a=[],n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("tetrisBox")],1)},r=[],c=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"main"},[s("div",{staticClass:"Notificationlocation musicbox",class:{isSlideIn:t.animationSetting.isFeedIn,isSlideOut:!t.animationSetting.isFeedIn}},[t._v(" ♪ ～ "+t._s(t.musicList[t.musicNum])+" ")]),s("div",{staticClass:"Instructionslocation Instructions",class:{isSlideIn:t.animationSetting.isInstructions,isSlideOut:!t.animationSetting.isInstructions,isInvisible:t.animationSetting.isInvisible}},[t._v(" 左右キー : ブロック移動"),s("br"),t._v(" 下キー : ブロック下移動"),s("br"),t._v(" 上キー : ブロック落下"),s("br"),t._v(" スペース : 回転"),s("br"),t._v(" shift : ホールド(未実装)"),s("br"),t._v(" q : ゲームストップ"),s("br")]),s("div",{staticClass:"score"},[s("table",[s("tr",[s("td",[t._v("スコア:")]),s("td",[t._v(t._s(t.gameStatus.score))])])])]),s("div",{staticClass:"gameArea"},[s("div",{staticClass:"players"},[t._v(" プレイヤー表示 "),"stop"==t.gameStatus.gameMode?s("button",{on:{click:t.start}},[t._v("スタート")]):s("button",{on:{click:t.start}},[t._v("ゲーム中")]),s("button",{on:{click:t.onInstruction}},[t._v("説明書")])]),s("canvas",{ref:"gameDisplay",staticClass:"gameDisplay",attrs:{width:"370px",height:"675px"}}),s("div",{staticClass:"holdAndNextBlocks"},[t._v(" ホールド"),s("br"),s("canvas",{ref:"hold",staticClass:"hold",attrs:{width:"150px",height:"150px"}}),s("br"),s("br"),t._v(" 次のブロック"),s("br"),s("canvas",{ref:"nextBlocks",staticClass:"nextBlocks",attrs:{width:"150px",height:"150px"}})])])])},l=[],h=(s("d81d"),s("fb6a"),s("a434"),s("4f96")),m={data:function(){return{animationSetting:{isFeedIn:!1,isInstructions:!1,isInvisible:!0},messageTimeout:null,downTimerId:null,musics:{nowMusic:"normal",normal:null,good:null,warning:null},canvasData:{gameDisplaycanvas:null,gameDisplayctx:null,holdcanvas:null,holdctx:null,nextBlockscanvas:null,nextBlocksctx:null},gameStatus:{gameMode:"stop",score:0,fps:1,gameOverFlag:!1,nowBlocksArray:[]},oldMinoPosition:{Vertical:0,side:0},minoPosition:{Vertical:1,side:3},forecastMinoPositon:{Vertical:0,side:0},nextBlock:[],holdBlock:[],minoState:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],mapArea:[[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100],[100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100],[100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100],[100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100]],constMapArea:[],tempMapArea:[],forecastMino:[],I_mino:[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],L_mino:[[0,0,0,0],[0,2,0,0],[0,2,0,0],[0,2,2,0]],re_L_mino:[[0,0,0,0],[0,0,3,0],[0,0,3,0],[0,3,3,0]],Z_mino:[[0,0,0,0],[4,4,0,0],[0,4,4,0],[0,0,0,0]],S_mino:[[0,0,0,0],[0,5,5,0],[5,5,0,0],[0,0,0,0],[0,0,0,0]],T_mino:[[0,0,0,0],[0,6,0,0],[6,6,6,0],[0,0,0,0]],O_mino:[[0,0,0,0],[0,7,7,0],[0,7,7,0],[0,0,0,0]],musicList:["騒音の無い世界　「オオカミ少年」","騒音の無い世界　「それゆけワンダーランド」"],musicNum:0}},mounted:function(){this.constMapArea=this.copy(this.mapArea),this.tempMapArea=this.copy(this.mapArea),this.gameDisplaycanvas=this.$refs.gameDisplay,this.gameDisplayctx=this.gameDisplaycanvas.getContext("2d"),this.holdcanvas=this.$refs.hold,this.holdctx=this.holdcanvas.getContext("2d"),this.nextBlockscanvas=this.$refs.nextBlocks,this.nextBlocksctx=this.nextBlockscanvas.getContext("2d"),this.gameDisplayctx.fillRect(0,0,9,675),this.gameDisplayctx.fillRect(360,0,10,675),this.gameDisplayctx.fillRect(0,665,370,10)},methods:{start:function(){if("start"!=this.gameStatus.gameMode){this.constMapArea=this.copy(this.mapArea),this.tempMapArea=this.copy(this.mapArea),this.forecastMino=[],this.holdBlock=[],this.holdHcange(),this.gameStatus.fps=1,this.gameStatus.score=0,this.gameStatus.gameMode="start",this.musics.normal.play(),this.resetBlocks();var t=this.gameStatus.nowBlocksArray[0];this.gameStatus.nowBlocksArray.shift(),this.createNextBlocData(t),this.createNextBlock(),this.downTimerId=setInterval(this.downMove,Math.ceil(1e3/this.gameStatus.fps)),this.musicNum=0,this.musics.nowMusic="normal",this.animationSetting.isFeedIn=!0,this.messageTimeout=setTimeout(this.clearMusicName,1e4)}},onInstruction:function(){this.animationSetting.isInvisible=!1,this.animationSetting.isInstructions=!this.animationSetting.isInstructions},copy:function(t){var i=t.slice().map((function(t){return t.slice()}));return i},transpose:function(t){for(var i=t.length,s=t[0].length,e=i-1,o=[],a=0;a<s;a++){o[a]=[];for(var n=0;n<i;n++)o[a][n]=t[e-n][a]}return o},downMove:function(){this.oldMinoPosition.Vertical=this.minoPosition.Vertical,this.oldMinoPosition.side=this.minoPosition.side,this.minoPosition.Vertical++,this.calAreaArray()||(this.minoPosition.Vertical--,0==this.minoPosition.Vertical&&(this.gameStatus.gameOverFlag=!0),this.finishDownBlock())},clearMino:function(t,i){for(var s=0;s<4;s++)for(var e=0;e<4;e++)0==this.tempMapArea[t+s][i+e]&&(this.constMapArea[t+s][i+e]=0)},finishDownBlock:function(){var t;clearInterval(this.downTimerId);var i=[];if(this.gameStatus.gameOverFlag)return alert("ゲームオーバー"),this.gameStatus.gameOverFlag=!1,this.gameStatus.gameMode="stop",this.musics.normal.pause(),void this.musics.warning.pause();for(var s=1;s<20;s++){t=0;for(var e=3;e<13;e++)0!=this.constMapArea[s][e]&&t++;10==t&&i.push(s)}for(s=0;s<i.length;s++)this.constMapArea.splice(i[s]-s,1);for(s=0;s<i.length;s++)this.constMapArea.unshift([100,100,100,0,0,0,0,0,0,0,0,0,0,100,100,100]);1==i.length?this.gameStatus.score+=100:2==i.length?this.gameStatus.score+=400:3==i.length?this.gameStatus.score+=1e3:4==i.length&&(this.gameStatus.score+=2500);var o=0;for(s=0;s<this.constMapArea[4].length;s++)100!=this.constMapArea[4][s]&&(o+=this.constMapArea[4][s]);0!=o?"warning"!=this.musics.nowMusic&&(clearTimeout(this.messageTimeout),this.musics.normal.pause(),this.musics.warning.play(),this.musicNum=1,this.animationSetting.isFeedIn=!1,setTimeout(this.setMusicName,10),this.musics.nowMusic="warning"):"normal"!=this.musics.nowMusic&&(clearTimeout(this.messageTimeout),this.musics.warning.pause(),this.musics.normal.play(),this.musicNum=0,this.animationSetting.isFeedIn=!1,setTimeout(this.setMusicName,10),this.musics.nowMusic="normal"),this.gameStatus.score>1e4*this.gameStatus.fps&&(this.gameStatus.fps+=3),this.tempMapArea=this.copy(this.constMapArea),this.createNextBlock(),this.downTimerId=setInterval(this.downMove,Math.ceil(1e3/this.gameStatus.fps))},createNextBlock:function(){this.minoPosition.Vertical=0,this.minoPosition.side=5,this.minoState=this.copy(this.nextBlock);var t=this.gameStatus.nowBlocksArray[0];this.gameStatus.nowBlocksArray.shift(),0==this.gameStatus.nowBlocksArray.length&&this.resetBlocks(),this.createNextBlocData(t),this.drowNextBlock(this.nextBlocksctx,this.nextBlock),this.calAreaArray()},createNextBlocData:function(t){switch(t){case 1:this.nextBlock=this.copy(this.I_mino);break;case 2:this.nextBlock=this.copy(this.L_mino);break;case 3:this.nextBlock=this.copy(this.re_L_mino);break;case 4:this.nextBlock=this.copy(this.Z_mino);break;case 5:this.nextBlock=this.copy(this.S_mino);break;case 6:this.nextBlock=this.copy(this.T_mino);break;case 7:this.nextBlock=this.copy(this.O_mino);break;default:}},shuffle:function(t){for(var i=Object(h["a"])(t),s=i.slice(0),e=s.length-1;e>=0;e--){var o=Math.floor(Math.random()*(e+1)),a=[s[o],s[e]];s[e]=a[0],s[o]=a[1]}return s},resetBlocks:function(){this.gameStatus.nowBlocksArray=[1,2,3,4,5,6,7],this.gameStatus.nowBlocksArray=this.shuffle(this.gameStatus.nowBlocksArray)},createNextforecastMino:function(){this.forecastMino=this.copy(this.minoState);for(var t=0;t<this.forecastMino.length;t++)for(var i=0;i<this.forecastMino[t].length;i++)0!=this.forecastMino[t][i]&&(this.forecastMino[t][i]=50)},drowNextBlock:function(t,i){for(var s=0;s<4;s++)for(var e=0;e<4;e++){switch(i[s][e]){case 1:t.fillStyle="#FF0000";break;case 2:t.fillStyle="#FF3300";break;case 3:t.fillStyle="#0000FF";break;case 4:t.fillStyle="#008000";break;case 5:t.fillStyle="#800080";break;case 6:t.fillStyle="#00FFFF";break;case 7:t.fillStyle="#FFFF00";break;default:t.fillStyle="#FFFFFF"}t.fillRect(35*e+10,35*s,34,34)}},drowBlock:function(){for(var t=1;t<20;t++)for(var i=3;i<13;i++){switch(this.constMapArea[t][i]){case 1:this.gameDisplayctx.fillStyle="#FF0000";break;case 2:this.gameDisplayctx.fillStyle="#FF3300";break;case 3:this.gameDisplayctx.fillStyle="#0000FF";break;case 4:this.gameDisplayctx.fillStyle="#008000";break;case 5:this.gameDisplayctx.fillStyle="#800080";break;case 6:this.gameDisplayctx.fillStyle="#00FFFF";break;case 7:this.gameDisplayctx.fillStyle="#FFFF00";break;case 50:this.gameDisplayctx.fillStyle="#DDDDDD";break;default:this.gameDisplayctx.fillStyle="#FFFFFF"}this.gameDisplayctx.fillRect(35*(i-3)+10,35*(t-1),34,34)}},calAreaArray:function(){var t=this.hitCheck(this.minoPosition.Vertical,this.minoPosition.side,this.minoState);if(t){var i=this.minoPosition.Vertical,s=this.minoPosition.side;this.createNextforecastMino(),this.clearMino(this.oldMinoPosition.Vertical,this.oldMinoPosition.side),this.clearMino(this.forecastMinoPositon.Vertical,this.forecastMinoPositon.side);for(var e=0;e<4;e++)for(var o=0;o<4;o++)this.constMapArea[i+e][s+o]=this.constMapArea[i+e][s+o]+this.minoState[e][o];this.calForecastMino(i,s),this.drowBlock()}return t},hitCheck:function(t,i,s){for(var e=t,o=i,a=!0,n=0;n<4;n++)for(var r=0;r<4;r++)0!=s[n][r]&&s[n][r]+this.tempMapArea[e+n][o+r]!=s[n][r]&&(a=!1);return a},calForecastMino:function(t,i){var s=t,e=i;while(this.hitCheck(s,e,this.forecastMino))s++;s--;for(var o=0;o<4;o++)for(var a=0;a<4;a++)0==this.constMapArea[s+o][e+a]&&(this.constMapArea[s+o][e+a]=this.constMapArea[s+o][e+a]+this.forecastMino[o][a]);this.forecastMinoPositon.Vertical=s,this.forecastMinoPositon.side=e},holdHcange:function(){if(clearInterval(this.downTimerId),0==this.holdBlock.length)return this.holdBlock=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],void this.drowNextBlock(this.holdctx,this.holdBlock);for(var t=0,i=0;i<this.holdBlock.length;i++)for(var s=0;s<this.holdBlock[i].length;s++)t+=this.holdBlock[i][s];if(0!=t){var e=this.copy(this.minoState);this.minoState=this.copy(this.holdBlock),this.holdBlock=this.copy(e),this.drowNextBlock(this.holdctx,this.holdBlock),this.minoPosition.Vertical=0,this.minoPosition.side=5,this.calAreaArray()}else this.holdBlock=this.copy(this.minoState),this.drowNextBlock(this.holdctx,this.holdBlock),this.createNextBlock();this.downTimerId=setInterval(this.downMove,Math.ceil(1e3/this.gameStatus.fps))},keyAction:function(t){if("start"==this.gameStatus.gameMode)switch(this.oldMinoPosition.Vertical=this.minoPosition.Vertical,this.oldMinoPosition.side=this.minoPosition.side,t.keyCode){case 37:this.minoPosition.side--,this.calAreaArray()||this.minoPosition.side++;break;case 38:while(this.hitCheck(this.minoPosition.Vertical,this.minoPosition.side,this.minoState))this.minoPosition.Vertical++;this.minoPosition.Vertical--,this.calAreaArray(),this.finishDownBlock();break;case 39:this.minoPosition.side++,this.calAreaArray()||this.minoPosition.side--;break;case 40:this.minoPosition.Vertical++,this.calAreaArray()||(this.minoPosition.Vertical--,0==this.minoPosition.Vertical&&(this.gameStatus.gameOverFlag=!0),this.finishDownBlock());break;case 32:var i=this.copy(this.minoState);this.minoState=this.transpose(this.minoState),this.calAreaArray()||(this.minoState=this.copy(i)),this.drowBlock();break;case 81:clearInterval(this.downTimerId),this.gameStatus.gameMode="stop",this.musics.normal.pause(),this.musics.warning.pause();break;case 16:this.holdHcange();break}},clearMusicName:function(){this.animationSetting.isFeedIn=!1},setMusicName:function(){this.animationSetting.isFeedIn=!0,this.messageTimeout=setTimeout(this.clearMusicName,1e4)}},created:function(){window.addEventListener("keydown",this.keyAction),this.musics.normal=new Audio("./wolfboy.mp3"),this.musics.normal.volume=.1,this.musics.normal.loop=!0,this.musics.warning=new Audio("./wonderland.mp3"),this.musics.warning.volume=.1,this.musics.warning.loop=!0},beforeDestroy:function(){window.removeEventListener("keydown",this.keyAction)}},u=m,f=(s("cad7"),s("2877")),d=Object(f["a"])(u,c,l,!1,null,"3946b57e",null),p=d.exports,g={components:{tetrisBox:p}},v=g,k=Object(f["a"])(v,n,r,!1,null,null,null),y=k.exports,S=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"home"},[t._v(" フリーモードだけ作成 ")])},M=[],w={name:"Home",components:{}},x=w,b=Object(f["a"])(x,S,M,!1,null,null,null),B=b.exports,A={components:{mainPage:B,tetrisFreeMode:y},computed:{mainComponent:function(){switch(this.$route.path){case"/":return console.log("メイン1"),B;case"/free-mode":return console.log("ふりー"),y;default:return console.log("メインミス"),B}}}},F=A,_=(s("034f"),Object(f["a"])(F,o,a,!1,null,null,null)),P=_.exports,I=s("8c4f");e["a"].use(I["a"]);var D=[{path:"/",name:"Home",component:B}],N=new I["a"]({mode:"history",base:"",routes:D}),O=N,T=s("2f62");e["a"].use(T["a"]);var V=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}});e["a"].config.productionTip=!1,new e["a"]({router:O,store:V,render:function(t){return t(P)}}).$mount("#app")},"85ec":function(t,i,s){},cad7:function(t,i,s){"use strict";var e=s("1c85"),o=s.n(e);o.a}});
//# sourceMappingURL=app.36396d72.js.map