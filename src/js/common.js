		$(function(){
			//省市点击关闭或打开
			$('.provicesel').on('click',function(){
				if($(this).find('span').text()=='v'){
					$(this).find('span').html('>');
				}else {
					$(this).find('span').html('v');
				}
				$(this).next('.citysel').slideToggle(function(){

				});
				
				
			});
			//果园开关
			$('.head-left,#boxcity').hover(function(){
				$('#boxcity').show();
			},function(){
				$('#boxcity').hide();
			});
			$('.hideli').hover(function(){
				$(this).find('div').show();
				
			},function(){
				$(this).find('div').hide();
			
			});
			

		})