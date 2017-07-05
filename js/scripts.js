$(document).ready(function(){
  $("strong").click(function(){
    $("p").after("<img src='img/bee.jpg' alt='bee'>");

    $("img").click(function(){
      $(this).remove();
    });
  });
});
