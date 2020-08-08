
let punkty=0;   //globalne zliczanie punktów

$(document).ready(function(){
	$(".butstart").click(function(){
		$(".butstart").css("display","none"); //startowanie "gry"
		$("#cel").css("display","block");
										})

  $("#cel").click(function(){ // ten element trzeba zmienic na powtarzalny a animacje wybierac z coraz wiekszej puli coraz trudniejszych
  $("#cel").hide();
  losAnim(4)  //wystarczy chyba dodac
  //slice()
  console.log($("#cel").css("background-color"));
 // console.log("color cel "+parseInt($("#cel").css("color"),16));
  punkty++; //punktacja na razie byle jaka ale powinna zalezec od wielkosci celu i 
   		 //jego koloru im blizszy czerwonego tym blizej 
             //zatrzymania za co bedzie 1  czyli im wyższa liczba koloru + ew wielkosc tym wiecej punktow
   let pkt=punkty
   if (punkty>=10){
   	$("#cel").hide();
   						//tu mozna wstawic jakis bonus

   }else{
   	setTimeout(() => { $("#cel").show(); }, 2000);
   }
   $("#pkt").html(pkt);
      console.log("wypisz pkt"+pkt);

   return "" +pkt+ " "; //zalosna metoda tymczasowa js.strings nie znam         
});


  function losAnim(level){
  let anim=['example','example1','example2','example3'];
  
  let x = anim[Math.floor(Math.random()*level)];//losowanie animacji trzeba ich wyrzezbic z 15 zeby mialo to sens
  console.log("anim " + x);
  $("#cel").css("animation-name",x);}
 


});

