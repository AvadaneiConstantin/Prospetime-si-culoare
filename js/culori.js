//apare nav fix onscroll 
window.onload = function () {
    const EFFECT = document.querySelector("#navigare_fix");

    window.addEventListener("scroll", scrollEffect);

    function scrollEffect() {
        if (window.scrollY >= 160) {
            EFFECT.style.opacity = "1";
            EFFECT.style.transform = "translateY(0px)";
            EFFECT.style.transition = "1s ease-in-out";
        } else {
            EFFECT.style.opacity = "0";
            EFFECT.style.transform = "translateY(-50px)";
        }
    }
    scrollEffect()
}


// Se schimba imaginea la div "container_sus" in functie de anotimp
const currentTime = new Date();
const month = currentTime.getMonth() + 1;
const total = month;

// Primavara
if (total >= 3 && total <= 5) {
    document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/94mic.jpg')";
    document.getElementById("imagineText").style.backgroundImage = "url('imagini/94mic.jpg')";
    document.getElementById("despreCulori").style.backgroundImage = "url('imagini/94mic.jpg')";
    document.getElementById("primul_text_sus").style.cssText = "color : #00f2fc; text-shadow : 2px 1px 3px black; top: 70px; left: 50%; ";
}
// Vara
else if (total >= 6 && total <= 8) {
    document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/31-3.jpg')";
    document.getElementById("imagineText").style.backgroundImage = "url('imagini/31-3.jpg')";
    document.getElementById("despreCulori").style.backgroundImage = "url('imagini/31-3.jpg')";
    document.getElementById("primul_text_sus").style.cssText = "color : #210B61;text-shadow : 2px 1px 3px black; top: 90px; left: 78%; ";
}
// Toamna
else if (total >= 9 && total <= 11) {
    document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/top12.jpg')";
    document.getElementById("imagineText").style.backgroundImage = "url('imagini/top12.jpg')";
    document.getElementById("despreCulori").style.backgroundImage = "url('imagini/top12.jpg')";
    document.getElementById("primul_text_sus").style.cssText = "text-shadow : 2px 1px 3px black; color : #210B61; top: 50px; left: 52%;";
}
// Iarna
else if (total == 12 || total <= 2) {
    document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/93mic.jpg')";
    document.getElementById("imagineText").style.backgroundImage = "url('imagini/93mic.jpg')";
    document.getElementById("despreCulori").style.backgroundImage = "url('imagini/93mic.jpg')";
    document.getElementById("primul_text_sus").style.cssText = " text-shadow : 2px 1px 3px black; color : rgb(157,205,239); top: 70px;";
};

// la click pe butonPatrate se reseteaza meniul dreapta daca este deschis
document.getElementById("butonPatrate").addEventListener("click", function () {
    document.getElementById("ContainerNavigareAnimata").style.display = "none";
    document.getElementById("navigare").style.display = "none";
    document.getElementById("ascunde-navigare").style.display = "none";
    document.getElementById("arata-navigare").style.display = "inline";
    document.getElementById("variantaDoi").style.display = "none";
    document.getElementById("variantaUnu").style.display = "none";
    document.getElementById("linie-nav1").style.animation = "paused";
    document.getElementById("linie-nav2").style.animation = "paused";
    document.getElementById("linie-nav3").style.animation = "paused";
});

// la click pe butonPatrate apare si dispare meniul cu imagini mici stanga
// la click pe butonPatrate butonul se misca dreapta si inapoi
function buton_arata_si_ascunde_imagini_stanga() {
    let arata = document.getElementById('butonPatrate');
    if (arata.style.display === 'inline') {
        arata.style.display = 'inline-block';
        document.getElementById("butonPatrate").innerHTML = "Hide Images";
        document.getElementById("butonPatrate").style.transform = "translateX(290px)";
        document.getElementById("container_patrate_stanga").style.transform = "translateX(0px)";
        document.getElementById("container_hide").style.display = "none";
    } else if (arata.style.display === 'inline-block') {
        arata.style.display = 'inline';
        document.getElementById("butonPatrate").innerHTML = "Show Images";
        document.getElementById("butonPatrate").style.transform = "translateX(0px)";
        document.getElementById("container_patrate_stanga").style.transform = "translateX(-290px)";
        setTimeout(function () {
            document.getElementById("container_hide").style.display = "inline";
        }, 600);

    } else {
        arata.style.display = 'inline-block';
        document.getElementById("butonPatrate").innerHTML = "Hide Images";
        document.getElementById("butonPatrate").style.transform = "translateX(290px)";
        document.getElementById("container_patrate_stanga").style.transform = "translateX(0px)";
        document.getElementById("container_hide").style.display = "none";
    }
};

