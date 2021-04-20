<?php include_once("includes/includes.php"); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $Init_WebTitle; ?></title>
<?php echo $Init_Metadata; ?>
<link href="css/layout.css" rel="stylesheet" type="text/css" />
<link href="css/css.css" rel="stylesheet" type="text/css">

<script type="text/javascript" src="js/jquery-latest.pack.js"></script>
<script src="Scripts/swfobject_modified.js" type="text/javascript"></script>

<script type="text/javascript" src="js/jquery-latest.pack.js"></script>
<link href="js/album.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/picture.js"></script>
<script type="text/javascript" src="js/slide.js"></script>



</head>

<body oncontextmenu="return false" ondragstart="return false" onselectstart="return false">
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
<div id="Center">
<div id="Center_Title"><div id="Caption" class="caption04"></div>
<div id="Subtitle">以創意料理、健康取向、優質服務為理念，走出傳統展現新的美食文化</div>
<div id="Seat">home &gt; <b>阿堂功夫包</b></div></div><!--Center_Title END-->
<h1 class="bun">阿堂一個卓絕的餐廳，讓顧客能夠吃得隨性吃得自在</h1>
<p>阿堂功夫包各色菜單：<br>
請各位朋友來此點選下方類別，PHOTO GALLERY將會出現美味菜色，歡迎您來查詢~~</p>
<a name="menuzone"></a>
<div id="btn_bun"><ul>
<?php
	$tang_x_bun_id = intval($_GET['id']);
	
	//選單
	$left_menu = "";
	$sql = "Select tang_x_bun_id, tang_x_bun From tang_x_bun order by tang_x_bun_sort asc, tang_x_bun_id asc";
	require("control/include/link.php");
	for ($i=0; $i<mysql_num_rows($Result_String); $i++)
	{
		$row = mysql_fetch_assoc($Result_String);
		$left_menu .= "<li><a href=\"".$_SERVER['PHP_SELF']."?id=".$row["tang_x_bun_id"]."#menu\"";
		if ($tang_x_bun_id==$row["tang_x_bun_id"]) {
			$left_menu .= " class=\"stay\"";
			$tang_x_bun = strFront($row["tang_x_bun"]);
		}
		$left_menu .= ">".$row["tang_x_bun"]."</a></li>\n";
	}

	echo $left_menu;
?>
</ul></div>

<img src="images/spacer.gif" width="1" height="50" /><br>

<table width="100%" border="0">
  <tr>
    <td width="25%"><img src="images/img/menu_title.gif" width="151" height="30" /></td>
    <td width="75%">阿堂-功夫包- <span class="font_12-orangepx"><?php echo $tang_x_bun; ?></span> 彙整</td>
  </tr>
</table>

<div id="showbox">
	<div id="showImg">
    
<?php
	$preparation = "=============================圖片準備中=============================<br>";
	if ($tang_x_bun_id==0)	//All
		$sql = "Select subject, subject_en, material, content, Files From tang_bun JOIN (tang_x_bun) ON (tang_bun.tang_x_bun_id=tang_x_bun.tang_x_bun_id) order by tang_x_bun_sort asc, asort asc, tang_bun_id desc limit 1";
	else
		$sql = "Select subject, subject_en, material, content, Files From tang_bun Where tang_x_bun_id = '$tang_x_bun_id' order by asort asc, tang_bun_id desc limit 1";
	require("control/include/link.php");
	for ($i=0; $i<mysql_num_rows($Result_String); $i++)
	{
		$row = mysql_fetch_assoc($Result_String);
		if (trim($row["Files"], "/") && file_exists("uploadfiles/l/".trim($row["Files"], "/")))
			$Files = "uploadfiles/l/".trim($row["Files"], "/");
		else
			$Files = "images/logo.png";
?>
    <div class="abgne_tip_gallery_block">
    <img src="uploadfiles/l/<?php echo trim($row["Files"], "/"); ?>" id="imgB" width="473"/>
    <div class="caption1"></div>
    
   	<div class="caption">
    <?php
		if (trim($row["Files"], "/") && file_exists("uploadfiles/l/".trim($row["Files"], "/")))
			$rel = "<h2>".$row["subject"]."</h2>";
		else
			$rel = $preparation."<h2>".$row["subject"]."</h2>";
		if ($row["subject_en"])	$rel .= "<h4>".$row["subject_en"]."</h4>";		
		if ($row["material"])	$rel .= "<b>食材：</b>".$row["material"];
		if ($row["content"])	$rel .= "<br><b>特色：</b>".$row["content"];
		echo $rel;
	?></div>
	</div>
<?php
	}
?>    
    
    </div>
    <div id="imgList">    	
       <div id="list">
       <ul>
			<?php
                if ($tang_x_bun_id==0)	//All
                    $sql = "Select subject, subject_en, material, content, Files From tang_bun JOIN (tang_x_bun) ON (tang_bun.tang_x_bun_id=tang_x_bun.tang_x_bun_id) order by tang_x_bun_sort asc, asort asc, tang_bun_id desc";
                else
                    $sql = "Select subject, subject_en, material, content, Files From tang_bun Where tang_x_bun_id = '$tang_x_bun_id' order by asort asc, tang_bun_id desc";
                require("control/include/link.php");
                for ($i=0; $i<mysql_num_rows($Result_String); $i++)
                {
                    $row = mysql_fetch_assoc($Result_String);
					if (trim($row["Files"], "/") && file_exists("uploadfiles/l/".trim($row["Files"], "/")))
					{
						echo ($i)?"<li>":"<li class=\"on\">";
						$rel = "<h2>".$row["subject"]."</h2>";
						if ($row["subject_en"])	$rel .= "<h4>".$row["subject_en"]."</h4>";
						if ($row["material"])	$rel .= "<b>食材：</b>".$row["material"];
						if ($row["content"])	$rel .= "<br><b>特色：</b>".$row["content"];
						if (trim($row["Files"], "/") && file_exists("uploadfiles/l/".trim($row["Files"], "/")))
							echo "<img src=\"uploadfiles/s/".trim($row["Files"], "/")."\" rel=\"".$rel."\" />";
						else
							echo "<img src=\"images/logo.png\" rel=\"".$preparation.$rel."\" />";
						echo "</li>\n";
					}
                }
            ?>
             </ul>
           </div>
           </div> 
           
<span id="prv">
 <a href="###"><img src="images/pic/left_btn.jpg" border="0"/></a></span>
<span id="next">
<a href="###"><img src="images/pic/right_btn.jpg" border="0"/></a></span> 
    
</div><div id="shadow"></div>



</div><!--Center END-->
<?php include("includes/fooder.html"); ?>

</div><!--Wrapper END-->
</body>
</html>
