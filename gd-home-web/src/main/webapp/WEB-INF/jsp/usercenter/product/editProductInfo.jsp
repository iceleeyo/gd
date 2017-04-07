<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<!doctype html>
<html>
<head> 
	<meta name="Content-Type" content="text/html; charset=UTF-8">
	<title>会员中心</title>
	<meta name="X-UA-Compatible" content="IE=edge">
	<meta name="renderer" content="webkit">
	<meta name="keywords" content="" />
	<%@ include file="../../pub/constants.inc" %>
	<%@ include file="../../pub/head.inc" %>
	<%@ include file="../../pub/tags.inc" %>
</head>

<body>

   <jsp:include page="../userCenter_head.jsp" flush="true"/> 
   <jsp:include page="../userCenter_left.jsp" flush="true"/> 
   
<!--产品发布产品发布产品发布产品发布产品发-->
		<div class="mid-right bg-white">
			<form id="productEditForm" name="productEditForm"  action="" method="post">
			<h1 class="mid-right-store">发布批发产品</h1>
			<input type="hidden" id="categoryId" name="categoryId" value="${categoryId}" >
			<input type="hidden" id="productId" name="productId" value="${product.productId}" >
			<div class="bg-white-rse">
				<div class="edit-cont">
					<span class="rse-pro-tit"><em class="rse-pro-tit-red">*</em>产品标题：</span>
					<div class="rse-pro-fl"><input id="productName" name="productName" value="${product.productName}"class="rse-pro-fl rse-pro-fl-txt" type="text" maxlength="60" /><span class="error-msg"></span></div>
					<div class="clr"></div>
				</div>
				<div class="edit-cont">
					<span class="rse-pro-tit"><em class="rse-pro-tit-red">*</em>供应量：</span>
					<div class="rse-pro-fl-cp">
						<div class="rse-pro-fl-met"><input id="stockCount" name="stockCount" value="${product.stockCount}" class="rse-pro-fl-met-gy" type="text" placeholder="产品供应量" maxlength="9"/></div>
						<div class="rse-pro-fl-sel">
							<select  id="unit" name="unit"  class="rse-pro-fl-sel-opt" onchange="changeUnit(this)">
								<c:forEach var="item" items ="${productUnit}" varStatus="status">
									<option value="${item.codeKey}">${item.codeValue}</option>
								</c:forEach>
								<!-- <option value="1">吨</option>
								<option value="2">千克</option>
								<option value="3">公斤</option>
								<option value="4">克</option>
								<option value="5">支</option>
								<option value="6">包</option>
								<option value="7">箱</option>
								<option value="8">升</option>
								<option value="9">袋</option>
								<option value="10">条</option>
								<option value="11">尾</option>
								<option value="12">头</option>
								<option value="13">盒</option>
								<option value="14">枚</option>
								<option value="15">组</option>
								<option value="16">件</option>
								<option value="17">只</option>
								<option value="18">瓶</option>
								<option value="19">罐</option>
								<option value="20">桶</option> -->
							</select>
						</div>
					</div>
					<div class="clr"></div>
				</div>
				
				<div class="edit-cont edit-cont--unit-pir">
					<span class="rse-pro-tit"><em class="rse-pro-tit-red">*</em>价格：</span>
					<div class="rse-pro-fl-met">
						<select class="rse-pro-fl-sel-opt rse-pro-tt" id="priceType" name="priceType">
							<option value="0" selected>单价</option>
							<option value="1">价格区间</option>
						</select>	
					</div>
					<span id="priceUnitSpan"></span>
				</div>
				
				<div id="priceAddContainer" class="edit-cont edit-cont--unit-pir edit-cont-i">
					<span class="rse-pro-tit"><em class="rse-pro-tit-red">*</em>单价：</span>
					<div class="rse-pro-fl-met"><input type="text" id="price" name="price"  maxlength="11" class="rse-pro-fl-met-gy" placeholder="单价" /></div>
				</div>
				
				<div id="priceTableContainer" name="priceTableContainer" class="edit-cont edit-cont-sel">
					<span class="rse-pro-tit-int">价格区间：</span>
					<div class="rse-pro-fl-cp1">
						<table id="priceTable" class="rse-pro-pur-sl">
							<tr>
								<td>
									<div class="rse-pro-fix">
										<em class="rse-pro-tit-red">*</em>
								    	<span class="rse-pro-quantity">购买数量</span>
							    	</div>
						   		</td>
						   		<td></td>
								<td>
									<div class="rse-pro-fix rse-pro-fix1">
										<em class="rse-pro-tit-red">*</em>
										<span class="rse-pro-quantity">价格</span>
									</div>
								</td>
							</tr>
					    	<c:forEach var="unitPrice"   items="${product.priceDtoList}"   varStatus="i">
					    		<tr id="priceDtoList_${i.index }" class="rse-pro-fl-cp2">
					    		<td><input type="text" class="rse-pro-interval"  id="priceDtoList[${i.index }].buyCountStart" name="priceDtoList[${i.index }].buyCountStart" alias="CbuyCountStart" value="${unitPrice.buyCountStart }" maxlength="9" ></td>
					    		<td><input type="text" class="rse-pro-interval"  id="priceDtoList[${i.index }].buyCountEnd" name="priceDtoList[${i.index }].buyCountEnd" alias="CbuyCountEnd" value="${unitPrice.buyCountEnd }" maxlength="9" ></td>
					    		<td><input type="text" class="rse-pro-interval"  id="priceDtoList[${i.index }].price" name="priceDtoList[${i.index }].price" alias="Cprice" value="${unitPrice.price }" maxlength="11" ></td>
					    		<td><span><a href="javascript:void(0)" onClick="deletePriceRow('priceDtoList_${i.index }')">-删除</a></span></td>
					    		<td>
					    		<%-- <c:if test='${fn:length(list) ==7}'>class="cur"</c:if> --%>
					    		<%-- <c:if test='${i.isLast()}'><label>&nbsp;&nbsp;&nbsp;截止起订量为空表示大于当前行起始起订量者,均使用当前行价格</label></c:if> --%>
					    		</td>
					    		</tr>
					    		<script type="text/javascript">
						    		var fix = function(num){
						    			var numStr = num + "";
						    			var index = numStr.indexOf(".");
						    			if ( index != -1){
						    					var savingNum = numStr.substring(index+1).length;
						    					return (num * Math.pow(10, savingNum))/ Math.pow(10, savingNum)
						    			}
						    			return num;
						    		}
					    			$("input[alias='CbuyCountStart']")["${i.index }"].value = fix($("input[alias='CbuyCountStart']")["${i.index }"].value);
					    			$("input[alias='CbuyCountEnd']")["${i.index }"].value = fix($("input[alias='CbuyCountEnd']")["${i.index }"].value);
					    			$("input[alias='Cprice']")["${i.index }"].value = fix($("input[alias='Cprice']")["${i.index }"].value);
								</script>
					    	</c:forEach>
						</table>	
						<div class="rse-pro-fl-cp3">
							<a class="pt5 pb5 clearfix" href="javascript:void(0)" onclick="addPriceRow()"><span class="rse-pro-fl-add"></span>增加价格区间</a>
							<br/>提示：1、可根据买家采购的不同数量设置不同价格，最多可填写3条价格区间）<br/>
							<label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、最后一行如果截止起订量为空表示大于当前行起始起订量者,均使用当前行价格</label>
						</div>
						
					</div>
				</div>
				
				<div class="edit-cont">
					<span class="rse-pro-tit"><em class="rse-pro-tit-red">*</em>APP图片：</span>
					<div class="fl mr_10" id="uploadContainer">
			            <input type="file" class="g-u input01" id="upload_btn_app" value="上传图片" name="productPicture" />
			            <input type="hidden" id="J_Urls_App" name="appPicture" />
			        </div>
					<div class="rse-pro-tit-pic">
						<p class="rse-pro-cen-p">请上传5M以内图片，支持jpg、jpeg、gif、png、bmp格式，建议上传产品真实图片。总共能上传1张图片，默认第一张为主图（您可以使用图片上的 ← 和 → 按钮来移动位置 ）</p>
						<ul id="picture_queen_app" class="grid multPic-box">
							<script type="text/uploader-files">
								${appPicture}
    						</script>
	    					<script type="text/uploader-theme">
        
							<li id="queue-file-{id}" class="g-u" data-name="{name}">
                				<div class="pic">
                    				<a href="javascript:void(0);"><img class="J_Pic_{id} preview-img" src="" /></a>
                				</div>
                				<div class=" J_Mask_{id} pic-mask"></div>
                				<div class="status-wrapper">
                    				<div class="status waiting-status"><p>等待上传，请稍候</p></div>
                    					<div class="status start-status progress-status success-status">
                        					<div class="J_ProgressBar_{id}"><s class="loading-icon"></s>上传中...</div>
                    					</div>
                    				<div class="status error-status">
                        				<p class="J_ErrorMsg_{id}">服务器故障，请稍候再试！</p></div>
                					</div>
                				<div class="imageUploader_menu"> <a href="javascript:void(0);" class="imageUploader_but1" id="imageUploader_but1_{id}"  title="左移">&nbsp;</a><a href="javascript:void(0);" class="imageUploader_but2" title="右移"  id="imageUploader_but2_{id}">&nbsp;</a><a href="javascript:void(0);" class="imageUploader_del" id="imageUploader_del_{id}" title="删除" >&nbsp;</a> </div>
            				</li>
    					</script>
						</ul>
					</div>
				</div>
				<div class="edit-cont">
					<span class="rse-pro-tit"><em class="rse-pro-tit-red">*</em>多角度图片：</span>
					<div class="fl mr_10" id="uploadContainer">
			            <input type="file" class="g-u input01" id="upload_btn_multiAngle" value="上传图片" name="productPicture" />
			            <input type="hidden" id="J_Urls_MultiAngle" name="multiplePicture" />
			        </div>
					<div class="rse-pro-tit-pic">
						<p class="rse-pro-cen-p">请上传5M以内图片，支持jpg、jpeg、gif、png、bmp格式，建议上传产品真实图片。总共能上传4张图片，默认第一张为主图（您可以使用图片上的 ← 和 → 按钮来移动位置 ）</p>
						<ul id="picture_queen_MultiAngle" class="grid multPic-box">
							
							<script type="text/uploader-files">
								${multiplePicture}
    						</script>
	    					<script type="text/uploader-theme">
        
							<li id="queue-file-{id}" class="g-u" data-name="{name}">
                				<div class="pic">
                    				<a href="javascript:void(0);"><img class="J_Pic_{id} preview-img" src="" /></a>
                				</div>
                				<div class=" J_Mask_{id} pic-mask"></div>
                				<div class="status-wrapper">
                    				<div class="status waiting-status"><p>等待上传，请稍候</p></div>
                    					<div class="status start-status progress-status success-status">
                        					<div class="J_ProgressBar_{id}"><s class="loading-icon"></s>上传中...</div>
                    					</div>
                    				<div class="status error-status">
                        				<p class="J_ErrorMsg_{id}">服务器故障，请稍候再试！</p></div>
                					</div>
                				<div class="imageUploader_menu"> <a href="javascript:void(0);" class="imageUploader_but1" id="imageUploader_but1_{id}"  title="左移">&nbsp;</a><a href="javascript:void(0);" class="imageUploader_but2" title="右移"  id="imageUploader_but2_{id}">&nbsp;</a><a href="javascript:void(0);" class="imageUploader_del" id="imageUploader_del_{id}" title="删除" >&nbsp;</a> </div>
            				</li>
    					</script>
						</ul>
					</div>
					<c:forEach var="item" items ="${multiplePictureList}">
						<input type="hidden" name="multiplePictureListItem" value="${item.url}">
					</c:forEach>
				</div>
				<!--宝贝描述-->
				<div class="edit-cont">
					<span class="rse-pro-tit"><em class="rse-pro-tit-red"></em>宝贝描述：</span>
					<div class="rse-pro-tit-cet">
						<textarea rows="3" cols="30" style="width:780;height:410;font-size:14px;" 
							id="description" name="description" >${product.description}</textarea>
					<%-- <img src="${CONTEXT }images/member/bewrite.jpg" width="780" height="410" /></div> --%>
				<!--弹出层-->
				
				<!--弹出层-->
				</div>
				<!--所在农批-->
				<div class="edit-cont">
					<span class="rse-pro-tit"><em class="rse-pro-tit-red">*</em>所在农批市场：</span>
					<div class="i-app-far-mar">${marketName} </div>
				</div>
				<!--联系地址-->
				<div class="edit-cont">
					<span class="rse-pro-tit">产地：</span>
					<div class="con-pro-cit-area">
						<select class="i-app-far-mar-c3" id="originProvinceId" name="originProvinceId" onchange="changeCity(this)">
							<c:forEach var="item" items ="${initOriginProvinceList}" varStatus="status">
									<option value="${item.areaID}"<c:if test="${product.originProvinceId == item.areaID}">selected</c:if> >${item.area}</option>
							</c:forEach>
						</select>
						<select class="i-app-far-mar-c3" id="originCityId" name="originCityId" onchange="changeArea(this)">
							<c:forEach var="item" items ="${initOriginCityList}" varStatus="status">
									<option value="${item.areaID}"<c:if test="${product.originCityId == item.areaID}">selected</c:if> >${item.area}</option>
							</c:forEach>
						</select>
						<select class="i-app-far-mar-c3" id="originAreaId" name="originAreaId" onchange="">
							<c:forEach var="item" items ="${initOriginAreaList}" varStatus="status">
									<option value="${item.areaID}"<c:if test="${product.originAreaId == item.areaID}">selected</c:if> >${item.area}</option>
							</c:forEach>
						</select>
						<br/>
					</div>
					
				</div>
				<!--信息有效期-->
				<div class="edit-cont">
					<span class="rse-pro-tit"><em class="rse-pro-tit-red">*</em>信息有效期：</span>
					<div class="edit-cont-iffor">
						<input type="hidden" id="infoLifeDay" name="infoLifeDay" value="${product.infoLifeDay}" >
						<ul class="if-foreverchose">
							<li><a href="javascript:void(0)" onclick="changeInfoLifeDay(this, 7)" <c:if test='${product.infoLifeDay ==7}'>class="cur"</c:if>>7天</a></li>
							<li><a href="javascript:void(0)" onclick="changeInfoLifeDay(this, 15)" <c:if test='${product.infoLifeDay ==15}'>class="cur"</c:if>>15天</a></li>
							<li><a href="javascript:void(0)" onclick="changeInfoLifeDay(this, 30)" <c:if test='${product.infoLifeDay ==30}'>class="cur"</c:if>>30天</a></li>
						</ul>
					</div>
					
				</div>
		
			</div>
		
			<div class="tab_box-cet">
				<div class="dq-opt-next"><a href="javascript:void(0);" class="dq-opt-next-btn">同意协议条款，我要发布</a></div>
			</div>
		</div>
	</form>
	<div class="clear"></div>
	</div>
