define(['jquery', 'jquery-cookie'], function($){
	function logon(){
		$(function(){
			var pass = false;
/*随机生成n位数的验证码*/
			function testCode(n){
				var arr = [];
				for(var i = 0; i < n; i++){
					var num = parseInt(Math.random() * 100);
					if(num >= 0 && num <= 9){
						arr.push(num);
					}else if(num >= 65 && num <= 90){
						var str = String.fromCharCode(num);
						arr.push(str);
					}else if(num >= 17 && num <= 42){
						var str = String.fromCharCode(num + 80);
						arr.push(str);
					}else{
						//避免消耗循环次数
						i--;
					}	
				}
				return arr.join("");
			}
 /*手机号*/
			$('.username input').blur(function(event) {
				var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
		        if (!myreg.test($('.username input').val())) {
		        	if($('.username input').val()){
		        		$('.username p').html('手机号码格式错误');
		        		$('.username p').css('color','#ff3300');
		        	}else{
		        		$('.username p').html('请输入手机号码');
		        		$('.username p').css('color','#ff3300');
		        	}
		        }else{
		        	$('.username p').html('手机号码输入成功');
		        	pass = true;
		        }
			})
/*验证码*/ 
			$('.verify div').html(testCode(5));
			$('.verify div').on('click',function(){
				$('.verify div').html(testCode(5));
			})		
			var str2 = $('.verify div').html();
			str2 = str2.toLowerCase();
			$('.verify input').blur(function(event) {
				var str1 =$('.verify input').val();
				str1 = str1.toLowerCase();
				if(!($('.verify input').val())){
					$('.verify p').html('请输入验证码');
					$('.verify p').css('color','#ff3300');
				}else if(str1 != str2){
					$('.verify p').html('验证码不正确');
					$('.verify p').css('color','#ff3300');
				}else{
					$('.verify p').html('验证码正确');
					pass = true;
				}	
			})
/*密码*/
			$('.password input').blur(function(event) {
				var regex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/; 
				if (!regex.test($('.password input').val())) {
					if($('.password input').val()){
		        		$('.password p').html('密码长度6~16位,必须包含数字和字母');
		        		$('.password p').css('color','#ff3300');
		        		$('.password input').val('');
		        	}else{
		        		$('.password p').html('请输入密码');
		        		$('.password p').css('color','#ff3300');
		        	}
				}else{
					$('.password p').html('密码输入成功');
					pass = true;
				}
			})
/*二次密码*/
			$('.repassword input').blur(function(event) {
				if(!($('.repassword input').val())){
					$('.repassword p').html('请输入确认密码');
					$('.repassword p').css('color','#ff3300');
				}else if($('.repassword input').val() != $('.password input').val()){
					$('.repassword p').html('密码不一致');
					$('.repassword p').css('color','#ff3300');
				}else{
					if($('.password input').val()){
						$('.repassword p').html('密码确认');
						pass = true;
					}else{
						$('.password p').html('请输入密码');
						$('.password p').css('color','#ff3300');
					}
				}
			})
/*注册*/
			$('.enroll').click(function(event){
				var str = `username=${$("#username").val()}&password=${$("#password").val()}`;
				if(pass){
					$.ajax({
						url: 'http://localhost/Zol/dist/php/logon.php',
						type: 'POST',
						data: str,
						success: function(data){
							alert(data);
						},
						error: function(msg){
							alert(msg);
						}
					})
				}else{
					$('.enroll').html('请重新注册');
				}
			})
		})
	}
	return {
		logon: logon
	}
})