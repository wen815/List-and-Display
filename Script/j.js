/*click the list*/
$(function(){
    /*show and hide*/
    $("#s section").hide();
        $("#s .c1").show();
           $("ul .c1").addClass("c"); 
    $("ul li").click(function(){
   
                   var c=$(this).attr("class");
      var s="."+c;
          $("#s").find(s).show();
  $("#s").find(s).siblings().hide();
     
               /*change background color of list*/
     $(this).addClass("c").siblings().removeClass("c");
    })


})