package com.gudeng.commerce.info.admin.util;

import java.util.UUID;
/**
 * 公用ID生成类
 * @author 
 *
 */
public class IdGenerateUtil {
	
	
	public static String create32UUID(){
		
		return UUID.randomUUID().toString().replace("-", "");
	}
}
