$(function(){

$('#menu').on('click',function(){
$(this).toggleClass('fa-times');
$('header').toggleClass('toggle');
})    
$(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times')
    $('header').removeClass('toggle');

})
/*add class active and go to the offset of section  */
$('.nav li a').on("click",function(event){
  event.preventDefault();
  $('html,body').animate({
    scrollTop : $('#' + $(this).data('scroll')).offset().top //or $('a[href*="#"]').on('click,function(){scrollTop : $($(this).attr('href')).offset().top}) $($(this).attr('href')).offset().top
  },1000 ,'linear')
  $('.nav li a').removeClass('active')
  $(this).addClass('active')
  
  
})

//scrollTop
$(window).on('scroll',function(){
if($(window).scrollTop() >= 745){
  $('.top').fadeIn(1000);
}else{
   $('.top').fadeOut(1000)
}
  
})
$('.top').on('click',function(event){
  event.preventDefault();
  $('html,body').animate({scrollTop : 0},1000,'linear')

})
$(window).scroll(function(){
    //add class onscroll
    var section = document.getElementsByTagName('section')
    $(section).each(function(){
      if($(window).scrollTop() >= $(this).offset().top){
        var idOfSection = $(section).prop('id');
        $('.navbar  a').removeClass('active')
        $('.navbar li a[data-scroll="'  + idOfSection + '" ]').addClass('active')
      }
    })
  
})
//skills 
$(window).scroll(function(){ 
    
  if($(window).scrollTop() >= Math.round(($('.container2').offset()).top -100))     ///*(window.innerHeight + window.pageYOffset) >= document.body.offsetHeight*/) 
  {
let progress = document.querySelectorAll('.progress-bar');
let values =['50%','70%','20%','60%','50%','40%'];
progress.forEach((pro,index) =>{
  pro.style.width = values[index]
  pro.style.background ="red";
})

  }
})
//show-cv
$("#show-cv").on('click',function(event){
  event.preventDefault();
$('.cv').fadeToggle(1000)
})
//portfalio img
$('.portfalio .box-container .box').on('click',function(){
  $(this).animate({width : '100%',height :'100%'},5000,function(){
    $(this).css('transform', 'scale(1)');

    $(this).animate({width : 260,height :200},5000)

  })

  })
//twitter return false
$('.social a:last').on('click',function(event){event.preventDefault();})
})
  