/*
Name:       ImageFlow
Version:    1.2 (August 9 2009)
Author:     Finn Rudolph
Support:    http://finnrudolph.de/ImageFlow

Licence:    ImageFlow is licensed under a Creative Commons 
            Attribution-Noncommercial 3.0 Unported License 
            (http://creativecommons.org/licenses/by-nc/3.0/).

            You are free:
                + to Share - to copy, distribute and transmit the work
                + to Remix - to adapt the work

            Under the following conditions:
                + Attribution. You must attribute the work in the manner specified by the author or licensor 
                  (but not in any way that suggests that they endorse you or your use of the work). 
                + Noncommercial. You may not use this work for commercial purposes. 

            + For any reuse or distribution, you must make clear to others the license terms of this work.
            + Any of the above conditions can be waived if you get permission from the copyright holder.
            + Nothing in this license impairs or restricts the author's moral rights.

Credits:    This script is based on Michael L. Perrys Cover flow in Javascript [1].
            The reflections are generated server-sided by a slightly hacked version 
            of Richard Daveys easyreflections [2] written in PHP. The mouse wheel 
            support is an implementation of Adomas Paltanavicius JavaScript mouse 
            wheel code [3]. It also uses the domReadyEvent from Tanny O'Haley [4].

            [1] http://www.adventuresinsoftware.com/blog/?p=104#comment-1981
            [2] http://reflection.corephp.co.uk/v2.php
            [3] http://adomas.org/javascript-mouse-wheel/
            [4] http://tanny.ica.com/ICA/TKO/tkoblog.nsf/dx/domcontentloaded-for-browsers-part-v
*/

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('u 4l(){9.2z={1Z:1.3U,2n:A,2v:y,2u:\'1p\',K:\'4c\',1G:1.0,2k:4,1F:y,2F:0.4s,2C:1.0,1O:u(){B.4g=9.2f},1w:A,1A:[10,8,6,4,2],1R:3H,2d:1b,2x:y,2j:y,2A:\'\',1x:0.5,2O:A,2w:0.6,25:y,2y:\'e-3z\',1d:14,2I:1,2t:A,1m:4d};t s=9;9.Y=u(a){t b=3W 47(\'1Z\',\'2n\',\'2v\',\'2u\',\'2C\',\'K\',\'1G\',\'2k\',\'2F\',\'1O\',\'1w\',\'1A\',\'1R\',\'2d\',\'2x\',\'2j\',\'2A\',\'1x\',\'2O\',\'1F\',\'2w\',\'25\',\'2y\',\'1d\',\'2I\',\'2t\',\'1m\');t c=b.1z;1f(t i=0;i<c;i++){t d=b[i];9[d]=(a!==1E&&a[d]!==1E)?a[d]:s.2z[d]}t e=B.L(s.K);7(e){e.v.1y=\'2g\';9.M=e;7(9.3q()){9.D=B.L(s.K+\'4q\');9.1X=B.L(s.K+\'4n\');9.1N=B.L(s.K+\'4p\');9.1H=B.L(s.K+\'3r\');9.1U=B.L(s.K+\'3S\');9.2Y=B.L(s.K+\'3R\');9.30=B.L(s.K+\'3X\');9.1D=[];9.1h=0;9.S=0;9.1q=0;9.1r=0;9.20=y;9.2e=y;9.N=A;7(9.25===A){9.1H.v.1s=\'29\'}t f=9.M.2R;t g=X.11(f/s.1Z);B.L(s.K+\'2r\').v.36=((g*0.5)-22)+\'H\';e.v.Z=g+\'H\';9.1Q()}}};9.3q=u(){t a=s.C.V(\'17\',\'3k\');t b=U;t c=9.M.I.1z;1f(t d=0;d<c;d++){b=9.M.I[d];7(b&&b.24==1&&b.26==\'28\'){7(s.2j===y){t e=\'2\';7(s.2O===y){e=\'3\'}t f=b.1i(\'2G\',2);f=\'4F\'+e+\'.4P?4h=\'+f+s.2A;b.1T(\'2G\',f)}t g=b.3G(y);a.T(g)}}t h=s.C.V(\'p\',\'4a\');t i=B.32(\' \');h.T(i);t j=s.C.V(\'17\',\'3c\');t k=s.C.V(\'17\',\'3y\');j.T(k);t l=s.C.V(\'17\',\'3v\');t m=s.C.V(\'17\',\'3B\');t n=s.C.V(\'17\',\'25\');m.T(n);7(s.2n){t o=s.C.V(\'17\',\'3K\',\'3m\');t p=s.C.V(\'17\',\'3P\',\'3m\');m.T(o);m.T(p)}t q=s.C.V(\'17\',\'3Z\');q.T(l);q.T(m);t r=A;7(s.M.T(a)&&s.M.T(h)&&s.M.T(j)&&s.M.T(q)){1f(d=0;d<c;d++){b=9.M.I[d];7(b&&b.24==1&&b.26==\'28\'){9.M.44(b)}}r=y}P r};9.1Q=u(){t p=s.31();7(p<1b||s.2e===y&&s.2x===y){7(s.2e===y&&p==1b){s.2e=A;J.1a(s.1Q,1b)}G{J.1a(s.1Q,40)}}G{B.L(s.K+\'2r\').v.1s=\'29\';B.L(s.K+\'4D\').v.1s=\'29\';J.1a(s.C.33,4j);s.15.Y();s.F.Y();s.E.Y();s.1P.Y();s.2o(y);B.L(s.K+\'3r\').v.1y=\'2g\';t a=s.2I-1;7(a<0){a=0}7(a>s.O){a=s.O-1}s.1g(a);7(s.2t===y){s.1W(3J)}}};9.31=u(){t a=s.D.I.1z;t i=0,1Y=0;t b=U;1f(t c=0;c<a;c++){b=s.D.I[c];7(b&&b.24==1&&b.26==\'28\'){7(b.2s===y){1Y++}i++}}t d=X.11((1Y/i)*1b);t e=B.L(s.K+\'48\');e.v.1j=d+\'%\';t f=B.L(s.K+\'2r\');t g=B.32(\'3c 3k \'+1Y+\'/\'+i);f.4E(g,f.3D);P d};9.2o=u(){9.Q=s.D.2R+s.D.2Q;9.1k=X.11(s.Q/s.1Z);9.1I=s.2k*s.1m;9.1u=s.Q*0.5;9.1d=s.1d*0.5;9.1n=(s.Q-(X.11(s.1d)*2))*s.2w;9.2a=X.11(s.1k*s.2F);s.M.v.Z=s.1k+\'H\';s.D.v.Z=s.2a+\'H\';s.1N.v.Z=(s.1k-s.2a)+\'H\';s.1X.v.1j=s.Q+\'H\';s.1X.v.36=X.11(s.Q*0.2S)+\'H\';s.1H.v.1j=s.1n+\'H\';s.1H.v.4I=X.11(s.Q*0.2S)+\'H\';s.1H.v.2P=X.11(s.1d+((s.Q-s.1n)/2))+\'H\';s.1U.v.2T=s.2y;s.1U.3F=u(){s.F.2c(9);P A};7(s.2n){s.30.1v=u(){s.15.13(1)};s.2Y.1v=u(){s.15.13(-1)}}t a=(s.2j===y)?s.1x+1:1;t b=s.D.I.1z;t i=0;t c=U;1f(t d=0;d<b;d++){c=s.D.I[d];7(c!==U&&c.24==1&&c.26==\'28\'){9.1D[i]=d;c.2f=c.1i(\'3V\');c.42=(-i*s.1m);c.i=i;7(s.20){7(c.1i(\'1j\')!==U&&c.1i(\'Z\')!==U){c.w=c.1i(\'1j\');c.h=c.1i(\'Z\')*a}G{c.w=c.1j;c.h=c.Z}}7((c.w)>(c.h/(s.1x+1))){c.18=s.1R;c.2i=s.1R}G{c.18=s.2d;c.2i=s.2d}7(s.1F===A){c.v.4i=\'4m\';c.v.1s=\'4B\'}c.v.2T=s.2u;i++}}9.O=s.1D.1z;7(s.1F===A){t c=s.D.I[s.1D[0]];9.34=c.w*s.O;c.v.4H=(s.Q/2)+(c.w/2)+\'H\';s.D.v.Z=c.h+\'H\';s.1N.v.Z=(s.1k-c.h)+\'H\'}7(s.20){s.20=A}s.1g(s.S);s.1W(s.1h)};9.1W=u(x){9.1h=x;9.1e=s.O;1f(t a=0;a<s.O;a++){t b=s.D.I[s.1D[a]];t c=a*-s.1m;7(s.1F){7((c+s.1I)<s.1r||(c-s.1I)>s.1r){b.v.1y=\'3a\';b.v.1s=\'29\'}G{t z=(X.4r(4y+x*x)+1b)*s.2C;t d=x/z*s.1u+s.1u;b.v.1s=\'4C\';t e=(b.h/b.w*b.18)/z*s.1u;t f=0;1t(e>s.1k){1l A:f=b.18/z*s.1u;R;1p:e=s.1k;f=b.w*e/b.h;R}t g=(s.2a-e)+((e/(s.1x+1))*s.1x);b.v.3g=d-(b.18/2)/z*s.1u+\'H\';7(f&&e){b.v.Z=e+\'H\';b.v.1j=f+\'H\';b.v.4O=g+\'H\'}b.v.1y=\'2g\';1t(x<0){1l y:9.1e++;R;1p:9.1e=s.1e-1;R}1t(b.i==s.S){1l A:b.1v=u(){s.1g(9.i)};R;1p:9.1e=s.1e+1;7(b.2f!==\'\'){b.1v=s.1O}R}b.v.1e=s.1e}}G{7((c+s.1I)<s.1r||(c-s.1I)>s.1r){b.v.1y=\'3a\'}G{b.v.1y=\'2g\';1t(b.i==s.S){1l A:b.1v=u(){s.1g(9.i)};R;1p:7(b.2f!==\'\'){b.1v=s.1O}R}}s.D.v.2P=(x-s.34)+\'H\'}x+=s.1m}};9.1g=u(a){t x=-a*s.1m;9.1q=x;9.1r=x;9.S=a;t b=s.D.I[a].1i(\'3s\');7(b===\'\'||s.2v===A){b=\'&3t;\'}s.1X.3u=b;7(s.F.N===A){9.1c=(a*s.1n)/(s.O-1)-s.F.2p;s.1U.v.2P=(s.1c-s.1d)+\'H\'}7(s.1w===y||s.1G!==s.2z.1G){s.C.27(s.D.I[a],s.1A[0]);s.D.I[a].18=s.D.I[a].18*s.1G;t c=0;t d=0;t e=0;t f=s.1A.1z;1f(t i=1;i<(s.2k+1);i++){7((i+1)>f){c=s.1A[f-1]}G{c=s.1A[i]}d=a+i;e=a-i;7(d<s.O){s.C.27(s.D.I[d],c);s.D.I[d].18=s.D.I[d].2i}7(e>=0){s.C.27(s.D.I[e],c);s.D.I[e].18=s.D.I[e].2i}}}7(s.N===A){J.1a(s.2q,3j);s.N=y}};9.2q=u(){1t(s.1q<s.1h-1||s.1q>s.1h+1){1l y:s.1W(s.1h+(s.1q-s.1h)/3);J.1a(s.2q,3j);s.N=y;R;1p:s.N=A;R}};9.15={Y:u(){7(J.19){s.M.19(\'3I\',s.15.1B,A)}s.C.12(s.M,\'3N\',s.15.1B)},1B:u(a){t b=0;7(!a){a=J.2b}7(a.3o){b=a.3o/3T}G 7(a.3p){b=-a.3p/3}7(b){s.15.13(b)}s.C.1S(a)},13:u(a){t b=A;t c=0;7(a>0){7(s.S>=1){c=s.S-1;b=y}}G{7(s.S<(s.O-1)){c=s.S+1;b=y}}7(b===y){s.1g(c)}}};9.F={1K:U,2E:0,21:0,2p:0,N:A,Y:u(){s.C.12(s.M,\'46\',s.F.2W);s.C.12(s.M,\'3d\',s.F.1C);s.C.12(B,\'3d\',s.F.1C);s.M.4Q=u(){t a=y;7(s.F.N===y){a=A}P a}},2c:u(o){s.F.1K=o;s.F.2E=s.F.21-o.2Q+s.1c},1C:u(){s.F.1K=U;s.F.N=A},2W:u(e){t a=0;7(!e){e=J.2b}7(e.2J){a=e.2J}G 7(e.3e){a=e.3e+B.2L.2U+B.4o.2U}s.F.21=a;7(s.F.1K!==U){t b=(s.F.21-s.F.2E)+s.1d;7(b<(-s.1c)){b=-s.1c}7(b>(s.1n-s.1c)){b=s.1n-s.1c}t c=(b+s.1c)/(s.1n/(s.O-1));t d=X.11(c);s.F.2p=b;s.F.1K.v.3g=b+\'H\';7(s.S!==d){s.1g(d)}s.F.N=y}}};9.E={x:0,2N:0,1V:0,N:A,2B:y,Y:u(){s.C.12(s.1N,\'4v\',s.E.2c);s.C.12(B,\'4x\',s.E.13);s.C.12(B,\'4z\',s.E.1C)},3f:u(e){t a=A;7(e.2h){7(e.2h[0].1q===s.1N){a=y}}P a},2D:u(e){t x=0;7(e.2h){x=e.2h[0].2J}P x},2c:u(e){s.E.2N=s.E.2D(e);s.E.N=y;s.C.1S(e)},3h:u(){t a=A;7(s.E.N===y){a=y}P a},13:u(e){7(s.E.3h&&s.E.3f(e)){7(s.E.2B){s.E.1V=((s.O-1)-s.S)*(s.Q/(s.O-1));s.E.2B=A}t a=-(s.E.2D(e)-s.E.2N-s.E.1V);7(a<0){a=0}7(a>s.Q){a=s.Q}s.E.x=a;t b=X.11(a/(s.Q/(s.O-1)));b=(s.O-1)-b;7(s.S!==b){s.1g(b)}s.C.1S(e)}},1C:u(){s.E.1V=s.E.x;s.E.N=A}};9.1P={Y:u(){B.4J=u(a){s.1P.13(a)}},13:u(a){t b=s.1P.1B(a);1t(b){1l 39:s.15.13(-1);R;1l 37:s.15.13(1);R}},1B:u(a){a=a||J.2b;P a.4N}};9.C={12:u(a,b,c){7(a.19){a.19(b,c,A)}G 7(a.2X){a["e"+b+c]=c;a[b+c]=u(){a["e"+b+c](J.2b)};a.2X("49"+b,a[b+c])}},27:u(a,b){7(s.1w===y){a.v.1w=b/10;a.v.3M=\'4b(1w=\'+b*10+\')\'}},V:u(a,b,c){t d=B.3w(a);d.1T(\'3i\',s.K+\'3O\'+b);7(c!==1E){b+=\' \'+c}d.1T(\'4f\',b);d.1T(\'3E\',b);P d},1S:u(e){7(e.35){e.35()}G{e.3Q=A}P A},33:u(){t a=J.23;7(1M J.23!=\'u\'){J.23=u(){s.2o()}}G{J.23=u(){7(a){a()}s.2o()}}}}}t 16={2H:"16",1J:{},1o:1,1L:A,2K:U,2V:u(a){7(!a.$$1o){a.$$1o=9.1o++;7(9.1L){a()}9.1J[a.$$1o]=a}},3x:u(a){7(a.$$1o){4t 9.1J[a.$$1o]}},W:u(){7(9.1L){P}9.1L=y;1f(t i 4u 9.1J){9.1J[i]()}},2m:u(){7(9.1L){P}7(/4w|3Y/i.3l(3A.4A)){7(/41|2s/.3l(B.38)){9.W()}G{1a(9.2H+".2m()",1b)}}G 7(B.L("2M")){P y}7(1M 9.2K==="u"){7(1M B.3n!==\'1E\'&&(B.3n(\'2L\')[0]!==U||B.2L!==U)){7(9.2K()){9.W()}G{1a(9.2H+".2m()",43)}}}P y},Y:u(){7(B.19){B.19("4G",u(){16.W()},A)}1a("16.2m()",1b);u W(){16.W()}7(1M 12!=="1E"){12(J,"2Z",W)}G 7(B.19){B.19("2Z",W,A)}G 7(1M J.2l==="u"){t a=J.2l;J.2l=u(){16.W();a()}}G{J.2l=W}/*@45@7(@4K||@3L)B.4L("<3b 3i=2M 4M 2G=\\"//:\\"><\\/3b>");t b=B.L("2M");b.3C=u(){7(9.38=="2s"){16.W()}};@4e@*/}};t 4k=u(a){16.2V(a)};16.Y();',62,301,'|||||||if||this||||||||||||||||||||var|function|style|||true||false|document|Helper|imagesDiv|Touch|MouseDrag|else|px|childNodes|window|ImageFlowID|getElementById|ImageFlowDiv|busy|max|return|imagesDivWidth|break|imageID|appendChild|null|createDocumentElement|run|Math|init|height||round|addEvent|handle||MouseWheel|domReadyEvent|div|pc|addEventListener|setTimeout|100|newSliderX|sliderWidth|zIndex|for|glideTo|current|getAttribute|width|maxHeight|case|xStep|scrollbarWidth|domReadyID|default|target|memTarget|display|switch|size|onclick|opacity|reflectionP|visibility|length|opacityArray|get|stop|indexArray|undefined|imageScaling|imageFocusM|scrollbarDiv|maxFocus|events|object|bDone|typeof|navigationDiv|onClick|Key|loadingProgress|percentLandscape|suppressBrowserDefault|setAttribute|sliderDiv|stopX|moveTo|captionDiv|completed|aspectRatio|firstRefresh|mouseX||onresize|nodeType|slider|nodeName|setOpacity|IMG|none|imagesDivHeight|event|start|percentOther|firstCheck|url|visible|touches|pcMem|reflections|imageFocusMax|onload|schedule|buttons|refresh|newX|animate|_loading_txt|complete|startAnimation|imageCursor|captions|scrollbarP|preloadImages|sliderCursor|defaults|reflectionGET|first|imagesM|getX|objectX|imagesHeight|src|name|startID|pageX|DOMContentLoadedCustom|body|__ie_onload|startX|reflectionPNG|marginLeft|offsetLeft|offsetWidth|02|cursor|scrollLeft|add|drag|attachEvent|buttonNextDiv|load|buttonPreviousDiv|loadingStatus|createTextNode|addResizeEvent|totalImagesWidth|preventDefault|paddingTop||readyState||hidden|script|loading|mouseup|clientX|isOnNavigationDiv|left|isBusy|id|50|images|test|button|getElementsByTagName|wheelDelta|detail|createStructure|_scrollbar|alt|nbsp|innerHTML|caption|createElement|remove|loading_bar|resize|navigator|scrollbar|onreadystatechange|firstChild|className|onmousedown|cloneNode|118|DOMMouseScroll|5000|previous|_win64|filter|mousewheel|_|next|returnValue|_next|_slider|120|964|longdesc|new|_previous|WebKit|navigation||loaded|xPosition|250|removeChild|cc_on|mousemove|Array|_loading_bar|on|loading_txt|alpha|imageflow|150|end|class|location|img|position|1000|domReady|ImageFlow|relative|_caption|documentElement|_navigation|_images|sqrt|67|delete|in|touchstart|KHTML|touchmove|10000|touchend|userAgent|inline|block|_loading|replaceChild|reflect|DOMContentLoaded|paddingLeft|marginTop|onkeydown|_win32|write|defer|keyCode|top|php|onselectstart'.split('|'),0,{}));

