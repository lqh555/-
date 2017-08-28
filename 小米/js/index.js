$(function(){
	
	
$("#header").find(".txt").focus(function(){  //获取焦点
	$(".header-form").find(".select").show();
})

$("#header").find(".txt").blur(function(){  //失去焦点
	$(".header-form").find(".select").hide();
})




var timer=null;
$(".header-nav li").not(".unselected").hover(function(){	
	clearTimeout(timer);
	$(".details").stop().animate({height:"230px"}).find("li").eq($(this).index()).show().siblings().hide();
},function(){
	fnHide();
});

$(".details li").hover(function(){
	clearTimeout(timer);
},function(){
	fnHide();
});

function fnHide(){
	timer=setTimeout(function(){
		$(".details").stop().animate({height:"0px"},200).find("li").hide();
	},30);
}


$("#banner .aside-txt .topic").hover(function(){
	$(this).find(".children-list").show()
},function(){
	$(this).find(".children-list").hide();
})


//  轮播
//var oTimer=null;
//oTimer=setInterval(function(){$(".btn-right").trigger("click")},2000);
//$(".banner-wrap").hover(function(){
//	clearInterval(oTimer);
//	$(".btn-left,.arrowBtn-right").show();
//},function(){
//	$(".btn-left,.btn-right").hide();
//	oTimer=setInterval(function(){$(".btn-right").trigger("click")},2000);
//})
//
//var _index=0;
//$(".btn-right").click(function(){
//	_index++;
//	if (_index==$(".banner-wrap-pic li").size()) {
//		_index=0;
//	};
//	fnDo();
//});
//
//$(".btn-left").click(function(){
//	_index--;
//	if (_index<0) {
//		_index=$(".banner-wrap-pic li").size()-1;
//	};
//	fnDo();
//});
//
//function fnDo(){
//	$(".banner-wrap-pic li").css("left","0px").eq(_index).fadeIn().siblings().fadeOut();
//	$(".bBtn").find("li").eq(_index).addClass("active").siblings().removeClass("active");
//}

//轮播
$(function(){
 //第一张显示
 $(".banner-wrap-pic li").eq(0).show();
 //鼠标滑过手动切换，淡入淡出
 $(".bBtn li").mouseover(function() {
 $(this).addClass('active').siblings().removeClass("active");
 var index = $(this).index();
 i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
 // $(".pic li").eq(index).show().siblings().hide();
 $(".banner-wrap-pic li").eq(index).fadeIn(500).siblings().fadeOut(500);
 });
 //自动轮播
 var i=0;
 var timer=setInterval(play,2000);
 //向右切换
 var play=function(){
 i++;
 i = i > 6 ? 0 : i ;
 $(".bBtn li").eq(i).addClass('active').siblings().removeClass("active");
 $(".banner-wrap-pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
 }
 //向左切换
 var playLeft=function(){
 i--;
 i = i < 0 ? 6 : i ;
 $(".bBtn li").eq(i).addClass('active').siblings().removeClass("active");
 $(".banner-wrap-pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
 }
 //鼠标移入移出效果
 $(".banner-wrap").hover(function() {
 clearInterval(timer);
 }, function() {
 timer=setInterval(play,5000);
 });
 //左右点击切换
 $(".btn-left").click(function(){
 playLeft();
 })
 $(".btn-right").click(function(){
 play();
 })
 })





   var s=0;
   var nextBtn=function(){
  	s++;
   s = s > 2 ? 0 : s ;
   $(".dotBtn li").eq(s).addClass('on').siblings().removeClass("on");
   $(".content-item-wraper li").eq(s).css("left","0");
   }
   var prevBtn=function(){
   s--;
   s = s < 0 ? 2 : s ;
   $(".dotBtn li").eq(s).addClass('on').siblings().removeClass("on");
   $(".content-item-wrape li").eq(s).css("left","300px");
   }
   
    $(".prevBtn").click(function(){
    	prevBtn();
    })
    $(".nextBtn").click(function(){
    	nextBtn();
    })






	//内容
	var boxs=$(".content-item-wraper"),//大盒子
	    next=$(".nextBtn"),
	    btn=$(".dotBtn li"),//按钮
		per=$(".prevBtn"),
		oneWidth=$(".pic").eq(0).width(); //获取每个图片的宽度
		
	
		btn.on("click",function(){
			$(this).addClass("on").siblings().removeClass("on");
			var index=$(this).index();
			boxs.animate({
				"left":-oneWidth*index
			})
		})
		var s=0;
		next.on("click",function(){
			s++;
			if(s>=2){
				s=2;
			}	
			btn.eq(s).addClass("on").siblings().removeClass("on");
		boxs.animate({
			"left":-oneWidth*s
		})
		})
		
		per.on("click",function(){
			s--;
			if(s<=0){
				s=0;
			}	
			btn.eq(s).addClass("on").siblings().removeClass("on");
		boxs.animate({
			"left":-oneWidth*s
		})
		})














//
//$(".bBtn").find("li").click(function(){
//	if (_index != $(this).index()) {
//		var oneWidth=$(".banner-wrap-pic li").width();
//		var m = _index - $(this).index()>0 || -1;
//		$(".banner-wrap-pic li").eq(_index).animate({left:m*oneWidth},function(){ $(this).hide();
//		}).end().eq($(this).index()).show().css("left",-m*oneWidth).animate({left:0});
//		_index=$(this).index();
//		$(this).addClass("active").siblings().removeClass("active");
//	};
//});

		$(".more #box-next").click(function(){
			$(".box").css("left","-1226px");
			$(".box-right").css("left","0")
		})
		$(".more #box-page").click(function(){
			$(".box").css("left","0");
			$(".box-right").css("left","1226px")
		})




		$(".more #next").click(function(){
			$(".content-one").css("left","-1226px");
			$(".content-two").css("left","0")
		})
		$(".more #page").click(function(){
			$(".content-one").css("left","0");
			$(".content-two").css("left","1226px")
		})






function fnTab(objLi,objUl){
	objLi.mouseover(function(){
		objUl.eq($(this).index()).show().siblings().hide();
		$(this).addClass("active").siblings().removeClass("active");
	})
}
fnTab($("#match .topic .more li"),$("#match .content-right ul"));
fnTab($("#parts .topic .more li"),$("#parts .content-right ul"));
fnTab($("#around .topic .more li"),$("#around .content-right ul"));
function changeHight(oLi,oDiv){
	oLi.hover(function(){
		$(this).find(oDiv).css("height","80px");
	},function(){
		$(this).find(oDiv).css("height","0px");
	});
}
changeHight($("#match .content-right li"),".comment");
changeHight($("#parts .content-right li"),".comment");
changeHight($("#around .content-right li"),".comment");



//var iCount=0;
//$("#recommend .more a").eq(1).click(function(){
//	if(iCount<3){
//		iCount++;
//		$("#recommend .more a").removeClass("disClick");
//		iCount==3 && $(this).addClass("disClick");
//		$("#recommend").find("ul").css("left",-1240*iCount+"px");
//	}
//})
//$("#recommend .more a").eq(0).click(function(){
//	if(iCount>0){
//		iCount--;
//		$("#recommend .more a").removeClass("disClick");
//		iCount==0 && $(this).addClass("disClick");
//		$("#recommend").find("ul").css("left",-1240*iCount+"px");
//	}
//})
//
//
//$("#content").find(".content-item").each(function(i,elem){
//	(function (obj){
//		var iNum=0;
//		obj.find(".nextBtn").click(function(){
//			if(iNum<3){
//				iNum++;
//				fntab();
//			}
//		})
//		obj.find(".prevBtn").click(function(){
//			if(iNum>0){
//				iNum--;
//				fntab();
//			}
//		})
//
//		obj.find(".dotBtn").find("li").click(function(){
//			iNum=$(this).index();
//			fntab();
//		})
//
//		function fntab(){
//			obj.find(".content-scroll").css("left",-296*iNum+"px");
//			obj.find(".dotBtn").find("li").eq(iNum).addClass("on").siblings().removeClass("on");
//		}
//	})($(elem));
//});


 $(".main-fr li").mouseover(function() {
 $(this).addClass('tab-active').siblings().removeClass("tab-active");
 })



 $(".main-fr li").eq(0).hover(function() {
 $(".home-bottom .audio2").css("display","none");
 $(".home-bottom .audio1").css("display","block");
 })
 $(".main-fr li").eq(3).hover(function() {
 $(".home-bottom .audio2").css("display","block");
 $(".home-bottom .audio1").css("display","none");
 })

















});
