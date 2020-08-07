
let punkty=0;   //globalne zliczanie punktów

$(document).ready(function(){
	$(".butstart").click(function(){
		$(".butstart").css("display","none"); //startowanie "gry"
		$("#cel").css("display","block");
										})

  $("#cel").click(function(){ // ten element trzeba zmienic na powtarzalny a animacje wybierac z coraz wiekszej puli coraz trudniejszych
  $("#cel").hide();
  console.log(punkty);
  punkty++; //punktacja na razie byle jaka ale powinna zalezec od wielkosci celu i 
   console.log(punkty);			 //jego koloru im blizszy czerwonego tym blizej 
             //zatrzymania za co bedzie 1  czyli im wyższa liczba koloru + ew wielkosc tym wiecej punktow
   let pkt=punkty
   $("#pkt").html(pkt);
      console.log("wypisz"+pkt);
   return "" +pkt+ " "; //zalosna metoda tymczasowa js.strings nie znam         
});



  let anim=['example','example1'];
  let x = anim[Math.floor(Math.random()*2)];//losowanie animacji trzeba ich wyrzezbic z 15 zeby mialo to sens
  console.log(x);
  $("#cel").css("animation-name",x);
 
//punktacja

});
