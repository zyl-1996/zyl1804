define(["jquery"], function($){
	function detail(){
		$(function(){
/*放大镜*/
			$('.zoom').on('mouseenter',function(e){
				$('.zoompup').css('display','block');
				$('.maximg').css('display','block');
				$('.zoom').on('mousemove',function(e){
					var oleft = e.pageX - $('.zoom').offset().left - ($('.zoompup').width())/2;
					if(oleft < 0){
						oleft = 0;
					}else if(oleft > $('.zoom').width() - $('.zoompup').width()){
						oleft = $('.zoom').width() - $('.zoompup').width();
					}
					var otop = e.pageY - $('.zoom').offset().top - ($('.zoompup').height())/2;
					if(otop < 0){
						otop = 0;
					}else if(otop > $('.zoom').height() - $('.zoompup').height()){
						otop = $('.zoom').height() - $('.zoompup').height();
					}
					$('.zoompup').css('left', oleft + 'px');
					$('.zoompup').css('top', otop + 'px');
					var ox = $('.zoom').width() / ($('.zoom').width() - $('.zoompup').width());
					var oy = $('.zoom').height() / ($('.zoom').height() - $('.zoompup').height());
					$('.maximg img').css('left', (-oleft * ox) + 'px');
					$('.maximg img').css('top', (-otop * oy) + 'px');
				});
			});
			$('.zoom').on('mouseleave',function(e){
				$('.zoompup').css('display','none');
				$('.maximg').css('display','none');
			});
/*切换*/
			var oLis = $('.list').find('li');
			var oImagesA = $('.imga');
			var oImagesB = $('.maximg').find('img');
			oLis.on('click',function(){
				oImagesA.css("display", 'none').eq($(this).index()).css("display", 'block');
				oImagesB.css("display", 'none').eq($(this).index()).css("display", 'block');
			})



		})
	}
	return {
		detail: detail
	}
})
