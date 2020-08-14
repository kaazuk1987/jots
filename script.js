
let punkty=0;   //globalne zliczanie punktów
let ct=0;
$(document).ready(function(){
	let i=$("#cel").css("animation-duration");
		$(".butstart").click(function(){
		$(".butstart").css("display","none"); //startowanie "gry"
		$("#cel").css("display","block");
		$("#prbar").show();
		$("#prbar").css("animation-name","prog");
   		$("#prbar").css("animation-duration","7s");
   		$("#prbarbor").show();
   		liczProc(ct); 
										});
	$("#reload").click(function(){location.reload();});// restart
  $("#cel").click(function(){ // ten element trzeba zmienic na powtarzalny a animacje wybierac z coraz wiekszej puli coraz trudniejszych
  $("#cel").hide();
  $("#prbar").hide();
  $("#prbarbor").hide();
  ct=1;
  losAnim(4);  //wystarczy chyba dodac zeby losowal  z czasem trudniejsze ije dorobic oczywiscie
      

 
  punkty++; //punktacja bedzie od czasu anim im szybsza tym wiecej pkt + bonus za ostatnie chwile przed zniknieciem
  let pkt=punkty;

   	let i=$("#cel").css("animation-duration");
   	let x = parseInt(i,10);
   	
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
      

   return "" +pkt+ " "; //zalosna metoda tymczasowa js.strings nie znam         
});

  //Moje funkcje
 
 function liczProc(celtraf){			//procenty od czasu do probara
  let t=$("#cel").css("animation-duration");
  let t1 = parseInt(i,10);
  let t2 = t1*10;
 
  for(let i=0;i<=100;i++){
  	let j=i
  
  
   setTimeout(() => { $("#prbar").html(""+i+"%");j++;console.log(j+"%") }, t2*i);
   
   
}
t2=0;}

  function losAnim(level){
  let anim=['example','example1','example2','example3'];
  
  let x = anim[Math.floor(Math.random()*level)];//losowanie animacji trzeba ich wyrzezbic z 15 zeby mialo to sens
  
  $("#cel").css("animation-name",x);
  liczProc(ct); 
}
  
});

