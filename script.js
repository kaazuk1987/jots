
let punkty=0;   //globalne zliczanie punktów

$(document).ready(function(){
	let i=$("#cel").css("animation-duration");
	console.log("anim dur cel "+parseInt(i,10)+" ");
	$(".butstart").click(function(){
		$(".butstart").css("display","none"); //startowanie "gry"
		$("#cel").css("display","block");
		$("#prbar").show();
		$("#prbar").css("animation-name","prog");
   		$("#prbar").css("animation-duration","7s");
   		$("#prbarbor").show();
   		liczProc(); 
										});

  $("#cel").click(function(){ // ten element trzeba zmienic na powtarzalny a animacje wybierac z coraz wiekszej puli coraz trudniejszych
  $("#cel").hide();
  $("#prbar").hide();
  $("#prbarbor").hide();
  losAnim(4)  //wystarczy chyba dodac zeby losowal  z czasem trudniejsze ije dorobic oczywiscie
      

 
  punkty++; //punktacja bedzie od czasu anim im szybsza tym wiecej pkt + bonus za ostatnie chwile przed zniknieciem
   let pkt=punkty

   	let i=$("#cel").css("animation-duration");
   	let x = parseInt(i,10);
   	console.log(x*1000+"ms");
      	 	setTimeout(() => { pkt-- ;}, x*1000);

   if (punkty>=10){
   	$("#cel").hide();
   
   						//tu mozna wstawic jakis bonus

   }
   

   else{
   	setTimeout(() => { $("#cel").show();$("#prbarbor").show();
   		$("#prbar").css("display","block");
   		$("#prbar").css("animation-name","prog");
   		$("#prbar").css("animation-duration","7s"); }, 2000);
   }
   /*else if()

   {

   }*/
      $("#pkt").html("<h1>PKT: "+pkt+"</h1>");
      console.log("wypisz pkt"+pkt);

   return "" +pkt+ " "; //zalosna metoda tymczasowa js.strings nie znam         
});

  //Moje funkcje
 function liczProc(){			//procenty od czasu do probara
  let t=$("#cel").css("animation-duration");
  let t1 = parseInt(i,10);
  let t2 = t1*10;
  for(let i=0;i<=100;i++){
   
   setTimeout(() => { $("#prbar").html(""+i+"%"); ;}, t2*i);
}
t2=0;}

  function losAnim(level){
  let anim=['example','example1','example2','example3'];
  
  let x = anim[Math.floor(Math.random()*level)];//losowanie animacji trzeba ich wyrzezbic z 15 zeby mialo to sens
  console.log("anim " + x);
  $("#cel").css("animation-name",x);
  liczProc(); 
}
  
});

