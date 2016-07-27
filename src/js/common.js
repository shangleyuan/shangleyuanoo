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
			$(' dd ').on('click','.click-buycar',function(){
				$(this).animate({backgroundPositionX:-514,backgroundPositionY: -291})
				$('#buycar').show(600);
				$('.overlay').show().animate({opacity:0.5})
			});
			$('#buycar .shop-top img').on('click',function(){
				$(' dd .click-buycar').animate({backgroundPositionX:-517,backgroundPositionY: -243})
				$('#buycar').hide(800);
				$('.overlay').animate({opacity:0}).hide();
			});
			$('.buynow').on('click',function(){
				$('#buycar').show(600);
				$('.overlay').show().animate({opacity:0.5});
			});
			//点击切换顾客评价和商品详情
			$('.guke-say').on('click','span',function(){
				var index=$(this).index();
				$(this).addClass('spanclicked').siblings().removeClass('spanclicked')
				$('.in-img').eq(index).removeClass('hide').siblings().addClass('hide')

			});
			//切换最近浏览和推荐的商品
			$('.look-history-menu li').on('click',function(){
				var index=$(this).index();
				$(this).addClass('pull-left').siblings().removeClass('pull-left');
				$('.look-history-box ul').eq(index).show().siblings('ul').hide();
			});
			//点击+和—号，来选择商品数量
			
			$('.p4-number .choose-number').on('click',function(){
				var num=parseInt($(this).siblings('input').val());
				//var howmuch=parseInt($(this).closest('b').text());
				var str=$(this).index('.choose-number');
				//var total=num*howmuch;
				if(num!=1 && str%2==0){
					num--;
				};
				if(str%2==1){
					num++;
				}
				
				if(num==1&&str%2==0){console.log(123)
					num=1;
				};
				$(this).siblings('input').val(num);
				//$(this).closest('strong').html('￥'+total);
				
				
			});
			//删除购物车中所选商品
			$('.shop-box-c .a-last').on('click',function(e){

				e.preventDefault;
				$(this).parent().remove();
			})
			//商品详情页轮播图
			var indexG=0;
			var timerg=setInterval(function(){
				showg();
				indexG++
			},2000)
			function showg(){
				if(indexG==3){
					indexG=0;
				};
				$('.good-content .p2 img').css({opacity:1});
				$('.good-content .p2 img').eq(indexG).css({border:'1px solid orange',opacity:0.5});
				$('.good-content .p3 img').hide();
				$('.good-content .p3 img').eq(2-indexG).show();
			};
			$('.good-content .p3,P2 img').hover(function(){
				clearInterval(timerg);
			},function(){
				timerg=setInterval(function(){
				showg();
				indexG++
				},2000)
			});
			/*$('.good-content .P2 img').hover(function(){console.log(123)
				clearInterval(timerg);
				var index=$(this).index();
				indexG=index;
				showg();
			},function(){
				timerg=setInterval(function(){
				showg();
				indexG++
				},2000)
			});*/
			//顾客评价栏固定
			var fromtop=$('.longimg .guke-say').offset().top;
			$(window).on('scroll',function(){
				
				var scrollTop=$(window).scrollTop();console.log(scrollTop)
				if(scrollTop>=fromtop){
					$('.longimg .guke-say').css({position:'fixed',top:0})
				}else{
					$('.longimg .guke-say').removeAttr('style');
				}
			})
			

			

		})