// la click pe navMenu se reseteaza butonPatrate si imaginile mici stanga
document.getElementById("arata-navigare").addEventListener("click", function () {
    document.getElementById("butonPatrate").innerHTML = " Show Images";
    document.getElementById("butonPatrate").style.display = "inline";
    document.getElementById("butonPatrate").style.transform = "translateX(0px)";
    document.getElementById("container_patrate_stanga").style.transform = "translateX(-290px)";
    // animatie la liniute la deschidere meniu
    document.getElementById("linie-nav3").style.animation = "liniuta3 1.2s ease-out ";
    document.getElementById("linie-nav1").style.animation = "liniuta1 1.2s ease-out ";
    document.getElementById("linie-nav2").style.animation = "liniuta2 1.2s ease-out ";
    document.getElementById("semnX").style.animation = "paused";
    setTimeout(function () {
        document.getElementById("container_hide").style.display = "inline";
    }, 700);
    // arata meniu de navigare 
    setTimeout(function () {
        document.getElementById("ascunde-navigare").style.display = "inline";
        document.getElementById("arata-navigare").style.display = "none";
        document.getElementById("variantaDoi").style.display = "inline";
        document.getElementById("semnX").style.animation = "paused";
    }, 1200);
    // apare background cu alb la meniu 
    setTimeout(function () {
        document.getElementById("ContainerNavigareAnimata").style.backgroundImage = "linear-gradient(to left, rgba(255,255,255,0.3) 80% , rgba(255,255,255,0) 100%)";
        document.getElementById("ContainerNavigareAnimata").style.visibility = "visible";
    }, 1900);
});

// apar pe rand adresele de navigare varianta principala
function apare_pe_rand_navigare_animata() {
    setTimeout(function () {
        document.getElementById("ContainerNavigareAnimata").style.display = "inline";
        document.getElementById("containerUmbraUsa").style.visibility = "visible";
    }, 300);
    setTimeout(function () {
        document.getElementById("containerMesaj").style.visibility = "visible";
    }, 500);
    setTimeout(function () {
        document.getElementById("containerShoppingCart").style.visibility = "visible";
    }, 700);
    setTimeout(function () {
        document.getElementById("containerChat").style.visibility = "visible";
        document.getElementById("butonChat").style.visibility = "visible";
    }, 900);
    setTimeout(function () {
        document.getElementById("containerCompari").style.visibility = "visible";
        document.getElementById("compariUnu").style.display = "inline";
        document.getElementById("compariDoi").style.display = "inline";
        document.getElementById("compariTrei").style.display = "inline";
    }, 1100);
    setTimeout(function () {
        document.getElementById("setari").style.visibility = "visible";
    }, 1300);
    setTimeout(function () {
        document.getElementById("containerCasa").style.visibility = "visible";
    }, 1500);
    setTimeout(function () {
        document.getElementById("lupa").style.visibility = "visible";
        document.getElementById("butonLupa").style.visibility = "visible"; // document.getElementById("ContainerNavigareAnimata").style.backgroundImage = "linear-gradient(to left, rgba(255,255,255,0.3) 80%, rgba(255,255,255,0))";
    }, 1700);
};


