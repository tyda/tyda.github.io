 var cols = [ 
  "Aquamarine"
];

"use strict";

(function () {

	"use strict";

	var fountainScene = function fountainScene(canvas) {

		var width = canvas.width;
		var height = canvas.height;
		var radius = 1;
		var speed = 1.8;
		var g = 2.81;
		var maxAngle = 13 * (Math.PI / 180);

		var requestId = undefined;

		var getSparks = function () {

			var sparks = [];

			var removeSparks = function removeSparks(time) {

				if (!sparks.length) {
					return;
				}

				if (sparks[0].tEnd < time) {
					sparks.length = 0;
				} else {
						var nSparks = sparks.length;
						var remove = 0;
						for (var i = nSparks - 1; i > 0; i--) {
							if (sparks[i].tEnd < time) {
								remove++;
							} else {
								break;
							}
						}
						if (remove > 0) {
							if (remove === 1) {
								sparks.pop();
							} else {
								sparks.splice(-remove, remove);
							}
						}
					}
			};

			var addSparks = function () {

				var rate = 125;

				var nextRandom = Math.random;

				var getExponential = function getExponential() {
					var rate = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

					return -Math.log(1 - nextRandom()) / rate;
				};

				var getRandomCol = function () {
					var colSet = cols;
					var min = 0;
					var max = colSet.length;
					return function () {
						return colSet[Math.floor(Math.random() * (max - min)) + min];
					};
				}();

				var nextSparkTime = performance.now() / 1000;

				var addSpark = function addSpark(time) {
					var theta = nextRandom() * maxAngle;
					var tof = 2 * speed * Math.cos(theta) / g;
					var tEnd = nextSparkTime + tof;
					if (tEnd < time) {
						return;
					}

					var spark = Object.freeze({
						t0: nextSparkTime,
						tEnd: tEnd,
						theta: nextRandom() < 0.5 ? -theta : theta,
						v0: speed,
						col: getRandomCol()
					});

					var counter = 0;
					var nSparks = sparks.length;
					var foundPos = false;

					while (counter < nSparks) {
						var compare = sparks[counter];
						if (spark.tEnd < compare.tEnd) {
							counter++;
						} else {
							foundPos = true;
							if (counter === 0) {
								sparks.unshift(spark);
							} else {
								sparks.splice(counter, 0, spark);
							}
							break;
						}
					}

					if (!foundPos) {
						sparks.push(spark);
					}
				};

				return function (time) {
					while (nextSparkTime <= time) {
						addSpark(time);
						nextSparkTime += getExponential(rate);
					}
				};
			}();

			var getPositions = function () {

				var mToPx = 100;

				var xScale = function () {
					var c = width / 2;
					var m = mToPx;
					return function (val) {
						return m * val + c;
					};
				}();

				var yScale = function () {
					var c = height + radius;
					var m = -mToPx;
					return function (val) {
						return m * val + c;
					};
				}();

				return function (time) {
					var out = [];
					sparks.forEach(function (spark) {
						var t = time - spark.t0;
						var vt = spark.v0 * t;
						var theta = spark.theta;
						out.push({
							x: xScale(vt * Math.sin(theta)),
							y: yScale(vt * Math.cos(theta) - 0.5 * g * Math.pow(t, 2)),
							col: spark.col
						});
					});
					return out;
				};
			}();

			return function (time) {
				removeSparks(time);
				addSparks(time);
				return getPositions(time);
			};
		}();

		var draw = function () {

			var c = canvas.getContext("2d");
			c.globalCompositeOperation = "screen";
			var fullCircle = 2 * Math.PI;

			return function (sparks) {
				c.clearRect(0, 0, width, height);
				var nSparks = sparks.length;

				if (nSparks) {
					for (var i = 0; i < nSparks; i++) {
						c.beginPath();
						var spark = sparks[i];
						c.fillStyle = spark.col;
						var x = spark.x;
						var y = spark.y;
						c.moveTo(x, y);
						c.arc(x, y, radius, 0, fullCircle, false);
						c.fill();
					}
				}
			};
		}();

		var animate = function animate(time) {
			requestId = window.requestAnimationFrame(animate);
			var sparks = getSparks(time / 1000);
			draw(sparks);
		};

		var _startAnimation = function _startAnimation() {
			requestId = window.requestAnimationFrame(animate);
		};

		var _stopAnimation = function _stopAnimation() {
			if (requestId) {
				window.cancelAnimationFrame(requestId);
			}
			requestId = undefined;
		};

		return Object.freeze({
			startAnimation: function startAnimation() {
				_startAnimation();return this;
			},
			stopAnimation: function stopAnimation() {
				_stopAnimation();return this;
			}
		});
	};

	var scene = fountainScene(document.getElementById("fountain-canvas"));

	scene.startAnimation();
})();