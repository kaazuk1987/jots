$(document).ready(function(){
  $("#cel").click(function(){
  $("#cel").toggle();
});
  let anim=['example','example1'];
  let x = anim[Math.floor(Math.random()*2)];//losowanie animacji
  console.log(x);
  $("#cel").css("animation-name",x);
 
//punktacja

});