// dispar elementele de navigare- varianta unu, pe rand
function dispare_pe_rand_navigare_animata() {
    setTimeout(function () {
        document.getElementById("ContainerNavigareAnimata").style.display = "inline";
        document.getElementById("lupa").style.visibility = "hidden";
        document.getElementById("butonLupa").style.visibility = "hidden";
    }, 150);
    setTimeout(function () {
        document.getElementById("containerCasa").style.visibility = "hidden";
    }, 300);
    setTimeout(function () {
        document.getElementById("setari").style.visibility = "hidden";
    }, 450);
    setTimeout(function () {
        document.getElementById("containerCompari").style.visibility = "hidden";
        document.getElementById("compariUnu").style.display = "none";
        document.getElementById("compariDoi").style.display = "none";
        document.getElementById("compariTrei").style.display = "none";
    }, 600);
    setTimeout(function () {
        document.getElementById("containerChat").style.visibility = "hidden";
        document.getElementById("butonChat").style.visibility = "hidden";
    }, 750);
    setTimeout(function () {
        document.getElementById("containerShoppingCart").style.visibility = "hidden";
    }, 900);
    setTimeout(function () {
        document.getElementById("containerMesaj").style.visibility = "hidden";
    }, 1050);
    setTimeout(function () {
        document.getElementById("containerUmbraUsa").style.visibility = "hidden";
        document.getElementById("ContainerNavigareAnimata").style.backgroundImage = "none";
    }, 1200);
};

// onclick pe v. 2
document.getElementById("variantaDoi").addEventListener("click", function () {
    setTimeout(function () {
        document.getElementById("navigare").style.animation = "coboaraNavigare 1.2s forwards ";
        document.getElementById("navigare").style.display = "inline";
        document.getElementById("variantaDoi").style.display = "none";
        document.getElementById("variantaUnu").style.display = "inline";
    }, 1200);
});

// apare varianta a doua de meniu
function apare_pe_rand_navigare() {
    setTimeout(function () {
        document.getElementById("navigareUnu").style.marginTop = "18px";
    }, 2100);
    setTimeout(function () {
        document.getElementById("navigareDoi").style.marginTop = "18px";
    }, 2300);
    setTimeout(function () {
        document.getElementById("navigareTrei").style.marginTop = "18px";
    }, 2500);
    setTimeout(function () {
        document.getElementById("navigarePatru").style.marginTop = "18px";
    }, 2700);
    setTimeout(function () {
        document.getElementById("navigareCinci").style.marginTop = "18px";
    }, 2900);
    setTimeout(function () {
        document.getElementById("navigareSase").style.marginTop = "18px";
    }, 3100);
};

// onclick pe v. 1
document.getElementById("variantaUnu").addEventListener("click", function () {
    setTimeout(function () {
        document.getElementById("ContainerNavigareAnimata").style.visibility = "visible";
    }, 3000);
    setTimeout(function () {
        document.getElementById("navigare").style.animation = "urcaNavigare 1.2s forwards ";
        document.getElementById("variantaUnu").style.display = "none";
        document.getElementById("variantaDoi").style.display = "inline";
    }, 1200);
    setTimeout(function () {
        document.getElementById("ContainerNavigareAnimata").style.backgroundImage = "linear-gradient(to left, rgba(255,255,255,0.3) 80% , rgba(255,255,255,0) 100%)";
    }, 3400);
});

// dispare pe rand meniul varianta a doua
function dispare_pe_rand_navigare() {
    setTimeout(function () {
        document.getElementById("navigareSase").style.marginTop = "-1px";
    }, 0);
    setTimeout(function () {
        document.getElementById("navigareCinci").style.marginTop = "-1px";
    }, 200);
    setTimeout(function () {
        document.getElementById("navigarePatru").style.marginTop = "-1px";
    }, 400);
    setTimeout(function () {
        document.getElementById("navigareTrei").style.marginTop = "-1px";
    }, 600);
    setTimeout(function () {
        document.getElementById("navigareDoi").style.marginTop = "-1px";
    }, 800);
    setTimeout(function () {
        document.getElementById("navigareUnu").style.marginTop = "-1px";
    }, 1000);
};

