// anti m1
var uri = window.location.toString();if (uri.indexOf("?m=1","?m=1") > 0) {var clean_uri = uri.substring(0, uri.indexOf("?m=1"));window.history.replaceState({}, document.title, clean_uri);};
// AntiInspect read-sports blogspot
!function t(){try{!function t(n){1===(""+n/n).length&&0!==n||function(){}.constructor("debugger")(),t(++n)}(0)}catch(n){setTimeout(t,5e3)}}();
// Anti ctrlu dumetschool
shortcut={all_shortcuts:{},add:function(a,b,c){var d={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(c)for(var e in d)"undefined"==typeof c[e]&&(c[e]=d[e]);else c=d;d=c.target,"string"==typeof c.target&&(d=document.getElementById(c.target)),a=a.toLowerCase(),e=function(d){d=d||window.event;if(c.disable_in_input){var e;d.target?e=d.target:d.srcElement&&(e=d.srcElement),3==e.nodeType&&(e=e.parentNode);if("INPUT"==e.tagName||"TEXTAREA"==e.tagName)return}d.keyCode?code=d.keyCode:d.which&&(code=d.which),e=String.fromCharCode(code).toLowerCase(),188==code&&(e=","),190==code&&(e=".");var f=a.split("+"),g=0,h={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},i={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},j=!1,l=!1,m=!1,n=!1,o=!1,p=!1,q=!1,r=!1;d.ctrlKey&&(n=!0),d.shiftKey&&(l=!0),d.altKey&&(p=!0),d.metaKey&&(r=!0);for(var s=0;k=f[s],s<f.length;s++)"ctrl"==k||"control"==k?(g++,m=!0):"shift"==k?(g++,j=!0):"alt"==k?(g++,o=!0):"meta"==k?(g++,q=!0):1<k.length?i[k]==code&&g++:c.keycode?c.keycode==code&&g++:e==k?g++:h[e]&&d.shiftKey&&(e=h[e],e==k&&g++);if(g==f.length&&n==m&&l==j&&p==o&&r==q&&(b(d),!c.propagate))return d.cancelBubble=!0,d.returnValue=!1,d.stopPropagation&&(d.stopPropagation(),d.preventDefault()),!1},this.all_shortcuts[a]={callback:e,target:d,event:c.type},d.addEventListener?d.addEventListener(c.type,e,!1):d.attachEvent?d.attachEvent("on"+c.type,e):d["on"+c.type]=e},remove:function(a){var a=a.toLowerCase(),b=this.all_shortcuts[a];delete this.all_shortcuts[a];if(b){var a=b.event,c=b.target,b=b.callback;c.detachEvent?c.detachEvent("on"+a,b):c.removeEventListener?c.removeEventListener(a,b,!1):c["on"+a]=!1}}},shortcut.add("Ctrl+U",function(){top.location.href="#"});
// gambar pertama ilang
$(function(){$(".separator:first").hide(),$(".post-body > img:first").hide()});
// Read time bf x catatandroid
function get_text(e){ret="";for(var t=e.childNodes.length,n=0;n<t;n++){var o=e.childNodes[n];8!=o.nodeType&&(ret+=1!=o.nodeType?o.nodeValue:get_text(o))}return ret}var words=get_text(document.querySelector(".post-body")),count=words.split(" ").length,avg=185,counted=count/avg,maincount=Math.round(counted);document.querySelector(".readTime").innerHTML=maincount+" min";
// yang ngintip ctd
jQuery.getScript("//cdn.firebase.com/js/client/2.3.2/firebase.js").done(function(){
$.each($(".post-view[data-id]"),function(e,a){var i=$(a).parent().find("#postviews").addClass("view-load"),t=new Firebase("https://ctd-page-views-default-rtdb.firebaseio.com/pages/id/"+$(a).attr("data-id"));t.once("value",function(e){var o=e.val(),d=!1;null==o&&((o={}).value=0,o.url=window.location.href,o.id=$(a).attr("data-id"),d=!0),i.removeClass("view-load").text(o.value),o.value++,"/"!=window.location.pathname&&(d?t.set(o):t.child("value").set(o.value))})})});
// disqus count
var disqus_shortname="catatandroid";!function(){var e=document.createElement("script");e.async=!0,e.type="text/javascript",e.src="//"+disqus_shortname+".disqus.com/count.js",(document.getElementsByTagName("HEAD")[0]||document.getElementsByTagName("BODY")[0]).appendChild(e)}();
// Image Transition Tipsku 05
var scroll="yes",Fscroll=scroll.replace(/(\r\n|\n|\r)/gm," ");"yes"===Fscroll&&($(document).ready(function(){$("body").addClass("imgani")}),$(window).bind("load resize scroll",function(){var o=$(this).height();$(".post-body img,.post-body h2,.post-body h3,#share").each(function(){var s=.1*$(this).height()-o+$(this).offset().top;$(document).scrollTop()>s&&$(this).addClass("anime")})}));
// font resizer traliif
$(function(){$('input').click(function(){var ourText=$('.post-body');var currFontSize=ourText.css('fontSize');var finalNum=parseFloat(currFontSize,10);var stringEnding=currFontSize.slice(-2);if(this.id=='tlarge'){finalNum*=1.1}else if(this.id=='tsmall'){finalNum/=1.1}else if(this.id=='treset'){finalNum=16}
ourText.animate({fontSize:finalNum+stringEnding},500)})});
// Double Click
for(var pres=document.querySelectorAll("pre,code"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);
// share catatandroid
var shareButton=document.getElementById("shareBtn"),title=document.title,text=document.querySelector("title").textContent,url=window.location.href;shareButton.addEventListener("click",function(){navigator.share&&navigator.share({title:title,text:text,url:url})});var shareButton=document.getElementById("shareBtn2"),title=document.title,text=document.querySelector("title").textContent,url=window.location.href;shareButton.addEventListener("click",function(){navigator.share&&navigator.share({title:title,text:text,url:url})});;
// auto statically img
var img=document.getElementsByTagName('img');for(var i=0;i<img.length;i++){img[i].src=img[i].src.replace(/[0-9]+.bp.blogspot.com/,"cdn.statically.io/img/3.bp.blogspot.com")};
// Kompiajaib auto statically
for(var imgEl=document.querySelectorAll("img"),i=0;i<imgEl.length;i++)imgEl[i].getAttribute("src")&&(imgEl[i].setAttribute("data-src",imgEl[i].getAttribute("src").replace(/.*?:\/\//g , "https://cdn.statically.io/img/")),imgEl[i].removeAttribute("src"),imgEl[i].className+=" lazyload");
// lazy mgid kompiajaib
var lazymgid=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazymgid||0!=document.body.scrollTop&&!1===lazymgid)&&(!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://jsc.mgid.com/c/a/catatandroid.com.1199831.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),lazymgid=!0)},!0);
// lazy adsense kompiajaib
var lazyadsense=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyadsense||0!=document.body.scrollTop&&!1===lazyadsense)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyadsense=!0)},!0);
// lazyload adsense dewaplokis
var lazyadsense=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyadsense||0!=document.body.scrollTop&&!1===lazyadsense)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.jsdelivr.net/gh/dewaplokis/block@master/dewablock.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyadsense=!0)},!0);
// Gradient scrolling bar
var bar_bg=document.getElementById("top-scrollbar-bg"),body=document.body,html=document.documentElement;bar_bg.style.minWidth=document.width+"px",document.getElementsByTagName("body")[0].onresize=function(){bar_bg.style.minWidth=document.width+"px"},window.onscroll=function(){var t=document.getElementById("top-scrollbar"),e=(document.documentElement.clientWidth,Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight)),o=window.innerHeight,o=(pageYOffset||(document.documentElement.clientHeight?document.documentElement:document.body).scrollTop)/(e-o)*100;t.style.width=o+"%"};
// time ago dagruel
function timeAgo(o){var t=(new Date).getTime()-o.getTime(),e=Math.floor(t/1e3),r=Math.floor(e/60),a=Math.floor(r/60),g=Math.floor(a/24),h=Math.floor(g/30),n=Math.floor(h/12);return 0===t?"Just now":e<60?e+" s Ago":r<60?r+" m go":a<24?a+" H ago":g<30?g+" D ago":h<12?h+" Mo ago":n+" years Ago"}
$("time.updated").each(function(){$(this).html(timeAgo(new Date($(this).attr("datetime"))))});
// gtag manager
var LazyAnalytics=false;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&false===LazyAnalytics||0!=document.body.scrollTop&&false===LazyAnalytics)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.src="https://www.googletagmanager.com/gtag/js?id=UA-66906435-3";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),LazyAnalytics=true)},true);
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('js',new Date());gtag('config','UA-66906435-3');
// license wendycode
let url_data_user = 'https://ctd-license-default-rtdb.asia-southeast1.firebasedatabase.app/host.json';
let urlOrigin = window.location.hostname;  
let tampilanDirect = '<style>#peringatan span{font-size:50px}#peringatan{position: fixed!important;z-index: 999999!important;top: 0!important;left: 0!important;width: 100%!important;height: 100%!important;display: flex!important;background: rgba(0,0,0,.4)!important;}#peringatan-wrap{display: block!important;margin: auto!important;width: 600px!important;max-width: 90%!important;text-align: center!important;background: #fff!important;padding: 40px!important;border-radius: 8px!important;}#peringatan h4{font-size:20px}</style><div id="peringatan"><div id="peringatan-wrap"><h4>PERINGATAN!</h4><p>Lisensi template untuk website "'+urlOrigin+'" belum aktif</p><p>Silahkan aktivasi lisensi sekarang juga, dengan menghubungi admin di nomor 62987979798798</p><span id="batas-update-template">20</span></div></div>';
let waktuDirect = 20;
let domainDirect = "https://www.catatandroid.com"; 
const _0xe0ac=['\x57\x52\x64\x63\x4c\x43\x6f\x35\x57\x34\x42\x64\x4c\x75\x54\x77\x57\x51\x43','\x73\x53\x6f\x6b\x74\x6d\x6f\x71\x57\x4f\x76\x78\x57\x4f\x4b\x78\x57\x4f\x52\x63\x56\x38\x6f\x6f\x57\x37\x71\x64','\x57\x52\x64\x63\x51\x73\x34\x62\x57\x35\x4f\x51\x57\x37\x4e\x64\x4e\x4a\x71','\x41\x38\x6b\x6a\x78\x63\x30','\x45\x43\x6f\x76\x57\x35\x72\x2f','\x66\x71\x30\x53\x57\x34\x30\x6a\x44\x61','\x57\x4f\x48\x32\x6f\x43\x6b\x39\x61\x48\x2f\x64\x52\x57','\x57\x51\x58\x76\x57\x52\x56\x64\x4a\x58\x4a\x63\x4e\x38\x6f\x45\x78\x43\x6f\x6e\x44\x30\x4e\x63\x53\x43\x6f\x43','\x57\x35\x66\x76\x6e\x43\x6b\x34','\x72\x66\x56\x63\x4c\x53\x6f\x39','\x57\x35\x37\x63\x54\x57\x2f\x63\x55\x4d\x6e\x54\x57\x35\x61','\x79\x76\x53\x2b\x57\x51\x38\x31\x62\x43\x6f\x69','\x71\x76\x65\x57\x57\x35\x6c\x64\x4c\x53\x6f\x36\x43\x53\x6b\x73','\x57\x51\x64\x63\x4f\x43\x6b\x69\x74\x68\x2f\x64\x4d\x33\x50\x6d','\x72\x43\x6b\x46\x44\x49\x4a\x63\x4d\x38\x6b\x51\x67\x43\x6b\x48','\x57\x51\x44\x64\x57\x51\x44\x49\x7a\x43\x6f\x75\x57\x52\x7a\x67\x57\x34\x42\x63\x56\x61','\x6d\x33\x62\x78\x7a\x32\x47\x53\x65\x43\x6f\x4c\x57\x37\x4a\x63\x50\x47','\x73\x6d\x6b\x31\x57\x52\x39\x4e\x57\x51\x4c\x4a\x72\x49\x4c\x46\x6f\x61\x46\x64\x4a\x47','\x42\x53\x6f\x56\x57\x35\x78\x63\x47\x64\x4a\x63\x53\x53\x6b\x4e\x57\x35\x71\x36\x64\x47','\x61\x30\x68\x64\x54\x73\x64\x63\x50\x53\x6f\x51\x57\x52\x35\x36\x57\x34\x42\x63\x48\x57','\x76\x6d\x6f\x56\x76\x6d\x6f\x52\x61\x53\x6b\x54\x77\x53\x6b\x4a','\x6f\x61\x2f\x63\x4b\x33\x6c\x63\x4b\x6d\x6b\x34\x45\x73\x70\x64\x55\x53\x6f\x6f\x43\x76\x65','\x68\x4c\x57\x4a\x69\x6d\x6f\x4f\x6f\x53\x6f\x4a','\x67\x47\x4c\x58\x57\x50\x37\x63\x4a\x53\x6b\x50\x42\x38\x6b\x43\x75\x53\x6b\x42\x6b\x78\x47','\x57\x50\x79\x49\x71\x66\x48\x39\x67\x6d\x6f\x70\x73\x6d\x6f\x6e\x57\x35\x34','\x57\x52\x4c\x49\x57\x34\x70\x63\x4f\x71','\x57\x37\x38\x67\x61\x59\x64\x64\x48\x43\x6b\x53\x70\x33\x64\x63\x51\x6d\x6b\x52','\x42\x53\x6b\x76\x57\x36\x37\x64\x4c\x47\x48\x69\x79\x59\x46\x63\x4c\x61','\x7a\x66\x37\x63\x4e\x32\x7a\x61\x57\x50\x43','\x57\x35\x50\x30\x61\x67\x31\x55\x6d\x53\x6f\x6d\x75\x47','\x67\x61\x35\x30\x57\x50\x74\x64\x54\x6d\x6f\x34\x41\x6d\x6b\x79\x46\x43\x6b\x6d','\x57\x35\x44\x33\x77\x72\x38\x50\x71\x38\x6f\x57\x71\x38\x6f\x61\x57\x34\x64\x63\x4a\x4d\x6d','\x57\x37\x72\x37\x57\x52\x43\x42','\x57\x52\x61\x56\x57\x36\x31\x6f\x63\x63\x70\x64\x56\x32\x37\x64\x4d\x43\x6f\x46','\x57\x34\x62\x42\x57\x4f\x30','\x57\x36\x2f\x64\x49\x38\x6b\x4f\x57\x50\x46\x63\x4b\x48\x44\x79\x57\x4f\x6c\x63\x56\x71\x6d\x78\x57\x52\x47','\x78\x38\x6f\x54\x63\x38\x6b\x41\x72\x38\x6f\x46\x73\x6d\x6b\x45\x57\x34\x5a\x64\x4f\x43\x6b\x54\x57\x37\x34','\x57\x4f\x6e\x78\x57\x51\x78\x64\x4d\x38\x6b\x68\x57\x37\x64\x64\x52\x78\x75','\x7a\x43\x6b\x50\x57\x4f\x37\x63\x4c\x38\x6b\x66\x57\x37\x74\x63\x56\x62\x65\x46\x7a\x6d\x6b\x68\x57\x35\x61','\x63\x61\x79\x5a\x57\x35\x69\x68\x46\x49\x42\x64\x51\x57','\x68\x6d\x6f\x61\x69\x78\x52\x64\x4e\x53\x6f\x31\x6f\x43\x6b\x4f\x57\x34\x57\x2f\x41\x38\x6b\x49'];const _0x319c=function(_0xdaa04b,_0x5af96e){_0xdaa04b=_0xdaa04b-0x1c6;let _0xe0ac70=_0xe0ac[_0xdaa04b];if(_0x319c['\x53\x63\x63\x49\x73\x7a']===undefined){var _0x319c80=function(_0xe2729a){const _0x436a77='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';let _0x401b22='';for(let _0x18c499=0x0,_0x2f75b5,_0x32b92a,_0x45a246=0x0;_0x32b92a=_0xe2729a['\x63\x68\x61\x72\x41\x74'](_0x45a246++);~_0x32b92a&&(_0x2f75b5=_0x18c499%0x4?_0x2f75b5*0x40+_0x32b92a:_0x32b92a,_0x18c499++%0x4)?_0x401b22+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x2f75b5>>(-0x2*_0x18c499&0x6)):0x0){_0x32b92a=_0x436a77['\x69\x6e\x64\x65\x78\x4f\x66'](_0x32b92a);}return _0x401b22;};const _0x30ec88=function(_0x338f70,_0x3fe9e5){let _0x22a24b=[],_0x497ae6=0x0,_0x5897fa,_0x56466f='',_0x66b84e='';_0x338f70=_0x319c80(_0x338f70);for(let _0x1fe16f=0x0,_0xd02471=_0x338f70['\x6c\x65\x6e\x67\x74\x68'];_0x1fe16f<_0xd02471;_0x1fe16f++){_0x66b84e+='\x25'+('\x30\x30'+_0x338f70['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x1fe16f)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}_0x338f70=decodeURIComponent(_0x66b84e);let _0x51b2d6;for(_0x51b2d6=0x0;_0x51b2d6<0x100;_0x51b2d6++){_0x22a24b[_0x51b2d6]=_0x51b2d6;}for(_0x51b2d6=0x0;_0x51b2d6<0x100;_0x51b2d6++){_0x497ae6=(_0x497ae6+_0x22a24b[_0x51b2d6]+_0x3fe9e5['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x51b2d6%_0x3fe9e5['\x6c\x65\x6e\x67\x74\x68']))%0x100,_0x5897fa=_0x22a24b[_0x51b2d6],_0x22a24b[_0x51b2d6]=_0x22a24b[_0x497ae6],_0x22a24b[_0x497ae6]=_0x5897fa;}_0x51b2d6=0x0,_0x497ae6=0x0;for(let _0x1963b5=0x0;_0x1963b5<_0x338f70['\x6c\x65\x6e\x67\x74\x68'];_0x1963b5++){_0x51b2d6=(_0x51b2d6+0x1)%0x100,_0x497ae6=(_0x497ae6+_0x22a24b[_0x51b2d6])%0x100,_0x5897fa=_0x22a24b[_0x51b2d6],_0x22a24b[_0x51b2d6]=_0x22a24b[_0x497ae6],_0x22a24b[_0x497ae6]=_0x5897fa,_0x56466f+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](_0x338f70['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x1963b5)^_0x22a24b[(_0x22a24b[_0x51b2d6]+_0x22a24b[_0x497ae6])%0x100]);}return _0x56466f;};_0x319c['\x63\x52\x4f\x63\x64\x44']=_0x30ec88,_0x319c['\x49\x6b\x46\x66\x4c\x4d']={},_0x319c['\x53\x63\x63\x49\x73\x7a']=!![];}const _0x5e75dd=_0xe0ac[0x0],_0x4ef06d=_0xdaa04b+_0x5e75dd,_0x2e9d8a=_0x319c['\x49\x6b\x46\x66\x4c\x4d'][_0x4ef06d];return _0x2e9d8a===undefined?(_0x319c['\x45\x63\x75\x4c\x42\x61']===undefined&&(_0x319c['\x45\x63\x75\x4c\x42\x61']=!![]),_0xe0ac70=_0x319c['\x63\x52\x4f\x63\x64\x44'](_0xe0ac70,_0x5af96e),_0x319c['\x49\x6b\x46\x66\x4c\x4d'][_0x4ef06d]=_0xe0ac70):_0xe0ac70=_0x2e9d8a,_0xe0ac70;};const _0x31a139=_0x319c;(function(_0x1346cf,_0x5f6c80){const _0x329bcf=_0x319c;while(!![]){try{const _0x13d846=parseInt(_0x329bcf('\x30\x78\x31\x63\x63','\x76\x4f\x23\x25'))*-parseInt(_0x329bcf('\x30\x78\x31\x64\x35','\x32\x45\x72\x53'))+parseInt(_0x329bcf('\x30\x78\x31\x65\x61','\x45\x65\x62\x28'))+-parseInt(_0x329bcf('\x30\x78\x31\x65\x38','\x45\x65\x62\x28'))*-parseInt(_0x329bcf('\x30\x78\x31\x64\x62','\x48\x71\x64\x5e'))+parseInt(_0x329bcf('\x30\x78\x31\x65\x32','\x53\x51\x79\x32'))+-parseInt(_0x329bcf('\x30\x78\x31\x65\x30','\x52\x4e\x25\x74'))+parseInt(_0x329bcf('\x30\x78\x31\x63\x37','\x61\x39\x31\x6e'))*parseInt(_0x329bcf('\x30\x78\x31\x65\x63','\x63\x54\x37\x5a'))+-parseInt(_0x329bcf('\x30\x78\x31\x63\x36','\x6d\x33\x6e\x54'))*-parseInt(_0x329bcf('\x30\x78\x31\x64\x36','\x31\x54\x6b\x6d'));if(_0x13d846===_0x5f6c80)break;else _0x1346cf['push'](_0x1346cf['shift']());}catch(_0xfcab9){_0x1346cf['push'](_0x1346cf['shift']());}}}(_0xe0ac,0x85c02));let xhr=new XMLHttpRequest();xhr[_0x31a139('\x30\x78\x31\x64\x34','\x64\x52\x6b\x38')](_0x31a139('\x30\x78\x31\x65\x64','\x63\x54\x37\x5a'),url_data_user),xhr[_0x31a139('\x30\x78\x31\x64\x61','\x29\x40\x5d\x6e')+'\x70\x65']=_0x31a139('\x30\x78\x31\x65\x34','\x58\x59\x51\x47'),xhr[_0x31a139('\x30\x78\x31\x65\x62','\x63\x54\x37\x5a')](),xhr[_0x31a139('\x30\x78\x31\x64\x30','\x29\x71\x74\x30')]=function(){const _0x130863=_0x31a139;let _0x5e75dd=xhr[_0x130863('\x30\x78\x31\x63\x39','\x29\x71\x74\x30')];if(0x0==function(_0xe2729a,_0x436a77){const _0x12b267=_0x130863;for(var _0x401b22=!0x1,_0x18c499=0x0;_0x18c499<_0x436a77[_0x12b267('\x30\x78\x31\x65\x37','\x5b\x50\x26\x40')];_0x18c499++)if(_0x436a77[_0x18c499]==_0xe2729a){_0x401b22=!0x0;break;}return _0x401b22;}(window[_0x130863('\x30\x78\x31\x63\x62','\x29\x34\x56\x45')][_0x130863('\x30\x78\x31\x64\x37','\x53\x51\x79\x32')],_0x5e75dd)){var _0x4ef06d=waktuDirect,_0x2e9d8a=domainDirect,_0x30ec88=tampilanDirect;document[_0x130863('\x30\x78\x31\x63\x66','\x69\x33\x77\x5a')][_0x130863('\x30\x78\x31\x63\x64','\x24\x5e\x28\x43')]=_0x30ec88,setInterval(function(){const _0x259954=_0x130863;_0x4ef06d<=0x1?window[_0x259954('\x30\x78\x31\x64\x39','\x47\x5d\x35\x73')][_0x259954('\x30\x78\x31\x64\x33','\x72\x78\x44\x28')]=_0x2e9d8a:document[_0x259954('\x30\x78\x31\x64\x65','\x35\x79\x45\x5a')+_0x259954('\x30\x78\x31\x63\x65','\x47\x5d\x35\x73')](_0x259954('\x30\x78\x31\x64\x64','\x29\x70\x6a\x48')+_0x259954('\x30\x78\x31\x65\x33','\x45\x65\x62\x28')+'\x65')[_0x259954('\x30\x78\x31\x65\x36','\x40\x29\x69\x39')]=--_0x4ef06d;},0x3e8);}};
