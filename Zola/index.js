define(["jquery"], function($){
	function main(){
		$(function(){
/*data*/
			$.ajax({
				url: 'data/data.json',
				type: "GET",
				success: function(res){
					for(var i = 0;i < res.length;i++){	
						$(`
						<li><a href="">${res[i].ali}</a></li>
						`).appendTo($(".view"));
					}
					for(var i = 0; i < res.length; i++){
						$(`<div><img src="${res[i].div.images}" alt=""></div>`).appendTo($(".view"))
					}
					var oViewLi = $('.view').find('li');
					var oViewDiv = $('.view').find('div');
					$('.view').on('mouseenter','li',function(){
						oViewDiv.css('display','none').eq($(this).index()).css('display','block');
						oViewLi.css('backgroundColor','#454545').eq($(this).index()).css('backgroundColor','white');
					})
					$(".view").on("mouseleave", function(){
						oViewDiv.css('display','none');
						oViewLi.css('backgroundColor','#454545')
					})
				},
				error: function(msg){
					alert(msg);
				}
			})
/*data1*/
			$.ajax({
				url: 'data/data1.json',
				type: 'GET',
				success: function(res){
					var html = '';
					for(var i = 0; i < res.length; i++){
						html += `<li>
					<div class = "clearfixdiv">
						<img src="${res[i].images}" alt="">
						<div>
							<p>${res[i].div.p}</p>
							<span>${res[i].div.span1}</span>
							<span>${res[i].div.span2}</span>
							<span>${res[i].div.span3}</span>
						</div>
					</div>
					<p>${res[i].p1}</p>
					<p>${res[i].p2}</p>
					<p>${res[i].p3}</p>
				</li>`
					}
					$('.clearfix').html(html);
					var oDiv = $('.clearfixdiv');
					var oDivTwo = oDiv.find('div');
					var oLis = $('.clearfix').find('li');
					$('.clearfix').on('mouseenter','li',function(){
						oDivTwo.css('display','none').eq($(this).index()).stop().animate({height:50}).css('display','block');
					});
					$('.clearfix').on('mouseleave','li',function(){
						oDivTwo.eq($(this).index()).stop().animate({height:0}).css('display','none');
					});
				},
				error: function(msg){
					alert(msg);
				}
			})
/*data2*/
		$.ajax({
			url: 'data/data2.json',
			type: 'GET',
			success: function(res){
				
					$(`<img src="${res[0].images}" alt="">`).appendTo($('.arrival-a1'));
					$(`<p>${res[0].p1}</p>`).appendTo($('.arrival-div1'));
					$(`<p>${res[0].p2}</p>`).appendTo($('.arrival-div1'));
					$(`<p>${res[0].p3}</p>`).appendTo($('.arrival-div1'));
					$(`<p>${res[0].p4}</p>`).appendTo($('.arrival-div1'));
					$(`<img src="${res[1].images}" alt="">`).appendTo($('.arrival-a2'));
					$(`<p>${res[1].p1}</p>`).appendTo($('.arrival-div2'));
					$(`<p>${res[1].p2}</p>`).appendTo($('.arrival-div2'));
					$(`<p>${res[1].p3}</p>`).appendTo($('.arrival-div2'));
					$(`<p>${res[1].p4}</p>`).appendTo($('.arrival-div2'));
					$(`<img src="${res[2].images}" alt="">`).appendTo($('.arrival-a3'));
					$(`<p>${res[2].p1}</p>`).appendTo($('.arrival-div3'));
					$(`<p>${res[2].p2}</p>`).appendTo($('.arrival-div3'));
					$(`<p>${res[2].p3}</p>`).appendTo($('.arrival-div3'));
					$(`<p>${res[2].p4}</p>`).appendTo($('.arrival-div3'));

		
			},
			error: function(msg){
				alert(msg);
			}
		})		
/*coupon*/
		$.ajax({
			url: 'data/coupon.json',
			type: 'GET',
			success: function(res){
				for(var i = 0; i < res.length; i++){
					$(`	
						<li>
							<div class = "cou-div">
								<div class = "price">${res[i].price}</div>
								<div class = "name">
									<p>${res[i].name.p1}</p>
									<p>${res[i].name.p2}</p>
								</div>
							</div>
							<div>
								<a href="">立即领取&nbsp;>></a>
							</div>
						</li>
					`).appendTo($('.coupon'));
				}
			},
			error: function(msg){
				alert(msg);
			}
		})
/*sectionbody*/
		$.ajax({
			url: 'data/sectionbody.json',
			type: 'get',
			success: function(res){
				for(var i = 0; i < res.length; i++){
					$(`<li><img src="${res[i].images}" alt=""></li>`).appendTo($('.section-body'));
				}
			},
			error: function(msg){
				alert(msg);
			}
		})
/*sectionfoot*/
		$.ajax({
			url: 'data/sectionfoot.json',
			type: 'get',
			success: function(res){
				var html = '';
				for(var i = 0; i < res.length; i++){
					html += `
						<li>	
							<img src="${res[i].images}" alt="">
							<p><a href="http://www.zol.com/detail/cell_phone/rongyao/29995138.html?skuId=10944230" target="_blank">${res[i].p1}</a></p>
							<p>${res[i].p2}</p> 
							<div>
								<span>${res[i].span1}</span>
								<span>电商参考价:</span>
								<span>${res[i].span3}</span>
							</div>
							<div class = 'a'>
								<a href="">商品评价</a>
								<a href="">商品视频</a>
								<a href="">网站点评</a>
							</div>
						</li>
					`
				}
				$('.section-foot').html(html);
			/*	var oA = $('.a').find('a');
				$('.a').on('mouseenter','a',function(){
					oA.stop().animate({backgroundColor : #f66})
				})
				*/

			},
			error: function(msg){
				alert(msg);
			}
		})
/*section5*/
			$.ajax({
			url: 'data/section5.json',
			type: 'get',
			success: function(res){
				for(var i = 0; i < res.length; i++){
					$(`
						
			        	<li>
							<img src="${res[i].images}" alt="">
							<a href="http://www.zol.com/detail/digital_camera/canon/29545358.html?skuId=10230862&amp;spm=921" target="_blank">${res[i].a}</a>
							<p>${res[i].p}</p>
						</li>
					`).appendTo($('.five-left'))
				}
			},
			error: function(msg){
				alert(msg);
			}
		})
			$.ajax({
			url: 'data/section5.json',
			type: 'get',
			success: function(res){
				for(var i = 0; i < res.length; i++){
					$(`
						<li>
							<img src="${res[i].images}" alt="">
							<a href="http://www.zol.com/detail/digital_camera/canon/29545358.html?skuId=10230862&amp;spm=921" target="_blank">${res[i].a}</a>
							<p>${res[i].p}</p>
						</li>
					`).appendTo($('.five-right'))
				}
			},
			error: function(msg){
				alert(msg);
			}
		})
/*section6*/
		$.ajax({
			url: 'data/section6.json',
			type: 'get',
			success: function(res){
				for(var i = 0; i < res.length; i++){
					$(`
						<li>
							<img src="${res[i].images}" alt="">
							<p><a href="http://www.zol.com/detail/cell_phone/huawei/30549461.html" target="_blank">${res[i].p1}</a></p>
							<p>${res[i].p2}</p>
			        	</li>
						
					`).appendTo($('.sectionsix'))
				}
			},
			error: function(msg){
				alert(msg);
			}
		})
		
/*轮播图*/
		var oBtns = $(".img").find("li");
				var oOl = $(".slideshow").find("ol");
				var aLis = oOl.find("li");
				//设置iNow，代表当前显示图片的下标
				var iNow = 0;
				var timer = null;
				oBtns.click(function(){
					iNow = $(this).index();
					tab();
				})
				//添加自动滚动
				timer = setInterval(timerInner, 2000);
				//鼠标移入 移出
				$(".slideshow").hover(function(){
					clearInterval(timer);
				}, function(){
					timer = setInterval(timerInner, 2000);
				})
				function timerInner(){
					iNow++;
					tab();
				}
				//点击切换图片
				function tab(){
					//1、先让当前被点击的按钮active
					oBtns.attr("class", "").eq(iNow).attr("class", "active");
					//最后一张图片，active的按钮也是下标0
					if(iNow == aLis.size() - 1){
						oBtns.eq(0).attr('class', "active");
					}
					//2、切换图片
					oOl.stop().animate({
						top: -400 * iNow
					}, 500, function(){
						if(iNow == aLis.size() - 1){
							oOl.css("top", 0);
							iNow = 0;
						}
					});
				}	



			




		})
	}	
	return {
		main: main
	}
})