//onclick pe v.2 
document.getElementById("ascunde-navigare").addEventListener("click", function () {
    document.getElementById("semnX").style.animation = "semnX 1s ease-out ";
    setTimeout(function () {
        document.getElementById("navigare").style.animation = "urcaNavigare 1.2s forwards ";
        document.getElementById("arata-navigare").style.display = "inline";
        document.getElementById("ascunde-navigare").style.display = "none";
        document.getElementById("variantaDoi").style.display = "none";
        document.getElementById("variantaUnu").style.display = "none";
        document.getElementById("container_hide").style.display = "inline";
        document.getElementById("linie-nav1").style.animation = "paused";
        document.getElementById("linie-nav2").style.animation = "paused";
        document.getElementById("linie-nav3").style.animation = "paused";
    }, 1200);
});

// delay la click pe Contact
document.getElementById("butonMesaj").addEventListener("click", function () {
    setTimeout(function () {
        window.location.href = "contact/formpage.html";
    }, 1000);
});


// Se schimba div "container_sus" on click image
// javaScript Media Queries
const latimeTelefon = window.matchMedia("(max-width: 1100px)");
const latimeLaptop = window.matchMedia("(max-width: 1366px)");

// imaginile din stanga, care au functii pe 50%(change1) si 100%(changeFull)
function change1() {
    if (latimeTelefon.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/70.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/70-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/70-3.jpg')";
        document.getElementById("primul_text_sus").style.cssText = "left: 50%; font-size: 35px; color : #00f2fc; text-shadow:2px 1px 3px black; top: 70px";
        document.getElementById("container_sus_doi").style.height = "250px";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "295px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "none";
        document.getElementById("imagine_stanga8").style.display = "none";
    } else if (latimeLaptop.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/70.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/70-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/70-3.jpg')";
        // document.getElementById("primul_text_sus").style.backgroundColor = "rgba(255,255,255,0.6)";
        // document.getElementById("primul_text_sus").style.background = "linear-gradient( to left, rgba(255, 255, 255, 0) 0%, rgba(255,255,255,0.6) 25%, rgba(255,255,255,0.6) 75%, rgba(255, 255, 255, 0) 100%)";
        // document.getElementById("primul_text_sus").style.backgroundColor = "linear-gradient( to left, rgba(255, 255, 255, 0) 0%, rgba(255,255,255,0.7) 25%, rgba(255,255,255,0.7) 75%, rgba(255, 255, 255, 0) 100%)";

        // document.getElementById("primul_text_sus").style.top = "55px";
        // document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.cssText = "display : inline; left: 50%; color : #00f2fc; text-shadow:2px 1px 3px black;  top: 70px; background: linear-gradient( to left, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0, 0.5) 25%, rgb(0, 0, 0, 0.5) 75%, rgba(255, 255, 255, 0) 100%)";
        document.getElementById("container_sus_doi").style.height = "250px";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "295px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "none";
        document.getElementById("imagine_stanga8").style.display = "none";
    } else {
        // valabil pentru o latime a ecranului mai mare decat cea a unui laptop ( peste 1366px)
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/70.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/70-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/70-3.jpg')";
        document.getElementById("primul_text_sus").style.cssText = " left: 67%; display : inline; color : #00f2fc; text-shadow:2px 1px 3px black; ";
        document.getElementById("primul_text_sus").style.background = "linear-gradient( to left, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0, 0.5) 25%, rgb(0, 0, 0, 0.5) 75%, rgba(255, 255, 255, 0) 100%)";
        document.getElementById("container_sus_doi").style.height = "250px";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "295px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "none";
        document.getElementById("imagine_stanga8").style.display = "none";
    }

}

