define(["parabola", "jquery", "jquery-cookie"], function(parabola, $){
	function main(){
		$(function(){
			$.ajax({
				url: 'data/data.json',
				type: "GET",
				success: function(res){
					var html = '';
					for(var i = 0;i < res.length;i++){
						html += `<div><img src="${res[i].images}" alt="" /></div>
						<ul></ul>`;
					}
					$(".view .a").html(html);
					var oView = $('.view');
			var oViewLi = oView.find('li');
			var oViewDiv = $('.a').find('div');
			oViewLi.mouseenter(function(){
				oViewDiv.css('display','none').eq($(this).index()).css("display", 'block');
				oViewLi.css('backgroundColor','#454545').eq($(this).index()).css('backgroundColor','white');
			})
			oViewLi.mouseleave(function(){
				oViewDiv.eq($(this).index()).css("display", 'none');
				oViewLi.eq($(this).index()).css('backgroundColor','#454545');
			})
	
				},
				error: function(msg){
					alert(msg);
				}
			})

			



			




		})
	}	
	return {
		main: main
	}
})