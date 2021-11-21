var imgs = []
var Slider;
var imgAtual
var Maximg
var vtempo
var vload
var TempoTroca

function PreCarregamento(){
    var s =1;
    for(var i =0; i < 4; i++){
        imgs[i] = new Image();
        imgs[i].src="IMG/s"+s+".jpg";
        s++;

    }
}

function CarregaIMG(img){
 Slider.style.backgroundImage="url('"+imgs[img].src+"')"
}

function Inicia(){
  PreCarregamento()
   imgAtual = 0
  Maximg = imgs.length - 1
  Slider = document.getElementById("div1")
  vload = document.getElementById("dvbarra")
  CarregaIMG(imgAtual)
  TempoTroca = 0;
  Anima()
}

function Troca(dir){
    TempoTroca=0
    imgAtual+=dir;
    if(imgAtual >= Maximg){
        imgAtual = 0;
    }else if(imgAtual < 0){
        imgAtual = Maximg
    }
    CarregaIMG(imgAtual)
}

function Anima(){
   TempoTroca++
   if(TempoTroca >= 500){
       TempoTroca = 0
       Troca(+1)
   }
   vtempo = TempoTroca / 5
   vload.style.width = vtempo+"%"
   window.requestAnimationFrame(Anima)
}



window.addEventListener("load",Inicia)