function change1full() {
    if (latimeTelefon.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/70-2.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/70-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/70-3.jpg')";
        document.getElementById("primul_text_sus").style.background = "linear-gradient( to left, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0, 0.5) 25%, rgb(0, 0, 0, 0.5) 75%, rgba(255, 255, 255, 0) 100%)";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.top = "170px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "35px";
        document.getElementById("primul_text_sus").style.color = '#00f2fc';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    } else {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/70-2.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/70-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/70-3.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.background = "linear-gradient( to left, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0, 0.5) 25%, rgb(0, 0, 0, 0.5) 75%, rgba(255, 255, 255, 0) 100%)";
        document.getElementById("primul_text_sus").style.top = "170px";
        document.getElementById("primul_text_sus").style.left = "67%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#00f2fc';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    }
}

function change2() {
    if (latimeTelefon.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/51mic.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/51mic.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/51mic.jpg')";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.top = "70px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "33px";
        document.getElementById("primul_text_sus").style.color = '#cc3300';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px yellow";
        document.getElementById("container_sus_doi").style.height = "250px";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "295px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "none";
        document.getElementById("imagine_stanga8").style.display = "none";
    } else {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/51mic.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/51mic.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/51mic.jpg')";
        document.getElementById("primul_text_sus").style.background = "linear-gradient( to left, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0, 0.5) 25%, rgb(0, 0, 0, 0.5) 75%, rgba(255, 255, 255, 0) 100%)";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.top = "70px";
        document.getElementById("primul_text_sus").style.left = "70%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = 'yellow';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px #b30000";
        document.getElementById("container_sus_doi").style.height = "250px";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "295px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "none";
        document.getElementById("imagine_stanga8").style.display = "none";
    }
}

function change2full() {
    if (latimeTelefon.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/51.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/51mic.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/51mic.jpg')";
        document.getElementById("primul_text_sus").style.background = "linear-gradient( to left, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0, 0.5) 25%, rgb(0, 0, 0, 0.5) 75%, rgba(255, 255, 255, 0) 100%)";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.top = "170px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "33px";
        document.getElementById("primul_text_sus").style.color = 'yellow';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px #b30000";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    } else {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/51.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/51mic.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/51mic.jpg')";
        document.getElementById("primul_text_sus").style.background = "linear-gradient( to left, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0, 0.3) 25%, rgb(0, 0, 0, 0.3) 75%, rgba(255, 255, 255, 0) 100%)";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.top = "330px";
        document.getElementById("primul_text_sus").style.left = "69%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = 'yellow';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px #b30000";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    }
}

function change3() {
    if (latimeTelefon.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/36.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/36-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/36-3.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "70px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "33px";
        document.getElementById("primul_text_sus").style.color = '#cc0000';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_sus_doi").style.height = "250px";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "295px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "none";
        document.getElementById("imagine_stanga8").style.display = "none";
    } else {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/36.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/36-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/36-3.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "-10px";
        document.getElementById("primul_text_sus").style.left = "60%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#cc0000';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_sus_doi").style.height = "250px";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "295px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "none";
        document.getElementById("imagine_stanga8").style.display = "none";
    }
}

