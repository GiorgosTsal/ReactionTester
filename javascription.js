			var average = 0;
			var total = 0;
			
			var start = new Date().getTime();
			var numberOfTestsTaken = 0;
			function getRandomArbitrary(min, max) {
				return Math.random() * (max - min) + min;
			}
			
			function makeShapeAppear() {
				
				var top = Math.floor((Math.random() * 400) + 1);
				var left = Math.floor((Math.random() * 600) + 1);
				var width = Math.floor((Math.random() * 100) + 30);
				var height = width;
				var  color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"
				var assistant = Math.random();     
				if (assistant < 0.5){
					document.getElementById("shape").style.borderRadius  = "100%";
				} else {
					document.getElementById("shape").style.borderRadius  = "0%";
				}
				
				document.getElementById("shape").style.backgroundColor = color;
				document.getElementById("shape").style.top = top;
				document.getElementById("shape").style.left = left;
				document.getElementById("shape").style.width = width;
				document.getElementById("shape").style.height = height;
				document.getElementById("shape").style.display = "block";
				
				start = new Date().getTime();
			}
			
			var  randomTimeToAppearNew = Math.floor((Math.random() * 3000) + 1);
			setTimeout(makeShapeAppear, randomTimeToAppearNew);
			
			document.getElementById("shape").onclick = function () {
			
			document.getElementById("shape").style.display = "none";
			var end = new Date().getTime();
			var time = (end - start)/1000;
			document.getElementById("yourTime").innerHTML = time + " sec";
			randomTimeToAppearNew = Math.floor((Math.random() * 3000) + 1);
			setTimeout(makeShapeAppear, randomTimeToAppearNew);
			
			numberOfTestsTaken++
			
			total = total + time;
			average = total / numberOfTestsTaken ;
			
			}
			
			document.getElementById("results").onclick = function() {
				
				document.getElementById("avgResults").innerHTML = average;
			}