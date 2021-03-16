// nav fix onscroll

window.onload =function(){
		const EFFECT =document.querySelector("#navigare_fix");

		window.addEventListener("scroll", scrollEffect);

		function scrollEffect(){
			if(window.scrollY>= 160) {
				EFFECT.style.opacity= "1";
				EFFECT.style.transform= "translateY(0px)";
				EFFECT.style.transition = "1s ease-in-out";
			}
			else {
				EFFECT.style.opacity = "0";
				EFFECT.style.transform = "translateY(-50px)";
			}
		}
		scrollEffect()
	}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~animatii avioane culori ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function animatia1() {
    document.getElementById("container-avion-rosu").style.animation = "avion1 3s ease-out forwards 1";
    document.getElementById("container-avion-rosu").style.display = "inline";
    document.getElementById("triunghi-jos-alege").style.display = "block";
    document.getElementById("agata-roz").style.opacity = 0;
    document.getElementById("agata-portocaliu").style.opacity = 0;
    document.getElementById("agata-galben").style.opacity = 0;
    document.getElementById("agata-alb").style.opacity = 0;
    document.getElementById("agata-verde").style.opacity = 0;
    document.getElementById("agata-violet").style.opacity = 0;
    document.getElementById("agata-maro").style.opacity = 0;
    document.getElementById("agata-gri").style.opacity = 0;
    document.getElementById("agata-negru").style.opacity = 0;
} 
document.getElementById("agata-rosu").addEventListener("click", function(){
  setTimeout(function(){
    window.location.href ="../rosu/rosu.html";
  }, 3000);
});

function animatia2() {
    document.getElementById("container-avion-roz").style.animation = "avion2 4s ease-out forwards 1";
    document.getElementById("container-avion-roz").style.display = "inline";
    document.getElementById("agata-rosu").style.opacity = 0;
    document.getElementById("agata-portocaliu").style.opacity = 0;
    document.getElementById("agata-galben").style.opacity = 0;
    document.getElementById("agata-alb").style.opacity = 0;
    document.getElementById("agata-verde").style.opacity = 0;
    document.getElementById("agata-violet").style.opacity = 0;
    document.getElementById("agata-maro").style.opacity = 0;
    document.getElementById("agata-gri").style.opacity = 0;
    document.getElementById("agata-negru").style.opacity = 0;
}
document.getElementById("agata-roz").addEventListener("click", function(){
  setTimeout(function(){
    window.location.href ="../roz/roz.html";
  }, 4000);
});

function animatia3() {
    document.getElementById("container-avion-portocaliu").style.animation = "avion3 4s ease-out forwards 1";
    document.getElementById("container-avion-portocaliu").style.display = "inline";
    document.getElementById("agata-rosu").style.opacity = 0;
    document.getElementById("agata-roz").style.opacity = 0;
    document.getElementById("agata-galben").style.opacity = 0;
    document.getElementById("agata-alb").style.opacity = 0;
    document.getElementById("agata-verde").style.opacity = 0;
    document.getElementById("agata-violet").style.opacity = 0;
    document.getElementById("agata-maro").style.opacity = 0;
    document.getElementById("agata-gri").style.opacity = 0;
    document.getElementById("agata-negru").style.opacity = 0;
}
document.getElementById("agata-portocaliu").addEventListener("click", function(){
  setTimeout(function(){
    window.location.href ="../portocaliu/portocaliu.html";
  }, 4000);
});

function animatia4() {
    document.getElementById("container-avion-galben").style.animation = "avion4 3s ease-out forwards 1";
    document.getElementById("container-avion-galben").style.display = "inline";
    document.getElementById("agata-rosu").style.opacity = 0;
    document.getElementById("agata-roz").style.opacity = 0;
    document.getElementById("agata-portocaliu").style.opacity = 0;
    document.getElementById("agata-alb").style.opacity = 0;
    document.getElementById("agata-verde").style.opacity = 0;
    document.getElementById("agata-violet").style.opacity = 0;
    document.getElementById("agata-maro").style.opacity = 0;
    document.getElementById("agata-gri").style.opacity = 0;
    document.getElementById("agata-negru").style.opacity = 0;
};
document.getElementById("agata-galben").addEventListener("click", function(){
  setTimeout(function(){
    window.location.href ="../galben/galben.html";
  }, 2400);
});


function animatia5() {
    document.getElementById("container-avion-alb").style.animation = "avion5 3s ease-out forwards 1";
    document.getElementById("container-avion-alb").style.display = "inline";
    document.getElementById("agata-rosu").style.opacity = 0;
    document.getElementById("agata-roz").style.opacity = 0;
    document.getElementById("agata-portocaliu").style.opacity = 0;
    document.getElementById("agata-galben").style.opacity = 0;
    document.getElementById("agata-verde").style.opacity = 0;
    document.getElementById("agata-violet").style.opacity = 0;
    document.getElementById("agata-maro").style.opacity = 0;
    document.getElementById("agata-gri").style.opacity = 0;
    document.getElementById("agata-negru").style.opacity = 0;
}
document.getElementById("agata-alb").addEventListener("click", function(){
  setTimeout(function(){
    window.location.href ="../alb/alb.html";
  }, 2400);
});

