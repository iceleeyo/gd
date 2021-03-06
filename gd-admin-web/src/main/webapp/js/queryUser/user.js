
$(document).ready(function(){
	//数据加载
	$('#userdg').datagrid({
		url:CONTEXT+'queryUser/query',
		//width: 1000,
		height: 'auto',
		nowrap:true,
		toolbar:'#usertb',
		pageSize:10,
		rownumbers:true,
		pagination:true,
		fitColumns:true,
		fit:true,
		onLoadSuccess:function(){
			$("#userdg").datagrid('clearSelections');
		},
		columns:[[

			{field:'id',title:'',width:70,checkbox:true},
			{field:'mobile',title:'推荐人手机号',width:100,align:'center'},
			{field:'userName',title:'推荐人姓名',width:100,align:'center'},
			{field:'recommendedMobile',title:'被推荐人手机号',width:100,align:'center'},
			{field:'recommendedUserName',title:'被推荐人姓名',width:100,align:'center'},
			{field:'levelType',title:'被推荐人角色',width:100,align:'center'},
			{field:'userType',title:'用户类型',width:100,align:'center'},
			{field:'companyName',title:'公司名称',width:100,align:'center'},
			{field:'linkMan',title:'联系人',width:100,align:'center'},
			{field:'carCount',title:'发布车辆数量',width:100,align:'center'},
			{field:'carLineCount',title:'发布线路数量',width:100,align:'center'},
			{field:'callCount',title:'被推荐人拨号次数',width:100,align:'center'},
			{field:'createUserTime',title:'被推荐人注册时间',width:100,align:'center'},
			{field:'areaName',title:'所属区域',width:100,align:'center'},
			{field:'nstStatus',title:'认证状态',width:100,align:'center'}
			
		]]
	});
	//分页加载
	$("#userdg").datagrid("getPager").pagination({
		pageList: [10,20,50,100]
	});

});




	// 查询按钮,根据条件查询
	$('#icon-search').click(function(){
        var queryParams = $('#userdg').datagrid('options').queryParams;
        queryParams.areaName =$('#userSearchForm #areaName').val();
		queryParams.mobile =  $('#userSearchForm #mobile').val();
		queryParams.recommendedMobile =  $('#userSearchForm #recommendedMobile').val();
		queryParams.startDate =  $('#userSearchForm #queryStartDate').val();
		queryParams.endDate =  $('#userSearchForm #queryEndDate').val();

		queryParams.queryCarStartDate =  $('#userSearchForm #queryCarStartDate').val();
		queryParams.queryCarEndDate =  $('#userSearchForm #queryCarEndDate').val();

		queryParams.queryCarLineStartDate =  $('#userSearchForm #queryCarLineStartDate').val();
		queryParams.queryCarLineEndDate =  $('#userSearchForm #queryCarLineEndDate').val();
		queryParams.nstStatus =  $('#userSearchForm #nstStatus').val();

				var queryUrl=CONTEXT+'queryUser/query?areaName='+queryParams.areaName+"&mobile="+queryParams.mobile
		+"&nstStatus="+queryParams.nstStatus		+"&startDate="+queryParams.startDate+"&endDate="+queryParams.endDate
		+"&queryCarStartDate="+queryParams.queryCarStartDate+"&queryCarEndDate="+queryParams.queryCarEndDate
		+"&queryCarLineStartDate="+queryParams.queryCarLineStartDate+"&queryCarLineEndDate="+queryParams.queryCarLineEndDate;
		$('#userdg').datagrid({
			url:queryUrl,
			//width: 1000,
			height: 'auto',
			nowrap:true,
			toolbar:'#usertb',
			pageSize:10,
			rownumbers:true,
			pagination:true,
			fitColumns:true,
			fit:true,
			columns:[[
			      	{field:'id',title:'',width:70,checkbox:true},
					{field:'mobile',title:'推荐人手机号',width:100,align:'center'},
					{field:'userName',title:'推荐人姓名',width:100,align:'center'},
					{field:'recommendedMobile',title:'被推荐人手机号',width:100,align:'center'},
					{field:'recommendedUserName',title:'被推荐人姓名',width:100,align:'center'},
					{field:'levelType',title:'被推荐人角色',width:100,align:'center'},
					{field:'userType',title:'用户类型',width:100,align:'center'},
					{field:'companyName',title:'公司名称',width:100,align:'center'},
					{field:'linkMan',title:'联系人',width:100,align:'center'},
					/*{field:'carNumber',title:'车牌号（被推荐人）',width:100,align:'center'},*/
					{field:'carCount',title:'发布车辆数量',width:100,align:'center'},
					{field:'carLineCount',title:'发布线路数量',width:100,align:'center'},
					{field:'callCount',title:'被推荐人拨号次数',width:100,align:'center'},
					{field:'createUserTime',title:'被推荐人注册时间',width:100,align:'center'},
					{field:'areaName',title:'所属区域',width:100,align:'center'},
					{field:'nstStatus',title:'认证状态',width:100,align:'center'}

					]]
		});
		//分页加载
		$("#userdg").datagrid("getPager").pagination({
			pageList: [10,20,50,100]
		});
	});


	//重置
	$('#btn-reset').click(function(){
		$('#userSearchForm')[0].reset();
	});

	//刷新按钮
	$('#icon-refresh').click(function(){
		$('#userSearchForm')[0].reset();
		$('#userdg').datagrid('options').pageNumber=1;//设置页码初始值为1
		var url ='queryUser/query?areaName='+"&mobile="+"&recommendedMobile="
		+"&startDate="+"&endDate="
		+"&queryCarStartDate="+"&queryCarEndDate="
		+"&queryCarLineStartDate="+"&queryCarLineEndDate=";
		$('#userdg').datagrid({url:CONTEXT+url});
		//重启导出功能
		disableExport = false ;
	});

	//数据导出
	$("#exportData").click(function(){

		    var queryParams = $('#userdg').datagrid('options').queryParams;
		    queryParams.areaName =$('#userSearchForm #areaName').val();
			queryParams.mobile =  $('#userSearchForm #mobile').val();
			queryParams.recommendedMobile =  $('#userSearchForm #recommendedMobile').val();
			queryParams.startDate =  $('#userSearchForm #queryStartDate').val();
			queryParams.endDate =  $('#userSearchForm #queryEndDate').val();

			queryParams.queryCarStartDate =  $('#userSearchForm #queryCarStartDate').val();
			queryParams.queryCarEndDate =  $('#userSearchForm #queryCarEndDate').val();
			queryParams.queryCarLineStartDate =  $('#userSearchForm #queryCarLineStartDate').val();
			queryParams.queryCarLineEndDate =  $('#userSearchForm #queryCarLineEndDate').val();
			queryParams.nstStatus =  $('#userSearchForm #nstStatus').val();

var paramList = 'areaName='+queryParams.areaName+"&mobile="+queryParams.mobile
			+"&recommendedMobile="+queryParams.recommendedMobile +"&startDate="+queryParams.startDate+"&endDate="+queryParams.endDate
			+"&queryCarStartDate="+queryParams.queryCarStartDate+"&queryCarEndDate="+queryParams.queryCarEndDate
			+"&queryCarLineStartDate="+queryParams.queryCarLineStartDate+"&queryCarLineEndDate="+queryParams.queryCarLineEndDate
			+"&nstStatus="+queryParams.nstStatus;

			$.ajax({
				url: CONTEXT+'queryUser/checkExportParams',
				data : queryParams,
				type:'post',
				success : function(data){
					//检测通过
					if (data && data.status == 1){
						if (!disableExport){
							slideMessage("数据正在导出中, 请耐心等待...");
							disableExport = true ;
							//启动下载
							$.download(CONTEXT+'queryUser/exportData',paramList,'post' );
						}else{
							slideMessage("已进行过一次数据导出,导出功能已禁用,勿频繁点击导出,若要重新启用导出,请点击刷新按钮...");
						}
					}else{
						warningMessage(data.message);
					}
				},
				error : function(data){
					warningMessage(data);
				}
			});
/*		window.location.href=CONTEXT+'queryUser/exportData?areaName='+queryParams.areaName+"&mobile="+queryParams.mobile
		+"&recommendedMobile="+queryParams.recommendedMobile		+"&startDate="+queryParams.startDate+"&endDate="+queryParams.endDate
		+"&queryCarStartDate="+queryParams.queryCarStartDate+"&queryCarEndDate="+queryParams.queryCarEndDate
		+"&queryCarLineStartDate="+queryParams.queryCarLineStartDate+"&queryCarLineEndDate="+queryParams.queryCarLineEndDate;
		*/
	});


	jQuery.download = function(url, data, method){
		// 获得url和data
	    if( url && data ){
	        // data 是 string或者 array/object
	        data = typeof data == 'string' ? data : jQuery.param(data);
	        // 把参数组装成 form的  input
	        var inputs = '';
	        jQuery.each(data.split('&'), function(){
	            var pair = this.split('=');
	            inputs+='<input type="hidden" name="'+ pair[0] +'" value="'+ pair[1] +'" />';
	        });
	        // request发送请求
	        jQuery('<form action="'+ url +'" method="'+ (method || 'post') +'">'+inputs+'</form>')
	        	.appendTo('body').submit().remove();
	    };
	};
	var disableExport = false ;