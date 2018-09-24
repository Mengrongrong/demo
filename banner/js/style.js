
var index = 0;

//定义btn点击事件
$(".btn").click(function(){
	index = $(this).index();
	console.log(index);
    $(this).addClass("active").siblings().removeClass("active");
	$(".img-item").eq(index).fadeIn().siblings().fadeOut();
});

//定义tab点击事件
$(".right").click(function(){
    if(index == 4){
	    index = 0;
	}else{
	    index++;
	}
	$(".img-item").eq(index).fadeIn().siblings().fadeOut();
	 $(".btn").eq(index).addClass("active").siblings().removeClass("active");
});

$(".left").click(function(){
    if(index == 0){
	    index = 4;
	}else{
	    index--;
	}
	$(".img-item").eq(index).fadeIn().siblings().fadeOut();
	 $(".btn").eq(index).addClass("active").siblings().removeClass("active");
});

//图片自动轮播
var timer = setInterval("clock()",5000);
function clock(){
     if(index == 4){
	    index = 0;
	}else{
	    index++;
	}
	$(".img-item").eq(index).fadeIn().siblings().fadeOut();
	$(".btn").eq(index).addClass("active").siblings().removeClass("active");
}