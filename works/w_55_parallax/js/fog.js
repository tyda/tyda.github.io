var fogParticleUrl = "img/fog.png";//物件-霧
var fogGen = setInterval(function(){generateFogParticle();},300);

var pCount = 0;
function generateFogParticle()
{
  pCount++;
  var spn = Math.floor(Math.random() * (300 - 0)) + 0;
  var w = Math.floor(Math.random() * (400 - 200)) + 200;
  var h = Math.floor(Math.random() * (300 - 150)) + 150;
  var t = Math.floor(Math.random() * (40000 - 20000)) + 20000;
  $("#fog").append("<img src='"+fogParticleUrl+"' class='fog-particle' id='particle-"+pCount+"'>");
  var p = $("#particle-"+pCount);
  p.css("width",w);
  p.css("height",h);
  p.css("bottom",""+spn+"px");
  p.animate({opacity:0.1},1500);
  p.animate({left:'-150px'},t,"linear",function()
  {
     $(this).remove(); 
  });

}