/* Create ImageFlow instances when the DOM structure has been loaded */
domReady(function()
{	var Instance1 = new ImageFlow();
	Instance1.init({ ImageFlowID:'Instance_1',
		captions:false,                    /* ???????????? */
		slider:false,                      /* ???????????? */
		reflections:false, 
		xStep: 150  ,                      /* ??????x????????? */
		reflectionP:0.4,                   /* ???????????????????????? */
		opacity:true,                      /* ???????????? */
		opacityArray: [10,6,3,1] ,         /* ?????????????????????0~10 */
		startID:5,                         /* ?????????????????????ID */
		startAnimation:true,               /* ?????????????????? */
		preloadImagesText: '???????????????...' ,/*???????????????????????????*/
		imageFocusM:1.2 }); /* ????????????????????? */
	
	
	
	var Instance2 = new ImageFlow();
	Instance2.init({ ImageFlowID:'Instance_2',
		reflections: false, 
        reflectionP: 0.0, /* ???????????????????????? */
		opacity:true,                      /* ???????????? */
		opacityArray: [10,9,8,8,7,7] ,         /* ?????????????????????0~10 */
		imageFocusMax: 8,/* ??????????????????????????? */
        slider: false,/* ???????????? */
		startID: 1, });/* ?????????????????????ID */



	var Instance3 = new ImageFlow();
	Instance3.init({ ImageFlowID: 'Instance_3',
         captions:false,                    /* ???????????? */ 
         imageScaling: false, /* ?????????????????? */ 
         reflections: false, 
		 buttons: true,                    /* ????????????????????????*/
		 slider: false,/* ???????????? */
         xStep: 90, /* ??????x????????? */
         imageFocusMax: 5 });/* ??????????????????????????? */
		 

});