<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<div class="logo-box" style="margin-left: 40px; width:480px;">
	<img src="${CONTEXT}images/header_bg.jpg" alt="谷登" style="margin-left: -40px;" >
	<img src="${CONTEXT}images/ico3_gdeng.png" alt="谷登" style="margin-top: -85px;">
	<h1><div class="date" style="font-size:16px; margin-top: 4px;">2016年3月7日 星期一</div></h1>
</div>
<div class="u-box">
	<div class="loginWelcome">${systemUserCode }
		您好！ <a href="${CONTEXT}sys/loginOut" id="loginOut">退出 </a> <span style="display: inline-block;margin-left: 13px;">|</span>
		<a style="margin-left: 10px;" href="javascript:editPassword()">修改密码</a>
	</div>
</div>
