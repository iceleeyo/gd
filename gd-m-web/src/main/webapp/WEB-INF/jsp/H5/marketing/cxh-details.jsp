<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsp/pub/constants.inc" %>
<%@ include file="/WEB-INF/jsp/pub/tags.inc" %>


<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>产销汇活动详情</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="format-detection" content="telephone=no">
	<meta http-equiv="x-rim-auto-match" content="none">
	<meta name="keywords" content="" />
	<meta name="description" content="" />
	<link rel="stylesheet" href="${CONTEXT }/v1.0/css/marketing/gys-css.css">
	<link rel="stylesheet" href="${CONTEXT }/v1.0/css/marketing/iconfont.css">
	<!--<link rel="stylesheet" href="css/swiper.min.css">-->
	<script type="text/javascript">
		var apiUrl='${apiUrl }';
		var CONTEXT = '${CONTEXT }';
	</script>
	

</head>

<body>	
	<div class="main-wrap">
		<div class="start-time-box">
			<div class="start-time">
				<i class="iconfont icon-time icon-color"></i>
				<span class="st-time-cb">距开始时间：</span>
				<span class="st-time-cl">28:32:45</span>
			</div>
			<!--<span class="sign-up">已报名</span>-->
		</div>
		<div class="detail-content clearfix">
			<div class="detail-img"><img class="imgTemp" src="images/sp-img_03.png"/></div>
			<div class="activity-name">
				<h3 class="activity-name-cp">活动名称：草莓产销汇</h3>
				<p class="activity-name-strat">开始时间：<span class="activity-strat-tm">2016-05-06  10:00:00</span></p>
				<p class="activity-name-strat activity-name-end">结束时间：<span class="activity-strat-ed">2016-05-10  10:00:00</span></p>
			</div>

		</div>
		<div class="activity-rules-click">
			<div class="activity-rules-si clearfix">
			    <span class="activity-rules-gz">活动规则：</span>
			   <!--<i class="iconfont icon-icon_arrow_bottom bot-color"></i>-->
			</div>
			 <p class="activity-rules-content" style="display:block;">凡参加活动者，即视为同意接受本活动规则及奖品领取规则的所有条款，如有任何舞弊、欺诈、用户信息不真实等情形，主办方有权取消参与者参加活动的资格，并保留不另行通 知或采取其他相应法律措施的权利。 
			</p>
		</div>
		
		
	<footer class="box-footer clearfix">
		<div class="footer-application"><a class="footer-li-a" href='${CONTEXT }activityPromotion/activity/detail?add=1'>立刻申请</a></div>
	</footer>
	</div>
	
	<script type="text/javascript" src="${CONTEXT }/js/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="${CONTEXT }/js/jquery.mobile.custom.min.js"></script>
	<script type="text/javascript" src="${CONTEXT }v1.0/js/marketing/global.js"></script>
	<script>
        $(function() {
        	$('.bot-color').on('tap',function() {

        		if($('.activity-rules-content').is(':visible')){

        			$('.activity-rules-content').slideUp();
        		}else{

        			$('.activity-rules-content').slideDown();
        		}
        	});

			function addShow(){
				//window.location.href='/PromotionAcitivity/promotionDetail?actId=1&type=0';
				var type=getQueryString('type');
				if(type==0){
					$(".box-footer").hide();
				}
			}addShow();
			
          /**取参数**/

			var getUrlmenu=getQueryString("actId");
			financialData(getUrlmenu);
			function financialData(datas) {
				$.ajax({
				   	type: "get",
				   	url: CONTEXT + "activityPromotion/activity/detail",
				   	dataType:'json',
				    data:{actId:datas},
				   	success: function(data){	   		
				   		var introduction = $('.activity-rules-click').find('.activity-rules-content').html(data.object.introduction)
				   		var nameStr = '';
				   		//var imTp = $(".imgTemp").prop("src",data.object.pictureRefList[0].url120);
				   		    nameStr +="<div class='detail-img'>"+'<img'+' src='+data.object.pictureRefList[0].url120+'>'+"</div>"+
						"<div class='activity-name'>"+
							"<h3 class='activity-name-cp'>活动名称："+data.object.name+"</h3>"+
							"<p class='activity-name-strat'>开始时间："+"<span class='activity-strat-tm'>"+data.object.startTime+"</span>"+"</p>"+
							"<p class='activity-name-strat activity-name-end'>结束时间："+"<span class='activity-strat-ed'>"+data.object.endTime+"</span>"+
							"</p>"+
						"</div>"
                        $('.main-wrap').find('.detail-content').html(nameStr);
                      //倒计时
				   		var date2=Date.parse(data.object.endTime);
				   		var date1=new Date().getTime();
				   		countdown((date2-date1)/1000);
				   	
				   		
				   	},
				   	error:function(jqXHR) {
				   		alert("发生错误："+jqXHR.status);
				   	}
				   	
				})
				
			};
			
           //倒计时
			
			function countdown(s){
				var h=Math.floor(s/60/60),
						m=Math.floor((s-(h*60*60))/60),
						newS=Math.floor(s-(h*60*60)-(m*60));
				$(".st-time-cl").html(h+':'+m+':'+newS);
				var timer=setInterval(function(){//这是倒计时循环部分
					newS--;
					if(newS<0){
						newS=59;
						m--;
					}
					if(m<0){
						m=59;
						h--;
					}
					h=fix(h,2);
					m=fix(m,2);
					newS=fix(newS,2);
					$(".st-time-cl").html(h+':'+m+':'+newS);
				},1000);
			};
        })


	</script>


<%@ include file="/WEB-INF/jsp/pub/baidu.inc" %>
</body>
</html>