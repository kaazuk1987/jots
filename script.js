
let punkty=0;   //globalne zliczanie punktów

$(document).ready(function(){
	$(".butstart").click(function(){
		$(".butstart").css("display","none"); //startowanie "gry"
		$("#cel").css("display","block");
		$("#prbar").css("display","block");

										})

  $("#cel").click(function(){ // ten element trzeba zmienic na powtarzalny a animacje wybierac z coraz wiekszej puli coraz trudniejszych
  $("#cel").hide();
  $("#prbar").hide();
  
  losAnim(4)  //wystarczy chyba dodac zeby losowal  z czasem trudniejsze ije dorobic oczywiscie
      

 
  punkty++; //punktacja bedzie od czasu anim im szybsza tym wiecej pkt + bonus za ostatnie chwile przed zniknieciem
   let pkt=punkty
   if (punkty>=10){
   	$("#cel").hide();
   						//tu mozna wstawic jakis bonus

   }else{
   	setTimeout(() => { $("#cel").show();$("#prbar").css("display","block");
   		$("#prbar").css("animation-name","prog");
   		$("#prbar").css("animation-duration","7s"); }, 2000);
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