function change3full() {
    if (latimeTelefon.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/36.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/36-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/36-3.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "170px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "33px";
        document.getElementById("primul_text_sus").style.color = '#cc0000';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    } else if (latimeLaptop.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/36.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/36-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/36-3.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "20px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#cc0000';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    } else {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/36.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/36-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/36-3.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "120px";
        document.getElementById("primul_text_sus").style.left = "55%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#cc0000';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    }
}

function change4() {
    if (latimeTelefon.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/31mic.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/31-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/31mic.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "70px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "33px";
        document.getElementById("primul_text_sus").style.color = '#00f2fc';
        document.getElementById("container_sus_doi").style.height = "250px";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "295px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "none";
        document.getElementById("imagine_stanga8").style.display = "none";
    } else if (latimeLaptop.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/31mic.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/31-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/31mic.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "70px";
        document.getElementById("primul_text_sus").style.left = "65%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#00f2fc';
        document.getElementById("container_sus_doi").style.height = "250px";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "295px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "none";
        document.getElementById("imagine_stanga8").style.display = "none";
    } else {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/31mic.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/31-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/31mic.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "100px";
        document.getElementById("primul_text_sus").style.left = "76%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#00f2fc';
        document.getElementById("container_sus_doi").style.height = "250px";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "295px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "none";
        document.getElementById("imagine_stanga8").style.display = "none";
    }
}

function change4full() {
    if (latimeTelefon.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/31.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/31-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/31mic.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "170px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "33px";
        document.getElementById("primul_text_sus").style.color = '#00f2fc';
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    } else if (latimeLaptop.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/31.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/31-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/31mic.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "180px";
        document.getElementById("primul_text_sus").style.left = "58%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#00f2fc';
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    } else {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/31.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/31-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/31mic.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "280px";
        document.getElementById("primul_text_sus").style.left = "65%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#00f2fc';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    }
}

function change5() {
    if (latimeTelefon.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "70px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "33px";
        document.getElementById("primul_text_sus").style.color = ' #ff5c33';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_sus_doi").style.height = "250px";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "295px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "none";
        document.getElementById("imagine_stanga8").style.display = "none";
    } else if (latimeLaptop.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.backgroundColor = "rgba(255,255,255,0.5)";
        document.getElementById("primul_text_sus").style.top = "55px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#ff3800';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_sus_doi").style.height = "250px";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "295px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "none";
        document.getElementById("imagine_stanga8").style.display = "none";
    } else {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "85px";
        document.getElementById("primul_text_sus").style.left = "77%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#0000f2';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px #ff703d";
        document.getElementById("container_sus_doi").style.height = "250px";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "295px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "none";
        document.getElementById("imagine_stanga8").style.display = "none";
    }
}

function change5full() {
    if (latimeTelefon.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("primul_text_sus").style.background = "linear-gradient( to left, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0, 0.5) 25%, rgb(0, 0, 0, 0.5) 75%, rgba(255, 255, 255, 0) 100%)";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.top = "170px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "33px";
        document.getElementById("primul_text_sus").style.color = ' white';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    } else if (latimeLaptop.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.backgroundColor = "rgba(255,255,255,0.6)";
        document.getElementById("primul_text_sus").style.top = "250px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#ff3800';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    } else {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/13.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "85px";
        document.getElementById("primul_text_sus").style.left = "77%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#0000f2';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px #ff703d";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    }
}

function change6() {
    if (latimeTelefon.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/34mic.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/34-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/34-3.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "70px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "33px";
        document.getElementById("primul_text_sus").style.color = '#ffd9d9';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_sus_doi").style.height = "250px";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "295px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "none";
        document.getElementById("imagine_stanga8").style.display = "none";
    } else {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/34mic.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/34-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/34-3.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "30px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#ffd9d9';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_sus_doi").style.height = "250px";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "295px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "none";
        document.getElementById("imagine_stanga8").style.display = "none";
    }
}

