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
			//点击后改变头部显示的地名
			$('#boxcity a').on('click',function(e){
				e.preventDefault;
				$('.head-left div').html($(this).text());
			})
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
			//首页轮播图
			var index=0;
			var timer;
			show();
			var timer=setInterval(function(){
				show();
				index++;
			},3000);
			function show(){
				if(index==6){
					index=0;
				};
				$('#indexbanner .lunboul').animate({left:-320-index*1920});
				$('#indexbanner .slidebtn li').removeClass('active');
				$('#indexbanner .slidebtn li').eq(index).toggleClass('active');
			}
			$('#indexbanner').hover(function(){
				clearInterval(timer)
			},function(){
				timer=setInterval(function(){
				show();
				index++;
				},3000);
			});
			$('#indexbanner .slidebtn').on('click','li',function(){
				index=$(this).index();
				show();
			});
			//移入图片时图片变大，鼠标移处恢复
			$('.fruit-tui dl img').not('bigimg').hover(function(){
				$(this).stop().animate({width:270,height:270,left:-11,top:-11});
			},function(){
				$(this).stop().animate({width:248,height:248,left:0,top:0});
			});
			$('.fruit-tui dl .bigimg').hover(function(){
				$(this).stop().animate({width:270,height:630,left:-11,top:-15});
			},function(){
				$(this).stop().animate({width:248,height:610,left:0,top:0});
			});
			//点击购物车图标显示遮罩层和购物车,更换背景图
			$('.fruit-tui dd').on('click','.click-buycar',function(){
				$(this).animate({backgroundPositionX:-514,backgroundPositionY: -291})
				$('#buycar').show(600);
				$('.overlay').show().animate({opacity:0.5})
			});
			$('#buycar .shop-top img').on('click',function(){
				$('.fruit-tui dd .click-buycar').animate({backgroundPositionX:-517,backgroundPositionY: -243})
				$('#buycar').hide(800);
				$('.overlay').animate({opacity:0}).hide();
			})


			

		})