</div>
	
	<!--简版底部 star-->
	
	<!--简版底部 end-->

<script>

function changeCity(obj){
	var originProvinceId = $("#originProvinceId").val();
	var option = "";
	$.ajax({  
		url : CONTEXT+'userCenter/product/queryCity/' + originProvinceId,// 跳转到 action  
		type:'post',  
		dataType:'json',  
		success:function(data) {
			$("#originCityId").empty();
		   	for(var index in data){
		    	option = $('<option value=""></option>');
		    	option.val(data[index].areaID);
		    	option.text(data[index].area);
		    	$("#originCityId").append(option);
		    }
		   	changeArea(document.getElementById("originCityId"));
		},  
		error : function() {  
		}  
	});
}
function changeArea(obj){
	var originCityId = $("#originCityId").val();
	var option = "";
	$.ajax({  
		url : CONTEXT+'userCenter/product/queryArea/' + originCityId,// 跳转到 action  
		type:'post',  
		dataType:'json',  
		success:function(data) {
			$("#originAreaId").empty();
		   	for(var index in data){
		    	option = $('<option value=""></option>');
		    	option.val(data[index].areaID);
		    	option.text(data[index].area);
		    	$("#originAreaId").append(option);
		    }
		   	//alert($("#originAreaId").val() + " - " +  $("#originAreaId :selected").text());
		},  
		error : function() {  
		}  
	});
}


