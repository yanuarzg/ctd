function showlatestposts(e){for(var t=0;t<posts_no;t++){var r,s=e.feed.entry[t],n=s.title.$t;if(t==e.feed.entry.length)break;for(var a=0;a<s.link.length;a++)if("alternate"==s.link[a].rel){r=s.link[a].href;break}n=n.link(r);var i="... read more";i=i.link(r);var l=s.published.$t,o=l.substring(0,4),u=l.substring(5,7),c=l.substring(8,10),m=new Array;if(m[1]="Jan",m[2]="Feb",m[3]="Mar",m[4]="Apr",m[5]="May",m[6]="Jun",m[7]="Jul",m[8]="Aug",m[9]="Sep",m[10]="Oct",m[11]="Nov",m[12]="Dec","content"in s)var d=s.content.$t;else if("summary"in s)var d=s.summary.$t;else var d="";var v=/<\S[^>]*>/g;if(d=d.replace(v,""),document.write('<li class="recent-post-title">'),document.write(n),document.write('</li><div class="recent-post-summ">'),1==post_summary)if(d.length<summary_chars)document.write(d);else{d=d.substring(0,summary_chars);var f=d.lastIndexOf(" ");d=d.substring(0,f),document.write(d+" "+i)}document.write("</div>"),1==posts_date&&document.write('<div class="post-date">'+m[parseInt(u,10)]+" "+c+" "+o+"</div>")}};
var posts_no = 4;
var showpoststhumbs = false;
var readmorelink = false;
var showcommentslink = false;
var posts_date = true;
var post_summary = false;
var summary_chars = 80;
