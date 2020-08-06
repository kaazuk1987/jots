$(document).ready(function(){
  $("#cel").click(function(){
  $("#cel").toggle();
});
  let x = $("#cel").css("left");
  console.log(x);
  let i=400;
  for (i;i<=400;i++)
  	{	
  		console.log(i);
  		// $("#cel").css("left",i).delay(2000);
  	};
});
