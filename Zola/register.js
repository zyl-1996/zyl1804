define(['jquery'],function(jquery){
	function register(){
		$(function(){
			var pass = false;
/*用户名*/
			$('.username').blur(function(){
				if(!($(this).val())){
					$('.error').css('display','block');
					$('.error').html('请输入手机号/邮箱/用户名');
				}else{
					$('.error').css('display','none');
					pass = true;
				}
			})
/*密码*/
			$('.password').blur(function(){
				if(!($(this).val())){
					$('.error').css('display','block');
					$('.error').html('请输入密码');
				}else{
					$('.error').css('display','none');
					pass = true;
				}
			})
			$('.enroll').click(function(){
				var str = `username=${$(".username").val()}&password=${$(".password").val()}`;
				if(pass){
					$.ajax({
						url:'http://localhost/Zol/dist/php/register.php',
						method: 'POST',
						data: str,
						success: function(data){
							alert(data);
						},
						error: function(msg){
							alert(msg);
						}
					})
				}else{
					$('.enroll').html('请重新登录');
				}
			})
			

		



		})
	}
	return {
		register: register
	}
})