function changeUnit(obj){
	$("#priceUnitSpan").text("元/"+$("#unit option:selected").text());
}

var pictureUploadUrl = CONTEXT+'userCenter/uploadProductPic/';

$('.rse-pro-tt').change(function(){
	isMarketChange($(this))

});
var isMarketChange = function(ele){
	var val = $(ele).val();
	if(val==0){
		$(".edit-cont-i").show();
		$(".edit-cont-sel").hide();
	}else{
		$(".edit-cont-i").hide();
		$(".edit-cont-sel").show();
		var len = countRow("priceTable");
		if (len < 1){
			addPriceRow();
		}
	}
}


function init(){
	
	var unit = "${product.unit}";
	$("#unit").val(unit);
	
	$("#priceUnitSpan").text("元/"+$("#unit option:selected").text());
	
	var stockCount = "${product.stockCount}";
	$("#stockCount").val(fixNum(stockCount));
	
	var priceType="${product.priceType}";
	$("#priceType").val(priceType);
	var price = "${product.price}";
	price = fixNum(new Number(price));
	if (0 == priceType){
		$("#price").val(price);
		$(".edit-cont-i").show();
		$(".edit-cont-sel").hide();
	}else if (1 == priceType){
		$(".edit-cont-i").hide();
		$(".edit-cont-sel").show();
		
	}
	//isMarketChange($('.rse-pro-tt'));
}

