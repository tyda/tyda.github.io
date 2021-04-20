<?php 
	$db = "tang_page";
	$seo_id = "tang_page_id";
	$$seo_id = 5;
	include_once("includes/includes.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $Init_WebTitle; ?></title>
<?php echo $Init_Metadata; ?>
<link href="css/layout.css" rel="stylesheet" type="text/css" />
<script src="Scripts/swfobject_modified.js" type="text/javascript"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
	<script>
		!window.jQuery && document.write('<script src="jquery-1.4.3.min.js"><\/script>');
	</script>
	<script type="text/javascript" src="./fancybox/jquery.mousewheel-3.0.4.pack.js"></script>
	<script type="text/javascript" src="./fancybox/jquery.fancybox-1.3.4.pack.js"></script>
	<link rel="stylesheet" type="text/css" href="./fancybox/jquery.fancybox-1.3.4.css" media="screen" />
<script type="text/javascript">
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

$(document).ready(function () { $.fancybox({ 'width': 960,'height': 685,'autoScale': false, 'transitionIn': 'fade','transitionOut': 'fade','type': 'iframe','href': 'bun2.php' }); }); 

</script>
</head>
<body oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onload="MM_preloadImages('images/img/bun_P4.jpg');">
<div id="Wrapper">
<div id="Header">
  <object id="FlashID" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1100" height="191">
    <param name="movie" value="images/swf/menu.swf?aa=area4" />
    <param name="quality" value="high" />
    <param name="wmode" value="opaque" />
    <param name="swfversion" value="6.0.65.0" />
    <!-- 此 param 標籤會提示使用 Flash Player 6.0 r65 和更新版本的使用者下載最新版本的 Flash Player。如果您不想讓使用者看到這項提示，請將其刪除。 -->
    <param name="expressinstall" value="Scripts/expressInstall.swf" />
    <!-- 下一個物件標籤僅供非 IE 瀏覽器使用。因此，請使用 IECC 將其自 IE 隱藏。 -->
    <!--[if !IE]>-->
    <object type="application/x-shockwave-flash" data="images/swf/menu.swf" width="1100" height="191">
      <!--<![endif]-->
      <param name="quality" value="high" />
      <param name="wmode" value="opaque" />
      <param name="swfversion" value="6.0.65.0" />
      <param name="expressinstall" value="Scripts/expressInstall.swf" />
      <!-- 瀏覽器會為使用 Flash Player 6.0 和更早版本的使用者顯示下列替代內容。 -->
      <div>
        <h4>這個頁面上的內容需要較新版本的 Adobe Flash Player。</h4>
        <p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="取得 Adobe Flash Player" width="112" height="33" /></a></p>
      </div>
      <!--[if !IE]>-->
    </object>
    <!--<![endif]-->
  </object>
</div>

<div id="Left">
<div id="Left_Vice"></div>
<div id="Left_Title" class="title04"></div>
<?php include("includes/bun.php"); ?>
<?php include("includes/left.php"); ?>
</div><!--Left END-->

<div id="Right"><div id="Right_Text" class="text04"></div></div><!--Right END-->
<div id="Center_BUN">
<div id="Center_Title_BUN"><div id="Caption" class="caption04"></div>
<div id="Subtitle">以創意料理、健康取向、優質服務為理念，走出傳統展現新的美食文化</div>
<div id="Seat">home &gt; <b><?php echo $page_subject; ?></b></div></div><!--Center_Title END-->
<!--<h1 class="bun">阿堂一個卓絕的餐廳，讓顧客能夠吃得隨性吃得自在</h1>-->


<?php echo $page_content; ?>

</div><!--Center END-->
<?php include("includes/fooder.html"); ?>

</div><!--Wrapper END-->
<script type="text/javascript">
swfobject.registerObject("FlashID2");
</script>
</body>
</html>
