define(["jquery", "jquery-cookie"], function($){
	function goods(){
		$(function(){

			car();

			$.ajax({
				url: 'data/goods.json',
				type: "GET",
				success: function(res){
					var html = "";
					for(var i = 0; i < res.length; i++){
						html += ` 
							<li id = ${res[i].id}>
								<img src="${res[i].images}" alt="">
								<div class = "note">${res[i].note}</div>
								<p>${res[i].p1}</p>
								<div class = "evaluate">
									<span>${res[i].span1}</span>
									<span>${res[i].span2}</span>
								</div>
								<p>${res[i].p2}</p>
							</li>
						`;
					}
					$(".lista ul").html(html);	
				},
				error: function(msg){
					alert(msg);
				}
			});

			$('.lista').on('click','li',function(){
				var id = this.id;
				var first = $.cookie("goods") == null ? true : false;
				if(first){
					$.cookie("goods", `[{id:${id},num:1}]`, {
					expires: 7,
					raw: true
					});
				}else{
					//判断之前是否添加过商品
					var cookieStr = $.cookie('goods');
					var arr = eval(cookieStr);
					var same = false;
					for(var i = 0;i < arr.length;i++){
						if(arr[i].id == id){
							arr[i].num++;
							same = true;
							break;
						}
					}
					if(!same){
					//没有相同的
						var obj = {id: id, num: 1};
						arr.push(obj);
					}
					$.cookie("goods", JSON.stringify(arr), {
						expires: 7,
						raw: true
					});
				}
				car();
			})

			function car(){
				var str = $.cookie("goods");
				if(str){
					var arr = eval(str);
					var sum = 0;
					for(var i = 0; i < arr.length; i++){
						sum += arr[i].num;
					}
					$(".car_num").html(sum);
				}
			}
		})
	}	
	return {
		goods: goods
	}
})