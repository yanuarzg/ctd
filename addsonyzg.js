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
// lazyload adsense dewaplokis
var lazyadsense=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyadsense||0!=document.body.scrollTop&&!1===lazyadsense)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.jsdelivr.net/gh/dewaplokis/block@master/dewablock.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyadsense=!0)},!0);
// auto statically img
var img=document.getElementsByTagName('img');for(var i=0;i<img.length;i++){img[i].src=img[i].src.replace(/[0-9]+.bp.blogspot.com/,"cdn.statically.io/img/3.bp.blogspot.com")};
// Kompiajaib auto statically
for(var imgEl=document.querySelectorAll("img"),i=0;i<imgEl.length;i++)imgEl[i].getAttribute("src")&&(imgEl[i].setAttribute("data-src",imgEl[i].getAttribute("src").replace(/.*?:\/\//g , "https://cdn.statically.io/img/")),imgEl[i].removeAttribute("src"),imgEl[i].className+=" lazyload");
// lazy mgid kompiajaib
var lazymgid=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazymgid||0!=document.body.scrollTop&&!1===lazymgid)&&(!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://jsc.mgid.com/c/a/catatandroid.com.1199831.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),lazymgid=!0)},!0);
// Gradient scrolling bar
var bar_bg=document.getElementById("top-scrollbar-bg"),body=document.body,html=document.documentElement;bar_bg.style.minWidth=document.width+"px",document.getElementsByTagName("body")[0].onresize=function(){bar_bg.style.minWidth=document.width+"px"},window.onscroll=function(){var t=document.getElementById("top-scrollbar"),e=(document.documentElement.clientWidth,Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight)),o=window.innerHeight,o=(pageYOffset||(document.documentElement.clientHeight?document.documentElement:document.body).scrollTop)/(e-o)*100;t.style.width=o+"%"};
// time ago dagruel
function timeAgo(o){var t=(new Date).getTime()-o.getTime(),e=Math.floor(t/1e3),r=Math.floor(e/60),a=Math.floor(r/60),g=Math.floor(a/24),h=Math.floor(g/30),n=Math.floor(h/12);return 0===t?"Just now":e<60?e+" s Ago":r<60?r+" m go":a<24?a+" H ago":g<30?g+" D ago":h<12?h+" Mo ago":n+" years Ago"}
$("time.updated").each(function(){$(this).html(timeAgo(new Date($(this).attr("datetime"))))});
// gtag manager
var LazyAnalytics=false;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&false===LazyAnalytics||0!=document.body.scrollTop&&false===LazyAnalytics)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.src="https://www.googletagmanager.com/gtag/js?id=UA-66906435-3";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),LazyAnalytics=true)},true);
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('js',new Date());gtag('config','UA-66906435-3');
// AntiInspect read-sports blogspot
!function t(){try{!function t(n){1===(""+n/n).length&&0!==n||function(){}.constructor("debugger")(),t(++n)}(0)}catch(n){setTimeout(t,5e3)}}();
