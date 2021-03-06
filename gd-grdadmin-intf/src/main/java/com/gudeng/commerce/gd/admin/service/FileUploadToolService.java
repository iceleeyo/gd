package com.gudeng.commerce.gd.admin.service;


/**
 * 图片上传接口
 * @author 李冬
 * @time 2015年10月16日 下午3:22:59
 */
public interface FileUploadToolService {

	/**
	 * 上传图片，同时根据上传的图片生成多个不同尺寸的图片，并返回上传后的图片的路径.目前提供的尺寸包括650*650,400*400,160*160,
	 * 120*120,60*60,见配置文件upload.properties
	 * 
	 * @param data
	 *            图片二进制流
	 * @param fileName
	 *            图片名称
	 * @return 
	 *         返回图片上传后的地址：http://wwww.domain.com/img/xxx.jpg,注：其他尺寸的图片地址为http://wwww
	 *         .domain.com/img/xxx650_650.jpg,http://wwww
	 *         .domain.com/img/xxx400_400.jpg等
	 * @throws Exception
	 * @author 李冬
	 * @time 2015年10月16日 上午8:55:40
	 */
	public String uploadImgfile(byte[] data, String fileName) throws Exception;
}