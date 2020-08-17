/* JavaScript */


              new WOW().init();


function countdown(){
				var now = new Date();
				var eventDate = new Date(2019, 12, 30);

				var currentTiime = now.getTime();
				var eventTime = eventDate.getTime();

				var remTime = eventTime - currentTiime;

				var s = Math.floor(remTime / 1000);
				var m = Math.floor(s / 60);
				var h = Math.floor(m / 60);
				var d = Math.floor(h / 24)-30;

				h %= 24;
				m %= 60;
				s %= 60;

				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

				document.getElementById("days").innerHTML = "<span>"+  d + " :"+"</span>";
				document.getElementById("hours").innerHTML ="<span>"+  h + " :"+"</span>";
				document.getElementById("minutes").innerHTML = "<span>"+  m + " :"+"</span>";
				document.getElementById("seconds").innerHTML = "<span>"+  s + " "+"</span>";

				setTimeout(countdown, 1000);
			}

			countdown();
function countdown1(){
				var now = new Date();
				var eventDate = new Date(2019, 12, 30);

				var currentTiime = now.getTime();
				var eventTime = eventDate.getTime();

				var remTime = eventTime - currentTiime;

				var s = Math.floor(remTime / 1000);
				var m = Math.floor(s / 60);
				var h = Math.floor(m / 60);
				var d = Math.floor(h / 24)-30;

				h %= 24;
				m %= 60;
				s %= 60;

				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

				document.getElementById("days1").innerHTML = "<span>"+  d + " :"+"</span>";
				document.getElementById("hours1").innerHTML ="<span>"+  h + " :"+"</span>";
				document.getElementById("minutes1").innerHTML = "<span>"+  m + " :"+"</span>";
				document.getElementById("seconds1").innerHTML = "<span>"+  s + " "+"</span>";

				setTimeout(countdown1, 1000);
			}



              
