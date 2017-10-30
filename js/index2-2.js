/**
 * Created by Administrator on 2017/6/6.
 */
$(function(){
    /*选项卡*/
    $("#list-group button").each(function(){
        $(this).click(function(){
            $("#list-group button").attr("class","list-group-item");
            $(this).attr("class","list-group-item active");
            if($(this).index()==0){
                $("#nav-tabs>li:nth-child(1)").attr("class","active");
                $("#nav-tabs>li:nth-child(2)").attr("class","");
            }
            if($(this).index()==1){
                $("#nav-tabs>li:nth-child(1)").attr("class","");
                $("#nav-tabs>li:nth-child(2)").attr("class","active");
            }
        })
    });

    /*发布文章添加内容*/
    $("#btn-publish").click(function(){
        var title=$("#exampleInputEmail1").val();
        var timestamp=new Date().getTime();
        var array=[];
        var tag=title+","+time();
        array.push(tag);
        var string=array.join(",");
        layout(title,time(),timestamp);
        localStorage.setItem(timestamp,string);
        $("#exampleInputEmail1").val("");
        $("#exampleInputFile").val("");
        del();
        revise();
    });
    //循环得出数据
    if(window.localStorage){
        for(var i=0;i<localStorage.length;i++){
            var y=localStorage.key(i);
            var y1=localStorage.getItem(y);
            var y3=y1.split(",");
            layout(y3[0],y3[1],localStorage.key(i))
        }
    }
    //删除按钮函数
   function del(){
        $(".btn-group>.dropdown-menu>li:nth-child(2)>a:gt(6)").each(function(){
            $(this).click(function(){
                var sc=confirm("是否确认删除？");
                if(sc==true){
                    alert("删除成功");
                    $(this).parent().parent().parent().parent().parent().parent().parent().css("display","none");
                    var x=$(this).attr("content");
                    localStorage.removeItem(x)
                }
            });
        });
    }
    del();
   //修改按钮函数
    function revise(){
        $(".btn-group>.dropdown-menu>li:nth-child(1)>a:gt(6)").each(function(){
            $(this).click(function(){
                var name=prompt("请修改文章标题");
                if(name==null){
                    alert("内容不能为空！");
                }else{
                    var ys=$(this).parent().parent().parent().parent().parent().parent().parent().children().first();
                    ys.text(name);
                    var b=$(this).parent().next().children();
                    //console.log(b);
                    var c=b.attr("content");
                    localStorage.removeItem(c);
                    var d=name+","+time();
                    localStorage.setItem(c,d)
                }
            });
        })
    }
    revise();
    //字符串链接函数
    function layout(a,b,c){
        var str="";
        str+="<div class='row' style='border-bottom:1px solid #ddd'>" +
            "<div class='col-md-6' style='padding:15px;font-weight:bold'>"+a+"</div>" +
            "<div class='col-md-6' style='padding:0'>" +
            "<div class='container-fluid' style='padding:0'>" +
            "<div class='col-md-4' style='padding:15px'>侯伟</div><div class='col-md-4' style='padding:15px'>"+b+"</div><div class='col-md-4'>" +
            "<div class='btn-group'>" +
            '<button type="button" class="btn btn-default dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="margin:10px 0">' +
            "操作<span class='caret'></span>" +
            "</button><ul class='dropdown-menu'>" +
            "<li><a href='#'>编辑</a></li>" +
            "<li><a href='#' content="+c+">删除</a></li>" +
            "<li><a href='#'>全局置顶</a></li>" +
            "</ul>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        $("#container-fluid").append(str);
    }
    //时间函数
    function time(){
        var t=new Date();
        var y=t.getFullYear();
        var m=t.getMonth()+1;
        var d=t.getDate();
        if(m<10){
            m="0"+m;
        }
        if(d<10){
            d="0"+d;
        }
        var date=y+"/"+m+"/"+d;
        return date
    }

    /*分页*/
    $(".pagination li").each(function(){
        $(this).click(function(){
            $(".pagination li").attr("class","");
            $(this).attr("class","active");
        });
    });
});