var multiplePictureArr = $("input[name='multiplePictureListItem']");
var multipicStrng = new Array();
for(var i = 0; i < multiplePictureArr.length; i++){
	var initurl = '${imgHostUrl}' + multiplePictureArr[i].value ;
	multipicStrng[i] = {"id" : "file-"+i,"dataOriginalUrl" : initurl, "url": initurl};
}  
$(document).ready(function(){
		
	init();
	
	 var initurl2 = '${imgHostUrl}' + $("#J_Urls_App").val();
     var filesStr = '[{"dataOriginalUrl":"'+initurl2+'","url":"'+initurl2+'"}]';
     var urlObj = $.parseJSON(filesStr);
     initUploadSignle("upload_btn_app",pictureUploadUrl, "picture_queen_app", "J_Urls_App");
     
	//initUploadModule("upload_btn_app", pictureUploadUrl, "picture_queen_app", "J_Urls_App", 1);
	
	
	initUploadModule("upload_btn_multiAngle",pictureUploadUrl,  "picture_queen_MultiAngle", "J_Urls_MultiAngle", 4);
	//initUploadModule("upload_btn_multiAngle",pictureUploadUrl, "picture_queen_MultiAngle", "J_Urls_MultiAngle", 4);
	
	//编辑器
 	KindEditor.create('textarea[name="description"]', {
		cssPath : CONTEXT+'js/kindeditor-4.1.10/plugins/code/prettify.css',
		uploadJson: CONTEXT+'js/kindeditor-4.1.10/jsp/upload_json.jsp',
		fileManagerJson : CONTEXT+'js/kindeditor-4.1.10/jsp/file_manager_json.jsp',
		allowFileManager: true,
		allowImageUpload : true,
		//把编辑器里的内容同步到textarea @_@ @_@ @_@  
		afterBlur: function(){this.sync();},
		afterChange:function(){
			var editor = this;
			var limit = 5000;
			if(editor.count('text') > limit){
				//alert("详细信息最多可输入5000字符(包含图片路径等元素的长度)");
				/* var strValue = editor.text();
				strValue = strValue.substring(0,limit);
			    editor.text(strValue);  */
			}
		}
	}); 
		
    var filesStr = '';
    if(filesStr != ''){
        var fileList = eval("("+  filesStr + ")");
        for (var i = 0; i < fileList.length; i++) {
            console.log(fileList[i].dataOriginalUrl)
            $("#uploadContainer").append("<input name=\"pictureUrl"+i+"\" id=\"url+"+i+"\" type=\"hidden\" value=\""+fileList[i].dataOriginalUrl+"\" />");
        }
     }
     
    //发布
	$(".dq-opt-next-btn").click(function () {
				publish();
			});
});


