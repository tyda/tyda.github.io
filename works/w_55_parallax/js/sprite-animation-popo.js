(function() {

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

(function () {
			
	var coin,coin2,
		coinImage,
		canvas;			

    var popoCount =0;

function gameLoop () {
	if(popoCount <=51 && checkboboBroken){
		window.requestAnimationFrame(gameLoop);
		popoCount ++;
	    coin.update();
	    coin.render();
	}
}
  function gameLoop2 () {
	    coin.update();
	    coin.render();
	}

	function sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		
		that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;
				
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {	
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };
		
		that.render = function () {
		
		  // Clear the canvas
		  that.context.clearRect(0, 0, that.width, that.height);
		  
		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    0,
		    0,
		    that.width / numberOfFrames,
		    that.height);
		};
		
		return that;
	}
	function GetCanvas(frames){
      canvas = document.getElementById("popo_js");
	  canvas.width = 690;
	  canvas.height = 675;
	
	  // Create sprite sheet
	  coinImage = new Image();	
	
	  // Create sprite
	  coin = sprite({
	 	context: canvas.getContext("2d"),
		width: 6210,
		height: 675,
		image: coinImage,
		numberOfFrames: frames,
		ticksPerFrame: 5 
	  });
	}
	
  var checkonce=false;
  var checkboboBroken=false;
 
  var targetBB = $(".area_BB").offset().top;
  
  var intervalBB = setInterval(function() {

  if (!checkboboBroken && $(window).scrollTop() >= targetBB) {
		GetCanvas(9);
		checkboboBroken=true;
		popoCount=0;
	    coinImage.addEventListener("load", gameLoop);
	    coinImage.src = "img/popo_02.png";
  }
  if(checkboboBroken && $(window).scrollTop() < targetBB){
		GetCanvas(0);
		checkboboBroken=false;
	    coinImage.addEventListener("load", gameLoop2);
	    coinImage.src = "img/popo_02.png";
   }
  }, 300);

  if(!checkonce){
	 GetCanvas(0);
     coinImage.addEventListener("load", gameLoop2);
     coinImage.src = "img/popo_02.png";
     checkone=true;
   }


} ());



