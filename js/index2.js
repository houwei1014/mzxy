/**
 * Created by HW on 2017/6/5.
 */
window.onload=function(){
    //曲线图
var data={
        labels:["周一","周二","周三","周四","周五","周六","周末"],
        datasets:[
            {
                lineItemName:"第二次访客统计",
                fillColor:"#7F7FFE",//填充颜色
                strokeColor:"#F00717",//折线颜色
                pointColor:"#857BF5",//折点颜色
                pointStrokeColor:"#F00717",//折点填充色,point外面的颜色
                data:[300,580,650,700,900,900,1000]//柱状图高度
            },
            {
                lineItemName:"第二次访客统计",
                fillColor:"rgba(0,255,0,0.5)",//填充颜色
                strokeColor:"#3AD33D",//折线颜色
                pointColor:"green",//折点颜色
                pointStrokeColor:"#fff",//折点填充色,point外面的颜色
                data:[300,480,780,820,1000,900,1000]//柱状图高度
            },
            {
                lineItemName:"第三次访客统计",
                fillColor:"#9F6040",//填充颜色
                strokeColor:"#0819EE",//折线颜色
                pointColor:"green",//折点颜色
                pointStrokeColor:"#fff",//折点填充色,point外面的颜色
                data:[100,250,480,400,600,590,500]//柱状图高度
            }
        ]
    };
    var ctx=document.getElementById("myChart").getContext("2d");
    new Chart(ctx).Line(data,{
        bezierCurve:true,
        scaleGridLineColor:"rgba(0,0,0,0.1)"
    });
    //警告框
    $("#btn-repair").click(function(){
        var c=confirm("网站程序有漏洞,是否确认修复？");
        if(c==true){
            alert("修复完成");
            $(".alert-danger").css("display","none");
        }else{
            alert("请及时修复漏洞保护网站安全！")
        }
    });
    $("#btn-handle").click(function(){
        $(".alert-danger").css("display","none")
    });
};