function publish(){	
	if (!check()) {
		return false;
	}
	 $.ajax( {  
		    url : CONTEXT+'userCenter/product/edit',// 跳转到 action  
		    data : $('#productEditForm').serialize(),  
		    type:'post',  
		    dataType:'json',  
		    success:function(data) {  
				if (data.status == 1) {
	 				layer.open({
						type: 1,
					    title: "产品发布", //显示标题
						area:["340px","230px"],
						cusClass:'ddd',
						btn:["继续发布产品","查看发布产品"],
						btn1:function(){
							window.location.href = CONTEXT+'userCenter/product/chooseCategory/';
						},
						btn2:function(){
							//var productId = $("#productId").val();
							window.location.href = CONTEXT+'userCenter/product/saleList/4';
						},
					    content:'<div class="top10-al">修改成功</div>', //捕获的元素
					    onClose: function(index){
					    	layer.close(index);
					    }

					}); 
				} else {
					alert("添加产品失败！");
				}
		     },  
		     error : function() {  
		    	 alert("服务器故障, 添加产品失败");
		     }  
		});
	
}
Array.prototype.baoremove = function(dx) 
{ 
    if(isNaN(dx)||dx>this.length){return false;} 
    this.splice(dx,1); 
} 
function initUploadModule(uploadBtn, uploadUrl, queueId, JUrls, pictureCountLimit, filesStr, certification){
	var config_mutiple = {
	        galleryUrl : CONTEXT+"js/uploader/",//控件静态地址
	        uploadBtn : uploadBtn,//初始的button
	        queueId : queueId,//图片装载容器id
	        JUrls : JUrls,//成功后返回url参数写入id
	        action : uploadUrl ,//上传地址
	        maxSize:2048,
	        imgUrlPrefix : '${imgHostUrl}',
	        max : pictureCountLimit,//允许上传个数
	        type :"ajax",//上传类型
	        filesStr : filesStr,//此处是附加参数，已经上传需要第二次修的图片参数
	        certification : certification//此处是附加参数，已经上传需要第二次修，是否可以修改
	};
	
	gdKissyMultipleUploader.init(config_mutiple ,function(uploader){
	     var filesStr = config_mutiple.filesStr;
	     var certification = config_mutiple.certification;
	     if(filesStr != ''&&filesStr!=undefined){
	        //var fileList = eval("("+  filesStr + ")");
	        
	        gdKissyMultipleUploader.addFiles(filesStr,uploader);
	        	        
	        var str='';
	        for (var i = 0; i < filesStr.length; i++) {	        	
	        		str+=filesStr[i].url+',';
	        	
	            //$("#"+JUrls).parent().append("<input name=\""+JUrls+i+"\" id=\""+JUrls+i+"\" type=\"hidden\" value=\""+filesStr[i].url+"\" />");
	        	
	        }
	        //console.log(str);
	        $("#"+JUrls).val(str);
	        uploadedUrl = str;
	        //if(){}
	        if(certification == 0){
	                $("#"+JUrls).parent().find(".file-input").attr("disabled","disabled");
	        }else{
	        	/**可以修改时注册删除事件**/
	        	
	        }
	     }
	},function(url){
 	    if(url!='' && typeof(url!='undefined')){
	        var urlarray = url.split(",");
	        for (var i = 0; i < urlarray.length; i++) {
	            $("#"+JUrls).parent().append("<input name=\""+JUrls+i+"\" id=\""+JUrls+i+"\" type=\"hidden\" value=\""+urlarray[i]+"\" />");
	        }
	         
	        
	    }
	});
}