function change6full() {
    if (latimeTelefon.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/34.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/34-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/34-3.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "170px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "33px";
        document.getElementById("primul_text_sus").style.color = '#ffd9d9';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    } else {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/34.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/34-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/34-3.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "40px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#ffd9d9';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~ ur image just full size  7 and 8~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function change7full() {
    if (latimeTelefon.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/ur/urs1.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/ur/urs1.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/ur/urs1.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.backgroundColor = "rgba(0,0,0,0)";
        document.getElementById("primul_text_sus").style.top = "170px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "33px";
        document.getElementById("primul_text_sus").style.color = '#00cc00';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("container_informatii").style.left = "70%";
        document.getElementById("container_informatii").style.top = "150px";

        document.getElementById("containerTextSchimba").style.display = "none";
        // document.getElementById("containerTextSchimba").style.top = "220px";
        // document.getElementById("containerTextSchimba").style.left = "50%";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    } else if (latimeLaptop.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/ur/urs1.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/ur/urs1.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/ur/urs1.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.backgroundColor = "rgba(0,0,0,0)";
        document.getElementById("primul_text_sus").style.top = "300px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#00cc00';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        // document.getElementById("containerTextSchimba").style.top = "220px";
        // document.getElementById("containerTextSchimba").style.left = "50%";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    } else {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/ur/urs1.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/ur/urs1.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/ur/urs1.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.backgroundColor = "rgba(0,0,0,0)";
        document.getElementById("primul_text_sus").style.top = "330px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#00cc00';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        document.getElementById("container_informatii").style.left = "50%";
        document.getElementById("container_informatii").style.top = "220px";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    }
}

function change8full() {
    if (latimeTelefon.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/ur/urs33.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/ur/urs3-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/ur/urs3-3.jpg')";
        document.getElementById("primul_text_sus").style.background = "linear-gradient( to left, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0, 0.5) 25%, rgb(0, 0, 0, 0.5) 75%, rgba(255, 255, 255, 0) 100%)";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.top = "170px";
        document.getElementById("primul_text_sus").style.left = "50%";
        document.getElementById("primul_text_sus").style.fontSize = "33px";
        document.getElementById("primul_text_sus").style.color = 'white';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";

        // document.getElementById("containerTextSchimba").style.top = "220px";
        document.getElementById("container_informatii").style.left = "70%";
        document.getElementById("container_informatii").style.top = "150px";

        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    } else if (latimeLaptop.matches) {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/ur/urs33.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/ur/urs3-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/ur/urs3-3.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.backgroundColor = "rgba(0,0,0,0)";
        document.getElementById("primul_text_sus").style.top = "30px";
        document.getElementById("primul_text_sus").style.left = "70%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#00f2fc';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "none";
        // document.getElementById("containerTextSchimba").style.top = "300px";
        // document.getElementById("containerTextSchimba").style.left = "75%";
        document.getElementById("container_informatii").style.display = "inline";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    } else {
        document.getElementById("container_sus_doi").style.backgroundImage = "url('imagini/ur/urs33.jpg')";
        document.getElementById("imagineText").style.backgroundImage = "url('imagini/ur/urs3-3.jpg')";
        document.getElementById("despreCulori").style.backgroundImage = "url('imagini/ur/urs3-3.jpg')";
        document.getElementById("primul_text_sus").style.display = "inline";
        document.getElementById("primul_text_sus").style.background = "none";
        document.getElementById("primul_text_sus").style.top = "30px";
        document.getElementById("primul_text_sus").style.left = "75%";
        document.getElementById("primul_text_sus").style.fontSize = "40px";
        document.getElementById("primul_text_sus").style.color = '#00f2fc';
        document.getElementById("primul_text_sus").style.textShadow = "2px 1px 3px black";
        document.getElementById("container_patrate_stanga").style.width = "290px";
        document.getElementById("container_patrate_stanga").style.height = "400px";
        document.getElementById("container_sus_doi").style.height = "500px";
        document.getElementById("containerTextSchimba").style.display = "inline";
        document.getElementById("container_informatii").style.left = "50%";
        document.getElementById("container_informatii").style.top = "220px";
        document.getElementById("imagine_stanga7").style.display = "inline";
        document.getElementById("imagine_stanga8").style.display = "inline";
    }
}

// apar Informatii Despre culori
function aparInformatiiDespreCulori() {
    document.getElementById("descriere-proiect-romana").style.opacity = "1";
    document.getElementById("intrebareCuloare").style.marginTop = "730px";
}

// ~~~~~~~~~~~~~~~~~~~~~ traducere text ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

document.getElementById("tradu-romana").addEventListener("click", function () {
    document.getElementById("descriere-proiect-romana").style.display = "none";
    document.getElementById("descriere-proiect-romana").style.animationDelay = "3s";
    document.getElementById("descriere-proiect-engleza").style.display = "block";
});
document.getElementById("tradu-engleza").addEventListener("click", function () {
    document.getElementById("descriere-proiect-engleza").style.display = "none";
    document.getElementById("descriere-proiect-romana").style.display = "block";
});


function textSchimbaImagine() {
    document.getElementById("containerTextSchimba").style.display = "inline";
}

document.getElementById("schimbaButoaneUnu").addEventListener("click", function () {
    document.getElementById("containerButoane1").style.display = "none";
    document.getElementById("containerButoane2").style.display = "inline";
});
document.getElementById("schimbaButoaneDoi").addEventListener("click", function () {
    document.getElementById("containerButoane1").style.display = "inline";
    document.getElementById("containerButoane2").style.display = "none";
});


// session storage...an inocent try...

// function localStorageTest(){
//   var test = 'test';
//   try {
//     localStorage.setItem(test, test);
//     localStorage.removeItem(test);
//     return true;
//   } catch(e) {
//     return false;
//   }
// }