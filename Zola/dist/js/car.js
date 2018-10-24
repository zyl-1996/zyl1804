define(['jquery','jquery-cookie'],function($){
	function car(){
		$(function(){
			var cookie = eval($.cookie('goods'));
			if(cookie){
				$.ajax({
					url:'data/goods.json',
					type:'GET',
					success:function(res){
						for(var i = 0;i < cookie.length; i++){
							$(`
								<li class="cart-goods-con gid = "${cookie[i].id}">
									<img src="${res[cookie[i].id].images}" alt="">
									<div class="form">${res[cookie[i].id].note}</div>
									<div class="price">${res[cookie[i].id].p1}</div>
									<div class="number">
										<div class="jisuan">
											<div class = "jia">+</div>
											<div class = "shu">${cookie[i].num}</div>
											<div class = "jian">-</div>
										</div>	
									</div>
									<div class="xiaoji">${res[cookie[i].id].p1}. * ${cookie[i].num}</div>
									<button class="delete">删除</button>
								</li>
							`).appendTo($('.list'));
						}
						snum_c();	
						sun_c();
					}	
				})
			}

			var sel_goods = [];
			for (var i = 0; i < cookie.length; i++) {
				let obj = {id:cookie[i].id , isyes:true};
				sel_goods.push(obj);
			}
			function snum_c(){
				var snum = 0;
				for (var j = 0; j < sel_goods.length; j++) {
					if(sel_goods[j].isyes){
						for(var i = 0; i < cookie.length; i++){
							if(sel_goods[j].id == cookie[i].id){
								snum += cookie[i].num;
							}
						}
					}
				}
				$(".allnum").html(snum);
			}
			function sun_c(){
			var sum = null;
			for (var j = 0; j < sel_goods.length; j++) {
				if(sel_goods[j].isyes){
					$('.cart-goods-con').each(function(index, el){
						if(sel_goods[j].id == $(el).attr('gid')){
							var n = $('.xiaoji').eq(index).html();
							n = Number(n.replace('￥', ''));
							sum = sum + n;
						}
					});
				}
			}

			if(sum){
				$('.totalprice').html(`￥${sum}`);
			}else{
				$('.totalprice').html(`￥0`);
			}
		}


	

















		});
	};
	return{car: car};
})