function initUploadSignle(uploadBtn, uploadUrl, queueId, JUrls, pictureCountLimit, filesStr){
	var config_mutiple = {
	        galleryUrl : CONTEXT+"js/uploader/",//控件静态地址
	        uploadBtn : uploadBtn,//初始的button
	        queueId : queueId,//图片装载容器id
	        JUrls : JUrls,//成功后返回url参数写入id
	        action : uploadUrl ,//上传地址
	        maxSize:2048,
	        imgUrlPrefix : '${imgHostUrl}',
	        max : pictureCountLimit,//允许上传个数
	        type :"ajax",//上传类型
	        filesStr : filesStr//此处是附加参数，已经上传需要第二次修的图片参数
	};
	gdKissySingleUploader.init(config_mutiple ,function(uploader){
	     var filesStr = config_mutiple.filesStr;
	     var certification = config_mutiple.certification;
	     if(filesStr != ''&&filesStr!=undefined){
	        //var fileList = eval("("+  filesStr + ")");
	        
	        gdKissySingleUploader.addFiles(filesStr,uploader);
	        
	        if(certification == 0){
	                $("#"+JUrls).parent().find(".file-input").attr("disabled","disabled");
	        }else{
	        	/**可以修改时注册删除事件**/
	        	$(".form-context").delegate(".imageUploader_del","click",function(){
				    $(this).parents("li").get(0).remove();
				    var originalUrl = $(this).parent().siblings().find("a img").attr("data-original-url");
				    $("input[name*='"+JUrls+"']").each(function(){
				        if($(this).val()==originalUrl){
				            $(this).val("");
				        }
				    });
				});
	        }
	        
	     }
	},function(url){
	});
}
/* //图片上传
function initUploadModule(uploadBtn, uploadUrl, queueId, JUrls, pictureCountLimit){
	var config_mutiple = {
	        galleryUrl : CONTEXT + "v1.0/js/uploader/",
	        uploadBtn : uploadBtn,
	        queueId : queueId,
	        JUrls : JUrls,
	        action : uploadUrl ,
	        imgUrlPrefix : "temp/",
	        max : pictureCountLimit,
	        type :"ajax"
	};
	gdKissyMultipleUploader.init(config_mutiple ,function(uploader){
	     var filesStr = '';
	     var certification = '';
	     if(filesStr != ''){
	        var fileList = eval("("+  filesStr + ")");
	        
	        gdKissyMultipleUploader.addFiles(fileList,uploader);
	        
	        if(certification == 0){
	                $("#uploadContainer").find(".file-input").attr("disabled","disabled");
	        }
	     }
	},function(url){
 	    if(url!='' && typeof(url!='undefined')){
	        var urlarray = url.split(",");
	        for (var i = 0; i < urlarray.length; i++) {
	            $("#picContainer").append("<input name=\"pictureUrl\" id=\"url+"+i+"\" type=\"hidden\" value=\""+urlarray[i]+"\" />");
	        }
	        
	    } 
	});
} */
	
	
/* 	$(".multPic-box").delegate(".imageUploader_del","click",function(){
	    $(this).parents("li").remove();
	    var originalUrl = $(this).parent().siblings().find("a img").attr("data-original-url");
	    $("input[name*='pictureUrl']").each(function(){
	        if($(this).val()==originalUrl){
	            $(this).val("");
	        }
	    });
	}); */
	
function changeInfoLifeDay(obj, number){
	$("a.cur").removeClass("cur");
	$(obj).addClass("cur");
	$("#infoLifeDay").val(number);
}


