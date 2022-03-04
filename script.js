$(".animation").click(function() {
    $(".page2").show();
    $(".page1").hide();
});

$(".yes").click(function() {
    $(".page3").show();
    $(".page2").hide();
    $(".back").show();
});

$(".no").click(function() {
    $(".finalpage").show();
    $(".page2").hide();
});

$(".back").click(function() {
    $(".page2").show();
    $(".page3").hide();
});

$(".swamp").click(function() {
    $(".swampinfo").show();
    $(".map").hide();
    
    $(".swamp").dblclick(function(){
         $(".swampinfo").hide();
        $(".map").show();
        
    });
    
    $(".desert").click(function(){
        $(".desertinfo").show();
        $(".map").hide();
         $(".desert").dblclick(function(){
         $(".desertinfo").hide();
        $(".map").show();
         });
        
        
    });
});

$(".capital").click(function(){
        $(".capitalinfo").show();
        $(".map").hide();
         $(".capital").dblclick(function(){
         $(".capitalinfo").hide();
        $(".map").show();
         });
});

$(".capital").click(function(){
        $(".capitalinfo").show();
        $(".map").hide();
         $(".capital").dblclick(function(){
         $(".capitalinfo").hide();
        $(".map").show();
         });
});

$(".option1").click(function(){
        $(".page4").show();
        $(".page3").hide();
         });

$(".monster").dblclick(function(){
        $(".page4p2").show();
        $(".page4").hide();

         });

$(".option2").click(function(){
        $(".finalpage").show();
        $(".page3").hide();
         });

$(".option3").click(function(){
        $(".finalpage").show();
        $(".page3").hide();
         });

$(".restart").click(function(){
        $(".page1").show();
        $(".finalpage").hide();
         });