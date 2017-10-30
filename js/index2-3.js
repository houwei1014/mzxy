/**
 * Created by HW on 2017/6/7.
 */
$(function(){
    //离线存储
    $(".col-md-4>button").click(function(){
        var input=$(".col-md-8 input").val();
        /*获得当前时间戳*/
        var timestamp=new Date().getTime();
        tag(input,timestamp);
        sessionStorage.setItem(timestamp,input);
        $(".col-md-8 input").val("");
        closeLab();
    });

    //判断数据是否存在
    if(window.sessionStorage){
        for(var i=0;i<sessionStorage.length;i++){
            tag(sessionStorage.getItem(sessionStorage.key(i)),sessionStorage.key(i));
        }
    }

    //点击消失
    function closeLab(){
        var tags=$(".col-md-2>button:gt(2)");
        tags.each(function(index){
            $(this).click(function(){
                $(this).css("display","none");
                var a=$(this).attr("index");
                sessionStorage.removeItem(a);
            });
        });

    }
    closeLab();

    //封装函数
    function tag(a,b){
        var str="";
        str+="<button class='btn btn-success btn-lg wow rollIn' index='"+b+"'>"+a+"<span class='glyphicon glyphicon-remove'></span></button>";
        ($("<div class='col-md-2'>"+str+"</div>")).appendTo("#row");
    }
});