function addPriceRow(){
	var len = countRow("priceTable");
	if (len > 0){
		 if(len>=3){
			 alert("最多只能添加三个区间价格！");
			 return false;
		 }
		var buyCountStarts=$("input[alias='CbuyCountStart']"); 
		var buyCountEnds=$("input[alias='CbuyCountEnd']"); 
		var prices=$("input[alias='Cprice']"); 
		 for (var i = 0; i < len ; i++){
			if (!buyCountStarts[i].value || !buyCountEnds[i].value || !prices[i].value ){
				alert("存在未填写内容的行, 不能添加新行");
				return false;
			}
		}
	}
	var trId="priceDtoList_"+len;
	
	var html = 	'<tr id="'+trId+'" class="rse-pro-fl-cp2">' ;
	html+='<td><input class="rse-pro-interval" type="text" id="priceDtoList['+len+'].buyCountStart" name="priceDtoList['+len+'].buyCountStart" alias="CbuyCountStart" value=""  maxlength="9"></td>';
	html+='<td><input class="rse-pro-interval" type="text" id="priceDtoList['+len+'].buyCountEnd" name="priceDtoList['+len+'].buyCountEnd" alias="CbuyCountEnd" value="" maxlength="9" ></td>';
	html+='<td><input class="rse-pro-interval" type="text" id="priceDtoList['+len+'].price" name="priceDtoList['+len+'].price" alias="Cprice" value="" maxlength="11" ></td>';
	html+='<td></td>';
	/* html+='<td><label>截止起订量为空表示大于当前行起始起订量者,均使用当前行价格</label></td>'; */
	html+='<td><span><a href="javascript:void(0)" onClick="deletePriceRow(\''+trId+'\')">-删除</a></span></td>';
	html+='</tr>';
	
	$("#priceTable").append(html);  
	$("#priceTable").show();
}

/**
计算多价列表中的价格区间的行数
减去表头所占的一行
*/
function countRow(tableId){
	 return document.getElementById(tableId).getElementsByTagName('tr').length-1;
}

function deletePriceRow(rowId){
	$("#"+rowId).remove();
}

function checkDecimal(strVal,validNum, savingNum){
	strVal = strVal + "";
	var len = strVal.length;
	var index = strVal.indexOf(".");
	//含有小数点
	if ( index != -1){
		//数值长度过长
		if (len > (validNum +1) ){
			return 1;
		}
		var flen = strVal.substring(0,index).length;
		if (flen > (validNum - savingNum)){
			//warningMessage("数值长度过长");
			return 1;
		}
		var tlen = strVal.substring(index+1).length;
		//"小数点后位数过长"
		if (tlen > savingNum){
			return 2;
		}
	}else{
		//"数值长度过长"
		if (len > validNum - savingNum  ){
			return 1;
		}
	}
	return 0;
}

function checkRow(){
	
	var starts=$("input[alias='CbuyCountStart']"); 
	var ends=$("input[alias='CbuyCountEnd']"); 
	var prices=$("input[alias='Cprice']"); 
	var len = starts.length;
	if (len < 1){
		alert("请添加价格区间以维护区间价格");
		return false;
	}
	
	for (var i = 0; i < len ; i++){
		//价格监测
		if (!prices[i].value && isNaN(prices[i].value) ){
			alert("第" + (i+1) + "行的数据输入有误, 价格必须为数值型");
			return false;
		}
		if (!prices[i].value && parseInt(prices[i].value) < 0){
			alert("第" + (i+1) + "行的数据输入有误, 价格不能为负数");
			return false;
		}
		if (checkDecimal(prices[i].value, 10, 2) == 1){
			alert("第" + (i+1) + "行的价格输入有误, 价格的数值长度过长,整数部分最多输入8位和小数点后最多2位");
			return false;
		} else if (checkDecimal(prices[i].value, 10, 2) == 2){
			alert("第" + (i+1) + "行的价格输入有误, 小数点后位数过长(小数点后保留两位)");
			return false;
		}
		//起订量监测
		if (!(starts[i].value) || ( !(ends[i].value) && i != len-1 )){
			alert("第" + (i+1) + "行起订量不能为空");
			return false;
		}
		if (isNaN(starts[i].value) || isNaN(ends[i].value)){
			alert("第" + (i+1) + "行的数据输入有误, 起订量必须为数值型");
			return false;
		}
		if ((starts[i].value - ends[i].value)>=0 && $.trim(ends[i].value) != ""){
			alert("第" + (i+1) + "行的数据输入有误, 截止起订量必须大于起始起订量");
			return false;
		}
		
		if (checkDecimal(starts[i].value, 8, 2) == 1 || checkDecimal(ends[i].value, 8, 2) == 1 ){
			alert("第" + (i+1) + "行的起订量输入有误, 数值长度过长,整数部分最多输入6位和小数点后最多2位");
			return false;
		}else if (checkDecimal(starts[i].value, 8, 2) == 2 || checkDecimal(ends[i].value, 8, 2) == 2 ){
			alert("第" + (i+1) + "行的起订量输入有误, 小数点后位数过长(小数点后保留两位)");
			return false;
		}
	}
	if (len > 1){
		for( var j=0; j < len-1; j++){
			if((ends[j].value - starts[j+1].value)>=0){
				alert("第" + (j+1) + "行以及第"+ (j+2)+ "行的数据输入有误, 第"+(j+2)+"行起始起订量必须大于第"+(j+1)+"行截止起订量");
				return false;
			}
		}
	}
	return true;
}

