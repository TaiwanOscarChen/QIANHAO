$(function(){
 var wh=$(window).height();
 var ww=$(window).width();

//高度設定
$("#ham").click(function(){
   $("#phone_menu").stop().slideToggle(2000);
 });

$("#main_menu li:nth-of-type(1)").click(function(){
  $("#globle").animate({"top":0},1000);
})  
$("#main_menu li:nth-of-type(2)").click(function(){
  $("#globle").animate({"top":-wh},1000);
}) 
$("#main_menu li:nth-of-type(3)").click(function(){
  $("#globle").animate({"top":-2*wh},1000);
}) 
$("#main_menu li:nth-of-type(4)").click(function(){
  $("#globle").animate({"top":-3*wh},1000);
})
$("#main_menu li:nth-of-type(5)").click(function(){
  $("#globle").animate({"top":-4*wh},1000);
})  

if(ww>600){
 $("nav").css({height:0.06*wh});
 $("header").css({height:wh});
 $("section").css({height:wh});
}else{
 $("nav").css({height:0.1*wh});
 $("header").css({height:wh});   
 $("section").css({height:auto});
}

});