/**
 * Created by Administrator on 2017/6/5.
 */
$(function(){
    //动画效果
    $(".nav").singlePageNav({
        offset:70
    });
   new WOW().init();

   //导航栏变色
    $(".nav li").each(function(){
        $(".nav li").click(function(){
            $(".nav li").removeClass("changeBackground");
            $(this).addClass("changeBackground");
        });
    });

    //滚动条事件
    $(window).scroll(function(){
       var height=$(this).scrollTop();
       if(height>0&&height<=670){
           $(".nav li").removeClass("changeBackground");
           $(".nav li:nth-child(1)").addClass("changeBackground")
       }
        if(height>670&&height<=1000){
            $(".nav li").removeClass("changeBackground");
            $(".nav li:nth-child(2)").addClass("changeBackground")
        }
        if(height>1000&&height<=1500){
            $(".nav li").removeClass("changeBackground");
            $(".nav li:nth-child(3)").addClass("changeBackground")
        }
        if(height>1500&&height<=2500){
            $(".nav li").removeClass("changeBackground");
            $(".nav li:nth-child(4)").addClass("changeBackground")
        }
        if(height>2500&&height<=3000){
            $(".nav li").removeClass("changeBackground");
            $(".nav li:nth-child(5)").addClass("changeBackground")
        }
        if(height>3000){
            $(".nav li").removeClass("changeBackground");
            $(".nav li:nth-child(6)").addClass("changeBackground")
        }
    });
});