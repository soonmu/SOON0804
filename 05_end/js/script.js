$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
    },
);
$(".gnb").hover(
        function(){
            $(".sub").stop().slideUp();
        }
);

$(".tab1").click(
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }
);

$(".tab2").click(
    function(){
        $(".notice").hide();
        // $(".gallery").show(); >>> display:block을 의미함
        $(".gallery").css("display","flex");
    }
);