function isSpecialChar(value){
	var regex = /[~!@$%^&_+<>?:"{},\\;'[\]]/im;
	//regex = /[`~!@#$%^&*()+=|\\\]\[\]\{\}:;'\,.<>/?]{1,}/; 
	return regex.test(value);
}

//判断中英混合字符的字节数, 一个中文字符两个字节
function cnLength(Str) {   
    var escStr = escape(Str);   
    var numI = 0;   
    var escStrlen = escStr.length;   
    for (var i = 0; i < escStrlen; i++)   
        if (escStr.charAt(i) == '%')   
        if (escStr.charAt(++i) == 'u')   
        numI++;   
    return Str.length + numI;   
} 

function check(){
	if ($.trim($("#productName").val()) == ""){
		alert("商品名称不能为空");
		return false;
	}
/* 	if (isSpecialChar($("#productName").val())){
		alert("商品名称包含特殊字符");
		return false;
	}  */
	if (cnLength($("#productName").val()) > 60){
		alert("商品名称过长");
		return false;
	}
	if ($.trim($("#stockCount").val()) == ""){
		alert("供应量不能为空");
		return false;
	}
 	if (isNaN($("#stockCount").val())){
		alert("供应量必须是数字");
		return false;
	}
	if ($("#stockCount").val() <= 0){
		alert("供应量必须大于0");
		return false;
	} 
	/*
	if (!/^[\d]+$/.test($("#stockCount").val())){
		alert("供应量必须是整数");
		return false;
	} */
	
 	if (checkDecimal($("#stockCount").val(), 8, 2) == 1){
		alert("供应量输入有误,数值长度过长,整数部分最多输入6位和小数点后最多2位");
		return false;
	} else if (checkDecimal($("#stockCount").val(), 8, 2) == 2){
		alert("供应量输入有误, 小数点后位数过长(小数点后保留两位)");
		return false;
 	}
	
	if ($("#priceType").val()=='0') {
		/* 		//单价检测
		if ($.trim($("#price").val()) == ""){
			alert("单价不能为空");
			return false;
		} */
		if ($("#price").val() && isNaN($("#price").val())){
			alert("单价必须是数字");
			return false;
		}
		if ($("#price").val() < 0){
			alert("单价不能为负数");
			return false;
		}
		if (checkDecimal($("#price").val(), 10, 2) == 1){
			alert("单价输入有误,数值长度过长,整数部分最多输入8位和小数点后最多2位");
			return false;
		} else if (checkDecimal($("#price").val(), 10, 2) == 2){
			alert("单价输入有误, 小数点后位数过长(小数点后保留两位)");
			return false;
		}
	}else {
		//多价检测
		$("#price").val("");//提交数据时，单价必须要有值，否则后台无法注入
		if (!checkRow()){
			return false;
		}
	}
	if (cnLength($("#description").val()) > 5000){
		alert("详细信息最多可输入5000字符(包含图片路径等元素的长度)");
		return false;
	}
	//不上传则不修改图片
	if ( $.trim($("input[name='appPicture']").val()) == ""){
		
		if(window.confirm('不上传图片则使用原来App图片')){
         }else{
            return false;
            }
		
		//alert("不上传图片则使用原来App图片");
	}
	if ( $.trim($("input[name='multiplePicture']").val()) == ""){
		if(window.confirm('不上传图片则使用原多角度图')){
         }else{
            return false;
         }
		//alert("不上传图片则使用原多角度图");
	} 
	return true;
}
function fixNum(num){
	var numStr = num + "";
	var index = numStr.indexOf(".");
	if ( index != -1){
			var savingNum = numStr.substring(index+1).length;
			return (num * Math.pow(10, savingNum))/ Math.pow(10, savingNum)
	}
	return num;
}
</script>
	
</html>