

$(document).ready(function(){



    $('#navbarDropdown').mouseover(function(){
 
     $('.dropdown-menu').slideToggle(function(){
 
         $('.dropdown-item').css("color","black")
         $('.dropdown-menu').css("background","white")
     })
 
 
 
 
 })
 
 $('.dropdown-menu').mouseleave(function(){
 
   //  $('.dropdown-menu').css("visibility","hidden")
 
   $('.dropdown-menu').slideToggle()
 })
 
 
 
 })
 
 