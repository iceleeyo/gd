/*!build time : 2014-08-12 11:32:33 AM*/
KISSY.add("kg/uploader/2.0.2/plugins/mobileUploader/xmppUtil",function(){var a={begin:!1,localMap:{},init:function(){var a=this;1!=a.begin&&(a.begin=!0,KISSY.getScript("http://a.tbcdn.cn/p/xmpp/1.0/xmpp.js",function(){xmpp.register({ctype:"login",appId:"1063",subType:"1"},function(b){for(var c=0;c<b.length;c++){var d=b[c].t1;if("1063"==d){var e=b[c],f=e.content;"string"==typeof f&&(f=KISSY.JSON.parse(f));var g=f.subType,h=f.data,i=a.localMap[g],j=i.param,k=f.mtype;if(k&&"appCancle"==k)return void i.hide(i);j.xmppcallback({data:h,bizMap:j})}}})}))},registerXmpp:function(a,b){this.localMap[a]=b}};return a}),KISSY.add("kg/uploader/2.0.2/plugins/mobileUploader/qrcode",function(a,b,c,d){function e(b){var d={},e=b||{},f=e.bizMap;delete e.bizMap,a.mix(d,e),a.each(f,function(a,b){d["biz_"+b]=a}),d.subType||(d.subType="qrcode"+a.guid()),d.title&&(d.title=encodeURIComponent(d.title)),this.callback=b.callback,this.param=d,this.isRender=!1,this.isBind=!1;var g=this;6==c.ie&&(g.$mask4ie6=a.all('<iframe src="about:blank" style="display:none; left:-9999px; top:-9999px;" class="tb-qrcode-sb-mask-4-ie6" ></iframe>'),a.ready(function(){a.all("body").append(g.$mask4ie6)}))}var f=b.all,g="http://m.service.taobao.com/getQrCode.htm",h="http://m.service.taobao.com/checkApp.htm",i="http://m.service.taobao.com/qrCodeApi.htm",j="%E6%AD%A3%E5%9C%A8%E8%8E%B7%E5%8F%96%E4%BA%8C%E7%BB%B4%E7%A0%81..",k="";k+='	<div class="qrcode">',k+='<div class="loading"></div>',k+="	</div>";var l='<div class="qrcode-qr"><div class="hd">\u63a8\u8350\u4f7f\u7528<a href="http://app.taobao.com/download/taoApps.htm?spm=a210u.1000832.297503.39.REFn4e&pageIndex=5" target="_blank">\u6dd8\u5b9d\u5ba2\u6237\u7aef</a>\u626b\u63cf\u4e0b\u9762\u7684\u4e8c\u7ef4\u7801\uff1a</div>';l+='<div class="bd">',l+='<div><span class="J_qrimg">'+decodeURIComponent(j)+"</span></div>",l+="</div>",l+='<div class="ft">',l+='<a href="#" class="J_close"><span>\u5173\u95ed</span></a>',l+="</div>",l+='<div class="preview-tip">\u5982\u679c\u624b\u673a\u7aef\u63d0\u793a\u4e0a\u4f20\u6210\u529f\uff0c\u9875\u9762\u6ca1\u6709\u6dfb\u52a0\u56fe\u7247\uff0c<br/>\u8bf7\u70b9\u51fb<a class="J_preview">\u624b\u52a8\u63d2\u5165</a></div>',l+="</div></div>";var m="%E5%B7%B2%E7%BB%8F%E5%90%91%E4%BD%A0%E7%9A%84%E6%89%8B%E6%9C%BA%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF%EF%BC%8C%E6%89%93%E5%BC%80%E6%B6%88%E6%81%AF%E5%8F%AF%E4%BB%A5%E7%9B%B4%E6%8E%A5%E7%94%A8%E6%89%8B%E6%9C%BA%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87%EF%BC%81",n="%E8%8B%A5%E9%95%BF%E6%97%B6%E9%97%B4%E6%B2%A1%E6%94%B6%E5%88%B0%E6%B6%88%E6%81%AF%EF%BC%8C%E5%85%88%E6%89%8B%E5%8A%A8%E5%BC%80%E5%90%AF%E6%B7%98%E5%AE%9D%E5%AE%A2%E6%88%B7%E7%AB%AF%EF%BC%8C%E5%86%8D%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E9%87%8D%E5%8F%91%E6%B6%88%E6%81%AF",o="%E6%94%BE%E5%BC%83%E4%BC%A0%E5%9B%BE",p='<div class="qrcode-app"><div class="app-title"><h3>'+decodeURIComponent(m)+"</h3></div>";p+='<div class="app-body"><span>'+decodeURIComponent(n)+'</span><span><span class="J_QrCountdown count-down" data-count="10"></span><button class="J_QrRetry retry" type="button" style="display: none;">\u91cd\u8bd5</button></span></div>',p+='<div class="app-ft"><span><a href="#" class="J_App_Cancle">'+decodeURIComponent(o)+"</a></span></div></div>";var q=d;return a.augment(e,a.EventTarget,{checkApp:function(b){var c=this;c.param.daily&&(h="http://m.service.daily.taobao.net/checkApp.htm"),c.param._tt=(new Date).getTime(),a.IO({dataType:"jsonp",url:h,data:c.param,jsonpCallback:"CheckApp",success:function(a){var d=a;return c.param.qrid=d.qrid,c.param.mk=d.mk,c.param.t=d.t,d.appResult&&1==d.appResult?(c.container.html(p),c.countDown(c.container.one(".J_QrCountdown"),function(){c.container.one(".J_QrCountdown").hide(),c.container.one(".J_QrRetry").show()}),c.isCheckApp=!0,void(c.$mask4ie6&&c.$mask4ie6.css({width:362,height:173}))):(c.container.html(l),c.getQR(function(){c.container.children().slideDown(.3)}),c.$mask4ie6&&c.$mask4ie6.css({width:222,height:294}),void(b&&b.call(c)))}})},countDown:function(a,b){var c=this,d=a.attr("data-count")||10,e=d;a.html(e+"\u79d2"),c.countdownInterval&&clearInterval(c.countdownInterval),c.countdownInterval=setInterval(function(){a.html(--e+"\u79d2"),"0"==e&&(clearInterval(c.countdownInterval),b())},1e3)},getQR:function(b){var c=this;c.param.daily&&(g="http://m.service.daily.taobao.net/getQrCode.htm"),c.param._tt=(new Date).getTime(),a.IO({dataType:"jsonp",url:g,data:c.param,jsonpCallback:"QrCodeGetPic",success:function(a){var d=a,e=c.container.one(".J_qrimg"),f=document.createElement("img");f.onload=function(){e.html("").append(f),b&&b()},f.src=d.picurl}})},render:function(){var a=this,b=f(k);f(document.body).append(b),a.container=b,a.isRender=!0,a.bindEvent(),a.xmpp()},bindEvent:function(){var b=this;b.param.daily&&(i="http://m.service.daily.taobao.net/qrCodeApi.htm"),b.container.delegate("click",".J_QrRetry",function(){b.param.api="retry",b.param._tt=(new Date).getTime(),a.IO({dataType:"jsonp",url:i,data:b.param,jsonpCallback:"QrCodeRetry",success:function(a){b.container.one(".J_QrCountdown").show(),b.countDown(b.container.one(".J_QrCountdown"),function(){b.container.one(".J_QrCountdown").hide(),b.container.one(".J_QrRetry").show()}),b.container.one(".J_QrRetry").hide()},error:function(){}})}),b.container.delegate("click",".J_App_Cancle",function(){b.param.daily&&(i="http://m.service.daily.taobao.net/qrCodeApi.htm"),b.param.api="cancle",b.param._tt=(new Date).getTime(),a.IO({dataType:"jsonp",url:i,data:b.param,jsonpCallback:"QrCodeCancle",success:function(a){b.container.hide(),6==c.ie&&b.$mask4ie6.hide()},error:function(){}})}),b.container.delegate("click",".J_close",function(a){a.halt(),b.container.hide(),b.$mask4ie6&&b.$mask4ie6.css({left:-9999,top:-9999}).hide()}),b.container.delegate("click",".J_preview",function(a){a.halt(),b.previewUploadResult(b.param)})},show:function(){var a=this;a.isRender||a.render(),a.container.fadeIn(.3,function(){a.checkApp()}),a.$mask4ie6&&setTimeout(function(){a.$mask4ie6.css({left:a.container.css("left"),top:a.container.css("top")}).show()})},hide:function(a){var b=a||this;b.$mask4ie6&&b.$mask4ie6.css({left:-9999,top:-9999}).hide(),b.container.hide(),b.countdownInterval&&clearInterval(b.countdownInterval)},xmpp:function(){var a=this;q.init(),q.registerXmpp(a.param.subType,a)},xmppcallback:function(){},previewUploadResult:function(b){var c=this;a.IO({dataType:"jsonp",url:"http://m.service.taobao.com/previewUploadResult.htm",jsonpCallback:"getPreviewResult",data:{qrid:b.qrid,mk:b.mk},success:function(a){1==a.success&&a.data&&c.param.xmppcallback(a.data)},error:function(){}})},offset:function(a,b){this.container.css({top:a,left:b})}}),e},{requires:["node","ua","./xmppUtil"]});