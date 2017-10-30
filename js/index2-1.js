/**
 * Created by Administrator on 2017/6/6.
 */
$(function(){
    //点击出现模态框
    $("#important_p").click(function(){
        $("#myModal").modal("show");
    });
    //轮播图自己走
    $("#mycarousel").carousel({
        interval:2000
    });
    //窗口缩放居中
    $(window).resize(function(){
        var carousel=$(".carousel-control");
        var height=carousel.height();
        carousel.css({"line-height":height})
    });

    /*雷达图*/
    var data={
        labels:["Eating","Drinking","Sleeping","Designing","Coding","Partying","Running"],
        datasets:[
            {
                fillColor : "rgba(255,0,0,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : [65,59,90,81,56,55,40]
            },
            {
                fillColor : "rgba(0,255,0,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [28,48,40,19,96,27,100]
            }
        ]
    };
    var ctx=document.getElementById("myCanvas").getContext("2d");
    new Chart(ctx).Radar(data,{
        scaleLineColor:"black",
    });

    /*表单验证*/
    $("#form").validate({
        //更改错误信息位置
        errorPlacement:function(err,ele){
            $(ele).closest("form").find("label[for='"+ele.attr("id")+"']").append(err)
        },
        errorElement: "span",
        rules:{
            username:{
                required:true,
                minlength:2,
                maxlength:10
            },
            password:{
                required:true,
                minlength:6,
                maxlength:16
            },
            rPassword:{
                required:true,
                equalTo: "#exampleInputPassword3"
            },
            email:{
                required:true,
                email:true
            }
        },
        messages:{
            username:{
                required:"请输入您的用户名",
                minlength:"用户名长度不得低于2位",
                maxlength:"用户名度不得高于10位"
            },
            password:{
                required:"请输入您的密码",
                minlength:"密码长度不得低于6位",
                maxlength:"密码长度不得高于16位"
            },
            rPassword:{
                required:"请再次输入密码",
                minlength:"密码长度不得低于6位",
                maxlength:"密码长度不得高于16位",
                equalTo:"两次密码输入不一致"
            },
            email:{
                required:"请输入您的邮箱账号",
                email:"请输入有效的电子邮件地址"
            }
        }
    });
    $("#btn-close").click(function(){
        $("#form input").val("").css("border","none");
        $("#form label>span").text("");
    });
    $("#btn-gb").click(function(){
        $("#form input").val("").css("border","none");
        $("#form label>span").text("");
    });
    $("#btn-tj").click(function(){
        $("#form").submit();
    });
});