function animatia6() {
    document.getElementById("container-avion-verde").style.animation = "avion6 3s ease-out forwards 1";
    document.getElementById("container-avion-verde").style.display = "inline";
    document.getElementById("agata-rosu").style.opacity = 0;
    document.getElementById("agata-roz").style.opacity = 0;
    document.getElementById("agata-portocaliu").style.opacity = 0;
    document.getElementById("agata-galben").style.opacity = 0;
    document.getElementById("agata-alb").style.opacity = 0;
    document.getElementById("agata-violet").style.opacity = 0;
    document.getElementById("agata-maro").style.opacity = 0;
    document.getElementById("agata-gri").style.opacity = 0;
    document.getElementById("agata-negru").style.opacity = 0;
}
document.getElementById("agata-verde").addEventListener("click", function(){
  setTimeout(function(){
    window.location.href ="../verde/verde.html";
  }, 2400);
});


function animatia8() {
    document.getElementById("container-avion-violet").style.animation = "avion8 5.5s ease-out forwards 1";
    document.getElementById("container-avion-violet").style.display = "inline";
    document.getElementById("agata-rosu").style.opacity = 0;
    document.getElementById("agata-roz").style.opacity = 0;
    document.getElementById("agata-portocaliu").style.opacity = 0;
    document.getElementById("agata-galben").style.opacity = 0;
    document.getElementById("agata-alb").style.opacity = 0;
    document.getElementById("agata-verde").style.opacity = 0;
    document.getElementById("agata-maro").style.opacity = 0;
    document.getElementById("agata-gri").style.opacity = 0;
    document.getElementById("agata-negru").style.opacity = 0;
}
document.getElementById("agata-violet").addEventListener("click", function(){
  setTimeout(function(){
    window.location.href ="../violet/violet.html";
  }, 5500);
});

function animatia9() {
    document.getElementById("container-avion-maro").style.animation = "avion9 3s ease-out forwards 1";
    document.getElementById("container-avion-maro").style.display = "inline";
    document.getElementById("agata-rosu").style.opacity = 0;
    document.getElementById("agata-roz").style.opacity = 0;
    document.getElementById("agata-portocaliu").style.opacity = 0;
    document.getElementById("agata-galben").style.opacity = 0;
    document.getElementById("agata-alb").style.opacity = 0;
    document.getElementById("agata-verde").style.opacity = 0;
    document.getElementById("agata-violet").style.opacity = 0;
    document.getElementById("agata-gri").style.opacity = 0;
    document.getElementById("agata-negru").style.opacity = 0;
}
document.getElementById("agata-maro").addEventListener("click", function(){
  setTimeout(function(){
    window.location.href ="../maro/maro.html";
  }, 2400);
});

function animatia10() {
    document.getElementById("container-avion-gri").style.animation = "avion10 3s ease-out forwards 1";
    document.getElementById("container-avion-gri").style.display = "inline";
    document.getElementById("agata-rosu").style.opacity = 0;
    document.getElementById("agata-roz").style.opacity = 0;
    document.getElementById("agata-portocaliu").style.opacity = 0;
    document.getElementById("agata-galben").style.opacity = 0;
    document.getElementById("agata-alb").style.opacity = 0;
    document.getElementById("agata-verde").style.opacity = 0;
    document.getElementById("agata-violet").style.opacity = 0;
    document.getElementById("agata-maro").style.opacity = 0;
    document.getElementById("agata-negru").style.opacity = 0;
}
document.getElementById("agata-gri").addEventListener("click", function(){
  setTimeout(function(){
    window.location.href ="../gri/gri.html";
  }, 2400);
});

function animatia11() {
    document.getElementById("container-avion-negru").style.animation = "avion11 3s ease-out forwards 1";
    document.getElementById("container-avion-negru").style.display = "inline";
    document.getElementById("agata-rosu").style.opacity = 0;
    document.getElementById("agata-roz").style.opacity = 0;
    document.getElementById("agata-portocaliu").style.opacity = 0;
    document.getElementById("agata-galben").style.opacity = 0;
    document.getElementById("agata-alb").style.opacity = 0;
    document.getElementById("agata-verde").style.opacity = 0;
    document.getElementById("agata-violet").style.opacity = 0;
    document.getElementById("agata-maro").style.opacity = 0;
    document.getElementById("agata-gri").style.opacity = 0;
}
document.getElementById("agata-negru").addEventListener("click", function(){
  setTimeout(function(){
    window.location.href ="../negru/negru.html";
  }, 3000);
});


